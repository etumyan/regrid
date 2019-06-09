import './HeaderCell.scss';

import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { CellProps } from './Cell';

interface HeaderCellProps extends CellProps {
  sorting?: {
    enabled?: boolean,
    direction?: 'asc' | 'desc'
  };
  sortHandler?: (sortBy: number | string) => void;
  onClick?: (key: any, e: React.MouseEvent<HTMLDivElement>) => void;
}

export const HeaderCell: FunctionComponent<HeaderCellProps> = ({
  id,
  content,
  width,
  align,
  sorting = { enabled: false },
  onClick
}) => {
  const classNameList = [
    'regrid-cell',
    'regrid-cell_type_header',
    `regrid-cell_id_${id}`
  ];

  if (width !== undefined && width !== 'auto') {
    classNameList.push('regrid-cell_fixed-width');
  }

  if (sorting.enabled) {
    classNameList.push('regrid-cell_sortable');

    switch (sorting.direction) {
      case 'asc':
        classNameList.push('regrid-cell_sort_asc');
        break;

      case 'desc':
        classNameList.push('regrid-cell_sort_desc');
        break;
    }
  }

  switch (align) {
    case 'start':
      classNameList.push('regrid-cell_align_start');
      break;

    case 'center':
      classNameList.push('regrid-cell_align_center');
      break;

    case 'end':
      classNameList.push('regrid-cell_align_end');
      break;
  }

  return (
    <div
      className={classNames(classNameList)}
      style={width ? { width } : undefined}
      onClick={onClick ? onClick.bind(undefined, id) : () => {}}
    >
      {content}
    </div>
  );
};

