"use strict";(self.webpackChunkdesign=self.webpackChunkdesign||[]).push([[622],{2253:function(e,s,r){r.d(s,{Z:function(){return a}});r(2791);var t=r(184);var a=function(e){var s=e.className,r=e.children,a=e.styleAsProps;return(0,t.jsx)("section",{className:"section ".concat(s),style:a,children:(0,t.jsx)("div",{className:"row",children:r})})}},4622:function(e,s,r){r.r(s),r.d(s,{default:function(){return O}});var t=r(6871),a=r(3504),i=r(2791),n=r(2253),c=r(4165),l=r(5861),d=r(1933),o=r(884),m=function(){var e=(0,l.Z)((0,c.Z)().mark((function e(){var s;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/details/msg_downtime_alert_wklyAVGTemp");case 3:return s=e.sent,e.abrupt("return",s);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=(0,l.Z)((0,c.Z)().mark((function e(){var s;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("details/daily_temprature_chart");case 3:return s=e.sent,e.abrupt("return",s);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,l.Z)((0,c.Z)().mark((function e(){var s;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("details/system_log");case 3:return s=e.sent,e.abrupt("return",s);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=(0,l.Z)((0,c.Z)().mark((function e(){var s;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("details/activity");case 3:return s=e.sent,e.abrupt("return",s);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),v=r(601),j=r(2165),p=r(2839),f=r(466),N=r(2891),g=r(4666),y=r(8811),b=r(184);var w=function(){var e=(0,d.useQuery)("Daily_temprature_chart",h),s=e.isLoading,r=e.isError,t=e.data,a=e.error;if(s)return(0,b.jsx)("h2",{children:"Loading..."});if(r)return(0,b.jsx)("span",{children:a instanceof Error?(0,b.jsx)("h2",{children:a.message}):"Unexpected error"});var i=null===t||void 0===t?void 0:t.data.records;return console.log(i),(0,b.jsx)("div",{className:"col-md-12 col-sm-12 col-xs-12 m-t-20 border-double",children:(0,b.jsxs)("div",{className:"row m-t-20",children:[(0,b.jsxs)("h5",{className:"",children:["TEMPERATURE DAILY"," ",(0,b.jsx)("small",{children:"( Note: this chart api has one device )"})]}),(0,b.jsx)("div",{className:"col-lg-12 m-t-10",children:(0,b.jsx)("div",{className:"row",children:(0,b.jsx)(v.h,{width:"100%",aspect:4,minHeight:"70%",children:(0,b.jsxs)(j.w,{width:500,height:300,data:i,margin:{top:5,right:30,left:20,bottom:5},children:[(0,b.jsx)(p.q,{borderWidth:1,horizontal:!0,vertical:!1,horizontalPoints:[40,80,120,160,200]}),(0,b.jsx)(f.K,{hide:!0}),(0,b.jsx)(N.B,{hide:!0}),(0,b.jsx)(g.D,{iconType:"square"}),(0,b.jsx)(y.x,{type:"monotone",dataKey:"Sensor1",stroke:"#8884d8"}),(0,b.jsx)(y.x,{type:"monotone",dataKey:"temp",stroke:"#82ca9d"})]})})})})]})})},T=r(8265),Z=r(5667),k=r(8602),E=[{name:"Monday",time:4e3,temp:2400},{name:"Tue",time:3e3,temp:1398},{name:"Wed",time:2e3,temp:9800},{name:"Thu",time:2780,temp:3908},{name:"Fri",time:1890,temp:4800},{name:"Sat",time:2390,temp:3800},{name:"Sun",time:3490,temp:4300}],_=function(){return(0,b.jsx)("div",{className:"col-md-6 col-sm-12 col-xs-12 border",children:(0,b.jsx)(v.h,{width:"100%",height:"100%",children:(0,b.jsxs)(T.T,{width:500,height:400,data:E,margin:{top:10,right:30,left:0,bottom:0},children:[(0,b.jsx)(p.q,{strokeDasharray:"3 3"}),(0,b.jsx)(f.K,{dataKey:"name"}),(0,b.jsx)(N.B,{hide:!0}),(0,b.jsx)(Z.u,{}),(0,b.jsx)(k.u,{type:"monotone",dataKey:"time",stroke:"#8884d8",fill:"#8884d8"}),(0,b.jsx)(k.u,{type:"monotone",dataKey:"temp",stroke:"#8884d8",fill:"#ddd"})]})})})},S=r(2426),L=r.n(S),A=function(){var e=(0,d.useQuery)("System_log_data",u),s=e.isLoading,r=e.data,t=e.isError,a=e.error;return s?(0,b.jsx)("h2",{children:"Loading..."}):t?(0,b.jsx)("span",{children:a instanceof Error?(0,b.jsx)("h2",{children:a.message}):"Unexpected error"}):(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)("div",{className:"col-md-6 col-sm-12 col-xs-12 ",children:[(0,b.jsx)("h6",{children:"SYSTEM LOG"}),(0,b.jsx)("div",{className:"col-md-12",children:(0,b.jsx)("div",{className:"card",children:(0,b.jsx)("div",{className:"card-body",children:(0,b.jsxs)("div",{className:"activity",children:[null===r||void 0===r?void 0:r.data.records.map((function(e){var s=e.time,r=e.description;return(0,b.jsxs)("div",{className:"activity-item d-flex",children:[(0,b.jsx)("div",{className:"activite-label"}),(0,b.jsx)("i",{className:"bi bi-circle-fill activity-badge text-muted align-self-start"}),(0,b.jsxs)("div",{className:"activity-content",children:[r.substring(1,20)+"...",(0,b.jsx)("span",{className:"dateOrTime",children:L()(Number(s)).startOf("hour").fromNow()})]})]},s)})),(0,b.jsxs)("div",{className:"activity-item d-flex",children:[(0,b.jsx)("div",{className:"activite-label"}),(0,b.jsx)("i",{className:"bi bi-circle activity-badge text-muted align-self-start"}),(0,b.jsx)("div",{className:"activity-content",children:"view all"})]})]})})})})]})})},D=function(){var e=(0,d.useQuery)("Activity_Data",x),s=e.isLoading,r=e.data,t=e.isError,a=e.error;return s?(0,b.jsx)("h2",{children:"Loading..."}):t?(0,b.jsx)("span",{children:a instanceof Error?(0,b.jsx)("h2",{children:a.message}):"Unexpected error"}):(0,b.jsxs)("div",{className:"col-md-6 col-sm-12 col-xs-12",children:[(0,b.jsx)("h6",{children:"Activity"}),(0,b.jsx)("div",{className:"col-md-12",children:(0,b.jsx)("div",{className:"card",children:(0,b.jsx)("div",{className:"card-body",children:null===r||void 0===r?void 0:r.data.records.map((function(e){var s=e.time,r=e.description,t=e.event_name;return(0,b.jsxs)("div",{className:"activitiesWrapper",children:[(0,b.jsxs)("div",{className:"deviceItem ",children:[(0,b.jsx)("i",{className:"bi bi-person-circle"}),(0,b.jsxs)("span",{className:"deviceformation",children:[(0,b.jsx)("div",{className:"deviceStatus",children:t}),(0,b.jsx)("div",{className:"onlineOfflineStatus",children:L()(Number(s)).startOf("hour").fromNow()})]})]}),(0,b.jsx)("p",{className:"activityText",children:r})]},s)}))})})})]})},M=function(e){var s=e.title,r=e.text,t=e.amount,a=e.type;return(0,b.jsx)("div",{className:"row border",children:(0,b.jsxs)("div",{className:"totalMessageWrapper",children:[(0,b.jsxs)("div",{className:"totalMessage",children:[(0,b.jsx)("h6",{children:s}),(0,b.jsx)("small",{children:r})]}),(0,b.jsxs)("span",{className:"totalDownTime",children:[(0,b.jsx)("h4",{children:t}),(0,b.jsx)("small",{children:a})]})]})})},O=function(){var e=(0,t.UO)().device_id,s=(0,d.useQuery)("Msg_Downtime_Alerts_WeeklyAvgTemp",m),r=s.isLoading,c=(s.data,s.isError),l=s.error;return r?(0,b.jsx)("h2",{children:"Loading..."}):c?(0,b.jsx)("span",{children:l instanceof Error?(0,b.jsx)("h2",{children:l.message}):"Unexpected error"}):(0,b.jsx)(i.Fragment,{children:(0,b.jsx)("main",{id:"main",className:"main",children:(0,b.jsxs)(n.Z,{className:"sensorDetails",children:[(0,b.jsxs)("h5",{className:"card-title",children:[(0,b.jsx)(a.rU,{to:"/",children:(0,b.jsx)("span",{className:"backButton",children:(0,b.jsx)("i",{className:"bi bi-arrow-left"})})}),"Sensor - ",e]}),(0,b.jsx)("div",{className:"col-lg-12",children:(0,b.jsxs)("div",{className:"row",children:[(0,b.jsxs)("div",{className:"col-md-6 col-sm-12 col-xs-12",children:[(0,b.jsx)(M,{title:"TOTAL MESSAGES",text:"Total Messages this week",amount:120}),(0,b.jsx)(M,{title:"DOWN TIME",text:"Total down time",amount:67,type:"sec"}),(0,b.jsx)(M,{title:"ALERTS",text:"System Alerts this week",amount:74})]}),(0,b.jsx)(_,{})]})}),(0,b.jsx)(w,{}),(0,b.jsx)("div",{className:"col-lg-12 m-t-40",children:(0,b.jsx)("div",{className:"activityWrapper",children:(0,b.jsxs)("div",{className:"row",children:[(0,b.jsx)(A,{}),(0,b.jsx)(D,{})]})})})]})})})}},884:function(e,s,r){var t=r(4569),a=r.n(t)().create({baseURL:"http://localhost:5000",headers:{"Content-Type":"application/json"}});s.Z=a}}]);
//# sourceMappingURL=622.fe2072e7.chunk.js.map