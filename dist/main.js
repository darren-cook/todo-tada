(()=>{document.querySelectorAll(".nav-item").forEach((e=>e.addEventListener("click",(function(){document.querySelector(".nav-active").classList.toggle("nav-active"),e.classList.toggle("nav-active")}))));const e=document.getElementById("myChart");new Chart(e,{type:"doughnut",data:{labels:["Yellow","Green","Orange","Pink"],datasets:[{data:[7,5,3,5],backgroundColor:["yellow","green","orange","pink"],borderWidth:.5,cutout:"70%"}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{tooltip:{enabled:!1},legend:{display:!1}}}});const t=document.getElementById("myChart1");new Chart(t,{type:"doughnut",data:{labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:[{data:[12,19,3,5,2,3],borderWidth:1,cutout:"90%"}]},options:{plugins:{tooltip:{enabled:!1},legend:{display:!1}}}});const a=document.getElementById("myChart2");new Chart(a,{type:"doughnut",data:{labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:[{data:[12,19,3,5,2,3],borderWidth:1,cutout:"90%"}]},options:{plugins:{tooltip:{enabled:!1},legend:{display:!1}}}});const n=document.getElementById("myChart3");new Chart(n,{type:"doughnut",data:{labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:[{data:[12,19,3,5,2,3],borderWidth:1,cutout:"90%"}]},options:{plugins:{tooltip:{enabled:!1},legend:{display:!1}}}});const l=document.getElementById("myChart4");new Chart(l,{type:"doughnut",data:{labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:[{data:[12,19,3,5,2,3],borderWidth:1,cutout:"90%"}]},options:{plugins:{tooltip:{enabled:!1},legend:{display:!1}}}});const d=document.getElementById("myChart5");new Chart(d,{type:"doughnut",data:{labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:[{data:[12,19,3,5,2,3],borderWidth:1,cutout:"90%"}]},options:{plugins:{tooltip:{enabled:!1},legend:{display:!1}}}});const o=document.getElementById("myChart6");new Chart(o,{type:"doughnut",data:{labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:[{data:[12,19,3,5,2,3],borderWidth:1,cutout:"90%"}]},options:{plugins:{tooltip:{enabled:!1},legend:{display:!1}}}})})();