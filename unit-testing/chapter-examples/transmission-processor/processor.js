function processor(transmission) {

    transmission = transmission.trim();

    if (transmission.indexOf("::") < 0) {
       // Data is invalid
       return -1;
    }
    let parts = transmission.split('::');
    let id = parts[0];
    let rawData = parts[1];
    if(rawData[0] !== '<')
        rawData = -1;
    return {
            id: Number(id),
            rawData: rawData
            };
 }

 module.exports = processor;