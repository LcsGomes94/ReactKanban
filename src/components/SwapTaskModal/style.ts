import styled from "styled-components";

export const SwapContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 1rem;
    width: 100%;
    caret-color: transparent;
    flex-wrap: wrap;

    button {
        border: solid 1px #d7d7d7;
        border-radius: 0.5rem;
        font-size: 1rem;
        background: var(--background-extra);
        padding: 0.3rem 1rem;
        color: #fff;
        flex-basis: 12rem;
        position: relative;
        padding-left: 2rem;

        &:hover:not(.close) {
            border: solid 1px #0005
        }

        &.close {
            background-color: inherit;
            position: absolute;
            width: auto;
            padding: 0;
        }

        &:nth-of-type(3) {
            background-color: var(--background-todo);
        }

        &:nth-of-type(4) {
            background-color: var(--background-doing);
        }

        &:nth-of-type(5) {
            background-color: var(--background-done);
        }

        .swap {
            height: 1.2rem;
            position: absolute;
            left: 7px;
            bottom: calc(50% - 0.6rem);
            filter: invert(100%) sepia(0%) saturate(79%) hue-rotate(195deg) brightness(108%) contrast(101%);
        }
    }
`