(this["webpackJsonp@themesberg/volt-react-dashboard"]=this["webpackJsonp@themesberg/volt-react-dashboard"]||[]).push([[0],{145:function(e,a,t){e.exports=t.p+"static/media/profile-picture-2.487133c5.jpg"},146:function(e,a,t){e.exports=t.p+"static/media/profile-picture-3.9a250e5c.jpg"},147:function(e,a,t){e.exports=t.p+"static/media/profile-picture-4.ccd796b3.jpg"},149:function(e,a,t){e.exports=t.p+"static/media/dandelion-contributor-badge.187f0c59.png"},150:function(e,a,t){e.exports=t.p+"static/media/react-logo-transparent.f7d45c01.svg"},153:function(e,a,t){e.exports=t(411)},158:function(e,a,t){},159:function(e,a,t){},244:function(e,a){},405:function(e,a){},411:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(140),c=t.n(o),l=t(31),i=(t(158),t(159),t(160),t(161),t(22)),s=t(42),m=t(46),u=(t(152),t(17)),d=t(13),p=t(14),b=(t(34),t(412)),f=t(413),g=t(141),h=t(417),x=t(414),E=t(50),v=t(418),N=t(419),j=t(66),w=t.n(j),y=(t(166),t(1),t(143),t(415),t(416),t(420),t(144)),k=(t(56),t(57),t(68)),C=t.n(k),D=(t(86),t(145)),q=t.n(D),O=t(146),I=t.n(O),F=t(147),T=t.n(F),z=(C.a,p.d,q.a,p.h,I.a,p.d,T.a,p.h,t(148),Object(y.create)("https://ipfs.infura.io:5001/api/v0"),t(139)("lzw"),t(149)),A=t.n(z),P=(t(150),[{text:"alphanumericAndSpace",expression:/^[\w\s]+$/,bool:!1},{text:"charRange",expression:/^.{2,64}$/,bool:!1}]);var S=t(151),G=t(139)("lzw"),L=function(e){for(var a=0,t=3735928559;a<e.length;a++)t=Math.imul(t^e.charCodeAt(a),2654435761);return String((t^t>>>16)>>>0)},U=function(){var e=Object(u.e)().search,a=new URLSearchParams(e).get("uuid")||Object(S.uuid)(),t=Object(n.useState)({uuid:a,ipfsPath:"",username:"",fullname:"",adaAmount:1,checkbox:""}),o=Object(m.a)(t,2),c=o[0],l=o[1],p=Object(n.useState)({uuid:!0,ipfsPath:!1,username:!1,fullname:!1,adaAmount:!1,checkbox:!1}),j=Object(m.a)(p,2),y=j[0],k=j[1],C="@".concat(c.username),D=Math.floor(Date.now()/1e3),q=1e6*parseInt(c.adaAmount),O={type:"tx",ttl:180,title:"".concat(C," - dandelion contributor"),description:"Dandelion Contributor IDNFT minting tx",onSuccessURL:"".concat("","/#/signin"),outputs:{addr1qxyh3m7vwdw79rw97m0lghjxhhk9pjmsn6dfe2ms2m043ppvrzdp4wcghqx83fez83rz9t0lzjtqn3ug5ujnuugq4jpq39tkw2:[{quantity:"".concat(q),policyId:"ada",assetName:"ada"}]},mints:[{script:{issuers:[{accountIndex:0,addressIndex:0}],beforeSlotOffset:300},assets:[{assetName:C,quantity:"1"}]}],metadata:{721:{0:Object(s.a)({},C,{url:"contrib.dandelion.link",name:"Dandelion Contributor IDNFT",author:["Dandelion Contrib Portal <contrib@dandelion.link>"],image:["ipfs://bafybeihbx6ixbcb3qwsq7qtrao65czojfsmahvgx3z5dc6verivf4356","va"],version:"1.0",mediaType:"image/png",files:[{name:"Dandelion Contributor Badge",mediaType:"image/png",src:["ipfs://bafybeihbx6ixbcb3qwsq7qtrao65czojfsmahvgx3z5dc6verivf4356","va"],sha256:""}]})},7368:{0:Object(s.a)({},C,{avatar:{src:["ipfs://bafybeihbx6ixbcb3qwsq7qtrao65czojfsmahvgx3z5dc6verivf4356","va"]},iss:"https://contrib.dandelion.link",aud:["https://dandelion.link"],iat:String(D),nbf:String(D),sub:c.uuid,id:L("".concat(c.username,"}")),name:c.fullname,dom:"dandelionlink",extras:{url:"contrib.dandelion.link",name:"Dandelion Contributor IDNFT",author:["Dandelion Contrib Portal <contrib@dandelion.link>"]}})}}};console.log({values:c,gcCodeTemplate:O});var I,F=function(e){return function(a){l(Object(i.a)(Object(i.a)({},c),{},Object(s.a)({},e,a.target.value)));var t,n=function(e){for(var a=!0,t=0;t<e.length;t++){if(!e[t].bool){a=!1;break}}return a}((t=a.target.value,P.map((function(e){return e.expression.test(t)?e.bool=!0:e.bool=!1,e}))));k(Object(i.a)(Object(i.a)({},y),{},Object(s.a)({},e,n)))}},T=y.username&&y.checkbox&&null!==c.uuid;return r.a.createElement("main",null,r.a.createElement("section",{className:"d-flex align-items-center my-5 mt-lg-6 mb-lg-5"},r.a.createElement(b.a,null,r.a.createElement("p",{className:"text-center"},r.a.createElement(d.a,{className:"me-2"})," Welcome to Dandelion Contrib Portal!"),r.a.createElement(f.a,{className:"justify-content-center form-bg-image",style:{backgroundImage:"url(".concat(w.a,")")}},r.a.createElement("div",{className:"w-250 fmxw-250"},r.a.createElement("img",{src:A.a,alt:"Logo"})),r.a.createElement(g.a,{xs:12,className:"d-flex align-items-center justify-content-center"},r.a.createElement("div",{className:"mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500"},r.a.createElement("div",{className:"text-center text-md-center mb-4 mt-md-0"},r.a.createElement("h4",{className:"mb-0"},"Mint a Dandelion Contributor IDNFT")),r.a.createElement("p",{className:"text-left"},r.a.createElement(d.a,{className:"me-2"})," The IDNFT is minted using your own wallet's private keys, which will make any contributor IDNFT to have a different PolicyID. In order for us to validate them, at least 1 ADA (minUTxO protocol parameter) needs to be sent to our validation address in the minting transaction."),r.a.createElement("p",{className:"text-left"},r.a.createElement(d.a,{className:"me-2"})," Currently only GameChanger wallet is supported as it was the easiest one to integrate. Give it a try!"),r.a.createElement(h.a,{className:"mt-4"},r.a.createElement(h.a.Group,{id:"uuid",className:"mb-4"},r.a.createElement(h.a.Label,null,"Contributor ID"),r.a.createElement(x.a,null,r.a.createElement(x.a.Text,{id:"inputGroupPrepend"},"#"),r.a.createElement(h.a.Control,{autoFocus:!0,required:!0,disabled:!0,type:"text",defaultValue:a})))),r.a.createElement(h.a,{className:"mt-4"},r.a.createElement(h.a.Group,{id:"username",className:"mb-4"},r.a.createElement(h.a.Label,null,"Username/Nickname/Handle"),r.a.createElement(x.a,null,r.a.createElement(x.a.Text,{id:"inputGroupPrepend"},"@"),r.a.createElement(h.a.Control,{onChange:F("username"),autoFocus:!0,required:!0,type:"text",placeholder:"FancyFlower42"})))),r.a.createElement(h.a,{className:"mt-4"},r.a.createElement(h.a.Group,{id:"fullname",className:"mb-4"},r.a.createElement(h.a.Label,null,"Full Name (optional)"),r.a.createElement(x.a,null,r.a.createElement(h.a.Control,{onChange:F("fullname"),autoFocus:!0,type:"text",placeholder:""}))),r.a.createElement(E.a,{type:"checkbox",className:"d-flex mb-4"},r.a.createElement(E.a.Input,{onChange:(I="checkbox",function(e){k(Object(i.a)(Object(i.a)({},y),{},Object(s.a)({},I,e.target.checked)))}),required:!0,id:"terms",className:"me-2"}),r.a.createElement(E.a.Label,{htmlFor:"terms"},"I do agree to validate ",r.a.createElement(v.a.Link,null," this IDNFT ")," as Dandelion Contributor by sending",r.a.createElement(h.a.Group,{id:"adaAmount",className:"mb-4"},r.a.createElement(x.a,{className:"mb-3"},r.a.createElement(x.a.Text,null,"$ADA"),r.a.createElement(h.a.Control,{required:!0,onChange:F("adaAmount"),autoFocus:!0,type:"number",defaultValue:"1"}))))),r.a.createElement(N.a,{disabled:!T,onClick:function(e){e.preventDefault(),G.compress(O).then((function(e){window.location.href="https://wallet.gamechanger.finance/api/1/tx/".concat(e)}))},variant:"primary",type:"submit",className:"w-100"},"Contribute"))))))))};c.a.render(r.a.createElement(l.a,null,r.a.createElement(U,null)),document.getElementById("root"))},66:function(e,a,t){e.exports=t.p+"static/media/signin.58ee1d5a.svg"},68:function(e,a,t){e.exports=t.p+"static/media/profile-picture-1.4d26e151.jpg"},86:function(e,a,t){e.exports=t.p+"static/media/profile-cover.9992e0ee.jpg"}},[[153,1,2]]]);
//# sourceMappingURL=main.acc74245.chunk.js.map