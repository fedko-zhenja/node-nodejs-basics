import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { fork } from 'node:child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathFile = path.join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
    fork(pathFile, args);
};

spawnChildProcess(['arg', 'arg2', 'arg3', 555]);
