import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

export default function Post(props) {
  const { post } = props

  return (
    <Wrapper>
      <div className="abstract"></div>
      <Link to={post.fields.slug}>
        <PostDetail>
          <h2>{post.frontmatter.title}</h2>
          <p>{post.frontmatter.description}</p>
        </PostDetail>
        <PostFooter>
          <small>{post.frontmatter.date}</small>
          <small>☕️ {post.fields.readingTime.text}</small>
        </PostFooter>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  border: 1px solid #fff;
  background-color: ${(props) => props.theme.colors.background};
  transition: transform linear 300ms;

  .abstract {
    width: 0;
    height: 100%;
    position: absolute;
    background-color: #f1f1f1;
    top: 0;
    left: 0;
    transition: all 300ms;
  }

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
    /* .abstract {
      width: 100%;
    } */

    a {
      /* color: #222; */
    }
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
