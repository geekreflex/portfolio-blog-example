import React from "react"
import styled from "styled-components"
import Post from "./Post"

export default function AllPosts(props) {
  const { posts } = props

  console.log(posts)
  return (
    <Wrapper>
      {posts.map((post, index) => (
        <Post key={index} post={post.node} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
