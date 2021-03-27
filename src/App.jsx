import React, { Fragment, useState } from 'react';
import TodoList from './components/TodoList'
import Switcher from './components/Switcher'
import * as themes from './styles/themes'
import ThemesContext from './styles/themes/context'

function App() {
  const [theme,setTheme] = useState({theme: themes.dark});
  const toggleTheme = () => {

  }
  return (
    <Fragment>
      <Switcher toggleTheme = {toggleTheme}/>
      <TodoList/>
    </Fragment>
  );
}

export default App;
