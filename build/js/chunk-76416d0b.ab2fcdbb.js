(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76416d0b"],{6489:function(t,e,a){"use strict";a("fdb8")},eac0:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list row"},[a("div",{staticClass:"col-md-6"},[a("h4",[t._v("Temporadas - Brasileirão")]),a("ul",{staticClass:"list-group"},t._l(t.temporadas,(function(e,n){return a("li",{key:n,staticClass:"list-group-item",class:{active:n==t.currentIndex},on:{click:function(a){return t.setActiveTemporada(e,n)}}},[t._v(" "+t._s(e.idtemporada)+" ")])})),0),a("button",{staticClass:"m-3 btn btn-sm btn-danger",on:{click:t.removeAllTemporadas}},[t._v(" Excluir tudo ")])]),a("div",{staticClass:"col-md-6"},[t.currentTemporada?a("div",[a("h4",[t._v("Temporada")]),a("div",[t._m(0),t._v(" "+t._s(t.currentTemporada.idtemporada)+" ")]),a("div",[a("button",{staticClass:"badge badge-success",on:{click:function(e){return t.$router.push({name:"temporada-details",params:{id:t.currentTemporada.idtemporada}})}}},[t._v("Editar")])])]):a("div",[a("br"),a("p",[t._v("Selecione uma temporada...")])])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",[a("strong",[t._v("Temporada:")])])}],o=a("ff09"),i={name:"temporadas-list",data:function(){return{temporadas:[],currentTemporada:null,currentIndex:-1,title:""}},methods:{retrieveTemporadas:function(){var t=this;o["a"].getAll().then((function(e){t.temporadas=e.data,console.log(e.data)})).catch((function(t){console.log(t)}))},refreshList:function(){this.retrieveTemporadas(),this.currentTemporada=null,this.currentIndex=-1},setActiveTemporada:function(t,e){this.currentTemporada=t,this.currentIndex=e},removeAllTemporadas:function(){this.$swal.fire({icon:"error",title:"Oops...",text:"Ainda não implementado. Demonstração para a POC."})},searchTitle:function(){var t=this;o["a"].findByTitle(this.title).then((function(e){t.temporada=e.data,console.log(e.data)})).catch((function(t){console.log(t)}))}},mounted:function(){this.retrieveTemporadas()}},c=i,s=(a("6489"),a("2877")),d=Object(s["a"])(c,n,r,!1,null,null,null);e["default"]=d.exports},fdb8:function(t,e,a){},ff09:function(t,e,a){"use strict";var n=a("d4ec"),r=a("bee2"),o=a("bc3a"),i=a.n(o),c=i.a.create({baseURL:"http://ec2-18-205-226-58.compute-1.amazonaws.com:82/br21api",headers:{"Access-Control-Allow-Origin":"*","Content-type":"application/json"}}),s=function(){function t(){Object(n["a"])(this,t)}return Object(r["a"])(t,[{key:"getAll",value:function(){return c.get("/temporada",{crossdomain:!0})}},{key:"get",value:function(t){return c.get("/temporada/"+t,{crossdomain:!0})}},{key:"create",value:function(t){return c.post("/temporada",t,{crossdomain:!0})}},{key:"update",value:function(t,e){return c.put("/temporada/".concat(t),e,{crossdomain:!0})}},{key:"delete",value:function(t){return c.delete("/temporada/".concat(t),{crossdomain:!0})}},{key:"deleteAll",value:function(){return c.delete("/temporada",{crossdomain:!0})}}]),t}();e["a"]=new s}}]);
//# sourceMappingURL=chunk-76416d0b.ab2fcdbb.js.map