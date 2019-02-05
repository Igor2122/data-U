<?php 

$name = 'Igor';
$height = 5	;

function greet($arg)
{
    return "<h1>Hello, {$arg}</h1>";
}

$celcius = 100;

function celsiusToFahrenheit ($arg) {
    return (9/5) * $arg + 32;
}

$temperature = 36.6;

function isHealthy ($tmp, $type)
{
    if($type === 'f'){
        return celsiusToFahrenheit($tmp) == 98.6 ? 'healthy' : 'unhealthy';
    } else {
      return $tmp === 36.6 ? 'healthy' : 'unhealthy';
    }
}

$res = isHealthy($temperature, 'c');

// var_dump($res);


$number = 42;

function evenOrOdd ($inp)
{
    return !is_float(42/2) ? 'even' : 'odd';
}
$check = evenOrOdd($number);
// var_dump($check);

$weekday = date('D');
function sayDay ($day)
{
    return "Today is {$day}";
}

// echo sayDay($weekday);

function assessHeight ($val)
{
    if($val > 180){
        return 'tall';
    } elseif($val < 180 and $val > 160){
        return 'avarage';
    } else {
        return 'short';
    }

}

// echo assessHeight(190);

function getLanguageUsage ($lan)
{
    $lowerCase = strtolower($lan);
    var_dump($lowerCase);
    switch ($lowerCase) {
        case 'php':
        case 'python':
        case 'ruby':
            return 'serverside';
            break;
        case 'value':
            return 'serverside';
            break;
        
        default:
            return "I don't Know";
            break;
    }
}

// echo getLanguageUsage('Php');

$age = 35;
$gender = 'male';
$employed = false;

if($age > 34 && !$employed){
    echo 'nigga';
}

if($age < 12 && $gender === 'female'){

}



?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <?= greet($name) ?>
    <?= celsiusToFahrenheit($celcius) ?>
</body>
</html>
