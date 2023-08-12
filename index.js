import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./router/userRouter.js";

dotenv.config();


const app = express();
const port = 8000;

mongoose.connect(process.env.DATABASE_URI)
    .then(() => {
        console.log("Database connection success");
    })
    .catch(err => console.log(err));

app.use(express.json());

// app.get("/", (req, res) => {
//     return res.send(`
//     Users API: <a href="/api/users">/api/users</a><br/>
//     Search with a specific field: 
//     <script>document.body.style.background="black"</script>
//     `)
// });

app.use("/api/users", userRouter);

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})