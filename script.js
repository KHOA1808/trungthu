// =========================
// ALBUM ẢNH
// =========================

const photos = [
    "images/nguoiyeu1.jpg",
    "images/nguoiyeu2.jpg",
    "images/nguoiyeu3.jpg",
    "images/nguoiyeu4.jpg"
];

let currentPhoto = 0;

const mainPhoto = document.getElementById("mainPhoto");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function showPhoto(index) {
    currentPhoto = (index + photos.length) % photos.length;

    mainPhoto.style.opacity = "0";
    mainPhoto.style.transform = "scale(0.95)";

    setTimeout(() => {
        mainPhoto.src = photos[currentPhoto];

        mainPhoto.onload = () => {
            mainPhoto.style.opacity = "1";
            mainPhoto.style.transform = "scale(1)";
        };
    }, 200);
}

if (prevBtn) {
    prevBtn.addEventListener("click", () => {
        showPhoto(currentPhoto - 1);
    });
}

if (nextBtn) {
    nextBtn.addEventListener("click", () => {
        showPhoto(currentPhoto + 1);
    });
}

// =========================
// TIM BAY
// =========================

function createHeart() {
    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = ["❤️", "💕", "💗", "💖", "💘"][
        Math.floor(Math.random() * 5)
    ];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = 15 + Math.random() * 25 + "px";
    heart.style.animationDuration = 4 + Math.random() * 3 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

// Tim bay liên tục
setInterval(createHeart, 900);

// =========================
// NÚT MỞ QUÀ
// =========================

const giftBtn = document.getElementById("giftBtn");

if (giftBtn) {
    giftBtn.addEventListener("click", function () {

        // Tạo 15 trái tim
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                createHeart();
            }, i * 100);
        }

        // Hiện lời nhắn
        let message = document.getElementById("giftMessage");

        if (!message) {
            message = document.createElement("div");
            message.id = "giftMessage";

            message.innerHTML = `
                 em K yêu chị siêu nhiều 
                <br><br>
                Món quà nhỏ này là dành riêng cho chị eo của em K đóa 
            `;

            message.style.marginTop = "25px";
            message.style.padding = "25px";
            message.style.borderRadius = "20px";
            message.style.background = "rgba(255, 105, 160, 0.2)";
            message.style.border = "1px solid rgba(255,255,255,0.3)";
            message.style.color = "white";
            message.style.fontSize = "20px";
            message.style.lineHeight = "1.8";
            message.style.textAlign = "center";

            giftBtn.parentNode.insertBefore(
                message,
                giftBtn.nextSibling
            );
        }

        message.style.display = "block";
    });
}

// =========================
// CLICK MÀN HÌNH → TIM
// =========================

document.addEventListener("click", (event) => {
    if (
        event.target.tagName === "BUTTON" ||
        event.target.tagName === "IMG"
    ) {
        return;
    }

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "💗";

    heart.style.left = event.clientX + "px";
    heart.style.bottom = (window.innerHeight - event.clientY) + "px";
    heart.style.position = "fixed";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
});
