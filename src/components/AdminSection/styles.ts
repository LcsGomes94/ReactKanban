import styled from "styled-components";


export const AdminSectionContainer = styled.section`
    min-height: var(--fit);
    flex-basis: 20rem;
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 0.7rem;

    h1 {
        font-size: 2rem;
        text-align: center;
    }

    & > div {
        padding: 0.7rem 0.2rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
    }

    ul {
        list-style: none;
        margin-top: auto;
        display: flex;
        flex-flow: column;
        align-items: center;
        gap: 1rem;

        button {
            font-size: 1.2rem;
            background-color: inherit;
            border: solid 1px #d7d7d7;
            border-radius: 0.5rem;
            padding: 0.3rem 1rem;

            &:hover {
                border: solid 1px #0005
            }
        }
    }

    .task {
        background-color: var(--background-extra);
    }

`