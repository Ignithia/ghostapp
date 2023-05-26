//slideshow components
AFRAME.registerComponent('show-slides', {
    schema: {
        src: {type: 'string'},
        steps: {type: 'array'},
        index: {type: 'int', default: 0},
        items: {type: 'int', default: 2}
    },
    events: {
        click: function () {
            console.log('I have been clicked! ' + this.data.src);
            // Local variables
            var slider = document.querySelector('#slides');
            var slide = slider.querySelector('#slide');
            var nextbut = document.querySelector('#nextbut');
            var previousbut = document.querySelector('#previousbut');
            // Shows the slides for the scanned object
            slider.removeAttribute('class'); //Removes the 'hidden' class and makes it visible
            slide.setAttribute('style', 'background: url(' + this.data.src + ') ' + this.data.steps[0] +'% 0; background-repeat: no-repeat; background-size: cover;') // Sets the HTML object to show the cover slide
            // Sets the navigation buttons
            nextbut.setAttribute('onclick', 'nextSlide([' + this.data.steps + '],' + this.data.items + ')');
            previousbut.setAttribute('onclick', 'nextSlide([' + this.data.steps + '],' + this.data.items + ')');
        }
    },
    init: function () {
        var el = this.el;
        console.log('show-slides is on - 002');

    },
    remove: function () {
        var el = this.el;
    }
});

//slide mechanics
closeSlides = () => {
    // Variables
    var slides = document.querySelector('#slides');
    var nextbut = document.querySelector('#nextbut');
    var previousbut = document.querySelector('#previousbut');
    slides.setAttribute('class', 'hidden');
    nextbut.setAttribute('onclick', 'nextSlide()');
    previousbut.setAttribute('onclick', 'previousSlide()');
};

nextSlide = (steps, items) => {
    // Variables
    var slide = document.querySelector('#slide');
    var slideStyle = slide.getAttribute('style');
    var previousStep = parseFloat(slide.getAttribute('style').slice(slideStyle.indexOf(')') +1, slideStyle.indexOf('%')));
    //var currentIndex = (steps.indexOf(previousStep) + 1) % steps.length; //
    var currentIndex = (steps.indexOf(previousStep) + 1) % items;
    // Modifies the HTML tag to show the next sprite in the sprite map
    slide.setAttribute('style', slideStyle.slice(0, slideStyle.indexOf(')') +1) + steps[currentIndex] + '% 0; background-repeat: no-repeat; 	background-size: cover;')
};

previousSlide = (steps, items) => {
    // Variables
    var slide = document.querySelector('#slide');
    var slideStyle = slide.getAttribute('style');
    var previousStep = parseFloat(slide.getAttribute('style').slice(slideStyle.indexOf(')') +1, slideStyle.indexOf('%')));
    //var currentIndex = (steps.indexOf(previousStep) - 1) % steps.length;
    var currentIndex = (steps.indexOf(previousStep) - 1) % items;
    // Modifies the HTML tag to show the previous sprite in the sprite map
    slide.setAttribute('style', slideStyle.slice(0, slideStyle.indexOf(')') +1) + steps[currentIndex] + '% 0; background-repeat: no-repeat; 	background-size: cover;')
};