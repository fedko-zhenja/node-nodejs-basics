import fs from 'fs/promises'; 
import path from 'node:path'; 
 
const pathFile = 'src/fs/files'; 
const pathCopyFile = 'src/fs/files_copy'; 
 
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
