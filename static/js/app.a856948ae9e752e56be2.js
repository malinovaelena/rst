webpackJsonp([1],{"0k6/":function(t,e){},"6FO5":function(t,e){},"7L+Q":function(t,e){},"B/lJ":function(t,e){},"CIo/":function(t,e){},ItoN:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i=n("Dd8w"),s=n.n(i),o=n("mvHQ"),l=n.n(o),r={name:"contact-add-modal",props:{contacts:{type:Array,default:function(){return[]}}},data:function(){return{contact:{Name:"",Phone:"",Director:""},items:[]}},computed:{isValidate:function(){var t=this.contact,e=t.Name,n=t.Phone;return e&&n}},methods:{save:function(){this.isValidate?this.$emit("save",this.contact):alert("Заполните поля - имя и телефон")},addPhone:function(t){this.contact.Phone=t},addName:function(t){this.contact.Name=t},addDirector:function(t){this.contact.Director=t}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ui-modal",{staticClass:"contact-add-modal",on:{close:function(e){return t.$emit("close")}}},[n("template",{slot:"title"},[t._v("\n        Добавление пользователя\n    ")]),t._v(" "),n("div",{staticClass:"contact-add-modal__content"},[n("ui-field",{attrs:{title:"Имя"}},[n("ui-input",{on:{update:t.addName}})],1),t._v(" "),n("ui-field",{attrs:{title:"Телефон"}},[n("ui-input",{attrs:{numeric:""},on:{update:t.addPhone}})],1),t._v(" "),t.contacts.length?n("ui-field",{attrs:{title:"Начальник"}},[n("ui-select",{attrs:{items:t.contacts},on:{update:t.addDirector}})],1):t._e()],1),t._v(" "),n("template",{slot:"footer"},[n("ui-button",{on:{click:t.save}},[t._v("Сохранить")])],1)],2)},staticRenderFns:[]};var u=n("VU/8")(r,c,!1,function(t){n("7L+Q")},null,null).exports,d={name:"table-row",props:{item:{type:Object,required:!0}}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-row"},[n("div",[n("div",{staticClass:"table-cell__name"},[t.item.Director?n("div",{staticClass:"table-cell__has-director"},[t._v("+")]):t._e(),t._v("\n            "+t._s(t.item.Name)+"\n        ")]),t._v(" "),n("div",{staticClass:"table-cell__phone"},[t._v("\n            "+t._s(t.item.Phone)+"\n        ")])]),t._v(" "),t.item.Director?n("table-row",{attrs:{item:t.item.Director}}):t._e()],1)},staticRenderFns:[]};var p=function(t){return parseInt(t.replaceAll(" ",""),0)},v={name:"main-table",components:{TableRow:n("VU/8")(d,m,!1,function(t){n("0k6/")},null,null).exports},props:{items:{type:Array,default:function(){return[]}},tableHeading:{type:[Array,Object],default:function(){return[]}}},data:function(){return{parsedData:[],sortAscending:!1,sortItem:null}},watch:{items:{immediate:!0,handler:function(t){var e,n;this.parsedData=(n=[],(e=t).forEach(function(t){if(t.Director){var a=e.find(function(e){return e.ID==t.Director});n.push(s()({},t,{Director:a}))}else n.push(t)}),n)}}},methods:{addSorting:function(t){this.sortItem=t,this.sortAscending=!this.sortAscending,this.parsedData=this.sort()},sort:function(){var t=this.sortItem,e=this.parsedData,n=this.sortAscending,a=e;return"Name"===t?a.sort(function(t,e){return t.Name.localeCompare(e.Name)}):a.sort(function(t,e){return p(t.Phone)-p(e.Phone)}),n?a:a.reverse()}}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table"},[n("div",{staticClass:"table__heading"},[n("div",{staticClass:"table-row"},[n("div",[n("div",{staticClass:"table-cell__name",on:{click:function(e){return t.addSorting("Name")}}},[t._v("\n                Имя\n            ")]),t._v(" "),n("div",{staticClass:"table-cell__phone",on:{click:function(e){return t.addSorting("Phone")}}},[t._v("\n                Телефон\n            ")])])])]),t._v(" "),n("div",{staticClass:"table__body"},t._l(t.parsedData,function(t){return n("table-row",{key:t.ID,attrs:{item:t}})}),1)])},staticRenderFns:[]};var _=[{ID:1,Name:"Марина",Phone:"+ 7 923 232 44 41",Director:null},{ID:2,Name:"Петр",Phone:"+ 7 923 232 44 49",Director:null},{ID:3,Name:"Але",Phone:"+ 7 923 232 44 44",Director:null},{ID:4,Name:"Иван",Phone:"+ 7 923 232 44 46",Director:null},{ID:5,Name:"Борис",Phone:"+ 7 923 232 44 40",Director:null}],h={Name:"Имя",Phone:"Телефон"},b={name:"main-page",components:{MainTable:n("VU/8")(v,f,!1,function(t){n("ItoN")},null,null).exports,ContactAddModal:u},created:function(){var t=localStorage.getItem("table-data"),e=JSON.parse(t);if(Array.isArray(e))this.tableData=e;else{localStorage.removeItem("table-data"),this.tableData=_;var n=l()(_);localStorage.setItem("table-data",n)}},updated:function(){this.saveInStorage()},data:function(){return{IsModalOpen:!1,tableHeading:h,tableData:function(){return[]}}},methods:{open:function(){this.IsModalOpen=!0},saveInStorage:function(){var t=l()(this.tableData);localStorage.setItem("table-data",t)},save:function(t){var e=s()({},t,{ID:this.tableData.length+1});this.tableData.push(e),this.IsModalOpen=!1},close:function(){this.IsModalOpen=!1}}},D={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-page"},[n("ui-button",{staticClass:"main-page__open-modal",on:{click:t.open}},[t._v("Добавить")]),t._v(" "),n("main-table",{attrs:{items:t.tableData,tableHeading:t.tableHeading}}),t._v(" "),t.IsModalOpen?n("contact-add-modal",{attrs:{contacts:t.tableData},on:{save:t.save,close:t.close}}):t._e()],1)},staticRenderFns:[]};var g={name:"App",components:{MainPage:n("VU/8")(b,D,!1,function(t){n("6FO5")},null,null).exports}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("main-page")],1)},staticRenderFns:[]};var I=n("VU/8")(g,C,!1,function(t){n("pydT")},null,null).exports,N=n("4RmS"),y=n.n(N),k={render:function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"ui-button",on:{click:this.click}},[this._t("default")],2)},staticRenderFns:[]};var P=n("VU/8")({name:"ui-button",methods:{click:function(){this.$emit("click")}}},k,!1,function(t){n("CIo/")},null,null).exports,w={name:"ui-field",props:{title:{type:String,required:!0}}},A={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ui-field"},[e("div",{staticClass:"ui-field__title"},[this._v(this._s(this.title))]),this._v(" "),e("div",{staticClass:"ui-field__input"},[this._t("default")],2)])},staticRenderFns:[]};var F=n("VU/8")(w,A,!1,function(t){n("XH3I")},null,null).exports,$={name:"ui-input",components:{MaskedInput:n("4q2C").a},props:{placeholder:{type:String,default:null},numeric:{type:Boolean,default:!1}},data:function(){return{value:""}},watch:{value:{immediate:!0,handler:function(t,e){if(!this.numeric){var n=new RegExp("[^a-я|\\s]");!t.match(n)||(this.value=e)}this.$emit("update",t)}}}},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui-input"},[t.numeric?n("masked-input",{attrs:{mask:"\\+\\7 911 111 11 11",placeholder:t.placeholder},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}):n("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],attrs:{placeholder:t.placeholder},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}})],1)},staticRenderFns:[]};var R=n("VU/8")($,x,!1,function(t){n("pFRm")},null,null).exports,S={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui-modal__outer"},[n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.close,expression:"close"}],staticClass:"ui-modal"},[n("div",{staticClass:"ui-modal__heading"},[n("div",{staticClass:"ui-modal__title"},[t._t("title")],2),t._v(" "),n("div",{staticClass:"ui-modal__close",on:{click:t.close}},[t._v("+")])]),t._v(" "),n("div",{staticClass:"ui-modal__body"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"ui-modal__footer"},[t._t("footer")],2)])])},staticRenderFns:[]};var E=n("VU/8")({name:"ui-modal",data:function(){return{}},methods:{close:function(){this.$emit("close")}}},S,!1,function(t){n("B/lJ")},null,null).exports,V={name:"ui-select",props:{items:{type:Array,required:!0}},data:function(){return{selected:null}},watch:{selected:function(t){this.$emit("update",t)}}},O={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui-select"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selected=e.target.multiple?n:n[0]}}},t._l(t.items,function(e){return n("option",{key:e.ID,domProps:{value:e.ID}},[n("div",{staticClass:"ui-select__option"},[t._v("\n            "+t._s(e.Name)+"\n          ")])])}),0)])},staticRenderFns:[]};var M=n("VU/8")(V,O,!1,function(t){n("ZFe1")},null,null).exports;a.a.component("ui-button",P),a.a.component("ui-field",F),a.a.component("ui-input",R),a.a.component("ui-modal",E),a.a.component("ui-select",M);a.a.use(y.a),a.a.config.productionTip=!1,new a.a({el:"#app",components:{App:I},template:"<App/>"})},XH3I:function(t,e){},ZFe1:function(t,e){},pFRm:function(t,e){},pydT:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a856948ae9e752e56be2.js.map