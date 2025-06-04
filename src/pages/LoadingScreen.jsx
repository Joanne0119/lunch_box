import React from 'react'

const LoadingScreen = () => {
  return (
    <div className="flex items-center flex-col justify-center h-screen bg-base-200 text-base-content">
      <span className="loading loading-spinner loading-xl mb-5"></span>
        <h1 className="text-2xl font-bold ml-4">Loading...</h1>
    </div>
  )
}

export default LoadingScreen
