//! PDF #3 TODO:*/
/* PDF #3 RNG */
var RNG = Math.floor((Math.random() * 10) + 1); // <1; 10>
console.log(RNG)


/* PDF #3 Zadanie 4*/
function L3_Z4()
{
    var Data = new Date()
    document.getElementById("L3_Z4").innerHTML = "Godzina: " + Data
}

window.addEventListener("load", function()
{
    L3_Z4() // Żeby przy załadowaniu już wyświetliło godzinę
    setInterval(L3_Z4, 1000)

    console.log(RNG)
})

// Zadanie 5
var RNG = Math.floor(Math.random() * 11) // Do Zadania #5; 0 - 10
var Licznik = 1
function L3_Z5()
{
    var Input = Number(document.getElementById("L3_Z5").value)

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

/* //! PDF #4 TODO:*/
// Przez Literał
const WIP_Auto_1 = {
    Marka: "WIP_1",
    Rocznik: 2020,
    Info: function(Tekst = "...") {
        console.log(this.Marka + " " + this.Rocznik + " OPIS: " + Tekst)
    }
}
console.log(WIP_Auto_1)
WIP_Auto_1.Info("Przykład_1")

// Przez Konstruktor
function Przyklad_Auto_2(Marka, Rocznik)
{
    this.Marka = Marka
    this.Rocznik = Rocznik

    this.Info = function(Tekst = "...") {
        console.log(this.Marka + " " + this.Rocznik + " " + Tekst)
    }
}
var WIP_Auto_2 = new Przyklad_Auto_2("WIP1", 2021)
console.log(WIP_Auto_2)
WIP_Auto_2.Info("Przykład_2")

// Przez Klasę
class Przyklad_Auto_3
{
    constructor (Marka, Rocznik)
    {
        this.Marka = Marka
        this.Rocznik = Rocznik
    }
    Info(Tekst = "...") {
        console.log(this.Marka + " " + this.Rocznik + " " + Tekst)
    }
}
var WIP_Auto_3 = new Przyklad_Auto_3("WIP", 2023)
console.log(WIP_Auto_3)
WIP_Auto_3.Info("Przykład_3")


/* Zadanie 6 */
function Prostokat(Bok_A, Bok_B) {
    this.Bok_A = Bok_A,
    this.Bok_B = Bok_B,

    this.Czy_Kwadrat = function() {
        if (this.Bok_A == this.Bok_B)
        {
            return true
        }
        else
        {
            return false
        }
    }

    this.Pole = function() {
        return this.Bok_A * this.Bok_B
    }

    return this
}
function L4_Z6()
{
    var Bok_A = document.getElementById("L4_Z6_Bok_A").value
    var Bok_B = document.getElementById("L4_Z6_Bok_B").value

    var Prostokat_Obiekt = new Prostokat(Bok_A, Bok_B)

    console.log(Prostokat_Obiekt)
    console.log(Prostokat_Obiekt.Czy_Kwadrat())
    console.log(Prostokat_Obiekt.Pole())
}

/* //! PDF #6 TODO:*/
// Zadanie 2
function L6_Z2(Element, Kolor)
{
    var Przyciski = document.querySelectorAll(".L6_Z2")
    console.log(Przyciski)

    for (var x = 0; x < Przyciski.length; x++)
    {
        Przyciski[x].style.backgroundColor = "initial"
    }

    Element.style.backgroundColor = Kolor

}

// Zadanie 4
function L6_Z4()
{
    var Lista = document.getElementById("L6_Z4_Lista")

    var Znacznik_Li = document.createElement("li")
    Znacznik_Li.textContent = document.getElementById("L6_Z4").value

    Lista.appendChild(Znacznik_Li)
}

// Zadanie 5
function L6_Z5()
{
    var Tabela = document.getElementById("L6_Z5_Tabela")

    var Wiersz = Tabela.insertRow()

    var Imie = Wiersz.insertCell()
    Imie.textContent = document.getElementById("L6_Z5_Imie").value

    var Nazwisko = Wiersz.insertCell()
    Nazwisko.textContent = document.getElementById("L6_Z5_Nazwisko").value
}

/* //! PDF 7-8 TODO:*/

window.addEventListener("load", function(){
    var Formularz = document.querySelectorAll("form")[0];

    //! Usunięcie elementów z zadania 6, jeśli pole województwo jest nie wypełnione
    document.getElementById("Adres_Korespondencyjny").style.display = "none"
    document.getElementById("Adres_Korespondencyjny_Label").style.display = "none"
    document.getElementById("Adres_Zamieszkania").style.display = "none"
    document.getElementById("Adres_Zamieszkania_Label").style.display = "none"
    document.getElementById("CzyKorespondecyjnyTakiSam").style.display = "none"
    document.getElementById("CzyKorespondecyjnyTakiSam_Label").style.display = "none"

    Formularz.addEventListener("submit", function(x){
        x.preventDefault() // Nie będzie przeładowywało strony

        //! Zmienne
        var Imie = document.getElementById("Imie")
        var Nazwisko = document.getElementById("Nazwisko")
        var Email = document.getElementById("Email")
        var Haslo = document.getElementById("Haslo")
        var Telefon = document.getElementById("Telefon")
        var Data_Urodzenia = document.getElementById("Data_Urodzenia")

        //! Końcowa Walidacja
        var Komunikat = ""
        var Wynik_Imie = Walidacja_Tekst(Imie, 3)
        var Wynik_Nazwisko = Walidacja_Tekst(Nazwisko, 3)
        var Wynik_Email = Walidacja_Email(Email)
        var Wynik_Haslo = Walidacja_Haslo(Haslo)
        var Wynik_Telefon = Walidacja_Telefon(Telefon)
        var Wynik_Data_Urodzenia = Walidacja_Wiek(Data_Urodzenia)

        if (!Wynik_Imie)
        {
            Komunikat += "Niepoprawne imie.\n"
        }
        if (!Wynik_Nazwisko)
        {
            Komunikat += "Niepoprawne nazwisko.\n"
        }
        if (!Wynik_Email)
        {
            Komunikat += "Niepoprawny E-mail.\n"
        }
        if (!Wynik_Haslo)
        {
            Komunikat += "Niepoprawne hasło.\n"
        }
        if (!Wynik_Telefon)
        {
            Komunikat += "Niepoprawny numer telefonu.\n"
        }
        if (!Wynik_Data_Urodzenia)
        {
            Komunikat += "Niepoprawna data urodzenia.\n"
        }

        //? Całość Komunikatu
        if (Komunikat != "")
        {
            alert("FORMULARZ JEST ŹLE WYPEŁNIONY:" + Komunikat)
        }
        else
        {
            alert("FORMULARZ JEST POPRAWNIE WYPEŁNIONY")
        }
    })
})

function Walidacja_Tekst(Pole, MinLen)
{
    if (Pole.value.length < MinLen)
    {
        Pole.setCustomValidity("ZŁE DANE")
        document.querySelector("input[id='"+Pole.id+"'] + div.Error").innerHTML = "ZŁE DANE"
    }
    else
    {
        Pole.setCustomValidity("")
        document.querySelector("input[id='"+Pole.id+"'] + div.Error").innerHTML = "OK DANE"
        return true
    }

    return false
}

function Walidacja_Haslo(Pole)
{
    var Regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/ // https://uibakery.io/regex-library/password-regex-csharp

    if (!Regex.test(Pole.value))
    {
        Pole.setCustomValidity("ZŁE DANE")
        document.querySelector("input[id='"+Pole.id+"'] + div.Error").innerHTML = "SŁABE HASŁO"
    }
    else
    {
        Pole.setCustomValidity("")
        document.querySelector("input[id='"+Pole.id+"'] + div.Error").innerHTML = "OK DANE"

        //? Jeśli hasło jest poprawne sprawdź czy jest takie samo jak powtórzone hasło
        if (Walidacja_PowtHaslo(document.getElementById("Haslo_Powt")))
        {
            return true
        }
    }

    return false
}

function Walidacja_Email(Pole)
{
    var Regex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!Regex.test(Pole.value))
    {
        Pole.setCustomValidity("ZŁE DANE")
        document.querySelector("input[id='"+Pole.id+"'] + div.Error").innerHTML = "ZŁY EMAIL"
    }
    else
    {
        Pole.setCustomValidity("")
        document.querySelector("input[id='"+Pole.id+"'] + div.Error").innerHTML = "OK DANE"
        return true
    }

    return false
}

function Walidacja_Telefon(Pole)
{
    //! Wymuszanie wpisania samych cyfr
    Cyfry = ["0","1","2","3","4","5","6","7","8","9"]

    if (!Cyfry.includes(Pole.value.charAt(Pole.value.length-1)))
    {
        Pole.value = Pole.value.substring(0, Pole.value.length-1)
    }

    //! Sprawdzanie czy podany tekst ma poprawną budowę
    var Regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/ // https://ihateregex.io/expr/phone/

    if (!Regex.test(Pole.value))
    {
        Pole.setCustomValidity("ZŁE DANE")
        document.querySelector("input[id='"+Pole.id+"'] + div.Error").innerHTML = "ZŁY NR TEL"
    }
    else
    {
        Pole.setCustomValidity("")
        document.querySelector("input[id='"+Pole.id+"'] + div.Error").innerHTML = "OK DANE"
        return true
    }

    return false
}

function Walidacja_Wiek(Pole)
{
    Obecny_Rok = new Date().getFullYear()
    Wybrany_Rok = new Date(Data_Urodzenia.value).getFullYear()

    Wiek = Obecny_Rok - Wybrany_Rok

    if (Wiek < 18)
    {
        Pole.setCustomValidity("ZŁE DANE")
        document.querySelector("input[id='"+Pole.id+"'] + div.Error").innerHTML = "NIE PEŁNOLETNI"
    }
    else
    {
        Pole.setCustomValidity("")
        document.querySelector("input[id='"+Pole.id+"'] + div.Error").innerHTML = "PEŁNOLETNI"
        return true
    }

    return false
}

function Walidacja_PowtHaslo(Pole) {
    var Oryginalne_Haslo = document.getElementById("Haslo")

    if (Pole.value != Oryginalne_Haslo.value)
    {
        Pole.setCustomValidity("HASŁA NIE SĄ IDENTYCZNE")
        document.querySelector("input[id='"+Pole.id+"'] + div.Error").innerHTML = "HASŁA NIE SĄ IDENTYCZNE"
    }
    else
    {
        Pole.setCustomValidity("")
        document.querySelector("input[id='"+Pole.id+"'] + div.Error").innerHTML = "HASŁA SĄ IDENTYCZNE"
        return true
    }

    return false
}

function Walidacja_Kraj(Pole)
{
    var Wartosc = Pole.value

    if (Wartosc == "BRAK")
    {
        document.getElementById("Wojewodztwo").setAttribute("disabled", "disabled")
    }
    else
    {
        document.getElementById("Wojewodztwo").removeAttribute("disabled")
    }
}

function Walidacja_Wojewodztwo(Pole)
{
    Wartosc = Pole.value

    if (Wartosc != "" && Wartosc != "BRAK")
    {
        document.getElementById("Adres_Korespondencyjny").style.display = "initial"
        document.getElementById("Adres_Korespondencyjny_Label").style.display = "initial"
        document.getElementById("Adres_Zamieszkania").style.display = "initial"
        document.getElementById("Adres_Zamieszkania_Label").style.display = "initial"
        document.getElementById("CzyKorespondecyjnyTakiSam").style.display = "initial"
        document.getElementById("CzyKorespondecyjnyTakiSam_Label").style.display = "initial"

        console.log("WIP 1")
    }
    else
    {
        document.getElementById("Adres_Korespondencyjny").style.display = "none"
        document.getElementById("Adres_Korespondencyjny_Label").style.display = "none"
        document.getElementById("Adres_Zamieszkania").style.display = "none"
        document.getElementById("Adres_Zamieszkania_Label").style.display = "none"
        document.getElementById("CzyKorespondecyjnyTakiSam").style.display = "none"
        document.getElementById("CzyKorespondecyjnyTakiSam_Label").style.display = "none"

        console.log("WIP 2")
    }
}

function Obsluga_Checkboxa_AdrKo(Pole) {
    var Wartosc = Pole.checked

    if (!Wartosc)
    {
        document.getElementById("Adres_Korespondencyjny").removeAttribute("hidden")
        document.getElementById("Adres_Korespondencyjny_Label").innerHTML = "Adres Korespondencyjny:"
        document.getElementById("Adres_Korespondencyjny_Label").style.display = "initial"
    }
    else
    {
        document.getElementById("Adres_Korespondencyjny").setAttribute("hidden", "hidden")
        document.getElementById("Adres_Korespondencyjny_Label").innerHTML = "Adres Korespondencyjny:"
        document.getElementById("Adres_Korespondencyjny_Label").style.display = "none"
    }
}

function Zadanie_7(Pole)
{
    Wartosc = Pole.value

    if (Wartosc != "Polska")
    {
        document.getElementById("Zadanie_7").innerHTML = "<input type='text' id='Wojewodztwo' oninput='Walidacja_Wojewodztwo(this)'>"
    }
    else
    {

        document.getElementById("Zadanie_7").innerHTML = "<select onchange='Walidacja_Wojewodztwo(this); console.log(\"WIP 3\")')> <option value='BRAK' selected disabled>...</option> <option value='Podkarpackie'>Podkarpackie</option> <option value='Małopolskie'>Małopolskie</option> </select>"
    }
}