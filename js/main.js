

/*
* SVE DUGMADI KOMANDE
*
  //ako pritisnemo zvijezdu nestane ta liga
$(".zvijezda-hide").click(function(){
  $(this).parent().hide();

 return false;
});*/

//Ako pritisnemo tu ligu nestane na stranici i na listi "Moje lige"
$(".bosna").click(function(){
  $(this).parent().hide();
  $(".Bliga").hide();
  return false;
});
$(".france").click(function(){
  $(this).parent().hide();
  $(".Fliga").hide();
  return false;
});
$(".spain").click(function(){
  $(this).parent().hide();
 $(".Sliga").hide();
  return false;
});
$(".england").click(function(){
  $(this).parent().hide();
  $(".Eliga").hide();
  return false;
});
$(".italy").click(function(){
  $(this).parent().hide();
  $(".Iliga").hide();
  return false;
});

$(".germany").click(function(){
  $(this).parent().hide();
  $(".Nliga").hide();
  return false;
});
  $(".champions").click(function(){
  $(this).parent().hide();
  $(".Prvaka").hide();
  return false;
});
$(".europe").click(function(){
  $(this).parent().hide();
  $(".Europa").hide();
  return false;
});



//ovo je za dugmadi

$(".raspored").click(function(){

  $(".gotova-utakmica").hide();
  $(".gotova-nije").show();
  $(".raspored").addClass("aktivno-dugme");
  $(".sve").removeClass("aktivno-dugme");
  $(".gotovo").removeClass("aktivno-dugme");

})
$(".sve").click(function(){

    $(".gotova-utakmica").show();
    $(".gotova-nije").show();
    $(".sve").addClass("aktivno-dugme");
  $(".raspored").removeClass("aktivno-dugme");
  $(".gotovo").removeClass("aktivno-dugme");



})

$(".uzivo").click(function(){

  alert("Trenutno nemamo Uživo utakmica!");
  $(".sve").removeClass("aktivno-dugme");
  $(".gotovo").removeClass("aktivno-dugme");
  $(".raspored").removeClass("aktivno-dugme");

})

$(".prvo-poluvrijeme").click(function(){
  $(".mec").hide();
  $(".drugopoluvrijeme").hide();
  $(".prvopoluvrijeme").show();

})

$(".drugo-poluvrijeme").click(function(){
  $(".mec").hide();
  $(".prvopoluvrijeme").hide();
  $(".drugopoluvrijeme").show();

})
$(".citav-mec").click(function(){

  $(".prvopoluvrijeme").hide();
  $(".drugopoluvrijeme").hide();
  $(".mec").show();

})
// aktivno dugme
/*  POKUSATI KASNIJE
$(".btn-group > .dugme").click(function(){

  $(".btn-group > .dugme").removeClass(".aktivno-dugme");
  $(this).addClass("aktivno-dugme");
});
*/
$(".gotova-utakmica").click(function () {

  $(".odigrana-utakmica").show();

  $(".nije-odigrana").hide();


})
$(".gotova-nije").click(function () {

  $(".nije-odigrana-utakmica").show();
  $(".odigrana-utakmica").hide();
})
$(".login").click(function () {

  $(".log-in").show();

})
/* EXIT BUTTONS */
$(".exit").click(function (){

  $(".odigrana-utakmica").hide();
  $(".nije-odigrana-utakmica").hide();

})
$(".exit2").click(function (){

  $(".log-in").hide();

})
$(".gotovo").click(function(){

  $(".gotova-nije").hide();
  $(".gotova-utakmica").show();

  $(".gotovo").addClass("aktivno-dugme");
  $(".sve").removeClass("aktivno-dugme");
  $(".raspored").removeClass("aktivno-dugme");

  //pokusaj kasnije ovo
/*
  if( $(".Liga-prvaka>.gotova-nije").length == 0){
    $(".Liga-prvaka").hide();
console.log("no");

  }*/

})

/*       PREMIER LEAGUE DIO /NAJ STRIJELCI,TABELA I BROJ GOLOVA              */
$(".dugme-najstrijelci").click(function () {

  $(".naj-strijelci").show();
  $(".tabela").hide();
  $(".dugme-tablica").removeClass("aktivno-dugme");
  $(".dugme-najstrijelci").addClass("aktivno-dugme");
})
$(".dugme-tablica").click(function () {

  $(".naj-strijelci").hide();
  $(".tabela").show();
  $(".dugme-tablica").addClass("aktivno-dugme");
  $(".dugme-najstrijelci") .removeClass("aktivno-dugme");

})


$(".Zaboravio-sifru").click(function (){

 alert("Zaboravili ste šifru? Kontaktirajte nas na email: sabahetselimagic992@gmail.com ");

})
let login = document.getElementById("log-in");
window.onclick = function(event) {
  if (event.target == login) {
    login.style.display = "none";
  }
}
/*           DODAJ LIGE KOJE SMO IZBRISALI NAZAD */

/* KAD PRITISNEMO NA STRELICU  GORE DA SE MINIMIZIRA TA LIGA */
$(".arrow-up").click(function (){
  $(this).find(".Liga-prvaka").hide();
  $(".arrow-down").show();
  $(".arrow-up").hide();
})
