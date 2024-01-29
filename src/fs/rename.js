import fs from 'fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathWrongFile = path.join(__dirname, 'files', 'wrongFilename.txt');
const pathProperFile = path.join(__dirname, 'files', 'properFilename.md'); 

const rename = async () => {
    try {
        await fs.access(pathProperFile);
        console.error('FS operation failed'); 
    } catch {
        try {
            await fs.access(pathWrongFile);
            await fs.rename(pathWrongFile, pathProperFile);
        } catch {
            console.error('FS operation failed'); 
        }
    }
};

await rename();