function bars(id,data,max,suffix,out){var el=document.getElementById(id);el.innerHTML=data.map(function(d){var w=Math.max(d[1]/max*100,1.5);return '<div class="row"><span class="n">'+d[0]+'</span><div class="track"><div class="fill'+(out&&d[1]<max*.12?' out':'')+'" style="width:'+w+'%;background:'+(d[2]||"#4a78b0")+'">'+(suffix===false?'':d[1].toLocaleString("en-US"))+'</div></div></div>'}).join("")}
function drv(){var n=+document.getElementById("topn").value;document.getElementById("topv").textContent=n;bars("driverBars",drivers.slice(0,n),drivers[0][1],true,false)}
document.getElementById("topn").addEventListener("input",drv);drv();
bars("teamBars",teams.map(function(t,i){return i?[t[0],t[1],t[2]]:t}),8006,false);
(function(){var el=document.querySelectorAll("#teamBars .fill");el.forEach(function(f,i){if(i)f.textContent=""})})();
bars("countryBars",countries,400,true);
var tabs=document.getElementById("tabs"),box=document.getElementById("storyBox");
function show(i){[].forEach.call(tabs.children,function(b,j){b.setAttribute("aria-selected",j==i)});box.innerHTML="<h3>"+chapters[i][0]+"</h3><p>"+chapters[i][1]+"</p>"}
chapters.forEach(function(c,i){var b=document.createElement("button");b.setAttribute("role","tab");b.textContent=c[0];b.onclick=function(){show(i)};tabs.appendChild(b)});show(0);
document.querySelectorAll("[data-n]").forEach(function(e){var t=+e.dataset.n,s=null;function f(ts){s=s||ts;var p=Math.min((ts-s)/1200,1);e.textContent=Math.round(t*p).toLocaleString("en-US");if(p<1)requestAnimationFrame(f)}
if(matchMedia("(prefers-reduced-motion:reduce)").matches)e.textContent=t.toLocaleString("en-US");else requestAnimationFrame(f)});
