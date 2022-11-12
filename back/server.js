import Express, { json } from "express";
import UsersRoutes from './routers/UserRoutes.js'

const PORT = process.env.PORT || 5000;
const app = Express();


app.use(Express.json());
app.use('/api/users', UsersRoutes)

app.listen(PORT, ()=> {
    console.log('server runing');
})
