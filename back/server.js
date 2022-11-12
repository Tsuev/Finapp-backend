import Express from "express";


const PORT = process.env.PORT || 5000;
const app = Express();

app.listen(PORT, ()=> {
    console.log('server runing');
})
