const fs = require("node:fs");

const fileName = "msg.txt";
const msg = "Hello from NodeJS. \n";

// Create file and write data
fs.writeFile(fileName, msg, (err) => {
  if (err) throw err;
  
  console.log(fileName + " file is created with message.");

  // append more content in data
  try {
    fs.appendFileSync(fileName, "My Name is Ravi. \n");
    console.log("Data appended to the fiele " + fileName);
  } catch (err) {
    console.log("Can't append data to file. Error " + err);
    throw err;
  }

  // read the file content
  fs.readFile(fileName, (err, buff) => {
    if(err) {
        console.log("Error : " + err);
        throw err;
    }

    console.log("\nFile contetn: \n" + buff.toString());
  });


  // Another read the file content
  fs.readFile(fileName, "utf-8", (err, buff) => {
    if(err) {
        console.log("Error : " + err);
        throw err;
    }

    console.log("\nFile contetn (utf-8): \n" + buff);
  });
});
