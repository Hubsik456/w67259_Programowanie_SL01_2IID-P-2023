function Zadanie_1(Liczba)
{
    Wynik = 1
    for (var x = 1; x < Liczba+1; x++)
    {
        Wynik = Wynik * x
    }
    console.log(Liczba + "! = " + Wynik)
}

function Zadanie_2(Element, Kolor)
{
    Przyciski = document.getElementsByClassName("Zadanie_2")

    for (var x = 0; x < Przyciski.length; x++)
    {
        Przyciski[x].style.backgroundColor = "white"
        Przyciski[x].style.border = "1px rigged black"
    }

    Przyciski[Element].style.backgroundColor = Kolor
}

function Zadanie_3()
{
    var Element = document.getElementById("Zadanie_3")

    if (Element.style.display == "none")
    {
        Element.style.display = "block"
    }
    else
    {
        Element.style.display = "none"
    }
}

Tablica = []
function Zadanie_4()
{
    Input = document.getElementById("Zadanie_4").value
    Tablica.push(Input)

    console.log(Tablica)
}

function Zadanie_5()
{
    var Imie = document.getElementById("Zadanie_5_Imie").value
    var Nazwisko = document.getElementById("Zadanie_5_Nazwisko").value

    console.log(Imie, Nazwisko)

    var Tabela = document.getElementById("Zadanie_5_Tabela")
    var Nowy_Wiersz = Tabela.insertRow()
    
    var Nowa_Kolumna_Imie = Nowy_Wiersz.insertCell()
    Nowa_Kolumna_Imie.textContent = Imie

    var Nowa_Kolumna_Nazwisko = Nowy_Wiersz.insertCell()
    Nowa_Kolumna_Nazwisko.textContent= Nazwisko
}