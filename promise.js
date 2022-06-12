const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme

const promiseOutput = async (emotion) => {
  try {
    let sumData =(await promiseTheaterIXX()).concat (await promiseTheaterVGC());
    return sumData.filter((data) => data.hasil === emotion).length;

  } catch(err) {
    console.log(err)
  }
}

module.exports = {
  promiseOutput,
};
