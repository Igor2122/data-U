

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
    <form action="" method="get">
        <input class="name" type="text" label="Name" name="name" value="type your name">
        <input type="submit">
        <button type="radio"></button>
    </form>
    <script>

        let form = document.querySelector('.name');
        let button = document.querySelector('form');

        console.log(button.firsChild);
        const clear = (e) => {
            console.log('clicked');
            form.value ='';
            console.log(form.value);
        }
        form.addEventListener('click', clear);
    </script>
</body>
</html>