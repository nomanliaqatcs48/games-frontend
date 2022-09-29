import React from 'react'
import { Box } from '@mui/material'
import Layout from '../baseStructure/Layout'
import Blog from '../components/Blog/Blog'
import FreeTrialAbout from '../components/FreeTrialAbout'
import { Link, graphql } from 'gatsby';
import '../components/FreeTrialAbout/index.scss'

const blog = ({data}) => {
  return (
    <Layout>
        <Box className="BlogPage">
        {data?.allStrapiBlog?.nodes?.map((blog, index) => {
                return (
                  <Blog blog={blog} key={index} />
                );
        })}
       
        <FreeTrialAbout/>
        </Box>
    </Layout>
  )
}
export const query = graphql`
query MyQuerys {
  allStrapiBlog {
    nodes {
      Slug
      Content
      Title
      id
      Image {
        url
      }
      createdAt
      check {
        data {
          check
        }
      }
    }
  }
}
`

export default blog

