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
//search
function closeMobileSearch() {
    document.getElementById("mysearch").style.display = "none";
}
function openMobileSearch() {
    document.getElementById("mysearch").style.display = "flex";
}
//search

//myswiper function
var swiper1 = new Swiper(".mySwiper1", {
    spaceBetween: 30,
    slidersPerView: 1,
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
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
          spaceBetween: 40
        }
      }
});

var swiper2 = new Swiper(".mySwiper2", {
    fadeEffect: { crossFade: true },
    virtualTranslate: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    speed: 1200,
    slidersPerView: 1,
    loop: true,
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
          spaceBetween: 40
        }
      }
});

var swiper3 = new Swiper(".mySwiper3", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,

});
var swiper4 = new Swiper(".mySwiper4", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper3,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
          spaceBetween: 40
        }
      }
});
var swiper5 = new Swiper(".mySwiper5", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper3,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
          spaceBetween: 40
        }
      }
});


//count down function

//search input
window.onload = function loadSearchData() {
    let products = [
        {
            title: "مكيف هاير 22000 وحدة سبليت حار بار-HSU-24HPB13/RT(T3)F",
            image: "../assets/product1.svg",
        },
        {
            title: "مكيف هاير 22000 وحدة سبليت حار بار-HSU-24HPB13/RT(T3)F",
            image: "../assets/product2.svg",
        },
    ];

    let list = document.getElementById("list");

    products.forEach((product) => {
        let a = document.createElement("a");
        a.classList.add("listItem");
        a.href = "#";
        let span = document.createElement("span");
        span.innerText = product.title;

        let img = document.createElement("img");
        img.src = product.image;
        img.classList.add("search-img");

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
//search input

//counter
let minusBtn = document.getElementById("minus-btn");
let count = document.getElementById("count");
let plusBtn = document.getElementById("plus-btn");

let countNum = 0;
// count.innerHTML = countNum;

minusBtn.addEventListener("click", () => {
    countNum <= 0 ? (countNum = 0) : (countNum -= 1);
    count.innerHTML = countNum;
});

plusBtn.addEventListener("click", () => {
    countNum += 1;
    count.innerHTML = countNum;
});


//counter

// var starRating = document.querySelectorAll(".fa-star"),
//     ratingTotal = document.querySelectorAll(".rating-total");

// // convert ratingTotal HTMLCollection to array and reverse its order (5 star <-> 1 star)
// var reverseRatingTotal = Array.from(ratingTotal).reverse();

// // display initial rating totals
// displayTotals();

// // use event listener to record changes to user rating
// starRating.forEach(function (star) {
//     star.addEventListener("click", recordRating);
// });

// function recordRating(event) {
//     // use indexOf to identify selected user rating
//     var userRating = Array.from(starRating).indexOf(event.target);

//     // define selected rating to adjust display totals
//     var selectedIndex;

//     starRating.forEach(function (item, index) {
//         // add or remove .active class based upon selected user rating
//         if (index < userRating + 1) {
//             starRating[index].classList.add("active");
//             selectedIndex = index;
//         } else {
//             starRating[index].classList.remove("active");
//         }

//         displayTotals(selectedIndex);
//     });
// }

// display star rating totals from html custom data-
// function displayTotals(selectedIndex) {
//     var barChart = document.querySelectorAll(".bar"),
//         displaySummary = document.querySelectorAll(".summary"),
//         numRatings = 0,
//         numRatingsValue = 0;

//     // convert barChart HTMLCollection to array and reverse its order (5 star <-> 1 star)
//     var reverseBarChart = Array.from(barChart).reverse();

//     reverseRatingTotal.forEach(function (total, index) {
//         if (index == selectedIndex) {
//             // add selected rating to display total
//             total.innerHTML =
//                 parseInt(total.getAttribute("data-rating-count")) + 1;
//             // adjust selected bar width
//             reverseBarChart[index].style.width =
//                 ((parseInt(total.getAttribute("data-rating-count")) + 1) / 20) *
//                     100 +
//                 "%";
//         } else {
//             // display unselected totals
//             total.innerHTML = total.getAttribute("data-rating-count");
//             // adjust unselected bar widths
//             reverseBarChart[index].style.width =
//                 (total.getAttribute("data-rating-count") / 20) * 100 + "%";
//         }
//         // count total number and value of ratings
//         numRatings += parseInt(total.innerHTML);
//         numRatingsValue += parseInt(total.innerHTML) * (index + 1);
//     });

//     // display rating average and total
//     ratingsAverage = (numRatingsValue / numRatings).toFixed(2);
//     displaySummary[0].innerHTML =
//         ratingsAverage + " average based on " + numRatings + " reviews.";
// }
