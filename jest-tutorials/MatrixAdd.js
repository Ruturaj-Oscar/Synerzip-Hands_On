
const getAddition = (num1, num2,row,col) => {
    var result = []
    //var num1 = [], num2 = []
    // for (let i = 0; i < 4; i++) {
    //     result[i] = [];
    //     for (let j = 0; j < 4; j++) {
    //         result[i][j] = 0;
    //     }
    // }
    // var num1 = []
    // for (let i = 0; i < 2; i++) {
    //     a[i] = [];
    //     for (let j = 0; j < 2; j++) {
    //         num1[i][j] = 0;
    //     }
    // }
    // var num2 = []
    // for (let i = 0; i < 2; i++) {
    //     num2[i] = [];
    //     for (let j = 0; j < 2; j++) {
    //         num2[i][j] = 0;
    //     }
    // }

    for (let i = 0; i < row; i++) {
        result[i] = [];
        for (let j = 0; j < col; j++) {
            result[i][j] = 0;
        }
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            result[i][j] = num1[i][j]+num2[i][j];
        }
    }
    console.log(result)

    return result;

}
module.exports = { getAddition }