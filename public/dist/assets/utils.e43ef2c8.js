import{E as i,s as l}from"./index.84e92f8c.js";var n={name:"utils",saveConfig:t=>{localStorage.setItem("config",JSON.stringify(t))},showerror:t=>{i.error(t)},showconfirm:t=>{l.confirm(t,"\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{i({type:"success",message:"\u9000\u51FA\u6210\u529F"})}).catch(()=>{})},createChartTitle:t=>({show:!0,text:t,textStyle:{color:"#fff",fontWeight:"normal"},x:"center",y:"5vh"}),createChartGaid:(t,r,e,o)=>({left:t||"30vh",right:r||"10vh",top:e||"10vh",bottom:o||"40vh"}),createChartBaseOption:function(t,r,e,o,a,s){return{title:this.createChartTitle(t),tooltip:{show:!0,trigger:"axis"},grid:this.createChartGaid(r,e,o,a),xAxis:{type:"category",axisLine:{show:!0,lineStyle:{color:this.getChartXColor()}},axisLabel:{color:this.getChartXTextColor()},axisTick:{show:!1},splitLine:{show:!1},boundaryGap:!1,data:s},yAxis:{type:"value",axisLabel:{color:this.getChartYTextColor()},axisLine:{show:!0,lineStyle:{color:this.getChartXColor()}},splitLine:{lineStyle:{color:this.getChartYColor(),type:"dashed"}}}}},getChartXColor:()=>"#2196f344",getChartXTextColor:()=>"#2196f3",getChartYColor:()=>"#2196f344",getChartYTextColor:()=>"#2196f3",random:t=>(Math.random(t)*t).toFixed(0),fomateDate(t,r){let e=r||"yyyy-MM-dd hh:mm:ss";/(y+)/.test(e)&&(e=e.replace(RegExp.$1,t.getFullYear()));const o={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(let a in o)if(new RegExp(`(${a})`).test(e)){const s=o[a]+"";e=e.replace(RegExp.$1,RegExp.$1.length==1?s:("00"+s).substr(s.length))}return e}};Date.prototype.format=function(t){var r={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var e in r)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,RegExp.$1.length==1?r[e]:("00"+r[e]).substr((""+r[e]).length)));return t};export{n as u};