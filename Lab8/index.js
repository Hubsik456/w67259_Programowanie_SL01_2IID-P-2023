function Zadanie_1(Element)
{
    var Przyciski = document.querySelectorAll("button.Zad_1")

    for (var x = 0; x<Przyciski.length; x++)
    {
        Przyciski[x].style.color = "white"
        Przyciski[x].style.backgroundColor = "black"
    }

    Element.style.color = "initial"
    Element.style.backgroundColor = "initial"
}

window.addEventListener("load", function(){

    var Formularz = document.querySelector("form")

    Formularz.addEventListener("submit", function(x){
        x.preventDefault()

        var Imie = Walidacja_Tekst(document.getElementById("Imie"))
        var Nazwisko = Walidacja_Tekst(document.getElementById("Nazwisko"))
        var Email = Walidacja_Email(document.getElementById("Email"))
        var Haslo = Walidacja_Haslo(document.getElementById("Haslo"))
        var Haslo_Powt = Walidacja_HasloPowt(document.getElementById("Haslo_Powt"))

        console.log(Imie)
        console.log(Nazwisko)
        console.log(Email)
        console.log(Haslo)
        console.log(Haslo_Powt)

        if (Imie == true && Nazwisko == true && Email == true && Haslo == true && Haslo_Powt == true)
        {
            alert("OK")
        }
        else
        {
            alert("ŹLE")
        }
    })
})

function Walidacja_Tekst(Element)
{
    if (Element.value.length < 3)
    {
        Element.setCustomValidity("ZA KRÓTKIE")
        return false
    }
    else
    {
        Element.setCustomValidity("")
        return true
    }
}

function Walidacja_Email(Element)
{
    var Regex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!Regex.test(Element.value))
    {
        Element.setCustomValidity("ZŁY ADRES EMAIL")
        return false
    }
    else
    {
        Element.setCustomValidity("")
        return true
    }

}

function Walidacja_Haslo(Element)
{
    if (Element.value.length < 3)
    {
        Element.setCustomValidity("ZA KRÓTKIE")
        return false
    }
    else
    {
        Element.setCustomValidity("")

        if (Walidacja_HasloPowt(document.getElementById("Haslo_Powt")))
        {
            return true
        }
        else
        {
            return false
        }
    }
}

function Walidacja_HasloPowt(Element)
{
    if (Element.value != document.getElementById("Haslo").value)
    {
        Element.setCustomValidity("HASŁA SĄ RÓŻNE")
        return false
    }
    else
    {
        Element.setCustomValidity("")
        return true
    }
}

var Samochod = {
    "Marka": "Audi",
    "Model": "Model123",
    "Rok_Produkcji": "2000",
    "Kolor": "Niebieski",
    "Predkosc": 100,
    "Zmiana_Predkosci": function(O_Ile)
    {
        this.Predkosc += O_Ile
        return this.Predkosc
    },
    "Info": function()
    {
        return this.Marka + " " + this.Model + " (" + this.Rok_Produkcji + ") Kolor: " + this.Kolor + ", Prędkość: " + this.Predkosc
    }
}

function Zadanie_4()
{
    var Tabela = document.getElementById("Z4_Tabela")
    var TEMP = Tabela.innerHTML

    var Imie = document.getElementById("Z4_Imie").value
    var Nazwisko = document.getElementById("Z4_Nazwisko").value

    TEMP += "<tr> <td>"+Imie+"</td> <td>"+Nazwisko+"</td> </tr>"

    Tabela.innerHTML = TEMP
}