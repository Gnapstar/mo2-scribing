(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{327:function(e,t,l){"use strict";l.d(t,"a",(function(){return r}));var r={methods:{schoolColor:function(e){return"Ecumenical"===e?"text-ecumenical":"Spiritism"===e?"text-spiritism":"Necromancy"===e?"text-necromancy":"Elementalism"===e?"text-elementalism":"text-dark"},chanceColor:function(e){return"background-color: hsl(".concat(120-120*(1-e/100),", 60%, 60%); color: #000000;")},formatPrice:function(e){if(!e)return"-";var t=Math.floor(e/100),l=e>=100?e%100:e,output="";return t>0&&(output+=t+"g"),t>0&&l>0&&(output+=" "),l>0&&(output+=l+"s"),output}}}},328:function(e,t,l){var content=l(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(108).default)("59fe96d0",content,!0,{sourceMap:!1})},329:function(e,t,l){"use strict";l(328)},330:function(e,t,l){var r=l(107)(!1);r.push([e.i,".col-shrink{width:1%;white-space:nowrap}",""]),e.exports=r},333:function(e,t,l){"use strict";l.r(t);l(5),l(4),l(6),l(3),l(7);var r=l(23),o=l(0),c=(l(1),l(49),l(14),l(2),l(162),l(130),l(69));function n(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,l)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h={name:"LevelingPage",mixins:[l(327).a],data:function(){return{showAllLevels:!1,experiencePerScroll:90,costs:{scribeBook:2e3},levelFields:[{key:"from",class:"col-shrink text-right"},{key:"to",class:"col-shrink text-right"},{key:"experience",class:"text-right"},{key:"cheapestScroll",class:"text-right"},{key:"scrollsForLevel",class:"text-right"},{key:"costForLevel",class:"text-right"},{key:"costToLevel",class:"text-right"}],scrollsFields:[{key:"spell"},{key:"school"},{key:"min",class:"col-shrink text-right"},{key:"max",class:"col-shrink text-right"},{key:"price"}]}},computed:v(v({},Object(c.b)({scribeLevel:"user/getScribeLevel",spells:"spells/getSpells"})),{},{levelTable:function(){var e=this;return Object(r.a)(Array(this.showAllLevels?100:100-this.scribeLevel).keys()).map((function(t){var l=e.showAllLevels?t:e.scribeLevel+t,r=l+1;return{from:l,to:r,experience:e.experienceForLevel(r),cheapestScroll:v(v({},{uuid:e.getUuid(),availableScrolls:e.getAvailableScrolls(r)}),e.cheapestScrollPrice(r)),scrollsForLevel:e.scrollsForLevel(r),costForLevel:e.costForLevel(r),costToLevel:e.costToLevel(r)}}))},scrollsTable:function(){var e=this;return this.spells.filter((function(t){return t.max>=e.scribeLevel}))},costToMaxLevel:function(){var e={book:0,scrolls:0};return this.scribeLevel<70&&(e.book=this.costs.scribeBook),e.scrolls=this.costToLevel(100)-this.costToLevel(this.scribeLevel),e.total=e.book+e.scrolls,e}}),methods:{getUuid:function(){return Math.round(Math.pow(10,10)*Math.random())},experienceForLevel:function(e){return Math.round(10.59*e-5.1)},getLowestPricedScroll:function(e){return e.reduce((function(e,p){return p.price&&Number(p.price)&&p.price<e.price?p:e}),e[0])},getAvailableScrolls:function(e){return this.spells.filter((function(t){return e>=70&&e<=75?t.max>=70:t.max>75}))},cheapestScrollPrice:function(e){return e<=70?{price:0}:this.getLowestPricedScroll(this.getAvailableScrolls(e))},scrollsForLevel:function(e){return(this.experienceForLevel(e)/this.experiencePerScroll).toFixed(2)},costForLevel:function(e){return Math.round(this.scrollsForLevel(e)*this.cheapestScrollPrice(e).price)},costToLevel:function(e){return e<=70||!this.showAllLevels&&e<=this.scribeLevel?0:this.costForLevel(e)+this.costToLevel(e-1)}}},d=(l(329),l(70)),component=Object(d.a)(h,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("b-container",[l("div",{staticClass:"row"},[l("div",{staticClass:"col-12 col-md"},[l("h1",[e._v("Leveling Guide")]),e._v(" "),l("p",[e._v("This section describes how to level scribing from your current level to max. For more information regarding Magic in Mortal Online 2, please check out "),l("a",{staticClass:"text-warning",attrs:{href:"https://steamcommunity.com/sharedfiles/filedetails/?id=2433160355",target:"_blank"}},[e._v("Billbonty's Guide to Magic")]),e._v(".")])]),e._v(" "),l("div",{staticClass:"col-12 col-md-auto"},[l("div",{staticClass:"card mb-2"},[l("div",{staticClass:"card-header text-nowrap"},[e._v("\n          Cost from "+e._s(e.scribeLevel)+" to 100\n        ")]),e._v(" "),l("div",{staticClass:"card-body",class:{"p-0":e.costToMaxLevel.book}},[e.costToMaxLevel.book?l("table",{staticClass:"table table-sm mb-0"},[l("thead",[l("tr",[l("th",[e._v("Item")]),e._v(" "),l("th",[e._v("Cost")])])]),e._v(" "),l("tbody",[l("tr",[l("td",[e._v("Book")]),e._v(" "),l("td",[e._v(e._s(e.formatPrice(e.costToMaxLevel.book)))])]),e._v(" "),l("tr",[l("td",[e._v("Scrolls")]),e._v(" "),l("td",[e._v(e._s(e.formatPrice(e.costToMaxLevel.scrolls)))])])]),e._v(" "),l("tfoot",[l("tr",[l("th",[e._v("Total")]),e._v(" "),l("th",[e._v(e._s(e.formatPrice(e.costToMaxLevel.total)))])])])]):[e._v("\n            "+e._s(e.formatPrice(e.costToMaxLevel.total))+"\n          ")]],2)])])]),e._v(" "),l("b-tabs",{attrs:{"content-class":"mt-3"}},[l("b-tab",{attrs:{title:"Leveling Table",active:""}},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-12 col-md"},[l("p",[e._v("\n            Leveling scribing is a costly process that can be broken down into three parts. Read the scribing book to level 70, then scribe Greater Heal or Mental Healing to 75, and finish it off by scribing any of the available scrolls to 100 (Resurrect can be used from 75-100 and is available in the vendor for 10g/each).\n          ")])]),e._v(" "),l("div",{staticClass:"col-12 col-md-auto d-flex align-items-end"},[l("b-form-checkbox",{staticClass:"mb-2",model:{value:e.showAllLevels,callback:function(t){e.showAllLevels=t},expression:"showAllLevels"}},[e._v("\n            Show all levels\n          ")])],1)]),e._v(" "),e.levelTable.length>0?l("b-table",{attrs:{items:e.levelTable,fields:e.levelFields,small:"",striped:"",hover:"",responsive:""},scopedSlots:e._u([{key:"cell(cheapestScroll)",fn:function(data){return[data.item.cheapestScroll.price?[l("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"info-"+data.item.cheapestScroll.uuid,expression:"`info-${data.item.cheapestScroll.uuid}`"}],staticClass:"p-0 text-warning",attrs:{variant:"link"}},[e._v("\n              "+e._s(e.formatPrice(data.item.cheapestScroll.price))+"\n            ")]),e._v(" "),l("b-modal",{attrs:{id:"info-"+data.item.cheapestScroll.uuid,title:"Available Scrolls","ok-only":"","hide-header-close":"","header-class":"d-flex justify-content-center","body-class":"p-0"}},[l("table",{staticClass:"table table-hover mb-0"},[l("thead",[l("tr",[l("th",[e._v("Scroll")]),e._v(" "),l("th",[e._v("Min")]),e._v(" "),l("th",[e._v("Max")]),e._v(" "),l("th",[e._v("Cost")])])]),e._v(" "),l("tbody",e._l(data.item.cheapestScroll.availableScrolls,(function(t,r){return l("tr",{key:"scroll-"+r,class:{"bg-warning":t.price===data.item.cheapestScroll.price}},[l("td",[e._v(e._s(t.spell))]),e._v(" "),l("td",[e._v(e._s(t.min))]),e._v(" "),l("td",[e._v(e._s(t.max))]),e._v(" "),l("td",[e._v(e._s(e.formatPrice(t.price)))])])})),0)])])]:l("span",[e._v(e._s(e.formatPrice(data.item.cheapestScroll.price)))])]}},{key:"cell(costForLevel)",fn:function(data){return[e._v("\n          "+e._s(e.formatPrice(data.item.costForLevel))+"\n        ")]}},{key:"cell(costToLevel)",fn:function(data){return[e._v("\n          "+e._s(e.formatPrice(data.item.costToLevel))+"\n        ")]}}],null,!1,2637153639)}):l("b-alert",{attrs:{variant:"success",show:""}},[e._v("\n        Amazing! You've maxed the Scribing profession!\n      ")])],1),e._v(" "),l("b-tab",{attrs:{title:"Scrolls"}},[l("p",[e._v("\n        In order to level scribing, you need to scribe a scroll with a greater max chance than your current level. The table belows shows which scrolls you can use to level scribing further.\n      ")]),e._v(" "),e.scrollsTable.length>0&&e.scribeLevel<100?l("b-table",{attrs:{items:e.scrollsTable,fields:e.scrollsFields,small:"",striped:"",hover:"",responsive:""},scopedSlots:e._u([{key:"cell(school)",fn:function(data){return[l("span",{staticClass:"text-left text-nowrap pr-3",class:e.schoolColor(data.item.school)},[e._v("\n            "+e._s(data.item.school)+"\n          ")])]}},{key:"cell(price)",fn:function(data){return[l("span",[e._v(e._s(e.formatPrice(data.item.price)))])]}}],null,!1,2311669587)}):l("b-alert",{attrs:{variant:"success",show:""}},[e._v("\n        Amazing! You've maxed the Scribing profession!\n      ")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);