var userdata: { name: string; age: number; company: string } = {
  name: "AM",
  age: 21,
  company: "Oracle",
};
console.log(userdata);
userdata.name = "ArvindMussu"; // here you must have to assign same datatypes value otherwise it will give error
console.log(userdata);

// if you didn't know the key value

var userdata1: { [key: string]: string | boolean | number | undefined } = {
  name: "AM",
  age: 21,
  LifeLine: true,
};
