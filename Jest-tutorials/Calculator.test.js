const calci = require('./Calculator');

describe("Testing functionalities of calculator", () => {
    test("Testing for 2 numbers addition",()=>{
        expect(calci.addition(2,4)).toBe(6)
    })
    test("Testing for 2 numbers multiplication",()=>{
        expect(calci.multiplication(2, 4)).toBe(8)
    })
    test("Testing for 2 numbers substraction",()=>{
        expect(calci.substraction(2, 4)).toBe(-2)
    })
    test("Testing for 2 numbers division",()=>{
        expect(calci.substraction(4,2)).toBe(2)
    })
})
describe("Before each validation testing",()=>{
    test("If numbers are undefined",()=>{
        expect(calci.addition(undefined,undefined)).toBe(undefined)
    })
    test("If numbers are undefined",()=>{
        expect(calci.substraction(undefined,undefined)).toBe(undefined)
    })
    test("If numbers are undefined",()=>{
        expect(calci.multiplication(undefined,undefined)).toBe(undefined)
    })
    test("If numbers are undefined",()=>{
        expect(calci.division(undefined,undefined)).toBe(undefined)
    })
})
test("subtracting larger number from smaller number",()=>{
    expect(calci.substraction(2,4)).toBe(-2);
})
test("dividing small number with large number",()=>{
    expect(calci.division(2,4)).toBe(1/2);
})
test("multiply 2 negative numbers",()=>{
    expect(calci.multiplication(-2,-4)).toBe(8);
})
test("multiplication of negative and positive numbers",()=>{
    expect(calci.multiplication(-2,4)).toBe(-8);
})
test("addition of negative numbers",()=>{
    expect(calci.addition(-2,-8)).toBe(-10)
})