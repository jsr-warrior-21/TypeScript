import type React from "react"

type HtmlChildrenprop={
    children:React.ReactNode
}
const HtmlChildren = (props:HtmlChildrenprop) => {
  return (
    <div>{props.children}</div>
  )
}

export default HtmlChildren