let myPromise = new Promise(function (resolve, reject) {
    let myStatement = false;
    if (myStatement) {
        console.log("Inside resolve");
    }
    else {
        throw "Error occured";
    }
    // else
    // {
    //     console.log("Inside Reject");
    // }
});
myPromise.then(function (value) {
    console.log("value");
}).catch(function (error) {
    console.log(error + "  Incatch block");
});

let getMePromise = function () {
    return new Promise(function (success, failure) {
        let myCondition = false;
        if (myCondition) {
            success();
        }
        else {
            failure();
        }
    });
}

getMePromise().then(
    function () {
        console.log("Hello , execution successful");

    }, function () {
        console.log("Execution failed");
        alert("Ha-Ha , You did something wrong");
        throw "Some catched error";
    }).catch(function (error) {
        console.log(error);
    });




