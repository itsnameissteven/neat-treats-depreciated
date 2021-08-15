import sample from "./sample";
var generateId = function (len) {
    if (len === void 0) { len = 4; }
    var characters = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];
    return sample(characters, len).join("");
};
export default generateId;
