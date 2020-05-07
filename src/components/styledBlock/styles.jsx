import styled from 'styled-components';

export const MainBlock = styled.div`
   width: 500px;
   height: 600px;
   background-color:${props => props.valid ? (props.test ? '#000' : '#555') : '#765'}; 
`
