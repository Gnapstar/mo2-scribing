(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{327:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={methods:{schoolColor:function(e){return"Ecumenical"===e?"text-ecumenical":"Spiritism"===e?"text-spiritism":"Necromancy"===e?"text-necromancy":"Elementalism"===e?"text-elementalism":"text-dark"},chanceColor:function(e){return"background-color: hsl(".concat(120-120*(1-e/100),", 60%, 60%); color: #000000;")},formatPrice:function(e){if(!e)return"-";var t=Math.floor(e/100),n=e>=100?e%100:e,output="";return t>0&&(output+=t+"g"),t>0&&n>0&&(output+=" "),n>0&&(output+=n+"s"),output}}}},331:function(e,t,n){"use strict";n.r(t);n(5),n(4),n(2),n(6),n(7);var r=n(0),c=n(23),o=(n(15),n(14),n(1),n(49),n(3),n(69));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h={name:"ChancePage",mixins:[n(327).a],data:function(){var e=this;return{selectedSchools:[],fields:[{key:"spell",stickyColumn:!0},"school"].concat(Object(c.a)(Object(c.a)(Array(101).keys()).map((function(t){return{key:"".concat(t),class:"text-center",tdAttr:function(t,n,r){return{style:e.chanceColor(t)}}}}))))}},computed:f(f({},Object(o.b)({scribeLevel:"user/getScribeLevel",schools:"spells/getSchools"})),{},{spells:function(){return this.$store.getters["spells/getSpellsBySchools"](this.selectedSchools)},items:function(){var e=JSON.parse(JSON.stringify(this.spells)),t=Object(c.a)(Array(101).keys());return e.forEach((function(e){t.forEach((function(t){if("number"!=typeof e.min||"number"!=typeof e.max)return e[t]="-",!0;var n=(t-e.min)*(100/(e.max-e.min));n=Math.max(n,0),n=Math.min(n,100),e[t]=Math.round(n)}))})),e}}),mounted:function(){var e=this;this.$nextTick((function(){e.selectedSchools=e.schools}))}},m=h,v=n(70),component=Object(v.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"px-2"},[n("b-container",[n("div",{staticClass:"row align-items-end"},[n("div",{staticClass:"col"},[n("h1",[e._v("Chance Table")]),e._v(" "),n("p",{staticClass:"mb-0"},[e._v("\n          The chance to scribe a certain scroll at a given scribe level.\n        ")])]),e._v(" "),n("div",{staticClass:"col-auto"},[n("b-form-checkbox-group",{attrs:{options:e.schools},model:{value:e.selectedSchools,callback:function(t){e.selectedSchools=t},expression:"selectedSchools"}})],1)])]),e._v(" "),e.items.length>0?n("b-table",{attrs:{fields:e.fields,items:e.items,small:"",striped:"",hover:"",responsive:""},scopedSlots:e._u([{key:"cell(spell)",fn:function(data){return[n("span",{staticClass:"text-left text-nowrap pr-3"},[e._v("\n        "+e._s(data.item.spell)+"\n      ")])]}},{key:"cell(school)",fn:function(data){return[n("span",{staticClass:"text-left text-nowrap pr-3",class:e.schoolColor(data.item.school)},[e._v("\n        "+e._s(data.item.school)+"\n      ")])]}}],null,!1,3211377032)}):n("b-container",[n("b-alert",{attrs:{variant:"warning",show:""}},[e._v("\n      You haven't selected any schools!\n    ")])],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);