export const findMean = (arr=[]) => {
    const sum = arr.reduce(( previousValue, currentValue ) => previousValue + currentValue, 0);
    rerturn (sum / arr.length);
}