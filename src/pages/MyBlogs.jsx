import React from 'react'
import Card from '../components/blog/Card'

const MyBlogs = () => {
  
  return (
    <div className='flex min-h-[90vh] items-center justify-center gap-5 flex-wrap p-5'>
    {[]?.map((blog) => (
      <Card key={blog.id} blog={blog}/>))}
  </div>
  )
}

export default MyBlogs