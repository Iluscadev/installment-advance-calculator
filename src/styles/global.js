import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+HK:wght@400;700&display=swap');

* {
    margin: 0;
    padding: 0;
    color: var(--gray6);
    background-color: var(--gray1);
    font-family: 'Noto Sans HK', sans-serif;
}

:root {
    --gray1: #f5f7fa;
    --gray2: #f7f9fa;
    --gray3: #cecece;
    --gray4: #bdbdbd;
    --gray5: #656565;
    --gray6: #323232;
    --gray7: #d4dee5;
    --purewhite: #ffffff;
    --paleblue: #3d75bb;
    --lighblue: #bcd6f5;

}

a {
    text-decoration: none;
}

button {
    cursor: pointer;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
}
`;
