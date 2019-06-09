import './Row.scss';

import React, { FunctionComponent } from 'react';

import { Column } from '../DataGrid';

export interface RowProps {
  cells: Column[];
  data: string[];
  selected?: boolean;
  onClick?: () => void;
  onCellClick?: (key: any, e: React.MouseEvent<HTMLDivElement>) => void;
}

export const Row: FunctionComponent<RowProps> = () => {
  return <React.Fragment />;
};

