var links=[
 "NaP 硅的红茶馆@https://npofsi.pro",
 "W3School@http://www.w3school.com.cn/"
];
links.forEach(function(v){
		var linkp=document.getElementById("linkp");
		linkp.innerHTML+="<a href=\""+v.split("@")[1]+"\" class=\"list-group-item\">"+v.split("@")[0]+"</a>";
	});