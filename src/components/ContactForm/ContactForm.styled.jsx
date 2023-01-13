import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    margin-top: 16px;
`;

export const Label = styled.label`
    display: flex;
    justify-content: space-between;
    align-items: center;

    :not(:first-child) {
        margin-top: 6px;
    }
`;

export const Input = styled.input`
    min-width: 135px;

    padding: 2px 3px;

    border: none;
    border-radius: 2px;
    outline: none;
`;

export const SubmitBtn = styled.button`
    display: flex;
    gap: 4px;
    justify-content: center;
    align-items: center;

    margin: 0 auto;
    margin-top: 8px;

    padding: 2px 4px;
    padding-right: 6px;

    border: none;
    border-radius: 10px;

    opacity: 0.4;

    transition: opacity 300ms ease, box-shadow 300ms ease, background-color 300ms ease;

    :hover, :focus {
        background-color: #49ff18;
        box-shadow: 0px 0px 5px 2px #49ff18;

        opacity: 1;
    }
`;