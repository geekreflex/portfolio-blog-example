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

  h3 {
    margin: 0;
  }
`
