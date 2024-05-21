"use strict";(self.webpackChunkrelica_docs=self.webpackChunkrelica_docs||[]).push([[2926],{4794:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var o=i(4848),t=i(8453);const l={},r="Role Definition Modelling",s={id:"design/theory/quintessential-modelling/modelling-procedures/role-definition-model",title:"Role Definition Modelling",description:"",source:"@site/docs/design/theory/quintessential-modelling/modelling-procedures/role-definition-model.md",sourceDirName:"design/theory/quintessential-modelling/modelling-procedures",slug:"/design/theory/quintessential-modelling/modelling-procedures/role-definition-model",permalink:"/docs/design/theory/quintessential-modelling/modelling-procedures/role-definition-model",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"designSidebar",previous:{title:"Aspect Definition Modelling",permalink:"/docs/design/theory/quintessential-modelling/modelling-procedures/aspect-definition-model"},next:{title:"Relation Definition Modelling",permalink:"/docs/design/theory/quintessential-modelling/modelling-procedures/relation-definition-model"}},d={},c=[];function a(e){const n={h1:"h1",mermaid:"mermaid",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"role-definition-modelling",children:"Role Definition Modelling"}),"\n",(0,o.jsx)(n.mermaid,{value:'flowchart TD\n    SRP[Specify Role Player]\n    DNKPO[Define New Kind of Physical Object]\n    HIST\n    E[End]\n\n    start --\x3e SRP\n    subgraph R[Role]\n        SRP\n        HIST\n    end\n\n    SRP --\x3e|x| DNKPO\n    DNKPO:::external --\x3e|return| HIST\n    SRP --\x3e|finalize| E\n\n    click DNKPO "/docs/design/theory/quintessential-modelling/modelling-procedures/physical-object-definition-model" "This is a tooltip for a link"\n\n    classDef external fill:#f96'})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>s});var o=i(6540);const t={},l=o.createContext(t);function r(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);