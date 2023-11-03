import styled from "styled-components";

const Button = styled.button`
    background: #83d394;
    padding: 20px;
    width: 100%;
    border: none;
    border-radius: 3px;
    font-weight: bold;
    font-family: Arial, sans-serif;
    cursor: pointer;
    transition: .3s ease all;

    &:hover{
        background: #44a559;
        color: #fff;
    }
`;

export default Button;



