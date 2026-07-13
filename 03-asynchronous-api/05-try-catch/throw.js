function luasPersegi(p, l){
    if(isNaN(p) || isNaN(l)){
        throw new Error("Parameter Is Not A Number");
    }else{
        return p * l;
    }
}

try{
    console.log(luasPersegi(3, "A"));
}catch(err){
    console.error(err);
}