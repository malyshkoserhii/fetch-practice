(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(e,n,t){},QfWi:function(e,n,t){"use strict";t.r(n);t("L1EO"),t("JBxO"),t("FdtR");var r="39b8da748fcd4a928a1eef796d01c757";var l=function(e){return fetch("https://newsapi.org/v2/everything?q="+e+"&language=en&pageSize=20&apiKey="+r,{headers:{Authorization:r}}).then((function(e){return e.json()})).then((function(e){return e.articles}))},a=t("l8Ea"),o=t.n(a),u={articlesContainer:document.querySelector(".js-articles")};var c=function(e){var n=o()(e);u.articlesContainer.insertAdjacentHTML("beforeend",n)},i={articlesContainer:document.querySelector(".js-articles"),searchForm:document.querySelector(".js-search-form")};i.searchForm.addEventListener("submit",(function(e){e.preventDefault();var n=e.currentTarget,t=n.elements.query.value;i.articlesContainer.innerHTML="",n.reset(),l(t).then(c)}))},l8Ea:function(e,n,t){var r=t("mp5j");e.exports=(r.default||r).template({1:function(e,n,t,r,l){var a,o=null!=n?n:e.nullContext||{},u=e.hooks.helperMissing,c=e.escapeExpression,i=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'<li>\r\n    <img src="'+c("function"==typeof(a=null!=(a=i(t,"urlToImage")||(null!=n?i(n,"urlToImage"):n))?a:u)?a.call(o,{name:"urlToImage",hash:{},data:l,loc:{start:{line:3,column:14},end:{line:3,column:28}}}):a)+'" alt="" width="320">\r\n    <h2>\r\n        <a href="'+c("function"==typeof(a=null!=(a=i(t,"url")||(null!=n?i(n,"url"):n))?a:u)?a.call(o,{name:"url",hash:{},data:l,loc:{start:{line:5,column:17},end:{line:5,column:24}}}):a)+'" target="_blank" rel="noopener noreferrer">'+c("function"==typeof(a=null!=(a=i(t,"title")||(null!=n?i(n,"title"):n))?a:u)?a.call(o,{name:"title",hash:{},data:l,loc:{start:{line:5,column:68},end:{line:5,column:77}}}):a)+"</a>\r\n    </h2>\r\n</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,r,l){var a;return null!=(a=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(t,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l,loc:{start:{line:1,column:0},end:{line:8,column:9}}}))?a:""},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.f5888dcb818bda13f729.js.map