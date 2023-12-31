let a = 10;
let b = 20;



new Promise((res, rej)=>{
    setTimeout(()=>{
        b = 90;
        res(b);
    },2000)
}).then((data)=>{
    b = data;
    console.log(a+b)
})
