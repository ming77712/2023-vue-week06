import{a as g,S as c}from"./sweetalert2.all-7tlv3fUz.js";import{f as w,m as U,_ as y,o as a,c as r,a as t,k as i,v as u,i as f,l as $,F as v,g as T,e as V,t as _,r as P,b as M,n as R}from"./index-nSxjhW7Q.js";import{s as p}from"./sweetMessageStore-ZCkrV0Jk.js";import{M as S}from"./bootstrap.esm-TTjMTX3M.js";import{P as A}from"./PaginationComponent-i-ZEAOqT.js";var C={VITE_URL:"https://ec-course-api.hexschool.io/v2",VITE_PATH:"ming777",BASE_URL:"/2023-vue-week06/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:E,VITE_PATH:k}=C,L={props:["currentProduct","isNew"],data(){return{productModal:null,tempProduct:{imagesUrl:[]},formData:null}},methods:{...w(p,["setSweetMessageSuccess","setSweetMessageError"]),addProduct(){this.tempProduct.imagesUrl.length===0&&this.tempProduct.imagesUrl.push(""),g.post(`${E}/api/${k}/admin/product`,{data:this.tempProduct}).then(o=>{this.setSweetMessageSuccess(o.data.message),c.fire(this.sweetMessage),setTimeout(()=>{this.productModal.hide(),this.$emit("refreshProducts")},1500)}).catch(o=>{this.setSweetMessageError(o.data.message),c.fire(this.sweetMessage)})},editProduct(){this.tempProduct.imagesUrl.length===0&&this.tempProduct.imagesUrl.push(""),g.put(`${E}/api/${k}/admin/product/${this.tempProduct.id}`,{data:this.tempProduct}).then(o=>{this.setSweetMessageSuccess(o.data.message),c.fire(this.sweetMessage),setTimeout(()=>{this.productModal.hide(),this.$emit("refreshProducts")},1500)}).catch(o=>{this.setSweetMessageError(o.data.message),c.fire(this.sweetMessage)})},uploadImg(o){this.formData=new FormData,this.formData.append("file-to-upload",o.target.files[0]),typeof this.formData=="object"&&g.post(`${E}/api/${k}/admin/upload`,this.formData).then(e=>{this.tempProduct.imageUrl=e.data.imageUrl}).catch(e=>{this.setSweetMessageError(e.message),c.fire(this.sweetMessage)})}},watch:{currentProduct(){this.tempProduct=this.currentProduct}},mounted(){this.productModal=new S(this.$refs.productModal,{keyboard:!1,backdrop:"static"}),this.$emit("productInstance",this.productModal),this.tempProduct=this.currentProduct},computed:{...U(p,["sweetMessage"])}},H={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},N={class:"modal-dialog modal-xl"},O={class:"modal-content border-0"},B={class:"modal-header bg-dark text-white"},F={id:"productModalLabel",class:"modal-title"},j={key:0},z={key:1},q=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),G={class:"modal-body"},J={class:"row mb-4"},K={class:"col-sm-4"},Q={class:"mb-2"},W={class:"mb-3"},X=t("label",{for:"imageUrl",class:"form-label"},"輸入圖片網址",-1),Y={class:"mb-3"},Z=t("label",{for:"upload",class:"form-label"},"或 上傳圖片",-1),tt=["src"],et={class:"col-sm-8"},st={class:"mb-3"},ot=t("label",{for:"title",class:"form-label"},"標題",-1),lt={class:"row"},dt={class:"mb-3 col-md-6"},at=t("label",{for:"category",class:"form-label"},"分類",-1),rt={class:"mb-3 col-md-6"},nt=t("label",{for:"price",class:"form-label"},"單位",-1),it={class:"row"},ct={class:"mb-3 col-md-6"},ut=t("label",{for:"origin_price",class:"form-label"},"原價",-1),mt={class:"mb-3 col-md-6"},pt=t("label",{for:"price",class:"form-label"},"售價",-1),ht=t("hr",null,null,-1),_t={class:"mb-3"},gt=t("label",{for:"description",class:"form-label"},"產品描述",-1),bt={class:"mb-3"},ft=t("label",{for:"content",class:"form-label"},"說明內容",-1),Pt={class:"mb-3"},Mt={class:"form-check"},vt=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),wt=t("h4",{class:"mb-2"},"多圖新增",-1),Ut={class:"row mb-2"},yt={class:"mb-3"},It=["for"],Et=["id","onUpdate:modelValue"],kt=["src"],St={class:"modal-footer"},Vt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Tt(o,e,m,b,s,d){return a(),r("div",H,[t("div",N,[t("div",O,[t("div",B,[t("h5",F,[m.isNew?(a(),r("span",j,"新增產品")):(a(),r("span",z,"編輯產品"))]),q]),t("div",G,[t("div",J,[t("div",K,[t("div",Q,[t("div",W,[X,i(t("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":e[0]||(e[0]=l=>s.tempProduct.imageUrl=l)},null,512),[[u,s.tempProduct.imageUrl]])]),t("div",Y,[Z,t("input",{id:"upload",type:"file",name:"file-to-upload",onChange:e[1]||(e[1]=(...l)=>d.uploadImg&&d.uploadImg(...l))},null,32)]),s.tempProduct.imageUrl?(a(),r("img",{key:0,class:"img-fluid",src:s.tempProduct.imageUrl,alt:"主圖"},null,8,tt)):f("",!0)])]),t("div",et,[t("div",st,[ot,i(t("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":e[2]||(e[2]=l=>s.tempProduct.title=l)},null,512),[[u,s.tempProduct.title]])]),t("div",lt,[t("div",dt,[at,i(t("input",{id:"category",type:"text",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":e[3]||(e[3]=l=>s.tempProduct.category=l)},null,512),[[u,s.tempProduct.category]])]),t("div",rt,[nt,i(t("input",{id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":e[4]||(e[4]=l=>s.tempProduct.unit=l)},null,512),[[u,s.tempProduct.unit]])])]),t("div",it,[t("div",ct,[ut,i(t("input",{id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":e[5]||(e[5]=l=>s.tempProduct.origin_price=l)},null,512),[[u,s.tempProduct.origin_price,void 0,{number:!0}]])]),t("div",mt,[pt,i(t("input",{id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":e[6]||(e[6]=l=>s.tempProduct.price=l)},null,512),[[u,s.tempProduct.price,void 0,{number:!0}]])])]),ht,t("div",_t,[gt,i(t("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述","onUpdate:modelValue":e[7]||(e[7]=l=>s.tempProduct.description=l)},`
                `,512),[[u,s.tempProduct.description]])]),t("div",bt,[ft,i(t("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入說明內容","onUpdate:modelValue":e[8]||(e[8]=l=>s.tempProduct.content=l)},`
                `,512),[[u,s.tempProduct.content]])]),t("div",Pt,[t("div",Mt,[i(t("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":e[9]||(e[9]=l=>s.tempProduct.is_enabled=l)},null,512),[[$,s.tempProduct.is_enabled]]),vt])])])]),wt,s.tempProduct.imagesUrl?(a(),r(v,{key:0},[t("div",Ut,[(a(!0),r(v,null,T(s.tempProduct.imagesUrl,(l,h)=>(a(),r("div",{class:"col-6 mb-1",key:h},[t("div",yt,[t("label",{for:"images"+h,class:"form-label"},"圖片網址",8,It),i(t("input",{id:"images"+h,"onUpdate:modelValue":I=>s.tempProduct.imagesUrl[h]=I,type:"text",class:"form-control",placeholder:"請輸入圖片連結"},null,8,Et),[[u,s.tempProduct.imagesUrl[h]]])]),t("img",{class:"images",src:l},null,8,kt)]))),128))]),!s.tempProduct.imagesUrl.length||s.tempProduct.imagesUrl.length<5?(a(),r("button",{key:0,class:"btn btn-outline-primary btn-sm d-block w-100 mb-3",onClick:e[10]||(e[10]=l=>s.tempProduct.imagesUrl.push(""))}," 新增圖片 ")):f("",!0),s.tempProduct.imagesUrl.length?(a(),r("button",{key:1,class:"btn btn-outline-danger btn-sm d-block w-100",onClick:e[11]||(e[11]=l=>s.tempProduct.imagesUrl.pop())}," 刪除圖片 ")):f("",!0)],64)):f("",!0)]),t("div",St,[Vt,m.isNew?(a(),r("button",{key:0,type:"button",class:"btn btn-primary",onClick:e[12]||(e[12]=(...l)=>d.addProduct&&d.addProduct(...l))}," 確認 ")):(a(),r("button",{key:1,type:"button",class:"btn btn-primary",onClick:e[13]||(e[13]=(...l)=>d.editProduct&&d.editProduct(...l))}," 確認 "))])])])],512)}const Dt=y(L,[["render",Tt]]);var xt={VITE_URL:"https://ec-course-api.hexschool.io/v2",VITE_PATH:"ming777",BASE_URL:"/2023-vue-week06/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:$t,VITE_PATH:Rt}=xt,At={props:["currentProduct"],data(){return{delProductModal:null}},methods:{...w(p,["setSweetMessageSuccess","setSweetMessageError"]),delProduct(){g.delete(`${$t}/api/${Rt}/admin/product/${this.currentProduct.id}`).then(o=>{this.setSweetMessageSuccess(o.data.message),c.fire(this.sweetMessage),setTimeout(()=>{this.delProductModal.hide(),this.$emit("refreshProducts")},1500)}).catch(o=>{this.setSweetMessageError(o.data.message),c.fire(this.sweetMessage)})}},mounted(){this.delProductModal=new S(this.$refs.delProductModal,{keyboard:!1,backdrop:"static"}),this.$emit("productDeleteInstance",this.delProductModal)},computed:{...U(p,["sweetMessage"])}},Ct={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},Lt={class:"modal-dialog"},Ht={class:"modal-content border-0"},Nt=t("div",{class:"modal-header bg-danger text-white"},[t("h5",{id:"delProductModalLabel",class:"modal-title"},[t("span",null,"刪除產品")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Ot={class:"modal-body"},Bt={class:"text-danger"},Ft={class:"modal-footer"},jt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function zt(o,e,m,b,s,d){return a(),r("div",Ct,[t("div",Lt,[t("div",Ht,[Nt,t("div",Ot,[V(" 是否刪除 "),t("strong",Bt,_(m.currentProduct.title),1),V(" 商品(刪除後將無法恢復)。 ")]),t("div",Ft,[jt,t("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=(...l)=>d.delProduct&&d.delProduct(...l))}," 確認刪除 ")])])])],512)}const qt=y(At,[["render",zt]]);var Gt={VITE_URL:"https://ec-course-api.hexschool.io/v2",VITE_PATH:"ming777",BASE_URL:"/2023-vue-week06/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:Jt,VITE_PATH:Kt}=Gt,Qt={data(){return{uploadImgModal:null,formData:null,imageUrl:""}},methods:{...w(p,["setSweetMessageSuccess","setSweetMessageError"]),uploadImg(){typeof this.formData=="object"&&g.post(`${Jt}/api/${Kt}/admin/upload`,this.formData).then(o=>{this.imageUrl=o.data.imageUrl,this.setSweetMessageSuccess("圖片新增成功"),c.fire(this.sweetMessage)}).catch(o=>{this.setSweetMessageError(o.message),c.fire(this.sweetMessage)})},handleUploadImg(o){this.formData=new FormData,this.formData.append("file-to-upload",o.target.files[0])}},mounted(){this.uploadImgModal=new S(this.$refs.uploadImgModal,{keyboard:!1,backdrop:"static"}),this.$emit("UploadImgInstance",this.uploadImgModal)},computed:{...U(p,["sweetMessage"])}},Wt={id:"uploadImgModal",ref:"uploadImgModal",class:"modal fade",tabindex:"-1","aria-labelledby":"uploadImgModalLabel","aria-hidden":"true"},Xt={class:"modal-dialog"},Yt={class:"modal-content border-0"},Zt=t("div",{class:"modal-header bg-dark text-white"},[t("h5",{id:"delProductModalLabel",class:"modal-title"},[t("span",null,"上傳圖片")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),te={class:"modal-body"},ee={class:"mb-2"},se=["src"],oe={class:"mb-2"},le=t("label",{for:"imgUrl",class:"form-label"},"圖片位址",-1),de=["value"],ae={class:"modal-footer"},re=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function ne(o,e,m,b,s,d){return a(),r("div",Wt,[t("div",Xt,[t("div",Yt,[Zt,t("div",te,[t("form",ee,[t("input",{type:"file",name:"file-to-upload",onChange:e[0]||(e[0]=(...l)=>d.handleUploadImg&&d.handleUploadImg(...l))},null,32)]),t("div",null,[t("img",{class:"mb-2",src:s.imageUrl},null,8,se),t("div",oe,[le,t("input",{id:"imgUrl",type:"text",class:"form-control",value:s.imageUrl},null,8,de)])])]),t("div",ae,[re,t("button",{type:"button",class:"btn btn-primary",onClick:e[1]||(e[1]=(...l)=>d.uploadImg&&d.uploadImg(...l))}," 上傳 ")])])])],512)}const ie=y(Qt,[["render",ne]]);var ce={VITE_URL:"https://ec-course-api.hexschool.io/v2",VITE_PATH:"ming777",BASE_URL:"/2023-vue-week06/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:ue,VITE_PATH:me}=ce,pe={data(){return{productModal:null,delProductModal:null,uploadImgModal:null,currentProduct:{imagesUrl:[]},products:[],pagination:{},currentPage:1,isNew:!1}},methods:{...w(p,["setSweetMessageSuccess","setSweetMessageError"]),getAllProduct(o=1){this.currentPage=o,g.get(`${ue}/api/${me}/admin/products?page=${o}`).then(e=>{const{products:m,pagination:b}=e.data;this.products=m,this.pagination=b}).catch(e=>{this.setSweetMessageError(e.data.message),c.fire(this.sweetMessage)})},getProductModal(o){this.productModal=o},getProductDeleteModal(o){this.delProductModal=o},getUploadImgModal(o){this.uploadImgModal=o},refreshProducts(){this.getAllProduct(this.currentPage)},openModal(o,e){o==="productModal"?(this.currentProduct={imagesUrl:[]},this.isNew=!0,this.productModal.show()):o==="editModal"?(this.currentProduct={...e},this.isNew=!1,this.productModal.show()):o==="delProductModal"?(this.currentProduct=e,this.delProductModal.show()):o==="uploadImgModal"&&this.uploadImgModal.show()}},mounted(){this.getAllProduct()},computed:{...U(p,["sweetMessage"])},components:{ProductAdminModal:Dt,ProductDeleteModal:qt,Pagination:A,UploadImgModal:ie}},he=t("h3",{class:"mt-4"},"行程管理",-1),_e={class:"text-end mt-4"},ge={class:"bg-white mt-4 p-3"},be={class:"table table-striped mb-0"},fe=t("thead",null,[t("tr",null,[t("th",null,"分類"),t("th",null,"產品名稱"),t("th",null,"原價"),t("th",null,"售價"),t("th",null,"是否啟用"),t("th",null,"編輯")])],-1),Pe={class:"btn-group"},Me=["onClick"],ve=["onClick"];function we(o,e,m,b,s,d){const l=P("pagination"),h=P("Product-Admin-Modal"),I=P("Product-Delete-Modal"),D=P("Upload-Img-Modal");return a(),r(v,null,[he,t("div",_e,[t("button",{onClick:e[0]||(e[0]=n=>d.openModal("uploadImgModal")),class:"btn btn-primary me-2"}," 上傳圖片 "),t("button",{onClick:e[1]||(e[1]=n=>d.openModal("productModal")),class:"btn btn-primary"}," 建立新的產品 ")]),t("div",ge,[t("table",be,[fe,t("tbody",null,[(a(!0),r(v,null,T(s.products,n=>(a(),r("tr",{key:n.id},[t("td",null,_(n.category),1),t("td",null,_(n.title),1),t("td",null,_(n.origin_price),1),t("td",null,_(n.price),1),t("td",null,[t("span",{class:R(n.is_enabled?"text-success":"text-danger")},_(n.is_enabled?"啟用":"未啟用"),3)]),t("td",null,[t("div",Pe,[t("button",{onClick:x=>d.openModal("editModal",n),type:"button",class:"btn btn-outline-primary btn-sm"}," 編輯 ",8,Me),t("button",{onClick:x=>d.openModal("delProductModal",n),type:"button",class:"btn btn-outline-danger btn-sm"}," 刪除 ",8,ve)])])]))),128))])])]),M(l,{pages:s.pagination,onChangePage:d.getAllProduct},null,8,["pages","onChangePage"]),M(h,{"current-product":s.currentProduct,"is-new":s.isNew,onProductInstance:d.getProductModal,onRefreshProducts:d.refreshProducts},null,8,["current-product","is-new","onProductInstance","onRefreshProducts"]),M(I,{"current-product":s.currentProduct,onProductDeleteInstance:d.getProductDeleteModal,onRefreshProducts:d.refreshProducts},null,8,["current-product","onProductDeleteInstance","onRefreshProducts"]),M(D,{onUploadImgInstance:d.getUploadImgModal},null,8,["onUploadImgInstance"])],64)}const Se=y(pe,[["render",we]]);export{Se as default};
