import styled from "styled-components";

export const PhonebookApp = styled.div`
    display: flex;
    justify-content: center;

    height: calc(100vh - 30px);

    padding-top: 30px;

    @media screen and (min-width: 480px) {
        align-items: center;
    }
`;

export const Container = styled.div`
    display: flex;
    gap: 15px;

    min-height: 25vh;
`;

export const Title = styled.h1`
    position: relative;

    min-height: 175px;
    max-height: 175px;

    font-size: 32px;
    text-align: right;
    text-decoration: underline;

    writing-mode: vertical-lr;
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #ffffff;
    text-shadow: 0 0 10px #FFF, 0 0 20px #cd18ff, 0 0 30px #cd18ff, 0 0 55px #cd18ff, 0 0 75px #cd18ff, 2px 2px 2px rgba(206,89,55,0);

    z-index: 1;
    transform: rotate(180deg);

    ::after, ::before {
        content: '';
        position: absolute;

        display: block;
        width: 15px;

        border-bottom: 2px solid #e07efb;
    }

    ::after {
        bottom: 30px;
        left: -15px;
    }

    ::before {
        top: 30px;
        left: -15px;
    }
`;

export const Wrapper = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    min-height: 405px;
    max-height: 405px;

    padding: 0 25px;

    text-align: center;

    ::before {
        content: '';
        position: absolute;
        top: -15px;
        left: 0;

        display: block;

        width: 1px;
        height: calc(100% + 35px);

        background-color: #ffffff66;
        border-radius: 50%;
    };

    @media screen and (min-width: 480px) {
        justify-content: center;
    }
`; 