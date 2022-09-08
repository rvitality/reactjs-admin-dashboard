import { createContext, useContext, useState } from "react";

const contextInitialState = {
    activeMenu: false,
    setActiveMenu: () => {},
    isClicked: false,
    setIsClicked: () => {},
    screenSize: false,
    setScreenSize: () => {},
};

const isClickedInitialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
};

const StateContext = createContext(contextInitialState);

export const ContextProvider = props => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(isClickedInitialState);
    const [screenSize, setScreenSize] = useState();

    const clickHandler = type => {
        setIsClicked({ ...isClickedInitialState, [type]: true });
    };

    const contextValue = {
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        clickHandler,
        screenSize,
        setScreenSize,
    };

    return <StateContext.Provider value={contextValue}>{props.children}</StateContext.Provider>;
};

export const useStateContext = () => useContext(StateContext);
