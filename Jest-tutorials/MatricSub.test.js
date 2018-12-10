const matricSub = require('./MatricSub')


test("Matrix substraction test", () => {
    expect(matricSub.getSubstraction([[2, 3], [3, 2]], [[1, 2], [2, 1]], 2, 2)).toEqual([[1, 1], [1, 1]])
})
test("Matrix substraction test", () => {
    expect(matricSub.getSubstraction([[5, 7, 2], [3, 2, 1], [4, 5, 1]], [[1, 2, 1], [2, 1, 1], [4, 6, 0]], 3, 3)).toEqual([[4, 5, 1], [1, 1, 0], [0, -1, 1]])
})
test("Matrix substraction test", () => {
    expect(matricSub.getSubstraction([[5, 7], [3, 2], [4, 5]], [[1, 2], [2, 1], [4, 6]], 3, 2)).toEqual([[4, 5], [1, 1], [0, -1]])
})