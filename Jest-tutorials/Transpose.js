
const getTranspose = (num1,row,col) => {
    var result = []
   

    for (let i = 0; i < row; i++) {
        result[i] = [];
        for (let j = 0; j < col; j++) {
            result[i][j] = 0;
        }
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            result[i][j] = num1[j][i];
        }
    }
    console.log(result)

    return result;

}
module.exports = { getTranspose }

