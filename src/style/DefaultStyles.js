import styled from "styled-components"

export const ProjectsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`
export const ProjectCard = styled.div`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.bg_secondary};
  color: ${(props) => props.theme.colors.textColor_card};
  border-radius: ${(props) => props.theme.radius1};
  border: 1px solid ${(props) => props.theme.colors.borderColor1};
  cursor: pointer;

  .content {
    h3 {
      margin: 0;
      padding: 0;
      margin-bottom: 10px;
    }

    p {
      font-size: 14px;
      margin-top: 0;
    }
  }
`

export const Button = styled.button`
  padding: 15px 20px;
  border-radius: 4px;
  font-size: 14px;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  background-color: #24877b;
  color: white;
  :hover {
    background-color: #1b655c;
  }
`
