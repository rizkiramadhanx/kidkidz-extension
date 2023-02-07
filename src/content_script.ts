/* eslint-disable @typescript-eslint/no-explicit-any */
import { redirect } from "./module/redirect";
import { replaceText } from "./module/replaceText";

console.log("👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾");
console.log("extension content script loaded");
console.log("👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾");

// Code to replace text by text
replaceText(document.body);

// redirect web

const listWeb: string[] = ["pornhub.com", "yahoo.com", "mariadb.com"];
const containOnUrl = ["porn"];

redirect(listWeb, containOnUrl);

const images: HTMLImageElement[] = [...document.getElementsByTagName("img")];

const analyzeImage = (image: HTMLImageElement) => {
  // console.log("analyze image %s", image.src);

  chrome.runtime.sendMessage({ url: image.src }, (response) => {
    // console.log("prediction for image %s", image.src, response);
    // console.log(image);
    if (response && response.result === true) {
      const replacedImageSrc = "https://source.unsplash.com/random/" + image.width + "x" + image.height;
      image.src = replacedImageSrc;
      image.srcset = "";
    }
  });
};

const validImage = (image: HTMLImageElement) => {
  const valid = image.src && image.width > 64 && image.height > 64 && !image.dataset.catReplaced;
  // console.log("image %s valid", image.src, valid);
  return valid;
};

// const classifyImages = () => {
//   [...images, ...document.getElementsByTagName("img")].filter(validImage).forEach(analyzeImage);
// };

// classifyImages();

chrome.runtime.sendMessage("get-user-data", (response) => {
  // 3. Got an asynchronous response with the data from the service worker
  console.log("received user data", response);
  // initializeUI(response);
});
