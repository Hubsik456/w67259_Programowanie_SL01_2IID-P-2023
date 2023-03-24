function zmienTekst()
{
    document.getElementById("tekst").innerHTML = "Witaj na mojej stronie!"; 
} 

function Zadanie_1()
{
    alert("Alert z Zadania #1")
}

function Zadanie_2()
{
    console.log("--- Zadanie 2 ---")
    for (var x = 0; x <= 100; x++)
    {
        if (x % 2 == 0)
        {
            console.log(x)
        }
    }
}

function Zadanie_3()
{
    var a = parseInt(prompt("Podaj a"))
    var b = parseInt(prompt("Podaj b"))

    Wynik = a + b

    alert("Wynik: " + Wynik)
}


function Zadanie_4()
{
    var Data = new Date()
    document.getElementById("Zadanie_4").innerHTML = "Godzina: " + Data
}

var RNG = Math.floor(Math.random() * 11) // Do Zadania #5; 0 - 10
var Licznik = 1
function Zadanie_5()
{
    var Input = Number(document.getElementById("Z5_Input").value)

    if (Input == RNG)
    {
        alert("Poprawna Odpowiedź!\nIlośc Prób: "+ Licznik)
        window.location.reload()
    }
    else if (Input > RNG)
    {
        alert("Wylosowana liczba jest mniejsza.")
        Licznik++
    }
    else if (Input < RNG)
    {
        alert("Wylosowana liczba jest większa.")
        Licznik++
    }
}

window.addEventListener("load", function()
{
    Zadanie_4() // Żeby przy załadowaniu już wyświetliło godzinę
    setInterval(Zadanie_4, 1000)

    console.log(RNG)
})
