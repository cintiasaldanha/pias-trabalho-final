(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b7423ef"],{2013:function(e,t,a){},"2da3":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"submit-form"},[e.submitted?a("div",[a("h4",[e._v("Informações enviadas com sucesso!")]),a("button",{staticClass:"btn btn-success",on:{click:e.newTemporada}},[e._v("Add")])]):a("div",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"idTemporada"}},[e._v("Temporada")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.temporada.idTemporada,expression:"temporada.idTemporada"}],staticClass:"form-control",attrs:{type:"text",id:"idTemporada",required:"",name:"idTemporada"},domProps:{value:e.temporada.idTemporada},on:{input:function(t){t.target.composing||e.$set(e.temporada,"idTemporada",t.target.value)}}})]),a("button",{staticClass:"btn btn-success",on:{click:e.saveTemporada}},[e._v("Submit")])])])},n=[],r=a("ff09"),d={name:"add-temporada",data:function(){return{temporada:{idttemporada:null},submitted:!1}},methods:{saveTemporada:function(){var e=this,t={IdTemporada:this.temporada.idTemporada};r["a"].create(t).then((function(t){e.temporada.idtemporada=t.data.idtemporada,console.log(t.data),e.submitted=!0})).catch((function(e){console.log(e)}))},newTemporada:function(){this.submitted=!1,this.temporada={}}}},i=d,s=(a("6811"),a("2877")),c=Object(s["a"])(i,o,n,!1,null,null,null);t["default"]=c.exports},6811:function(e,t,a){"use strict";a("2013")},ff09:function(e,t,a){"use strict";var o=a("d4ec"),n=a("bee2"),r=a("bc3a"),d=a.n(r),i=d.a.create({baseURL:"http://18.205.226.58:82/br21api",headers:{"Access-Control-Allow-Origin":"*","Content-type":"application/json"}}),s=function(){function e(){Object(o["a"])(this,e)}return Object(n["a"])(e,[{key:"getAll",value:function(){return i.get("/temporada",{crossdomain:!0})}},{key:"get",value:function(e){return i.get("/temporada/"+e,{crossdomain:!0})}},{key:"create",value:function(e){return i.post("/temporada",e)}},{key:"update",value:function(e,t){return i.put("/temporada/".concat(e),t)}},{key:"delete",value:function(e){return i.delete("/temporada/".concat(e))}},{key:"deleteAll",value:function(){return i.delete("/temporada")}}]),e}();t["a"]=new s}}]);
//# sourceMappingURL=chunk-7b7423ef.1ce3abfe.js.map