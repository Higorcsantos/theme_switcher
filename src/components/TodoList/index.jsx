import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
    background: ${props => props.theme.theme.background};
    color: ${props => props.theme.theme.color};
    font-family: sans-serif;
    font-size: 18px;
    li{
        line-height: 36px;
    }
`;


const TodoList = () => (
    <List>
        <li>JavaScript</li>
        <li>Python</li>
        <li>React JS</li>
        <li>Node JS</li>
        <li>React Native</li>
        <li>Django</li>
        <li>Flask</li>
    </List>
)
export default TodoList;