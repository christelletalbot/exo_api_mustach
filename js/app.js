(function main(){
	
	var lien="https://newsapi.org/v2/sources?apiKey=f85b222ef38843639c4029927339db15"
	

	$.ajax({
		url:lien, 
		success:function(data){
			console.log(data.sources);
			//$("#select").append(data.sources[11].name).append(data.sources[11].description).append(data.sources[11].url).append(data.sources[11].category)
			$.get('template/users.mst', function(template){
				Mustache.parse()
				var rendered = Mustache.render(template, {results: data.sources})
				$('#result').append(rendered)
			});
		},
		error:function(error){
			console.log(error)
		}
	})
	// data.map(function (data){
	// 	console.log(data);
	// 	var template=$('#template').html()
	// 	Mustache.parse()
	// 	var rendered=Mustrache.render(template,{name: data.name, description: data.description})
	// })

})();
/*clé api : f85b222ef38843639c4029927339db15*/