import styled from "styled-components";

export const TaskContainer = styled.div`
    position: relative;
    border-radius: 0.3rem;
    box-shadow: var(--shadow);
    font-family: Indie Flower;
    font-size: 1.2rem;
    padding: 0.4rem;
    width: 90%;
    min-height: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FAFFFD;
    cursor: grab;

    &:active {
        cursor: grabbing;
    }

    @media (max-width: 1080px) {
        width: 100%;    
    }

    div {
        position: absolute;
        bottom: 0;
        right: 0.3rem;
    }

    button {
        background-color: inherit;
        border: none;

        &:nth-child(1) {
            padding-right: 0.5rem;
        }

        &.swap {
            position: absolute;
            bottom: 2px;
            left: 7px;
        }
    }

    img {
        height: 1.2rem;
        filter: invert(100%) sepia(0%) saturate(79%) hue-rotate(195deg) brightness(108%) contrast(101%);

        &:hover:not(.pin) {
            opacity: 0.7;
        }

        &.deleteReady {
            filter: invert(18%) sepia(85%) saturate(6424%) hue-rotate(358deg) brightness(98%) contrast(118%);
            opacity: 0.7;
        }

        &.pin {
            position: absolute;
            top: 5px;
            left: 5px;
            height: 14px;
            filter: brightness(3)
        }
    }
`