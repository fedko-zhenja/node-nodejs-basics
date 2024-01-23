import fs from 'fs/promises'; 

const pathFile = 'src/fs/files/fileToRead.txt'; 

const read = async () => {
    try {
        await fs.access(pathFile);

        const fileContent = await fs.readFile(pathFile, { encoding: 'utf8' });
        console.log(fileContent);
    } catch {
        console.error('FS operation failed'); 
    }
};

await read();