(this.webpackJsonplaudos=this.webpackJsonplaudos||[]).push([[0],{32:function(e,a,t){e.exports=t(45)},37:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(11),i=t.n(o),l=(t(37),t(63)),c=t(69),s=t(65),u=t(67),m=t(68),d=t(66),p=t(24),f=t.n(p),h=Object(l.a)((function(e){return{menuButtom:{padding:"10px",cursor:"pointer"},loginButton:{marginLeft:"auto",display:"none"}}})),g=function(){var e=h();return r.a.createElement("div",{className:e.root},r.a.createElement(c.a,{position:"static"},r.a.createElement(s.a,null,r.a.createElement(d.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(f.a,null)),r.a.createElement(u.a,{variant:"h6",className:e.title},r.a.createElement(m.a,{color:"inherit",onClick:function(){}},"Cadastro"),r.a.createElement(m.a,{color:"inherit",onClick:function(){}},"Busca")),r.a.createElement(m.a,{color:"inherit",className:e.loginButton},"Login"))))},b=t(3),v=t(19),E=t(26);function y(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function O(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?y(t,!0).forEach((function(a){Object(b.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var w=Object(l.a)((function(e){return{root:{display:"flex",alignItems:"center",justifyContent:"center"},select:{marginTop:"100px",marginBottom:"50px",fontSize:"1.2em",width:"80%"}}})),j=function(e){var a=e.data,t=w(),o=r.a.useState([]),i=Object(v.a)(o,2),l=i[0],c=i[1],s=r.a.useState(null),u=Object(v.a)(s,2),m=u[0],d=u[1];return Object(n.useEffect)((function(){c(a.map((function(e,a){return{label:Object.values(e).reduce((function(e,a){return e.concat(" - ",a)}),""),value:a}})))}),[a]),r.a.createElement("div",{className:t.root},r.a.createElement(E.a,{className:t.select,value:m,maxMenuHeight:390,styles:{menu:function(e){return O({},e,{zIndex:9999})}},theme:function(e){return O({},e,{borderRadius:5,colors:O({},e.colors,{primary25:"#D8D6D9",primary:"#3f51b5"}),spacing:{baseUnit:8.5}})},TextFieldProps:{label:"data"},placeholder:"Selecionar Laudo (Empresa, Codigo, Mina, Complexo, Respons\xe1vel, NIT, Data Emiss\xe3o, Data Validade)",options:l,onChange:function(e){return d(e)}}))},x=Object(l.a)((function(e){return{button:{margin:e.spacing(1)},input:{display:"none"}}})),D=function(e){var a=e.children,t=e.href,n=x();return r.a.createElement(m.a,{variant:"contained",href:t,color:"primary",className:n.button,target:"blank"},a)},S=[{empresa:"Mertz LLC",codigo:"4859",mina:"South Anabelborough",complexo:"Lake Jorge",responsavel:"Reynold Kunze",nit:"30611",dataEmissao:"2019-08-09",dataValidade:"2020-01-03"},{empresa:"Dickens, Zboncak and Haley",codigo:"793",mina:"Schuylerhaven",complexo:"Selenatown",responsavel:"Norene Schiller",nit:"56532",dataEmissao:"2018-06-10",dataValidade:"2020-01-09"},{empresa:"Mertz, Johns and Reichert",codigo:"96203",mina:"Hartmannland",complexo:"Kuhnburgh",responsavel:"Terrell Hansen DVM",nit:"17037",dataEmissao:"2004-05-28",dataValidade:"2010-08-06"},{empresa:"O'Connell LLC",codigo:"32715",mina:"Armandohaven",complexo:"West Isabellmouth",responsavel:"Tyrell MacGyver",nit:"1192",dataEmissao:"2019-16-04",dataValidade:"2019-10-12"},{empresa:"Hermann and Sons",codigo:"9767",mina:"Legrosstad",complexo:"Port Myrtle",responsavel:"Miss Timmothy Stehr",nit:"19695",dataEmissao:"2018-09-07",dataValidade:"2019-01-02"}],k=function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(j,{data:S}),r.a.createElement(D,{href:"http://www.africau.edu/images/default/sample.pdf"},"Download"))};t(44);var C=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.07fbd60f.chunk.js.map