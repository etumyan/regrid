import './DataRow.scss';

import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import { Column, DataSourceItem } from '../DataGrid';
import { DataCell } from '../Cell';

interface DataRowProps {
  cells: Column[];
  data: DataSourceItem;
  selected?: boolean;
  onClick?(rowData: any): void;
}

export const DataRow: FunctionComponent<DataRowProps> = ({
  cells, data, selected = false, onClick
}) => {
  return (
    <div
      className={classNames(
        'regrid-row',
        'regrid-row_type_data',
        { 'regrid-row_selected': selected }
      )}
      onClick={onClick && onClick.bind(undefined, data)}>
      {cells.map(cell => (
        <DataCell
          key={cell.key}
          id={cell.key}
          content={data[cell.key]}
          width={cell.width}
          align={cell.align}
          render={cell.render}
        />
      ))}
    </div>
  );
};

