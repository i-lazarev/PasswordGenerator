const displayPassword = document.querySelector("h1");
const carNum = document.querySelector("#input");
const checkBox = document.querySelector("#checkBox");
const generateButton = document.querySelector("#generateButton");

let charset = "abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_";
let newCharset = "";

const getRandom = () => {
  return Math.floor(Math.random() * charset.length);
};

const checked = () => {
  for (let i = 0; i < charset.length; i++) {
    if (i === 0 || i === 2) {
      charset += charset.charAt(i).toUpperCase();
    }
  }
};

generateButton.addEventListener("click", () => {
  let arr = [];
  if (checkBox.checked) {
    checked();
  }
  for (let i = 0; i < carNum.value; i++) {
    // if(checkBox.checked){
    //   newCharset += i%3==0?charset.split("")[i].toUpperCase() :charset.split("")[i]
    // }
    let char = charset.split("")[getRandom()];
    arr.push(char);
  }
  displayPassword.textContent = arr.join("");
  console.log(arr);
  return arr;
});

// const newArr =["a","s","d","g","j","k","o","o","t","r"]
// let newArrUpp=""
// for(let i=1;i<newArr.length;i++){
//  newArrUpp += i % 3 == 0 ? newArr[i].toUpperCase() : newArr[i];

// }
// console.log(newArrUpp.split(""))
