webpackJsonp([2],{0:function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},a=n(1),u=n(12),o=n(15),i=n(13),l=n(4),c=n(6),s=n(9),p=n(38),m=s.BaseStore({}),f={accout:{name:"用户",require:!0},phone:{name:"手机号码",mobile:!0},bank:{name:"银行",bank:!0},email:{name:"电子邮箱",email:!0},password:{name:"密码",require:!0},password_repeat:{name:"确认密码",require:!0},city:{name:"城市",select:"-1"},delivery_channel:{name:"投放位置",select:"-1"},Interest:{name:"兴趣爱好",group:1}},d=function(e){function t(t){e.call(this,t),this.date=[{label:"北京",value:"北京"},{label:"福州",value:"福州"}],this.submitDate={accout:"",password:"",password_repeat:"",city:"-1",delivery_channel:"-1",Interest:[],phone:"",email:"",bank:""}}return r(t,e),t.prototype.sublimeButton=function(){var e=this.checkedValue.state.checked;if(!e)return i.Tips({message:"请必须勾选合作协议",type:2}),!1;var t=p["default"].verifyConfig(this.submitDate,f,!0);return t.length>0?(i.Tips({message:t[0].tips,type:2}),!1):void(this.submitDate.password!=this.submitDate.password_repeat?i.Tips({message:"两次输入的密码不一致！",type:2}):(i.Tips({message:"通过验证!",type:1}),console.log(this.submitDate)))},t.prototype.valueChange=function(e,t){this.submitDate[e]=t},t.prototype.render=function(){var e=this;return a.createElement(i.AppBody,null,a.createElement(i.Panel,{title:"表单验证"},a.createElement(i.FormGroup,{horizontal:!0},a.createElement(i.FormItems,{label:"用户名"},a.createElement(i.InputText,{type:"test",placeholder:"请输入您的账号",onChange:function(t){return e.valueChange("accout",t.target.value)}})),a.createElement(i.FormItems,{label:"手机号码"},a.createElement(i.InputText,{type:"test",placeholder:"请输入您的手机号码",onChange:function(t){return e.valueChange("phone",t.target.value)}})),a.createElement(i.FormItems,{label:"银行卡号"},a.createElement(i.InputText,{type:"test",placeholder:"请输入您的银行卡号",onChange:function(t){return e.valueChange("bank",t.target.value)}})),a.createElement(i.FormItems,{label:"邮箱"},a.createElement(i.InputText,{type:"test",placeholder:"请输入您的邮箱",onChange:function(t){return e.valueChange("email",t.target.value)}})),a.createElement(i.FormItems,{label:"密码"},a.createElement(i.InputText,{type:"password",placeholder:"请输入您的密码",onChange:function(t){return e.valueChange("password",t.target.value)}})),a.createElement(i.FormItems,{label:"确认密码"},a.createElement(i.InputText,{type:"password",placeholder:"请输入您的密码",onChange:function(t){return e.valueChange("password_repeat",t.target.value)}})),a.createElement(i.FormItems,{label:"城市"},a.createElement(i.InputSelect,{items:this.date,onChange:function(t){return e.valueChange("city",t.target.value)}})),a.createElement(i.FormItems,{label:"投放位置"},a.createElement(i.RadioGroup,{onChange:function(t){return e.valueChange("delivery_channel",t.target.value)}},a.createElement(i.InputRadio,{label:"全部",name:"delivery_channel",value:"1"}),a.createElement(i.InputRadio,{label:"微信",name:"delivery_channel",value:"2"}),a.createElement(i.InputRadio,{label:"APP",name:"delivery_channel",value:"3"}))),a.createElement(i.FormItems,{label:"兴趣爱好"},a.createElement(i.CheckGroup,{options:[{label:"篮球",value:"1"},{label:"足球",value:"2"}],onChange:function(t){return e.valueChange("Interest",t)}})),a.createElement(i.FormItems,{label:"是否同意协议"},a.createElement(i.InputCheckbox,{label:"你必须阅读并同意",name:"circle",ref:function(t){return e.checkedValue=t}})),a.createElement(i.FormItems,null,a.createElement(i.Buttons,{type:"danger",display:"block",onClick:function(){return e.sublimeButton()}},"登录")))))},t.prototype.componentDidMount=function(){var e=this.props,t=(e.FormVerifierReducer,e.dispatch);t(l.changeActiveAction({parent:9,child:1}))},t.prototype.componentWillUnmount=function(){},t}(c["default"]),h=function(e){return{FormVerifierReducer:e.FormVerifierReducer}},v=o.connect(h)(d),g=document.getElementById("example");u.render(a.createElement(o.Provider,{store:m},a.createElement(v,null)),g)},5:function(e,t){"use strict";function n(e){var t=e.dispatch,n=e.getState;return function(e){return function(r){return"function"==typeof r?r(t,n):e(r)}}}t.__esModule=!0,t["default"]=n},6:function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},a=n(1),u=n(2),o=n(16),i=function(e){function t(t){e.call(this,t);var n=o["default"].get("cw_auth");n||(alert("请求超时,请重新登录"),u["default"].goPush("login"))}return r(t,e),t.prototype.componentDidMount=function(){},t.prototype.componentWillUnmount=function(){},t}(a.Component);Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i},7:function(e,t,n){"use strict";function r(e,t){switch(void 0===e&&(e=o),t.type){case a.GET_AUTH:return u["default"].assign({},e,t.state);default:return e}}var a=n(18),u=n(2),o={LOGIN_ID:""};Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r},8:function(e,t,n){"use strict";function r(e,t){switch(void 0===e&&(e=o),t.type){case a.BASE_MENU:return u["default"].assign({},e,t.state);case a.SWITCH_MENU:return u["default"].assign({},e,{menuSwitch:t.menuSwitch});case a.CHANGE_ACTIVE:return u["default"].assign({},e,{active:t.active});default:return e}}var a=n(4),u=n(2),o={active:{parent:-1,child:-1},menuSwitch:!0,menuList:[]};Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r},9:function(e,t,n){"use strict";function r(e){var t=o["default"].assign(e,{HeaderReducer:i["default"],MenuReducers:l["default"]}),n=a.combineReducers(t),r=a.createStore(n,a.applyMiddleware(u["default"]));return r}var a=n(17),u=n(5),o=n(2),i=n(7),l=n(8);t.BaseStore=r},38:function(e,t){"use strict";var n={require:{test:function(e,t){return t?e?e.toString().trim().length>0:!1:!0},tip:"不能为空"},password:{test:function(e,t){return t?e?e.toString().trim().length>0:!1:!0},tip:"不能为空"},minLength:{test:function(e,t){return e&&e.toString().trim().length>=t},tip:"长度不能小于{value}位"},maxLength:{test:function(e,t){return e&&e.toString().trim().length<t},tip:"长度不能大于{value}位"},number:{test:function(e){return/^\d+$/.test(e.toString().trim())},tip:"只能为数字"},mobile:{test:function(e){return e&&/^((1[378][0-9]{9})|(15[89][0-9]{8}))$/.test(e.toString().trim())},tip:"手机号码格式不正确"},email:{test:function(e){return e&&/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(e.toString().trim())},tip:"格式不对"},select:{test:function(e,t){return e!=t},tip:"不能为空"},group:{test:function(e,t){return parseInt(e.length)+1>t},tip:"选择不能小于{value}个"},bank:{test:function(e){return e&&/^\d{16}|\d{19}$/.test(e.toString().trim())},tip:"格式不对"}},r=function(e,t,r){if("test"===e)return r.test&&!r.test(t)?r.tip||"fail":!0;var a=n[e];if(a&&a.test){var u=a.test(t,r);if(!u)return a.tip.replace("{value}",r)}return!0},a=function(e,t,n){void 0===n&&(n=!1);var a=[];for(var u in t){var o=t[u];for(var i in o){var l=o[i],c=r(i,e[u],l);if("string"==typeof c){var s=o.name+c;if(s={name:u,tips:s},n)return[s];a.push(s)}}}return a},u={verifyConfig:a,verify:r};Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=u}});