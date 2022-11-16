import React, {useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import styled, {createGlobalStyle, ThemeProvider} from "styled-components";
import Circle from "./Circle";
import Router from "./Router";
import {ReactQueryDevtools} from "react-query/devtools"
import {GlobalStyle} from "./style/global";
import {darkTheme, lightTheme} from "./style/theme";
import {useRecoilValue} from "recoil";
import {isDarkAtom} from "./atoms";

function App() {
    const isDark = useRecoilValue(isDarkAtom)
    return (
        <>
            <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
                <GlobalStyle/>
                <Router />
                <ReactQueryDevtools initialIsOpen={true}/>
            </ThemeProvider>
        </>
    )
}

export default App;
