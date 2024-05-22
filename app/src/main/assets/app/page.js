

const animationTypeRad = localStorage.getItem('selectedAnimation');

if(animationTypeRad === 'ScaleIn'){
    document.querySelector('body').classList.add('in')
    } else{
        document.querySelector('body').classList.add('out')


    }

window.transitionToPage = function(href) {


    if(animationTypeRad === 'ScaleIn'){
    document.querySelector('body').style.transform = 'scale(1.2)';
    } else{
    document.querySelector('body').style.transform = 'scale(0.9)';
    }

     document.querySelector('body').style.opacity = '0';

    setTimeout(function() { 
        window.location.href = href

    }, 100);

 
}






document.addEventListener('DOMContentLoaded', function(event) {

        document.querySelector('body').style.transform = 'unset';   


    document.querySelector('body').style.opacity = '1';

    if(focusDisplay){
    focusDisplay.focus();
    }


});

