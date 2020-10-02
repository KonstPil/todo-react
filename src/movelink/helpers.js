import {imagesData} from "./config";


const downloadImages = function () {
    let loadedImages = [];
    let promises = [];
    let imagesKeys = Object.keys(imagesData);

    imagesKeys.forEach(function (imgKey, i) {
        let img = imagesData[imgKey].url;

        let promise = new Promise(function (resolve) {
            const image = new Image();
            image.src = img;
            image.onload = () => {
                loadedImages[imgKey] = image;
                resolve();
            }
        });
        promises.push(promise);
    });

    return Promise.all(promises)
        .then(() => {
            return loadedImages;
        })
};

export {downloadImages};