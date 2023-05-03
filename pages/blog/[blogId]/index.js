import React from 'react'
import { useRouter } from 'next/router'

const BlogDetails = () => {
    const router = useRouter()
    const blogId = router.query.blogId
  return (
    <div>This is a Blog Number # {blogId}</div>
  )
}

export default BlogDetails