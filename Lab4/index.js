//! Zadanie 1
var Ksiazka = {
    Tytul: "LOTR",
    Autor: "Tolkien",
    Rok_Wydania: "1234",
}
function Zadanie_1(Obiekt)
{
    return Obiekt["Tytul"] + " - " + Obiekt["Autor"] + " (" + Obiekt["Rok_Wydania"] + ")"
}

console.log(Zadanie_1(Ksiazka))

//! Zadanie 2
var Student = {
    Imię: "Jan",
    Nazwisko: "Kowalski",
    Nr_Albumu: "123456",
    Ocena_1: 5,
    Ocena_2: 5,
    Ocena_3: 4,

    Srednia: function()
    {
        Wynik = Student["Ocena_1"] + Student["Ocena_2"] + Student["Ocena_3"]
        return Wynik / 3
    },
}

console.log(Student)
console.log(Student.Srednia())

//! Zadanie 3, 4
var Samochod = {
    Marka: "Marka",
    Model: "Model",
    Rok_Produkcji: "1234",
    Kolor: "Czerwony",
    Predkosc: 70,

    Zmiana_Predkosci: function(O_Ile_Zmienic)
    {
        Samochod["Predkosc"] += O_Ile_Zmienic
    },

    Informacje: function()
    {
        return Samochod["Marka"] + " " + Samochod["Model"] + " (" + Samochod["Rok_Produkcji"] + "), Prędkość: " + Samochod["Predkosc"]
    },
}
console.log(Samochod)
Samochod.Zmiana_Predkosci(-10)
console.log(Samochod)
console.log(Samochod.Informacje())

//! Zadanie 5
var Prostokat = {
    Bok_A: 8,
    Bok_B: 10, 

    Pole: function()
    {
        return Prostokat["Bok_A"] * Prostokat["Bok_B"]
    },

    Czy_Kwadrat: function()
    {
        if (Prostokat["Bok_A"] == Prostokat["Bok_B"])
        {
            return true
        }
        else
        {
            return false
        }
    }
}

console.log(Prostokat)
console.log(Prostokat.Pole())
console.log(Prostokat.Czy_Kwadrat())

//! Zadanie 6
function Prostokat_2(Bok_A, Bok_B)
{
    this.Bok_A = Bok_A
    this.Bok_B = Bok_B

    this.Pole = function()
    {
        return this.Bok_A * this.Bok_B
    }

    this.Czy_Kwadrat = function()
    {
        if (this.Bok_A == this.Bok_B)
        {
            return true
        }
        else
        {
            return false
        }
    }

    return this
}
function Zadanie_6()
{
    A = Number(document.getElementById("Bok_A").value)
    B = Number(document.getElementById("Bok_B").value)

    var Prostokat = new Prostokat_2(A, B)
    console.log(Prostokat)
    console.log(Prostokat.Pole())
    console.log(Prostokat.Czy_Kwadrat())

}