/* eslint-disable @typescript-eslint/no-inferrable-types */
import express from "express";

const log = console.log;

const app: express.Application = express();

const port: number = 1345;

app.get('/', (_, res) => {
    res.sendFile(`${__dirname}/html/index.html`)
})
app.get('/css/:name', (req, res) => {
    const {name} = req.params
    res.sendFile(`${__dirname}/css/${name}.css`)
})
app.get('/ts/:name', (req, res) => {
    const {name} = req.params
    res.sendFile(`${__dirname}/ts/${name}.ts`)
})

app.listen(port, () => {
    log(`[API OK] Ecoute sur http://localhost:`+port);
})