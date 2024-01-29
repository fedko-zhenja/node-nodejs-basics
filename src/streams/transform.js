import { Transform } from 'node:stream';

const transform = async () => {
    const transformStream = new Transform({
        transform(chunk, encoding, callback) {
            const reversedChunkString = chunk.toString().split('').reverse().join('');
            const resaltChunkString = reversedChunkString + '\n';

            this.push(resaltChunkString);
            callback();
        }
    })

    process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();