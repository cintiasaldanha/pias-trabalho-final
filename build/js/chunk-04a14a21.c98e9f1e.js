(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04a14a21"],{"4eaf":function(t,e,i){"use strict";i("6ca0")},"6ca0":function(t,e,i){},9108:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"list row"},[i("div",{staticClass:"col-md-8"},[i("div",{staticClass:"input-group mb-3"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search by title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),i("div",{staticClass:"input-group-append"},[i("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:t.searchTitle}},[t._v(" Search ")])])])]),i("div",{staticClass:"col-md-6"},[i("h4",[t._v("Times List")]),i("ul",{staticClass:"list-group"},t._l(t.times,(function(e,n){return i("li",{key:n,staticClass:"list-group-item",class:{active:n==t.currentIndex},on:{click:function(i){return t.setActiveTime(e,n)}}},[t._v(" "+t._s(t.Time.TimeName)+" ")])})),0),i("button",{staticClass:"m-3 btn btn-sm btn-danger",on:{click:t.removeAllTimes}},[t._v(" Remove All ")])]),i("div",{staticClass:"col-md-6"},[t.currentTime?i("div",[i("h4",[t._v("Time")]),i("div",[t._m(0),t._v(" "+t._s(t.currentTime.idttime)+" ")]),i("div",[t._m(1),t._v(" "+t._s(t.currentTime.sgltime)+" ")]),i("div",[t._m(2),t._v(" "+t._s(t.currentTime.dsctime)+" ")]),i("div",[t._m(3),t._v(" "+t._s(t.currentTime.imgescudo)+" ")]),i("div",[i("button",{staticClass:"badge badge-success",on:{click:function(e){return t.$router.push({name:"time-details",params:{id:t.currentTime._id}})}}},[t._v("Editar")])])]):i("div",[i("br"),i("p",[t._v("Selecione um time...")])])])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",[i("strong",[t._v("Identificador:")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",[i("strong",[t._v("Sigla:")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",[i("strong",[t._v("Nome:")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",[i("strong",[t._v("Escudo:")])])}],c=i("b1d0"),a={name:"times-list",data:function(){return{times:[],currentTime:null,currentIndex:-1,title:""}},methods:{retrieveTimes:function(){var t=this;c["a"].getAll().then((function(e){t.times=e.data,console.log(e.data)})).catch((function(t){console.log(t)}))},refreshList:function(){this.retrieveTimes(),this.currentTime=null,this.currentIndex=-1},setActiveTime:function(t,e){this.currentTime=t,this.currentIndex=e},removeAllTimes:function(){var t=this;c["a"].deleteAll().then((function(e){console.log(e.data),t.refreshList()})).catch((function(t){console.log(t)}))},searchTitle:function(){var t=this;c["a"].findByTitle(this.title).then((function(e){t.times=e.data,console.log(e.data)})).catch((function(t){console.log(t)}))}},mounted:function(){this.retrieveTimes()}},r=a,l=(i("4eaf"),i("2877")),o=Object(l["a"])(r,n,s,!1,null,null,null);e["default"]=o.exports},b1d0:function(t,e,i){"use strict";var n=i("d4ec"),s=i("bee2"),c=i("bc3a"),a=i.n(c),r=a.a.create({baseURL:"http://18.205.226.58/br21api",headers:{"Access-Control-Allow-Origin":"*","Content-type":"application/json"}}),l=function(){function t(){Object(n["a"])(this,t)}return Object(s["a"])(t,[{key:"getClassificacao",value:function(t){return r.get("/classificacao/"+t,{crossdomain:!0})}},{key:"getAll",value:function(){return r.get("/times",{crossdomain:!0})}},{key:"get",value:function(t){return r.get("/times/"+t,{crossdomain:!0})}},{key:"create",value:function(t){return r.post("/times",t)}},{key:"update",value:function(t,e){return r.put("/times/".concat(t),e)}},{key:"delete",value:function(t){return r.delete("/times/".concat(t))}},{key:"deleteAll",value:function(){return r.delete("/times")}}]),t}();e["a"]=new l}}]);
//# sourceMappingURL=chunk-04a14a21.c98e9f1e.js.map