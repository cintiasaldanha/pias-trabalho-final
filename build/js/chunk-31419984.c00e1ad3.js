(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31419984"],{"738a":function(e,a,t){},a2a7:function(e,a,t){"use strict";t("738a")},e1d1:function(e,a,t){"use strict";t.r(a);var o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return e.currentTemporada?t("div",{staticClass:"edit-form"},[t("h4",[e._v("Temporada")]),t("form",[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"idtemporada"}},[e._v("Temporada")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.currentTemporada.idtemporada,expression:"currentTemporada.idtemporada"}],staticClass:"form-control",attrs:{type:"text",id:"idTemporada"},domProps:{value:e.currentTemporada.idtemporada},on:{input:function(a){a.target.composing||e.$set(e.currentTemporada,"idtemporada",a.target.value)}}})]),e._m(0)]),e.currentTemporada.published?t("button",{staticClass:"badge badge-primary mr-2",on:{click:function(a){return e.updatePublished(!1)}}},[e._v(" UnPublish ")]):t("button",{staticClass:"badge badge-primary mr-2",on:{click:function(a){return e.updatePublished(!0)}}},[e._v(" Publicar ")]),t("button",{staticClass:"badge badge-danger mr-2",on:{click:e.deleteTemporada}},[e._v(" Excluir ")]),t("button",{staticClass:"badge badge-success",attrs:{type:"submit"},on:{click:e.updateTemporada}},[e._v(" Atualizar ")]),t("p",[e._v(e._s(e.message))])]):t("div",[t("br"),t("p",[e._v("Selecione a temporada...")])])},r=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"form-group"},[t("label",[t("strong",[e._v("Status:")])]),e._v(' "Pending" ')])}],n=t("ff09"),i={name:"temporada",data:function(){return{currentTemporada:null,message:""}},methods:{getTemporada:function(e){var a=this;n["a"].get(e).then((function(e){a.currentTemporada=e.data[0],console.log(e.data)})).catch((function(e){console.log(e)}))},updatePublished:function(e){e&&this.$swal.fire({icon:"error",title:"Oops...",text:"Ainda não implementado. Demonstração para a POC."})},updateTemporada:function(){this.$swal.fire({icon:"error",title:"Oops...",text:"Ainda não implementado. Demonstração para a POC."})},deleteTemporada:function(){var e=this;n["a"].delete(this.currentTemporada.idtemporada).then((function(a){console.log(a.data),e.$router.push({name:"temporadas"})})).catch((function(e){console.log(e)}))}},mounted:function(){this.message="",this.getTemporada(this.$route.params.id)}},s=i,c=(t("a2a7"),t("2877")),d=Object(c["a"])(s,o,r,!1,null,null,null);a["default"]=d.exports},ff09:function(e,a,t){"use strict";var o=t("d4ec"),r=t("bee2"),n=t("bc3a"),i=t.n(n),s=i.a.create({baseURL:"http://ec2-18-205-226-58.compute-1.amazonaws.com:82/br21api",headers:{"Access-Control-Allow-Origin":"*","Content-type":"application/json"}}),c=function(){function e(){Object(o["a"])(this,e)}return Object(r["a"])(e,[{key:"getAll",value:function(){return s.get("/temporada",{crossdomain:!0})}},{key:"get",value:function(e){return s.get("/temporada/"+e,{crossdomain:!0})}},{key:"create",value:function(e){return s.post("/temporada",e,{crossdomain:!0})}},{key:"update",value:function(e,a){return s.put("/temporada/".concat(e),a,{crossdomain:!0})}},{key:"delete",value:function(e){return s.delete("/temporada/".concat(e),{crossdomain:!0})}},{key:"deleteAll",value:function(){return s.delete("/temporada",{crossdomain:!0})}}]),e}();a["a"]=new c}}]);
//# sourceMappingURL=chunk-31419984.c00e1ad3.js.map