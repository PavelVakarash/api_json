//http://127.0.0.1:5500/index.html
async function f(){
    let response = await fetch("http://127.0.0.1:5500/api/clothes.json");
    let obj = await response.json();
    console.log(obj);

    console.log(obj.clothes[1]);
    console.log(obj.clothes[1].name);
    console.log(obj.clothes[0].size[2]);
}

f();