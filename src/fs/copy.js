import fs from 'fs/promises'; 
import path from 'node:path';
import { fileURLToPath } from 'node:url';
 
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathFile = path.join(__dirname, 'files'); 
const pathCopyFile = path.join(__dirname, 'files_copy'); 
 
const copy = async () => { 
    try { 
        await fs.access(pathCopyFile); 
        console.error('FS operation failed'); 
    } catch { 
        try { 
            await fs.access(pathFile); 
            await fs.mkdir(pathCopyFile); 
 
            const files = await fs.readdir(pathFile); 
 
            for(let file of files) { 
                await fs.copyFile(path.join(pathFile, file), path.join(pathCopyFile, file)); 
            } 
        } catch { 
            console.error('FS operation failed'); 
        } 
    } 
}; 
 
await copy();
