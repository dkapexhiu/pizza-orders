<?php

$rsent = ""; 
$error = array();

if (isset($_POST['submit']))
{

$phone = $_POST['phone-number'];

if(isset($_POST['address'])){
    $address = $_POST['address'];
}

if(isset($_POST['neapolitan'])){
    $neapolitan = $_POST['neapolitan'];
}

if(isset($_POST['chicago'])){
    $chicago = $_POST['chicago'];
}

if(isset($_POST['new-york'])){
    $newyork = $_POST['new-york'];
}

if(isset($_POST['sicilian'])){
    $sicilian = $_POST['sicilian'];
}

if(isset($_POST['greek'])){
    $greek = $_POST['greek'];
}

if ($phone === ""){
$error[] = "No phone number is indicated!";
}

if($address === ""){
	$error[] = "No address is indicated!";
}

if (!$error) {
$to = "";
$subject = "Order submitted";
$body = "An order has been submitted! These are the pizzas:\nNeapolitan Pizza: $neapolitan\nChicago Pizza: $chicago\nNew York Style Pizza: $newyork\nSicilian Pizza: $sicilian\nGreek Pizza: $greek\nContact this phone number: $phone with this address: $address to contact who has done the order.";
$additionalheaders = "";
mail($to, $subject, $body, $additionalheaders);

$rsent = true;
}

if (!empty($error))
{
        $i = 0;
        while ($i < count($error)){
        echo "<div class='msg-error'>".$error[$i]."</div>";
        $i ++;}
}

if ($rsent == true){
    header('Location: index.php');
    } else {
    echo "";
    }
}

?>
