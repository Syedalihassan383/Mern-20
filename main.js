const user = require("./user")


let header;
const setheader = (newvalue)=>{
    header = newvalue
};
user(setheader);
 header == "home"  && console.log("home");
header == "task" && console.log("task");
header == "profile" && console.log("profile");


