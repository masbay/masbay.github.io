var waktu = 60 * 7, durasi = waktu * 1000, display = document.querySelector('#time');

var setting = setTimeout(function () {
    SimpanJawaban();
}, durasi);

window.onload = function () {
    startTimer(waktu, display);
};

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);
        
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
            clearInterval(interval);
        }
    }, 900);    
}

function stopTimer() {
    document.getElementById("sticky").style.visibility = "hidden";
    document.getElementById("sticky").innerHTML = "";
    clearTimeout(setting);
}

function HitungNilai(benar, total) {
    hasil = (benar/total)*100;
    round = hasil.toFixed(2);
    return round;
}

function CekJawaban() {
    var jawab_benar = 0;
    var jawab_salah = 0;
    var jawabs = document.getElementsByTagName("input");
    var total_soal = jawabs.length/4;
    for (var i = 0; i < jawabs.length; i++) {
        if (jawabs[i].checked == true) {
            if (jawabs[i].value == "true") {
                document.getElementById("jawab"+i).style.color = "green";
                jawab_benar += 1;
            } else {
                document.getElementById("jawab"+i).style.color = "red";
                jawab_salah += 1;
            }
        } else {

        }
    }
    console.log(jawab_salah);
    return HitungNilai(jawab_benar, total_soal);
}

function SimpanJawaban() {
    stopTimer();
    var hasil_jawab = CekJawaban();
    if (hasil_jawab < 90) {
        var result = confirm("Waduh\nOra sinau tenanan!\nNilai kamu : "+hasil_jawab+".\nMau coba lagi?");
        if (result === true) {
            return window.location.reload();
        } else {
            return alert("Terimakasih!");
        }   
    } else {
        alert("Selamat ya nilai kamu : "+hasil_jawab+"!");
    }
}