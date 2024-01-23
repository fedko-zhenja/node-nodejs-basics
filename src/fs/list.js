import fs from 'fs/promises';

const pathFile = 'src/fs/files'; 

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