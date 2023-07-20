import React from 'react';
import { createContext, FunctionComponent, ReactNode, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { getThemePreference, setLocalStorage } from './utils';
import { light, dark, GlobalStyle } from './config/theme';
import { MetaMaskProvider } from './hooks';
import styled from 'styled-components';
import { Footer, Header } from './components';
import Page from './pages/index';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  max-width: 100vw;
`;

type ToggleTheme = () => void;

export const ToggleThemeContext = createContext<ToggleTheme>(
  (): void => undefined,
);

export const App = () => {
  const [darkTheme, setDarkTheme] = useState(getThemePreference());

  const toggleTheme: ToggleTheme = () => {
    setLocalStorage('theme', darkTheme ? 'light' : 'dark');
    setDarkTheme(!darkTheme);
  };

  return (
    <ToggleThemeContext.Provider value={toggleTheme}>
      <ThemeProvider theme={darkTheme ? dark : light}>
        <MetaMaskProvider>
          <GlobalStyle />
          <Wrapper>
            <Header handleToggleClick={toggleTheme} />
            <Page />
            <Footer />
          </Wrapper>
        </MetaMaskProvider>
      </ThemeProvider>
    </ToggleThemeContext.Provider>
  );
};
