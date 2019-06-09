import './HeaderRow.scss';

import React, { FunctionComponent } from 'react';
import { Sorting } from '../DataGrid';
import { RowProps } from './Row';
import { HeaderCell } from '../Cell';

interface HeaderRowProps extends RowProps {
  sorting?: Sorting;
}

export const HeaderRow: FunctionComponent<HeaderRowProps> = ({
  cells, data, sorting, onClick, onCellClick
}) => {
  return (
    <div
      className="regrid-row regrid-row_type_header"
      onClick={onClick}>
      {cells.map((cell, i) => (
        <HeaderCell
          key={cell.key}
          id={cell.key}
          content={data[i]}
          width={cell.width}
          align={cell.align}
          sorting={{
            enabled: cell.sortable,
            direction: sorting && sorting[0] === cell.key ? sorting[1] : undefined
          }}
          onClick={onCellClick}
        />
      ))}
    </div>
  );
};

