import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --background-todo: #3C91E6;
        --background-doing: #9688f2;
        --background-done: #A2D729;
        --background-extra: #8AA29E;
        --background-todo-fade: #3C91E615;
        --background-doing-fade: #9688f215;
        --background-done-fade: #A2D72915;
        --background-extra-fade: #8AA29E15;
        --background-board: #695D6F;
        --shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        --fit: calc(100vh - 4rem);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }

    body {
        background-color: var(--background);
        --webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    body, textarea, button {
        font-family: 'Poppins', sans-serif;
    }

    input {
        font-family: 'Indie Flower';
    }

    .react-modal-overlay {
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        position: relative;
        width: 100%;
        max-width: 32rem;
        min-height: 13rem;
        background-color: var(--background);
        border-radius: 0.25rem;
        padding: 1rem;
        display: flex;

        h2 {
            text-align: center;
        }

        input {
            background-color: inherit;
            padding: 0 1.5rem;
            width: 100%;
            flex-grow: 1;
            border: none;
            font-size: 1.2rem;
            text-align: center;
            caret-color: rgb(0 0 0 / 0.3);

            &::placeholder {
                color: #aaa;
            }

            &:focus::placeholder {
                color: transparent;
            }

            &.modal-section {
                font-family: 'Poppins';
             }
        }

        .confirm {
            border: solid 1px #d7d7d7;
            border-radius: 0.5rem;
            font-size: 1rem;
            background: inherit;
            padding: 0.3rem 1rem;

            &:hover {
                border: solid 1px #0005
            }
        }
        
        .close {
            border: none;
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
        
            img:hover {
                opacity: 0.5;
            }
        }
        
    }
`