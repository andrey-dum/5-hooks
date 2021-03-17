import React, { useState, useEffect, useRef } from 'react'


const useScroll = (parentRef, childRef, callback) => {
  const observer = useRef()
  // https://developer.mozilla.org/ru/docs/Web/API/Intersection_Observer_API
  useEffect(() => {
    const options = {
      root: parentRef.current,
      rootMargin: '0px',
      threshold: 0
    }

    observer.current = new IntersectionObserver(([target]) => {
      if(target.isIntersecting) {
        console.log('itersected');
        callback()
      }
    }, options)

    observer.current.observe(childRef.current)

    return () => {
      observer.current.unobserve(childRef.current)
    }

  }, [callback])


}


export default useScroll
