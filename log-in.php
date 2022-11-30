<?php


if(isset($_POST['submit'])) {


$ime = $_POST['ime'];
$password = $_POST['password'];

$connection = mysqli_connect('localhost','root','','praksa');
if(!$connection){
    echo "Niste spojeni na server";
} else {


  $query = "SELECT * FROM admini WHERE ime = '$ime'
  AND sifra = '$password'";
  $result = mysqli_query($connection,$query);
  $row = mysqli_fetch_array($result);
  if($row['ime'] == $ime && $row['sifra'] == $password){
    echo "Uspješno ste se prijavili";
  } else {
    echo "Pogrešno korisničko ime ili lozinka";
  }

}
}
?>
