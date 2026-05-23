import React, { useEffect, useRef } from 'react'

const DomRef = () => {
    const inputRef = useRef<HTMLInputElement>(null!); // here we defined type as HTMLInputElement then you are able to use focu()  
    useEffect(()=>{
        inputRef.current?.focus(); // for removing this question mark(optional chaining) wew have add HTMLElement type of useRef and add ! sign at the last of the null.
    },[])
  return (
    <div>
        <input type="text" ref={inputRef} />
    </div>
  )
}

export default DomRef