window.addEventListener("DOMContentLoaded", (event) => {
    let semicircleCtrlBtn = document.querySelector('.semicircle__ctrl-btn');
    let semicircleCtrlOn = document.querySelector('.semicircle-ctrl__on');
    
    semicircleCtrlBtn.addEventListener('click', function() {
        semicircleCtrlBtn.classList.toggle('active');
        semicircleCtrlOn.classList.toggle('active');
    });
});
