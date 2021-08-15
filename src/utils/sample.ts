const sample = (arr: any[], len = 1) => {
  let output: string[] = [];

  for (let i = 0; i < len; i++) {
    output.push(arr[Math.floor(Math.random() * arr.length)]);
  }

  return output;
};

export default sample;
