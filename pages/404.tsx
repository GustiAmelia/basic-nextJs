import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

function Custom404() {

  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push("/")
    }, 2000)
  }, [])
  return (
    <div>
      <h1 className="title-404-page">yaahhhhhhh</h1>
      <h1 className="title-404-page">ga adaaa nich</h1>
    </div>
  )
}

export default Custom404
