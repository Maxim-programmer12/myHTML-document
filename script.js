const btn = document.getElementById("btn");
const input = document.getElementById("username");
const welcome = document.getElementById("welcome");
const counter = document.getElementById("counter");
const themeBtn = document.getElementById("themeBtn");

let new_text = null;

let clicks = 0;

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark"); 
});

btn.addEventListener("click", () => {
    const name = input.value.trim();

    welcome.classList.remove("show", "fade-out");

    clicks++;

    counter.classList.remove("counter");
    void counter.offsetWidth; // перезапуск анимации
    counter.classList.add("counter");

    counter.textContent = `Нажатий: ${clicks}`;

    if (!name) {
        welcome.textContent = "Введите имя!";
        welcome.style.color = "red";
        welcome.style.display = "block";

        setTimeout(() => welcome.classList.add("show"), 10);

        setTimeout(() => welcome.classList.add("fade-out"), 3000);
        return;
    }

    welcome.textContent = `Привет, ${name}!`;
    welcome.style.color = "blue";
    welcome.style.display = "block";

    setTimeout(() => welcome.classList.add("show"), 10);

    setTimeout(() => welcome.classList.add("fade-out"), 3000);

    if (!new_text) {
        new_text = document.createElement("p");
        new_text.textContent = "Этот сайт будет развиваться!";
        new_text.style.color = "green";
        document.body.appendChild(new_text);
    }
});
