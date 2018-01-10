
<html>

<head>
    <meta charset="utf-8">
    <title>Pizza Orders</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
</head>
<body>
    <h1 id="title"><a href="index.php">Welcome to Pizza Orders!</a></h1>  

    <div class="transbox">
    <form action="" method="post">

    <label>Select Pizzas: enter the amount of pizzas you want</label>
      
    <div id="pizza-div">
	  
	  <div>      
        <label>Neapolitan Pizza <input type="number" id="neapolitan" name="neapolitan"></label>
      </div>

      <div>
        <label>Chicago Pizza <input type="number" id="chicago" name="chicago"></label>
      </div>

      <div>
        <label>New York Style Pizza <input type="number" id="new-york" name="new-york"></label>
      </div>

      <div>
        <label>Sicilian Pizza <input type="number" id="sicilian" name="sicilian"></label>
      </div>

      <div>
        <label>Greek Pizza <input type="number" id="greek" name="greek"></label>
      </div>

    </div>

    <div id="submit-div">
    <label>Phone number:</label><input type="number" id="phone-number" name="phone-number" size="50" maxlength="100">
    <label>Address:</label><input type="text" id="address" name="address" size="50" maxlength="100">
    <button type="submit" id="submit-btn" name="submit">Submit Order</button>
    <button type="reset" id="reset-order">Reset Order</button>
    </div>
    </form>

    <div id="order-div">
    <label>Show order:</label>
    <ol id="display"></ol>
    </div>

    <div id="total">
    <label>Show total:</label>
    <div id="total-div"></div>
    </div>
    </div>

    <script src="js/script.js"></script>
</body>

</html>
