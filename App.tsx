import React from "react";
import {NativeBaseProvider, Box, Stack, HStack, Center, extendTheme} from "native-base";
import Home from "./pages/Home";

const theme = extendTheme({
    colors: {
        primary: {
            50: '#E3F2F9',
            100: '#C5E4F3',
            200: '#A2D4EC',
        }
    }
});

export default function App() {
  return (
      <NativeBaseProvider theme={theme}>
        <Home />
      </NativeBaseProvider>
  );
}
