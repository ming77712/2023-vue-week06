import{a as b}from"./sweetalert2.all-7tlv3fUz.js";import{_ as l,r as c,o as r,c as u,a as s,b as t,w as n,e as o,f as v,m as $,h as k,d as x,i as g,F as w}from"./index-nSxjhW7Q.js";import{a as d}from"./adminStore-rs0II8jf.js";const N={},V={class:"sideBar d-flex flex-column justify-content-between navbar-dark bg-dark h-100 p-8"},B={class:"navbar-nav"},S={class:"d-flex flex-column gap-6 mt-9"},C=s("i",{class:"bi bi-suitcase me-2"},null,-1),L=s("i",{class:"bi bi-list-ul me-2"},null,-1),R=s("i",{class:"bi bi-ticket-detailed me-2"},null,-1),y=s("i",{class:"bi bi-vector-pen me-2"},null,-1);function A(a,i,_,m,f,p){const e=c("RouterLink");return r(),u("nav",V,[s("div",B,[t(e,{to:"/",class:"navbar-brand fs-3"},{default:n(()=>[o("遊日本")]),_:1}),s("div",S,[t(e,{to:"/admin/products",class:"nav-link fs-5"},{default:n(()=>[C,o("行程管理")]),_:1}),t(e,{to:"/admin/orders",class:"nav-link fs-5"},{default:n(()=>[L,o("訂單列表")]),_:1}),t(e,{to:"/admin/coupons",class:"nav-link fs-5"},{default:n(()=>[R,o("優惠券管理")]),_:1}),t(e,{to:"/admin/article",class:"nav-link fs-5"},{default:n(()=>[y,o("貼文管理")]),_:1})])])])}const j=l(N,[["render",A]]),F={methods:{...v(d,["checkLogin","logout"])},mounted(){const a=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");b.defaults.headers.common.Authorization=a,this.checkLogin(this.$router.push)},computed:{...$(d,["status"])},components:{NavSidebar:j}},T={class:"ms-74"},z={class:"d-flex justify-content-end bg-white p-3"},D=s("i",{class:"bi bi-box-arrow-right me-2"},null,-1),E={class:"container-fluid"};function M(a,i,_,m,f,p){const e=c("NavSidebar"),h=c("RouterView");return r(),u(w,null,[t(e),s("div",T,[s("div",z,[s("a",{href:"#",class:"fs-5",onClick:i[0]||(i[0]=k(q=>a.logout(this.$router.push),["prevent"]))},[D,o("登出")])]),s("div",E,[a.status?(r(),x(h,{key:0})):g("",!0)])])],64)}const J=l(F,[["render",M]]);export{J as default};
