(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{282:function(e,n,t){"use strict";t.r(n);var a=t(22),c=t(167),r=t(3),i=t(26),o=t(2),u=t(10),s=t(51),g=t(21),w=t(17),d=t(9),l=t(12),m=t(5),y=t(20),f=new o.a({center:[0,0],zoom:2}),p=new r.a({layers:[new m.a({source:new d.b})],target:"map",view:f}),h=new c.a({trackingOptions:{enableHighAccuracy:!0},projection:f.getProjection()});function k(e){return document.getElementById(e)}k("track").addEventListener("change",(function(){h.setTracking(this.checked)})),h.on("change",(function(){k("accuracy").innerText=h.getAccuracy()+" [m]",k("altitude").innerText=h.getAltitude()+" [m]",k("altitudeAccuracy").innerText=h.getAltitudeAccuracy()+" [m]",k("heading").innerText=h.getHeading()+" [rad]",k("speed").innerText=h.getSpeed()+" [m/s]"})),h.on("error",(function(e){var n=document.getElementById("info");n.innerHTML=e.message,n.style.display=""}));var v=new a.a;h.on("change:accuracyGeometry",(function(){v.setGeometry(h.getAccuracyGeometry())}));var A=new a.a;A.setStyle(new u.c({image:new s.a({radius:6,fill:new g.a({color:"#3399CC"}),stroke:new w.a({color:"#fff",width:2})})})),h.on("change:position",(function(){var e=h.getPosition();A.setGeometry(e?new i.a(e):null)})),new y.a({map:p,source:new l.a({features:[v,A]})})}},[[282,0]]]);
//# sourceMappingURL=geolocation.js.map