let msg = "";
function chuckNorris(msg) {
  let result = "";
  let binaire = binary(msg);
  console.log(binaire);

  let premier = "";
  for (let index = 0; index < binaire.length; index++) {

    if (index !== 0)
      result += " ";
    if (premier !== binaire.charAt(index)) {
      if (binaire.charAt(index) === "0")
        result += "00 0";
      else
        resul += "0 0";
    }
    else {
      result = result + "0";
    }
    premier = binaire.charAt(index);
  }
  return result;
}



function binary(numba) {
  let resul = "";
  for (let index = 0; index < numba.length; index++) {
    let binar = numba.charCodeAt(index).toString(2);
    resul += binar;

  }
  return resul;
}

