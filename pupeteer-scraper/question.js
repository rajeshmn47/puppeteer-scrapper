function flattenMultiArray(arr) {
    const flattened = [].concat(...arr);
    return flattened.some((item) => Array.isArray(item))
      ? flattenMultiArray(flattened)
      : flattened;
  }
  const multiDimensionalArr = [11, [22, 33], [44, [55, 66, [77, [88]], 99]]];
  const flatArr = flattenMultiArray(multiDimensionalArr);
  console.log(typeof flatArr,flatArr)