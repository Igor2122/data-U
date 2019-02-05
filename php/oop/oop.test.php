<?php 

class Pet {
    // properties
    public $name;
    public $type = 'integer';

    function say($par) 
    {
        echo $this->name . " said $par\n";
    }

    function parseArray($arr)
    {
        foreach ($arr as $property) {
            echo "<li>{$property}</li>" ;
        }
    }

    function drawLine () 
    {
        echo "<hr><hr>";
    }
}

$names = [
    'igor',
    'reem',
    'archie',
];

$cat = new Pet();
$dog = new Pet();
$cat->type = 'cat';
$cat->name = 'Murzik';
$dog->type = 'dog';
$dog->name = 'Tyzik';

$catName = $cat->name;

$cat->say($catName);
$dog->say('wof');

