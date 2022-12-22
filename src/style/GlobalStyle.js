import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: 'merriweather';
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.textColor};
}

p {
  margin-bottom: 0.8em;
  line-height: 1.6;
  letter-spacing: 1px;
}

blockquote {
  margin: 2em 0;
  border: 1px solid ${(props) => props.theme.colors.darkPurple};
  border-left-width: 6px;
  background: ${(props) => props.theme.colors.darkPurple}20;
  padding: 1.5rem;
  margin-left: 0;
  border-radius: 3px;

}

blockquote p {
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 400;
  margin: 0;
}

.filename {
  background-color: ${(props) => props.theme.colors.bg_secondary};
  margin-bottom: -20px;
  padding: 0;
  height:45px;
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  font-size: 14px;
  
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background: ${(props) => props.theme.colors.scrollbarColor};
}

::-webkit-scrollbar-thumb {
  background: ${(props) => props.theme.colors.scrollbarThumbColor};
  border-radius: 2px;
}

`
