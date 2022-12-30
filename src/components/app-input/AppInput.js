import React, { useContext } from "react";
import { AppContext } from "../../app-context/AppContext";
import InputWrapper from "./AppInput.style";

const AppInput = () => {
  const { inputVal, setInputVal } = useContext(AppContext);
  return (
    <InputWrapper
      className="w-100"
      placeholder="0"
      type="text"
      value={inputVal}
      onChange={(e) => {
        if (
          (e.target.value >= "0" && e.target.value <= "9") ||
          e.target.value === ""
        ) {
          setInputVal(e.target.value);
        }
      }}
    ></InputWrapper>
  );
};

export default AppInput;
