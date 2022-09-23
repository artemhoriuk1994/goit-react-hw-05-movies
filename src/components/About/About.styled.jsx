import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MainContainer = styled.div`
width: 100%;
padding: 20px;
margin-top:15px;
`;

export const ButtonLink = styled(Link)`
margin-bottom: 10px;
border-radius: 8px;
padding: 2px;
text-decoration: none;
color: black;
background-color: orange;
width: 80px;
display: flex;`;

export const Poster = styled.img`
width: 300px;
border-radius: 10px;
display: block;
`;

export const FlexContainer = styled.div`
display: flex;
width: 900px;
padding: 15px;
border: 2px solid black;`;

export const FlexContent = styled.div`
flex-direction: column;
margin-left: 50px;`

export const GenresList = styled.div`
display: flex;
flex-direction: column;
margin: 0;
padding: 0;`;

export const Title = styled.h3`
font-size: 18px;`

export const ListItem = styled.li`
margin-left: 10px;
&:first-child{
    margin-left: 0px;
}`

export const Text = styled.p`
font-size: 16px;`;

export const List = styled.ul`
margin: 0;
padding: 0;
display: flex;
`

export const BtnContainer = styled.ul`
margin:0;
padding:0;
display: flex;
margin-top: 20px;
`;
export const NavItem = styled(Link)`
text-decoration: none;
font-size: 18px;
color: black;
background-color: orange;
border-radius: 8px;
padding: 4px;
&:hover{
color: orange;
background-color: black; 
}`