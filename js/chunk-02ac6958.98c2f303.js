(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02ac6958"],{"5baf":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[t._m(0),s("hr"),s("form",{on:{submit:function(e){return e.preventDefault(),t.submitHandler(e)}}},[s("div",{ref:"chips",staticClass:"chips"}),s("div",{staticClass:"col s6"},[s("div",{staticClass:"input-field"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"validate",attrs:{id:"title",type:"text",required:""},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),s("label",{attrs:{for:"title"}},[t._v("Название")]),s("span",{staticClass:"helper-text",attrs:{"data-error":"ВВЕДИТЕ НАЗВАНИЕ"}})])]),s("div",{staticClass:"input-field col s6"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.subtitle,expression:"subtitle"}],staticClass:"validate",attrs:{id:"subtitle",type:"text"},domProps:{value:t.subtitle},on:{input:function(e){e.target.composing||(t.subtitle=e.target.value)}}}),s("label",{attrs:{for:"subtitle"}},[t._v("Доп.название")])]),s("div",{staticClass:"input-field col s12"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.desc,expression:"desc"}],staticClass:"materialize-textarea",attrs:{id:"desc",required:""},domProps:{value:t.desc},on:{input:function(e){e.target.composing||(t.desc=e.target.value)}}}),s("label",{attrs:{for:"desc"}},[t._v("Описание")])]),s("input",{ref:"datepicker",staticClass:"datepicker-text",attrs:{type:"text"}}),t._m(1)])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"create-title-page"},[s("h1",[t._v("Создать задачу")]),s("h1",[s("i",{staticClass:"material-icons"},[t._v("control_point")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"btn indigo darken-4",attrs:{type:"submit",name:"action"}},[t._v(" сохранить "),s("i",{staticClass:"material-icons right"},[t._v("send")])])}],r={name:"create",data:function(){return{title:"",subtitle:"",desc:"",chips:null,date:null}},mounted:function(){this.chips=M.Chips.init(this.$refs.chips,{placeholder:"task tags"}),this.date=M.Datepicker.init(this.$refs.datepicker,{format:"dd.mm.yyyy",defaultDate:new Date,setDefaultDate:!0})},methods:{submitHandler:function(){var t={title:this.title,subtitle:this.subtitle,desc:this.desc,id:Date.now(),status:"active",tags:this.chips.chipsData,date:this.date.date};this.$store.dispatch("createTask",t),this.$router.push("/")}},destroyed:function(){this.date&&this.date.destroy&&this.date.destroy(),this.chips&&this.chips.destroy&&this.chips.destroy()}},l=r,n=(s("d3e7"),s("2877")),c=Object(n["a"])(l,i,a,!1,null,"875e165c",null);e["default"]=c.exports},d3e7:function(t,e,s){"use strict";var i=s("fe32"),a=s.n(i);a.a},fe32:function(t,e,s){}}]);
//# sourceMappingURL=chunk-02ac6958.98c2f303.js.map