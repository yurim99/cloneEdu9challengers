window.addEventListener("DOMContentLoaded", (event) => {
    const semicircleCtrlBtn = document.querySelector('.semicircle__ctrl-btn');
    const semicircleCtrlOn = document.querySelector('.semicircle-ctrl__on');
    let isReversed = false;
    let isClicking = false;

    semicircleCtrlBtn.addEventListener('click', function () {
        if (isClicking) return;
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
        navigation: {
            prevEl: '.popup-swiper___btn.prev',
            nextEl: '.popup-swiper___btn.next',
        },
        speed: 500,
    });

    const cardNewData = {
        cardNew01: {
            title: '교육개혁 9대과제',
            images: [
                { src: "./images/component/cardNews/cardnews_swiper01_01.png" },
                { src: "./images/component/cardNews/cardnews_swiper01_02.png" },
                { src: "./images/component/cardNews/cardnews_swiper01_03.png" },
                { src: "./images/component/cardNews/cardnews_swiper01_04.png" },
                { src: "./images/component/cardNews/cardnews_swiper01_05.png" },
                { src: "./images/component/cardNews/cardnews_swiper01_06.png" },
                { src: "./images/component/cardNews/cardnews_swiper01_07.png" },
                { src: "./images/component/cardNews/cardnews_swiper01_08.png" },
                { src: "./images/component/cardNews/cardnews_swiper01_09.png" },
            ]
        },
        cardNew02: {
            title: '2025년 교육부 예산안',
            images: [
                { src: "./images/component/cardNews/cardnews_swiper02_01.png" },
                { src: "./images/component/cardNews/cardnews_swiper02_02.png" },
                { src: "./images/component/cardNews/cardnews_swiper02_03.png" },
                { src: "./images/component/cardNews/cardnews_swiper02_04.png" },
                { src: "./images/component/cardNews/cardnews_swiper02_05.png" },
            ],
        },
        cardNew03: {
            title: '고교학점제',
            images: [
                { src: "./images/component/cardNews/cardnews_swiper03_01.png" },
                { src: "./images/component/cardNews/cardnews_swiper03_02.png" },
                { src: "./images/component/cardNews/cardnews_swiper03_03.png" },
                { src: "./images/component/cardNews/cardnews_swiper03_04.png" },
                { src: "./images/component/cardNews/cardnews_swiper03_05.png" },
            ],
        },
        cardNew04: {
            title: 'AIDT(디지털 교과서)',
            images: [
                { src: "./images/component/cardNews/cardnews_swiper04_01.png" },
                { src: "./images/component/cardNews/cardnews_swiper04_02.png" },
                { src: "./images/component/cardNews/cardnews_swiper04_03.png" },
                { src: "./images/component/cardNews/cardnews_swiper04_04.png" },
                { src: "./images/component/cardNews/cardnews_swiper04_05.png" },
                { src: "./images/component/cardNews/cardnews_swiper04_06.png" },
            ],
        },
        cardNew05: {
            title: '세계 최고 영유아 교육·보육',
            images: [
                { src: "./images/component/cardNews/cardnews_swiper05_01.png" },
                { src: "./images/component/cardNews/cardnews_swiper05_02.png" },
                { src: "./images/component/cardNews/cardnews_swiper05_03.png" },
                { src: "./images/component/cardNews/cardnews_swiper05_04.png" },
                { src: "./images/component/cardNews/cardnews_swiper05_05.png" },
                { src: "./images/component/cardNews/cardnews_swiper05_06.png" },
                { src: "./images/component/cardNews/cardnews_swiper05_07.png" },
            ],
        },
        cardNew06: {
            title: '자립형 공립고 2.0',
            images: [
                { src: "./images/component/cardNews/cardnews_swiper06_01.jpg" },
                { src: "./images/component/cardNews/cardnews_swiper06_02.jpg" },
                { src: "./images/component/cardNews/cardnews_swiper06_03.jpg" },
                { src: "./images/component/cardNews/cardnews_swiper06_04.jpg" },
                { src: "./images/component/cardNews/cardnews_swiper06_05.jpg" },
                { src: "./images/component/cardNews/cardnews_swiper06_06.jpg" },
            ],
        },
        cardNew07: {
            title: '교육할동 보호제도',
            images: [
                { src: "./images/component/cardNews/cardnews_swiper07_01.jpg" },
                { src: "./images/component/cardNews/cardnews_swiper07_02.jpg" },
                { src: "./images/component/cardNews/cardnews_swiper07_03.jpg" },
                { src: "./images/component/cardNews/cardnews_swiper07_04.jpg" },
                { src: "./images/component/cardNews/cardnews_swiper07_05.jpg" },
                { src: "./images/component/cardNews/cardnews_swiper07_06.jpg" },
                { src: "./images/component/cardNews/cardnews_swiper07_07.jpg" },
                { src: "./images/component/cardNews/cardnews_swiper07_08.jpg" },
                { src: "./images/component/cardNews/cardnews_swiper07_09.jpg" },
            ]
        }
    }

    const cardNewsBtns = document.querySelectorAll('.card-news-pop__btn');
    const cardNewsPopup = document.querySelector('.card-news__popup');
    cardNewsBtns.forEach(cardNewBtn => {
        cardNewBtn.addEventListener('click', function () {
            const cardNewsPopupTit = document.getElementById('cardNewsPopupTit');
            const cardNewsBtnId = cardNewBtn.id;
            cardNewsPopupTit.textContent = cardNewData[cardNewsBtnId].title;

            const cardNewSwiperWrapper = document.querySelector('.card-news__swriper .swiper-wrapper');
            cardNewSwiperWrapper.innerHTML = '';

            cardNewData[cardNewsBtnId].images.forEach(image => {
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
            midea: [
                { type: "video", src: 'https://www.youtube.com/embed/XFXudlMnE_4?si=J5_0427C14G_Jujg' },
            ],
        },
        youtube02: {
            midea: [
                { type: "video", src: 'https://www.youtube.com/embed/61fVEbQjmSI?si=oXtMK8VX5A5srQ7V' },
            ],
        },
        youtube03: {
            midea: [
                { type: "video", src: 'https://www.youtube.com/embed/bZsyWEJFlQo?si=SnRddh539oTA4TzO' },
            ],
        },
        youtube04: {
            midea: [
                { type: "video", src: 'https://www.youtube.com/embed/tiGKOaeKwto?si=epJUoWg5H5MG2h5v' },
            ],
        },
        youtube05: {
            midea: [
                { type: "video", src: 'https://www.youtube.com/embed/yG7JrRtFY08?si=f6B9Cxa2AO2pAjy9' },
            ],
        },
        youtube06: {
            midea: [
                { type: "video", src: 'https://www.youtube.com/embed/-ZUoWn6uvlc?si=E2w2dTyL3U1TPfNJ' },
            ],
        },
        youtube07: {
            midea: [
                { type: "video", src: 'https://www.youtube.com/embed/oSP5lWYgRzg?si=QK_jePeyCltZ0OJW' },
            ],
        },
        youtube08: {
            midea: [
                { type: "video", src: 'https://www.youtube.com/embed/YxKuJqPTAl4?si=0_9lHKEftzhYq5ds' },
            ],
        },
        youtube09: {
            midea: [
                { type: "video", src: 'https://www.youtube.com/embed/TXnM-qllQpw?si=BsinorufYXvM-77L' },
            ],
        },
    }

    const youtubeBtns = document.querySelectorAll('.youtube-pop__btn');
    const youtubePopup = document.querySelector('.youtube__popup');
    const videoStage = document.querySelector('.video-stage');

    youtubeBtns.forEach(youtubeBtn => {
        youtubeBtn.addEventListener('click', function () {
            const youtubeBtnId = youtubeBtn.id;

            videoStage.innerHTML = '';

            const selectedMedia = youtubeData[youtubeBtnId].midea[0];

            if (selectedMedia && selectedMedia.type === "video") {
                const iframe = document.createElement('iframe');
                iframe.src = `${selectedMedia.src}&autoplay=1&mute=1`;
                iframe.width = "560";
                iframe.height = "315";
                iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
                iframe.allowFullscreen = true;
                iframe.classList.add('video');

                videoStage.appendChild(iframe);
            }

            youtubePopup.classList.add('active');
        })
    });

    const keywordData = {
        keyword01: {
            title: '01. 그 시작은?',
            images: { src: './images/component/event/event01-popup__bg-01.png' }
        },
        keyword02: {
            title: '02. 그래서?',
            images: { src: './images/component/event/event01-popup__bg-02.png' }
        },
        keyword03: {
            title: '03. 9대과제는?',
            images: { src: './images/component/event/event01-popup__bg-03.png' }
        },
        keyword04: {
            title: '04. 기대효과!',
            images: { src: './images/component/event/event01-popup__bg-04.png' }
        },
    }

    const keywordBtns = document.querySelectorAll('.event-keyword__btn');
    const event01Popup = document.querySelector('.event01__popup');
    let currentIndex = 0;

    keywordBtns.forEach((keywordBtn, index) => {
        keywordBtn.addEventListener('click', function () {

            if (keywordBtn.classList.contains('on')) {
                alert('이미 확인했습니다.');
                return;
            }

            if (index !== currentIndex) {
                alert('순서대로 클릭해주세요.');
                return;
            }

            this.classList.add('move');

            setTimeout(() => {
                this.classList.remove('move');
                this.classList.add('on');

                if (index === 3) {
                    const event01PopupFooter = document.querySelector('.event01__popup .popup__footer');
                    event01PopupFooter.innerHTML = '';
                    const joinButton = document.createElement('button');
                    joinButton.className = 'popup__close btn join';
                    joinButton.title = '이벤트 참여하기';

                    joinButton.addEventListener('click', function () {
                        alert('이벤트가 끝났습니다. 상단에 X버튼을 클릭해주세요.');
                        return;
                    })
                    event01PopupFooter.appendChild(joinButton);
                }

                const keywordInfo = keywordData[keywordBtn.id];
                const event01PopupTit = document.getElementById('event01PopupTit');
                event01PopupTit.textContent = keywordInfo.title;

                const event01Stage = document.querySelector('.event01-stage');
                event01Stage.innerHTML = '';
                const event01Img = document.createElement('div');
                event01Img.innerHTML = `<img src="${keywordInfo.images.src}" alt="">`;
                event01Stage.appendChild(event01Img);

                const event01Popup = document.querySelector('.event01__popup');
                event01Popup.classList.add('active');

                const dim = document.querySelector('.dim');
                dim.classList.add('active');

            }, 1000);

            currentIndex++;
        });
    });

    const lifeCycleBtns = document.querySelectorAll('.life-cycle__btn');
    const stepPopup = document.querySelector('.step__popup');

    lifeCycleBtns.forEach(lifeCycleBtn => {
        lifeCycleBtn.addEventListener('click', function () {
            this.classList.add('on');

            let parent = this.parentElement;
            let nextSibling = parent.nextElementSibling;
            setTimeout(() => {
                nextSibling.classList.add('active');
            }, 2000);

        })

        lifeData = [
            {
                id: 'life01',
                tabs: {
                    tab01: {
                        btnTitle: '유보통합',
                        title: [
                            '모든 영·유아(0세~5세)가 어디에서나',
                            '세계 최고 수준의 교육과 보육을 차별',
                            '없이 받을 수 있도록 하겠습니다.',
                        ],
                        cnt: [
                            '충분한 이용시간(8h+4h) 보장',
                            '교사 대 영유아 비율 개선',
                            '단계적 무상 교육·보육',
                            '0~5세 영유아 교육과정',
                            '영·유아학교 시범사업(가칭)',
                        ]
                    },
                    tab02: {
                        btnTitle: '늘봄',
                        title: [
                            '희망하는 모든 초등학생에게 사교육이 필요',
                            '없도록 정규 수업외에 학교와 지역사회의',
                            '다양한 교육자원을 연계한 종합 교육 돌봄',
                            '프로그램을 적극적으로 제공하겠습니다.',
                        ],
                        cnt: [
                            '2024년 2학기 모든 초등학교 도입',
                            '2026년까지 연차별 확대(모든 학년 이용)',
                            '대학 연계 프로그램 등 늘봄허브 구축',
                        ],
                        nextTitle: '영·유아/초등',
                        next: [
                            '"영·유아 시기에는 유보통합을 통해 유치원과 어린이집 어디를 가도 걱정없이 아이에게 필요한 미래역량을 키워주는 질 높은 교육을 받을 수 있고, 초등 저학년 시기에 돌봄을 희망하는 누구나, 국가가 제공하는 다양한 늘봄 프로그램으로 통해서 안전하게 아이 돌봄을 받을 수 있습니다.'
                        ]
                    },
                }
            },
            {
                id: 'life02',
                tabs:{
                    tab01: {
                        btnTitle: '함께학교',
                        title: [
                            '학생의 건강한 성장과 발달을 체계적으로',
                            '지원하여, 학교 교사의 교육 활동을 보호,',
                            '학생·교사·학부모가 소통하고 존중하는',
                            '학교를 만들겠습니다',
                        ],
                        cnt: [
                            '학생 건강·안전',
                            '학교폭력 근절',
                            '학생맞춤 통합지원',
                            '특수교육 여건 개선',
                            '교원의 교육활동 보호',
                        ]
                    },
                    tab02: {
                        btnTitle: '교실혁명',
                        title: [
                            '모든 학생들이 수업을 통해 새로운',
                            '시대에 필요한 역량을 키우도록',
                            '교사가 이끄는 교실 수업의 혁명적',
                            '변화를 적극적으로 지원하겠습니다.',
                        ],
                        cnt: [
                            '교사 연수',
                            'AI 디지털교과서',
                            '수업·평가 혁신',
                            '고교학점제',
                        ]
                    },
                    tab03: {
                        btnTitle: '입시개혁',
                        title: [
                            '누구에게나 공정한 입시제도를 위하여',
                            '사교육 카르텔과 입시비리를 근절하며,',
                            '학생의 미래 역량을 키우는 입시 제도가',
                            '충분한 사회적 논의와 준비를 거쳐서',
                            '현장에 뿌리내리도록 하겠습니다.'
                        ],
                        cnt: [
                            '킬러문항 제거',
                            '사교육 카르텔 혁파',
                            '2028년 대입 안착',
                            '사교육 경감',
                        ]
                    },
                }
            },
        ]

        const lifeCyclePopBtns = document.querySelectorAll('.life-cycle-pop__btn');
        const stepPopup = document.querySelector('.step__popup');
        const popTabBtnsStage = document.querySelector('.step__popup .tab-btns');

        lifeCyclePopBtns.forEach((lifeCyclePopBtn) => {
            lifeCyclePopBtn.addEventListener('click', function () {
                const buttonId = this.dataset.id;
                const foundItem = lifeData.find(item => item.id === buttonId);
        
                popTabBtnsStage.innerHTML = '';
                stepPopTit.innerHTML = '';
                stepPopCnt.innerHTML = '';
        
                Object.keys(foundItem.tabs).forEach((tabKey, idx) => {
                    const tabData = foundItem.tabs[tabKey];
        
                    const tabBtn = document.createElement('button');
                    tabBtn.type = 'button';
                    tabBtn.className = 'tab__btn popup-tab__btn';
                    tabBtn.textContent = tabData.btnTitle;
                    popTabBtnsStage.appendChild(tabBtn);
        
                    if (idx === 0) {
                        tabBtn.classList.add('active');
                        tabData.title.forEach(tit => {
                            const tabTit = document.createElement('p');
                            tabTit.textContent = tit;
                            stepPopTit.appendChild(tabTit);
                        });
                        tabData.cnt.forEach(txt => {
                            const tabCnt = document.createElement('p');
                            tabCnt.textContent = txt;
                            stepPopCnt.appendChild(tabCnt);
                        });
                    }
        
                    tabBtn.addEventListener('click', () => {
                        document.querySelectorAll('.popup-tab__btn').forEach(btn => btn.classList.remove('active'));
                        tabBtn.classList.add('active');
        
                        stepPopTit.innerHTML = '';
                        stepPopCnt.innerHTML = '';
                        tabData.title.forEach(tit => {
                            const tabTit = document.createElement('p');
                            tabTit.textContent = tit;
                            stepPopTit.appendChild(tabTit);
                        });
                        tabData.cnt.forEach(txt => {
                            const tabCnt = document.createElement('p');
                            tabCnt.textContent = txt;
                            stepPopCnt.appendChild(tabCnt);
                        });
                    });
                });
        
                stepPopup.classList.add('active');
            });
        });
        
        
        
    });
});
