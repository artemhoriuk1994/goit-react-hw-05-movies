"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[770],{9770:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var r,i,s=t(885),l=t(2791),u=t(1087),c=t(6600),a=t(7689),o=t(168),d=t(6444),f=d.ZP.img(r||(r=(0,o.Z)(["\nwidth: 200px;\ndisplay: block;\nmargin-right: 10px"]))),h=d.ZP.li(i||(i=(0,o.Z)(["\ndisplay: flex;\nmargin: 20px;"]))),x=t(1766),m=t(184),p=function(e){var n=e.movies,t=e.query,r=(0,a.TH)(),i=n.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())}));return(0,m.jsx)("main",{children:i.length>0&&(0,m.jsx)("ul",{children:n.map((function(e){var n=e.id,t=e.title,i=e.poster_path;return(0,m.jsxs)(h,{children:[(0,m.jsx)(f,{src:null!==i?c.CL+i:x.Z,alt:t}),(0,m.jsx)(u.rU,{to:"".concat(n),state:{from:r},children:(0,m.jsx)("p",{children:t})})]},n)}))})})},j=t(1413),v=t(887);var g=function(e){var n=e.filter,t=(0,v.cI)(),r=t.register,i=t.handleSubmit,s=t.reset;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("form",{onSubmit:i((function(e){n(e.text),s()})),children:[(0,m.jsx)("input",(0,j.Z)({placeholder:"Find your film"},r("text"))),(0,m.jsx)("button",{type:"submit",children:"Search"})]}),(0,m.jsx)(a.j3,{})]})};var b=function(){var e,n=(0,l.useState)([]),t=(0,s.Z)(n,2),r=t[0],i=t[1],a=(0,u.lr)(),o=(0,s.Z)(a,2),d=o[0],f=o[1],h=null!==(e=d.get("query"))&&void 0!==e?e:"";return(0,l.useEffect)((function(){h&&(0,c.VD)(h).then((function(e){i(e)}))}),[h]),(0,m.jsxs)("main",{children:[(0,m.jsx)(g,{filter:function(e){f(""!==e?{query:e}:{})}}),(0,m.jsx)(l.Suspense,{fallback:(0,m.jsx)("div",{children:"Loading ..."}),children:(0,m.jsx)(p,{movies:r,query:h})})]})}}}]);
//# sourceMappingURL=770.1fb8930f.chunk.js.map