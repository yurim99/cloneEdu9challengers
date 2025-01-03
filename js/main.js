window.addEventListener("DOMContentLoaded", (event) => {
    const semicircleCtrlBtn = document.querySelector('.semicircle__ctrl-btn');
    const semicircleCtrlOn = document.querySelector('.semicircle-ctrl__on');
    
    semicircleCtrlBtn.addEventListener('click', function() {
        semicircleCtrlBtn.classList.add('deco-hide')
        semicircleCtrlBtn.classList.toggle('active');
        semicircleCtrlOn.classList.toggle('active');
        
        const arrow = document.querySelector('.mini__semicircle-arrow');
        let arrowCurRotation = arrow.style.transform;
        let arrowNewRotation = arrowCurRotation === "rotate(181deg)" ? "rotate(0deg)" : "rotate(181deg)";
        arrow.style.transform = arrowNewRotation;

        const part01 = document.querySelector('.part01');
        const part02 = document.querySelector('.part02');
        const part03 = document.querySelector('.part03');
        part01.classList.add('active');

        setTimeout(function() {
            part02.classList.add('active');
        },500);

        setTimeout(function() {
            part03.classList.add('active');
        },1200)

    });

});
