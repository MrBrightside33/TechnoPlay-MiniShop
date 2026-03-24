import express from "express";
import cors from "cors";
import morgan from "morgan";
import registerRoutes from './router/registerRoutes.js'
import auth from './router/auth.js'
import cookieParser from "cookie-parser";
import userRoutes from './router/userRoutes.js'


const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(cors({
    origin: "*",
    credentials: true,
}));

const {PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGSSLMODE, PGCHANNELBINDING} = process.env;

const pool = new Pool({
    host: PGHOST,
    database: PGDATABASE,
    user: PGUSER,
    password: PGPASSWORD,
    port: 5432,
    ssl: {
        rejectUnauthorized: false 
    }
})

app.get("/", async (req, res) => {

    const client = await pool.connect();

    try {

        const result = await client.query("SELECT * FROM users()");

        res.json(result.rows);

    } catch (error) {
        console.log(errors);  
    } finally {
        client.release();
    }
    res.status(404);
});

app.use('/api', userRoutes);

app.get("/", (req, res) => {
    res.send("Hello from the backend!");
});


export default app;
