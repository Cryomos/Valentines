const yippe = document.querySelector("#yippe");

let noCount = 0;
function afterYes() {
  yippe.style.visibility = "visible";
  document.querySelector(".question").remove();
  document.querySelector(".paragraph").remove();
  message.remove();
  Button1.remove();
  Button2.remove();
}
const attempts = 10;
const gifList = [
  "https://tenor.com/view/goma-sad-gif-411134658282219592.gif", //gomma lying on floor
  "https://tenor.com/view/peach-peachcry-cry-tissue-emote-gif-27496755.gif" /*tear wipe*/,
  "https://tenor.com/view/peach-peach-cat-goma-peach-and-goma-peach-sad-gif-21391978.gif", //peach lying
  "https://tenor.com/view/peach-and-goma-gif-14755089461093313163.gif", //laptop shut go away
  "https://i.pinimg.com/originals/fe/1b/ef/fe1bef2378c53a041040b26654e46779.gif", //bad girl
];
let Button2 = document.querySelector("#Button2");
const Button1 = document.querySelector("#Button1");
const gif = document.querySelector("#gif");
const message = document.querySelector("#prompts");
let left = 0;
let fontsizeNo = 24;
let fontsizeYes = 24;
Button1.addEventListener("click", function () {
  afterYes();
  gif.innerHTML = `<img src = "assets//final-gif.gif">`;
});
Button2.addEventListener("mouseover", function () {
  if (noCount < attempts) {
    gif.innerHTML = `<img src = ${gifList[noCount % gifList.length]}>`;
    if (left == 0) {
      left = 15;
      noCount += 1;
    } else {
      left = 0;
      noCount += 1;
    }
  } else if (noCount == attempts) {
    message.innerHTML = "Ok So many attempts, you can't be in denial:)";
  }
  Button2.style.left = left + "%";
});

Button2.addEventListener("click", function () {
  Button2.style.fontSize = `${(fontsizeNo -= 2)}px`;
  Button1.style.fontSize = `${(fontsizeYes += 2)}px`;
  noCount += 1;
  switch (noCount) {
    case attempts + 3:
      message.innerHTML = "Still trying to say No?";
      break;
    case attempts + 4:
      message.innerHTML =
        "Oh no! Looks like someone just broke my heart button! 😢 How about a second chance for love?";
      break;
    case attempts + 5:
      message.innerHTML = "Oops! Did you accidentally press 'No'?";
      break;
    case attempts + 6:
      message.innerHTML =
        "No one likes rejection, especially on Valentine's Day. Let's rewrite the script with a romantic 'Yes'!";
      break;
    case attempts + 7:
      message.innerHTML =
        "No, really? I thought we had a virtual connection! Let's upgrade it to a 'Yes' and see where it leads us.";
      break;
    case attempts + 8:
      message.innerHTML =
        "Rejecting me on Valentine's Day? That's cold! How about warming up with a cozy 'Yes'?";
      break;
    case attempts + 9:
      message.innerHTML = "Okay! your choice, love you, Tata";
      gif.innerHTML = `<img src = "https://c.tenor.com/GCQQPM9j6hsAAAAC/tenor.gif">`;
      break;
    case attempts + 10:
      message.innerHTML = "I changed the wiring of the buttons, Hehehee.....";
      gif.innerHTML = `<img src = "https://tenor.com/view/love-u-gif-18651744.gif">`
      Button2.remove();
      Button1.remove();
      setTimeout(function () {
        gif.innerHTML = `<img src = "https://tenor.com/view/cat-cute-hug-huggies-kozumexzumire-gif-19555995.gif">`;
      }, 4000);
      setTimeout(function(){
        afterYes();
      }, 7000)
      break;
  }
});
