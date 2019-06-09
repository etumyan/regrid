import './Body.scss';

import React, { FunctionComponent, useState, useEffect } from 'react';

import { hasElementHorizontalScrollbar } from '../utils';
import { Column, Sorting, DataSource, DataSourceItem } from './DataGrid';
import { DataRow } from './Row';

interface BodyProps {
  dataSource: DataSource;
  sorting?: Sorting;
  pageSize: number;
  currentPageIndex: number;
  primaryKey: Column['key'];
  columns: Column[];
  selectedRows: Set<Column['key']>;
  onRowClick: (key: Column['key']) => void;
}

export const Body: FunctionComponent<BodyProps> = ({
  dataSource,
  sorting,
  pageSize,
  currentPageIndex,
  primaryKey,
  columns,
  selectedRows,
  onRowClick
}) => {
  const [hasScrollbar, setHasScrollbar] = useState(false);

  useEffect(() => {
    setHasScrollbar(hasElementHorizontalScrollbar('.regrid-body'));
  });

  const offset = pageSize * currentPageIndex;
  const rows = [...dataSource].sort((a, b) => sort(a, b, sorting)).slice(
    offset, offset + pageSize
  ).map(row => (
    <DataRow
      key={row[primaryKey]}
      cells={columns}
      data={row}
      selected={selectedRows.has(row[primaryKey])}
      onClick={onRowClick.bind(
        undefined,
        primaryKey ? row[primaryKey] : undefined
      )}
    />
  ));

  return (
    <div className="regrid-body">
      <div className="regrid-body__inner">
        {rows.length ? rows : <div className="no-data">No data</div>}
        <DataRow
          cells={columns.map(column => ({ ...column, render: undefined }))}
          data={[]}
        />
      </div>
    </div>
  );
};

function sort(a: DataSourceItem, b: DataSourceItem, sorting: any) {
  let result = 0;

  if (!sorting) return result;

  const sortBy = sorting[0];
  const sortOrder = sorting[1].toLowerCase();

  if (a[sortBy] > b[sortBy]) {
    result = sortOrder === 'desc' ? -1 : 1;
  }

  if (a[sortBy] < b[sortBy]) {
    result = sortOrder === 'desc' ? 1 : -1;
  }

  return result;
}
