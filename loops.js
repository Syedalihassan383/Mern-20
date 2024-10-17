// for (let i = 0; i < 12; i++) {
//     const array=[1,2,3,4,4,5,6,7,7];
// console.log("element", array);
// };
// let j = 0;
// while (j < 10) {
//     console.log( "The number is " + j);
//     j++;
//   };
//   const array=[1,2,3,4,4,5,6,7,7];
// array.forEach((value,index,arr)=>{
// console.log("value->" , value);
// console.log( " index -> " ,index , "array,",arr);


// })
const array1=[1,2,3,4,4,5,6,7,7];
const a = array1.map((value,index,arr)=>{
return (value=value+4);
console.log(value);})
console.log(array1);
console.log(a);

