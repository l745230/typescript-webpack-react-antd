webpackJsonp([15],[function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},a=n(1),c=n(12),o=n(15),u=n(13),l=n(4),s=n(6),i=n(9),p=i.BaseStore({}),d={marginBottom:"10px"},y=function(e){function t(t){e.call(this,t)}return r(t,e),t.prototype.handleButton=function(){var e=this.props;e.MenuReducers,e.dispatch},t.prototype.render=function(){var e=this;return a.createElement(u.AppBody,null,a.createElement(u.Panel,{title:"按钮面板"},a.createElement(u.Buttons,null,"默认default"),a.createElement(u.Buttons,{type:"primary"},"首选primary"),a.createElement(u.Buttons,{type:"success"},"成功success"),a.createElement(u.Buttons,{type:"danger"},"危险danger"),a.createElement(u.Buttons,{type:"info"},"一般info"),a.createElement(u.Buttons,{type:"warning"},"警告warning"),a.createElement(u.Buttons,{type:"link"},"链接link")),a.createElement(u.Panel,{title:"按钮面板-禁止"},a.createElement(u.Buttons,{disabled:!0},"默认default"),a.createElement(u.Buttons,{type:"primary",disabled:!0},"首选primary"),a.createElement(u.Buttons,{type:"success",disabled:!0},"成功success"),a.createElement(u.Buttons,{type:"danger",disabled:!0},"危险danger"),a.createElement(u.Buttons,{type:"info",disabled:!0},"一般info"),a.createElement(u.Buttons,{type:"warning",disabled:!0},"警告warning")),a.createElement(u.Panel,{title:"按钮尺寸面板"},a.createElement(u.Buttons,{type:"primary",size:"large"},"大号按钮"),a.createElement(u.Buttons,{type:"primary"},"中号按钮(默认)"),a.createElement(u.Buttons,{type:"primary",size:"small"},"小号按钮")),a.createElement(u.Panel,{title:"按钮块尺寸面板"},a.createElement(u.Buttons,{style:d,display:"block"}," 默认default"),a.createElement(u.Buttons,{style:d,type:"primary",display:"block",onClick:function(){return e.handleButton()}},"首选primary"),a.createElement(u.Buttons,{style:d,type:"success",display:"block"},"成功success"),a.createElement(u.Buttons,{style:d,type:"danger",display:"block"},"危险danger"),a.createElement(u.Buttons,{style:d,type:"info",display:"block"},"一般info"),a.createElement(u.Buttons,{style:d,type:"warning",display:"block"},"警告warning")),a.createElement(u.Panel,{title:"图标-按钮面板"},a.createElement(u.Buttons,null,a.createElement(u.Icon,{type:"cloudupload"})," 上传文件"),a.createElement(u.Buttons,{type:"danger"},a.createElement(u.Icon,{type:"delete"})," 删除"),a.createElement(u.Buttons,{type:"success"},a.createElement(u.Icon,{type:"eyeo"})," 预览"),a.createElement(u.Buttons,{type:"primary"},a.createElement(u.Icon,{type:"edit"})," 修改"),a.createElement(u.Buttons,{type:"primary"},a.createElement(u.Icon,{type:"pluscircle"})," 添加"),a.createElement(u.Buttons,{type:"primary"},a.createElement(u.Icon,{type:"search"})," 搜索"),a.createElement(u.Buttons,{type:"warning"},a.createElement(u.Icon,{type:"like"})," 89")))},t.prototype.componentDidMount=function(){var e=this.props,t=(e.MenuReducers,e.dispatch);t(l.changeActiveAction({parent:5,child:-1}))},t.prototype.componentWillUnmount=function(){},t}(s["default"]),m=function(e){return{MenuReducers:e.MenuReducers}},f=o.connect(m)(y),E=document.getElementById("example");c.render(a.createElement(o.Provider,{store:p},a.createElement(f,null)),E)},,,,,function(e,t){"use strict";function n(e){var t=e.dispatch,n=e.getState;return function(e){return function(r){return"function"==typeof r?r(t,n):e(r)}}}t.__esModule=!0,t["default"]=n},function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},a=n(1),c=n(2),o=n(16),u=function(e){function t(t){e.call(this,t);var n=o["default"].get("cw_auth");n||(alert("请求超时,请重新登录"),c["default"].goPush("login"))}return r(t,e),t.prototype.componentDidMount=function(){},t.prototype.componentWillUnmount=function(){},t}(a.Component);Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=u},function(e,t,n){"use strict";function r(e,t){switch(void 0===e&&(e=o),t.type){case a.GET_AUTH:return c["default"].assign({},e,t.state);default:return e}}var a=n(18),c=n(2),o={LOGIN_ID:""};Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r},function(e,t,n){"use strict";function r(e,t){switch(void 0===e&&(e=o),t.type){case a.BASE_MENU:return c["default"].assign({},e,t.state);case a.SWITCH_MENU:return c["default"].assign({},e,{menuSwitch:t.menuSwitch});case a.CHANGE_ACTIVE:return c["default"].assign({},e,{active:t.active});default:return e}}var a=n(4),c=n(2),o={active:{parent:-1,child:-1},menuSwitch:!0,menuList:[]};Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r},function(e,t,n){"use strict";function r(e){var t=o["default"].assign(e,{HeaderReducer:u["default"],MenuReducers:l["default"]}),n=a.combineReducers(t),r=a.createStore(n,a.applyMiddleware(c["default"]));return r}var a=n(17),c=n(5),o=n(2),u=n(7),l=n(8);t.BaseStore=r}]);