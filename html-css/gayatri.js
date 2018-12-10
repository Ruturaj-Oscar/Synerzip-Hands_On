let image2TagSource = function (imageTag2, img2Src) {
    let imagepromise2 = new Promise(function (imageResolve, imageReject) {
        imageTag2 = document.getElementById(myImgTag2);
        imageTag2.onload = function () {
            imageResolve("Image loaded");
        }
        imageTag2.src = img2Src;
    });
    return imagepromise2;
};

var answer;
let imageTagSource = function (myImgTag1, imgSrc) {
    let imagePromise = new Promise(function (imgLoad, imgFail) {
        let imgTag = document.getElementById(myImgTag1);
        imgTag.onload = function () {
            imgLoad("Image loaded");
        }
        imgTag.src = imgSrc;
        answer = prompt("Do you want to continue to load next image?");
            if (answer === "yes") {
                image2TagSource("myImgTag2", "https://www.google.co.in/logos/doodles/2018/celebrating-400o-of-murillo-5901104519839744-l.png")
                    .then(function (message) {
                        console.log(message);
                    }).catch(function (error) {
                        console.log(error);
                    });
                }
    });
    return imagePromise;
};
imageTagSource("myImgTag", "https://www.google.co.in/logos/doodles/2018/celebrating-400o-of-murillo-5901104519839744-l.png")
    .then(
        function (message) {
                console.log(message);

        });