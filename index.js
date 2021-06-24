AOS.init();


let sidebar_btn= document.querySelector("#sidebar_btn")
let sidebar= document.querySelector(".sidebar")
sidebar_btn.onclick =function() {
    sidebar.classList.toggle("active");
    }

new TypeIt("#type1", {
    speed: 120,
    loop: true,
    waitUntilVisible: true,
    })
    .type("Web Developer", { delay: 400 })
    .pause(600)
    .delete(13)
    .type("Learner", { delay: 400 })
    .pause(500)
    .delete(8)
    .go();

    