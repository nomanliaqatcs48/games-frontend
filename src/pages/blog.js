import React from 'react'
import { Box } from '@mui/material'
import Layout from '../baseStructure/Layout'
import Blog from '../components/Blog/Blog'
import FreeTrialAbout from '../components/FreeTrialAbout'
import '../components/FreeTrialAbout/index.scss'

const blog = () => {
  return (
    <Layout>
        <Box className="BlogPage">
        <Blog/>
        <FreeTrialAbout/>
        </Box>
    </Layout>
  )
}

export default blog