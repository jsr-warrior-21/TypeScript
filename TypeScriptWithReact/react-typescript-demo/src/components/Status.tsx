type statusprops = {
  status: "loading" | "success" | "error";
};
const Status = (props: statusprops) => {
  let msg;
  if (props.status == "loading") {
    msg = "Data is in loading state.";
  } else if (props.status == "error") {
    msg = "There is an error in file.";
  } else if (props.status == "success") {
    msg = "Data fetched successfully.";
  }
  return (
    <>  
        <h1 style={{wordSpacing:'70px'}}>status msg</h1>
        <br />
        <h3>{props.status} :-- {msg}</h3>
    </>
  )
};

export default Status;
