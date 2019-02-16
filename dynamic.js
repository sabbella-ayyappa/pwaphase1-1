function getfile(file,callback) {
var xhr=new XMLHttpRequest();
xhr.overrideMimeType("Application/json");
xhr.open("GET",file,true);
xhr.onreadystatechange=function(){
	if(xhr.readyState===4 && xhr.status=="200"){
		callback(xhr.responseText);
	}
}	
xhr.send(null);// body...
}
getfile("dynamic.json",function(text){
	var data=JSON.parse(text);
	console.log(data);
	profile(data.profile);
	career(data.career);
	education(data.education);
	language(data.language);
})
var left=document.querySelector(".left");
function profile(e){
	var img=document.createElement("img");
	img.src=e.img;
	left.appendChild(img);
	var h2=document.createElement("h2");
	h2.textContent=e.name;
	left.appendChild(h2);
	var h3=document.createElement("h3");
	h3.textContent=e.roll;
	left.appendChild(h3);
}
var right=document.querySelector(".right");
function career(e){
    var h1=document.createElement("h1");
	h1.innerHTML="RESUME BUILDING";
	right.appendChild(h1);
	var e1=document.createElement("h2");
	e1.textContent="career objective";
   
	right.appendChild(e1);
	var hr=document.createElement("hr");
	right.appendChild(hr);
	var p=document.createElement("p");
	p.textContent=e.info;
	right.appendChild(p);

	
}
function education(e) {
	var h2=document.createElement("h2");
	h2.innerHTML="EDUCATIONAL DETAILS";

	right.appendChild(h2);
	// body...
	
var ww=document.createElement("hr");
right.appendChild(ww);
var table=document.createElement("table");
table.border="1";
var tr1="<tr><td>s.no</td><td>degree</td><td>institution</td><td>per</td><td>yop</td></tr>";
var tr2="";
for(i=0;i<e.length;i++)
{
	tr2=tr2+"<tr><td>"+e[i].sno+"</td><td>"+e[i].DEGRREE+"</td><td>"+e[i].INSTITUTE+"</td><td>"+e[i].per+"</td><td>"+e[i].yop+"</td></tr>";
}
table.innerHTML=tr1+tr2;
right.appendChild(table);
var h1=document.createElement("h1");
	h1.innerHTML="languages";
	right.appendChild(h1);
	var ww=document.createElement("hr");
right.appendChild(ww);
}


function language(e) {
var ul=document.createElement("ul");
right.append(ul);
for(i=0;i<e.length;i++)
{
	var li=document.createElement("li");
	li.textContent=e[i].lang;
	ul.append(li); 
}

}
