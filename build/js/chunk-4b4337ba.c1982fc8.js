(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b4337ba"],{"43dd":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.currentJogo?o("div",{staticClass:"edit-form"},[o("h4",[t._v("Jogo")]),o("form",[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"idttemporada"}},[t._v("Temporada")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.currentJogo.idttemporada,expression:"currentJogo.idttemporada"}],staticClass:"form-control",attrs:{type:"text",id:"idttemporada"},domProps:{value:t.currentJogo.idttemporada},on:{input:function(e){e.target.composing||t.$set(t.currentJogo,"idttemporada",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"dtajogo"}},[t._v("Data e hora de realização")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.currentJogo.dtajogo,expression:"currentJogo.dtajogo"}],staticClass:"form-control",attrs:{type:"text",id:"dtajogo"},domProps:{value:t.currentJogo.dtajogo},on:{input:function(e){e.target.composing||t.$set(t.currentJogo,"dtajogo",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"idttimemandante"}},[t._v("Identificador Mandante")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.currentJogo.idttimemandante,expression:"currentJogo.idttimemandante"}],staticClass:"form-control",attrs:{type:"text",id:"idttimemandante"},domProps:{value:t.currentJogo.idttimemandante},on:{input:function(e){e.target.composing||t.$set(t.currentJogo,"idttimemandante",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"dsctimemandante"}},[t._v("Mandante")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.currentJogo.dsctimemandante,expression:"currentJogo.dsctimemandante"}],staticClass:"form-control",attrs:{type:"text",id:"dsctimemandante"},domProps:{value:t.currentJogo.dsctimemandante},on:{input:function(e){e.target.composing||t.$set(t.currentJogo,"dsctimemandante",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"vlrplacarmandante"}},[t._v("Gols do Mandante")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.currentJogo.vlrplacarmandante,expression:"currentJogo.vlrplacarmandante"}],staticClass:"form-control",attrs:{type:"text",id:"vlrplacarmandante"},domProps:{value:t.currentJogo.vlrplacarmandante},on:{input:function(e){e.target.composing||t.$set(t.currentJogo,"vlrplacarmandante",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"idttimevisitante"}},[t._v("Identificador Visitante")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.currentJogo.idttimevisitante,expression:"currentJogo.idttimevisitante"}],staticClass:"form-control",attrs:{type:"text",id:"idttimevisitante"},domProps:{value:t.currentJogo.idttimevisitante},on:{input:function(e){e.target.composing||t.$set(t.currentJogo,"idttimevisitante",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"dsctimevisitante"}},[t._v("Visitante")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.currentJogo.dsctimevisitante,expression:"currentJogo.dsctimevisitante"}],staticClass:"form-control",attrs:{type:"text",id:"dsctimevisitante"},domProps:{value:t.currentJogo.dsctimevisitante},on:{input:function(e){e.target.composing||t.$set(t.currentJogo,"dsctimevisitante",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"vlrplacarvisitante"}},[t._v("Gols do Visitante")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.currentJogo.vlrplacarvisitante,expression:"currentJogo.vlrplacarvisitante"}],staticClass:"form-control",attrs:{type:"text",id:"vlrplacarvisitante"},domProps:{value:t.currentJogo.vlrplacarvisitante},on:{input:function(e){e.target.composing||t.$set(t.currentJogo,"vlrplacarvisitante",e.target.value)}}})]),t._m(0)]),t.currentJogo.published?o("button",{staticClass:"badge badge-primary mr-2",on:{click:function(e){return t.updatePublished(!1)}}},[t._v(" UnPublish ")]):o("button",{staticClass:"badge badge-primary mr-2",on:{click:function(e){return t.updatePublished(!0)}}},[t._v(" Publicar ")]),o("button",{staticClass:"badge badge-danger mr-2",on:{click:t.deleteJogo}},[t._v(" Excluir ")]),o("button",{staticClass:"badge badge-success",attrs:{type:"submit"},on:{click:t.updateJogo}},[t._v(" Atualizar ")]),o("p",[t._v(t._s(t.message))])]):o("div",[o("br"),o("p",[t._v("Selecione um jogo...")])])},n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"form-group"},[o("label",[o("strong",[t._v("Status:")])]),t._v(' "Pending" ')])}],r=o("c832"),i={name:"jogo",data:function(){return{currentJogo:null,message:""}},methods:{getJogo:function(t){var e=this;r["a"].get(t).then((function(t){e.currentJogo=t.data[0],console.log(t.data)})).catch((function(t){console.log(t)}))},getByTemporadaRodada:function(t,e,o){var a=this;r["a"].ByTemporadaRodada(t,e,o).then((function(t){a.currentJogo=t.data[0],console.log(t.data)})).catch((function(t){console.log(t)}))},updatePublished:function(t){var e=this,o={idttemporada:this.currentJogo.idttemporada,dtajogo:this.currentJogo.dtajogo,dsclocal:this.currentJogo.dsclocal,idttimemandante:this.currentJogo.idttimemandante,dsctimemandante:this.currentJogo.dsctimemandante,vlrplacarmandante:this.currentJogo.vlrplacarmandante,idttimevitantes:this.currentJogo.idttimevitantes,dsctimevisitante:this.currentJogo.dsctimevisitante,vlrplacarvisitante:this.currentJogo.vlrplacarvisitante,published:t};r["a"].update(this.currentJogo.idjogo,o).then((function(o){e.currentJogo.published=t,console.log(o.data)})).catch((function(t){console.log(t)}))},updateJogo:function(){var t=this;r["a"].update(this.currentJogo._id,this.currentJogo).then((function(e){console.log(e.data),t.message="Os dados do jogo foram atualizados com sucesso"})).catch((function(t){console.log(t)}))},deleteJogo:function(){var t=this;r["a"].delete(this.currentJogo._id).then((function(e){console.log(e.data),t.$router.push({name:"jogos"})})).catch((function(t){console.log(t)}))}},mounted:function(){this.message="",this.getJogo(this.$route.params.idtemp,this.$route.params.idrod,this.$route.params.id)}},s=i,c=(o("54da"),o("2877")),d=Object(c["a"])(s,a,n,!1,null,null,null);e["default"]=d.exports},"54da":function(t,e,o){"use strict";o("ba76")},ba76:function(t,e,o){},c832:function(t,e,o){"use strict";var a=o("d4ec"),n=o("bee2"),r=o("bc3a"),i=o.n(r),s=i.a.create({baseURL:"http://ec2-18-205-226-58.compute-1.amazonaws.com:81/br21api",headers:{"Access-Control-Allow-Origin":"*","Content-type":"application/json"}}),c=function(){function t(){Object(a["a"])(this,t)}return Object(n["a"])(t,[{key:"getAll",value:function(){return s.get("/jogo",{crossdomain:!0})}},{key:"get",value:function(t){return s.get("/jogo/"+t,{crossdomain:!0})}},{key:"getByTemporadaRodada",value:function(t,e,o){return s.get("/jogo/"+t+"/"+e+"/"+o,{crossdomain:!0})}},{key:"create",value:function(t){return s.post("/jogo",t)}},{key:"update",value:function(t,e){return s.put("/jogo/".concat(t),e)}},{key:"delete",value:function(t){return s.delete("/jogo/".concat(t))}},{key:"deleteAll",value:function(){return s.delete("/jogo")}}]),t}();e["a"]=new c}}]);
//# sourceMappingURL=chunk-4b4337ba.c1982fc8.js.map