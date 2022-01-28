export const findMode = (array=[]) => {
  let modeMap = new Map();
  let max = 0;
  let maxSet = new Set();
  const checkMax = (data) => {
    (modeMap.get(data) > max)
      ? (maxSet.clear(), maxSet.add(data), (max = modeMap.get(data)))
      : (modeMap.get(data) === max)? maxSet.add(data):{};
  };
  array.map((data) => {
    modeMap.has(data)
      ? (modeMap.set(data, modeMap.get(data) + 1), checkMax(data))
      : (modeMap.set(data, 1), checkMax(data));
  });
  return Array.from(maxSet);
};
