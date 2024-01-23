import fs from 'fs/promises';

const pathWrongFile = 'src/fs/files/wrongFilename.txt';
const pathProperFile = 'src/fs/files/properFilename.md'; 

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