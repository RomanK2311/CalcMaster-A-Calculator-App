

const themeType = localStorage.getItem('theme') || 'light';

if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'light');

}

const themeColorVariation = localStorage.getItem('color-theme') || 'Material You (pop_blue_default)';

if (!localStorage.getItem('color-theme')) {
    localStorage.setItem('color-theme', 'Material You (pop_blue_default)');

}


document.documentElement.setAttribute('data-theme', themeType);
document.documentElement.setAttribute('data-color-theme', themeColorVariation);
const focusDisplay = document.getElementById('display')
const lastInputSaveSwitch = document.getElementById('last_input_save');


if(lastInputSaveSwitch){

    function lastInputSave(){
        localStorage.setItem('lastInputSave', lastInputSaveSwitch.selected)
    }



}

const getLastInputSaveSwitch = localStorage.getItem('lastInputSave');

if(lastInputSaveSwitch){
    if(getLastInputSaveSwitch === 'true'){
        lastInputSaveSwitch.selected = true;
    } else{
        lastInputSaveSwitch.selected = false
    } 
}

if(getLastInputSaveSwitch === 'true'){
} else{
    localStorage.removeItem('inputValueDISPLAYBIG')

}

// main

let currentInput = '';
let history = [];
var separator = ",";



if(focusDisplay){
    
     const savedValue = localStorage.getItem("inputValueDISPLAYBIG") || "";
    
     currentInput += savedValue

     focusDisplay.value = currentInput

     focusDisplay.scrollLeft = focusDisplay.scrollWidth

     if(currentInput.length > 8){
        document.getElementById("display").style.paddingRight = "8px";

     }
    }

function checkEmptydisplay(){
    if(focusDisplay){
    if (focusDisplay.value.trim() === '') {
        document.querySelector('.equals').disabled = true
    } else {
        document.querySelector('.equals').disabled = false     
    }
}
}
checkEmptydisplay();

function appendToDisplay(value) {

    checkEmptydisplay()

    currentInput = currentInput.toString();

    if (value === '*' || value === 'x') {
        value = '×';
    } else if (value === '/') {
        value = '÷';
    }

    const displayElement = document.getElementById("display");

    if (value === '%') {
        currentInput = parseFloat(currentInput) / 100;
        displayElement.value = currentInput;

        if (isNaN(currentInput)) {
            currentInput = "";
            document.getElementById("display").value = "";
            return;

        }
    } else {
        if (isOperator(value) && isOperator(currentInput.slice(-1))) {

            currentInput = currentInput.slice(0, -1) + value;
        } else {
            currentInput += value;
        }

        displayElement.classList.remove("smaller-font");
        displayElement.style.fontSize = "";
        displayElement.value = numberWithCommas(currentInput);
        document.getElementById("display").style.color = "var(--On-Surface)";
    }


    const fontSize = parseInt(window.getComputedStyle(displayElement).fontSize);
    const newFontSize = (displayElement.clientWidth / displayElement.scrollWidth) * fontSize;

    const minFontSizeStep1 = 70;
    const minFontSizeStep2 = 50;

    if (displayElement.scrollWidth > displayElement.clientWidth) {
        let adjustedFontSize = newFontSize;

        if (newFontSize > minFontSizeStep1) {
            adjustedFontSize = Math.max(minFontSizeStep1, newFontSize - 2);
        }

        if (newFontSize > minFontSizeStep2 && newFontSize <= minFontSizeStep1) {
            adjustedFontSize = Math.max(minFontSizeStep2, newFontSize - 2);

        }

        if (newFontSize <= minFontSizeStep2) {
            adjustedFontSize = minFontSizeStep2;
        }

        displayElement.style.fontSize = adjustedFontSize + "px";
        document.getElementById("display").style.paddingRight = "8px";
    }

            



    
    const values = ['×', '+', '÷', '-', '!', '^', '√', 'π'];

    function containsAtLeastOneSpecifiedValue(input) {
        for (let value of values) {
            if (input.includes(value)) {
                return true;
            }
        }
        return false;
    }
    
    
    if (containsAtLeastOneSpecifiedValue(currentInput)) {
        calculateNormal();
    } else{
       
    }
    
    document.getElementById('display').focus();

    displayElement.scrollLeft = displayElement.scrollWidth;



                    if(getLastInputSaveSwitch === 'true'){
                        localStorage.setItem("inputValueDISPLAYBIG", document.getElementById('display').value);
                    } else{
                        return;
                    }
}

if(focusDisplay){
document.getElementById("display").addEventListener("paste", function(event) {
    event.preventDefault();

    let pastedText = (event.clipboardData || window.clipboardData).getData('text');

    currentInput += pastedText;

    const displayElement = document.getElementById("display");
    displayElement.value = numberWithCommas(currentInput);

 calculateNormal()

    displayElement.focus();
});

}

function isOperator(value) {
    return value === '+' || value === '-' || value === '×' || value === '÷';
}

function updateSeparator() {
    separator = document.querySelector('input[name="separator"]:checked').value;
    localStorage.setItem('separator', separator);
}

function getSeparator() {
    return localStorage.getItem('separator') || ',';
}

function numberWithCommas(x) {
    const storedSeparator = getSeparator();
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, storedSeparator);
}

document.addEventListener('DOMContentLoaded', function () {
    if (!localStorage.getItem('separator')) {
        localStorage.setItem('separator', ',');
    }

    const initialSeparator = getSeparator();
    const radioInput = document.querySelector(`input[name="separator"][value="${initialSeparator}"]`);
    if (radioInput) {
        radioInput.checked = true;
    }
});


function calculateNormal() {
    try {
        let evalInput = currentInput.replace(/×/g, '*').replace(/÷/g, '/');

        evalInput = evalInput.replace(/\^/g, '**');

        evalInput = evalInput.replace(/(\d+)?\s?[\u221A√]\s?(\d+|\([^)]+\))/g, '($2 ** (1/$1))');

        evalInput = evalInput.replace(/(\d+)!/g, function (match, num) {
            num = parseInt(num);
            let result = 1;
            for (let i = 2; i <= num; i++) {
                result *= i;
            }
            return result;
        });

        evalInput = evalInput.replace(/π/g, Math.PI);


        const evaluateBrackets = (input) => {
            const bracketRegex = /\(([^()]*)\)/;
            while (bracketRegex.test(input)) {
                input = input.replace(bracketRegex, (_, expr) => eval(expr));
            }
            return input;
        };

        evalInput = evaluateBrackets(evalInput);

        const result = eval(evalInput);

        if (isNaN(result)) {
            document.getElementById("display").style.color = "";
            ErrorToast();
            return;
        }


        const displayElement = document.getElementById("displayAnswer");
        displayElement.value = numberWithCommas(result % 1 === 0 ? result : result.toFixed(2));

        const fontSize = parseInt(window.getComputedStyle(displayElement).fontSize);
        const newFontSize = (displayElement.clientWidth / displayElement.scrollWidth) * fontSize;

        const minFontSizeStep1 = 14;
        const minFontSizeStep2 = 10;

        if (displayElement.scrollWidth > displayElement.clientWidth) {
            let adjustedFontSize = newFontSize;

            if (newFontSize > minFontSizeStep1) {
                adjustedFontSize = Math.max(minFontSizeStep1, newFontSize - 2);
            }

            if (newFontSize > minFontSizeStep2 && newFontSize <= minFontSizeStep1) {
                adjustedFontSize = Math.max(minFontSizeStep2, newFontSize - 2);
            }

            if (newFontSize <= minFontSizeStep2) {
                adjustedFontSize = minFontSizeStep2;
            }

            displayElement.style.fontSize = adjustedFontSize + "px";
        } else {
            displayElement.classList.remove("smaller-font");
            displayElement.style.fontSize = "";
        }

        displayElement.scrollLeft = displayElement.scrollWidth;
    } catch (error) {
        
        console.log(error);
    }
}


// calculate btn
function calculate() {
    try {
        let evalInput = currentInput.replace(/×/g, '*').replace(/÷/g, '/');

        evalInput = evalInput.replace(/\^/g, '**');

        evalInput = evalInput.replace(/(\d+)?\s?[\u221A√]\s?(\d+|\([^)]+\))/g, '($2 ** (1/$1))');

        evalInput = evalInput.replace(/(\d+)!/g, function (match, num) {
            num = parseInt(num);
            let result = 1;
            for (let i = 2; i <= num; i++) {
                result *= i;
            }
            return result;
        });

        evalInput = evalInput.replace(/π/g, Math.PI);


        const evaluateBrackets = (input) => {
            const bracketRegex = /\(([^()]*)\)/;
            while (bracketRegex.test(input)) {
                input = input.replace(bracketRegex, (_, expr) => eval(expr));
            }
            return input;
        };



        evalInput = evaluateBrackets(evalInput);

        const result = eval(evalInput);

        if (isNaN(result)) {
            document.getElementById("display").style.color = "var(--Error)";
            ErrorToast();
            return;

        }

        history.push({ expression: numberWithCommas(currentInput), result: numberWithCommas(result % 1 === 0 ? result : result.toFixed(2)), timestamp: Date.now() });
        saveHistoryToLocalStorage();
        currentInput = result;

        const displayElement = document.getElementById("display");
        displayElement.value = numberWithCommas(result % 1 === 0 ? result : result.toFixed(2));


         document.getElementById("displayAnswer").value = ''

        const fontSize = parseInt(window.getComputedStyle(displayElement).fontSize);
        const newFontSize = (displayElement.clientWidth / displayElement.scrollWidth) * fontSize;


        const minFontSizeStep1 = 14;
        const minFontSizeStep2 = 10;

        if (displayElement.scrollWidth > displayElement.clientWidth) {
            let adjustedFontSize = newFontSize;

            if (newFontSize > minFontSizeStep1) {
                adjustedFontSize = Math.max(minFontSizeStep1, newFontSize - 2);
            }

            if (newFontSize > minFontSizeStep2 && newFontSize <= minFontSizeStep1) {
                adjustedFontSize = Math.max(minFontSizeStep2, newFontSize - 2);
            }


            if (newFontSize <= minFontSizeStep2) {
                adjustedFontSize = minFontSizeStep2;
            }

            displayElement.style.fontSize = adjustedFontSize + "px";
        } else {

            displayElement.classList.remove("smaller-font");
            displayElement.style.fontSize = "";
        }


        displayElement.scrollLeft = displayElement.scrollWidth;

        if(getLastInputSaveSwitch === 'true'){
            localStorage.setItem("inputValueDISPLAYBIG", document.getElementById('display').value);
        } else{
            return;
        }

    } catch (error) {
        document.getElementById("display").style.color = "var(--Error)";
        document.getElementById("displayAnswer").value = 'Math error'

        console.log(error)
    }

}




function clearDisplay() {
    currentInput = "";
    document.getElementById("display").value = "";
    document.getElementById("display").style.color = "var(--On-Surface)";
    document.getElementById("display").style.fontSize = "";
    document.getElementById("display").style.paddingRight = ""
    document.getElementById('displayAnswer').value = ''
    document.getElementById('display').focus();
checkEmptydisplay();
if(getLastInputSaveSwitch === 'true'){
    localStorage.setItem("inputValueDISPLAYBIG", document.getElementById('display').value);
} else{
    return;
}


}

function clearLast() {
    if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1);
        document.getElementById("display").style.color = "var(--On-Surface)";
        document.getElementById("display").value = currentInput;

    }
    if (currentInput.length === 6) {
        document.getElementById("display").style.fontSize = "";
        document.getElementById("display").style.paddingRight = "";
    }

    calculateNormal()

    if (currentInput.length === 0) {
        document.getElementById('displayAnswer').value = ''
    }

checkEmptydisplay();
document.getElementById('display').focus();
if(getLastInputSaveSwitch === 'true'){
    localStorage.setItem("inputValueDISPLAYBIG", document.getElementById('display').value);
} else{
    return;
}



}


function saveHistoryToLocalStorage() {
    localStorage.setItem("calculatorHistory", JSON.stringify(history));
}

function loadHistoryFromLocalStorage() {
    const savedHistory = localStorage.getItem("calculatorHistory");
    if (savedHistory) {
        history = JSON.parse(savedHistory);
    }
}



function updateHistoryContent() {
    const historyContentElement = document.getElementById("historyContent");
    const clearHistoryButton = document.getElementById("clearHistoryButton");

    historyContentElement.innerHTML = "";
    

    if (history.length === 0) {
        historyContentElement.innerHTML = '<p class="no-history-text"><span><i icon-outlined>history</i></span>No history to display</p>';
        // clearHistoryButton.style.pointerEvents = 'none';
        // clearHistoryButton.style.opacity = '0.5'
        clearHistoryButton.disabled = true;
        return;
    }
    clearHistoryButton.disabled = false;




    


    let currentDate = null;

    const reversedHistory = [...history].reverse();

    reversedHistory.forEach(item => {
        const historyItem = document.createElement("div");
        const expression = item.expression;
        const result = item.result;
        const itemDate = new Date(item.timestamp);



        if (isYesterday(itemDate)) {
            historyItem.innerHTML = `<span class="yesterday">Yesterday</span> <br> ${expression} = <span class="result-hty">${result}</span>`;
        } else if (isToday(itemDate)) {
            historyItem.innerHTML = `<span class="today">Today</span> <br> ${expression} = <span class="result-hty">${result}</span>`;
        } else {
            const formattedDate = formatDate(itemDate);
            historyItem.innerHTML = `<span class="date">${formattedDate}</span> <br> ${expression} = <span class="result-hty">${result}</span>`;
        }



        const ripple_item_history = document.createElement('md-ripple');

        historyItem.classList.add("history-entry");
        historyItem.setAttribute('clickable', 'true')
        historyContentElement.appendChild(historyItem);
        const copyModal = document.getElementById('ChooseCopyHistory');
        const resultCopyBtn = document.getElementById('copyResult')
        const expressionCopyBtn = document.getElementById('copyEquation')



        historyItem.addEventListener('click', () => {
            copyModal.show();

               const dialogColorOption = document.getElementById('historyContent');

        if (dialogColorOption.scrollTop > 10) {

            dialogcolorInverted()
        } else {
            dialogcolorFull()
        }
            

            expressionCopyBtn.setAttribute('data-copy-history-expression', expression)
                resultCopyBtn.setAttribute('data-copy-history-result', result)


        });


        document.getElementById('copyEquation').addEventListener('click', () =>{
            const copyExpressionText = expressionCopyBtn.getAttribute('data-copy-history-expression')

            copyTextToClipboard(copyExpressionText);


        });



        
        document.getElementById('copyResult').addEventListener('click', () => {

            const copyresultText = document.getElementById('copyResult').getAttribute('data-copy-history-result');


            copyTextToClipboard(copyresultText);

 
         });

         function copyTextToClipboard(text) {
            var textField = document.createElement('textarea');
            textField.value = text;
            textField.style.opacity = '0'
            textField.style.position = 'absolute'
            textField.setAttribute('inputmode', 'none')
            document.body.appendChild(textField);
            ShowSnack('Copied ' + text, 3000, 3);

            setTimeout(() =>{
                textField.select();
                document.execCommand('copy');}, 300);

            setTimeout(() =>{
                textField.remove();
            }, 400);
          }



        
 

        copyModal.addEventListener('close', () =>{
            setTimeout(() =>{
                expressionCopyBtn.removeAttribute('data-copy-history-expression')
                resultCopyBtn.removeAttribute('data-copy-history-result')
               }, 300);

               const dialogColorOption = document.getElementById('historyContent');
        
               if (dialogColorOption.scrollTop > 10) {
       
                   checkSearchScroll()
               } else {
                   checkTHEME()
               }

        });
    });
}


function isToday(date) {
    const today = new Date();
    return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
    );
}

function isYesterday(date) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return (
        date.getDate() === yesterday.getDate() &&
        date.getMonth() === yesterday.getMonth() &&
        date.getFullYear() === yesterday.getFullYear()
    );
}

function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}


const confirmDeleteHistoryDialog = document.getElementById('confirmDeleteHistory')

function DeleteHistoryConfirm(){
    confirmDeleteHistoryDialog.show();

    const dialogColorOption = document.getElementById('historyContent');

        if (dialogColorOption.scrollTop > 10) {

            dialogcolorInverted()
        } else {
            dialogcolorFull()
        }

}


if(confirmDeleteHistoryDialog){
confirmDeleteHistoryDialog.addEventListener('close', () =>{
    const dialogColorOption = document.getElementById('historyContent');

        if (dialogColorOption.scrollTop > 10) {

            checkSearchScroll()
        } else {
            checkTHEME()
        }
});
}



function clearHistory() {
    history = [];
    saveHistoryToLocalStorage();
    updateHistoryContent();
}

loadHistoryFromLocalStorage();


if(document.getElementById('historyContent')){
updateHistoryContent(); 
}





function sendThemeToAndroid(theme) {

    AndroidInterface.updateStatusBarColor(theme);


};




function swapButtons() {

    var swapSwitch = document.getElementById('swapZeroSwitch');


    localStorage.setItem('buttonSwapState', swapSwitch.selected);
}

function recallSwapSwitches(){
    var button0 = document.getElementById('buttonZero');
    var buttonDot = document.getElementById('buttonDecimal');
    var swapSwitch = document.getElementById('swapZeroSwitch');
  var buttonSwapState = localStorage.getItem('buttonSwapState');

  if (buttonSwapState === 'true') {

    if(swapSwitch){
    swapSwitch.selected = true;
    }
    if(button0){

    button0.innerHTML = '.';
    buttonDot.innerHTML = '0';

    button0.setAttribute('onclick', "appendToDisplay('.')");
    buttonDot.setAttribute('onclick', "appendToDisplay('0')");
}
    
  } else {
    if(swapSwitch){
        swapSwitch.selected = false;
        }

        if(button0){
    button0.innerHTML = '0';
    buttonDot.innerHTML = '.';
    button0.setAttribute('onclick', "appendToDisplay('0')");
    buttonDot.setAttribute('onclick', "appendToDisplay('.')");
        }
  }
}


    recallSwapSwitches()



 // icons-switches

 const toggleIconsCheckboxElement = document.getElementById('toggle_switch_icons');
 const allSwitches = document.querySelectorAll('md-switch');
 
 function toggleIconsSwitches() {
    if(toggleIconsCheckboxElement){
     if (toggleIconsCheckboxElement.checked) {
         allSwitches.forEach(function(Switch) {
             Switch.setAttribute('icons', '');
         });
     } else {
         allSwitches.forEach(function(Switch) {
             Switch.removeAttribute('icons', '');
         });
     }
    }
    if(toggleIconsCheckboxElement){
     localStorage.setItem('toggleIconsState', toggleIconsCheckboxElement.checked);}
 }
 
 function retrieveToggleIconsState() {
     const state = localStorage.getItem('toggleIconsState');
     if (state === null) {
         toggleIconsCheckboxElement.checked = false;
     } else if (state === 'true') {
        if(toggleIconsCheckboxElement){ 
         toggleIconsCheckboxElement.checked = true;}
     } else {
        if(toggleIconsCheckboxElement){
            toggleIconsCheckboxElement.checked = false;}
     }
 }
 
 
 
 retrieveToggleIconsState();
 toggleIconsSwitches();


