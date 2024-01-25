const parseEnv = () => {
    const processEnvArray = Object.entries(process.env);
    const RSS_array = processEnvArray.filter((arr) => arr[0].startsWith('RSS_'))
    let RSS_resaltStr = '';

    RSS_array.forEach((arr, index) => {
        if(index === RSS_array.length - 1) {
            RSS_resaltStr += `${arr[0]}=${arr[1]}`
        } else {
            RSS_resaltStr += `${arr[0]}=${arr[1]}; `
        }
    })

    console.log(RSS_resaltStr);
};

parseEnv();