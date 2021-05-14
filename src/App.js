import React, { Fragment, useState } from "react";
import "./App.css";
import { Button } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import AddDrawer from "./AddDrawer";

function App() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [values, setValues] = useState({});
  const [errorInfo, setErrorInfo] = useState({});
  
  const handleAddFormOnFinish = (values) =>{
    setValues(values)
  }
  const handleAddFormOnFinishFailed = (errorInfo) =>{
    setErrorInfo(errorInfo)
  }

  console.log(values);
  console.log(errorInfo);

  return (
    <Fragment>
      <Button
        type="primary"
        icon={<PlusCircleFilled />}
        data-testid="add-contact-button"
        onClick={() => setShowDrawer(true)}
      >
        Add
      </Button>
      <AddDrawer
        title="Add Contact"
        show={showDrawer}
        handleOnClose={() => setShowDrawer(false)}
        onFinish={handleAddFormOnFinish}
        onFinishFailed={handleAddFormOnFinishFailed}
      />
    </Fragment>
  );
}

export default App;
