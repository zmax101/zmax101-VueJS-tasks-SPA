(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d54ed0d"],{"4a2e":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[t.task?e("div",[e("div",{staticClass:"create-title-page"},[e("h1",[t._v(t._s(t.task.title))]),e("h4",[t._v(t._s(t.task.subtitle))])]),e("hr"),e("form",{on:{submit:function(s){return s.preventDefault(),t.submitHandler(s)}}},[e("div",{ref:"chips",staticClass:"chips"}),e("div",{staticClass:"input-field col s12"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.desc,expression:"desc"}],staticClass:"materialize-textarea",staticStyle:{"min-height":"100px"},attrs:{id:"desc",required:""},domProps:{value:t.desc},on:{input:function(s){s.target.composing||(t.desc=s.target.value)}}}),e("label",{attrs:{for:"desc"}},[t._v("Описание")])]),e("input",{ref:"datepicker",staticClass:"datepicker-text",attrs:{type:"text"}}),e("div",{staticClass:"buttons col s12 m12 l12"},[t._m(0),e("button",{staticClass:"compl btn green darken-4 col s12",attrs:{type:"submit"},on:{click:function(s){return t.completeTask()}}},[t._v(" выполнено ")]),e("button",{staticClass:"removet btn red darken-4 col s12",attrs:{type:"submit"},on:{click:function(s){return t.removeTask(t.task)}}},[t._v(" удалить ")])])])]):e("div",{staticClass:"notFound"},[e("h1",[t._v("Такой задачи не найдено :с")]),e("br"),e("h2",[t._v("или вы удалили все задачи :)")])])])])},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("button",{staticClass:"send btn indigo darken-4 col s12",attrs:{type:"submit"}},[t._v(" изменить "),e("i",{staticClass:"material-icons right"},[t._v("send")])])}],n={computed:{task:function(){return this.$store.getters.taskById(+this.$route.params.id)}},data:function(){return{desc:"",chips:null,date:null}},mounted:function(){this.desc=this.task.desc,this.chips=M.Chips.init(this.$refs.chips,{placeholder:"Task tags",data:this.task.tags}),this.date=M.Datepicker.init(this.$refs.datepicker,{format:"dd.mm.yyyy",defaultDate:new Date(this.task.date),setDefaultDate:!0}),setTimeout((function(){M.updateTextFields()}),0)},methods:{submitHandler:function(){this.$store.dispatch("updateTask",{id:this.task.id,desc:this.desc,date:this.date.date}),this.$router.push("/")},completeTask:function(){this.$store.dispatch("completeTask",this.task.id),this.$router.push("/")},destroyed:function(){this.date&&this.date.destroy&&this.date.destroy(),this.chips&&this.chips.destroy&&this.chips.destroy()},removeTask:function(t){this.$store.commit("removeTask",t)}}},r=n,c=(e("87d8"),e("2877")),d=Object(c["a"])(r,i,a,!1,null,"43dde827",null);s["default"]=d.exports},"87d8":function(t,s,e){"use strict";var i=e("9583"),a=e.n(i);a.a},9583:function(t,s,e){}}]);
//# sourceMappingURL=chunk-6d54ed0d.22620ce8.js.map