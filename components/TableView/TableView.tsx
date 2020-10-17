import * as React from "react";
import { Table } from "antd";

import { columns } from './../../utils/constants';

export const TableView = (props) => {
  
  return (
    <Table columns={columns} dataSource={props.data.map((obj, index) => ({
      ...obj,
      key: index + 1
    }))} />
  );
};
