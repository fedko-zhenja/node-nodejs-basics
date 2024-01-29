import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathFile = path.join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
    console.log('\x1b[36mEnter text to write to the file. To finish, use Ctrl+C.\x1b[0m ');

    const writeStream = fs.createWriteStream(pathFile, { flags: 'a' });
    process.stdin.pipe(writeStream);
};

await write();