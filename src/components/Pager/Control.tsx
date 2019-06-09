import './Control.scss';

import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

interface PagerControlProps {
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const PagerControl: FunctionComponent<PagerControlProps> = ({
  children, disabled = false, onClick
}) => {
  return (
    <div
      className={classNames(
        'regrid-pager__control',
        { 'regrid-pager__control_disabled': disabled }
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
