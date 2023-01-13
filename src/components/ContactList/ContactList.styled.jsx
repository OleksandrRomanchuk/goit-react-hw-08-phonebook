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
