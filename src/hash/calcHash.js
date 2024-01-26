import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
 
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathFile = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
const hash = crypto.createHash('sha256');

const calculateHash = async () => {
    const fileStream = fs.createReadStream(pathFile);

    fileStream.on('data', (data) => {
        hash.update(data);
    });

    fileStream.on('end', () => {
        const finalHash = hash.digest('hex');
        console.log(finalHash);
    })

    fileStream.on('error', (err) => {
        console.error(err);
    })
};

await calculateHash();