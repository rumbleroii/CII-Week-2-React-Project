(this.webpackJsonpreact_calculator_ig=this.webpackJsonpreact_calculator_ig||[]).push([[0],{11:function(_,e,t){},4:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_mrith_Documents_react_ig_react_calculator_ig_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_App_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(11),_App_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);function CalcApp(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(C_Users_mrith_Documents_react_ig_react_calculator_ig_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),result=_useState2[0],setResult=_useState2[1];function keypadClick(_){"."===_.target.name&&result.includes(".")||setResult(result+_.target.name)}function clear(){setResult("")}function calculate(){try{setResult(eval(result).toString()),"Infinity"===eval(result).toString()&&setResult("Divide By Zero Error")}catch(_unused){setResult("\u25d8ERROR\u25d8")}}function sin(){setResult(""===result?"":Math.sin(result))}function cos(){setResult(""===result?"":Math.cos(result))}function tan(){setResult(""===result?"":Math.tan(result))}function sqrt(){setResult(""===result?"":Math.sqrt(result))}function fact(){if(""===result)setResult("");else if(result<0)setResult("Error");else if(0===result)setResult(1);else if(result>69)setResult("Computational Limit Reached");else{for(var _=1,e=1;e<=result;e++)_*=e;setResult(_)}}function toggleAdv(){for(var _=document.getElementsByClassName("adv-func"),e=0;e<_.length;e+=1)_[e].style.display="block"}return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1",{children:"Calculator"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"calc-app",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("form",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input",{type:"text",value:result})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"keypad",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{id:"clear",onClick:clear,children:"Clear"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{name:"+",onClick:keypadClick,children:"+"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{name:"7",onClick:keypadClick,children:"7"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{name:"8",onClick:keypadClick,children:"8"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{name:"9",onClick:keypadClick,children:"9"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{name:"-",onClick:keypadClick,children:"-"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{name:"4",onClick:keypadClick,children:"4"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{name:"5",onClick:keypadClick,children:"5"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{name:"6",onClick:keypadClick,children:"6"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{name:"*",onClick:keypadClick,children:"*"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{name:"1",onClick:keypadClick,children:"1"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{name:"2",onClick:keypadClick,children:"2"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{name:"3",onClick:keypadClick,children:"3"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{name:"/",onClick:keypadClick,children:"/"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{name:"0",onClick:keypadClick,children:"0"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{name:".",onClick:keypadClick,children:"."}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{id:"result",onClick:calculate,children:"Result"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a",{href:"#",onClick:toggleAdv,id:"show",children:"Advanced Functions"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"adv-func",style:{display:"none"},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{name:"!",onClick:fact,children:"!"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{name:"sqrt",onClick:sqrt,children:"sqrt"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{name:"**",onClick:keypadClick,children:"^"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{name:"sin",onClick:sin,children:"Sin"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{name:"cos",onClick:cos,children:"Cos"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{name:"tan",onClick:tan,children:"Tan"})]})]})]})}__webpack_exports__.a=CalcApp},6:function(_,e,t){"use strict";t.r(e);t(1);var c=t(3),r=t.n(c),n=t(4),s=t(0);r.a.render(Object(s.jsx)(n.a,{}),document.getElementById("root"))}},[[6,1,2]]]);
//# sourceMappingURL=main.05ac58f5.chunk.js.map