(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(6),r=n.n(o),l=n(1),i=n(2),s=n(4),u=n(3),m=(n(12),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={date:new Date},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval((function(){var t=new Date;console.log(t.toLocaleTimeString()),e.setState({date:t})}),1e3)}},{key:"componentDidUpdate",value:function(e){e.clockName!==this.props.clockName&&console.log("The Clock was renamed from\n        ".concat(e.clockName," to ").concat(this.props.clockName,"."))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Current time:"," ",this.state.date.toLocaleTimeString()))}}]),n}(c.a.Component)),k=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={isClockVisible:!0,clockName:1},e.showClock=function(){return e.setState({isClockVisible:!0})},e.hideClock=function(){return e.setState({isClockVisible:!1})},e.generateName=function(){return e.setState({clockName:Math.ceil(1e3*Math.random())})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isClockVisible,n=e.clockName;return c.a.createElement("div",{className:"App"},c.a.createElement("button",{type:"button",onClick:this.showClock},"Show Clock"),c.a.createElement("button",{type:"button",onClick:this.hideClock},"Hide Clock"),c.a.createElement("button",{type:"button",onClick:this.generateName},"Set random name"),t&&c.a.createElement(m,{clockName:n}))}}]),n}(c.a.Component);r.a.render(c.a.createElement(k,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.833c27f4.chunk.js.map