const a = 10;
const b = 20;
(function add(a,b){
    console.log(a+b);
})(a,b);



const res = (function(a,b){
    return a+b;
})(5,3);
console.log(res);

(function(message){
    console.log(message);
})("hello world!");