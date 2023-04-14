function Zadanie_1()
{
    Wiek = prompt("Podaj Swój Wiek:")
    if (Wiek >= 18)
    {
        alert("Jesteś Pełnoletni")
    }
    else
    {
        alert("Nie Jesteś Pełnoletni")
    }
}

function Zadanie_2()
{
    Celcjusz = Number(prompt("Podaj °C:"))
    
    //console.log(Celcjusz)
    //console.log(Celcjusz * )
    

    Fahrenheit = (Celcjusz * (9/5)) + 32
    alert(Celcjusz + " °C = " + Fahrenheit + " °F")
}

function Zadanie_3()
{
    Tablica = [1, 6, 7, 9, 10]

    //! Tablica
    console.log("0) Tablica: ")
    console.log(Tablica)

    //! Suma
    console.log("1) Suma: ")
    Suma = 0
    Tablica.forEach(function(x){
        Suma += x
    })
    console.log(Suma)

    //! Parzyste TODO:
    console.log("2) Parzyste")
    Parzyste = " "
    Tablica.forEach(function(x, y){
        if (x % 2 == 0)
        {
            Parzyste += String(x) + " "
        }
    })
    console.log(Parzyste)

    //! Tablica * 3
    console.log("3) Tablica*3")
    Tablica.forEach(function(x, y, z){ // Element, Indeks, Lista
        z[y] = x * 3
    })
    console.log(Tablica)

    //! Dodanie Nr Albumu
    console.log("4) Nr Albumu")
    Tablica.push(67259)
    console.log(Tablica)
    console.log(Tablica.indexOf(67259))

    //! Średnia
    Srednia = Suma / Tablica.length
    console.log("5) Średnia")
    console.log(Srednia)

    //! Max
    console.log("6) Max")
    Max = Tablica[0]
    Tablica.forEach(function(x){
        if (x > Max)
        {
            Max = x
        }
    })
    console.log(Max)

    //! Ilość Wystąpień
    Szukana_Wartosc = 67259
    Ilosc_Wystapien = 0
    console.log("7) Ilość Wystąpień")
    Tablica.forEach(function(x, y, z){
        if (x == Szukana_Wartosc){
            Ilosc_Wystapien += 1
        }
    })
    console.log(Ilosc_Wystapien)
}

function Zadanie_4()
{
    Tablica = []
    for (var x = 0; x < 100; x++)
    {
        if (x == 0)
        {
            Tablica.push(0)
        }

        else if (x == 1)
        {
            Tablica.push(1)
        }

        else {
            Tablica.push(Tablica[x-1] + Tablica[x-2])
        }
    }

    console.log(Tablica)
}