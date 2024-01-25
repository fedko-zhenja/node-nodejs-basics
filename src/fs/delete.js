import fs from 'fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathFile = path.join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
    try {
        await fs.access(pathFile);
        await fs.unlink(pathFile);
    } catch {
        console.error('FS operation failed'); 
    }
};

await remove();