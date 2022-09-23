import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.header`
 padding-top: 15px;
`

export const Navigation = styled.nav`
width:100%;
margin-bottom: 20px;
border-bottom: 1px solid black;
display: flex;
list-style: none;
margin-bottom: 10px
`

export const NavigationLink = styled(NavLink)`
margin-left: 20px;
 padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  &.active {
    color: white;
    background-color: orangered;
  }
  &:hover:not(.active) {
  background-color: black;
 color: orange;
}
`