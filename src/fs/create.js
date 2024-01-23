import fs from 'fs/promises'; 
 
const path = 'src/fs/files/fresh.txt'; 
const content = 'I am fresh and young'; 
 
const create = async () => { 
    try { 
        await fs.access(path); 
        console.error('FS operation failed'); 
    } catch { 
        try { 
            await fs.writeFile(path, content); 
        } catch (error) { 
            console.error(error); 
        } 
    } 
}; 
 
await create();