
const functions= [
function(){console.log("function 1")},
function(){console.log("function 2")},
function(){console.log("function 3")}
]

functions.forEach(function(func){func()});

function test1(){console.log("function as declaration");}

const test2 = function(){console.log("function as expression")};

test1();
test2();

const keyFunction = {
key1:()=>{console.log("key1");},
key2:()=>{console.log("key2");}
}

keyFunction.key1();
