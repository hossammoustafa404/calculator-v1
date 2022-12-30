import { createContext, useState } from "react";
import { firstTheme, secondTheme, thirdTheme } from "../themes";
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(firstTheme);
  const [activeTheme, setActiveTheme] = useState("1");
  const [inputVal, setInputVal] = useState("");

  //   Change theme method
  const changeTheme = (val) => {
    switch (val) {
      case 1:
        setTheme(firstTheme);
        setActiveTheme("1");
        break;

      case 2:
        setTheme(secondTheme);
        setActiveTheme("2");
        break;

      default:
        setTheme(thirdTheme);
        setActiveTheme("3");
        break;
    }
  };

  // handleInputValue

  //   State
  const state = {
    // Properties
    theme,
    activeTheme,
    inputVal,

    // Methods
    changeTheme,
    setInputVal,
  };
  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export default AppProvider;
