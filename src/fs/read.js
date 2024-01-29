import fs from 'fs/promises'; 
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathFile = path.join(__dirname, 'files', 'fileToRead.txt'); 

const read = async () => {
    try {
        await fs.access(pathFile);

        const fileContent = await fs.readFile(pathFile, { encoding: 'utf8' });
        console.log(fileContent);
    } catch {
        console.error('FS operation failed'); 
    }
};

await read();