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
