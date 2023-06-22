import React from 'react'

export const Spinner = () => {
  return (
    <div className='text-center my-5'>
        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
  )
}
