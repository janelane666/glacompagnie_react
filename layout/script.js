let inputNum = document.getElementById("inputNum")

inputNum.addEventListener('keyup', () => {
    inputNum.value = inputNum.value.replace(/(\d{2})(\d{1,2})/g, '$1 $2').trim();
});
