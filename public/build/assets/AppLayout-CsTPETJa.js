import{C as _,j as w,D as p,o as a,f as i,b as t,a as o,w as s,d as r,c as N,F as m,e as v,g as u,t as g,n as f,r as D}from"./app-DRJRTPMa.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";const C=_({props:{title:String},components:{Link:w},data(){return{showingNavigationDropdown:!1}}}),L={class:"bg-white border-b border-gray-100"},S={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},j={class:"flex justify-between h-16"},M={class:"flex"},B={class:"flex-shrink-0 flex items-center"},O={class:"hidden sm:flex sm:items-center sm:ml-6"},V={class:"ml-3 relative"},T={class:"flex items-center space-x-3 relative"},A=t("button",{type:"submit",class:"hover:text-yellow-500 transition"}," Log Out ",-1),E=[A],F={key:0,class:"bg-red-600 text-white text-xs rounded-md p-1 absolute",style:{top:"-10px",right:"-8px"}},H={class:"-mr-2 flex items-center sm:hidden"},P={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},R={key:0,class:"pt-2 pb-3 space-y-1"},z={class:"pt-2 pb-3 space-y-1"},I={class:"pt-2 pb-3 space-y-1"},Y={class:"pt-2 pb-3 space-y-1"},q={key:2,class:"pt-2 pb-3 space-y-1"},G={class:"ml-2"},J={key:3,class:"pt-4 pb-1 border-t border-gray-200"},K={class:"mt-3 space-y-1"};function Q(e,l,b,k,$,x){const n=p("Link"),h=p("icon"),d=p("jet-responsive-nav-link");return a(),i("nav",L,[t("div",S,[t("div",j,[t("div",M,[t("div",B,[o(n,{href:e.route("welcome"),class:"font-logo block w-auto hover:text-yellow-500 transition"},{default:s(()=>[r(" Inertia eshop ")]),_:1},8,["href"])])]),t("div",O,[t("div",V,[t("div",T,[e.$page.props.user?(a(),N(n,{key:0,href:e.route("dashboard"),class:"hover:text-yellow-500 transition"},{default:s(()=>[r(" Dashboard ")]),_:1},8,["href"])):(a(),i(m,{key:1},[o(n,{href:e.route("register"),class:"hover:text-yellow-500 transition"},{default:s(()=>[r(" Register ")]),_:1},8,["href"]),o(n,{href:e.route("event"),class:"hover:text-yellow-500 transition"},{default:s(()=>[r(" Event1234 ")]),_:1},8,["href"]),o(n,{href:e.route("login"),class:"hover:text-yellow-500 transition"},{default:s(()=>[r(" Login ")]),_:1},8,["href"])],64)),o(n,{href:e.route("shop.index"),class:"hover:text-yellow-500 transition"},{default:s(()=>[r(" Shop ")]),_:1},8,["href"]),e.$page.props.user?(a(),i("form",{key:2,method:"POST",onSubmit:l[0]||(l[0]=v((...c)=>e.logout&&e.logout(...c),["prevent"]))},E,32)):u("",!0),o(n,{href:e.route("cart.index"),class:"hover:text-red-700 transition"},{default:s(()=>[e.$page.props.cartCount>0?(a(),i("span",F,g(e.$page.props.cartCount),1)):u("",!0),o(h,{name:"cart",class:"w-4 h-4 fill-current"})]),_:1},8,["href"])])])]),t("div",H,[t("button",{id:"hamburger",onClick:l[1]||(l[1]=c=>e.showingNavigationDropdown=!e.showingNavigationDropdown),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition"},[(a(),i("svg",P,[t("path",{class:f({hidden:e.showingNavigationDropdown,"inline-flex":!e.showingNavigationDropdown}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),t("path",{class:f({hidden:!e.showingNavigationDropdown,"inline-flex":e.showingNavigationDropdown}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),t("div",{class:f([{block:e.showingNavigationDropdown,hidden:!e.showingNavigationDropdown},"sm:hidden"])},[e.$page.props.user?(a(),i("div",R,[o(d,{href:e.route("dashboard"),active:e.route().current("dashboard")},{default:s(()=>[r(" Dashboard ")]),_:1},8,["href","active"])])):(a(),i(m,{key:1},[t("div",z,[o(d,{href:e.route("register")},{default:s(()=>[r(" Register ")]),_:1},8,["href"])]),t("div",I,[o(d,{href:e.route("login")},{default:s(()=>[r(" Login ")]),_:1},8,["href"])])],64)),t("div",Y,[o(d,{href:e.route("shop.index")},{default:s(()=>[r(" Shop ")]),_:1},8,["href"])]),e.$page.props.cartCount>0?(a(),i("div",q,[o(n,{href:e.route("cart.index"),class:"flex items-center pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-red-700 hover:border-red-700 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition"},{default:s(()=>[o(h,{name:"cart",class:"w-4 h-4 text-red-700 fill-current"}),t("span",G,g(e.$page.props.cartCount)+" item(s) in cart ",1)]),_:1},8,["href"])])):u("",!0),e.$page.props.user?(a(),i("div",J,[t("div",K,[t("form",{method:"POST",onSubmit:l[2]||(l[2]=v((...c)=>e.logout&&e.logout(...c),["prevent"]))},[o(d,{as:"button"},{default:s(()=>[r(" Log Out ")]),_:1})],32)])])):u("",!0)],2)])}const U=y(C,[["render",Q]]),W=_({props:{title:String},components:{Link:w,Nav:U},data(){return{showingNavigationDropdown:!1}},methods:{logout(){this.$inertia.post(route("logout"))}}}),X=t("meta",{name:"description",content:"Your page description"},null,-1),Z={class:"min-h-screen bg-gray-100"},ee=t("header",{class:"bg-gray-700 shadow"},[t("div",{class:"max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8"},[t("h2",{class:"text-white text-center leading-tight"}," Lorem ipsum dolor sit amet. ")])],-1);function te(e,l,b,k,$,x){const n=p("Head"),h=p("Nav");return a(),i("div",null,[o(n,{title:e.title},null,8,["title"]),o(n,null,{default:s(()=>[t("title",null,g(e.title),1),X]),_:1}),t("div",Z,[o(h),ee,t("main",null,[D(e.$slots,"default")])])])}const ne=y(W,[["render",te]]);export{ne as A};
