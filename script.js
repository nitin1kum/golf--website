gsap.to("#nav", {
    backgroundColor: "black",
    height: 130 + "px",
    paddingTop: 20 + "px",
    paddingBottom: 20 + "px",
    scrollTrigger: {
        target: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -2%",
        end: "top -5%",
        scrub: 1
    }
})
document.addEventListener("mousemove", function (a) {
    gsap.to("#scroller", {
        left: a.x + "px",
        top: a.y + "px",
    })
    gsap.to("#scrl-blur", {
        left: a.x - 250 + "px",
        top: a.y - 250 + "px",
        duration: 2
    })
})


// BUTTON ANIMATION




let e = document.getElementsByClassName("h4-container")[0];
let b = document.getElementsByClassName("h4-container")[1];
let c = document.getElementsByClassName("circle")
let d = document.getElementsByClassName("h4-container")[2];
e.addEventListener("mouseenter", function () {
    gsap.to(".circle", {
        top: -16 + "px",
    })
    gsap.to("#text", {
        color: "black",
        top: -5 + "px",

    })
})
e.addEventListener("mouseleave", function () {
    gsap.to(".circle", {
        top: 90 + "px"
    })
    gsap.to("#text", {
        color: "white",
        top: 0 + "px",
    })
})
b.addEventListener("mouseenter", function () {
    gsap.to(".circle1", {
        top: -15 + "px",
    })
    gsap.to("#text1", {
        color: "black",
        top: -5 + "px"
    })
})
b.addEventListener("mouseleave", function () {
    gsap.to(".circle1", {
        top: 90 + "px"
    })
    gsap.to("#text1", {
        color: "white",
        top: 0 + "px"
    })
})
d.addEventListener("mouseenter", function () {
    gsap.to(".circle2", {
        top: -18 + "px",
    })
    gsap.to("#text2", {
        color: "black",
        top: -5 + "px"
    })
})
d.addEventListener("mouseleave", function () {
    gsap.to(".circle2", {
        top: 90 + "px"
    })
    gsap.to("#text2", {
        color: "white",
        top: 0 + "px"
    })
})
gsap.to("#main", {
    backgroundColor: "black",
    scrollTrigger: {
        target: "#main",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -50%",
        scrub: 1,
        zIndex: -10
    }
})




// FOOD AND DRINK CROUSEL



let Link = ["https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/hero-5.jpg?strip=all&lossy=1&sharp=1&ssl=1",
    "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/cafe-menu.jpg?strip=all&lossy=1&sharp=1&ssl=1",
    "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/cafe-about-1.jpg?strip=all&lossy=1&sharp=1&ssl=1"
]
let outCrc = document.getElementsByClassName("ellipse-4")[0];
let ellCol = document.getElementsByClassName("ell-sel");

function crouselActive(a) {
    document.getElementsByClassName("frame-1")[0].src = Link[a];
    for (let i = 0; i < 3; i++) {
        ellCol[i].style.background = "#d9d9d9"
    }
    ellCol[a].style.background = "#a5d423"
    if (a == 0) {
        outCrc.style.left = "268px"
    }
    if (a == 1) {
        outCrc.style.left = "304px"
    }
    if (a == 2) {
        outCrc.style.left = "340px"
    }


}


let count = 1;
setInterval(function () {
    gsap.set(".frame-1", {
        duration: 2,
        attr: { src: Link[count] }
    });
    if (count == 0) {
        outCrc.style.left = "268px"
    }
    if (count == 1) {
        outCrc.style.left = "304px"
    }
    if (count == 2) {
        outCrc.style.left = "340px"
    }
    for (let i = 0; i < 3; i++) {
        ellCol[i].style.background = "#d9d9d9"
    }
    ellCol[count].style.background = "#a5d423"

    count++;
    if (count == 3) {
        count = 0;
    }
}, 4000)



// QUOTES



gsap.to("#quote1", {
    top: 8 + "%",
    left: 10 + "%",
    scrollTrigger: {
        trigger: "#page4",
        // markers:true,
        start: "35% 80%",
        end: "45% 85%",
        scrub: 3
    }
})

gsap.to("#quote2", {
    bottom: 0 + "%",
    right: 5 + "%",
    scrollTrigger: {
        trigger: "#page4",
        // markers:true,
        start: "95% 20%",
        end: "100% 30%",
        scrub: 3
    }
})

let move1 = document.getElementsByClassName("quote-text-container")[0];
move1.addEventListener("mousemove", function (dets) {
    let value1 = (720 - dets.x) / 20;
    let value2 = (450 - dets.y) / 10;
    gsap.to(".quote-text-container", {
        left: value1 + "px",
        top: value2 + "px",
        duration: 1
    })
})

let count2 = 1;
let content1 = document.getElementsByClassName("paragraph-content");
move1.addEventListener("dragend", function (a) {
    if (a.layerX < 40 || a.layerX > 700) {
        for (let i = 0; i < content1.length; i++) {
            content1[i].style.opacity = "0%"
        }
        if (a.layerX > 500) {
            if (count2 == 2) {
                count2 = 0;
            }
            content1[count2].style.opacity = "100%"
            count2++

        }
        if (a.layerX < 80) {
            if (count2 == 0) {
                count2 = 2;
            }
            content1[count2].style.opacity = "100%"
            count2--
        }

    }

})


// LAST SECTION

gsap.to("#text-container1",{
    top:-10+"%",
    scrollTrigger: {
        trigger:"#text-container1",
        // markers:true,
        start:"top 90%",
        end:"center 100%",
        scrub:2
    }
})




let scrl=document.getElementById("scroller")
let hoverer=document.querySelectorAll(".after-hover");
hoverer.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        gsap.to("#scroller",{
        scale:4,
        backgroundColor:"transparent",
        border: '0.5px solid #fff',
        duration:0.1
        })
    })
    elem.addEventListener("mouseleave",function(){
        gsap.to("#scroller",{
            scale:1,
            backgroundColor:"#a5d423",
            border: 'none',
            duration:0.1
            })
    })
})

