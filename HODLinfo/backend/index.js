import express from "express";
import { PORT } from "./config.js";
import cors from "cors";
import path from "path";
import * as url from "url";

const app = express();


const __dirname = url.fileURLToPath(import.meta.url);

let front = path.join(__dirname, "../../frontend");
app.use(express.static(front))

let objectValues = "";
export const api = async() =>{
  const request = await fetch("https://api.wazirx.com/api/v2/tickers");
  const response = await request.json();
  const object = Object.entries(response);
  const tenEntries = object.slice(0, 10);
  objectValues = JSON.stringify(tenEntries);
  // console.log(objectValues);
}

app.get('/', async (req, res) => {
  await api();
  res.sendFile(path.join(front, '/index.html'));
})

app.get('/api/tickers', async (req, res) => {
  try {
    const response = await fetch("https://api.wazirx.com/api/v2/tickers");
    const data = await response.json();
    const object = Object.entries(data);
    const tenEntries = object.slice(0, 10);
    // const firstEntry = tenEntries[0][1];
    // const secondEntry = tenEntries[1][1];

    // const responseData = {
    //   firstEntry,
    //   secondEntry,
    //   tenEntries,
    // }
    res.json(tenEntries);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, ()=>{
  console.log(`App is listening to port: ${PORT}`);
  console.log(`Go to: http://localhost:${PORT}`);
})