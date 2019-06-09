import './Info.scss';

import React, { FunctionComponent } from 'react';

interface PagerInfoProps {
  from: number;
  to: number;
  total: number;
}

export const PagerInfo: FunctionComponent<PagerInfoProps> = ({
  from, to, total
}) => {
  return (
    <div className="regrid-pager__info">
      {from} &ndash; {to} of {total}
    </div>
  );
};
