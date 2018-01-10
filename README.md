# Pizza Orders

This is a good program for managing the orders from clients for restaurants, shops and etc. 

The web app is written in PHP, JavaScript, HTML5 and CSS3. 
A user can do the order within the user interface where he can select multiple products with quantities. In this page, the user will give in input it's physical address and phone number; and after submitted the proprietary of the restaurant or shop manager will be notified by email for the order and in this time he can contact the client for anything about the order. 

<b>How to use:</b><br>
Firstly, go to action.php and modify the $to variable with your email address where you want the orders to be sended. Here you can also modify the subject and the body of the email by modifying $subject and $body variables. 
Next, modify the variables for sending emails using this guide:<br>
https://stackoverflow.com/questions/21836282/php-function-mail-isnt-working <br>
if you are using xampp as your web server. You need to modify php.ini in your php folder and sendmail.ini in sendmail folder. 
Next, upload this files to your web server and see this in action opening the webpage index.php. 

If you need further assistance, please let me know. 
