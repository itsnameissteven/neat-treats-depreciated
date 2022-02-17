var sample = function (arr, len) {
    if (len === void 0) { len = 1; }
    var output = [];
    for (var i = 0; i < len; i++) {
        output.push(arr[Math.floor(Math.random() * arr.length)]);
    }
    return output;
};
export default sample;
