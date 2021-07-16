$(".title").hover(function(){
    $(this).removeClass("shake").addClass("bounceIn");
});
var nama = prompt("Hai, siapa nama lengkapmu?");
if (nama.toUpperCase() == "SHINTA APRILIA ANDRIANI") {
    alert("Hai, "+nama+". Izinkan saya, Bayu Wahyu Prasetya Wibowo, meminangmu dengan بِسْمِ ٱللَّٰهِ");
} else {
    alert("Hai, "+nama+". Salam Kenal!");
}