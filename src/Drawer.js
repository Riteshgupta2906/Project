import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
} from "antd";
import { useState } from "react";
const { Option } = Select;
const SideForm = () => {
  const [data, setData] = useState({
    client: "",
    commencement: "",
    completion: "",
    rfq: "",
  });

  const changeHandler = (e) => {
    setData((prevData) => {
      return {
        ...prevData,
        [e[0].name]: e[0].value,
      };
    });
  };
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
    data.completion = data.completion.$d;
    data.commencement = data.commencement.$d;
    console.log(data);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        Save
      </Button>
      <Drawer title="Workorder" width={400} onClose={onClose} open={open}>
        <Form onFieldsChange={changeHandler} layout="vertical">
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="client"
                label="Client"
                rules={[
                  {
                    required: true,
                    message: "Please select an Client",
                  },
                ]}
              >
                <Select placeholder="Client Name">
                  <Option value="Rajesh Kumar">Rajesh Kumar</Option>
                  <Option value="Ramesh Rao">Ramesh Rao</Option>
                  <Option value="Ram Sharma">Ram Sharma</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="commencement"
                label="Date of Commencement"
                rules={[
                  {
                    required: true,
                    message: "Please choose the Date",
                  },
                ]}
              >
                <DatePicker size={"middle"} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="completion"
                label="Date of Completion"
                rules={[
                  {
                    required: true,
                    message: "Please choose the Date",
                  },
                ]}
              >
                <DatePicker size={"middle"} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={10}>
            <Col span={12}>
              <Form.Item
                name="rfq"
                label="RFQ Code"
                rules={[
                  {
                    required: true,
                    message: "Please enter RFQ Code",
                  },
                ]}
              >
                <Input placeholder=" RFQ Code" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <Space>
          <Button onClick={onClose} type="primary">
            Submit
          </Button>
        </Space>
      </Drawer>
    </>
  );
};
export default SideForm;
