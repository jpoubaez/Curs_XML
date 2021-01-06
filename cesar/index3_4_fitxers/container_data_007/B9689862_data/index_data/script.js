/**
 * adcouncilSmokeyBirthdayCalifornia300x250 - An HTML banner
 * @version v1.0.0
 * @date 3-27-2019 at 16:41:56
 */
bannerInit = function() {
    //console.log("HEllO");
    container = document.getElementById("container_ad");
    bgExit = document.getElementById("background_exit_ad"); 
    container.style.display = "block";
    anim()
};

 anim = function() {
    var e = new TimelineLite;
    e.from(smokey, 1.5, {
        y: 250,
        ease: Back.easeOut.config(1),
        onComplete: smokeyBounce
    }), e.from([text1, text2], 1, {
        y: 250,
        ease: Back.easeOut.config(1)
    }, "-=0.5"), e.to([smokey, text1, text2], .5, {
        opacity: 0
    }, "+=3.0"), e.to(white, .5, {
        opacity: 1
    }, "-=0.5"), e.to([logos, logo75th, cta], .5, {
        opacity: 1
    }, "-=0.25"), e.to(cta, .25, {
         transformOrigin: '50% 60%',
        scale: 1.1,
        y: -8
    }, "+=1.5"), e.to(cta, .25, {
         transformOrigin: '50% 60%',
        scale: 1,
        y: 0,
        onComplete: mouseOverListener
    }), e.play()
}, smokeyBounce = function() {
    TweenMax.to(smokey, .5, {
        rotation: 1,
        y: -8,
        yoyo: !0,
        repeat: 1
    })
}, mouseOverListener = function() {
    bgExit.addEventListener("mouseover", bgMouseOverHandler, !1), bgExit.addEventListener("mouseout", bgMouseOutHandler, !1)
}, bgMouseOverHandler = function(e) {
    TweenLite.to(cta, .25, {
        transformOrigin: '50% 60%',
        scale: 1.1,
        y: -8

    })
}, bgMouseOutHandler = function(e) {
    transformOrigin: '50% 60%',
    TweenLite.to(cta, .25, {
        scale: 1,
        y: 0
    })
};