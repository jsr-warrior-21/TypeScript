type plist = {
    name: { first: string; last: string }[];
};
export default function PersonList(props:plist) {
    return (
    <>
        {props.name.map((elem)=><h1 key={elem.first}>{elem.first} :-- {elem.last}</h1>)}
    </>
    
);
}
