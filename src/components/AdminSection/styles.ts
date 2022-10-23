import styled from "styled-components";


export const AdminSectionContainer = styled.section`
    min-height: var(--fit);
    max-width: 29rem;
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 0.7rem;
    flex: 1;

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
            border: none;
            border-radius: 0.3rem;
            background-color: var(--background);

            &:hover {
                color: #0009;
            }
        }
    }

    .task {
        background-color: var(--background-extra);
    }

`