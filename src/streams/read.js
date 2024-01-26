import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathFile = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    const fileStream = fs.createReadStream(pathFile);
    fileStream.pipe(process.stdout);
};

await read();