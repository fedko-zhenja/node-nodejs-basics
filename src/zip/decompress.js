import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import zlib from 'node:zlib';
// Compress me!
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathCompressedFile = path.join(__dirname, 'files', 'archive.gz');
const pathDecompressedFile = path.join(__dirname, 'files', 'fileToCompress.txt');

const decompress = async () => {
    const gunzip = zlib.createGunzip();

    const readStream = fs.createReadStream(pathCompressedFile);
    const writeStream = fs.createWriteStream(pathDecompressedFile);

    readStream.pipe(gunzip).pipe(writeStream);
};

await decompress();