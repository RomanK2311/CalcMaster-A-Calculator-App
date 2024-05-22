const vibrateSwitch = document.getElementById('vibrateSwitch');
const vibrateButtons = document.querySelectorAll('.v-key');
const vibrationType = document.querySelector('.vibration_type');
const VibrationON = localStorage.getItem('KeyboardVibration');
const vibrationType_1 = document.getElementById('vibration-1');
const vibrationType_2 = document.getElementById('vibration-2');
const vibrationType_3 = document.getElementById('vibration-3');


function changeVibrationType(){
  if(vibrationType_3.checked){
    localStorage.setItem('vibrationType', '3-vibration')
  } else if(vibrationType_2.checked){
    localStorage.setItem('vibrationType', '2-vibration')
  } else{
    localStorage.setItem('vibrationType', '1-vibration')
  }
}




const vibrationValue = localStorage.getItem('vibrationType')

if(vibrationType){
if(vibrationValue === '3-vibration'){
    vibrationType_3.checked = true;
} else if(vibrationValue === '2-vibration'){
  vibrationType_2.checked = true;
} else{
  vibrationType_1.checked = true;
}
}

function checkType(){
if(vibrateSwitch.selected){
  vibrationType.style.height = '64px'
} else{
  vibrationType.style.height = '0'

}
}


const handleVibration = () => {
  if (VibrationON === 'true' && 'vibrate' in navigator) {
    if(vibrationValue === '1-vibration'){
    navigator.vibrate(55);
    } else if(vibrationValue === '2-vibration'){
    navigator.vibrate(70);
    } else{
    navigator.vibrate(100);

    }
  } 
};



vibrateButtons.forEach(button => {
  button.addEventListener('click', handleVibration);
});

vibrateSwitch.addEventListener('change', checkType)

checkType();
