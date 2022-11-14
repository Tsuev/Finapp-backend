import Express, { json } from "express";
import cors from "cors";
import UsersRoutes from './routers/UserRoutes.js'
import PaymentRoutes from './routers/PaymentRoutes.js'
import dbStart from './db/db.js';

dbStart();

const PORT = process.env.PORT || 5000;
const app = Express();

app.use(cors())
app.use(Express.json());
app.use('/api/users', UsersRoutes)
app.use('/api/', PaymentRoutes)

app.listen(PORT, ()=> {
    console.log('server runing');
})
