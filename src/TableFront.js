import { Divider, Radio, Table } from "antd";
import { useState } from "react";
import TreeDrop from "./TreeDrop";
const columns = [
  {
    title: "Packages",
    dataIndex: "packages",
    // render: (text) => <a>{text}</a>,
  },
  {
    title: "Rate (in SqFT)",
    dataIndex: "rate",
  },
  {
    title: "Total",
    dataIndex: "total",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];
const data = [
  {
    key: "1",
    packages: "Civil 1",
    rate: 567.8,
    total: "$ 2,97,892",
    action: <TreeDrop size="small" />,
  },
  {
    key: "2",
    packages: "Civil 2",
    rate: 567.8,
    total: "$ 2,97,892",
    action: <TreeDrop size="small" />,
  },
  {
    key: "3",
    packages: "Civil 3",
    rate: 567.8,
    total: "$ 2,97,892",
    action: <TreeDrop size="small" />,
  },
  {
    key: "4",
    packages: "Civil 4",
    rate: 567.8,
    total: "$ 2,97,892",
    action: <TreeDrop size="small" />,
  },
  {
    key: "5",
    packages: "Civil 5",
    rate: 567.8,
    total: "$ 2,97,892",
    action: <TreeDrop size="small" />,
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    // Column configuration not to be checked
    name: record.name,
  }),
};
const TableFront = () => {
  return (
    <div>
      <Divider />

      <Table
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};
export default TableFront;
