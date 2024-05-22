

import { getRandomColorTheme } from '../modules/random.js';

const toggleSwitch = document.getElementById('toggledark');
const colorCheckbox = document.getElementById('togglecolor');
const textToUpdate = document.getElementById('themeName');
const themeDataLabels = document.querySelectorAll('.color_item')

const currentTheme = localStorage.getItem('theme') || 'light';
const ThemeType = localStorage.getItem('themetype');

const currentColorTheme = localStorage.getItem('color-theme') || 'Material You (pop_blue_default)';

export const colorThemes = ['Material You (Berry pop blue 44)', 'Material You (Raisin purple 100)', 'Material You (Olive pop green 49)', 'Material You (Forest green 33)', 'Material You (Chestnut cool red 122)', 'Material You (Raspberry pink P99)', 'Material You (Hint orange 33)', 'Material You (Deep charcoal 83)'];

// check theme mode


function setTheme(theme, color) {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-color-theme', color);

    localStorage.setItem('theme', theme);
    localStorage.setItem('color-theme', color);
    updateTextContent(color);

    themeDataLabels.forEach(themeDataLabel => {
        themeDataLabel.setAttribute('data-theme', theme);
    });
}



toggleSwitch.addEventListener('change', () => {
    const selectedTheme = toggleSwitch.selected ? 'dark' : 'light';
    const selectedColor = colorCheckbox.selected ? getRandomColorTheme() : 'Material You (pop_blue_default)';
    setTheme(selectedTheme, selectedColor);


    checkTHEME()
customThemeRadio();


document.getElementById('theme_1').checked = true

themeOverlaySwitch()

});



colorCheckbox.addEventListener('change', () => {
    const selectedTheme = toggleSwitch.selected ? 'dark' : 'light';
  const selectedColor = colorCheckbox.selected ?  getRandomColorTheme() : 'Material You (pop_blue_default)';
    setTheme(selectedTheme, selectedColor);
    checkTHEME()

    if(colorCheckbox.selected){
    document.querySelector('.app_color_theme_selection').classList.remove('open');
    localStorage.setItem('themetype', 'auto');

    } else{
    document.querySelector('.app_color_theme_selection').classList.add('open');
    }
customThemeRadio();



});

 colorCheckbox.addEventListener('change', function() {
     if (!colorCheckbox.selected) {
         onlyCHECK();
     }
 });
setTheme(currentTheme, currentColorTheme);


if (currentTheme === 'dark') {
    toggleSwitch.selected = true;

}

 function onlyCHECK(){

      sendThemeToAndroid('bluesetDef');

 }



if (currentColorTheme === 'Material You (pop_blue_default)') {
      colorCheckbox.selected = false;
  document.querySelector('.app_color_theme_selection').classList.add('open');


} else if(ThemeType === 'auto'){

  colorCheckbox.selected = true;
  document.querySelector('.app_color_theme_selection').classList.remove('open');

    const newRandomColorTheme = getRandomColorTheme();
    setTheme(currentTheme, newRandomColorTheme);
}  if(ThemeType === 'custom'){
    colorCheckbox.selected = false
    document.querySelector('.app_color_theme_selection').classList.add('open');

}



function updateTextContent(color) {

    textToUpdate.textContent = `${color}`;

}


function customThemeRadio(){

if(currentColorTheme === 'Material You (Berry pop blue 44)'){
    document.getElementById('theme_1').checked = true
}

else if(currentColorTheme === 'Material You (Raisin purple 100)'){
    document.getElementById('theme_2').checked = true
    
} 
else if(currentColorTheme === 'Material You (Olive pop green 49)'){
    document.getElementById('theme_3').checked = true
} 
else if(currentColorTheme === 'Material You (Forest green 33)'){
    document.getElementById('theme_4').checked = true
} 
else if(currentColorTheme === 'Material You (Chestnut cool red 122)'){
    document.getElementById('theme_5').checked = true
} 
else if(currentColorTheme === 'Material You (Raspberry pink P99)'){
    document.getElementById('theme_6').checked = true
} 
else if(currentColorTheme === 'Material You (Hint orange 33)'){
    document.getElementById('theme_7').checked = true
}
else if(currentColorTheme === 'Material You (Deep charcoal 83)'){
    document.getElementById('theme_8').checked = true
}  
else if(currentColorTheme === 'Material You (Blue bright P40)'){
    document.getElementById('theme_9').checked = true
}  
}

document.getElementById('purple_style').addEventListener('click', () =>{
    document.documentElement.setAttribute('data-color-theme', 'Material You (Raisin purple 100)');
    localStorage.setItem('color-theme', 'Material You (Raisin purple 100)');
    localStorage.setItem('themetype', 'custom');
    updateTextContent('Material You (Raisin purple 100)')
checkTHEME()
themeOverlaySwitch()

})

document.getElementById('blue_style').addEventListener('click', () =>{
    document.documentElement.setAttribute('data-color-theme', 'Material You (Berry pop blue 44)');
    localStorage.setItem('color-theme', 'Material You (Berry pop blue 44)');
    localStorage.setItem('themetype', 'custom');
    updateTextContent('Material You (Berry pop blue 44)')
checkTHEME()
themeOverlaySwitch()

})

document.getElementById('yellow_style').addEventListener('click', () =>{
    document.documentElement.setAttribute('data-color-theme', 'Material You (Olive pop green 49)');
    localStorage.setItem('color-theme', 'Material You (Olive pop green 49)');
    localStorage.setItem('themetype', 'custom');
    updateTextContent('Material You (Olive pop green 49)')
checkTHEME()
themeOverlaySwitch()

})

document.getElementById('green_style').addEventListener('click', () =>{
    document.documentElement.setAttribute('data-color-theme', 'Material You (Forest green 33)');
    localStorage.setItem('color-theme', 'Material You (Forest green 33)');
    localStorage.setItem('themetype', 'custom');
    updateTextContent('Material You (Forest green 33)')
checkTHEME()
themeOverlaySwitch()

})

document.getElementById('red_style').addEventListener('click', () =>{
    document.documentElement.setAttribute('data-color-theme', 'Material You (Chestnut cool red 122)');
    localStorage.setItem('color-theme', 'Material You (Chestnut cool red 122)');
    localStorage.setItem('themetype', 'custom');
    updateTextContent('Material You (Chestnut cool red 122)')
checkTHEME()
themeOverlaySwitch()
})

document.getElementById('pink_style').addEventListener('click', () =>{
    document.documentElement.setAttribute('data-color-theme', 'Material You (Raspberry pink P99)');
    localStorage.setItem('color-theme', 'Material You (Raspberry pink P99)');
    localStorage.setItem('themetype', 'custom');
    updateTextContent('Material You (Raspberry pink P99)')
checkTHEME()
themeOverlaySwitch()
})

document.getElementById('orange_style').addEventListener('click', () =>{
    document.documentElement.setAttribute('data-color-theme', 'Material You (Hint orange 33)');
    localStorage.setItem('color-theme', 'Material You (Hint orange 33)');
    localStorage.setItem('themetype', 'custom');
    updateTextContent('Material You (Hint orange 33)')
checkTHEME()
themeOverlaySwitch()
})

document.getElementById('charcol_style').addEventListener('click', () =>{
    document.documentElement.setAttribute('data-color-theme', 'Material You (Deep charcoal 83)');
    localStorage.setItem('color-theme', 'Material You (Deep charcoal 83)');
    localStorage.setItem('themetype', 'custom');
    updateTextContent('Material You (Deep charcoal 83)')
checkTHEME()
themeOverlaySwitch()
})

document.getElementById('blue_bright_style').addEventListener('click', () =>{
    document.documentElement.setAttribute('data-color-theme', 'Material You (Blue bright P40)');
    localStorage.setItem('color-theme', 'Material You (Blue bright P40)');
    localStorage.setItem('themetype', 'custom');
    updateTextContent('Material You (Blue bright P40)')
checkTHEME()
themeOverlaySwitch()
})

checkTHEME()


customThemeRadio();



// for adjusting scroll
function themeOverlaySwitch(){
    document.querySelector('.theme_overlay').hidden = false;

    const loader = document.getElementById('theme_loader');
    let loaderValue = 0;

    function increaseLoader() {
        loaderValue += 0.3; 

        loaderValue = Math.min(loaderValue, 1);

        loader.setAttribute('value', loaderValue.toString());
    }

    const intervalId = setInterval(increaseLoader, 200);


    setTimeout(() =>{
        document.getElementById('headUser-1').scrollTop = 0;
    }, 800);


    setTimeout(() =>{
        document.querySelector('.theme_overlay').hidden = true;
        loader.setAttribute('value', '0');



        clearInterval(intervalId);
    }, 1000);
}
