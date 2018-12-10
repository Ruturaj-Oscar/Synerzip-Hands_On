let imageTagSource = function (myImgTag1, imgSrc) {
    let imagePromise = new Promise(function (imgLoad, imgFail) {
        let imgTag = document.getElementById(myImgTag1);
        imgTag.onload = function () {
            imgLoad("Image loaded");
        }
        imgTag.src = imgSrc;
    });
    return imagePromise;
};
imageTagSource("myImgTag", "https://www.google.co.in/logos/doodles/2018/celebrating-400o-of-murillo-5901104519839744-l.png")
    .then(
        function (message) {
            console.log(message);
        }, function () {
            console.log("something went wrong");
        });


function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    var result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: 'resolved'
}

asyncCall();
