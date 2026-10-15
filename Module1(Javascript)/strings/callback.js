//Callback
function add(a, b){
     console.log(a+b);
}


function process(a, b, callback){
    callback(a, b);
}

process(3, 5, add);

