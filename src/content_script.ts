import { redirect } from "./module/redirect";
import { replaceText } from "./module/replaceText";

console.log("👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾");
console.log("extension content script loaded");
console.log("👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾");

replaceText(document.body);

const listWeb: string[] = ["pornhub.com", "yahoo.com", "mariadb.com"];
const containOnUrl = ["porn"];

redirect(listWeb, containOnUrl);
