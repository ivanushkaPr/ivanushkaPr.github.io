(this["webpackJsonptr-0.0.5"]=this["webpackJsonptr-0.0.5"]||[]).push([[0],{23:function(n,e,t){n.exports={container:"CreateBoard_container__yjJjj",header:"CreateBoard_header__3w_4W",section:"CreateBoard_section__2VRCP",controls:"CreateBoard_controls__1SwsX"}},33:function(n,e,t){n.exports=t.p+"static/media/close.e95db44f.svg"},34:function(n,e,t){n.exports=t.p+"static/media/close.e5ef77f2.svg"},35:function(n,e,t){n.exports=t.p+"static/media/backbutton.3c0d526e.svg"},36:function(n,e,t){n.exports=t(48)},47:function(n,e,t){},48:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(18),c=t.n(o),i=t(7),s=t(2),l=t(11),u=t(12),d=t(14),p=t(13),b=t(3),m={frontend:{tasks:{"frontend-task-1":{id:"frontend-task-1",content:"remove garbage"},"frontend-task-2":{id:"frontend-task-2",content:"remove goverment"},"frontend-task-3":{id:"frontend-task-3",content:"get a hairstyle"},"frontend-task-4":{id:"frontend-task-4",content:"buy beer"}},columns:{"frontend-column-1":{id:"frontend-column-1",title:"To do",taskIds:["frontend-task-1","frontend-task-2","frontend-task-3","frontend-task-4"]},"frontend-column-2":{id:"frontend-column-2",title:"In progress",taskIds:[]},"frontend-column-3":{id:"frontend-column-3",title:"Done",taskIds:[]}},columnOrder:["frontend-column-1","frontend-column-2","frontend-column-3"]},backend:{tasks:{"backend-task-1":{id:"backend-task-1",content:"remove garbage"},"backend-task-2":{id:"backend-task-2",content:"remove goverment"},"backend-task-3":{id:"backend-task-3",content:"get a hairstyle"},"backend-task-4":{id:"backend-task-4",content:"buy beer"}},columns:{"backend-column-1":{id:"backend-column-1",title:"To do",taskIds:["backend-task-1","backend-task-2","backend-task-3","backend-task-4"]},"backend-column-2":{id:"backend-column-2",title:"In progress",taskIds:[]},"backend-column-3":{id:"backend-column-3",title:"Done",taskIds:[]}},columnOrder:["backend-column-1","backend-column-2","backend-column-3"]}},f=t(4),x=t(17);function g(){var n=Object(b.a)(["\ntext-transform: capitalize;\nfont-weight: bold;\nfont-size: 19px;\nmargin: 0;"]);return g=function(){return n},n}function k(){var n=Object(b.a)(["\npadding: 16px;\nmargin: 8px;\nborder-radius: 2px;\nbackground-color: ",";\nbox-shadow: rgba(0, 0, 0, 0.16) 0px 6px 6px, rgba(0, 0, 0, 0.23) 0px 6px 6px;\ntext-decoration: none;\nbackground-color: rgb(202, 255, 222);\n"]);return k=function(){return n},n}var h=f.a.div(k(),(function(n){return n.isDragging?"lightgreen":"white"})),j=f.a.h3(g()),O=function(n){Object(d.a)(t,n);var e=Object(p.a)(t);function t(){return Object(l.a)(this,t),e.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var n=this;return r.a.createElement(x.b,{draggableId:this.props.task,index:this.props.index},(function(e,t){return r.a.createElement(h,Object.assign({isDragging:t.isDragging},e.draggableProps,e.dragHandleProps,{ref:e.innerRef}),r.a.createElement(j,null," ",n.props.content," "))}))}}]),t}(a.Component);function v(){var n=Object(b.a)(["\npadding: 8px;\ntransition: background-color 0.2s ease;\nbackground-color: ",";\nflex-grow: 1;\n"]);return v=function(){return n},n}function w(){var n=Object(b.a)(["\nwidth: 200px;\npadding: 8px;\nborder: 2.5px solid rgba(255, 255, 255, 0.8);\nborder-radius: 5px;\ntext-align: center;\ntransition: background-color 0.2s ease;\nbackground-color: ",";\npadding: 11px 15px;\nfont-size: 16px;\nbox-shadow: 0 3px 3px rgba(0,0,0,0.16), 0 3px 3px rgba(0,0,0,0.23);\nwidth: 200px;\n;\n"]);return w=function(){return n},n}function y(){var n=Object(b.a)(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\npadding: 8px;\n"]);return y=function(){return n},n}function E(){var n=Object(b.a)(["\npadding: 8px"]);return E=function(){return n},n}function C(){var n=Object(b.a)(["\nmargin: 20px;\nborder: 1px solid lightgrey;\nborder-radius: 2px;\nmin-width: 250px;\ndisplay: flex;\nflex-direction: column;\nbackground-color: rgb(255,255,255);\npadding: 5px 10px;\n"]);return C=function(){return n},n}var I=f.a.div(C()),D=f.a.h3(E()),S=f.a.label(y()),H=f.a.input(w(),(function(n){return n.isDraggingOver?"skyblue":"white"})),T=f.a.div(v(),(function(n){return n.isDraggingOver?"skyblue":"white"})),_=function(n){Object(d.a)(t,n);var e=Object(p.a)(t);function t(){return Object(l.a)(this,t),e.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var n,e=this;return this.props.column.title&&(n=r.a.createElement(D,null,this.props.column.title)),r.a.createElement(I,null,n,r.a.createElement(S,{"data-name":this.props.name},r.a.createElement(H,{"data-column-id":this.props.id,onKeyDown:this.props.createTask,type:"text",placeholder:"add task"})),r.a.createElement(x.c,{droppableId:this.props.column.id},(function(n,t){return r.a.createElement(T,Object.assign({isDraggingOver:t.isDraggingOver},n.droppableProps,{ref:n.innerRef}),e.props.tasks.map((function(n,e){if(console.log(n,"task rendered"),"No tasks"!==n)return r.a.createElement(O,{key:n.id,task:n.id,content:n.content,index:e})})),n.placeholder)})))}}]),t}(a.Component),B=t(33),K=t.n(B);function N(){var n=Object(b.a)(["\n  background-color: transparent;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 34px;\n  height: 34px;\n  border: none;\n"]);return N=function(){return n},n}function A(){var n=Object(b.a)(["\n  padding: 11px 15px;\n  font-size: 16px;\n  border-radius: 5px;\n  border: 2.5px solid rgba(255, 255, 255, 0.8);\n  width: 100%;\n  -webkit-box-shadow: 0 3px 3px rgba(0,0,0,0.16), 0 3px 3px rgba(0,0,0,0.23);\n  box-shadow: 0 3px 3px rgba(0,0,0,0.16), 0 3px 3px rgba(0,0,0,0.23);\n  width: 200px;\n"]);return A=function(){return n},n}function z(){var n=Object(b.a)(["\n"]);return z=function(){return n},n}function P(){var n=Object(b.a)(["\n  display: flex;\n  margin: 20px;\n  background-color: ",";\n  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n  -webkit-transition: all 150ms ease-in-out;\n  transition: all 150ms ease-in-out;\n  cursor: pointer;\n  height: 100px;\n  padding: 10px 40px;\n  align-items: center;\n"]);return P=function(){return n},n}function J(){var n=Object(b.a)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-wrap: wrap;\n"]);return J=function(){return n},n}function M(){var n=Object(b.a)(["\ndisplay: flex;"]);return M=function(){return n},n}var R=f.a.div(M()),W=f.a.div(J()),L=f.a.label(P(),(function(n){return n.opened?"white":"#0a2c74"})),Y=f.a.h3(z()),U=f.a.input(A()),V=f.a.button(N(),K.a),X=function(n){Object(d.a)(t,n);var e=Object(p.a)(t);function t(){var n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).state={opened:!1},n.onClickHandler=function(e){var t=n.state.opened;t=!t,n.setState({opened:t})},n}return Object(u.a)(t,[{key:"render",value:function(){var n=this,e=r.a.createElement(L,{"data-name":this.props.name},r.a.createElement(Y,{onClick:this.onClickHandler},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0434\u043e\u0441\u043a\u0443 "));return this.state.opened&&(e=r.a.createElement(L,{opened:this.state.opened,"data-name":this.props.name},r.a.createElement(U,{onKeyDown:this.props.create,type:"text"}),r.a.createElement(V,{onClick:this.onClickHandler,type:"button"}," "))),Object.keys(this.props.data).length<2||0===this.props.data.lastColumnId?r.a.createElement("div",null,e):r.a.createElement(R,null,r.a.createElement(x.a,{key:this.props.board,onDragStart:this.props.dragStart,onDragEnd:this.props.dragEnd},r.a.createElement(W,null,this.props.data.columnOrder.map((function(e){var t,a=n.props.data.columns[e];return t="undefined"!==typeof a.taskIds&&0!==Object.keys(a.taskIds).length?a.taskIds.map((function(e){return n.props.data.tasks[e]})):["No tasks"],r.a.createElement(_,{id:e,name:n.props.name,createTask:n.props.createTask,key:a.id,column:a,tasks:t})})),e)))}}]),t}(a.Component),$=t(23),q=t.n($),F=t(34),G=t.n(F);function Q(){var n=Object(b.a)(["\nwidth: 114px;\nheight: 43px;\nmargin: 15px 18px 5px;\ntext-transform: uppercase;\ncursor: pointer;\n-webkit-transition: all 250 ease-in-out;\ntransition: all 250 ease-in-out;\nborder: none;\nbox-shadow: 0 3px 3px rgba(0,0,0,0.16), 0 3px 3px rgba(0,0,0,0.23);\n"]);return Q=function(){return n},n}function Z(){var n=Object(b.a)(["\nwidth: auto;\nheight: 43px;\nmargin: 15px -5px 5px;\ntext-transform: uppercase;\ncursor: pointer;\n-webkit-transition: all 200ms ease-in-out;\ntransition: all 200ms ease-in-out;\nborder: none;\nbackground: none;\ncolor: white;\nfont-weight: 900;\ntext-shadow: 0px 0px 3px #000;\n"]);return Z=function(){return n},n}function nn(){var n=Object(b.a)(["\nbackground-color: transparent;\nwidth: 34px;\nheight: 34px;\nborder: none;\nbackground-image: url(",");\nbackground-repeat: no-repeat;\nbackground-position: center;\n"]);return nn=function(){return n},n}function en(){var n=Object(b.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  margin: 15px 0px;\n  "]);return en=function(){return n},n}function tn(){var n=Object(b.a)(["\npadding: 11px 15px;\nfont-size: 16px;\nborder-radius: 5px;\nborder: 2.5px solid rgba(255, 255, 255, 0.8);\nwidth: 100%;\n-webkit-box-shadow: 0 3px 3px rgba(0,0,0,0.16), 0 3px 3px rgba(0,0,0,0.23);\nbox-shadow: 0 3px 3px rgba(0,0,0,0.16), 0 3px 3px rgba(0,0,0,0.23);\nwidth: 200px;"]);return tn=function(){return n},n}function an(){var n=Object(b.a)(["\ncolor: white;"]);return an=function(){return n},n}function rn(){var n=Object(b.a)(["\ncolor: white;"]);return rn=function(){return n},n}function on(){var n=Object(b.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  border-bottom: ",";\n  width: 100%;\n"]);return on=function(){return n},n}function cn(){var n=Object(b.a)(["\nwidth: 345px;\nheight: auto;\nmargin: 20px;\nbackground-color: #9fe7a4;\npadding: 30px 0;\ndisplay: -webkit-box;\ndisplay: -webkit-flex;\ndisplay: -ms-flexbox;\ndisplay: flex;\n-webkit-flex-direction: column;\n-ms-flex-direction: column;\nflex-direction: column;\n-webkit-box-pack: center;\n-webkit-justify-content: center;\n-ms-flex-pack: center;\njustify-content: center;\n-webkit-align-items: center;\n-webkit-box-align: center;\n-ms-flex-align: center;\nalign-items: center;\nborder-radius: 5.5px;\nbox-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\ncursor: pointer;\n-webkit-transition: 200ms ease-in-out;\ntransition: 200ms ease-in-out;\nfont-weight: 900;\ntext-shadow: 0px 0px 3px #000;\n"]);return cn=function(){return n},n}var sn=f.a.div(cn()),ln=f.a.header(on(),(function(n){return n.opened?"1px solid white":"none"})),un=f.a.h3(rn()),dn=f.a.p(an()),pn=f.a.input(tn()),bn=f.a.div(en()),mn=f.a.button(nn(),G.a),fn=f.a.button(Z()),xn=f.a.button(Q()),gn=function(n){Object(d.a)(t,n);var e=Object(p.a)(t);function t(){var n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).state={opened:!1},n.onTitleClickHandler=function(e){n.setState({opened:!0})},n.onCloseButtonClickHandler=function(e){n.setState({opened:!1})},n.onCancelClickHandler=function(n){n.target.parentNode.previousElementSibling.value=""},n}return Object(u.a)(t,[{key:"render",value:function(){var n=r.a.createElement(sn,null,r.a.createElement(ln,null,r.a.createElement(un,{onClick:this.onTitleClickHandler},"Create new board")));return this.state.opened&&(n=r.a.createElement(sn,null,r.a.createElement(ln,{opened:this.state.opened,className:q.a.header},r.a.createElement(un,null,"Creating a board..."),r.a.createElement(mn,{onClick:this.onCloseButtonClickHandler,type:"button"})),r.a.createElement("div",{className:q.a.section},r.a.createElement(dn,null," \u041a\u0430\u043a \u0431\u0443\u0434\u0435\u0442 \u043d\u0430\u0437\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u043e\u0441\u043a\u0430? "),r.a.createElement(pn,{onKeyDown:this.props.enterKeyDown,type:"text"}),r.a.createElement(bn,null,r.a.createElement(fn,{onClick:this.onCancelClickHandler,type:"button"}," \u041e\u0442\u043c\u0435\u043d\u0430 "),r.a.createElement(xn,{onClick:this.props.click,type:"button"}," \u0421\u043e\u0437\u0434\u0430\u0442\u044c "))))),n}}]),t}(a.Component),kn=t(20),hn=t(5),jn=t(35),On=t.n(jn);function vn(){var n=Object(b.a)(["\nbackground-image: url(",");\nbackground-repeat: no-repeat;\nbackground-position: center;\nwidth: 75px;\nheight: 75px;\nbackground-color: transparent;\nborder: none;\ntext-align: center;\ndisplay: inline-block;\nmargin: 0 auto;\n"]);return vn=function(){return n},n}function wn(){var n=Object(b.a)(["\nmargin-top: 25px;\ndisplay: flex;\njustify-content: center;"]);return wn=function(){return n},n}function yn(){var n=Object(b.a)([""]);return yn=function(){return n},n}function En(){var n=Object(b.a)(["\ndisplay: flex;\nlist-style-type: none;\njustify-content: center;\nalign-items: center;\nflex-wrap:wrap;\n"]);return En=function(){return n},n}function Cn(){var n=Object(b.a)(["\n"]);return Cn=function(){return n},n}function In(){var n=Object(b.a)(["\ntext-transform: uppercase"]);return In=function(){return n},n}function Dn(){var n=Object(b.a)(["\n  width: 345px;\n    margin: 20px;\n    background-color: white;\n    color: #333;\n    padding: 30px 0;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-align-items: center;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    border-radius: 5.5px;\n    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n    cursor: pointer;\n    -webkit-transition: 200ms ease-in-out;\n    transition: 200ms ease-in-out;\n    font-weight: 900;\n    text-shadow: 0px 0px 3px #white;\n    -webkit-animation: eMLfYp 600ms linear;\n    animation: eMLfYp 600ms linear;\n"]);return Dn=function(){return n},n}function Sn(){var n=Object(b.a)([""]);return Sn=function(){return n},n}var Hn=f.a.div(Sn()),Tn=f.a.div(Dn()),_n=f.a.h3(In()),Bn=f.a.nav(Cn()),Kn=f.a.ul(En()),Nn=f.a.li(yn()),An=f.a.div(wn()),zn=f.a.button(vn(),On.a),Pn=function(n){Object(d.a)(t,n);var e=Object(p.a)(t);function t(){var n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).state=m,n.onDragStart=function(n){},n.onDragUpdate=function(n){},n.onDragEnd=function(e){var t=e.draggableId,a=e.source,r=e.destination;if(null!==r&&(a.index!==r.index||a.droppableId!==r.droppableId)){var o=t.split("-")[0],c=n.state[o].columns[a.droppableId],l=n.state[o].columns[r.droppableId];if(c!==l)if(c===l);else{var u,d=Array.from(c.taskIds);d.splice(a.index,1);var p=Object(s.a)(Object(s.a)({},c),{},{taskIds:d}),b=Array.from(l.taskIds);b.splice(r.index,0,t);var m=Object(s.a)(Object(s.a)({},l),{},{taskIds:b}),f=Object(s.a)(Object(s.a)({},n.state),{},Object(i.a)({},o,Object(s.a)(Object(s.a)({},n.state[o]),{},{columns:Object(s.a)(Object(s.a)({},n.state[o].columns),{},(u={},Object(i.a)(u,p.id,p),Object(i.a)(u,m.id,m),u))})));n.setState(f)}else{var x=n.state[o].columns[a.droppableId],g=Array.from(x.taskIds);g.splice(a.index,1),g.splice(r.index,0,t);var k=Object(s.a)(Object(s.a)({},x),{},{taskIds:g}),h=Object(s.a)(Object(s.a)({},n.state),{},Object(i.a)({},o,Object(s.a)(Object(s.a)({},n.state[o]),{},{columns:Object(s.a)(Object(s.a)({},n.state[o].columns),{},Object(i.a)({},k.id,k))})));n.setState(h)}}},n.onEnterKeyHandler=function(e){if("Enter"===e.key){var t=Object(s.a)(Object(s.a)({},n.state),{},Object(i.a)({},e.target.value,{tasks:{},columns:{},columnOrder:[],lastColumnId:0,lastTaskId:0}));n.setState(t),e.target.value=""}},n.onCreateBoardHandler=function(e){var t=e.target.parentNode.previousElementSibling,a=t.value,r=Object(s.a)(Object(s.a)({},n.state),{},Object(i.a)({},a,{tasks:{},columns:{},columnOrder:[],lastColumnId:0,lastTaskId:0}));t.value="",n.setState(r)},n.onCreateColumnHandler=function(e){if("Enter"===e.key){var t=e.target.parentNode.dataset.name,a=e.target.value,r=n.state[t].lastColumnId,o="".concat(t,"-column-").concat(r+1),c={id:o,title:a,taskIds:[]},l=Object(s.a)(Object(s.a)({},n.state[t]),{},{columns:Object(s.a)(Object(s.a)({},n.state[t].columns),{},Object(i.a)({},o,c))});l.columnOrder.push(o),l.lastColumnId=l.lastColumnId+1;Object(i.a)({},t,l);var u=Object(s.a)(Object(s.a)({},n.state),{},Object(i.a)({},t,l));n.setState(u),e.target.value=""}},n.onCreateTaskHandler=function(e){if("Enter"===e.key){console.log("Someone wanna create a task"),console.log(e.target.dataset);var t=e.target.dataset.columnId,a=t.split("-")[0],r=n.state[a],o="".concat(a,"-task-").concat(r.lastTaskId+1);console.log(o,"is task id"),console.log(r.columns);var c=r.columns[t].taskIds.push(o),l=Object(s.a)(Object(s.a)({},r),{},{tasks:Object(s.a)(Object(s.a)({},r.tasks),{},Object(i.a)({},o,{id:o,content:e.target.value})),columns:Object(s.a)(Object(s.a)({},r.columns),{},Object(i.a)({},a,Object(s.a)(Object(s.a)({},r.columns[a]),{},{taskIds:c})))});l.lastTaskId=l.lastTaskId+1,n.setState(Object(s.a)(Object(s.a)({},n.state),{},Object(i.a)({},a,l))),e.target.value=""}},n}return Object(u.a)(t,[{key:"render",value:function(){var n=this,e=Object.keys(this.state).map((function(n){var e="/".concat(n);return r.a.createElement(Nn,null,r.a.createElement(kn.b,{to:e,style:{textDecoration:"none"}},r.a.createElement(Tn,null," ",r.a.createElement(_n,null," ",n," "))))})),t=Object.keys(this.state).map((function(e){var t="/".concat(e);return r.a.createElement(hn.a,{path:t},r.a.createElement(An,null,r.a.createElement(kn.b,{to:"/",style:{textDecoration:"none"}}," ",r.a.createElement(zn,null," "))),r.a.createElement(X,{createTask:n.onCreateTaskHandler,create:n.onCreateColumnHandler,dragStart:n.onDragStart,dragEnd:n.onDragEnd,data:n.state[e],name:e}))}));return r.a.createElement(kn.a,null,r.a.createElement(Hn,null,r.a.createElement(hn.c,null,t,r.a.createElement(hn.a,{path:"/"},r.a.createElement(Bn,null,r.a.createElement(Kn,null,r.a.createElement(gn,{click:this.onCreateBoardHandler,enterKeyDown:this.onEnterKeyHandler}),e))))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(47);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Pn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.a2744f1d.chunk.js.map