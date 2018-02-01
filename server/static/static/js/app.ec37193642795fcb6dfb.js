webpackJsonp([1],{"34KM":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={};n.d(o,"GetUserInfo",function(){return A}),n.d(o,"LoginByUsername",function(){return R}),n.d(o,"FedLogOut",function(){return L});var a={};n.d(a,"name",function(){return M});var r=n("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"app"},i,!1,function(t){n("sHY6")},null,null).exports,l=n("/ocq"),c=n("Dd8w"),u=n.n(c),d=n("NYxO"),p={data:function(){return{loginForm:{username:"admin",password:""},loginRules:{username:[{required:!0,trigger:"blur",validator:function(t,e,n){n()}}],password:[{required:!0,trigger:"blur",validator:function(t,e,n){e.length<6?n(new Error("密码不能小于6位")):n()}}]},pwdType:"password",loading:!1,showDialog:!1}},methods:u()({},Object(d.c)({setUserName:"SET_USERNAME"}),{showPwd:function(){"password"===this.pwdType?this.pwdType="":this.pwdType="password"},handleLogin:function(){var t=this;this.$refs.loginForm.validate(function(e){e&&(e=!1,console.log(t.$store),t.$store.dispatch("LoginByUsername",t.loginForm).then(function(){t.loading=!1,t.$router.push({path:"/"})}).catch(function(){t.loading=!1}))})}})},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-container"},[n("el-form",{ref:"loginForm",staticClass:"card-box login-form",attrs:{autoComplete:"on",model:t.loginForm,rules:t.loginRules,"label-position":"left"}},[n("h3",{staticClass:"title"},[t._v("系统登录")]),t._v(" "),n("el-form-item",{attrs:{prop:"username"}},[n("span",{staticClass:"svg-container svg-container_login"},[n("i",{staticClass:"iconfont icon-user"})]),t._v(" "),n("el-input",{attrs:{name:"username",type:"text",autoComplete:"on",placeholder:"邮箱"},model:{value:t.loginForm.username,callback:function(e){t.$set(t.loginForm,"username",e)},expression:"loginForm.username"}})],1),t._v(" "),n("el-form-item",{attrs:{prop:"password"}},[n("span",{staticClass:"svg-container"},[n("i",{staticClass:"iconfont icon-password"})]),t._v(" "),n("el-input",{attrs:{name:"password",type:t.pwdType,autoComplete:"on",placeholder:"请输入密码"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.handleLogin(e)}},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}}),t._v(" "),n("span",{staticClass:"show-pwd",on:{click:t.showPwd}},[n("i",{staticClass:"iconfont icon-eye"})])],1),t._v(" "),n("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{type:"primary",loading:t.loading},nativeOn:{click:function(e){e.preventDefault(),t.handleLogin(e)}}},[t._v("登录\n    ")])],1)],1)},staticRenderFns:[]};var m=n("VU/8")(p,f,!1,function(t){n("mnY2")},null,null).exports,g={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n  home\n")])},staticRenderFns:[]};var h=n("VU/8")({},g,!1,function(t){n("Wg7T")},"data-v-a264be60",null).exports,v=n("mtWM"),w=n.n(v),b=n("lbHh"),_=n.n(b),y="Admin-Token";function T(){return _.a.get(y)}function k(){return _.a.remove(y)}var x={data:function(){return{tableData:[],gridData:[],loading:!0,dialogTableVisible:!1,video:{}}},created:function(){this.getAllData()},computed:u()({},Object(d.b)(["name"])),methods:{handleCommand:function(t){k(),this.$router.push({path:"/goods"})},openVideo:function(){var t=this;setTimeout(function(){t.$refs.wrapper.play()},300)},closeVideo:function(){this.$refs.wrapper.pause()},handleEdit:function(t,e){this.dialogTableVisible=!0,this.video={src:e.pictureUrl,poster:e.coverPath}},handleDelete:function(t,e){var n=this,o=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){o.removeVideo(e._id)}).catch(function(){n.$message({type:"info",message:"已取消删除"})})},formatter:function(t,e){return t.address},removeVideo:function(t){var e=this;w.a.get("http://lgdong.cn/removeBlessing",{params:{id:t}}).then(function(t){e.$message({type:"success",message:"删除成功!"}),e.getAllData()}).catch(function(t){console.log(t)})},getAllData:function(){var t=this;w.a.post("http://lgdong.cn/allData").then(function(e){t.loading=!1;for(var n=e.data,o=0;o<n.length;o++){var a=n[o];a.coverPath="http://lgdong.cn"+a.coverPath,a.pictureUrl="http://lgdong.cn"+a.pictureUrl}t.tableData=e.data}).catch(function(t){console.log(t)})}}},E={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{staticClass:"app-wrapper"},[n("el-container",[n("el-header",{staticStyle:{"text-align":"right","font-size":"12px"}},[n("el-dropdown",{attrs:{trigger:"click"},on:{command:t.handleCommand}},[n("i",{staticClass:"el-icon-setting",staticStyle:{"margin-right":"15px"}}),t._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[t._v("退出")])],1)],1),t._v(" "),n("span",[t._v(t._s(t.name))])],1),t._v(" "),n("el-main",[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData}},[n("el-table-column",{attrs:{label:"头像",width:"60"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("img",{staticStyle:{"border-radius":"50%"},attrs:{src:t.row.avatarUrl,height:"30px"}})]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"昵称"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.nickName))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作",width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){t.handleEdit(e.$index,e.row)}}},[t._v("预览")]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)],1)],1),t._v(" "),n("el-dialog",{attrs:{visible:t.dialogTableVisible,width:"430px"},on:{"update:visible":function(e){t.dialogTableVisible=e},close:t.closeVideo,open:t.openVideo}},[n("video",{ref:"wrapper",attrs:{src:t.video.src,width:"390px",controls:"controls",autoplay:"autoplay"}})])],1)},staticRenderFns:[]};var F=n("VU/8")(x,E,!1,function(t){n("l2qu")},"data-v-f7ff5ec2",null).exports;r.default.use(l.a);var S=new l.a({routes:[{path:"/",redirect:"/dashboard"},{path:"/login",component:m},{path:"/index",component:h},{path:"/dashboard",component:F}]}),$=n("zL8q"),C=n.n($),O=n("//Fk"),U=n.n(O),V=w.a.create({baseURL:Object({NODE_ENV:"production"}).BASE_API,timeout:5e3});V.interceptors.request.use(function(t){return H.getters.token&&(t.headers["X-Token"]=T()),t},function(t){console.log(t),U.a.reject(t)}),V.interceptors.response.use(function(t){return t},function(t){return console.log("err"+t),Object($.Message)({message:t.message,type:"error",duration:5e3}),U.a.reject(t)});var D=V;var N,A=function(t){var e=t.commit;t.state;return new U.a(function(t,n){var o;(o=T(),D({url:"http://lgdong.cn:3000/admin/vToken",method:"get",params:{token:o}})).then(function(o){o.data.status||n(new Error("something bad happened"));var a=o.data;e("SET_NAME",a.username),t(o)}).catch(function(t){n(t)})})},R=function(t,e){var n=t.commit,o=e.username.trim();return new U.a(function(t,a){(function(t,e){return D({url:"http://lgdong.cn:3000/admin/login",method:"post",data:{username:t,password:e}})})(o,e.password).then(function(e){var o,a=e.data;n("SET_TOKEN",a.token),o=e.data.token,_.a.set(y,o),t()}).catch(function(t){a(t)})})},L=function(t){var e=t.commit;return new U.a(function(t){e("SET_TOKEN",""),k(),t()})},M=function(t){return t.name},j={name:"",token:""},q=n("bOdI"),P=n.n(q),B=(N={},P()(N,"SET_NAME",function(t,e){t.name=e}),P()(N,"SET_TOKEN",function(t,e){t.token=e}),N);n("sax8");r.default.use(d.a);var H=new d.a.Store({actions:o,getters:a,state:j,mutations:B,strict:!1,plugins:[]});n("tvR6"),n("34KM");console.log(S);var K=["/login","/authredirect"];S.beforeEach(function(t,e,n){T()?H.dispatch("GetUserInfo").then(function(t){console.log(t)}).catch(function(){H.dispatch("FedLogOut").then(function(){$.Message.error("验证失败,请重新登录"),n({path:"/login"})})}):-1!==K.indexOf(t.path)?n():n("/login"),n()}),r.default.use(C.a),r.default.config.productionTip=!1,new r.default({el:"#app",store:H,router:S,template:"<App/>",components:{App:s}})},Wg7T:function(t,e){},l2qu:function(t,e){},mnY2:function(t,e){},sHY6:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.ec37193642795fcb6dfb.js.map