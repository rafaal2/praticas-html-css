
function insert(num){
    var numero = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = numero + num;

}
function clean(){
    document.getElementById('result').innerHTML = "";
}
function back(){
    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length - 1);
}
function calcular()
{
    var result = document.getElementById('result').innerHTML;
    if(result)
    {
        document.getElementById('result').innerHTML = eval(result);
    }
    else
    {
        document.getElementById('result').innerHTML = "nothing"
    }
}
function DarkMode() {
    var body = document.body;
    var bottom = document.querySelector('.bottom');
    var main = document.querySelector('.main');

    body.classList.toggle('dark-mode');
    bottom.classList.toggle('DarkMode');
    main.classList.toggle('DarkMode');
}
