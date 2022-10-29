import styled from 'styled-components';

export const Button = styled.button`
padding: 8px;
margin-left:auto;
margin-right:auto;
width: 120px;
border-radius: 4px;
border: 1px solid #EDC7B7;
cursor: pointer;
background-color:  #EEE2DC;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover {
        background-color: #BAB2B5;
    }
`;