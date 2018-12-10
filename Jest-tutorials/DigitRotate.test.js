const revFun=require('./DigitRotate')
test('Checking the given number is a number',()=>{
    expect(revFun.digitRotate(1234)).toEqual([1,2,3,4]);
})