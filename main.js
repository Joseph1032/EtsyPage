$(document).ready(function(){
	 $.getJSON("https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop&callback=?", function(data){
	
	var data = data.results.map(function(item){
		return {
			price: item.price,
			shopname: item.Shop.shop_name,
			title: item.title,
			img: item.Images[0].url_570xN
		}
	})
	var htmlStr = "";

	// function showIcons() {
	// 	$(this).addClass('hover')
	// }, function () {
	// 	$(this).removeClass('hover')
	// }
	data.forEach(function(item){
		 htmlStr += `
		<div class="pics">
			<div><button id="heart"><img src="./assets/heart.png"/></button><button id="burger"><img src="./assets/hamburger.png"/></button><img src="${item.img}" /></div>

			<div class="description"> 
				<p class="about">${item.title}</p> 
				<p class="shop">${item.shopname}</p>
				<p class="price">${'$' + item.price}</p>
			</div>
		</div>
		`
	}) 
	$("#mainCenter").html(htmlStr)
})

})


	

	

	