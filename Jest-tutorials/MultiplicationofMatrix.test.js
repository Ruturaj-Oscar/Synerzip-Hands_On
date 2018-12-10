const multi = require('./MultiplitionofMatrix')

test("matrix multiplication test", () => {
    expect(multi.getMultiplication([[1, 2],[2, 4]], [[1, 3], [2, 3]],2,2)).toEqual([[5,9],[10,18]])
})