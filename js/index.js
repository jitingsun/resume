var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: false,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
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
                // slides[index].id='page'+(index+1);

            }
        })
    },
    onInit: function (swiper) {
//            var slides=swiper.slides;
//            slides[0].id='page1';
    }
});

//var beyond = document.querySelector('#beyond');
//var music = document.querySelector('.music');
//window.setTimeout(function () {
//    beyond.play();//音频文件播放 边缓冲边播放
//    beyond.addEventListener('canplay', function () {
//        music.className = 'music musicMove';
//        music.style.opacity = 1;
//    });
//}, 1000);
//music.addEventListener('click', function () {
//    if(beyond.paused){
//        beyond.play();
//        music.className='music musicMove';
//    }else{
//        beyond.pause();
//        music.className='music';
//    }
//})
