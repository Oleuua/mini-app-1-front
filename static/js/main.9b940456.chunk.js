(this["webpackJsonpmini-app-1-front"]=this["webpackJsonpmini-app-1-front"]||[]).push([[0],{12:function(e,t,c){e.exports={btnConnect:"styles_btnConnect__3mPmg",btnGallery:"styles_btnGallery__zO4WC",btnCreate:"styles_btnCreate__3G78J",input:"styles_input__3_uIT",logo:"styles_logo__3FzU_",group:"styles_group__1Uckh",transparentBackground:"styles_transparentBackground__25V-H",mb1:"styles_mb1__T65VD",contentCenter:"styles_contentCenter__2N8qK",textCenter:"styles_textCenter__gS9pi",w25:"styles_w25__2ElOr"}},125:function(e,t,c){},127:function(e,t,c){},128:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(27),a=c.n(s),r=c(22),i=c.n(r),l=c(21),o=c(24),j=c(132),d=c(6),b=(c(124),c(125),c(25)),C=c(30),u=Object(C.b)({name:"modalSlice",initialState:{showedModal:null},reducers:{setShowedModal:function(e,t){e.showedModal=t.payload}}}),h=u.actions.setShowedModal,O=u.reducer,m="vkMiniApp",x=Object(C.a)({reducer:{modal:O},preloadedState:function(){try{var e=atob(localStorage.getItem(m));if(null===e)return;return JSON.parse(e)}catch(t){return void console.warn(t)}}()});x.subscribe((function(){return function(e){try{var t=btoa(JSON.stringify(e));localStorage.setItem(m,t)}catch(c){console.warn(c)}}(Object(b.a)(Object(b.a)({},x.getState()),{},{modal:{showModal:null}}))}));for(var f=x,_=c(2),p=function(e){var t=e.id,c=e.go,n=e.fetchedUser;return Object(_.jsxs)(d.p,{id:t,children:[Object(_.jsx)(d.q,{children:"Example"}),n&&Object(_.jsx)(d.k,{header:Object(_.jsx)(d.l,{mode:"secondary",children:"User Data Fetched with VK Bridge"}),children:Object(_.jsx)(d.f,{before:n.photo_200?Object(_.jsx)(d.c,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:"",children:"".concat(n.first_name," ").concat(n.last_name)})}),Object(_.jsx)(d.k,{header:Object(_.jsx)(d.l,{mode:"secondary",children:"Navigation Example"}),children:Object(_.jsx)(d.i,{children:Object(_.jsx)(d.d,{stretched:!0,size:"l",mode:"secondary",onClick:c,"data-to":"persik",children:"Show me the Persik, please"})})})]})},g=c.p+"static/media/persik.ae9f0072.png",y=(c(127),function(e){return Object(_.jsxs)(d.p,{id:e.id,children:[Object(_.jsx)(d.q,{left:Object(_.jsx)(d.r,{onClick:e.go,"data-to":"home"}),children:"Persik"}),Object(_.jsx)("img",{className:"Persik",src:g,alt:"Persik The Cat"})]})}),w=c(29),v=c(129),k=c(130),N=c(12),S=c.n(N),M=function(){return Object(_.jsxs)("svg",{width:"229",height:"229",viewBox:"0 0 229 229",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(_.jsx)("rect",{width:"229",height:"229",rx:"17.3022",fill:"white"}),Object(_.jsx)("ellipse",{cx:"111.956",cy:"115.536",rx:"93.1267",ry:"92.6178",fill:"#EBEDF0"}),Object(_.jsx)("path",{d:"M78.3689 168.442C78.3689 181.089 102.212 194.904 89.5644 194.904C76.9171 194.904 30.0244 189.741 30.0244 177.093C30.0244 164.446 76.9171 129.767 89.5644 129.767C102.212 129.767 78.3689 155.795 78.3689 168.442Z",fill:"#4B47B2"}),Object(_.jsx)("path",{d:"M104.396 72.7711C104.396 82.9899 97.0395 87.1397 90.1468 93.6355C83.7694 99.6458 72.3761 93.6355 62.9213 93.6355C53.4665 93.6355 39.5286 102.525 33.1513 96.5148C26.2585 90.019 38.2401 72.8121 38.2401 62.5933C38.2401 52.3745 19.8974 42.9618 26.7902 36.4659C33.1675 30.4557 53.4665 43.7644 62.9213 43.7644C72.3761 43.7644 89.8761 34.7009 96.2535 40.7111C103.146 47.207 104.396 62.5523 104.396 72.7711Z",fill:"#4B47B2"}),Object(_.jsx)("path",{d:"M200.502 168.951C200.502 188.624 184.554 204.573 164.88 204.573C145.206 204.573 141.471 188.624 141.471 168.951C141.471 149.277 127.904 125.695 147.578 125.695C167.251 125.695 200.502 149.277 200.502 168.951Z",fill:"#4B47B2"}),Object(_.jsx)("path",{d:"M54.9792 60.4325C55.0995 57.3552 56.174 54.8624 58.2027 52.9541C60.2313 51.0286 63.0593 50.0659 66.6868 50.0659C70.0736 50.0659 72.8157 50.9684 74.9131 52.7736C77.0276 54.5787 78.0849 56.891 78.0849 59.7105C78.0849 63.4239 76.2798 66.3637 72.6695 68.5298C71.0191 69.5098 69.8931 70.4209 69.2913 71.2633C68.6896 72.0885 68.3888 73.1544 68.3888 74.461V76.0083H63.0507L63.0249 74.0484C62.9562 72.2261 63.3172 70.6874 64.108 69.4324C64.8988 68.1602 66.1968 66.9826 68.002 65.8995C69.5836 64.9539 70.6839 64.0514 71.3028 63.1918C71.9217 62.315 72.2311 61.2319 72.2311 59.9425C72.2311 58.5156 71.6982 57.3466 70.6323 56.4354C69.5664 55.5071 68.1567 55.0429 66.4031 55.0429C64.6324 55.0429 63.2055 55.5329 62.1224 56.5128C61.0393 57.4755 60.4376 58.7821 60.3172 60.4325H54.9792ZM68.9045 87.0969C68.1825 87.819 67.2283 88.18 66.0421 88.18C64.8559 88.18 63.8931 87.819 63.1539 87.0969C62.4146 86.3749 62.045 85.4293 62.045 84.2603C62.045 83.0741 62.4146 82.1199 63.1539 81.3979C63.8931 80.6586 64.8559 80.289 66.0421 80.289C67.2283 80.289 68.1825 80.65 68.9045 81.3721C69.6438 82.0941 70.0134 83.0569 70.0134 84.2603C70.0134 85.4293 69.6438 86.3749 68.9045 87.0969Z",fill:"white"}),Object(_.jsx)("path",{d:"M60.9739 149.583H67.2403L66.7246 174.494H61.5154L60.9739 149.583ZM60.1487 183.494C60.1487 182.29 60.5097 181.328 61.2318 180.605C61.971 179.883 62.9424 179.522 64.1458 179.522C65.332 179.522 66.2862 179.883 67.0082 180.605C67.7303 181.328 68.0913 182.29 68.0913 183.494C68.0913 184.663 67.7303 185.608 67.0082 186.33C66.2862 187.052 65.332 187.413 64.1458 187.413C62.9424 187.413 61.971 187.052 61.2318 186.33C60.5097 185.608 60.1487 184.663 60.1487 183.494Z",fill:"white"}),Object(_.jsx)("path",{d:"M180.636 177.219C180.516 180.296 179.442 182.789 177.413 184.697C175.384 186.623 172.556 187.586 168.929 187.586C165.542 187.586 162.8 186.683 160.702 184.878C158.588 183.073 157.531 180.76 157.531 177.941C157.531 174.227 159.336 171.288 162.946 169.122C164.596 168.142 165.722 167.23 166.324 166.388C166.926 165.563 167.227 164.497 167.227 163.19L167.227 161.643L172.565 161.643L172.591 163.603C172.659 165.425 172.298 166.964 171.508 168.219C170.717 169.491 169.419 170.669 167.614 171.752C166.032 172.697 164.932 173.6 164.313 174.46C163.694 175.336 163.384 176.419 163.384 177.709C163.384 179.136 163.917 180.305 164.983 181.216C166.049 182.144 167.459 182.608 169.212 182.608C170.983 182.608 172.41 182.119 173.493 181.139C174.576 180.176 175.178 178.869 175.298 177.219L180.636 177.219ZM166.711 150.554C167.433 149.832 168.387 149.471 169.573 149.471C170.76 149.471 171.722 149.832 172.462 150.554C173.201 151.276 173.571 152.222 173.571 153.391C173.571 154.577 173.201 155.531 172.462 156.253C171.722 156.993 170.76 157.362 169.573 157.362C168.387 157.362 167.433 157.001 166.711 156.279C165.972 155.557 165.602 154.594 165.602 153.391C165.602 152.222 165.972 151.276 166.711 150.554Z",fill:"white"}),Object(_.jsx)("path",{d:"M143.864 100C140.946 100 138.581 97.6349 138.581 94.7174C138.581 93.5373 138.976 92.3911 139.704 91.4617L156.501 69.9981C159.144 66.6216 159.037 61.8497 156.247 58.5942L140.422 40.1322C139.606 39.1797 139.157 37.9664 139.157 36.7118C139.157 33.8091 141.51 31.4561 144.413 31.4561H180.917C183.038 31.4561 184.757 33.1753 184.757 35.2961C184.757 37.4168 183.038 39.1361 180.917 39.1361H160.277C159.381 39.1361 158.165 39.1361 156.629 39.1361C155.093 39.1361 153.621 39.1361 152.213 39.1361C150.971 39.0796 150.303 40.4995 151.115 41.4408L165.783 58.4558C168.604 61.7284 168.701 66.5443 166.015 69.9283L152.562 86.8731C150.753 89.1518 152.376 92.5121 155.285 92.5121C157.717 92.4481 160.213 92.4161 162.773 92.4161H183.749C185.843 92.4161 187.541 94.1138 187.541 96.2081C187.541 98.3023 185.843 100 183.749 100H143.864Z",fill:"#4B47B2",stroke:"#4B47B2",strokeWidth:"3"})]})},B=[0,1,2,3,4,5],D={},z=0;z<6;z++)D["codeField"+z]="";var L=function(e){var t=e.id,c=e.go,s=e.snack,a=Object(o.b)(),r=Object(n.useState)(!0),i=Object(l.a)(r,2),j=i[0],C=i[1],u=Object(n.useState)(Object(b.a)({},D)),O=Object(l.a)(u,2),m=O[0],x=O[1],f=Object(n.useRef)(B.map((function(){return Object(n.createRef)()}))),p=function(e){var t=e.target.value.substring(0,1),c=e.target.name,n=Number.parseInt(c.slice(-1)),s=!!(t.charCodeAt(0)>47&t.charCodeAt(0)<=57),a=m[c].length>t.length;(s||a)&&(x(Object(b.a)(Object(b.a)({},m),{},Object(w.a)({},c,t))),n<5&s&&(n+=1)),f.current[n].current.focus()};Object(n.useEffect)((function(){var e=0;for(var t in m)""!=m[t]&&(e+=1);C(!(6==e))}));var g=B.map((function(e){return Object(_.jsx)("input",{className:S.a.input,name:"codeField"+e,type:"text",onChange:p,value:m["codeField"+e],ref:f.current[e]},e)}));return Object(_.jsxs)(d.p,{id:t,children:[Object(_.jsx)(d.q,{children:"Enigma"}),Object(_.jsx)("div",{className:[S.a.contentCenter,S.a.transparentBackground].join(" "),children:Object(_.jsx)(M,{})}),Object(_.jsxs)(d.e,{className:[S.a.contentCenter,S.a.transparentBackground].join(" "),style:{padding:"1em"},children:[Object(_.jsxs)(d.w,{className:[S.a.contentCenter,S.a.mb1,S.a.textCenter].join(" "),weight:"regular",children:["\u0415\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u043a\u043e\u0434 \u0434\u043b\u044f \u043f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u043a \u0438\u0433\u0440\u0435,",Object(_.jsx)("br",{})," \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0435\u0433\u043e \u0441\u044e\u0434\u0430"]}),Object(_.jsx)("div",{className:[S.a.contentCenter,S.a.mb1].join(" "),style:{justifyContent:"space-around"},children:g}),Object(_.jsx)("div",{className:S.a.contentCenter,children:Object(_.jsx)(d.d,{className:[S.a.btnConnect,S.a.w25].join(" "),size:"l",disabled:j,children:"\u041f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u044c\u0441\u044f \u043a \u0432\u0438\u043a\u0442\u043e\u0440\u0438\u043d\u0435"})})]}),Object(_.jsxs)(d.e,{className:[S.a.contentCenter,S.a.transparentBackground].join(" "),style:{marginTop:"3em"},children:[Object(_.jsx)(d.d,{className:[S.a.btnGallery,S.a.w25].join(" "),size:"l",after:Object(_.jsxs)("div",{style:{display:"flex"},children:[Object(_.jsx)(d.h,{style:{marginRight:".5em",backgroundColor:"#4B47B2",color:"white"},children:"3"}),Object(_.jsx)(v.a,{})]}),onClick:c,"data-to":"mygames",children:"\u041c\u043e\u0438 \u0432\u0438\u043a\u0442\u043e\u0440\u0438\u043d\u044b"}),Object(_.jsx)(d.v,{}),Object(_.jsx)(d.d,{className:[S.a.btnCreate,S.a.w25].join(" "),size:"l",before:Object(_.jsx)(k.a,{}),after:Object(_.jsx)(v.a,{}),onClick:function(){return a(h("createQuiz"))},children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0432\u0438\u043a\u0442\u043e\u0440\u0438\u043d\u0443"})]}),s]})},E=c(18),H=[{date:new Date(2021,7,22),title:"\u041a\u043b\u0430\u0441\u0441\u043d\u0430\u044f \u0438\u0433\u0440\u0430"},{date:new Date(2021,7,8),title:"\u0421\u0443\u043f\u0435\u0440 \u0438\u0433\u0440\u0430"},{date:new Date(2020,9,12),title:"\u0422\u0440\u0443\u0434\u043d\u0430\u044f \u0438\u0433\u0440\u0430"},{date:new Date(2019,4,29),title:"\u0423\u043c\u043d\u0430\u044f \u0438\u0433\u0440\u0430"},{date:new Date(2017,1,1),title:"\u0421\u043c\u0435\u0448\u043d\u0430\u044f \u0438\u0433\u0440\u0430"},{date:new Date(2016,7,13),title:"\u0418\u0433\u0440\u0430 \u0441 \u043e\u0447\u0435\u043d\u044c \u0434\u043b\u0438\u043d\u043d\u044b\u043c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c"},{date:new Date(2016,11,13),title:"\u0420\u0430\u0437\u0432\u0438\u0432\u0430\u044e\u0449\u0430\u044f \u0438\u0433\u0440\u0430"},{date:new Date(2001,10,10),title:"\u0412\u0435\u0441\u0435\u043b\u0430\u044f \u0438\u0433\u0440\u0430"}];function Z(e){var t=e.id,c=e.go,n=e.snack,s=H.map((function(e){return Object(_.jsx)(d.e,{className:[E.card,E.mb1].join(" "),size:"l",mode:"outline",children:Object(_.jsxs)("div",{className:E.cardRowDir,children:[Object(_.jsxs)("div",{className:E.leftSideMygames,children:[Object(_.jsx)(d.w,{className:E.fw600,children:e.title}),Object(_.jsxs)(d.w,{className:[E.fw400,E.textSecondary].join(" "),children:["\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u0437\u0430\u043f\u0443\u0441\u043a ",e.date.toLocaleDateString()]})]}),Object(_.jsx)("div",{className:E.rightSideMygames,children:Object(_.jsx)(d.d,{className:E.btnStart,size:"s",children:"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c"})})]})})}));return Object(_.jsxs)(d.p,{id:t,children:[Object(_.jsx)(d.q,{left:Object(_.jsx)(d.r,{className:E.sferumColor,onClick:c,"data-to":"main"}),children:"\u041c\u043e\u0438 \u0432\u0438\u043a\u0442\u043e\u0440\u0438\u043d\u044b"}),Object(_.jsx)(d.k,{className:E.contentCenter,children:s}),n]})}var I=c(131),F=c(26);function U(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.modal.showedModal})),c=function(){return e(h(null))};return Object(_.jsx)(d.o,{activeModal:t,onClose:c,children:Object(_.jsxs)(d.m,{id:"createQuiz",header:Object(_.jsxs)("div",{children:[Object(_.jsx)(d.n,{left:Object(_.jsx)(d.s,{className:F.sferumColor,onClick:c}),separator:!0,children:"C\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0432\u0438\u043a\u0442\u043e\u0440\u0438\u043d\u044b"}),Object(_.jsx)(d.v,{separator:!0})]}),children:[Object(_.jsxs)(d.k,{children:[Object(_.jsx)(d.j,{top:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0432\u0438\u043a\u0442\u043e\u0440\u0438\u043d\u044b",children:Object(_.jsx)("input",{className:F.input,type:"text"})}),Object(_.jsx)(d.j,{top:"\u041e\u0431\u043b\u043e\u0436\u043a\u0430",children:Object(_.jsx)(d.g,{className:F.sferumColor,before:Object(_.jsx)(d.c,{shadow:!1,size:72,mode:"image",children:Object(_.jsx)(I.a,{className:F.sferumColor})}),children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"})})]}),Object(_.jsx)(d.v,{separator:!0}),Object(_.jsx)("div",{className:F.footer,children:Object(_.jsx)(d.d,{size:"m",className:F.btnCreate,children:" \u0421\u043e\u0437\u0434\u0430\u0442\u044c "})})]})})}var V=function(){var e=Object(n.useState)("main"),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(null),r=Object(l.a)(a,2),b=r[0],C=r[1],u=Object(n.useState)(null),h=Object(l.a)(u,2),O=h[0],m=h[1],x=Object(n.useState)(Object(_.jsx)(d.t,{size:"large"})),g=Object(l.a)(x,2),w=g[0],v=g[1];Object(n.useEffect)((function(){i.a.subscribe((function(e){var t=e.detail,c=t.type,n=t.data;if("VKWebAppUpdateConfig"===c){var s=document.createAttribute("scheme");s.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(s)}})),function(){var e=!1;i.a.send("VKWebAppGetUserInfo").then((function(t){e=!0,C(t),v(null)})),setTimeout((function(){e||(v(null),m((function(){return Object(_.jsx)(d.u,{onClose:function(){return m(null)},before:Object(_.jsx)(d.c,{size:24,children:Object(_.jsx)(j.a,{fill:"#e64646",width:24,height:24})}),duration:5e3,children:Object(_.jsxs)(d.w,{children:["\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0441 ",Object(_.jsx)("b",{children:"VK Bridge"})]})})})))}),1e3)}()}),[]);var k=function(e){s(e.currentTarget.dataset.to)};return Object(_.jsx)(o.a,{store:f,children:Object(_.jsx)(d.a,{children:Object(_.jsx)(d.b,{children:Object(_.jsxs)(d.x,{activePanel:c,popout:w,modal:Object(_.jsx)(U,{}),children:[Object(_.jsx)(L,{id:"main",snack:O,go:k}),Object(_.jsx)(Z,{id:"mygames",snack:O,go:k}),Object(_.jsx)(p,{id:"home",fetchedUser:b,go:k}),Object(_.jsx)(y,{id:"persik",go:k})]})})})})};i.a.send("VKWebAppInit"),a.a.render(Object(_.jsx)(V,{}),document.getElementById("root"))},18:function(e,t,c){e.exports={cardRowDir:"styles_cardRowDir__Htebk",leftSideMygames:"styles_leftSideMygames__3ojlI",rightSideMygames:"styles_rightSideMygames__1FgDB",sferumColor:"styles_sferumColor__anQ8D",btnStart:"styles_btnStart__1j3Wh",contentCenter:"styles_contentCenter__3i5LM",mb1:"styles_mb1__3EDzt",textSecondary:"styles_textSecondary__1jx1Y",fw400:"styles_fw400__34vy-",fw600:"styles_fw600__3Fc2X",card:"styles_card__3fmgU"}},26:function(e,t,c){e.exports={footer:"modal_footer__1e3Bm",sferumColor:"modal_sferumColor__1_8CX",btnCreate:"modal_btnCreate__1wcrg",input:"modal_input__3k-D8"}}},[[128,1,2]]]);
//# sourceMappingURL=main.9b940456.chunk.js.map