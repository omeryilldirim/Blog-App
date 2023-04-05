import React from 'react'

const CommentCard = ({user,time_stamp,content}) => {
  const date = new Date(time_stamp).toLocaleString()

  return (
    <div className='my-2 ml-4 px-4 py-1 border-2 border-dotted border-blue-300'>
        <h5 className='text-blue-400 text-sm'>{user}</h5>
        <p className=''>{content}</p>
        <p className='text-xs text-slate-400'>{date}</p>
    </div>
  )
}

export default CommentCard