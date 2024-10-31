new slider({
    el : document.querySelector('#sliders'),
    slideClass : 'slider',
    currentSlider : (slider) => {
        console.log(slider);
    },
    auto : 5000
})

