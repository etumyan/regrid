import '../styles/common.scss';
import './DataGrid.scss';

import React, { FunctionComponent, useState, useEffect } from 'react';
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';

import { getScrollbarWidth, hasElementVerticalScrollbar } from '../utils';
import { Header } from './Header';
import { Body } from './Body';
import { Pager } from './Pager/Pager';

export interface DataSourceItem {
  [key: string]: any;
}

export interface DataSource extends Array<DataSourceItem>{}

export interface Column {
  key: string;
  caption?: string;
  width?: string | number;
  align?: 'start' | 'center' | 'end';
  sortable?: boolean;
  render?: (value: any, rowData: DataSourceItem) => string;
  onSort?: (direction: 'asc' | 'desc') => void;
}

export interface Sorting {
  0: Column['key'];
  1: 'asc' | 'desc';
}

interface DataGridProps {
  dataSource: DataSource;
  primaryKey: Column['key'];
  columns: Column[];
  pageSize: number;
  width?: string | number;
  height?: string | number;
  sorting?: Sorting;
  selection?: {
    enabled: boolean;
    multiple?: boolean;
  };
  selectedRows?: Set<Column['key']>;
  onSort?: (sorting: Sorting) => void;
  onSelect?: (selectedRows: Set<Column['key']>) => void;
}

export const DataGrid: FunctionComponent<DataGridProps> = (props) => {
  const scrollbarWidth = getScrollbarWidth();
  const [hasScrollbar, setHasScrollbar] = useState(false);
  const [sorting, setSorting] = useState(props.sorting);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [selectedRows, setSelectedRows] = useState(new Set<string>());

  useEffect(() => {
    setHasScrollbar(hasElementVerticalScrollbar('.regrid-body'));
  });

  return (
    <div className="regrid" style={{ width: props.width, height: props.height }}>
      <ScrollSync>
        <div className="regrid-main">
          <ScrollSyncPane>
            <Header
              columns={props.columns}
              scrollbarWidth={scrollbarWidth}
              hasScrollbar={hasScrollbar}
              sorting={sorting}
              onCellClick={key => {
                headerCellClickHandler(key, props.columns, props.onSort, sorting, setSorting);
              }}
            />
          </ScrollSyncPane>
          <ScrollSyncPane>
            <Body
              dataSource={props.dataSource}
              primaryKey={props.primaryKey}
              columns={props.columns}
              sorting={sorting}
              pageSize={props.pageSize}
              currentPageIndex={currentPageIndex}
              selectedRows={selectedRows}
              onRowClick={dataRowClickHandler.bind(
                undefined, props.selection, selectedRows, setSelectedRows, props.onSelect
              )}
            />
          </ScrollSyncPane>
        </div>
      </ScrollSync>
      <Pager
        currentPageIndex={currentPageIndex}
        recordsPerPage={props.pageSize}
        totalRecords={props.dataSource.length}
        onChange={pageChangeHandler.bind(undefined, setCurrentPageIndex)}
      />
    </div>
  );
};

function sortHandler(sortBy: string, onSort: any, sorting?: Sorting, setSorting?: any) {
  let newSorting: Sorting | undefined;

  if (sorting && sorting[0] === sortBy) {
    if (sorting[1] === 'asc') {
      newSorting = [sortBy, 'desc'];
    } else if (sorting[1] === 'desc') {
      newSorting = undefined;
    }
  } else {
    newSorting = [sortBy, 'asc'];
  }

  onSort
    ? onSort(newSorting)
    : undefined;

  setSorting(newSorting);
}

function headerCellClickHandler(
  key: string, columns: Column[], onSort: any, sorting?: Sorting, setSorting?: any
) {
  const column = columns.find(column => column.key === key);

  if (!column || !column.sortable) return;

  sortHandler(key, onSort, sorting, setSorting);
}

function dataRowClickHandler(
  selection: any, selectedRows: any, setSelectedRows: any, onSelect: any, key: Column['key']
) {
  if (!selection.enabled) return;

  let selectedRowsNew: Set<Column['key']>;

  if (selection.multiple) {
    selectedRowsNew = new Set(selectedRows.values());
    selectedRowsNew.has(key) ? selectedRowsNew.delete(key) : selectedRowsNew.add(key);
  } else {
    selectedRowsNew = selectedRows.has(key) ? new Set() : new Set([key]);
  }

  onSelect
    ? onSelect(selectedRowsNew)
    : undefined;

  setSelectedRows(new Set(selectedRowsNew));
}

function pageChangeHandler(setCurrentPageIndex: any, index: number) {
  setCurrentPageIndex(index);
}
