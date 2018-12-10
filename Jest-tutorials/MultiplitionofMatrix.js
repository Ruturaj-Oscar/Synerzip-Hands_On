
var getMultiplication = (num1, num2, row, col) => {
    var result = [];
    for (let i = 0; i < row; i++)
    {
        result[i] = [];
        for (let j = 0; j < col; j++)
        {
            result[i][j] = 0;
            for (let k = 0; k < 2; k++)
            {
                result[i][j]+=(num1[i][k]*num2[k][j]);
            }
        }
    }
    return result;
}      
module.exports = { getMultiplication };