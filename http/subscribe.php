<?php

//---------------------------------------------
// WARNING: this doesn't include sanitization
// and validation
//---------------------------------------------
if (isset($_POST['name'], $_POST['age'])) {
	$name = $_POST['name'];
	$age = $_POST['age'];

	// show the $name and $email
	echo "Hello $name ! You are $age years old.<br>";
} else {
	echo 'You need to provide your name and age.';
}
