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
