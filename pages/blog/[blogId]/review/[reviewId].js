import React from 'react'
import { useRouter } from 'next/router'

const ReviewPage = () => {
    const router = useRouter()
    const reviewId = router.query.reviewId
  return (
    <div>This is Review Number # {reviewId}</div>
  )
}

export default ReviewPage