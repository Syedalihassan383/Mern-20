//else if conditions
console.log("if else ,else if conditions");

const a = "ss"
if (typeof a == "number") {
    console.log("number");
    
    
}else if(a > 12){
console.log("a > 12");

} 
else {console.log("not a number");

    
}
// multiple if
console.log("multiple if");

const b = 11
if (typeof b == "number") {
    console.log("number");
    
    
}
 if(b > 12){
console.log("b > 12");

} 
else {console.log("b<12");}
//nested if
console.log("NESTED IF");
const c = 11
if (typeof c == "number") {
    console.log("number");
    if(c > 12){
        console.log("c > 12");
        
    
    
}
 
} 
else {console.log("c<12");}
const d = "11"
if (typeof d == "number") {
    console.log("number");
    if(c > 12){
        console.log("d > 12");
        
    
    
}
 
} 
else {console.log("d<12");}
//ternary operators
console.log("TERNARY OPERATOR");

a%2 == 0 ? console.log("even"): console.log("odd");

