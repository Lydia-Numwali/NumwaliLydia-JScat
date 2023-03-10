const http=require('http')
const express=require('express')
const app=express;
const PORT=8000;
const server=http.createServer((req,res)=>{
    app.get("/sum", (req, res) => {
        const numbers = req.query.numbers;
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += parseInt(numbers[i]);
        }
        res.send({ result: sum });
    });
    
    app.get("/product", (req, res) => {
        const numbers = req.query.numbers;
        let product = 1;
      for(let i=0;i<numbers.length;i++){
        product *= parseInt(numbers[i]);
      }
        res.send({ result: product });
    });
});
server.listen(PORT,()=>{
console.log(`server running on port ${PORT}`);
})

