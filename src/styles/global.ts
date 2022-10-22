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

    .todo {
        background-color: var(--background-todo);
    }

    .doing {
        background-color: var(--background-doing);
    }

    .done {
        background-color: var(--background-done);
    }

    .extra {
        background-color: var(--background-extra);
    }

    .todo-fade {
        background-color: var(--background-todo-fade);
    }

    .doing-fade {
        background-color: var(--background-doing-fade);
    }

    .done-fade {
        background-color: var(--background-done-fade);
    }

    .extra-fade {
        background-color: var(--background-extra-fade);
    }
`