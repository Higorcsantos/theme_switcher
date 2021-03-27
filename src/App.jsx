import React, { Fragment, useState } from 'react';
import TodoList from './components/TodoList';
import Switcher from './components/Switcher';

import * as themes from './styles/themes';
import ThemesContext from './styles/themes/context';
import { ThemeProvider } from 'styled-components';


function App() {
  const [state,setState] = useState({theme: themes.dark});
  const toggleTheme = () => {
    setState({theme: state.theme === themes.dark ? themes.light : themes.dark})
    
  }
  return (
    <ThemesContext.Provider value={state}>
      <Fragment>
        <Switcher toggleTheme = {toggleTheme}/>
        <ThemesContext.Consumer>
          {theme => (
            <ThemeProvider theme={theme}>
              <TodoList/>
            </ThemeProvider>
          )   
          }
        </ThemesContext.Consumer>
      </Fragment>
    </ThemesContext.Provider>
    
  );
}

export default App;
