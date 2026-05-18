// role : questionner l'api
// parametre: 
// retour : 

	const url =`https://fakestoreapi.com/products`

	fetch(url)
	.then(rep=> {
		return rep.json()
	})
	.then(data=>{
		// a ce niveau on devrait avoir dans la console les données renvoyé par l'api fake store api
		console.log(data)
	});


    // role : récupérer les produits 1 par 1 et de les afficher dans le Dom
    // paramètre : tableau de produits
    // return : rien

    function afficheProduit(tableauProduits) {
        tableauProduits.forEach(produit => {
            let produitCard = `
            
            `
        })
    }