import fs from 'fs/promises'; 

const pathFile = 'src/fs/files/fileToRemove.txt';

const remove = async () => {
    try {
        await fs.access(pathFile);
        await fs.unlink(pathFile);
    } catch {
        console.error('FS operation failed'); 
    }
};

await remove();