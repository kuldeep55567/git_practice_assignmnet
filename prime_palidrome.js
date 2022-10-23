//checking number is prime or not
 
let num=13;
for(let i=1;i<=num;i++){
if(num%i==0){
factors+=0;
}
}
console.fog(factors);



//checking string is palidrome or not
let str = "racecar";
let rev_str="";
for(let i = 0;i<str.length;i++){
rev_str+=str[i];
}
if(rev_str==str){
console.log(true);
}else{
console.log(false);
}