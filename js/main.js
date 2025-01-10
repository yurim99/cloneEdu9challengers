window.addEventListener("DOMContentLoaded", (event) => {
    const semicircleCtrlBtn = document.querySelector('.semicircle__ctrl-btn');
    const semicircleCtrlOn = document.querySelector('.semicircle-ctrl__on');
    let isReversed = false;
    let isClicking = false;
    
    semicircleCtrlBtn.addEventListener('click', function() {
        if(isClicking) return;
        isClicking = true;
        
        setTimeout(() => {
            isClicking = false;
        }, 2250);

        semicircleCtrlBtn.classList.add('deco-hide');
        semicircleCtrlBtn.classList.toggle('active');
        semicircleCtrlOn.classList.toggle('active');
        
        const arrow = document.querySelector('.mini__semicircle-arrow');
        const arrowCurRotation = window.getComputedStyle(arrow).transform;
        const newRotation = (arrowCurRotation === 'matrix(1, 0, 0, 1, 0, 0)' || arrowCurRotation === 'none') ? 'rotate(181deg)' : 'rotate(0deg)';
        arrow.style.transform = newRotation;
        
        const parts = document.querySelector('.parts');
        const part = Array.from(parts.children);

        const order = isReversed ? [2, 1, 0] : [0, 1, 2];

        order.forEach((index, i) => {
            setTimeout(() => {
                part[index].classList.toggle('show', !isReversed);
                part[index].classList.toggle('hide', isReversed);
            }, i * 750);
        });
        
        setTimeout(() => {
            isReversed = !isReversed;
        }, order.length * 750);
    });

    const dim = document.querySelector('.dim');
    const popupBtn = document.querySelectorAll('.popup__btn');
    const popup = document.querySelectorAll('.popup');
    const popupCloseBtn = document.querySelectorAll('.popup__close');
    
    popupBtn.forEach(btn => {
        btn.addEventListener('click', function(){
            dim.classList.add('active');
        })
    }); 
    
    function popupClose() {
        dim.classList.remove('active');
        popup.forEach(popup => {
            popup.classList.remove('active');
        });
    }

    popupCloseBtn.forEach(btn => {
        btn.addEventListener('click', function(){
            popupClose()
        })
    }); 
    
    dim.addEventListener('click', function() {
        popupClose()
    })
    
    const cardNewsSwriper = new Swiper('.card-news__swriper', {
        navigation : {
            prevEl:'.popup-swiper___btn.prev',
            nextEl:'.popup-swiper___btn.next',
        },
        speed: 500,
    });

    const cardNewImgs = {
        cardNew01: [
            "./images/component/cardNews/cardnews_swiper01_01.png",
            "./images/component/cardNews/cardnews_swiper01_02.png",
            "./images/component/cardNews/cardnews_swiper01_03.png",
            "./images/component/cardNews/cardnews_swiper01_04.png",
            "./images/component/cardNews/cardnews_swiper01_05.png",
            "./images/component/cardNews/cardnews_swiper01_06.png",
            "./images/component/cardNews/cardnews_swiper01_07.png",
            "./images/component/cardNews/cardnews_swiper01_08.png",
            "./images/component/cardNews/cardnews_swiper01_09.png",
        ]
    }

    const cardNewsBtns = document.querySelectorAll('.card-news-pop__btn');
    const cardNewsPopup = document.querySelector('.card-news__popup');
    cardNewsBtns.forEach(cardNewBtn => {
        cardNewBtn.addEventListener('click', function() {
            const cardNewsBtnId = cardNewBtn.id;
            const cardNewsImg = cardNewImgs[cardNewsBtnId];

            if(cardNewsImg) {
                const cardNewSwiperWrapper = document.querySelector('.card-news__swriper .swiper-wrapper');
                cardNewSwiperWrapper.innerHTML = '';

                cardNewsImg.forEach(src => {
                    const cardNewSlide = document.createElement('div');
                    cardNewSlide.className = 'swiper-slide';
                    cardNewSlide.innerHTML = `<img class="popup__img" src="${src}" alt="">`
                    cardNewSwiperWrapper.appendChild(cardNewSlide);
                });
                cardNewsSwriper.update();
            }

            cardNewsPopup.classList.add('active');
        });
    });
});
