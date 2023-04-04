import React, { useEffect } from 'react'
import useBlogCall from '../hooks/useBlogCall'
import Card from '../components/blog/Card'
import { useSelector } from 'react-redux'

const Home = () => {
  const {getBlogs} = useBlogCall()
  const {blogs} = useSelector((state) => state.blog)

  useEffect(() => {
    getBlogs()
  }, [])
  
  return (
    <div className='flex min-h-[90vh] items-center justify-center gap-5 flex-wrap p-5'>
      {blogs?.map((blog) => (
        <Card key={blog.id} blog={blog}/>))}
    </div>
  )
}

export default Home