// true // false // null // this // window //
// while // for // break // continue
// typeof VARIABLE // "undefined" // "string" // "object" // "number" // "boolean" // "function"
// window.status = MESSAGE; // alert(MESSAGE);
// VARIABLE.toString(n) // 数値を n 進の文字列に変換．

// PassiveMessage

function PassiveMessage_Entry_Content(sObjProperNoun, sImageName, vDefContainerW, vDefContainerH, vOriginalW, vOriginalH, vLowerLeveru,d2MessageMatrix){
   
   if( navigator.appName==sInternetExplorer ){
      
      // window.status = sInternetExplorer;
      
      Explorer_PassiveMessage_Entry_Content(sObjProperNoun, sImageName, vDefContainerW, vDefContainerH, vOriginalW, vOriginalH, vLowerLeveru,d2MessageMatrix);
      
   }
   
   else if( (navigator.appName==sNetscapeNavigator) && (vVerCompatible<5) ){
      
      // window.status = sNetscapeNavigator;
      
      Netscape_PassiveMessage_Entry_Content(sObjProperNoun, sImageName, vDefContainerW, vDefContainerH, vOriginalW, vOriginalH, vLowerLeveru,d2MessageMatrix);
      
   }
   
   else{ // Gecko
      
      // alert("Gecko");
      
      Gecko_PassiveMessage_Entry_Content(sObjProperNoun, sImageName, vDefContainerW, vDefContainerH, vOriginalW, vOriginalH, vLowerLeveru,d2MessageMatrix);
      
   }
   
}

function Gecko_PassiveMessage_Entry_Content(sObjProperNoun, sImageName, vDefContainerW, vDefContainerH, vOriginalW, vOriginalH, vLowerLeveru,d2MessageMatrix){
   
   var vScale;
   var i,j,q;
   var CW,CH;
   var OCW,OCH;
   var OX,OY,OW,OH;
   var X,Y,W,H;
   var SW,SH,SD,SF;
   var SDW,SDH,SFW,SFH,SB,S;
   var oContainer,oCenter,oSensor;
   var RelX,RelY,RelY0,AbsX,AbsY;
   var sContainerObjName,sSensorObjName,sImageObjName;
   var d1ItemObjNameList;
   
   var ContainerW = 0;
   var ContainerH = 0;
   var sTag_ContainerSize = '';
   var sTag_MenuVisibil = '';
   var sZoomMode = "";
   var sTag_BGColor = "";
   
   var sErr = "";
   var ContainerW;
   var sPresence = "";
   var sTag_LowerLeveru = "";
   var sTag_SecondLeveru = "";
   var vSecondLeveru = null;
   
   if(vLowerLeveru==null) vLowerLeveru = 0;
   if(vLowerLeveru!=null) vSecondLeveru = vLowerLeveru + 1;
   
   W = vOriginalW; 
   H = vOriginalH; 
   SDW = vDisplayWidth/W;
   SDH = vDisplayHeight/H;
   SD = Math.min(SDH,SDW);
   SFW = (vFrameWidth - 16)/W;
   SFH = (vFrameHeight - 16)/H;
   SF = Math.min(SFH,SFW);
   
   if(0<vDefScale){
      
      SB = vDefScale;
      
   }
   
   else if(vDefScale==0){
      
      SB = Math.min(SFH,SDW);
      
   }
   
   else if(vDefScale==-1){
      
      SB = SDW;
      
   }
   
   vScale = SB;
   
   sSensorObjName = sObjProperNoun+"Sensor/";
   sContainerObjName = sObjProperNoun+"Container/";
   sImageObjName = sObjProperNoun+"Image/";
   
   d1ItemObjNameList = new Array(sImageObjName);
   // sImageObjName
   
   if((typeof d3PassiveMessage_Factor[sSensorObjName])!="undefined") sErr += "★PassiveMessage_Entry_Content( )エラー：すでに登録済みの オブジェクト名 ”"+sSensorObjName+"”が重複して使用されました．\n";
   
   if(sErr!=""){
      
      alert(sErr);
      
      return;
      
   }
   
   d3PassiveMessage_Factor[sSensorObjName] = new Array();
   q = d1PassiveMessage_SensorObjNameList.length;
   d1PassiveMessage_SensorObjNameList[q] = sSensorObjName;
   
   // Preload_Image(sImageName);
   
   if(vLowerLeveru!=null) sTag_LowerLeveru = " z-index: " + vLowerLeveru.toString(10)+"; ";
   if(vSecondLeveru!=null) sTag_SecondLeveru = " z-index: " + vSecondLeveru.toString(10)+"; ";
   // .toString(10) // 数値を１０進の文字列に変換．
   
   ContainerW = Math.floor(vOriginalW*vScale);
   ContainerH = Math.floor(vOriginalH*vScale);
   sTag_ContainerSize = '';
   
   //alert('OW='+vOriginalW+'; '+'OH='+vOriginalH+'; '+"");
   
   if( 0<=vDefContainerW){
      
      if(ContainerW<vDefContainerW) ContainerW = vDefContainerW;
      sTag_ContainerSize = sTag_ContainerSize+" width: "+ContainerW+"px; ";
      
   }
   
   if( 0<=vDefContainerH){
      
      if(ContainerH<vDefContainerH) ContainerH = vDefContainerH;
      sTag_ContainerSize = sTag_ContainerSize+" height: "+ContainerH+"px; ";
      
   }
   
   sTag_BGColor = "";
   
   if( 0<(vPassiveMessage_Presence & nPassiveMessage_Presence_Background) ) sTag_BGColor = " background-color: #d7efb7; ";
   
   // align='center' 
   document.write("<div id='"+sContainerObjName+"' align='center' style='position:relative; "+sTag_ContainerSize+sTag_BGColor+sTag_LowerLeveru+" '>");
   // document.write("<div id='"+sContainerObjName+"' style='position:relative; "+sTag_ContainerSize+" background-color: #d7efb7; "+sTag_LowerLeveru+" '>");
   // document.write("<div id='"+sContainerObjName+"' style='position:relative; left: 0px; width: "+ContainerW+"px; background-color: #d7efb7; "+sTag_LowerLeveru+" '>");
   // visibility:hidden; 
   
   // document.write("<br>");
   // document.write("<br>");
   
   // align='center' style='visibility: hidden; width: 0px; '
   document.write("<div id='"+sContainerObjName+"Center/' style='position: relative; width: "+Math.floor(vOriginalW*vScale)+"px; "+sTag_LowerLeveru+" '>");
   
   document.write("<img border='0' name='"+sImageObjName+"' src='"+sImageName+"' width='"+Math.floor(vOriginalW*vScale)+"' height='"+Math.floor(vOriginalH*vScale)+"' >");
   // document.write("<br>");
   
   document.write("</div>");
   
   document.write("</div>");
   
   oContainer = document.getElementById(sContainerObjName);
   oCenter = document.getElementById(sContainerObjName+"Center/");
   
   d1PassiveMessage_ContainerObjAso[sSensorObjName] = oContainer;
   d1PassiveMessage_CenterObjAso[sSensorObjName] = oCenter;
   
   if(oContainer.offsetWidth<vFrameWidth){
      
      // oContainer.style.posWidth = vFrameWidth;
      
   }
   
   RelX = oCenter.offsetLeft;
   RelY = oCenter.offsetTop;
   // RelX = Math.floor( (oContainer.offsetWidth - oCenter.offsetWidth) / 2);
   // RelY = Math.floor( (oContainer.offsetHeight - oCenter.offsetHeight) / 2);
   
   AbsX = oContainer.offsetLeft + RelX;
   AbsY = oContainer.offsetTop + RelY;
   
   d2PassiveMessage_Environment[sSensorObjName] = new Array(AbsX, AbsY, vScale);
   // BiasX,BiasY,vScale
   
   // oCenter.style.left = RelX+"px";
   // oCenter.style.top = RelY+"px";
   
   // oCenter.style.visibility = "visible";
   
   // alert(
   // "oContainer.offsetWidth="+oContainer.offsetWidth+"; "+"\n"+
   // "oContainer.offsetLeft="+oContainer.offsetLeft+"; "+"\n"+
   // "oCenter.offsetWidth="+oCenter.offsetWidth+"; "+"\n"+
   // "oCenter.style.left="+oCenter.style.left+"; "+"\n"+
   // "oCenter.style.posLeft="+oCenter.style.posLeft+"; "+"\n"+
   // "oCenter.offsetLeft="+oCenter.offsetLeft+"; "+"\n"+
   // "RelX="+RelX+"; "+"\n"+
   // "AbsX="+AbsX+"; "+"\n"+
   // "oCenter.style.left="+oCenter.style.left+"; "+"\n"+
   // "oCenter.style.top="+oCenter.style.top+"; "+"\n"+
   // "");
   
   if( (typeof d2MessageMatrix)!="undefined"){
      
      for(i = 0; i<=(d2MessageMatrix.length - 1); i++){
         
         Gecko_PassiveMessage_Presence_HotSpot(
            
            sSensorObjName,
            vLowerLeveru,
            d2MessageMatrix[i][0],
            d2MessageMatrix[i][1],
            d2MessageMatrix[i][2],
            d2MessageMatrix[i][3]
            
         );
         
      }
      
      for(i = 0; i<=(d2MessageMatrix.length - 1); i++){
         
         if( (typeof d2MessageMatrix[i][4])=="undefined") d2MessageMatrix[i][4] = null;
         if( (typeof d2MessageMatrix[i][5])=="undefined") d2MessageMatrix[i][5] = null;
         if( (typeof d2MessageMatrix[i][6])=="undefined") d2MessageMatrix[i][6] = null;
         
         Gecko_PassiveMessage_Entry_Message(
            
            sObjProperNoun,
            sSensorObjName,
            d1ItemObjNameList,
            vSecondLeveru,
            d2MessageMatrix[i][0],
            d2MessageMatrix[i][1],
            d2MessageMatrix[i][2],
            d2MessageMatrix[i][3],
            d2MessageMatrix[i][4],
            d2MessageMatrix[i][5],
            d2MessageMatrix[i][6]
            
         );
         
      }
      // alert("d2MessageMatrix.length="+d2MessageMatrix.length);
      // alert("d3PassiveMessage_Factor.length="+d3PassiveMessage_Factor.length);
   }
   
   // oContainer = document.getElementById(sContainerObjName);
 
   X = oContainer.offsetLeft;
   Y = oContainer.offsetTop;
   W = oContainer.offsetWidth;
   H = oContainer.offsetHeight;
   
   document.write("<div id='"+sSensorObjName+"' style='position: absolute; left: "+X+"px; top: "+Y+"px; width: "+W+"px; height: "+H+"px; "+sPresence+sTag_SecondLeveru+"  ' OnMouseMove='Gecko_PassiveMessage_HotSpotMessageHandler(event)' OnMouseOut='Gecko_PassiveMessage_ClearMessageHandler(event)' ></div>");
   
   // document.write("<br>");
   
   oSensor = document.getElementById(sSensorObjName);
   
}

function Explorer_PassiveMessage_Entry_Content(sObjProperNoun, sImageName, vDefContainerW, vDefContainerH, vOriginalW, vOriginalH, vLowerLeveru,d2MessageMatrix){
   
   var vScale;
   var i,j,q;
   var X,Y,W,H;
   var SW,SH,SD,SF;
   var SDW,SDH,SFW,SFH,SB,S;
   var oContainer,oCenter,oSensor;
   var RelX,RelY,RelY0,AbsX,AbsY;
   var sContainerObjName,sSensorObjName,sImageObjName;
   var d1ItemObjNameList;
   
   var ContainerW = 0;
   var ContainerH = 0;
   var sTag_ContainerSize = '';
   var sTag_MenuVisibil = '';
   var sZoomMode = "";
   var sTag_BGColor = "";
   
   var sErr = "";
   var ContainerW;
   var sPresence = "";
   var sTag_LowerLeveru = "";
   var sTag_SecondLeveru = "";
   var vSecondLeveru = null;
   
   if(vLowerLeveru==null) vLowerLeveru = 0;
   if(vLowerLeveru!=null) vSecondLeveru = vLowerLeveru + 1;
   
   W = vOriginalW; 
   H = vOriginalH; 
   SDW = vDisplayWidth/W;
   SDH = vDisplayHeight/H;
   SD = Math.min(SDH,SDW);
   SFW = (vFrameWidth - 16)/W;
   SFH = (vFrameHeight - 16)/H;
   SF = Math.min(SFH,SFW);
   
   if(0<vDefScale){
      
      SB = vDefScale;
      
   }
   
   else if(vDefScale==0){
      
      SB = Math.min(SFH,SDW);
      
   }
   
   else if(vDefScale==-1){
      
      SB = SDW;
      
   }
   
   vScale = SB;
   
   sSensorObjName = sObjProperNoun+"Sensor/";
   sContainerObjName = sObjProperNoun+"Container/";
   sImageObjName = sObjProperNoun+"Image/";
   
   d1ItemObjNameList = new Array(sImageObjName);
   // sImageObjName
   
   if((typeof d3PassiveMessage_Factor[sSensorObjName])!="undefined") sErr += "★PassiveMessage_Entry_Content( )エラー：すでに登録済みの オブジェクト名 ”"+sSensorObjName+"”が重複して使用されました．\n";
   
   if(sErr!=""){
      
      alert(sErr);
      
      return;
      
   }
   
   d3PassiveMessage_Factor[sSensorObjName] = new Array();
   q = d1PassiveMessage_SensorObjNameList.length;
   d1PassiveMessage_SensorObjNameList[q] = sSensorObjName;
   
   // Preload_Image(sImageName);
   
   if(vLowerLeveru!=null) sTag_LowerLeveru = " z-index: " + vLowerLeveru.toString(10)+"; ";
   if(vSecondLeveru!=null) sTag_SecondLeveru = " z-index: " + vSecondLeveru.toString(10)+"; ";
   // .toString(10) // 数値を１０進の文字列に変換．
   
   ContainerW = Math.floor(vOriginalW*vScale);
   ContainerH = Math.floor(vOriginalH*vScale);
   sTag_ContainerSize = '';
   
   //alert('OW='+vOriginalW+'; '+'OH='+vOriginalH+'; '+"");
   
   if( 0<=vDefContainerW){
      
      if(ContainerW<vDefContainerW) ContainerW = vDefContainerW;
      sTag_ContainerSize = sTag_ContainerSize+" width: "+ContainerW+"px; ";
      
   }
   
   if( 0<=vDefContainerH){
      
      if(ContainerH<vDefContainerH) ContainerH = vDefContainerH;
      sTag_ContainerSize = sTag_ContainerSize+" height: "+ContainerH+"px; ";
      
   }
   
   // sTag_BGColor = " background-color: #7f7f7f; filter: Alpha(Opacity=1); ";
   sTag_BGColor = "";
   
   if( 0<(vPassiveMessage_Presence & nPassiveMessage_Presence_Background) ) sTag_BGColor = " background-color: #d7efb7; ";
   
   document.write("<div id='"+sContainerObjName+"' style='position:relative; "+sTag_ContainerSize+sTag_BGColor+sTag_LowerLeveru+" '>");
   // document.write("<div id='"+sContainerObjName+"' style='position:relative; "+sTag_ContainerSize+" background-color: #d7efb7; "+sTag_LowerLeveru+" '>");
   // document.write("<div id='"+sContainerObjName+"' style='position:relative; left: 0px; width: "+ContainerW+"px; background-color: #d7efb7; "+sTag_LowerLeveru+" '>");
   // visibility:hidden; 
   
   // document.write("<br>");
   // document.write("<br>");
   
   document.write("<div id='"+sContainerObjName+"Center/' style='visibility:hidden; position:relative; width: 0px; "+sTag_LowerLeveru+" '>");
   // visibility:hidden; 
   
   document.write("<img border='0' name='"+sImageObjName+"' src='"+sImageName+"' width='"+Math.floor(vOriginalW*vScale)+"' height='"+Math.floor(vOriginalH*vScale)+"' >");
   // document.write("<br>");
   
   document.write("</div>");
   
   document.write("</div>");
   
   oContainer = document.all(sContainerObjName);
   oCenter = document.all(sContainerObjName+"Center/");
   
   d1PassiveMessage_ContainerObjAso[sSensorObjName] = oContainer;
   d1PassiveMessage_CenterObjAso[sSensorObjName] = oCenter;
   
   // oContainer.style.posLeft = - oContainer.offsetLeft;
   
   if(oContainer.offsetWidth<vFrameWidth){
      
      // oContainer.style.posWidth = vFrameWidth;
      
   }
   
   RelX = Math.floor( (oContainer.offsetWidth - oCenter.offsetWidth) / 2);
   // RelY0 = oCenter.offsetTop;
   // RelY = RelY0 + Math.floor( (oContainer.offsetHeight - RelY0 - oCenter.offsetHeight) / 2);
   RelY = Math.floor( (oContainer.offsetHeight - oCenter.offsetHeight) / 2);
   
   AbsX = oContainer.offsetLeft + RelX;
   AbsY = oContainer.offsetTop + RelY;
   
   d2PassiveMessage_Environment[sSensorObjName] = new Array(AbsX, AbsY, vScale);
   // BiasX,BiasY,vScale
   
   oCenter.style.posLeft = RelX;
   // oCenter.style.posTop = RelY-RelY0;
   oCenter.style.posTop = RelY;
   
   oCenter.style.visibility = "visible";
   // oContainer.style.visibility = "visible";
   
   if( (typeof d2MessageMatrix)!="undefined"){
      
      for(i = 0; i<=(d2MessageMatrix.length - 1); i++){
         
         Explorer_PassiveMessage_Presence_HotSpot(
            
            sSensorObjName,
            vLowerLeveru,
            d2MessageMatrix[i][0],
            d2MessageMatrix[i][1],
            d2MessageMatrix[i][2],
            d2MessageMatrix[i][3]
            
         );
         
      }
      
      for(i = 0; i<=(d2MessageMatrix.length - 1); i++){
         
         if( (typeof d2MessageMatrix[i][4])=="undefined") d2MessageMatrix[i][4] = null;
         if( (typeof d2MessageMatrix[i][5])=="undefined") d2MessageMatrix[i][5] = null;
         if( (typeof d2MessageMatrix[i][6])=="undefined") d2MessageMatrix[i][6] = null;
         
         Explorer_PassiveMessage_Entry_Message(
            
            sObjProperNoun,
            sSensorObjName,
            d1ItemObjNameList,
            vSecondLeveru,
            d2MessageMatrix[i][0],
            d2MessageMatrix[i][1],
            d2MessageMatrix[i][2],
            d2MessageMatrix[i][3],
            d2MessageMatrix[i][4],
            d2MessageMatrix[i][5],
            d2MessageMatrix[i][6]
            
         );
         
      }
      
   }
   
   // oContainer = document.all(sContainerObjName);
   X = oContainer.offsetLeft;
   Y = oContainer.offsetTop;
   W = oContainer.offsetWidth;
   H = oContainer.offsetHeight;
   
   sPresence = " background-color: #7f7f7f; filter: Alpha(Opacity=0); ";
   
   if( (vPassiveMessage_Presence & nPassiveMessage_Presence_Sensor)>0 ) sPresence = " background-color: #7f7f7f; filter: Alpha(Opacity=50); ";
   
   document.write("<div id='"+sSensorObjName+"' style='position: absolute; left: "+X+"px; top: "+Y+"px; width: "+W+"px; height: "+H+"px; "+sPresence+sTag_SecondLeveru+"  ' OnMouseMove='Explorer_PassiveMessage_HotSpotMessageHandler(this)' OnMouseOut='Explorer_PassiveMessage_ClearMessageHandler(this)' ></div>");
   
   // document.write("<br>");
   
   oSensor = document.all(sSensorObjName);
   
}

function Netscape_PassiveMessage_Entry_Content(sObjProperNoun, sImageName, vDefContainerW, vDefContainerH, vOriginalW, vOriginalH, vLowerLeveru,d2MessageMatrix){
   
   var vScale;
   var i,j,q;
   var X,Y,W,H;
   var SW,SH,SD,SF;
   var SDW,SDH,SFW,SFH,SB,S;
   var oContainer,oCenter,oSensor;
   var RelX,RelY,RelY0,AbsX,AbsY;
   var sContainerObjName,sSensorObjName,sImageObjName;
   var d1ItemObjNameList;
   
   var ContainerW = 0;
   var ContainerH = 0;
   var sTag_ContainerSize = '';
   var sTag_MenuVisibil = '';
   var sZoomMode = "";
   var sTag_BGColor = "";
   
   var sErr = "";
   var ContainerW;
   var sPresence = "";
   var sTag_LowerLeveru = "";
   var sTag_SecondLeveru = "";
   var vSecondLeveru = null;
   
   if(vLowerLeveru==null) vLowerLeveru = 0;
   if(vLowerLeveru!=null) vSecondLeveru = vLowerLeveru + 1;
   
   W = vOriginalW; 
   H = vOriginalH; 
   SDW = vDisplayWidth/W;
   SDH = vDisplayHeight/H;
   SD = Math.min(SDH,SDW);
   SFW = (vFrameWidth - 16)/W;
   SFH = (vFrameHeight - 16)/H;
   SF = Math.min(SFH,SFW);
   
   if(0<vDefScale){
      
      SB = vDefScale;
      
   }
   
   else if(vDefScale==0){
      
      SB = Math.min(SFH,SDW);
      
   }
   
   else if(vDefScale==-1){
      
      SB = SDW;
      
   }
   
   vScale = SB;
   
   sSensorObjName = sObjProperNoun+"Sensor/";
   sContainerObjName = sObjProperNoun+"Container/";
   sImageObjName = sObjProperNoun+"Image/";
   
   d1ItemObjNameList = new Array(sImageObjName);
   // sImageObjName
   
   if((typeof d3PassiveMessage_Factor[sSensorObjName])!="undefined") sErr += "★PassiveMessage_Entry_Content( )エラー：すでに登録済みの オブジェクト名 ”"+sSensorObjName+"”が重複して使用されました．\n";
   
   if(sErr!=""){
      
      alert(sErr);
      
      return;
      
   }
   
   d3PassiveMessage_Factor[sSensorObjName] = new Array();
   q = d1PassiveMessage_SensorObjNameList.length;
   d1PassiveMessage_SensorObjNameList[q] = sSensorObjName;
   
   // Preload_Image(sImageName);
   
   if(vLowerLeveru!=null) sTag_LowerLeveru = " z-index='" + vLowerLeveru.toString(10)+"' ";
   if(vSecondLeveru!=null) sTag_SecondLeveru = " z-index='" + vSecondLeveru.toString(10)+"' ";
   // .toString(10) // 数値を１０進の文字列に変換．
   
   ContainerW = Math.floor(vOriginalW*vScale);
   ContainerH = Math.floor(vOriginalH*vScale);
   sTag_ContainerSize = '';
   
   if(0<=vDefContainerW){
      
      if(ContainerW<vDefContainerW) ContainerW = vDefContainerW;
      sTag_ContainerSize = sTag_ContainerSize+" width='"+ContainerW+"' ";
      
   }
   
   else if(vDefContainerW==-1){
      
      if(ContainerW<vFrameWidth) ContainerW = vFrameWidth;
      sTag_ContainerSize = sTag_ContainerSize+" width='"+ContainerW+"' ";
      
   }
   
   if(0<=vDefContainerH){
      
      if(ContainerH<vDefContainerH) ContainerH = vDefContainerH;
      sTag_ContainerSize = sTag_ContainerSize+" height='"+ContainerH+"' ";
      
   }
   
   sTag_BGColor = "";
   
   if( 0<(vPassiveMessage_Presence & nPassiveMessage_Presence_Background) ) sTag_BGColor = " bgcolor='#d7efb7' ";
   
   document.write("<ilayer id='"+sContainerObjName+"' left='0' "+sTag_ContainerSize+sTag_BGColor+sTag_LowerLeveru+" >");
   // document.write("<ilayer id='"+sContainerObjName+"' left='0' "+sTag_ContainerSize+" bgcolor='#d7efb7' "+sTag_LowerLeveru+" >");
   // document.write("<ilayer id='"+sContainerObjName+"' left='0' width='"+ContainerW+"' bgcolor='#d7efb7' "+sTag_LowerLeveru+" >");
   // visibility='hide'
   
   // document.write("<br>");
   // document.write("<br>");
   
   document.write("<ilayer id='"+sContainerObjName+"Center/' visibility='hide' "+sTag_LowerLeveru+" >");
   // bgcolor='#00ff00' // visibility='hide' // width='700'
   
   document.write("<img border='0' name='"+sImageObjName+"' src='"+sImageName+"' width='"+Math.floor(vOriginalW*vScale)+"' height='"+Math.floor(vOriginalH*vScale)+"' >");
   // document.write("<br>");
   
   document.write("</ilayer>");
   
   document.write("</ilayer>");
   document.write("<br>");
   
   oContainer = document.layers[sContainerObjName];
   oCenter = oContainer.document.layers[sContainerObjName+"Center/"];
   
   d1PassiveMessage_ContainerObjAso[sSensorObjName] = oContainer;
   d1PassiveMessage_CenterObjAso[sSensorObjName] = oCenter;
   
   // .left // .top // .pageX // .pageY // .clip.width // .clip.height
   // oContainer.moveTo( - oContainer.pageX,0);
   
   if(oContainer.clip.width<vFrameWidth){
      
      // oContainer.resizeTo(vFrameWidth,oContainer.clip.height);
      
   }
   
   RelX = Math.floor( (oContainer.clip.width - oCenter.clip.width) / 2);
   // RelY0 = oCenter.pageY - oContainer.pageY;
   // RelY = RelY0 + Math.floor( (oContainer.clip.height - RelY0 - oCenter.clip.height) / 2);
   RelY = Math.floor( (oContainer.clip.height - oCenter.clip.height) / 2);
   // .left // .top // .pageX // .pageY // .clip.width // .clip.height
   AbsX = oContainer.pageX + RelX;
   AbsY = oContainer.pageY + RelY;
   
   d2PassiveMessage_Environment[sSensorObjName] = new Array(AbsX, AbsY, vScale);
   // BiasX,BiasY,vScale
   
   // document.write("<br>");
   // document.write("oCenter.pageX:"+oCenter.pageX+"<br>");
   // document.write("oCenter.pageY:"+oCenter.pageY+"<br>");
   // document.write("oCenter.left:"+oCenter.left+"<br>");
   // document.write("oCenter.top:"+oCenter.top+"<br>");
   
   //oCenter.moveTo(RelX,RelY-RelY0);
   oCenter.moveTo(RelX,RelY);
   
   oCenter.visibility = "show";
   // oContainer.visibility = "show";
   
   if( (typeof d2MessageMatrix)!="undefined"){
      
      for(i = 0; i<=(d2MessageMatrix.length - 1); i++){
         
         if( (typeof d2MessageMatrix[i][4])=="undefined") d2MessageMatrix[i][4] = null;
         if( (typeof d2MessageMatrix[i][5])=="undefined") d2MessageMatrix[i][5] = null;
         if( (typeof d2MessageMatrix[i][6])=="undefined") d2MessageMatrix[i][6] = null;
         
         Netscape_PassiveMessage_Entry_Message(
            
            sObjProperNoun,
            sSensorObjName,
            d1ItemObjNameList,
            vSecondLeveru,
            d2MessageMatrix[i][0],
            d2MessageMatrix[i][1],
            d2MessageMatrix[i][2],
            d2MessageMatrix[i][3],
            d2MessageMatrix[i][4],
            d2MessageMatrix[i][5],
            d2MessageMatrix[i][6]
            
         );
         
      }
      
   }
   
   // .left // .top // .pageX // .pageY // .clip.width // .clip.height
   X = oContainer.pageX;
   Y = oContainer.pageY;
   W = oContainer.clip.width;
   H = oContainer.clip.height;
   
   document.write("<layer id='"+sSensorObjName+"' left='"+X+"' top='"+Y+"' width='"+W+"' height='"+H+"' "+sTag_SecondLeveru+" OnMouseOut='Netscape_PassiveMessage_ClearMessageHandler(this)' >");
   document.write("</layer>");
   // visibility='hide' // bgcolor='#ffffff'
   
   oSensor = document.layers[sSensorObjName];
   
   oSensor.captureEvents(Event.MOUSEMOVE);
   oSensor.onMouseMove = Netscape_PassiveMessage_HotSpotMessageHandler;
   
}

// ###############################################################

function lExist_JavaScript_pasmsg01( ){
   
   return true; // false; //
   
}

