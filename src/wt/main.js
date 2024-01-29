import { Worker } from 'node:worker_threads';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { cpus } from 'node:os';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathWorkerFile = path.join(__dirname, 'worker.js');

const performCalculations = async () => {
    const promisesWorkersArray = [];

    for (let i = 0; i < cpus().length; i++) {
        promisesWorkersArray.push(
            new Promise((res) => {
                const worker = new Worker(pathWorkerFile, { workerData: i + 10 });

                worker.on('message', (data) => res({
                    status: 'resolved',
                    data
                }));

                worker.on('error', () => res({
                    status: 'error',
                    data: null
                }));
            })
        );
    }
    
    const promisesWorkersRes = await Promise.all(promisesWorkersArray);
    console.log(promisesWorkersRes);
};

await performCalculations();