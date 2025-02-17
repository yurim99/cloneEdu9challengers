window.addEventListener("DOMContentLoaded", (event) => {
    function createElement(tag, className = '', id = '') {
        const element = document.createElement(tag);
        if (className) element.className = className;
        if (id) element.id = id;

        return element;
    }

    const dim = document.querySelector('.dim');
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
        initialSlide: 0,
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
                const cardNewSlide = createElement('div', 'swiper-slide');
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
                const iframe = createElement('iframe');
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
                    const joinButton = createElement('button', 'popup__close btn join');
                    joinButton.title = '이벤트 참여하기';

                    joinButton.addEventListener('click', function () {
                       eventCloseTxt()
                    })
                    event01PopupFooter.appendChild(joinButton);
                }

                const keywordInfo = keywordData[keywordBtn.id];
                const event01PopupTit = document.getElementById('event01PopupTit');
                event01PopupTit.textContent = keywordInfo.title;

                const event01Stage = document.querySelector('.event01-stage');
                event01Stage.innerHTML = '';
                const event01Img = createElement('div');
                event01Img.innerHTML = `<img src="${keywordInfo.images.src}" alt="">`;
                event01Stage.appendChild(event01Img);

                const event01Popup = document.querySelector('.event01__popup');
                event01Popup.classList.add('active');

                dim.classList.add('active');

            }, 1000);

            currentIndex++;
        });
    });


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
                    nextTitle: '영 · 유아/초등',
                    nextCnt: [
                        '영·유아 시기에는 유보통합을 통해 유치원과 어린이집 어디를 가도 걱정없이 아이에게 필요한 미래역량을 키워주는 질 높은 교육을 받을 수 있고, 초등 저학년 시기에 돌봄을 희망하는 누구나, 국가가 제공하는 다양한 늘봄 프로그램으로 통해서 안전하게 아이 돌봄을 받을 수 있습니다.'
                    ]
                },
            }
        },
        {
            id: 'life02',
            tabs: {
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
                    ],
                    nextTitle: '초·중·고등',
                    nextCnt: 
                    '교육의 세 주체가 소통하고 존중하는 학교에서, 학생은 AI 디지털 교과서로 개개인의 수준과 학습속도에 맞춘 맞춤형 수업을 제공 받을 수 있고, 고교학점제를 통해 자신의 적성과 진로에 맞는 수업을 스스로 선택! 이로써 학생들은 미래역량을 키우고, 자신의 진로를 체계적으로 준비할 수 있게 될 것입니다.'
                },
            },
        },
        {
            id: 'life03',
            tabs: {
                tab01: {
                    btnTitle: '글로컬대학',
                    title: [
                        '지방 시대를 활짝 열기 위하여 지역과',
                        ' 대학의 동반성장을 선도하는 혁신허브',
                        '지역대학을 글로컬 "대학 30"프로젝트를',
                        '통하여 집중 지원하겠습니다.',
                    ],
                    cnt : [
                        {
                            src: './images/component/step/life03-img.png',
                        }
                    ]
                },
                tab02 : {
                    btnTitle: '대학 혁신 생태계',
                    title: [
                        '대학혁신을 가로막는 대학 안 팎의 벽들을',
                        '과감하게 허물어서 대학이 혁신 생태계의',
                        '중심 역할을 할 수 있도록 지원하겠습니다.',
                    ],
                    cnt : [
                        'RISE(지역혁신중심 대학지원체계)',
                        '의대 선진화',
                        '첨단분야 인재양성',
                        '전공자율선택제',
                        '대학의 평생교육 기능 강화',
                    ],
                    nextTitle : '대학·취업',
                    nextCnt: '대학에서 학생은 전공자율선택제로 학과·전공 구분없이 무전공으로 입학하여 자유롭게 진로를 선택할 수 있고, 대학-기업-지자체가 함께 하는 RISE·글로컬대학을 통해 타 대학·기업과 연계하여 학생들은 양질의 교육울 받을 수 있습니다.'
                }
            }
        },
        {
            id: 'life04',
            tabs: {
                tab01: {
                    btnTitle: '교육발전 특구',
                    title : [
                        '지역마다 교육청·지자체·대학·산업체 등이',
                        '협력하여 지역 설정에 맞춘 교육과',
                        '인재 양성 프로그램을 발전시킬 수 있도록',
                        '적극적으로 지원하겠습니다.'
                    ],
                    cnt : [
                        '학교시설 복합화',
                        '고교 직업교육 강화',
                        '자율형 공립고 2.0',
                        '지역인재전형',
                        '대학의 지역 교육 기여',
                    ],
                    nextTitle: '지역 정주',
                    nextCnt: '대학-기업-지자체가 함께 하는 RISE·글로컬 대학을 통해 양질의 교육을 받게 됨으로, 지역에서도 지원할 수 있는 일자리가 점차적으로 늘어나면서 내가 원하는 직업을 가질 수 있으며, 살고 싶은 지역에서 살 수 있는 선택권이 늘어날 것입니다.'
                }
            }
        },
        {
            id: 'eventLast',
            topTit: '교육부 대전환',
            bodyTit: [
                '데이터 기반의 교육정책을 추진하고',
                '교육청·지자체·대학·타부처 등과',
                '수평적 파트너십을 형성함으로써,',
                '글로벌 교육 선도국의 리더십을',
                '발휘하는 교육부로 거듭나겠습니다.',
            ],
            cnt : [
                '교육데이터 플랫폼 구축',
                '교육부 조직개혁',
                '한국어교육 강화',
            ],
            
        },
    ]

    function eventCloseTxt() {
        alert('이벤트가 끝났습니다. 상단에 X버튼을 클릭해주세요.');
        return;
    }

    const lifeCycleBtns = document.querySelectorAll('.life-cycle__btn');
    const stepPopup = document.querySelector('.step__popup');
    const lifeCyclePopBtns = document.querySelectorAll('.life-cycle-pop__btn');
    const popHeadStage = document.querySelector('.step__popup .popup-head-wrapper');
    const popBodyStage = document.querySelector('.step__popup .popup__body');
    const popFooterStage = document.querySelector('.step__popup .popup__footer');

    let hasMoved = false;

    function nextMove() {
        const lifeCycleLists = document.querySelectorAll('.life-cycle__list.active');
        if (lifeCycleLists.length > 0) {
            let lastList = lifeCycleLists[lifeCycleLists.length - 1];
            let next = lastList.nextElementSibling;
            if (next) {
                next.classList.add('move');
                setTimeout(() => {
                    next.classList.add('active');
                }, 2000)
            }
        }
    }

    const nextTit = createElement('p', 'next__tit');
    const tabStage = createElement('div', 'tab-stage');
    const stepPopTit = createElement('div', 'step-pop__tit', 'stepPopTit');
    const stepPopCnt = createElement('div', 'step-pop__cnt', 'stepPopCnt');

    lifeCycleBtns.forEach(lifeCycleBtn => {
        lifeCycleBtn.addEventListener('click', function () {
            this.classList.add('on');
            let parent = this.parentElement;
            let nextSibling = parent.nextElementSibling;
            setTimeout(() => {
                nextSibling.classList.add('active');
            }, 1500);
        });

        lifeCyclePopBtns.forEach((lifeCyclePopBtn) => {
            lifeCyclePopBtn.addEventListener('click', function () {
                const parent = this.closest('.life-cycle__btns');
                const btnIndex = Array.from(parent.children).indexOf(this);
                const buttonId = this.dataset.id;
                const foundItem = lifeData.find(item => item.id === buttonId);
        
                [popHeadStage, popBodyStage, popFooterStage].forEach(stage => stage.innerHTML = '');
        
                const popTabBtns = createElement('div', 'tab-btns');
                popHeadStage.appendChild(popTabBtns);
        
                const tabWrapper = createElement('div', 'tab-wrapper');
                tabWrapper.appendChild(stepPopTit);
                tabWrapper.appendChild(stepPopCnt);
                tabStage.appendChild(tabWrapper);
                popBodyStage.appendChild(tabStage);
        
                const footCloseBtn = createElement('button', 'popup__close');
                footCloseBtn.type = 'button';
                footCloseBtn.title = '확인';
                footCloseBtn.addEventListener('click', function () {
                    dim.classList.remove('active');
                    stepPopup.classList.remove('active');
                });
                popFooterStage.appendChild(footCloseBtn);
        
                const renderTabContent = (tabData) => {
                    stepPopTit.innerHTML = '';
                    stepPopCnt.innerHTML = '';
                    tabData.title.forEach(tit => {
                        const tabTit = createElement('p');
                        tabTit.textContent = tit;
                        stepPopTit.appendChild(tabTit);
                    });
                    tabData.cnt.forEach(item => {
                        if (typeof item === 'object' && item.src) {
                            const img = document.createElement('img');
                            img.src = item.src;
                            img.alt = item.alt;
                            stepPopCnt.appendChild(img);
                        } else if (typeof item === 'string') {
                            const tabCnt = document.createElement('p');
                            tabCnt.textContent = item;
                            stepPopCnt.appendChild(tabCnt);
                        }
                    });
                };
        
                Object.keys(foundItem.tabs).forEach((tabKey, tabIdx) => {
                    const tabData = foundItem.tabs[tabKey];
                    const tabBtn = createElement('button', 'tab__btn popup-tab__btn');
                    tabBtn.type = 'button';
                    tabBtn.textContent = tabData.btnTitle;
                    popTabBtns.appendChild(tabBtn);
        
                    if (tabIdx === 0) {
                        renderTabContent(tabData);
                    }
        
                    tabBtn.addEventListener('click', () => {
                        document.querySelectorAll('.popup-tab__btn').forEach(btn => btn.classList.remove('active'));
                        tabBtn.classList.add('active');
                        renderTabContent(tabData);
                    });
                });
        
                setTimeout(() => {
                    const createdTabBtns = document.querySelectorAll('.popup-tab__btn');
                    if (createdTabBtns[btnIndex]) {
                        createdTabBtns[btnIndex].classList.add('active');
                        renderTabContent(foundItem.tabs[Object.keys(foundItem.tabs)[btnIndex]]);
                    }
                }, 0);
        
                if (this.classList.contains('last')) {
                    const lastTabData = foundItem.tabs[Object.keys(foundItem.tabs).slice(-1)[0]];
        
                    const lastBtn = createElement('button', 'popup__last-btn');
                    lastBtn.type = 'button';
                    lastBtn.title = '확인';
        
                    lastBtn.addEventListener('click', function () {
                        popHeadStage.innerHTML = '';
                        
                        nextTit.textContent = lastTabData.nextTitle;
        
                        popBodyStage.innerHTML = '';
                        const nextWrapper = createElement('div', 'next-wrapper');
                        nextWrapper.innerHTML = lastTabData.nextCnt;
        
                        popFooterStage.innerHTML = '';
                        const nextBtn = createElement('button', 'popup__next');
                        nextBtn.type = 'button';
                        nextBtn.title = '다음 단계로 →';
        
                        popHeadStage.appendChild(nextTit);
                        popBodyStage.appendChild(nextWrapper);
                        popFooterStage.appendChild(nextBtn);
                    });
        
                    popFooterStage.innerHTML = '';
                    popFooterStage.appendChild(lastBtn);
                }
        
                stepPopup.classList.add('active');
            });
        });
        
    });

    const lastLifeCycle = document.querySelector('.life-cycle__list.step06.life__last');
    const checkLast = new MutationObserver(() => {
        if(lastLifeCycle.classList.contains('active')) {
            console.log('이벤트 끝');
            
            const targetId = 'eventLast';
            const lastId = lifeData.find(item => item.id === targetId);
            const joinBtn = createElement('button', 'join');
            setTimeout(() => {
                dim.classList.add('active');
                stepPopup.classList.add('active');
                
                nextTit.innerHTML = lastId.topTit;
                
                popBodyStage.innerHTML = '';
                popBodyStage.appendChild(tabStage);
                stepPopTit.innerHTML = '';
                stepPopCnt.innerHTML = '';
                lastId.bodyTit.forEach(tit => {
                    const tabTit = createElement('p');
                    tabTit.textContent = tit;
                    stepPopTit.appendChild(tabTit);
                });
                lastId.cnt.forEach(txt => {
                    const tabCnt = createElement('p');
                    tabCnt.textContent = txt;
                    stepPopCnt.appendChild(tabCnt);
                });
                popFooterStage.innerHTML = '';
               
                joinBtn.type = 'button';
                joinBtn.title = '이벤트 참여하기';
                popFooterStage.appendChild(joinBtn);
                  
            }, 1000);

            joinBtn.addEventListener('click', function () {
               eventCloseTxt()
            })
        }
    })

    checkLast.observe(lastLifeCycle, { attributes: true, attributeFilter: ['class'] });


    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('popup__next')) {
            dim.classList.remove('active');
            stepPopup.classList.remove('active');
            nextMove();
            // if (!hasMoved) {
            //     hasMoved = true;
            // }
        }
    });


});
