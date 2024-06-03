function divide(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (b === 0) {
                reject(new Error("cant divide"))
            } else {
                resolve(a / b)
            }
        }, 1000)
    })
}
let prom= divide(12, 4)
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.log(error);
    })