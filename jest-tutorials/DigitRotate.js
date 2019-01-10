const digitRotate=(number)=>{
    var digitSeperate=[];
    while(number>0)
    {
        let res=number%10;
        digitSeperate.push(res);
        console.log(res);
        number=parseInt(number/10);
        //number=Math.floor(number);
    }
     digitSeperate.reverse();
     return digitSeperate;
}

module.exports={digitRotate}