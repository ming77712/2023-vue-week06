import{a as m}from"./axios-L6U4YIEh.js";import{S as c}from"./sweetalert2.all-cno0K6ji.js";import{_ as u,c as p,a as e,j as l,v as d,g as f,o as _}from"./index-XStB5XxU.js";var h={VITE_URL:"https://ec-course-api.hexschool.io/v2",VITE_PATH:"ming777",BASE_URL:"/2023-vue-week06/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:w}=h,o={icon:"",title:"",showConfirmButton:!1,timer:1500},g={data(){return{user:{username:"",password:""}}},methods:{login(){m.post(`${w}/admin/signin`,this.user).then(s=>{const{token:t,expired:n}=s.data;document.cookie=`hexToken= ${t}; expires=${new Date(n)};`,this.setSweetMessageSuccess(s.data.message),c.fire(o),setTimeout(()=>{this.$router.push("/admin/products")},1500)}).catch(s=>{this.setSweetMessageError(s.response.data.message),c.fire(o)})},setSweetMessageSuccess(s){o.icon="success",o.title=s,o.timer=1500},setSweetMessageError(s){o.icon="error",o.title=s,o.timer=2500}}},v={class:"container"},x={class:"row justify-content-center"},S=e("h1",{class:"h3 my-3 font-weight-normal text-center"},"請先登入",-1),E={class:"col-8"},b={id:"form",class:"form-signin"},M={class:"form-floating mb-3"},k=e("label",{for:"username"},"Email address",-1),T={class:"form-floating"},V=e("label",{for:"password"},"Password",-1),y=e("p",{class:"mt-5 mb-3 text-muted text-center"},"© 2021~∞ - 六角學院",-1);function B(s,t,n,D,i,a){return _(),p("div",v,[e("div",x,[S,e("div",E,[e("form",b,[e("div",M,[l(e("input",{"onUpdate:modelValue":t[0]||(t[0]=r=>i.user.username=r),type:"email",class:"form-control",id:"username",placeholder:"name@example.com",required:"",autofocus:""},null,512),[[d,i.user.username]]),k]),e("div",T,[l(e("input",{"onUpdate:modelValue":t[1]||(t[1]=r=>i.user.password=r),type:"password",class:"form-control",id:"password",placeholder:"Password",required:""},null,512),[[d,i.user.password]]),V]),e("button",{onClick:t[2]||(t[2]=f((...r)=>a.login&&a.login(...r),["prevent"])),class:"btn btn-lg btn-primary w-100 mt-3",type:"submit"}," 登入 ")])])]),y])}const P=u(g,[["render",B]]);export{P as default};
