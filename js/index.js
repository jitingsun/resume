~function (desW) {
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / desW * 100 + "px";
}(320);
var mySwiper = new Swiper('.swiper-container', {
    direction: "vertical",
    loop: true,
    speed:500,
    pagination : '.swiper-pagination',
    paginationType:'progress',
    onInit: function (swiper) {
        swiper.myactive = 1;
    },
    onTransitionEnd: function (swiper) {
        swiper.myactive = swiper.activeIndex;
        var myId = swiper.slides[swiper.myactive].getAttribute("trueId");
        for (var i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].id = i == swiper.myactive ? myId : null;
        }
    }
});
