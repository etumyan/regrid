import './DataCell.scss';

import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import { CellProps } from './Cell';

interface DataCellProps extends CellProps {
  render?: (value: any, rowData: any) => string;
}

export const DataCell: FunctionComponent<DataCellProps> = ({
  id, content, width, align, render
}) => {
  const classNameList = [
    'regrid-cell',
    'regrid-cell_type_data',
    `regrid-cell_key_${id}`
  ];

  if (width !== undefined && width !== 'auto') {
    classNameList.push('regrid-cell_fixed-width');
  }

  switch (align) {
    case 'start':
      break;

    case 'center':
      classNameList.push('regrid-cell_align_center');
      break;

    case 'end':
      classNameList.push('regrid-cell_align_end');
      break;
  }

  const htmlContentWrapper = {
    __html: (render ? render(content, {}) : content) || ''
  };

  return (
    <div
      className={classNames(classNameList)}
      style={width ? { width } : undefined}
      dangerouslySetInnerHTML={htmlContentWrapper}
    >
    </div>
  );
};
