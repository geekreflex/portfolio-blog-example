import React, { useState } from "react"
import { navigate } from "gatsby"
import styled from "styled-components"
import { useFlexSearch } from "react-use-flexsearch"
import * as queryString from "query-string"
import Post from "./Post"
import { Icon } from "@iconify/react"

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

  const clearSearch = () => {
    setQuery("")
  }

  const results = useFlexSearch(
    query,
    localSearchBlog.index,
    localSearchBlog.store
  )

  return (
    <>
      <SearchWrap>
        <div className="search-bar">
          <span className="search-icon icon">
            <Icon icon="majesticons:search-line" fontSize="24" />
          </span>
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
          <span className="cancel-icon icon" onClick={clearSearch}>
            <Icon icon="eva:close-fill" />
          </span>
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
    background-color: transparent;
    display: flex;
    align-items: center;
    padding: 0 10px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: 2px solid ${(props) => props.theme.colors.borderColor1};
    :focus-within {
      border-color: #1b655c;
    }
    .icon {
      color: ${(props) => props.theme.colors.textColor};
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
    }
    .cancel-icon {
      cursor: pointer;
      font-size: 16px;
      padding: 5px;

      :hover {
        background-color: #888;
      }
    }
    input {
      background: transparent;
      border: none;
      outline: none;
      width: 300px;
      max-width: 100%;
      height: 45px;
      padding: 0 10px;
      font-size: 14px;
      font-weight: 600;
      color: ${(props) => props.theme.colors.textColor};
    }
  }
`
