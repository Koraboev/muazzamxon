$(document).ready(function(){
    var mydate = new Date();
    var d = mydate.getDate();
    var m =  mydate.getMonth();
        m += 1;
    var y = mydate.getFullYear();
    const weekday = ["Yakshanba","Dushanba","Seshanba","Chorshanba","Payshanba","Juma","Shanba"];

    let day = weekday[mydate.getDay()];

    $('.calendar em').text(d + '.' + m + '.' + y + ' | ' + day);

    $('.langs').click(function(){
        $('.lang').slideToggle();
    });

    $('.loginbtn').click(function(){
        $('body').css('overflow', 'hidden');
        $('.register-page').css('display', 'none');
        $('.login-page').css('display', 'flex');
    });
    $('.login-page .fa-close').click(function(){
        $('body').css('overflow', 'auto');
        $('.login-page').css('display', 'none');
    });

    $('.registerbtn').click(function(){
        $('body').css('overflow', 'hidden');
        $('.register-page').css('display', 'flex');
        $('.login-page').css('display', 'none');
    });
    $('.register-page .fa-close').click(function(){
        $('body').css('overflow', 'auto');
        $('.register-page').css('display', 'none');
    });

    $('.bekor').click(function(){
        $('.search-bemor-box, .search-bemor').css('display', 'none');
    });
    $('.newillness').click(function(){
        $('body').css('overflow', 'hidden');
        $('.search-bemor-box').css('display', 'flex');
        $('.search-bemor').css('display', 'block');
    });
    $('.bemor-qidir').click(function(){
        $('.search-bemor').css('display', 'none');
        $('.kasalliklar').css('display', 'block');
        $('.bemor-info').css('display', 'flex');
    });
    $('.tashxis').click(function(){
        $('.search-bemor').css('display', 'none');
        $('.kasalliklar').css('display', 'none');
        $('.add-tablets').css('display', 'block');
        $('.bemor-info').css('display', 'none');
    });
    $('.tasdiq-bekor').click(function(){
        $('.add-tablets').css('display', 'none');
        $('body').css('overflow', 'auto');
        $('.search-bemor-box').css('display', 'none');
    });
    $('#customers tr:not(:first-child)').click(function(){
        $('.bemorismi').text($(this).find('.ism').text());
        $('.bemor-data').slideDown();
    });
    $('#qr').click(function(){
        $('#pos').css('display', 'none');
    });
    $('.bemorlists ul li nav span').click(function(){
        $(this).parent().siblings().slideToggle();
    });
});
var qrdata = "", xx = 0;
function addRow(){
var tbodyRef = document.getElementById('myTable');
xx += 1;
var nomi = document.getElementById('nomi');
var miqdori = document.getElementById('miqdori');
var qollash = document.getElementById('qollash');
var davomiyligi = document.getElementById('davomiyligi');
var dan = document.getElementById('dan');
var gacha = document.getElementById('gacha');

// Insert a row at the end of table
var newRow = tbodyRef.insertRow();

// Insert a cell at the end of the row
var newCell1 = newRow.insertCell();
var newCell2 = newRow.insertCell();
var newCell3 = newRow.insertCell();
var newCell4 = newRow.insertCell();
var newCell5 = newRow.insertCell();
var newCell6 = newRow.insertCell();
var newCell7 = newRow.insertCell();

// Append a text node to the cell
var newText1 = document.createTextNode(xx);
newCell1.appendChild(newText1);

var newText2 = document.createTextNode(nomi.value);
newCell2.appendChild(newText2);

var newText3 = document.createTextNode(miqdori.value);
newCell3.appendChild(newText3);

var newText4 = document.createTextNode(qollash.value);
newCell4.appendChild(newText4);

var newText5 = document.createTextNode(davomiyligi.value);
newCell5.appendChild(newText5);

var newText6 = document.createTextNode(dan.value);
newCell6.appendChild(newText6);

var newText7 = document.createTextNode(gacha.value);
newCell7.appendChild(newText7);
qrdata += xx + '. ' + nomi.value + ' - ' + miqdori.value + ' - ' + qollash.value +'; ';
}
function newcode(){
    document.getElementById("myqr").innerHTML = '';
    var qrcode = new QRCode(document.getElementById("myqr"), {
        text: qrdata,
        width: 128,
        height: 128,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
}
function mycode(){
    document.getElementById("pos").style.display = 'flex';
    document.getElementById("qr").innerHTML = '';
    var qrcode = new QRCode(document.getElementById("qr"), {
        text: '1. Trimol - 1 hafta - 2 mahal; 2. Taylol hot - 3 kun - 4 mahal; 5. CaronaVirusetazol - 1 oy - 3 mahal;',
        width: 300,
        height: 300,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
}