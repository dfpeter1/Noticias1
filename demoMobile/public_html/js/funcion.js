$(document).ready(function(){        
     var url = 'https://query.yahooapis.com/v1/public/yql?q=select * from feed where url="http://20minutos.feedsportal.com/c/32489/f/478286/index.rss" limit 10&format=json&diagnostics=true&callback='
	console.log(url);
	$.getJSON(url, function(data) {
	  $.each(data.query.results.item, function(key, noticia) {
	  var img = noticia.description.match('<img src="(.+?\.jpg)')[1];
	  var informacion = noticia.description.match('alt="(.+?)"')[1];
	  	$("#lista").append("<li><a href='"+noticia.link+"'><img src='"+img+"' width='130' height='86' /><p><strong>"+noticia.title+"</strong><br/>"+informacion+"</p></a></li>").listview("refresh");
	  });
	});
});