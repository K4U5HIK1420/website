document.addEventListener('DOMContentLoaded', () => {
    const locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true,
    });

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.scrollerProxy('#main', {
        scrollTop(value) {
            return arguments.length
                ? locomotiveScroll.scrollTo(value, 0, 0)
                : locomotiveScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector('#main').style.transform ? 'transform' : 'fixed',
    });

    ScrollTrigger.addEventListener('refresh', () => locomotiveScroll.update());
    ScrollTrigger.refresh();
});
