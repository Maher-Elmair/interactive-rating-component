let circle = document.getElementsByClassName("rating_number");
let btn = document.getElementById("btn");
let card = document.querySelector(".card");
let tYou = document.querySelector(".thankYou");


for (const box of circle) {
    choice = box.id;
    console.log(choice);
    box.addEventListener('click', function handleClick() {
        choice = box.id;
        console.log(choice);
    });
};

if (choice !== 0 && choice !== undefined) {
    btn.onclick = function () {
        tYou.style.display = "block";
        card.style.display = "none";
        document.getElementById("rating-value").innerHTML = choice;
    };
};

