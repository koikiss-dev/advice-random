import { createGlobalStyle } from "styled-components";

export const Styled = createGlobalStyle`
:root{
    --Light-Cyan: hsl(193, 38%, 86%);
    --Neon-Green: hsl(150, 100%, 66%);
    --Grayish-Blue: hsl(217, 19%, 38%);
    --Dark-Grayish-Blue: hsl(217, 19%, 24%);
    --Dark-Blue: hsl(218, 23%, 16%);
}
    *, *::after, *::before{
        box-sizing: border-box;
    }    
    *{
        margin: 0;
        padding: 0;    
    }
    html{
        font-size: 62.5%;
    }
    body{
        font-size: 28px;
        font-family: 'Manrope', sans-serif;
        background-color: var(--Dark-Blue);
        display: grid;
        place-item: center;
    }
`;
