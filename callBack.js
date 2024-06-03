function display(a,b){
    const res= a/b;
    console.log(res);
}

function divide(a,b,callback){
    if(b===0){
        console.log("cant divide");
    }else{
        callback(a,b)
    }
}

divide(12,3,display)