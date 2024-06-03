async function divide(a,b){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(b===0){
                reject(new Error("cant divide"))
            }else{
                resolve(a/b)
            }
        },1000)
    })
}
async function run(){
    try{
        let res = await divide(10,5);
        console.log(res);
    }catch(error){
        console.log(error);
    }
}

run();