var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: false,
    effect:'cube',
    slideShadows:false,
    shadow:false,
    shadowOffset:0,
    shadowScale:1,
    pagination : '.swiper-pagination',
    paginationType:'progress',
    onSlideChangeEnd: function (swiper) {
        var slides = swiper.slides;//获取所有的滑块
        var curIndex = swiper.activeIndex;//当前活动的滑块的索引
        var trueNum = slides.length - 2;//真实的滑块
        var lastNum = trueNum + 1;
        [].forEach.call(slides, function (item, index) {
            item.id = '';
            if (index == curIndex) {
                switch (index) {
                    case 0:
                        item.id = 'page' + trueNum;
                        break;
                    case lastNum:
                        item.id = 'page1';
                        break;
                    default :
                        item.id = 'page' + curIndex;
                }
            }
        })
    },
    onInit: function (swiper) {
//            var slides=swiper.slides;
//            slides[0].id='page1';
    }
});
