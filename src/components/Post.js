import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

export default function Post(props) {
  const { post } = props

  return (
    <Wrapper>
      <Link to={post.slug}>
        <PostDetail>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </PostDetail>
        <PostFooter>
          <small>{post.date}</small>
          <small>☕️ {post.read}</small>
        </PostFooter>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  border: 1px solid ${(props) => props.theme.colors.borderColor1};
  background-color: ${(props) => props.theme.colors.background};
  transition: transform linear 300ms;

  a {
    position: relative;
    text-decoration: none;
    color: inherit;
    font-weight: 600;
    transition: all 300ms;
    padding: 30px;
    height: 200px;
    display: flex;
    flex-direction: column;

    :hover {
      h2 {
        text-decoration: underline;
      }
    }

    h2 {
      margin-bottom: 10px;
    }

    p {
      font-size: 14px;
      line-height: 1.4;
    }
  }

  * {
    margin: 0;
    padding: 0;
  }

  :hover {
    transform: scale(1.05);
    z-index: 1;
  }
`

const PostDetail = styled.div`
  flex: 1;
`
const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
