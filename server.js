import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/save-data', (req, res) => {
    const { name, age, weight, height, bio } = req.body;

    fs.readFile('public/data.js', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Chyba při čtení souboru');
        }

        const newData = `\nconst user = { name: "${name}", age: "${age}", weight: "${weight}", height: "${height}", bio: "${bio}" };`;
        const updatedData = data + newData;

        fs.writeFile('public/data.js', updatedData, 'utf8', (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Chyba při zápisu do souboru');
            }
            res.send('Data byla úspěšně uložena');
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server běží na http://localhost:${PORT}`);
});
