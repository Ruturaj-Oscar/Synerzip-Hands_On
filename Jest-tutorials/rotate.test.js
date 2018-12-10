const rotation=require('./Rotate');

test('Checking for input value=0',()=>{
    expect(rotation.rotate(0)).toEqual([1,2,3,4,5,6,7,8])
})
test('Checking for input value=3',()=>{
    expect(rotation.rotate(3)).toEqual([4,5,6,7,8,1,2,3]);
})
test('Checking for input value=5',()=>{
    expect(rotation.rotate(5)).toEqual([6,7,8,1,2,3,4,5]);
})
test('Checking for input value = larger than array length',()=>{
    expect(rotation.rotate(9)).toEqual([2,3,4,5,6,7,8,1]);
})