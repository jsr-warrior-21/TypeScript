
type HtmlElementProps = {
    children:string
}

const HtmlElement = (props:HtmlElementProps) => {
  return (
    <div>{props.children}</div>
  )
}

export default HtmlElement