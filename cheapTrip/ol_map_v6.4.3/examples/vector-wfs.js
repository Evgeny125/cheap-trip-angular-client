(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{390:function(e,t,a){"use strict";a.r(t);var r=a(31),o=a(3),n=a(12),s=a(2),p=a(27),w=a(10),i=a(17),c=a(20),m=a(5),u=a(131),l=new n.a({format:new r.a,url:function(e){return"https://ahocevar.com/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typename=osm:water_areas&outputFormat=application/json&srsname=EPSG:3857&bbox="+e.join(",")+",EPSG:3857"},strategy:u.b}),g=new c.a({source:l,style:new w.c({stroke:new i.a({color:"rgba(0, 0, 255, 1.0)",width:2})})}),y=new m.a({source:new p.a({attributions:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',url:"https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=get_your_own_D6rA4zTHduk6KOKTXzGB",maxZoom:20})});new o.a({layers:[y,g],target:document.getElementById("map"),view:new s.a({center:[-8908887.277395891,5381918.072437216],maxZoom:19,zoom:12})})}},[[390,0]]]);
//# sourceMappingURL=vector-wfs.js.map