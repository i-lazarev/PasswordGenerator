let charset = "abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_";

const getRandom = () => {
  return Math.floor(Math.random() * charset.length);
};

 let generateButton =( () => {
  let arr = [];
  if (checkBox.checked) {
    charset.split("").forEach(symbol => {
      symbol[0].toUpperCase();
    });
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
}

// const newArr =["a","s","d","g","j","k","o","o","t","r"]
// let newArrUpp=""
// for(let i=1;i<newArr.length;i++){
//  newArrUpp += i % 3 == 0 ? newArr[i].toUpperCase() : newArr[i];

// }
// console.log(newArrUpp.split(""))
