type greetProps = {
    name:string;
    college:string;
    islogedIn:boolean;
}

const Greet = (props:greetProps) => {
  return (
    <div>
        
    {!(props.islogedIn)?<h4>Please ! Login first.</h4>:<h3>Hi my name is {props.name}. I am Btech student at {props.college}.</h3>}    

</div>

  )
}

export default Greet