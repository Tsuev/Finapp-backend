import Express, { json } from "express";
import cors from "cors";
import UsersRoutes from './routers/UserRoutes.js'

const PORT = process.env.PORT || 5000;
const app = Express();

app.use(cors())
app.use(Express.json());
app.use('/api/users', UsersRoutes)

app.listen(PORT, ()=> {
    console.log('server runing');
})
