
const rotate=(number)=>{
    var arr=[1,2,3,4,5,6,7,8];
    var shiftarr=[];
    if(number>arr.length)
    {
        number=number%arr.length;
    }
    if(number==0)
        shiftarr=arr;

    shiftarr=arr.splice(number,arr.length-number)
    for(let i=0;i<arr.length;i++)
    {
        shiftarr.push(arr[i]);
    }

    return shiftarr;
}
module.exports={rotate};


