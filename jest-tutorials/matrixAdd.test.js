const matrixAdd = require('./MatrixAdd')


test("Matrix addition test", () => {
    expect(matrixAdd.getAddition([[2, 3], [3, 2]], [[1, 2], [2, 1]], 2, 2)).toEqual([[3, 5], [5, 3]])
})
test("Matrix addition test", () => {
    expect(matrixAdd.getAddition([[2, 3, 1], [3, 2, 1], [4, 5, 1]], [[1, 2, 1], [2, 1, 1], [4, 5, 1]], 3,3)).toEqual([[ 3, 5, 2 ], [ 5, 3, 2 ], [ 8, 10, 2 ]])
})

