window.addEventListener("DOMContentLoaded", (event) => {
    const popups = document.querySelectorAll('.popup');
    const dim = document.querySelector('.dim');
    const popupOpenButtons = document.querySelectorAll('.popup__btn');
    const popupCloseButtons = document.querySelectorAll('.popup__close');
    
    function getFocusableElements(popupElement) {
        return popupElement.querySelectorAll('a[href], button:not([disabled]), textarea, input[type="text"], input[type="radio"]');
    }
    
    function openPopup(popupElement) {
        const focusableElements = getFocusableElements(popupElement);
        if (focusableElements.length > 0) {
            const firstEl = focusableElements[0];
            const lastEl = focusableElements[focusableElements.length - 1];

            firstEl.focus();

            function handleTabKey(event) {
                if (event.key === 'Tab') {
                    if (event.shiftKey) {
                        if (document.activeElement === firstEl) {
                            event.preventDefault();
                            lastEl.focus();
                        }
                    } else {
                        if (document.activeElement === lastEl) {
                            event.preventDefault();
                            firstEl.focus();
                        }
                    }
                }
            }

            popupElement.addEventListener('keydown', handleTabKey);

            popupElement.addEventListener('close', () => {
                popupElement.removeEventListener('keydown', handleTabKey);
            });
        }
    }
    
    function closePopup() {
        dim.classList.remove('active');
        popups.forEach(popup => {
            popup.classList.remove('active');
        });
    }
    
    popupOpenButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            dim.classList.add('active');
            popups.forEach(popupElement => {
                openPopup(popupElement);
            });
        });
    });
    
    popupCloseButtons.forEach(btn => {
        btn.addEventListener('click', closePopup);
    });

    dim.addEventListener('click', closePopup);


    // const tabBtns = document.querySelectorAll('.tab__btn');
    // const tabWrappers = document.querySelectorAll('.tab-wrapper');  

    // tabBtns.forEach((tabBtn, index) => {
    //     tabBtn.addEventListener('click', function() {
    //         tabBtns.forEach(btn => btn.classList.remove('active'));
    //         tabWrappers.forEach(Wrapper => Wrapper.classList.remove('active'));
    //         tabBtn.classList.add('active');

    //         tabBtn.classList.add('active');
    //         tabWrappers[index].classList.add('active');
            
    //     });
    // });
});
