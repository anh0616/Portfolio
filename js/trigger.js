const isInViewport = el => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}



// Progress bar in About page
const bar = document.querySelectorAll('.progress div');

const runBar = () =>
    bar.forEach(item => {
        if (isInViewport(item)) {
            item.classList.add('showBar');
        }
    });

window.addEventListener('load', runBar);
window.addEventListener('resize', runBar);
window.addEventListener('scroll', runBar);



// Counter in Home page
const num = document.querySelectorAll('.stats-number')

const runNum = () =>
    num.forEach(item => {
        if (isInViewport(item)) {
            item.classList.add('showNum');
        }
    });

window.addEventListener('load', runNum);
window.addEventListener('resize', runNum);
window.addEventListener('scroll', runNum);



// Fade in
const conT = document.querySelectorAll('.chosenFade')

if (window.innerWidth > 550 ) {
    const runconT = () =>
        conT.forEach(item => {
            if (isInViewport(item)) {
                item.classList.add('fadeIn');
            }
        });
    
    window.addEventListener('load', runconT);
    window.addEventListener('resize', runconT);
    window.addEventListener('scroll', runconT);
}