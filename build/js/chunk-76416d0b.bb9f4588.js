(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76416d0b"],{6489:function(t,e,a){"use strict";a("fdb8")},eac0:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list row"},[a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search by title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:t.searchTitle}},[t._v(" Search ")])])])]),a("div",{staticClass:"col-md-6"},[a("h4",[t._v("Temporadas")]),a("ul",{staticClass:"list-group"},t._l(t.temporadas,(function(e,n){return a("li",{key:n,staticClass:"list-group-item",class:{active:n==t.currentIndex},on:{click:function(a){return t.setActiveTemporada(e,n)}}},[t._v(" "+t._s(e.idtemporada)+" ")])})),0),a("button",{staticClass:"m-3 btn btn-sm btn-danger",on:{click:t.removeAllTemporadas}},[t._v(" Remove All ")])]),a("div",{staticClass:"col-md-6"},[t.currentTemporada?a("div",[a("h4",[t._v("Temporada")]),a("div",[t._m(0),t._v(" "+t._s(t.currentTemporada.idtemporada)+" ")]),a("div",[a("button",{staticClass:"badge badge-success",on:{click:function(e){return t.$router.push({name:"temporada-details",params:{id:t.currentTemporada.idTemporada}})}}},[t._v("Editar")])])]):a("div",[a("br"),a("p",[t._v("Selecione uma temporada...")])])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",[a("strong",[t._v("Temporada:")])])}],o=a("ff09"),i={name:"temporadas-list",data:function(){return{temporadas:[],currentTemporada:null,currentIndex:-1,title:""}},methods:{retrieveTemporadas:function(){var t=this;o["a"].getAll().then((function(e){t.temporadas=e.data,console.log(e.data)})).catch((function(t){console.log(t)}))},refreshList:function(){this.retrieveTemporadas(),this.currentTemporada=null,this.currentIndex=-1},setActiveTemporada:function(t,e){this.currentTemporada=t,this.currentIndex=e},removeAllTemporadas:function(){var t=this;o["a"].deleteAll().then((function(e){console.log(e.data),t.refreshList()})).catch((function(t){console.log(t)}))},searchTitle:function(){var t=this;o["a"].findByTitle(this.title).then((function(e){t.temporada=e.data,console.log(e.data)})).catch((function(t){console.log(t)}))}},mounted:function(){this.retrieveTemporadas()}},s=i,c=(a("6489"),a("2877")),l=Object(c["a"])(s,n,r,!1,null,null,null);e["default"]=l.exports},fdb8:function(t,e,a){},ff09:function(t,e,a){"use strict";var n=a("d4ec"),r=a("bee2"),o=a("bc3a"),i=a.n(o),s=i.a.create({baseURL:"http://18.205.226.58:82/br21api",headers:{"Access-Control-Allow-Origin":"*","Content-type":"application/json"}}),c=function(){function t(){Object(n["a"])(this,t)}return Object(r["a"])(t,[{key:"getAll",value:function(){return s.get("/temporada",{crossdomain:!0})}},{key:"get",value:function(t){return s.get("/temporada/"+t,{crossdomain:!0})}},{key:"create",value:function(t){return s.post("/temporada",t)}},{key:"update",value:function(t,e){return s.put("/temporada/".concat(t),e)}},{key:"delete",value:function(t){return s.delete("/temporada/".concat(t))}},{key:"deleteAll",value:function(){return s.delete("/temporada")}}]),t}();e["a"]=new c}}]);
//# sourceMappingURL=chunk-76416d0b.bb9f4588.js.map