export const findMedian = (array=[]) => {
    return ((n % 2 == 0) && array[Math.floor((n+1)/2)]) || (array[Math.floor(n/2)] + array[Math.floor(n/2+1)])/2;
}