import styled from "styled-components";

export const TaskSectionContainer = styled.section`
    min-height: var(--fit);
    flex-basis: 20rem;
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 1rem;
`
export const TaskSectionHeader = styled.header`
    box-shadow: var(--shadow);
    border-radius: 0.5rem;
    padding: 0.7rem;
    width: 100%;
    text-align: center;
    color: #fff;
    white-space: nowrap;
    position: relative;

    &.todo {
        background-color: var(--background-todo);
    }

    &.doing {
        background-color: var(--background-doing);
    }

    &.done {
        background-color: var(--background-done);
    }

    &.extra {
        background-color: var(--background-extra);
    }

    div {
        position: absolute;
        bottom: 0;
        right: 0.3rem;
        display: flex;
        flex-flow: column;
    }

    button {
        background-color: inherit;
        border: none;

        &:nth-child(1) {
            padding-bottom: 0.15rem;
        }
    }

    img {
        height: 1.2rem;
        color: #fff;
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
            filter: none;
            height: 14px;
            filter: brightness(3)
        }
    }
`

export const TaskSectionBody = styled.div`
    box-shadow: var(--shadow);
    border-radius: 0.5rem;
    padding: 0.7rem;
    width: 100%;
    flex-grow: 1; 
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    &.todo {
        background-color: var(--background-todo-fade);
        .task {
            background-color: var(--background-todo);
        }
    }

    &.doing {
        background-color: var(--background-doing-fade);
        .task {
            background-color: var(--background-doing);
        }
    }

    &.done {
        background-color: var(--background-done-fade);
        .task {
            background-color: var(--background-done);
        }
    }

    &.extra {
        background-color: var(--background-extra-fade);
        .task {
            background-color: var(--background-extra);
        }
    }
`
