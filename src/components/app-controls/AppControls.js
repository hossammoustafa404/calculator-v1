import React from "react";
import { Row } from "react-bootstrap";
import ControlsWrapper from "./AppControls.style";
import AppNumBtn from "./AppNumBtn";

const AppControls = () => {
  return (
    <ControlsWrapper>
      <main>
        <Row>
          <AppNumBtn val={"7"} />
          <AppNumBtn val={"8"} />
          <AppNumBtn val={"9"} />
          <AppNumBtn val={"del"} type="del" />
          <AppNumBtn val={"4"} />
          <AppNumBtn val={"5"} />
          <AppNumBtn val={"6"} />
          <AppNumBtn val={"+"} />
          <AppNumBtn val={"1"} />
          <AppNumBtn val={"2"} />
          <AppNumBtn val={"3"} />
          <AppNumBtn val={"-"} />
          <AppNumBtn val={"."} />
          <AppNumBtn val={"0"} />
          <AppNumBtn val={"/"} />
          <AppNumBtn val={"x"} />

          <AppNumBtn val="reset" footer={true} type="del" />
          <AppNumBtn val="=" footer={true} type="equal" />
        </Row>
      </main>
    </ControlsWrapper>
  );
};

export default AppControls;
