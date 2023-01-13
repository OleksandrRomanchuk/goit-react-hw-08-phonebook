import styled from "styled-components";

export const List = styled.ul`
    min-width: 200px;
    min-height: 200px;
    max-height: 200px;

    margin-top: 20px;
    padding: 0 5px;

    text-align: left;

    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 4px;
    };

    ::-webkit-scrollbar-thumb {
        background-color: #80808054;
        border-radius: 2px;
    };
`;

export const ListItem = styled.li`
    display: flex;
    gap: 6px;
    justify-content: center;
    align-items: center;

    min-height: 30px;
    max-height: 30px;

    padding-bottom: 1px;

    border-bottom: 1px solid #ffffff66;

    :not(:first-child) {
        margin-top: 10px;
    }

`;

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