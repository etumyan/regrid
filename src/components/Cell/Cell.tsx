import './Cell.scss';

import React, { FunctionComponent } from 'react';

export interface CellProps {
  id: string | number;
  content?: string;
  width?: string | number;
  align?: 'start' | 'center' | 'end';
}

export const Cell: FunctionComponent<CellProps> = () => {
  return <React.Fragment />;
};
