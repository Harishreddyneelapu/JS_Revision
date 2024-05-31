var greet="hello! good morning, my name is harish";
const res = capital(greet);
function capital(greet){
    return greet.split(' ').map(word =>{
        return word.charAt(0).toUpperCase()+word.slice(1);
    }).join(' ');
}
console.log(res);