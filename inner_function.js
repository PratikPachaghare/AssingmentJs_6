function outer(para){
    console.log("outer fuction call");
    function inner(){
        console.log( `inner function but outer function paramiter ${para}`)
    }
    return inner;
}


let inner_solu = outer(" * argument pass *");
console.log(inner_solu());