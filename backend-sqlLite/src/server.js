import { app } from "./app.js";
import dotenv from "dotenv"
import https from "https";
import fs from "fs";

dotenv.config();

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log("Api Rodando na porta ", PORT));

//porta 443 para servidores em produção
https.createServer({
    cert: fs.readFileSync("./src/SSL/code.crt"),
    key: fs.readFileSync("./src/SSL/code.key"),
},app).listen(3334, () => console.log("Api rodando em https na porta 3334"));

