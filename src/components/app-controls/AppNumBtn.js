import React, { useContext, useState } from "react";
import { Button, Col } from "react-bootstrap";
import styled from "styled-components";
import { AppContext } from "../../app-context/AppContext";

function Stack() {
  return {
    // Properties
    arr: [],
    top: 0,
    size: 0,
    // Methods
    push(ele) {
      this.arr[this.top++] = ele;
      this.size++;
    },

    pop() {
      this.size--;
      return this.arr[--this.top];
    },

    stackTop() {
      return this.arr[this.top - 1];
    },

    stackSize() {
      return this.size;
    },
  };
}

const calcResult = (num1, num2, sign) => {
  switch (sign) {
    case 1:
      return num2 + num1;
      break;

    case 2:
      return num2 - num1;
      break;

    case 4:
      return num2 * num1;
      break;

    default:
      return num2 / num1;
      break;
  }
};

const AppNumBtn = ({ val, footer, type }) => {
  const { activeTheme, inputVal, setInputVal } = useContext(AppContext);
  const [arr, setArr] = useState([]);
  const [start, setStart] = useState(0);
  let col = 0;

  // Make expression array function
  const makeExpArr = (value) => {
    let arr = [];
    let start = 0;

    for (let i = 0; i < value.length; i++) {
      if (isNaN(value[i])) {
        if (i - start != 0) {
          arr.push(+value.slice(start, i));
        }
        arr.push(value[i]);
        start = i + 1;
      }
    }
    if (!isNaN(value[value.length - 1])) {
      arr.push(+value.slice(start, value.length));
    }
    return arr;
  };

  // Get result function
  const getResult = () => {
    let arr = makeExpArr(inputVal);
    const numsStack = new Stack();
    const signsStack = new Stack();

    arr.forEach((ele) => {
      if (!isNaN(ele)) {
        numsStack.push(ele);
      } else {
        let pushedSign = "";

        switch (ele) {
          case "+":
            pushedSign = 1;
            break;

          case "-":
            pushedSign = 2;
            break;

          case "x":
            pushedSign = 4;
            break;

          default:
            pushedSign = 5;
            break;
        }
        if (signsStack.size == 0 || pushedSign - signsStack.top > 1) {
          signsStack.push(pushedSign);
        } else {
          while (signsStack.size != numsStack.size) {
            let num1 = numsStack.pop();
            let num2 = numsStack.pop();

            let result = calcResult(num1, num2, signsStack.pop());
            numsStack.push(result);
            signsStack.push(pushedSign);
          }
        }
      }
    });

    if (numsStack.size - signsStack.size != 1) {
      return "Invalid Expression";
    }
    while (signsStack.size != 0) {
      let num1 = numsStack.pop();
      let num2 = numsStack.pop();

      let result = calcResult(num1, num2, signsStack.pop());
      numsStack.push(result);
    }
    return numsStack.pop();
  };
  if (footer) {
    col = 6;
  } else {
    col = 3;
  }

  const handleInputVal = () => {
    if (val === "del") {
      setInputVal(inputVal.slice(0, inputVal.length - 1));
    } else if (val === "reset") {
      setInputVal("");
    } else if (val === "=") {
      if (inputVal !== "Invalid Expression") {
        const result = getResult();
        setInputVal(result.toLocaleString());
      }
    } else {
      let newVal = "";
      if (inputVal !== "Invalid Expression") {
        newVal = inputVal + val;
      } else {
        newVal = val;
      }
      setInputVal(newVal);
      if (isNaN(+val)) {
        setArr([...arr, +inputVal.slice(start, inputVal.length + 1), val]);
        setStart(inputVal.length - 1);
      }
    }
  };
  return (
    <Col xs={col} className="g-3">
      <ButtonWrapper
        className="border-0 w-100 h-100"
        themenum={activeTheme}
        isActive={inputVal !== ""}
        type={type}
        onClick={handleInputVal}
      >
        {val}
      </ButtonWrapper>
    </Col>
  );
};

export default AppNumBtn;

const ButtonWrapper = styled(Button)`
  width: 5rem;
  pointer-events: ${({ type, isActive }) =>
    type === "equal" && !isActive && "none"};
  background-color: ${({ theme, type }) => {
    switch (type) {
      case "del":
        return theme.keyShadow1;

      case "equal":
        return theme.toggle;

      default:
        return theme.keyBackground2;
    }
  }};

  color: ${({ theme, themenum, type }) => {
    if (type === "del") {
      return theme.white;
    } else if (type === "equal") {
      if (themenum == "3") {
        return theme.primaryText;
      }
    } else {
      if (themenum == "1") {
        return theme.primaryText;
      } else {
        return theme.headerColor;
      }
    }
  }} !important;

  box-shadow: 0 0.2rem 0
    ${({ theme, type }) => {
      switch (type) {
        case "del":
          return theme.keyShadow1;

        case "equal":
          return theme.keyShadow2;

        default:
          return theme.keyShadow3;
      }
    }};
  font-weight: 700;
  font-size: 1.2rem;

  &:hover {
    background-color: ${({ theme, type, themenum }) => {
      if (type === "del") {
        if (themenum == "1") {
          return "hsl(224, 28%, 50%)";
        } else if (themenum == "2") {
          return "hsl(185,58%,40%)";
        } else {
          return "hsl(285,91%,40%)";
        }
      } else if (type === "equal") {
        if (themenum == "1" || themenum == "2") {
          return "hsl(6,63%,60%)";
        } else {
          return "hsl(176,100%,65%)";
        }
      } else {
        if (themenum == "1" || themenum == "2") {
          return theme.white;
        } else {
          return "hsl(285,91%,30%)";
        }
      }
    }};
  }
`;
