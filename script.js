//  SCRIPT OF VERIFICATION PAGE
const codes = document.querySelectorAll(".code")
codes[0].focus();
codes.forEach((currEleme, index) =>{
    currEleme.addEventListener('keydown', (e) =>{
        if(e.key >=0 && e.key <= 9){
            codes[index].value = ''
            setTimeout(() => codes[index+1].focus(), 10);
        }else if (e.key === 'Backspace'){
            setTimeout(() => codes[index-1].focus(), 10);
        }
    })
});

const Btn = document.getElementById("btn");

Btn.addEventListener('click', () => {
    Btn.style.border = "3.5px solid rgb(216, 184, 0)";
    Btn.style.backgroundColor = "white";
});
Btn.addEventListener('mouseleave', () => {
    Btn.style.border = "1px"
    Btn.style.backgroundColor = "rgb(168, 163, 163)";
});