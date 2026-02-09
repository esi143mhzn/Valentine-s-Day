/* Questions */
const steps = [
  { q: "Hey Mutu! Ready for a sweet Valentine’s challenge just for us? 😍", img: "images/1.png", err: "No, vanna mildaina k MUTU 😤❤️" },
  { q: "Tell me...are you the prettiest girl in the world? 😘", img: "images/2.webp", err: "Yes, you are the prettiest girl MUTU. Hence, click YES 😍❤️" },
  { q: "Do you think we were made to be a perfect pair? 💑", img: "images/3.jpg", err: "Umuhaaaa Umuhaaaa Chuppaaaa mero MUTU lai...Yes say my cutiee, 😘😘" },
  { q: "Mutu, do I make you feel loved every day? ❤️", img: "images/4.webp", err: "I will try ajhai dherai hai ta Mutu! (aile chai YES nai vandeu na) 🥺❤️" },
  { q: "Will you be my Valentine forever and always? 🌹", img: "images/5.jpg", err: "Access denied 🚫😤—guess my heart chose you and locked the door ❤️" },
  { q: "Choose your gifts ❤️", end: true, gifts: true }
];

let index = 0;
let giftsClicked = { gift1:false, gift2:false, gift3:false };

function yesClick() {
  index++;
  const error = document.getElementById("error");
  error.style.display = "none";

  const giftDiv = document.getElementById("gift");
  const questionDiv = document.getElementById("question");
  const photo = document.getElementById("photo");
  const buttonsDiv = document.querySelector(".buttons");

  if(index < steps.length) {
    questionDiv.innerText = steps[index].q;
    
    if(steps[index].gifts) {
      // Show 3 gifts for selection
      giftDiv.innerHTML = `
        <button class="gift-btn" id="gift1" onclick="selectGift(1)">Gift 1 🎁</button>
        <button class="gift-btn" id="gift2" onclick="selectGift(2)">Gift 2 🎁</button>
        <button class="gift-btn" id="gift3" onclick="selectGift(3)">Gift 3 🎁</button>
      `;
      buttonsDiv.style.display = "none";
    } else {
      giftDiv.innerHTML = `<img src="${steps[index].img}" alt="gift">`;
      buttonsDiv.style.display = "flex";
    }

    if(steps[index].photo) {
      photo.src = steps[index].photo;
      photo.style.display = "block";
      buttonsDiv.style.display = "none";
    } else {
      photo.style.display = "none";
    }
  }
}

function noClick() {
  const error = document.getElementById("error");
  error.innerText = steps[index].err;
  error.style.display = "block";
  error.style.animation = "none";
  error.offsetHeight;
  error.style.animation = "shake 0.4s";
}

/* Gift selection logic */
function selectGift(giftNum) {
  const error = document.getElementById("error");
  const questionDiv = document.getElementById("question");
  error.style.display = "none";

  if(giftNum === 3 && (!giftsClicked.gift1 || !giftsClicked.gift2)) {
    error.innerText = "Mutu, pahila 1 ani 2 gift chai select garnu parcha! ❤️";
    error.style.display = "block";
    return;
  }

  if(giftNum === 1 && !giftsClicked.gift1) {
    giftsClicked.gift1 = true;
    questionDiv.innerText = "Gift 1: 'Every moment with you is my favorite 💖'";
  }
  if(giftNum === 2 && !giftsClicked.gift2) {
    giftsClicked.gift2 = true;
    questionDiv.innerText = "Gift 2: 'You are my today and all of my tomorrows 💑'";
  }
  if(giftNum === 3 && giftsClicked.gift1 && giftsClicked.gift2) {
    giftsClicked.gift3 = true;
    // Show memory album
    questionDiv.innerText = "Here are our memories ❤️";
    giftDiv = document.getElementById("gift");
    giftDiv.innerHTML = `
      <div style="display:flex;flex-wrap:wrap;gap:4px;justify-content:center;">
        <img src="images/mem1.jpg" class="memory-img">
        <img src="images/mem2.jpeg" class="memory-img">
        <img src="images/mem3.jpeg" class="memory-img">
        <img src="images/mem4.jpg" class="memory-img">
        <img src="images/mem5.jpg" class="memory-img">
        <img src="images/mem6.jpg" class="memory-img">
      </div>
    `;
  }
}

/* Music */
const music = document.getElementById("bgMusic");
const muteBtn = document.getElementById("muteBtn");

document.body.addEventListener("click", () => {
  music.volume = 0.3;
  music.play();
}, { once: true });

muteBtn.onclick = () => {
  if (music.muted) { music.muted = false; muteBtn.innerText = "🎵"; }
  else { music.muted = true; muteBtn.innerText = "🔇"; }
};

/* Hearts animation */
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (2 + Math.random() * 3) + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 400);