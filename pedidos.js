function addFile() {
  const realBtn = document.querySelector(".input-ilustraciones");
  const btnCustom = document.querySelector(".add-file-btn");
  const textCustom = document.querySelector(".add-file-text");

  btnCustom.addEventListener("click", () => {
    realBtn.click();
  });

  realBtn.addEventListener("change", () => {
    if (realBtn.files) {
      textCustom.innerHTML = " ";
      const newElement = document.createElement("span");
      const iterableFiles = realBtn.files;
      let fileNames = [];

      for (let index = 0; index < realBtn.files.length; index++) {
        fileNames.push(realBtn.files[index].name);
      }
      newElement.append(fileNames.join(", "));
      textCustom.appendChild(newElement);
    }
  });
}

function main() {
  addFile();
}

main();
