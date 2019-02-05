<?php 

class User 
{
    function __construct ($name, $password)
    {
        $this->name = $name;
        $this->password = $password;
    }

    function printName ()
    {
        echo "User name is {$this->name} ";
        echo "User passord is {$this->password} ";
    }
}

$igor = new User('Igor', 'igor2122');
