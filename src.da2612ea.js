parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss");const e=document.getElementById("new-item"),t=document.getElementsByTagName("button")[0],n=document.getElementById("list"),o=function(e){const t=document.createElement("li"),n=document.createElement("label"),o=document.createElement("input"),l=document.createElement("button"),c=document.createElement("button");return n.innerText=e,o.type="text",l.innerText="Edit",l.className="edit",c.innerText="Delete",c.className="delete",t.appendChild(n),t.appendChild(o),t.appendChild(l),t.appendChild(c),t},l=function(){console.log("Add Item...");const t=o(e.value);n.appendChild(t),s(t),e.value=""},c=function(){console.log("Edit Item..."),console.log("Change 'edit' to 'save'");const e=this.parentNode,t=e.querySelector("input[type=text]"),n=e.querySelector("label");e.classList.contains("editMode")?n.innerText=t.value:t.value=n.innerText,e.classList.toggle("editMode")},i=function(){console.log("Delete Item...");const e=this.parentNode;e.parentNode.removeChild(e)},d=function(){console.log("AJAX Request")};t.onclick=l,t.addEventListener("click",l),t.addEventListener("click",d);const s=function(e){console.log("bind list item events");const t=e.querySelector("button.edit"),n=e.querySelector("button.delete");t.onclick=c,n.onclick=i};
},{"./sass/main.scss":"clu1"}]},{},["Focm"], null)
//# sourceMappingURL=/parcel-project-template/src.da2612ea.js.map