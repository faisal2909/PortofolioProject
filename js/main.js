window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
}

const txtElement = ['Web Developer', 'Web Developer'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function tik() {

    if (count == txtElement.length) {
        count = 0;
    }

    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.efek-tik').textContent = words;

    if (words.length == currentTxt.length) {
        count++;
        txtIndex = 0;
    }

    setTimeout(tik, 500);


})();

const menuIcon = document.getElementById("navbar-icon");
const menuUl = document.getElementById("navbar-ul");

menuIcon.addEventListener("click", () => {
    menuUl.classList.toggle("hidden");
})

// dark theme

if (localStorage.getItem("theme") === "dark") {
    $("body").addClass("dark-mode");
}

$("#dark-theme").click(function () {
    $("body").toggleClass("dark-mode");
    $("*").css("color", "white");

    if ($("body").hasClass("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
        $("*").css("color", "black");
    }
});