"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[814],{7814:function(s,e,n){n.r(e),n.d(e,{default:function(){return b}});var a=n(2906),i=n(3531),t=n(1087),r="Dialog_dialog__Jdc9Y",o="Dialog_name__BcSS8",l="Dialog_message__g6+2n",c=n(184),u=function(s){var e=s.name,n=s.message,a=s.id;return(0,c.jsx)("li",{className:r,children:(0,c.jsxs)(t.rU,{to:"/dialogs/".concat(a),children:[(0,c.jsx)("span",{}),(0,c.jsxs)("div",{children:[(0,c.jsx)("p",{className:o,children:e}),(0,c.jsx)("p",{className:l,children:n})]})]})})},d=n(1413),g=n(7689),m=n(1134),_="DialogWindow_dialog_window__ITjve",h="DialogWindow_message_input__gjOHg",j=function(s){var e=s.onSubmit,n=(0,m.cI)(),a=n.register,i=n.handleSubmit;return(0,c.jsxs)("form",{className:_,onSubmit:i(e),children:[(0,c.jsx)("textarea",(0,d.Z)((0,d.Z)({className:h},a("newMessage")),{},{type:"text",placeholder:"Enter your message"})),(0,c.jsx)("button",{children:"Send"})]})},x=function(s){var e=s.sendMessage;(0,g.UO)().dialogId;return(0,c.jsx)("div",{children:(0,c.jsx)(j,{onSubmit:function(s){e(s)}})})},f="Dialogs_dialogs__ij+ld",v="Dialogs_dialogs_items__2hmb-",p=function(s){var e=s.messages,n=s.sendMessage;s.isAuth;return(0,c.jsxs)("div",{className:f,children:[(0,c.jsx)("ul",{className:v,children:e.map((function(s){var e=s.id,n=s.name,a=s.messages;return(0,c.jsx)(u,{name:n,message:a[a.length-1],id:e},e)}))}),(0,c.jsx)(x,{sendMessage:function(s){n(s)}})]})},w=n(1548),b=(0,n(7781).qC)((0,i.$j)((function(s){return{messages:s.dialogsPage.dialogsData}}),{sendMessage:a.T}),w.Z)(p)},1548:function(s,e,n){var a=n(1413),i=n(3531),t=n(7689),r=n(184),o=function(s){return{isAuth:s.auth.isAuth}};e.Z=function(s){return(0,i.$j)(o)((function(e){return(0,r.jsx)(r.Fragment,{children:e.isAuth?(0,r.jsx)(s,(0,a.Z)({},e)):(0,r.jsx)(t.Fg,{to:"/login"})})}))}}}]);
//# sourceMappingURL=814.4b4fbe14.chunk.js.map