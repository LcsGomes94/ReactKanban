import styled from "styled-components";

interface ITaskSectionProps {
    className: string
}

function pickBodyBackground ({ className }: ITaskSectionProps): string {
    switch (className) {
        case 'todo':
            return 'todo-fade'
        case 'doing':
            return 'doing-fade'
        case 'done':
            return 'done-fade'
        default:
            return 'extra-fade'
    }
}

export const TaskSectionContainer = styled.section`
    flex: 1;
    min-height: var(--fit);
    max-width: 29rem;
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
`
