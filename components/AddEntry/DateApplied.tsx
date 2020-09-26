import { DatePicker } from "antd";

export default (props) => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return <DatePicker onChange={onChange} />;
};
