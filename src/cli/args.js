const parseArgs = () => {
    let resaltStr = '';

    process.argv.forEach((el, index) => {
        if(el.startsWith('--')) {
            index === process.argv.length - 2 ?
                resaltStr += `${el.slice(2)} is ${process.argv[index + 1]}` : 
                resaltStr += `${el.slice(2)} is ${process.argv[index + 1]}, `
        }
    });

    console.log(resaltStr);

};

parseArgs();