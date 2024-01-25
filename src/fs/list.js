import fs from 'fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathFile = path.join(__dirname, 'files'); 

const list = async () => {
    try {
        await fs.access(pathFile);

        const files = await fs.readdir(pathFile);
        console.log(files);
    } catch {
        console.error('FS operation failed');
    }
};

await list();