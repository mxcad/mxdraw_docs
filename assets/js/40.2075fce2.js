(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{644:function(t,e,a){"use strict";a.r(e);var s=a(12),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"dom-resize-listener-tool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dom-resize-listener-tool"}},[t._v("#")]),t._v(" DOM Resize Listener Tool")]),t._v(" "),a("p",[t._v("mxdraw.js by default listens to window size changes to redraw the CAD drawing, but often we need to redraw the CAD drawing based on changes in the size of the DOM.")]),t._v(" "),a("p",[a("code",[t._v("Mx.useCanvasResizeListener")]),t._v(" uses a canvas size adjustment listener (only effective when called in the callback of "),a("code",[t._v("Mx.MxFun.createMxObject")]),t._v("). Without calling this method, it defaults to using a window listener to automatically adjust the canvas size. Changes in the size of the canvas or its parent element will not be automatically adjusted.")]),t._v(" "),a("ul",[a("li",[t._v("The calling method loads the dependency package "),a("a",{attrs:{href:"https://www.npmjs.com/package/element-resize-event-polyfill",target:"_blank",rel:"noopener noreferrer"}},[t._v("element-resize-event-polyfill"),a("OutboundLink")],1),t._v(", which can listen to changes in the size of DOM elements through the "),a("code",[t._v("dom.addEventListener('resize', callback)")]),t._v(" method.")]),t._v(" "),a("li",[t._v("After calling the "),a("code",[t._v("Mx.MxFun.createMxObject")]),t._v(" method, the parent element of "),a("code",[t._v("canvas")]),t._v(" will be used as the reference size for automatic adjustment by default. Therefore, the "),a("code",[t._v("canvas")]),t._v(" and "),a("code",[t._v("canvasParent")]),t._v(" should be treated as a whole when adapting the size.")])]),t._v(" "),a("h2",{attrs:{id:"how-to-implement-on-demand-importing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-implement-on-demand-importing"}},[t._v("#")]),t._v(" How to Implement on-demand Importing")]),t._v(" "),a("ul",[a("li",[t._v("Exported by file location:")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[t._v("Directly import files with "),a("code",[t._v('import MxFun from "mxdraw/dist/lib/MxModule/MxFun"')]),t._v(" to achieve on-demand importing.")])]),a("ul",[a("li",[t._v("Use babel to automatically import on demand:")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[t._v("Use the babel plugin "),a("code",[t._v("babel-plugin-import")]),t._v(" to achieve on-demand importing.")]),t._v(" "),a("p",[t._v("Install "),a("code",[t._v("npm i babel-plugin-import -D")]),t._v(", then find or create the "),a("code",[t._v(".babelrc")]),t._v(" file at the root of the project and add the following content:")])]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"plugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"import"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"libraryName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mxdraw"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"libraryDirectory"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dist/lib/MxModule"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"camel2UnderlineComponentName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"camel2DashComponentName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" MxFun "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mxdraw"')]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);