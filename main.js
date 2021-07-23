let name=prompt("Lutfen isminizi girin");
const days = ['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi']
let dayName = days[new Date().getDay()]
var dayNameHtml = document.getElementById('dayName')
dayNameHtml.innerHTML = dayName
var nameHtml = document.getElementById('name')
nameHtml.innerHTML=name
function refresh(){
    var tarih = new Date()
    let saat = tarih.getHours()
    let dakika = tarih.getMinutes();
    let saniye = tarih.getSeconds()
    var tarihElementi= document.getElementById('date')
    tarihElementi.innerHTML = `${saat<10 ? "0"+saat:saat}:${dakika<10 ? "0"+dakika:dakika}:${saniye<10 ? "0"+saniye:saniye} ${dayName}`
}
window.setInterval('refresh()',1000)



