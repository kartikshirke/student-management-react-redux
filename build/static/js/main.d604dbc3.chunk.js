(this.webpackJsonpdropdown=this.webpackJsonpdropdown||[]).push([[0],{28:function(e,t,a){e.exports=a(44)},33:function(e,t,a){},39:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),c=a.n(l),s=(a(33),a(4)),u=a(5),o=a(8),m=a(7),i=a(6),p=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleSubmit=function(t){t.preventDefault();var a=e.getFirstName.value,n=e.getLastName.value,r=e.getAddress.value,l=e.getCity.value,c=e.getPhone.value,s=e.getGpa.value,u={id:new Date,firstName:a,lastName:n,address:r,city:l,phone:c,gpa:s,editing:!1};e.props.dispatch({type:"ADD_POST",data:u}),e.props.history.push("/list"),e.getFirstName.value="",e.getLastName.value="",e.getAddress.value="",e.getCity.value="",e.getPhone.value="",e.getGpa.value=""},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"post-container"},r.a.createElement("h1",{className:"post_heading"},"Create Student Record"),r.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},r.a.createElement("label",null,"First Name"),r.a.createElement("input",{required:!0,type:"text",ref:function(t){return e.getFirstName=t},placeholder:"Enter First Name"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{required:!0,type:"text",ref:function(t){return e.getLastName=t},placeholder:"Enter Last Name"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Street Number/ Name"),r.a.createElement("input",{required:!0,type:"text",ref:function(t){return e.getAddress=t},placeholder:"Enter Street Name /No"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"City"),r.a.createElement("input",{required:!0,type:"text",ref:function(t){return e.getCity=t},placeholder:"Enter City"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Phone no"),r.a.createElement("input",{required:!0,type:"number",ref:function(t){return e.getPhone=t},placeholder:"Enter Phone No"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"GPA"),r.a.createElement("input",{required:!0,type:"text",ref:function(t){return e.getGpa=t},placeholder:"Enter GPA"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",null,"Save")))}}]),a}(n.Component),E=Object(i.b)()(p),d=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"post"},r.a.createElement("p",{className:"post_message"},this.props.post.firstName),r.a.createElement("p",{className:"post_message"},this.props.post.lastName),r.a.createElement("p",{className:"post_message"},this.props.post.address),r.a.createElement("p",{className:"post_message"},this.props.post.city),r.a.createElement("p",{className:"post_message"},this.props.post.phone),r.a.createElement("p",{className:"post_message"},this.props.post.gpa)))}}]),a}(n.Component),h=(Object(i.b)()(d),a(39),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"table"},r.a.createElement("table",{style:{width:"50%"}},r.a.createElement("tr",null,r.a.createElement("th",null,"Firstname"),r.a.createElement("th",null,"Lastname"),r.a.createElement("th",null,"Phone"),r.a.createElement("th",null,"GPA"),r.a.createElement("th",null,"Remove"),r.a.createElement("th",null,"Details")),this.props.posts.map((function(t){return r.a.createElement("tr",null,r.a.createElement("td",null,t.firstName),r.a.createElement("td",null,t.lastName),r.a.createElement("td",null,t.phone),r.a.createElement("td",null,t.gpa),r.a.createElement("td",null,r.a.createElement("span",{className:"control-buttons"},r.a.createElement("button",{className:"delete",onClick:function(){return e.props.dispatch({type:"DELETE_POST",id:t.id})}},"Delete"))),r.a.createElement("td",null,r.a.createElement("span",{className:"control-buttons"},r.a.createElement("button",{className:"delete",onClick:function(a){a.preventDefault(),e.props.dispatch({type:"REVIEW_POST",id:t.id}),e.props.history.push("/show")}},"Details"))))}))))}}]),a}(n.Component)),b=Object(i.b)((function(e){return{posts:e}}))(h),f=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{paddingLeft:"30%"}},r.a.createElement("div",{style:{width:"100px",float:"left",height:"100px",background:"gray",margin:"10px"}},r.a.createElement("img",{src:"#",style:{border:"1px solid black"},alt:"not found"})),r.a.createElement("div",{style:{width:"500px",float:"left",height:"300px",background:"white",margin:"10px"}},this.props.posts.map((function(e){return r.a.createElement("div",null,r.a.createElement("p",null,"First Name: ",e.firstName),r.a.createElement("p",null,"Last Name: ",e.lastName),r.a.createElement("p",null,"Address: ",e.address),r.a.createElement("p",null,"City: ",e.city),r.a.createElement("p",null,"Phone No: ",e.phone),r.a.createElement("p",null,"GPA: ",e.gpa))})),r.a.createElement("button",{className:"button-class",onClick:function(){return e.props.history.push("/")}},"Home")))}}]),a}(n.Component),N=Object(i.b)((function(e){return{posts:e}}))(f),g=a(10),v=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"navbar"},r.a.createElement("h2",{className:"center "},"Student Mangement System")),r.a.createElement(g.c,null,r.a.createElement(g.a,{path:"/",component:E,exact:!0}),r.a.createElement(g.a,{path:"/list",component:b,exact:!0}),r.a.createElement(g.a,{path:"/show",component:N})))}}]),a}(n.Component),y=a(15),O=a(12),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":return e.concat([t.data]);case"DELETE_POST":return e.filter((function(e){return e.id!==t.id}));case"REVIEW_POST":return e.filter((function(e){return e.id==t.id}));default:return e}},_=Object(y.b)(j,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());console.log("hello",_);t.default=_;c.a.render(r.a.createElement(i.a,{store:_},r.a.createElement(O.a,null,r.a.createElement(v,null))),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.d604dbc3.chunk.js.map