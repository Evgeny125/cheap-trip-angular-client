(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{244:function(e,t,n){"use strict";n.r(t);var o=n(31),a=n(3),r=n(2),i=n(10),c=n(21),s=n(17),d=n(51),w=n(12),l=n(9),g=n(20),u=n(5),m=new w.a({url:"data/geojson/switzerland.geojson",format:new o.a}),f=new i.c({fill:new c.a({color:"rgba(255, 255, 255, 0.6)"}),stroke:new s.a({color:"#319FD3",width:1}),image:new d.a({radius:5,fill:new c.a({color:"rgba(255, 255, 255, 0.6)"}),stroke:new s.a({color:"#319FD3",width:1})})}),p=new g.a({source:m,style:f}),v=new r.a({center:[0,0],zoom:1}),y=new a.a({layers:[new u.a({source:new l.b}),p],target:"map",view:v});document.getElementById("zoomtoswitzerland").addEventListener("click",(function(){var e=m.getFeatures()[0].getGeometry();v.fit(e,{padding:[170,50,30,150]})}),!1),document.getElementById("zoomtolausanne").addEventListener("click",(function(){var e=m.getFeatures()[1].getGeometry();v.fit(e,{padding:[170,50,30,150],minResolution:50})}),!1),document.getElementById("centerlausanne").addEventListener("click",(function(){var e=m.getFeatures()[1].getGeometry(),t=y.getSize();v.centerOn(e.getCoordinates(),t,[570,500])}),!1)}},[[244,0]]]);
//# sourceMappingURL=center.js.map