const getFactor = (numbers) => {
    var factorList = [];
    var fact=2;
    if (numbers == 1)
        factorList = null;
    while(numbers>fact)
    {
        if (numbers % fact == 0) {
            factorList.push(fact)
            numbers /= fact
    }
        else 
            fact++;   
    };
    if(numbers>1)
    factorList.push(numbers);

return factorList;
}

module.exports = { getFactor }