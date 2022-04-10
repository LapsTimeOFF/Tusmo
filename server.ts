/* eslint-disable @typescript-eslint/no-inferrable-types */
import express from "express";

const log = console.log;

const app: express.Application = express();

const port: number = 1345;

app.get('/', (_, res) => {
    res.sendFile(`${__dirname}/html/index.html`)
})

app.listen(port, () => {
    log(`[API OK] Ecoute sur http://localhost:`+port);
})