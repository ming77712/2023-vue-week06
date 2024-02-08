import{e as l}from"./index-q-bRCVky.js";import{S as d,a as s}from"./sweetalert2.all-sDImy6Vf.js";var m={VITE_URL:"https://ec-course-api.hexschool.io/v2",VITE_PATH:"ming777",BASE_URL:"/2023-vue-week06/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:i,VITE_PATH:o}=m,a=d.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3,timerProgressBar:!0}),f=l("cartStore",{state:()=>({carts:[],loadingStatus:""}),actions:{getCart(){s.get(`${i}/api/${o}/cart`).then(t=>{this.carts=t.data.data}).catch(t=>{a.fire({icon:"error",title:t.response.data.message})})},addToCart(t,e,c=1){const n={product_id:t,qty:c};this.loadingStatus=t,s.post(`${i}/api/${o}/cart`,{data:n}).then(r=>{a.fire({icon:"success",title:r.data.message}),this.loadingStatus="",this.getCart(),e&&e.hide()}).catch(r=>{a.fire({icon:"error",title:r.response.data.message})})},changeQty(t,e,c){const n={product_id:e,qty:Number(c.target.value)};s.put(`${i}/api/${o}/cart/${t}`,{data:n}).then(r=>{a.fire({icon:"success",title:r.data.message}),this.getCart()}).catch(r=>{a.fire({icon:"error",title:r.response.data.message})})},removeCartAllItem(){d.fire({title:"確定要清空購物車?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"確定",cancelButtonText:"取消"}).then(t=>{t.isConfirmed&&s.delete(`${i}/api/${o}/carts`).then(e=>{a.fire({icon:"success",title:e.data.message}),this.getCart()}).catch(e=>{a.fire({icon:"error",title:e.response.data.message})})})},removeCartItem(t){s.delete(`${i}/api/${o}/cart/${t}`).then(e=>{a.fire({icon:"success",title:e.data.message}),this.getCart()}).catch(e=>{a.fire({icon:"error",title:e.response.data.message})})}}});export{f as c};