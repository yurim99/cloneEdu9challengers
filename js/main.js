window.addEventListener("DOMContentLoaded", (event) => {
    let semicircleCtrlBtn = document.querySelector('.semicircle__ctrl-btn');
    let semicircleCtrlOn = document.querySelector('.semicircle-ctrl__on');
    
    semicircleCtrlBtn.addEventListener('click', function() {
        semicircleCtrlBtn.classList.add('deco-hide')
        semicircleCtrlBtn.classList.toggle('active');
        semicircleCtrlOn.classList.toggle('active');
        
        let arrow = document.querySelector('.mini__semicircle-arrow');
        let arrowCurRotation = arrow.style.transform;
        let arrowNewRotation = arrowCurRotation === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
        arrow.style.transform = arrowNewRotation;
    });
});
