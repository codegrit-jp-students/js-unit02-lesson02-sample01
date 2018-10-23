const getUserAvatar = (userId) => {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = () => {
      resolve(img);
    }
    img.onerror = () => {
      reject("Failed");
    }
    img.src = `../images/${userId}.png`;
  });
};

const getDefaultAvatar = () => {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = () => {
      resolve(img);
    }
    img.onerror = () => {
      reject("Failed")
    }
    img.src = "../images/default.png";
  });
};

{
  /* 
    getUserAvatarの引数に1を指定するとアバターを取得出来ますが、それ以外の数字ではデフォルトのアバターが表示されます。 
  */
  getUserAvatar(1)
    .catch(getDefaultAvatar)
    .then((img) => {
      document.body.appendChild(img);
    })
    .catch(() => {
      console.log("Failed after all attempts.")
    })

}