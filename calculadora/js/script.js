const main = document.querySelector("main");
const validKeys = document.querySelectorAll(".valid")
const calc = document.querySelector("#calc")
const specialKeys = document.querySelectorAll(".special")
const result = document.querySelector("#result");
const root = document.querySelector(":root")
const switchTheme = document.getElementById("switch");
const copy = document.querySelector("#copy");

validKeys.forEach((charkeyBtn)=>{
    charkeyBtn.addEventListener("click", ()=>{
        calc.value += charkeyBtn.value
    })
})

specialKeys[0].addEventListener('click', ()=>{
    calc.value = "";
    calc.focus();
})
specialKeys[1].addEventListener("click", ()=>{
    calculate();
})

calc.addEventListener("keydown", (e)=>{
    e.preventDefault();
    if(e.key in validKeys){
        calc.value += e.key;
        return
    }
    if(e.key === "Backspace"){
       calc.value = calc.value.slice(0 , -1)
    }if(e.key === "Enter"){
        calculate();
    }
})

switchTheme.addEventListener('click', ()=>{
    if(main.dataset.theme === "light"){
        root.style.setProperty('--bg-color', '#414141')
        root.style.setProperty('--border-color', '#FFFFFF')
        root.style.setProperty('--font-color', '#FFFFFF')
        root.style.setProperty('--font-button-color', '#414141')
        root.style.setProperty('--error-color', '#ff0043')
        root.style.setProperty('--hover-color', '#D1DFD1') 
        root.style.setProperty('--hover-switch', '#FFFFFF') 
        root.style.setProperty('--font-switch', '#000000') 
        main.dataset.theme = "dark"
    }
    else{
        root.style.setProperty('--bg-color', '#fcfcfc')
        root.style.setProperty('--border-color', '#000000')
        root.style.setProperty('--font-color', '#000000')
        root.style.setProperty('--font-button-color', '#FFFFFF')
        root.style.setProperty('--error-color', '#ff0043')
        root.style.setProperty('--hover-color', '#8CC08A') 
        root.style.setProperty('--hover-switch', '#414141') 
        root.style.setProperty('--font-switch', '#FFFFFF') 
        main.dataset.theme = "light"
    }
})
copy.addEventListener('click',()=>{
    if(copy.value ==='Copy'){
        copy.value =  "Copied"
        copy.classList.add("copied")
        navigator.clipboard.writeText(result.value)
    }else{
        copy.value = "Copy"
        copy.classList.remove("copied")
    }
})
function calculate(){
    try {
        result.classList.remove("error")
     result.value = eval(calc.value)
        
    } catch (error) {
       calc.value ="";  
       result.classList.add("error")
       result.value = "Error"
    }
}