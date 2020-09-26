import { Select } from "antd";

export default (props) => {
  const { Option } = Select;
  const handleChange = (value) => {
    console.log("Selected value", value);
  };
  return (
    <Select
      defaultValue="applied"
      style={{ width: 120 }}
      onChange={handleChange}
    >
      <Option value="applied">Applied</Option>
      <Option value="interview">Interview</Option>
      <Option value="offer">Offer</Option>
      <Option value="accepted">Accepted</Option>
    </Select>
  );
};
