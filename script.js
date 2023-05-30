function openNav() {
    document.getElementById("mySidenav").style.transform = "translateX( 0 )";
    document.body.style.overflow = "hidden";
    document.querySelector("html").style.overflow = "hidden";
}

function closeNav() {
    document.getElementById("mySidenav").style.transform = "translateX(100%)";
    document.body.style.overflow = "scroll";
    document.querySelector("html").style.overflow = "scroll";
}

//myswiper function
var swiper1 = new Swiper(".mySwiper1", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//count down function

const newDate = new Date("may 31 23 00:16:00").getTime();

const countdown = setInterval(() => {
    const date = new Date().getTime();
    const diff = newDate - date;

    const days = Math.floor(
        (diff % (1000 * 60 * 60 * 24 * (365.25 / 12))) / (1000 * 60 * 60 * 24)
    );
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.querySelector(".seconds").innerHTML =
        seconds < 10 ? "0" + seconds : seconds;
    document.querySelector(".minutes").innerHTML =
        minutes < 10 ? "0" + minutes : minutes;
    document.querySelector(".hours").innerHTML =
        hours < 10 ? "0" + hours : hours;
    document.querySelector(".days").innerHTML = days < 10 ? "0" + days : days;

    if (diff < 0) {
        console.log(diff, ",,,,,,,,,,");
        clearInterval(countdown);
        var numbers = document.querySelectorAll(".count-card");
        for (var i = 0; i < numbers.length; i++) {
            numbers[i].style.display = "none";
        }
        document.querySelector(".expire-msg").style.display = "flex";
    }
}, 1000);

//search input
window.onload = function loadSearchData() {
    // Data to be used in the searchbar
    let products = [
        {
            title: "مكيف هاير 22000 وحدة سبليت حار بار-HSU-24HPB13/RT(T3)F",
            image: "assets/product1.svg",
        },
        {
            title: "مكيف هاير 22000 وحدة سبليت حار بار-HSU-24HPB13/RT(T3)F",
            image: "assets/product2.svg",
        },
    ];

    let list = document.getElementById("list");

    // Add each data item as an <a> tag
    products.forEach((product) => {
        let a = document.createElement("a");
        a.classList.add("listItem");
        a.href = "#";
        let span = document.createElement("span");
        span.innerText = product.title;

        let img = document.createElement("img");
        img.src = product.image;
        img.classList.add("search-img");
        console.log(img, "srccccccc");

        a.appendChild(img);
        a.appendChild(span);

        list.appendChild(a);
    });
};

function search() {
    let listContainer = document.getElementById("list");
    let listItems = document.getElementsByClassName("listItem");
    let input = document.getElementById("searchbar").value;
    input = input.toLowerCase();
    let noResults = true;
    for (i = 0; i < listItems.length; i++) {
        if (
            !listItems[i].innerHTML.toLowerCase().includes(input) ||
            input === ""
        ) {
            listItems[i].style.display = "none";
            continue;
        } else {
            listItems[i].style.display = "flex";
            noResults = false;
        }
    }
    listContainer.style.display = noResults ? "none" : "flex";
}
