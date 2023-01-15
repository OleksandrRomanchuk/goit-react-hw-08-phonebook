import styled from "styled-components";

export const AppSection = styled.section`
    min-width: 210px;
    max-width: 210px;
    
    padding-top: 20px;
`;

export const SectionTitle = styled.h2`
    position: relative;

    font-size: 20px;

    ::after {
        content: '';
        position: absolute;
        left: -10px;
        bottom: -6px;

        display: block;

        width: calc(100% + 20px);
        height: 1px;

        background-color: #ffffff66;
    }
`;