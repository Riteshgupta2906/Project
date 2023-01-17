import { TreeSelect } from "antd";
import { useState } from "react";
const treeData = [
  {
    value: "civil 1",
    title: "Civil 1",
    children: [
      {
        value: "Activity 1",
        title: "Activity 1",
        children: [
          {
            value: "Work Item 1",
            title: "Work Item 1",
          },
          {
            value: "Work Item 2",
            title: "Work Item 2",
          },
          {
            value: "Work Item 3",
            title: "Work Item 3",
          },
        ],
      },
      {
        value: "Activity 2",
        title: "Activity 2",
        children: [
          {
            value: "Work Item 1",
            title: "Work Item 1",
          },
          {
            value: "Work Item 2",
            title: "Work Item 2",
          },
          {
            value: "Work Item 3",
            title: "Work Item 3",
          },
        ],
      },
      {
        value: "Activity 3",
        title: "Activity 3",
        children: [
          {
            value: "Work Item 1",
            title: "Work Item 1",
          },
          {
            value: "Work Item 2",
            title: "Work Item 2",
          },
          {
            value: "Work Item 3",
            title: "Work Item 3",
          },
        ],
      },
      {
        value: "Activity 4",
        title: "Activity 4",
        children: [
          {
            value: "Work Item 1",
            title: "Work Item 1",
          },
          {
            value: "Work Item 2",
            title: "Work Item 2",
          },
          {
            value: "Work Item 3",
            title: "Work Item 3",
          },
        ],
      },
    ],
  },
];
const TreeDrop = () => {
  const [value, setValue] = useState(undefined);
  const onChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <TreeSelect
      style={{
        width: "70%",
      }}
      value={value}
      dropdownStyle={{
        maxHeight: 400,
        overflow: "auto",
      }}
      allowClear
      onChange={onChange}
      treeData={treeData}
    />
  );
};
export default TreeDrop;
