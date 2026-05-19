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
        afficheProduit(data)
	});


    // role : récupérer les produits 1 par 1 et de les afficher dans le Dom
    // paramètre : tableau de produits
    // return : rien

    function afficheProduit(tableauProduits) {
        tableauProduits.forEach(produit => {
            let produitCard = `
            <div class="card w-48 flex space-between mt-10">
                
                <img src="${produit.image}" alt="products" class="w-20">
                
                <div class="flex space-between align-center w70">
                    <div class="w70">
                        <h3>${produit.title}</h3>
                        <p class="mt-10">${produit.category}</p>
                        <p class="mt-10"><i class="ph-fill ph-star"></i>
                            <i class="ph-fill ph-star"></i>
                            <i class="ph-fill ph-star"></i>
                            <i class="ph-fill ph-star"></i>
                        </p>
                    </div>

                    <p class="prix w-20 bg-black white border-radius-5">${produit.price}€</p>
                </div>
            </div>
            `
        document.querySelector("#produit-container").innerHTML += produitCard;
        });
    }