import React, { useState } from "react"
import { navigate } from "gatsby"
import styled from "styled-components"
import { useFlexSearch } from "react-use-flexsearch"
import * as queryString from "query-string"
import Post from "./Post"

const SearchedPosts = ({ results }) => (
  <Wrapper>
    {results.length > 0 ? (
      results.map((node) => {
        return <Post post={node} />
      })
    ) : (
      <p style={{ textAlign: "center" }}>
        Sorry, couldn't find any posts matching this search.
      </p>
    )}
  </Wrapper>
)

const AllPosts = ({ posts }) => (
  <Wrapper>
    {posts.map(({ node }) => {
      const data = {
        title: node.frontmatter.title,
        description: node.frontmatter.description,
        date: node.frontmatter.date,
        read: node.fields.readingTime.text,
        slug: node.fields.slug,
      }

      return <Post post={data} />
    })}
  </Wrapper>
)

const SearchPosts = ({ posts, localSearchBlog, location }) => {
  const { search } = queryString.parse(location.search)
  const [query, setQuery] = useState(search || "")

  const results = useFlexSearch(
    query,
    localSearchBlog.index,
    localSearchBlog.store
  )

  return (
    <>
      <SearchWrap>
        <div className="search-bar">
          <input
            id="search"
            type="text"
            placeholder="Search all posts"
            value={query}
            onChange={(e) => {
              navigate(
                e.target.value ? `/blog/?search=${e.target.value}` : "/blog/"
              )
              setQuery(e.target.value)
            }}
          />
        </div>
        <div>
          <p>Search for articles.</p>
        </div>
      </SearchWrap>
      {query ? <SearchedPosts results={results} /> : <AllPosts posts={posts} />}
    </>
  )
}

export default SearchPosts

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 20px 0 40px;
`
const SearchWrap = styled.div`
  * {
    margin: 0;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .search-bar {
    input {
    }
  }
`
