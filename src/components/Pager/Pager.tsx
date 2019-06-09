import './Pager.scss';

import React, { FunctionComponent } from 'react';

import { PagerControl } from './Control';
import { PagerInfo } from './Info';

interface PagerProps {
  currentPageIndex: number;
  recordsPerPage: number;
  totalRecords: number;
  onChange: (currentPageIndex: number) => void;
}

export const Pager: FunctionComponent<PagerProps> = ({
  currentPageIndex = 0, recordsPerPage, totalRecords, onChange
}) => {
  const pageCount = Math.ceil(totalRecords / recordsPerPage);

  if (pageCount <= 1) return <React.Fragment />;

  const from = currentPageIndex * recordsPerPage + 1;

  let to = currentPageIndex * recordsPerPage + recordsPerPage;
  to = to > totalRecords ? totalRecords : to;

  let of = pageCount * recordsPerPage;
  of = of > totalRecords ? totalRecords : of;

  return (
    <div className="regrid-pager">
      <PagerControl
        disabled={currentPageIndex < 1}
        onClick={changeHandler.bind(
          undefined, currentPageIndex - 1, pageCount, onChange
        )}>
        &larr;
      </PagerControl>
      <PagerControl
        disabled={currentPageIndex >= pageCount - 1}
        onClick={changeHandler.bind(
          undefined, currentPageIndex + 1, pageCount, onChange
        )}>
        &rarr;
      </PagerControl>
      <PagerInfo from={from} to={to} total={of} />
    </div>
  );
};

function changeHandler(index: number, pageCount: number, onChange: any) {
  index = index >= 0 ? index : 0;
  index = index > pageCount - 1 ? pageCount - 1 : index;

  onChange(index);
}
