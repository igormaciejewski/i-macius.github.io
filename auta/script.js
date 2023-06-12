samochody = [ 
    {
        "marka": "Audi",
        "model": "e-tron GT quattro",
        "rokProdukcji": "2021",
        "konieMech": "590KM",
        "przebieg": "400km",
        "cena": 5000000,
        "img": "zdj/audiqua.png"
    },
    {
        "marka": "Porsche",
        "model": "911",
        "rokProdukcji": "2022",
        "konieMech": "450KM",
        "przebieg": "10 000km",
        "cena": 500000,
        "img": "zdj/porshe-911.png"
    },
    {
        "marka": "Audi",
        "model": "A6",
        "rokProdukcji": "2020",
        "konieMech": "272KM",
        "przebieg": "30 000km",
        "cena": 180000,
        "img": "zdj/audi-a6.png"
    },
    {
        "marka": "BMW",
        "model": "X5",
        "rokProdukcji": "2021",
        "konieMech": "340KM",
        "przebieg": "20 000km",
        "cena": 250000,
        "img": "zdj/bmw-x5.png"
    },
    {
        "marka": "Mercedes-Benz",
"model": "E-Class",
"rokProdukcji": "2019",
"konieMech": "245KM",
"przebieg": "40 000km",
"cena": 220000,
"img": "zdj/mercedes-e-class.png"
    },
    {
        "marka": "Porsche",
"model": "Cayenne",
"rokProdukcji": "2018",
"konieMech": "300KM",
"przebieg": "50 000km",
"cena": 280000,
"img": "zdj/porshe-cayenne.png"
    },
    {
        "marka": "Audi",
"model": "Q7",
"rokProdukcji": "2020",
"konieMech": "272KM",
"przebieg": "15 000km",
"cena": 260000,
"img": "zdj/audi-q7.png"
    },
    {
        "marka": "BMW",
"model": "3 Series",
"rokProdukcji": "2017",
"konieMech": "184KM",
"przebieg": "70 000km",
"cena": 120000,
"img": "zdj/bmw-3-series.png"
    },
    {
        "marka": "Mercedes-Benz",
"model": "C-Class",
"rokProdukcji": "2016",
"konieMech": "170KM",
"przebieg": "80 000km",
"cena": 110000,
"img": "zdj/mercedes-c-class.png"
    },
]


function Wybor(){
    var select = document.getElementById("cars");
    var value = select.value;

    switch (value){
        case "all":
            var divs = document.getElementsByClassName("cars");
            for (var i = 0; i < divs.length; i++) divs[i].style.display = "block";
            break
            
        case "mercedes":
            var divs = document.getElementsByClassName("cars");
            for (var i = 0; i < divs.length; i++){
                if (divs[i].classList.contains("mercedes")) divs[i].style.display = "block";
                else divs[i].style.display = "none";
            }
            break

        case "audi":
            var divs = document.getElementsByClassName("cars");
            for (var i = 0; i < divs.length; i++){
                if (divs[i].classList.contains("audi")) divs[i].style.display = "block";
                else divs[i].style.display = "none";
            }
            break

        case "porche":
            var divs = document.getElementsByClassName("cars");
            for (var i = 0; i < divs.length; i++){
                if (divs[i].classList.contains("porche")) divs[i].style.display = "block";
                else divs[i].style.display = "none";
            }
            break

        case "bmw":
            var divs = document.getElementsByClassName("cars");
            for (var i = 0; i < divs.length; i++){
                if (divs[i].classList.contains("bmw")) divs[i].style.display = "block";
                else divs[i].style.display = "none";
            }
            break
        }
}

function WczytajDane(index){
    sessionStorage.setItem("marka", samochody[index].marka);
    sessionStorage.setItem("model", samochody[index].model);
    sessionStorage.setItem("rokProdukcji", samochody[index].rokProdukcji);
    sessionStorage.setItem("konieMech", samochody[index].konieMech);
    sessionStorage.setItem("przebieg", samochody[index].przebieg);
    sessionStorage.setItem("cena", samochody[index].cena);
    sessionStorage.setItem("img", samochody[index].img);
    location.href = "zakup.html";
}

function OdczytajDane(){
    var marka = sessionStorage.getItem("marka");
    var model = sessionStorage.getItem("model");
    var rokProdukcji = sessionStorage.getItem("rokProdukcji");
    var konieMech = sessionStorage.getItem("konieMech");
    var przebieg = sessionStorage.getItem("przebieg");
    var cena = sessionStorage.getItem("cena");
    var img = sessionStorage.getItem("img");
    
    document.getElementById("marka").innerHTML = "Marka: ".concat(marka);
    document.getElementById("model").innerHTML = "Model: ".concat(model);
    document.getElementById("rokProdukcji").innerHTML = "Rok Produkcji: ".concat(rokProdukcji);
    document.getElementById("konieMech").innerHTML = "Moc silnika: ".concat(konieMech);
    document.getElementById("przebieg").innerHTML = "Przebieg: ".concat(przebieg);
    document.getElementById("cena").innerHTML = "Cena: ".concat(cena).concat(" zł");
    document.getElementById("img").src = img;
}

function Wroc(){location.href = "index.html";}

function Potwierdz(){

    var FPlatnosci = document.querySelector('input[name = "formaPlatnosci"]:checked');
    var dane = document.getElementsByName("dane");
    var breaker = false;
    var check = undefined;

    if (FPlatnosci == null){
        breaker = true;
        check = 0;
    }
    
    for (var i = 0; i < dane.length; i++){
        if (dane[i].value == null || dane[i].value == "" && check == undefined) {
            breaker = true;
            check = 1;
        }
    }

    var cenaDodatkow = 0;
    var dodatki = document.getElementsByName("dodatki");
    for(var i = 0; i < dodatki.length; i++){
        if (dodatki[i].checked) cenaDodatkow += parseInt(dodatki[i].value);
    }
    sessionStorage.setItem("cenaDodatkow", cenaDodatkow);
    if (breaker) {
        if (check == 0) {
            alert("Proszę wybrać formę płatności!");
        }
        else if (check == 1) {
            alert("Proszę wypełnić dane osobowe!");
        }
        else if (check == undefined) {
            alert("Nie wiem jak ci się to udało");
        }
    } 
    else {
        location.href = "potwierdzenie.html";
    }
}

function Zakup(){
    var marka = sessionStorage.getItem("marka");
    var model = sessionStorage.getItem("model");
    var img = sessionStorage.getItem("img");
    var sumaCen = sessionStorage.getItem("cena");
    var cenaDodatkow = sessionStorage.getItem("cenaDodatkow");
    sumaCen = parseInt(sumaCen) + parseInt(cenaDodatkow)

    var date = new Date();
    var dzien = date.getDate();
    var miesiac = date.getMonth() + 1;
    var rok = date.getFullYear();
    
    dzien += 7 + Math.floor(Math.random() * 7);
    if (dzien >= 31){
        dzien %= 31;
        miesiac += 1;
        if (dzien == 0) dzien += 1;
    }
    
    var wiadomosc = "Dziękujemy za zakup samochodu ".concat(marka).concat(" ").concat(model);
    var czasOczekiwania = "Przewidywany czas odbioru: ".concat(dzien).concat(".").concat(miesiac).concat(".").concat(rok);
    var zaplata = "Finalna cena: ".concat(sumaCen).concat(" zł");
    document.getElementById("wiadomosc").innerHTML = wiadomosc;
    document.getElementById("dostawa").innerHTML = czasOczekiwania;
    document.getElementById("zaplata").innerHTML = zaplata;
    document.getElementById("img").src = img;
}

function FPlatnosci(){
    if(document.getElementById("naRaty").checked){
        document.getElementById("raty").style.display = "initial";
        document.getElementById("ratyLabel").style.display="initial";
    }
    else{
        document.getElementById("raty").style.display = "none";
        document.getElementById("ratyLabel").style.display = "none";
    }
}