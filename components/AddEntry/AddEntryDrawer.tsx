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
        <AddEntry onAdd={onClose} />
      </Drawer>
    </>
  );
};
