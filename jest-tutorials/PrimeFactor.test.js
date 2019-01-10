
const primeVar=require('./PrimeFactor');

describe("Prime factor test",()=>{
    test("Null test",()=>{
        expect(primeVar.getFactors(1)).toEqual(null);
    })
    test("tTst : for 2",()=>{
        expect(primeVar.getFactors(2)).toEqual([2]);
    })
    test("Test : for 3",()=>{
        expect(primeVar.getFactors(3)).toEqual([3]);
    })
    test("Test : for 4",()=>{
        expect(primeVar.getFactors(4)).toEqual([2,2]);
    })
    test("Test : for 8",()=>{
        expect(primeVar.getFactors(8)).toEqual([2,2,2]);
    })
    test("Test : for 9",()=>{
        expect(primeVar.getFactors(9)).toEqual([3,3]);
    })
    test("Test : for 1269",()=>{
        expect(primeVar.getFactors(1269)).toEqual([3,3,3,47]);
    })
})