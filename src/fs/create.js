import fs from 'fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
 
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathFile = path.join(__dirname, 'files', 'fresh.txt'); 
const content = 'I am fresh and young'; 
 
const create = async () => { 
    try { 
        await fs.access(pathFile); 
        console.error('FS operation failed'); 
    } catch { 
        try { 
            await fs.writeFile(pathFile, content); 
        } catch (error) { 
            console.error(error); 
        } 
    } 
}; 
 
await create();