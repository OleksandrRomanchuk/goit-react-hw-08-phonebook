import styled from "styled-components";

export const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;

    min-width: 155px;
    max-width: 155px;
`;

export const ContactName = styled.p`
    font-size: 14px;
    text-align: left;
`;

export const PhoneNumber = styled.p`
    margin-top: 2px;

    font-size: 12px;
    color: #ffffff72;
`;

export const DeleteBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 20px;
    height: 20px;

    font-size: 14px;

    border-radius: 50%;
    border: none;
    outline: none;

    opacity: 0.4;

    transition: opacity 300ms ease, background-color 300ms ease, color 300ms ease, box-shadow 300ms ease;

    :hover, :focus {
        color: #ffffff;

        opacity: 1;
        background-color: #ff4500;
        box-shadow: 0px 0px 5px 2px #ff4500;
    }
`;