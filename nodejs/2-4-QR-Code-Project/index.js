/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qrImage from "qr-image";
import fs from "fs";

// Read url
var url = "";
inquirer
  .prompt([{ type: "input", name: "url", message: "Enter url: " }])
  .then((answer) => {
    url = answer.url;
  })
  .catch((err) => {
    console.log("Input / Output error : " + err);
    throw err;
  })
  .finally(() => {
    console.log(`URL: ${url}`);

    // generate QR image
    let qr_png = qrImage.image(url, {type: "png"});
    qr_png.pipe(fs.createWriteStream("url-qr.png"));

    const fileName = "url.txt";

    // save in text file
    fs.writeFile(fileName, url, "utf-8", (err) => {
      if (err) throw err;
      console.log("The file " + fileName + " has been saved!");
    });
  });
