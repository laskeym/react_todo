(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,a){t.exports=a(25)},19:function(t,e,a){},25:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),s=a(11),i=a.n(s),r=(a(19),a(2)),l=a(3),c=a(6),m=a(4),u=a(5),d=a(13),h=a(1),b=a(7),v=a(12),f=a.n(v),p=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(c.a)(this,Object(m.a)(e).call(this,t))).state={text:"",errors:{}},a.onSubmit=a.onSubmit.bind(Object(h.a)(Object(h.a)(a))),a.onChange=a.onChange.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(e,t),Object(l.a)(e,[{key:"onSubmit",value:function(t){t.preventDefault();var e={_id:f.a.v4(),text:this.state.text};null===this.state.text||""===this.state.text?this.setState({errors:{text:"Field cannot be blank!"}}):(this.props.onSubmit(e),this.setState({text:"",errors:{}}))}},{key:"onChange",value:function(t){this.setState(Object(b.a)({},t.target.name,t.target.value))}},{key:"render",value:function(){return o.a.createElement("div",{className:"todo-form mb-5"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-10 mx-auto"},o.a.createElement("form",{onSubmit:this.onSubmit},o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"text",name:"text",className:"form-control form-control-lg",placeholder:"What do I have to do today...",value:this.state.text,onChange:this.onChange}),this.state.errors.text?o.a.createElement("div",null,this.state.errors.text):null),o.a.createElement("input",{type:"submit",value:"Add Item",className:"btn btn-dark"})))))}}]),e}(n.Component),S=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(c.a)(this,Object(m.a)(e).call(this,t))).state={_id:null,text:"",errors:{},editTodo:!1},a}return Object(u.a)(e,t),Object(l.a)(e,[{key:"componentWillMount",value:function(){var t=this.props.todoItem;this.setState({_id:t._id,text:t.text})}},{key:"onChange",value:function(t){this.setState(Object(b.a)({},t.target.name,t.target.value))}},{key:"onSubmit",value:function(t){t.preventDefault();var e={_id:this.state._id,text:this.state.text};null===this.state.text||""===this.state.text?this.setState({errors:{text:"Field cannot be blank!"}}):(this.props.onSubmit(e),this.setState({text:this.state.text,errors:{},editTodo:!this.state.editTodo}))}},{key:"onDelete",value:function(t){this.props.onDelete(t)}},{key:"render",value:function(){var t,e=this,a=this.props.todoItem,n=this.state.editTodo;return n&&(t=o.a.createElement("div",{className:"col-md-10"},o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"text",name:"text",className:"form-control",value:this.state.text,onChange:this.onChange.bind(this)})))),o.a.createElement("div",{className:"todo-item"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-8 mx-auto card p-4"},o.a.createElement("div",{className:"row"},n?t:o.a.createElement("div",{className:"col-md-10"},a.text),o.a.createElement("div",{className:"col-md-2 my-auto"},o.a.createElement("button",{className:"float-right mx-2",onClick:this.onDelete.bind(this,a._id)},o.a.createElement("i",{className:"fas fa-trash-alt"})),n?o.a.createElement("button",{className:"float-right",onClick:this.onSubmit.bind(this)},o.a.createElement("i",{className:"fas fa-check"})):o.a.createElement("button",{className:"float-right",onClick:function(){e.setState({editTodo:!e.state.editTodo})}},o.a.createElement("i",{className:"fas fa-pencil-alt"})))))))}}]),e}(n.Component),O=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(c.a)(this,Object(m.a)(e).call(this,t))).state={todos:[],loading:!1},a.handleSubmit=a.handleSubmit.bind(Object(h.a)(Object(h.a)(a))),a.handleDelete=a.handleDelete.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(e,t),Object(l.a)(e,[{key:"componentWillMount",value:function(){var t=JSON.parse(localStorage.getItem("todos"));null===t?(this.setState({loading:!0}),localStorage.setItem("todos",JSON.stringify([]))):this.setState({loading:!1,todos:t})}},{key:"handleSubmit",value:function(t){var e,a=Object(d.a)(this.state.todos);e=!1,a.forEach(function(a){a._id===t._id&&(a.text=t.text,e=!0)}),!1===e&&a.push(t),this.setState({todos:a}),localStorage.setItem("todos",JSON.stringify(a))}},{key:"handleDelete",value:function(t){var e=this.state.todos.filter(function(e){return e._id!==t});this.setState({todos:e}),localStorage.setItem("todos",JSON.stringify(e))}},{key:"render",value:function(){var t,e=this;return t=this.state.todos.map(function(t,a){return o.a.createElement(S,{key:t._id,todoItem:t,onSubmit:e.handleSubmit,onDelete:e.handleDelete})}),o.a.createElement("div",{className:"to-do"},o.a.createElement(p,{onSubmit:this.handleSubmit}),t)}}]),e}(n.Component),g=function(t){function e(){return Object(r.a)(this,e),Object(c.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"my-3 text-center"},"React To Do"),o.a.createElement(O,null)))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(23);i.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[14,2,1]]]);
//# sourceMappingURL=main.911def64.chunk.js.map