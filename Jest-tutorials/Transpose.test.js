const matrixTranspose = require('./Transpose')

test("Matrix Transpose test 0", () => {
    expect(matrixTranspose.getTranspose([[], []], 2, 2)).toEqual([[undefined, undefined], [undefined ,undefined]])
})
test("Matrix Transpose test 1", () => {
    expect(matrixTranspose.getTranspose([[2, 1], [3, 2]], 2, 2)).toEqual([[2, 3], [1, 2]])
})
test("Matrix Transpose test 2", () => {
    expect(matrixTranspose.getTranspose([[2, 1], [3, 2], [3, 5]], 2, 3)).toEqual([[ 2, 3, 3 ], [ 1, 2, 5 ]])
})
test("Matrix Transpose test 3", () => {
    expect(matrixTranspose.getTranspose([[2, 1,4], [3, 2,0], [3, 5,7]], 3, 3)).toEqual([[ 2, 3, 3 ], [ 1, 2, 5 ], [ 4, 0, 7 ]])
})