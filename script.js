let imports = [
    "<link id='framework' rel='stylesheet' type='text/css' href='cat.css' />",
    "<link id='framework' rel='stylesheet' type='text/css' href='dog.css' />",
	"<link id='framework' rel='stylesheet' type='text/css' href='chinchilla.css' />",
];

document.write(imports[Math.floor(Math.random() * 100) % imports.length])