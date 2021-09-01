function onLoad() {
    document.calc.visor.value = "";
}
function valor(button) {
    document.calc.visor.value += button;
}
function apagar(button) {
    document.calc.visor.value = "";
}
function igual(button) {
    let resultado = eval(document.calc.visor.value)
    document.calc.visor.value = resultado
}