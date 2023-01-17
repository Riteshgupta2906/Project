import "./App.css";
import { Tabs } from "antd";
import { Button, Space } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import SideForm from "./Drawer";
import TableFront from "./TableFront";

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: `Overview`,
    children: <TableFront />,
  },
  {
    key: "2",
    label: `Other`,
    children: "Hello World",
  },
];
const App = () => {
  return (
    <div>
      <div className="Header">
        <LeftOutlined />
        Create Order
      </div>
      <SideForm />

      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};

export default App;
