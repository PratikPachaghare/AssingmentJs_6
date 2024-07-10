function regX(pattern, str){
    let regx = new RegExp(pattern);
    return regx.test(str); 
}


console.log(regX("ab","abbcde"));
console.log(regX("bc","abbcde"));