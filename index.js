const http=require('http')
const PORT=5000;
const server=http.createServer((req,res)=>{
    app.get("/addition", (req, res) => {
        const numbers = req.query.numbers;
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += parseInt(numbers[i]);
        }
        res.send({ result: sum });
    });
    
    app.get("/multiplication", (req, res) => {
        const numbers = req.query.numbers;
        let product = 1;
      for(let i=0;i<numbers.length;i++){
        product *= parseInt(numbers[i]);
      }
        res.send({ result: product });
    });
});
app.listen(PORT,()=>{
console.log(`server running on port ${PORT}`);
})

