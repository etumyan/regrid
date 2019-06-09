import './common.css';

import React from 'react';
import { render } from 'react-dom';

import Regrid from '../src';
import data from './data';

function App() {
  return (
    <div className="box">
      <h1 className="box__title">Sandbox</h1>
      <div className="box__body">
        <Regrid
          dataSource={data}
          primaryKey="id"
          columns={[{
            key: 'id',
            caption: 'ID',
            width: 80,
            align: 'center',
            sortable: true
          }, {
            key: 'name',
            caption: 'Full name',
            width: 160,
            sortable: true
          }, {
            key: 'job',
            caption: 'Job title',
            width: 280,
            sortable: true
          }, {
            key: 'phone',
            caption: 'Phone',
            width: 120
          }, {
            key: 'email',
            caption: 'Email',
            width: 280,
            render: value => (
              `<a href="mailto:${value}">${value}</a>`
            )
          }]}
          pageSize={10}
          sorting={['id', 'desc']}
          selection={{
            enabled: true,
            multiple: true
          }}
          height="100%"
          onSelect={selectedRowKeys => {
            console.log('selected keys:', Array.from(selectedRowKeys).join(', '));
          }}
          onSort={sorting => {
            console.log('sort by:', sorting);
          }}
        />
      </div>
    </div>
  );
}

render(<App />, document.getElementById('app'));
