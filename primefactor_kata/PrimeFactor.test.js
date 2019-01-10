const prime=require('./PrimeFactor')

describe("Prime factor KATA test",()=>{
    test("test for null",()=>{
        expect(prime.getFactors(1)).toEqual(null);
    })
    test("test for 2 to be 2",()=>{
        expect(prime.getFactors(2)).toEqual([2]);
    })
    test("test for 3 to be 3",()=>{
        expect(prime.getFactors(3)).toEqual([3]);
    })
    test("test for 4 to be 2,2",()=>{
        expect(prime.getFactors(4)).toEqual([2,2]);
    })
    test("test for 8 to be 2,2,2",()=>{
        expect(prime.getFactors(8)).toEqual([2,2,2]);
    })
    test("test for 9 to be 3,3",()=>{
        expect(prime.getFactors(9)).toEqual([3,3]);
    })
    test("test for 1269 to be 47,3,3,3",()=>{
        expect(prime.getFactors(1269)).toEqual([3,3,3,47]);
    })
})