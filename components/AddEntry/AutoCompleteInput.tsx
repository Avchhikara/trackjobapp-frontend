import React, { useState } from "react";
import { AutoComplete } from "antd";

export const AutoCompleteInput = (props) => {
  const [value, setValue] = useState("");
  const [options, setOptions] = useState<{ value: string }[]>([]);
  const onSearch = (searchText: string) => {
    setOptions(!searchText ? [] : [props.autoCompleteInputValues]);
  };
  const onSelect = (data: string) => {
    console.log("onSelect", data);
  };
  const onChange = (data: string) => {
    setValue(data);
  };
  return (
    <>
      <AutoComplete
        value={value}
        options={[]}
        style={{ width: 200 }}
        onSelect={onSelect}
        onSearch={onSearch}
        onChange={onChange}
        placeholder="Start typing to see suggestions"
      />
    </>
  );
};
