window.addEventListener("DOMContentLoaded", (event) => {
    const semicircleCtrlBtn = document.querySelector('.semicircle__ctrl-btn');
    const semicircleCtrlOn = document.querySelector('.semicircle-ctrl__on');
    let isReversed = false;
    
    semicircleCtrlBtn.addEventListener('click', function() {
        semicircleCtrlBtn.classList.add('deco-hide')
        semicircleCtrlBtn.classList.toggle('active');
        semicircleCtrlOn.classList.toggle('active');
        
        const arrow = document.querySelector('.mini__semicircle-arrow');
        let arrowCurRotation = arrow.style.transform;
        let arrowNewRotation = arrowCurRotation === "rotate(181deg)" ? "rotate(0deg)" : "rotate(181deg)";
        arrow.style.transform = arrowNewRotation;

        const parts = document.querySelector('.parts');
        const part = parts.children;

        const order = isReversed? [2, 1, 0] : [0, 1, 2];

        if(!isReversed){
            order.forEach((index, i) => {
                setTimeout(function() {
                    part[index].classList.add('show');
                    part[index].classList.remove('hide');
                }, i * 750);
            });
        }else {
            order.forEach((index, i) => {
                setTimeout(function() {
                    part[index].classList.remove('show');
                    part[index].classList.add('hide');
                }, i * 750);
            });
        }
         isReversed = !isReversed;
    });

});
