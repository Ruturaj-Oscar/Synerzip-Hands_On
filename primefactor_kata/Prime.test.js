const prime=require('./Prime')
describe("Prime factor test",()=>{
    test("Test for null",()=>{
        expect(prime.getFactor(1)).toEqual(null);
    })
    test("Test for 2",()=>{
        expect(prime.getFactor(2)).toEqual([2]);
    })
    test("Test for 3",()=>{
        expect(prime.getFactor(3)).toEqual([3]);
    })
    test("Test for 4",()=>{
        expect(prime.getFactor(4)).toEqual([2,2]);
    })
    test("Test for 8",()=>{
        expect(prime.getFactor(8)).toEqual([2,2,2]);
    })
    test("Test for 9",()=>{
        expect(prime.getFactor(9)).toEqual([3,3]);
    })
    test("Test for any number",()=>{
        expect(prime.getFactor(1269)).toEqual([3,3,3,47]);
    })
})