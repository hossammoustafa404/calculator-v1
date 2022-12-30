import React, { useContext, useState } from "react";
import { AppContext } from "../../app-context/AppContext";
import HeaderWrapper from "./AppHeader.style";
import { StyledButton } from "./AppHeader.style";

const AppHeader = () => {
  const { activeTheme, changeTheme } = useContext(AppContext);

  return (
    <HeaderWrapper className="d-flex justify-content-between align-items-center">
      <h4 className="title">calc</h4>
      <div className="themes-control d-flex">
        <h5 className="title text-uppercase">theme</h5>
        <div className="btns-box d-flex justify-content-around align-items-center">
          <div className="btn-box position-relative d-flex align-items-center">
            <StyledButton
              active={activeTheme === "1"}
              onClick={() => {
                changeTheme(1);
              }}
            ></StyledButton>
            <span className="position-absolute">1</span>
          </div>

          <div className="btn-box position-relative d-flex align-items-center">
            <StyledButton
              active={activeTheme === "2"}
              className="position-relative"
              onClick={() => {
                changeTheme(2);
              }}
            ></StyledButton>
            <span className="position-absolute">2</span>
          </div>
          <div className="btn-box position-relative d-flex align-items-center">
            <StyledButton
              active={activeTheme === "3"}
              className="position-relative"
              onClick={() => {
                changeTheme(3);
              }}
            ></StyledButton>
            <span className="position-absolute">3</span>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default AppHeader;
