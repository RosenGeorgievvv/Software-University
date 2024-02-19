//Task: Write a function that receives a single string - the path to a file (the '\' character is escaped)

// Your task is to subtract the file name and its extension. (Beware of files like template.bak.pptx, as template.bak should be the file name, while pptx is the extension).

//Solution:

function extractFile(str) {
  let index = str.lastIndexOf("\\");

  let nameOfTheFile = str.substring(index + 1).split(".");

  let ext = nameOfTheFile.pop();
  let template = nameOfTheFile.join(".");

  console.log(`File name: ${template}`);
  console.log(`File extension: ${ext}`);
}
extractFile("C:\\Internal\\training-internal\\Template.pptx");
extractFile("C:\\Projects\\Data-Structures\\LinkedList.cs");
