//your JS code here. If required.
let body=document.querySelector("body");
let p=document.createElement("p");
function updateTime() {
	p.setAttribute("id","timer")
    let dt= new Date();
    p.textContent = dt.toLocaleString();
}
setInterval(updateTime,1000)
body.appendChild(p);


