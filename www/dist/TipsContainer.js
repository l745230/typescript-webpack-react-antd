webpackJsonp([6],[function(t,e,n){"use strict";var u=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var u in e)e.hasOwnProperty(u)&&(t[u]=e[u]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},o=n(1),r=n(12),c=n(15),i=n(13),a=n(4),s=n(6),l=n(9),f=l.BaseStore({}),d=function(t){function e(e){t.call(this,e)}return u(e,t),e.prototype.handleButton=function(t){i.Tips({message:"我是提醒信息",type:t})},e.prototype.render=function(){var t=this;return o.createElement(i.AppBody,null,o.createElement(i.Panel,{title:"全局提示-按钮面板"},o.createElement(i.Buttons,{onClick:function(){return t.handleButton()}},"显示普通"),o.createElement(i.Buttons,{onClick:function(){return t.handleButton(1)}},"成功"),o.createElement(i.Buttons,{onClick:function(){return t.handleButton(2)}},"报错"),o.createElement(i.Buttons,{onClick:function(){return t.handleButton(3)}},"警告")))},e.prototype.componentDidMount=function(){var t=this.props,e=(t.MenuReducers,t.dispatch);e(a.changeActiveAction({parent:8,child:0}))},e.prototype.componentWillUnmount=function(){},e}(s["default"]),p=function(t){return{MenuReducers:t.MenuReducers}},h=c.connect(p)(d),m=document.getElementById("example");r.render(o.createElement(c.Provider,{store:f},o.createElement(h,null)),m)},,,,,function(t,e){"use strict";function n(t){var e=t.dispatch,n=t.getState;return function(t){return function(u){return"function"==typeof u?u(e,n):t(u)}}}e.__esModule=!0,e["default"]=n},function(t,e,n){"use strict";var u=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var u in e)e.hasOwnProperty(u)&&(t[u]=e[u]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},o=n(1),r=n(2),c=n(16),i=function(t){function e(e){t.call(this,e);var n=c["default"].get("cw_auth");n||(alert("请求超时,请重新登录"),r["default"].goPush("login"))}return u(e,t),e.prototype.componentDidMount=function(){},e.prototype.componentWillUnmount=function(){},e}(o.Component);Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=i},function(t,e,n){"use strict";function u(t,e){switch(void 0===t&&(t=c),e.type){case o.GET_AUTH:return r["default"].assign({},t,e.state);default:return t}}var o=n(18),r=n(2),c={LOGIN_ID:""};Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=u},function(t,e,n){"use strict";function u(t,e){switch(void 0===t&&(t=c),e.type){case o.BASE_MENU:return r["default"].assign({},t,e.state);case o.SWITCH_MENU:return r["default"].assign({},t,{menuSwitch:e.menuSwitch});case o.CHANGE_ACTIVE:return r["default"].assign({},t,{active:e.active});default:return t}}var o=n(4),r=n(2),c={active:{parent:-1,child:-1},menuSwitch:!0,menuList:[]};Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=u},function(t,e,n){"use strict";function u(t){var e=c["default"].assign(t,{HeaderReducer:i["default"],MenuReducers:a["default"]}),n=o.combineReducers(e),u=o.createStore(n,o.applyMiddleware(r["default"]));return u}var o=n(17),r=n(5),c=n(2),i=n(7),a=n(8);e.BaseStore=u}]);