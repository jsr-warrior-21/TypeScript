
// this is about passing object as a props and defining types of an object
type pt = {
    name:{
        first:string;
        last:string;
    }
}

export const Person = (props:pt) => {
  return (
    <div>
        Hi {props.name.first} and {props.name.last};
    </div>
  )
}
