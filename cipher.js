const cipher = {
  encode: function (offset, string) {
     if (!offset || !string) {
       throw new TypeError("Valores invalidos");
      }
    let textEncode = "";
    for (let i = 0; i < string.length; i++) {
      let text = string.charCodeAt(i);
      let move = String.fromCharCode(((text - 65 + parseInt(offset)) % 26) + 65);
      textEncode += move;
    }
    return textEncode;
  },

  decode: function (offset, string) {
    if (!offset || !string) {
      throw new TypeError("Valores invalidos");
     }
    let textCode = "";
    for (let i = 0; i < string.length; i++) {
      let str = string.charCodeAt(i);
      let step = String.fromCharCode(((str + 65 - parseInt(offset) % 26) % 26) + 65);
      textCode += step;
    }
    return textCode;
  }
}

export default cipher;