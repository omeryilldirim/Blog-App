import React, { useEffect } from 'react'
import Card from '../components/blog/Card'
import useBlogCall from '../hooks/useBlogCall'
import { useSelector } from 'react-redux'

const MyBlogs = () => {
  const {getMyBlogs} = useBlogCall()
  const {userID} = useSelector((state) => state.auth);
  const {myBlogs} = useSelector((state) => state.blog)
  
  useEffect(() => {
    getMyBlogs(userID)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  
  return (
    <div className='flex min-h-[calc(100vh-136px)] items-center justify-center gap-5 flex-wrap p-5 dark:bg-slate-500'>
    {myBlogs?.map((blog) => (
      <Card key={blog.id} blog={blog}/>))}
  </div>
  )
}

export default MyBlogs