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
    
    const cardNewsSwriper = new Swiper('.card-news__swriper', {
        navigation : {
            prevEl:'.popup-swiper___btn.prev',
            nextEl:'.popup-swiper___btn.next',
        },
        speed: 500,
    });

    const cardNewData = {
        cardNew01: {
            title:'교육개혁 9대과제',
            images: [
                { src: "./images/component/cardNews/cardnews_swiper01_01.png"},
                { src: "./images/component/cardNews/cardnews_swiper01_02.png"},
                { src: "./images/component/cardNews/cardnews_swiper01_03.png"},
                { src: "./images/component/cardNews/cardnews_swiper01_04.png"},
                { src: "./images/component/cardNews/cardnews_swiper01_05.png"},
                { src: "./images/component/cardNews/cardnews_swiper01_06.png"},
                { src: "./images/component/cardNews/cardnews_swiper01_07.png"},
                { src: "./images/component/cardNews/cardnews_swiper01_08.png"},
                { src: "./images/component/cardNews/cardnews_swiper01_09.png"},
            ]
        },
        cardNew02: {
            title:'2025년 교육부 예산안',
            images: [
                { src: "./images/component/cardNews/cardnews_swiper02_01.png"},
                { src: "./images/component/cardNews/cardnews_swiper02_02.png"},
                { src: "./images/component/cardNews/cardnews_swiper02_03.png"},
                { src: "./images/component/cardNews/cardnews_swiper02_04.png"},
                { src: "./images/component/cardNews/cardnews_swiper02_05.png"},
            ],
        },
        cardNew03 : {
            title: '고교학점제',
            images : [
                { src: "./images/component/cardNews/cardnews_swiper03_01.png"},
                { src: "./images/component/cardNews/cardnews_swiper03_02.png"},
                { src: "./images/component/cardNews/cardnews_swiper03_03.png"},
                { src: "./images/component/cardNews/cardnews_swiper03_04.png"},
                { src: "./images/component/cardNews/cardnews_swiper03_05.png"},
            ],
        },
        cardNew04: {
            title: 'AIDT(디지털 교과서)',
            images :[
                { src: "./images/component/cardNews/cardnews_swiper04_01.png"},
                { src: "./images/component/cardNews/cardnews_swiper04_02.png"},
                { src: "./images/component/cardNews/cardnews_swiper04_03.png"},
                { src: "./images/component/cardNews/cardnews_swiper04_04.png"},
                { src: "./images/component/cardNews/cardnews_swiper04_05.png"},
                { src: "./images/component/cardNews/cardnews_swiper04_06.png"},
            ],
        },
        cardNew05: {
            title: '세계 최고 영유아 교육·보육',
            images: [
                { src: "./images/component/cardNews/cardnews_swiper05_01.png"},
                { src: "./images/component/cardNews/cardnews_swiper05_02.png"},
                { src: "./images/component/cardNews/cardnews_swiper05_03.png"},
                { src: "./images/component/cardNews/cardnews_swiper05_04.png"},
                { src: "./images/component/cardNews/cardnews_swiper05_05.png"},
                { src: "./images/component/cardNews/cardnews_swiper05_06.png"},
                { src: "./images/component/cardNews/cardnews_swiper05_07.png"},
            ],
        },
        cardNew06: {
            title: '자립형 공립고 2.0',
            images: [
                { src: "./images/component/cardNews/cardnews_swiper06_01.jpg"},
                { src: "./images/component/cardNews/cardnews_swiper06_02.jpg"},
                { src: "./images/component/cardNews/cardnews_swiper06_03.jpg"},
                { src: "./images/component/cardNews/cardnews_swiper06_04.jpg"},
                { src: "./images/component/cardNews/cardnews_swiper06_05.jpg"},
                { src: "./images/component/cardNews/cardnews_swiper06_06.jpg"},
            ],
        },
        cardNew07: {
            title: '교육할동 보호제도',
            images: [
                { src :"./images/component/cardNews/cardnews_swiper07_01.jpg"},
                { src :"./images/component/cardNews/cardnews_swiper07_02.jpg"},
                { src :"./images/component/cardNews/cardnews_swiper07_03.jpg"},
                { src :"./images/component/cardNews/cardnews_swiper07_04.jpg"},
                { src :"./images/component/cardNews/cardnews_swiper07_05.jpg"},
                { src :"./images/component/cardNews/cardnews_swiper07_06.jpg"},
                { src :"./images/component/cardNews/cardnews_swiper07_07.jpg"},
                { src :"./images/component/cardNews/cardnews_swiper07_08.jpg"},
                { src :"./images/component/cardNews/cardnews_swiper07_09.jpg"},
            ]
        }
    }

    const cardNewsBtns = document.querySelectorAll('.card-news-pop__btn');
    const cardNewsPopup = document.querySelector('.card-news__popup');
    cardNewsBtns.forEach(cardNewBtn => {
        cardNewBtn.addEventListener('click', function() {
            const cardNewsPopupTit = document.getElementById('cardNewsPopupTit');
            const cardNewsBtnId = cardNewBtn.id;
            cardNewsPopupTit.textContent = cardNewData[cardNewsBtnId].title;
            
            const cardNewSwiperWrapper = document.querySelector('.card-news__swriper .swiper-wrapper');
            cardNewSwiperWrapper.innerHTML = '';

            cardNewData[cardNewsBtnId].images.forEach( image => {
                const cardNewSlide = document.createElement('div');
                cardNewSlide.className = 'swiper-slide';
                cardNewSlide.innerHTML = `<img class="popup__img" src="${image.src}" alt="">`
                cardNewSwiperWrapper.appendChild(cardNewSlide);
            });
            cardNewsSwriper.update();

            cardNewsPopup.classList.add('active');
        });
    });

    const youtubeData = {
        youtube01: {
            link:`<iframe width="560" height="315" src="https://www.youtube.com/embed/XFXudlMnE_4?si=J5_0427C14G_Jujg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
        },
        youtube02: {
            link:``
        },
    }

    const youtubeBtns = document.querySelectorAll('.youtube-pop__btn');
    const youtubePopup = document.querySelector('.youtube__popup');
    youtubeBtns.forEach(youtubeBtn => {
        youtubeBtn.addEventListener('click', function() {
            const youtubeBtnId = youtubeBtn.id;
            const youtubeBody = document.querySelector('.youtube__popup .popup__body');
            
            youtubeBody.innerHTML = '';
            youtubeData[youtubeBtnId].links.forEach( link => {
                const youtube = document.createElement('div');
                youtube.className = 'youtube';
                youtube.innerHTML = `${link}`
            });

            youtubePopup.classList.add('active');
        })
    });
});
