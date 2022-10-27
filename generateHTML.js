const generateHTML = (data) => {
   console.log(data)
   
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">

    <title>Jeremy's Portfolio</title>
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <img src="" class="img-fluid" alt="Pic of Jeremy">
            </div>
            <div class="col-md-6">
                <h1>Jeremy's Folio</h1>
                <h2>Milwaukee</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At nostrum quos porro, atque labore harum iure velit necessitatibus iusto voluptatum, recusandae aut! Quasi assumenda consequatur aliquam ipsum. Aspernatur, voluptates laborum?</p>
                <a href="#">
                    <i class="bi bi-github fs-3"></i>
                </a>
                <a href="#">
                    <i class="bi bi-linkedin fs-3"></i>
                </a>

            </div>
        </div>


    </div>
    <script src = "index.js"></script>
</body>
</html>
`
}

module.exports = generateHTML