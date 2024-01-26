import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import zlib from 'node:zlib';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathFile = path.join(__dirname, 'files', 'fileToCompress.txt');
const pathCompressedFile = path.join(__dirname, 'files', 'archive.gz');

const compress = async () => {
    const gzip = zlib.createGzip();

    const readStream = fs.createReadStream(pathFile);
    const writeStream = fs.createWriteStream(pathCompressedFile);

    readStream.pipe(gzip).pipe(writeStream);
};

await compress();