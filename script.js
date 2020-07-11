let imports = [
    "<link id='framework' rel='stylesheet' type='text/css' href='cat.css' />",
    "<link id='framework' rel='stylesheet' type='text/css' href='dog.css' />",
	"<link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'	integrity='sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk'	crossorigin='anonymous'>"
];

document.write(imports[Math.floor(Math.random() * 100) % imports.length])