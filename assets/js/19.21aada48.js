(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{621:function(t,n,s){"use strict";s.r(n);var a=s(12),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("mxdraw.js defines three types of coordinates:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("three.js coordinates (pt1): this coordinate form is returned by default from the point object, that is, the coordinate vector when the three.js object sets the vertex.")])]),t._v(" "),s("li",[s("p",[t._v("screen coordinates (pt2): the coordinates relative to the windows window, with the Y axis facing down and the origin of the coordinates in the upper left corner.")])]),t._v(" "),s("li",[s("p",[t._v("document coordinates (pt3): are drawing coordinates.")])]),t._v(" "),s("li",[s("p",[t._v("CAD coordinates (pt4): are CAD drawing coordinates")])])]),t._v(" "),s("p",[t._v("The following code shows how to convert between these three coordinate systems:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Mx "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mxdraw"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" getPoint "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Mx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MrxDbgUiPrPoint")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// THREE.JS coordinates")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" pt1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" getPoint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Convert THREE.JS coordinates to screen coordinates")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" pt2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Mx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MxFun"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("screenCoordLong2World")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pt1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pt1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pt1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("z"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Convert THREE.JS coordinates to document coordinates")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" pt3 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Mx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MxFun"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("worldCoord2Doc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pt1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pt1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pt1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("z"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If the coordinate of THREE.JS to CAD document is not the value you expected, then use the docCoord2Cad method instead of worldCoord2Doc")]),t._v("\npt3 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Mx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MxFun"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("worldCoord2Doc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pt1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pt1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pt1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("z"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Convert document coordinates to screen coordinates")]),t._v("\npt2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Mx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MxFun"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docCoord2Screen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pt3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pt3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pt3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("z"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Convert screen coordinates to document coordinates")]),t._v("\npt3 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Mx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MxFun"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("screenCoord2Doc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pt2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pt2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pt2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("z"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Conversion of document coordinates to CAD drawing coordinates")]),t._v("\npt4 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Mx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MxFun"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docCoord2Cad")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pt3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pt3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pt3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("z"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Conversion of CAD drawing coordinates to document coordinates")]),t._v("\npt3 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Mx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MxFun"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cadCoord2Doc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pt4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pt4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pt4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("z"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Convert document coordinates to THREE.JS coordinates")]),t._v("\npt1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Mx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MxFun"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docCoord2World")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pt3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pt3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pt3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("z"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Convert screen coordinates to THREE.JS coordinates")]),t._v("\npt1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Mx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MxFun"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("screenCoord2World")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pt2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pt2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pt2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("z"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Regarding unit conversion between different coordinate systems:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Mx "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mxdraw"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Convert length in screen coordinates to length in THREE.JS coordinates")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" len "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Mx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MxFun"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("screenCoordLong2World")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("36")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Convert length in THREE.JS coordinates to length in screen coordinates")]),t._v("\nlen"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Mx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MxFun"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("worldCoordLong2Doc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("len"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Convert length in screen coordinates to length in document coordinates")]),t._v("\nlen "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Mx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MxFun"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("screenCoordLong2Doc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("len"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  Convert length in document coordinates to length in screen coordinates")]),t._v("\nMx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MxFun"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docCoordLong2Screen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("len"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  Convert length in document coordinates to length in THREE.JS coordinates")]),t._v("\nMx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MxFun"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docCoordLong2Screen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("len"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);