import React, { useState } from "react";
import { Drawer, Button } from "antd";

import { AddEntry } from "./AddEntry";

export default (props) => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const onAdd = ({ company_name, role, applied_on, stage }) => {
    console.log("Adding values");
    //Make HTTP req, show message, close model, show values
    onClose();
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer} style={{ margin: "0 auto" }}>
        Add Job to Track
      </Button>
      <Drawer
        title="Add Job Applied"
        placement="right"
        closable={true}
        onClose={onClose}
        visible={visible}
        width={700}
      >
        <AddEntry onAdd={onAdd} onCancel={onClose} />
      </Drawer>
    </>
  );
};
