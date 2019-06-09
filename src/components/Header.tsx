import './Header.scss';

import React, { FunctionComponent } from 'react';

import { Column, Sorting } from './DataGrid';
import { HeaderRow } from './Row/HeaderRow';

interface HeaderProps {
  columns: Column[];
  scrollbarWidth: number;
  hasScrollbar: boolean;
  sorting?: Sorting;
  onCellClick?: (key: Column['key'], e: React.MouseEvent<HTMLDivElement>) => void;
}

export const Header: FunctionComponent<HeaderProps> = ({
  columns, scrollbarWidth, hasScrollbar, sorting, onCellClick
}) => {
  return (
    <div
      className="regrid-header"
      {...hasScrollbar
        ? {
          style: {
            marginRight: scrollbarWidth,
            boxShadow: `${scrollbarWidth}px 0 0 #dcdcdc`
          }
        }
        : {}
      }
    >
      <HeaderRow
        cells={columns}
        data={columns.map(column => column.caption || column.key.toString())}
        onCellClick={onCellClick}
        sorting={sorting}
      />
    </div>
  );
};
