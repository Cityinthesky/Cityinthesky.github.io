"use strict";(self["webpackChunkbetly_dapp"]=self["webpackChunkbetly_dapp"]||[]).push([[803],{67197:function(e,s,t){t.d(s,{Z:function(){return f}});var l=t(73396),o=t(87139),a=t(49242),n=t(44870),c=(t(35038),t(31754)),i=t(57071),d=t(62991);const r={class:"bind allFlex column"},h={class:"popup-title Wcolor font-Eight font500 center"},p={key:0,class:"bind_ipt center Wcolor"},u={class:"bgPadding flex_between"};var m={__name:"swapAlert",props:{finish:Boolean,success:Boolean,hash:String,type:String,text:String,title:String,btn:String,empowerText:String,empower:Boolean,check:Boolean},emits:["closeFn","empowerFn","submit"],setup(e,{emit:s}){const t=e,{hash:m}=(0,n.BK)(t),{toClipboard:w}=((0,c.l)(),(0,i.Z)());return(s,t)=>{const c=(0,l.up)("van-button");return(0,l.wg)(),(0,l.iD)("div",r,[(0,l.wy)((0,l._)("span",{class:(0,o.C_)(["success-btn Wcolor font-Two",[e.success?"btnBg":"redBg"]])},(0,o.zw)(e.success?s.$t("success"):s.$t("fail")),3),[[a.F8,e.finish]]),(0,l.wy)((0,l.Wm)(d.Z,{class:"loading"},null,512),[[a.F8,!e.finish&&e.check]]),(0,l._)("p",h,(0,o.zw)(s.$t(e.title)),1),e.finish?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",p,[(0,l.WI)(s.$slots,"default")])),e.finish?((0,l.wg)(),(0,l.iD)("div",{key:1,class:(0,o.C_)(["bind_ipt bgPadding center",[e.success?"mainColor font-Ty":"redColor hashFont font-Four"]])},(0,o.zw)(e.success?s.$t(e.text):(0,n.SU)(m)),3)):(0,l.kq)("",!0),(0,l._)("div",u,[e.empower?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(c,{key:0,type:"primary",block:"",disabled:e.check,class:"font-Three",onClick:t[0]||(t[0]=e=>s.$emit("empowerFn"))},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(s.$t(e.empowerText)),1)])),_:1},8,["disabled"])),(0,l.wy)((0,l.Wm)(c,{class:"btn font-Three",type:"primary",disabled:!e.empower||e.check,block:"",onClick:t[1]||(t[1]=e=>s.$emit("submit"))},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(s.$t(e.btn)),1)])),_:1},8,["disabled"]),[[a.F8,!e.finish]]),(0,l.wy)((0,l.Wm)(c,{class:"btn font-Three",type:e.success?"primary":"danger",block:"",onClick:t[2]||(t[2]=e=>s.$emit("closeFn"))},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(s.$t("SwapAlert.close")),1)])),_:1},8,["type"]),[[a.F8,e.finish]])])])}}},w=t(40089);const _=(0,w.Z)(m,[["__scopeId","data-v-58a1f06e"]]);var f=_},95803:function(e,s,t){t.r(s),t.d(s,{default:function(){return me}});t(59813);var l=t(97668),o=t(73396),a=t(87139),n=t(49242),c=t(44870),i=t(80294),d=t(61020),r=t(21832),h=t.n(r),p=t(790),u=t(31754);const m="0xF3ab2a9991Ae3e6Fa14E9125a199B19dEAD4910F",w="0x79F19C9b83919e95A026196a6E5Eb1b707B12314",_="0xAd16f2DDe1578Fa08C1e2582a958E5c67D5eC61d",f="0x34e98Af4D093E919302C864D150787E9A3DbA8e6",y=(0,d.Q_)("set",{state:()=>({pool_methods:{},technology_methods:{},fee_methods:{},swap_methods:{},setEmpower:!1}),actions:{async getSetMethods(){const e=(0,u.l)(),s="BinanceChain"==e.walletType?window.BinanceChain:window.ethereum,t=new(h())(s),l=new t.eth.Contract(p.J,m);this.pool_methods=l.methods;const o=new t.eth.Contract(p.vi,_);this.fee_methods=o.methods;const a=new t.eth.Contract(p.YW,w);this.technology_methods=a.methods;const n=new t.eth.Contract(p.n0,f);this.swap_methods=n.methods,this.setEmpower=!0}}});var b=t(42325),k=t(22483),g=t(67197),x=t(15941);const S=e=>((0,o.dD)("data-v-2258c1de"),e=e(),(0,o.Cn)(),e),B={class:"padding"},A={class:"set-main titleBg"},F={class:"main_ul Wcolor allFlex column"},N={class:"flex_between Wcolor"},T=S((()=>(0,o._)("span",{class:"font-Six Bold"},"底池合约",-1))),C={class:"font-Two"},U={class:"flex_between ipt"},D={class:"flex_between ipt"},W={class:"li_btn"},v={class:"main_ul Wcolor allFlex column"},E={class:"flex_between Wcolor"},K=S((()=>(0,o._)("span",{class:"font-Six Bold"},"技术合约",-1))),Y={class:"font-Two"},z={class:"flex_between ipt"},$={class:"flex_between ipt"},V={class:"li_btn"},Z={class:"main_ul Wcolor allFlex column"},H={class:"flex_between Wcolor"},M=S((()=>(0,o._)("span",{class:"font-Six Bold"},"手续费合约",-1))),R={class:"font-Two"},q={class:"flex_between ipt"},I={class:"flex_between ipt"},L={class:"li_btn"},O={class:"main_ul Wcolor allFlex column"},j=S((()=>(0,o._)("li",{class:"flex_between Wcolor"},[(0,o._)("span",{class:"font-Six Bold"},"设置兑换手续费")],-1))),P={class:"flex_between ipt"},J={class:"li_btn"},Q={class:"main_ul Wcolor allFlex column"},G=S((()=>(0,o._)("li",{class:"flex_between Wcolor"},[(0,o._)("span",{class:"font-Six Bold"},"设置是否开启【SKYT兑USDT】")],-1))),X={class:"flex_between ipt"},ee={class:"li_btn"},se={class:"main_ul Wcolor allFlex column"},te=S((()=>(0,o._)("li",{class:"flex_between Wcolor"},[(0,o._)("span",{class:"font-Six Bold"},"设置最大兑换数量【SKYT兑USDT】")],-1))),le={class:"flex_between ipt"},oe={class:"li_btn"},ae={class:"font-Three"},ne={class:"mainColor"},ce={class:"mainColor"},ie="0xF3ab2a9991Ae3e6Fa14E9125a199B19dEAD4910F",de="0x79F19C9b83919e95A026196a6E5Eb1b707B12314",re="0xAd16f2DDe1578Fa08C1e2582a958E5c67D5eC61d";var he={__name:"index",setup(e){const s=(0,i.q)(),t=(0,k.tv)(),d=y(),r=(0,u.l)(),h=(0,c.qj)({SKYBal:"",USDTBal:"",poolNum:"",poolAddr:"",technologyBal:"",technologyNum:"",technologyAddr:"",feeNum:"",openFlag:!0,swapNumber:"",feeRate:"",feeAddr:"",alertShow:!1,finish:!1,empowerText:"EmpowerAlert.btn4",check:!1,success:!1,hash:"",number:"0",coin:"SKYT",address:"",title:"技术合约",num:1}),p=async(e,t)=>{const l=await s.tokenMethods.balanceOf(e).call();h[t]=(0,b.IN)(l+"")},m=async(e,t)=>{x.log("USDT");const l=await s.usdtMethods.balanceOf(e).call();h[t]=(0,b.IN)(l+"")},w=async()=>{try{const e=await d.technology_methods.withDrawToken(h.technologyAddr,(0,b.rB)(h.technologyNum,18)).send({from:r.address});h.finish=!0,h.success=!0,h.check=!1,h.hash=e.transactionHash,h.technologyAddr="",h.technologyNum="",p(de,"technologyBal")}catch(e){h.finish=!0,h.success=!1,h.check=!1,h.technologyAddr="",h.technologyNum="",h.hash=e.message}},_=async()=>{try{const e=await d.fee_methods.withDrawToken(h.feeAddr,(0,b.rB)(h.feeNum,18)).send({from:r.address});h.finish=!0,h.success=!0,h.check=!1,h.hash=e.transactionHash,h.feeAddr="",h.feeNum="",m(re,"USDTBal")}catch(e){h.finish=!0,h.success=!1,h.check=!1,h.feeAddr="",h.feeNum="",h.hash=e.message}},f=async()=>{try{const e=await d.pool_methods.withDrawToken(h.poolAddr,(0,b.rB)(h.poolNum,18)).send({from:r.address});h.finish=!0,h.success=!0,h.check=!1,h.hash=e.transactionHash,h.poolNum="",h.poolAddr="",p(ie,"SKYBal")}catch(e){h.finish=!0,h.success=!1,h.check=!1,h.poolNum="",h.poolAddr="",h.hash=e.message}},S=async()=>{try{const e=await d.swap_methods.setFeeRate((0,b.rB)(h.feeRate,4)).send({from:r.address});x.log("===="),h.finish=!0,h.success=!0,h.check=!1,h.hash=e.transactionHash}catch(e){h.finish=!0,h.success=!1,h.check=!1,h.hash=e.message}},he=async()=>{try{const e=await d.swap_methods.setLimit((0,b.rB)(h.swapNumber,18)).send({from:r.address});x.log("===="),h.finish=!0,h.success=!0,h.check=!1,h.hash=e.transactionHash}catch(e){h.finish=!0,h.success=!1,h.check=!1,h.hash=e.message}},pe=async()=>{try{const e=await d.swap_methods.setOpenFlag(h.openFlag).send({from:r.address});x.log("===="),h.finish=!0,h.success=!0,h.check=!1,h.hash=e.transactionHash}catch(e){h.finish=!0,h.success=!1,h.check=!1,h.hash=e.message}},ue=e=>{h.num=e,1==e&&+h.poolNum>+h.SKYBal||2==e&&+h.technologyNum>+h.technologyBal||3==e&&+h.feeNum>+h.USDTBal?(0,l.Z)("余额不足"):(h.coin=3==e?"USDT":"SKYT",h.number=1==e?h.poolNum:2==e?h.technologyNum:h.feeNum,h.address=1==e?h.poolAddr:2==e?h.technologyAddr:h.feeAddr,h.check=!1,h.hash="",h.success=!1,h.finish=!1,h.alertShow=!h.alertShow,h.title=1==e?"底池合约":2==e?"技术合约":3==e?"手续费合约":"设置手续费")},me=()=>{h.check||(h.check=!0,1==h.num?f():2==h.num?w():_())};(0,o.wF)((async()=>{r.address&&r.address.toLowerCase()!==r.mangerAddr.toLowerCase()&&t.replace("/home"),d.setEmpower||d.getSetMethods(),s.tokenEmpower||await s.getTokenMethods(),s.usdtEmpower||await s.getUsdtMethods(),p(ie,"SKYBal"),m(re,"USDTBal"),p(de,"technologyBal")}));const we=()=>{h.alertShow=!1};return(e,s)=>{const t=(0,o.up)("van-button"),l=(0,o.up)("van-popup");return(0,o.wg)(),(0,o.iD)("div",B,[(0,o._)("div",A,[(0,o._)("ul",F,[(0,o._)("li",N,[T,(0,o._)("span",C,"SKY余额："+(0,a.zw)(h.SKYBal>=0?Number(h.SKYBal).toFixed(4):"--"),1)]),(0,o._)("li",U,[(0,o.wy)((0,o._)("input",{type:"text",placeholder:"输入提现数量","onUpdate:modelValue":s[0]||(s[0]=e=>h.poolNum=e)},null,512),[[n.nr,h.poolNum]])]),(0,o._)("li",D,[(0,o.wy)((0,o._)("input",{type:"text",placeholder:"输入提现地址","onUpdate:modelValue":s[1]||(s[1]=e=>h.poolAddr=e)},null,512),[[n.nr,h.poolAddr]])]),(0,o._)("li",W,[(0,o.Wm)(t,{type:"primary",block:"",disabled:h.poolNum<=0||""==h.poolAddr,onClick:s[2]||(s[2]=e=>ue(1))},{default:(0,o.w5)((()=>[(0,o.Uk)("提现")])),_:1},8,["disabled"])])]),(0,o._)("ul",v,[(0,o._)("li",E,[K,(0,o._)("span",Y,"SKYT余额："+(0,a.zw)(h.technologyBal>=0?Number(h.technologyBal).toFixed(4):"--"),1)]),(0,o._)("li",z,[(0,o.wy)((0,o._)("input",{type:"text",placeholder:"输入提现数量","onUpdate:modelValue":s[3]||(s[3]=e=>h.technologyNum=e)},null,512),[[n.nr,h.technologyNum]])]),(0,o._)("li",$,[(0,o.wy)((0,o._)("input",{type:"text",placeholder:"输入提现地址","onUpdate:modelValue":s[4]||(s[4]=e=>h.technologyAddr=e)},null,512),[[n.nr,h.technologyAddr]])]),(0,o._)("li",V,[(0,o.Wm)(t,{type:"primary",block:"",disabled:h.technologyNum<=0||""==h.technologyAddr,onClick:s[5]||(s[5]=e=>ue(2))},{default:(0,o.w5)((()=>[(0,o.Uk)("提现")])),_:1},8,["disabled"])])]),(0,o._)("ul",Z,[(0,o._)("li",H,[M,(0,o._)("span",R,"USDT余额："+(0,a.zw)(h.USDTBal>=0?Number(h.USDTBal).toFixed(4):"--"),1)]),(0,o._)("li",q,[(0,o.wy)((0,o._)("input",{type:"text",placeholder:"输入提现数量","onUpdate:modelValue":s[6]||(s[6]=e=>h.feeNum=e)},null,512),[[n.nr,h.feeNum]])]),(0,o._)("li",I,[(0,o.wy)((0,o._)("input",{type:"text",placeholder:"输入提现地址","onUpdate:modelValue":s[7]||(s[7]=e=>h.feeAddr=e)},null,512),[[n.nr,h.feeAddr]])]),(0,o._)("li",L,[(0,o.Wm)(t,{type:"primary",block:"",disabled:h.feeNum<=0||""==h.feeAddr,onClick:s[8]||(s[8]=e=>ue(3))},{default:(0,o.w5)((()=>[(0,o.Uk)("提现")])),_:1},8,["disabled"])])]),(0,o._)("ul",O,[j,(0,o._)("li",P,[(0,o.wy)((0,o._)("input",{type:"text",placeholder:"输入手续费 例:5%就输入0.05、10%就输入0.1）","onUpdate:modelValue":s[9]||(s[9]=e=>h.feeRate=e)},null,512),[[n.nr,h.feeRate]])]),(0,o._)("li",J,[(0,o.Wm)(t,{type:"primary",block:"",disabled:h.feeRate<=0,onClick:s[10]||(s[10]=e=>S())},{default:(0,o.w5)((()=>[(0,o.Uk)("提交")])),_:1},8,["disabled"])])]),(0,o._)("ul",Q,[G,(0,o._)("li",X,[(0,o.wy)((0,o._)("input",{type:"text",placeholder:"输入false或true【false-关闭、true-开启】","onUpdate:modelValue":s[11]||(s[11]=e=>h.openFlag=e)},null,512),[[n.nr,h.openFlag]])]),(0,o._)("li",ee,[(0,o.Wm)(t,{type:"primary",block:"",onClick:s[12]||(s[12]=e=>pe())},{default:(0,o.w5)((()=>[(0,o.Uk)("提交")])),_:1})])]),(0,o._)("ul",se,[te,(0,o._)("li",le,[(0,o.wy)((0,o._)("input",{type:"text",placeholder:"输入最大兑换数量","onUpdate:modelValue":s[13]||(s[13]=e=>h.swapNumber=e)},null,512),[[n.nr,h.swapNumber]])]),(0,o._)("li",oe,[(0,o.Wm)(t,{type:"primary",block:"",disabled:h.swapNumber<=0,onClick:s[14]||(s[14]=e=>he())},{default:(0,o.w5)((()=>[(0,o.Uk)("提交")])),_:1},8,["disabled"])])])]),(0,o.Wm)(l,{show:h.alertShow,"onUpdate:show":s[15]||(s[15]=e=>h.alertShow=e),"close-on-click-overlay":!1},{default:(0,o.w5)((()=>[(0,o.Wm)(g.Z,{finish:h.finish,success:h.success,hash:h.hash,check:h.check,title:h.title,text:"SwapAlert.success3",btn:"withdraw",empower:!0,empowerText:h.empowerText,onCloseFn:we,onSubmit:me},{default:(0,o.w5)((()=>[(0,o._)("p",ae,[(0,o.Uk)(" 提现 "),(0,o._)("span",ne,(0,a.zw)(h.number)+(0,a.zw)(h.coin),1),(0,o.Uk)("到 "),(0,o._)("span",ce,(0,a.zw)(h.address),1)])])),_:1},8,["finish","success","hash","check","title","empowerText"])])),_:1},8,["show"])])}}},pe=t(40089);const ue=(0,pe.Z)(he,[["__scopeId","data-v-2258c1de"]]);var me=ue}}]);
//# sourceMappingURL=803.35a58ac8.js.map