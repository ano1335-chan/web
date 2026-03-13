// true // false // null // this // window //
// while // for // break // continue
// typeof VARIABLE // "undefined" // "string" // "object" // "number" // "boolean" // "function"
// window.status = MESSAGE; // alert(MESSAGE);
// VARIABLE.toString(n) // 数値を n 進の文字列に変換．

// PassiveMenuMessage

function PassiveMenuMessage_Entry_Content(sObjProperNoun, sImageName, vOriginalW, vOriginalH, vZoomQnt_Default, d1ZoomModeSets, d1ZoomCardinalSets, vLowerLeveru, d2MessageMatrix){
   
   if( navigator.appName==sInternetExplorer ){
      // Explorer
      // window.status = sInternetExplorer;
      
      Explorer_PassiveMenuMessage_Entry_Content(sObjProperNoun, sImageName, vOriginalW, vOriginalH, vZoomQnt_Default, d1ZoomModeSets, d1ZoomCardinalSets, vLowerLeveru, d2MessageMatrix);
      
   }
   
   else if( (navigator.appName==sNetscapeNavigator) && (vVerCompatible<5) ){
      // Netscape
      // window.status = sNetscapeNavigator;
      
      Netscape_PassiveMenuMessage_Entry_Content(sObjProperNoun, sImageName, vOriginalW, vOriginalH, vZoomQnt_Default, d1ZoomModeSets, d1ZoomCardinalSets, vLowerLeveru, d2MessageMatrix);
      
   }
   
   else{
      // Gecko
      
      Gecko_PassiveMenuMessage_Entry_Content(sObjProperNoun, sImageName, vOriginalW, vOriginalH, vZoomQnt_Default, d1ZoomModeSets, d1ZoomCardinalSets, vLowerLeveru, d2MessageMatrix);
      
   }
   
}

function Gecko_PassiveMenuMessage_Entry_Content(sObjProperNoun, sImageName, vOriginalW, vOriginalH, vZoomQnt_Default, d1ZoomModeSets, d1ZoomCardinalSets, vLowerLeveru, d2MessageMatrix){
   
   // var d1ZoomModeSets = new Array("S","M","L","2L");
   var d1ZoomScaleSets = new Array(d1ZoomModeSets.length);
   var d1ZoomModeToValue = new Array();
   
   var vScale;
   var i,j,q;
   var X,Y,W,H;
   var SW,SH,SD,SF;
   var oContainer,oCenter,oSensor;
   var RelX,RelY,RelY0,AbsX,AbsY;
   var sContainerObjName,sSensorObjName,sImageObjName;
   var d1ItemObjNameList;
   var ContainerW;
   var ImageW,ImageH;
   var Width,Height;
   
   var sErr = "";
   var sPresence = "";
   var sMenuVisibil = "";
   var sRoot = sRootRelativeLocation;
   
   var sTag_LowerLeveru = "";
   var sTag_SecondLeveru = "";
   var vSecondLeveru = null;
   
   // document.write("sImageName:"+sImageName+"; "+"vOriginalW:"+vOriginalW+"; "+"vOriginalH:"+vOriginalH+"; "+"<br>");
   
   if(vLowerLeveru==null) vLowerLeveru = 0;
   if(vLowerLeveru!=null) vSecondLeveru = vLowerLeveru + 1;
   
   W = vOriginalW; 
   H = vOriginalH; 
   SW = vDisplayWidth/W;
   SH = vDisplayHeight/H;
   SD = Math.min(SH,SW);
   SW = (vFrameWidth - 16)/W;
   SH = (vFrameHeight - 16)/H;
   SF = Math.min(SH,SW);
   
   // document.write("vDisplayWidth:"+vDisplayWidth+"vDisplayHeight:"+vDisplayHeight+"vFrameWidth:"+vFrameWidth+"vFrameHeight:"+vFrameHeight+"<br>");
   // document.write("SF:"+SF+"W:"+W+"H:"+H+"SW:"+SW+"SH:"+SH+"SD:"+SD+"<br>");
   
   for(i = 0; i<=(d1ZoomModeSets.length -1); i++){
      
      d1ZoomScaleSets[i] = SF * d1ZoomCardinalSets[i];
      // document.write("d1ZoomCardinalSets["+i+"]:"+d1ZoomCardinalSets[i]+"<br>");
      // document.write("d1ZoomScaleSets["+i+"]:"+d1ZoomScaleSets[i]+"<br>");
      
   }
   
   for(i = 0; i<=(d1ZoomModeSets.length -1); i++){
      
      d1ZoomModeToValue[d1ZoomModeSets[i]] = i;
      // document.write("d1ZoomModeToValue["+d1ZoomModeSets[i]+"]:"+d1ZoomModeToValue[d1ZoomModeSets[i]]+"<br>");
      
   }
   
   sZoomMode = sGet_LocationSearch_Operand("@Zoom",1);
   // document.write("sZoomMode:"+sZoomMode+"<br>");
   
   // alert("sZoomMode:"+sZoomMode+"; "+"");
   
   if(sZoomMode == ""){
      
      sZoomMode = d1ZoomModeSets[0];
      
   }
   
   vScale = d1ZoomScaleSets[d1ZoomModeToValue[sZoomMode]];
   // document.write("vScale:"+vScale+"<br>");
   
   // alert("sZoomMode:"+sZoomMode+"; "+"vScale:"+vScale+"; "+"");
   
   sSensorObjName = sObjProperNoun+"Sensor/";
   sContainerObjName = sObjProperNoun+"Container/";
   sImageObjName = sObjProperNoun+"Image/";
   
   d1ItemObjNameList = new Array(sImageObjName);
   // sImageObjName
   
   if((typeof d3PassiveMessage_Factor[sSensorObjName])!="undefined") sErr += "★PassiveMenuMessage_Entry_Content( )エラー：すでに登録済みの オブジェクト名 ”"+sSensorObjName+"”が重複して使用されました．\n";
   
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
   
   if(ContainerW<vFrameWidth) ContainerW = vFrameWidth;
   
   vPassiveMenu__ContainerW = ContainerW;
   
   // align='center' 
   document.write("<div id='"+sContainerObjName+"' align='center' style='position: relative; left: 0px; width: "+ContainerW+"px; background-color: #d7efb7; "+sTag_LowerLeveru+" '>");
   // visibility:hidden; left: 0px; 
   
   // document.write("<br>");
   
   document.write("<div id='"+sContainerObjName+"Center/' style='position: relative; width: "+Math.floor(vOriginalW*vScale)+"px; "+sTag_LowerLeveru+" '>");
   // style='visibility:hidden; width: 0px; '
   
   document.write("<img border='0' name='"+sImageObjName+"' src='"+sImageName+"' width='"+Math.floor(vOriginalW*vScale)+"' height='"+Math.floor(vOriginalH*vScale)+"' >");
   // document.write("<br>");
   
   document.write("</div>");
   
   document.write("</div>");
   
   // typeof Object // "undefined" // "string" // "object"
   
   oContainer = document.getElementById(sContainerObjName);
   oCenter = document.getElementById(sContainerObjName+"Center/");
   
   d1PassiveMessage_ContainerObjAso[sSensorObjName] = oContainer;
   d1PassiveMessage_CenterObjAso[sSensorObjName] = oCenter;
   
   // q = d1PassiveMessage_ContainerObjAso.length;
   d1PassiveMessage_ContainerObjAso[sSensorObjName] = oContainer;
   d1PassiveMessage_CenterObjAso[sSensorObjName] = oCenter;
   
   // oContainer.style.left = - oContainer.offsetLeft;
   if(oContainer.offsetWidth<vFrameWidth){
      // oContainer.style.width = vFrameWidth;
   }
   
   RelX = oCenter.offsetLeft;
   RelY = oCenter.offsetTop;
   AbsX = oContainer.offsetLeft + RelX;
   AbsY = oContainer.offsetTop + RelY;
   d2PassiveMessage_Environment[sSensorObjName] = new Array(AbsX, AbsY, vScale);
   // BiasX,BiasY,vScale
   
   // oCenter.style.left = RelX+"px";
   // oCenter.style.top = RelY+"px";
   // oCenter.style.visibility = "visible";
   
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
         
         Gecko_PassiveMessage_Entry_Message(
            
            sObjProperNoun,
            sSensorObjName,
            d1ItemObjNameList,
            vSecondLeveru,
            d2MessageMatrix[i][0],
            d2MessageMatrix[i][1],
            d2MessageMatrix[i][2],
            d2MessageMatrix[i][3],
            d2MessageMatrix[i][4]
            
         );
         
      }
      
   }
   
   X = oContainer.offsetLeft;
   Y = oContainer.offsetTop;
   W = oContainer.offsetWidth;
   H = oContainer.offsetHeight;
   
   // background-color: #777; 
   document.write("<div id='"+sSensorObjName+"' style='position: absolute; left:  "+X+"px; top: "+Y+"px; width: "+W+"px; height: "+H+"px; "+sPresence+sTag_SecondLeveru+" ' OnMouseMove='Gecko_MouseMoveHandler(event)' OnMouseOut='Gecko_PassiveMessage_ClearMessageHandler(event)' >");
   document.write("</div>");
   
   // document.write("<br>");
   
   oSensor = document.getElementById(sSensorObjName);
   
   vPassiveMenu_MenuMinY = oContainer.offsetTop;
   // vPassiveMenu_MenuMinY = oSensor.offsetTop;
   
   document.write("<div id='PassiveMenu_Menu' style='visibility: hidden; position:absolute; left:0px; top:"+vPassiveMenu_MenuMinY+"px; background-color: #d6d3ce; "+sTag_SecondLeveru+" ' OnMouseMove='Gecko_PassiveMenu_CloseCancelHandler(event)'>");
   // visibility:( hidden; visible; )
   
   
   PassiveMenu_Define_Menu(vZoomQnt_Default,d1ZoomModeSets,d1ZoomScaleSets,d1ZoomModeToValue);
   
   document.write("</div>");
   
   // document.write("<br>");
   // document.write("div id='PassiveMenu_Menu' style='visibility: hidden; position:absolute; left:0px; top:"+vPassiveMenu_MenuMinY+"px; background-color: #d6d3ce; "+sTag_SecondLeveru+" ' OnMouseMove='Gecko_PassiveMenu_CloseCancelHandler(event)'");
   // document.write("<br>");
   
   vPassiveMenu_MenuHeight = document.getElementById("PassiveMenu_Menu").offsetHeight;
   sMenuVisibil = sGet_LocationSearch_Operand("@Zoom",2);
   
   if(sMenuVisibil == "Open"){
      
      // PassiveMenu_MenuOpen(oSensor);
      lPassiveMenu_MenuOpen = true; // false; // 
      
   }
   
}

function Explorer_PassiveMenuMessage_Entry_Content(sObjProperNoun, sImageName, vOriginalW, vOriginalH, vZoomQnt_Default, d1ZoomModeSets, d1ZoomCardinalSets, vLowerLeveru, d2MessageMatrix){
   
   // var d1ZoomModeSets = new Array("S","M","L","2L");
   var d1ZoomScaleSets = new Array(d1ZoomModeSets.length);
   var d1ZoomModeToValue = new Array();
   
   var vScale;
   var i,j,q;
   var X,Y,W,H;
   var SW,SH,SD,SF;
   var oContainer,oCenter,oSensor;
   var RelX,RelY,RelY0,AbsX,AbsY;
   var sContainerObjName,sSensorObjName,sImageObjName;
   var d1ItemObjNameList;
   var ContainerW;
   var ImageW,ImageH;
   var Width,Height;
   
   var sErr = "";
   var sPresence = "";
   var sMenuVisibil = "";
   var sRoot = sRootRelativeLocation;
   
   var sTag_LowerLeveru = "";
   var sTag_SecondLeveru = "";
   var vSecondLeveru = null;
   
   // document.write("sImageName:"+sImageName+"; "+"vOriginalW:"+vOriginalW+"; "+"vOriginalH:"+vOriginalH+"; "+"<br>");
   
   if(vLowerLeveru==null) vLowerLeveru = 0;
   if(vLowerLeveru!=null) vSecondLeveru = vLowerLeveru + 1;
   
   W = vOriginalW; 
   H = vOriginalH; 
   SW = vDisplayWidth/W;
   SH = vDisplayHeight/H;
   SD = Math.min(SH,SW);
   SW = (vFrameWidth - 16)/W;
   SH = (vFrameHeight - 16)/H;
   SF = Math.min(SH,SW);
   
   // document.write("vDisplayWidth:"+vDisplayWidth+"vDisplayHeight:"+vDisplayHeight+"vFrameWidth:"+vFrameWidth+"vFrameHeight:"+vFrameHeight+"<br>");
   // document.write("SF:"+SF+"W:"+W+"H:"+H+"SW:"+SW+"SH:"+SH+"SD:"+SD+"<br>");
   
   for(i = 0; i<=(d1ZoomModeSets.length -1); i++){
      
      d1ZoomScaleSets[i] = SF * d1ZoomCardinalSets[i];
      // document.write("d1ZoomCardinalSets["+i+"]:"+d1ZoomCardinalSets[i]+"<br>");
      // document.write("d1ZoomScaleSets["+i+"]:"+d1ZoomScaleSets[i]+"<br>");
      
   }
   
   for(i = 0; i<=(d1ZoomModeSets.length -1); i++){
      
      d1ZoomModeToValue[d1ZoomModeSets[i]] = i;
      // document.write("d1ZoomModeToValue["+d1ZoomModeSets[i]+"]:"+d1ZoomModeToValue[d1ZoomModeSets[i]]+"<br>");
      
   }
   
   sZoomMode = sGet_LocationSearch_Operand("@Zoom",1);
   // document.write("sZoomMode:"+sZoomMode+"<br>");
   
   // alert("sZoomMode:"+sZoomMode+"; "+"");
   
   if(sZoomMode == ""){
      
      sZoomMode = d1ZoomModeSets[0];
      
   }
   
   vScale = d1ZoomScaleSets[d1ZoomModeToValue[sZoomMode]];
   // document.write("vScale:"+vScale+"<br>");
   
   // alert("sZoomMode:"+sZoomMode+"; "+"vScale:"+vScale+"; "+"");
   
   sSensorObjName = sObjProperNoun+"Sensor/";
   sContainerObjName = sObjProperNoun+"Container/";
   sImageObjName = sObjProperNoun+"Image/";
   
   d1ItemObjNameList = new Array(sImageObjName);
   // sImageObjName
   
   if((typeof d3PassiveMessage_Factor[sSensorObjName])!="undefined") sErr += "★PassiveMenuMessage_Entry_Content( )エラー：すでに登録済みの オブジェクト名 ”"+sSensorObjName+"”が重複して使用されました．\n";
   
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
   
   if(ContainerW<vFrameWidth) ContainerW = vFrameWidth;
   
   vPassiveMenu__ContainerW = ContainerW;
   
   document.write("<div id='"+sContainerObjName+"' style='position:relative; left: 0px; width: "+ContainerW+"px; background-color: #d7efb7; "+sTag_LowerLeveru+" '>");
   // visibility:hidden; 
   
   // document.write("<br>");
   // document.write("<br>");
   
   document.write("<div id='"+sContainerObjName+"Center/' style='visibility:hidden; position:relative; width: 0px; "+sTag_LowerLeveru+" '>");
   // visibility:hidden; 
   
   document.write("<img border='0' name='"+sImageObjName+"' src='"+sImageName+"' width='"+Math.floor(vOriginalW*vScale)+"' height='"+Math.floor(vOriginalH*vScale)+"' >");
   // document.write("<br>");
   
   document.write("</div>");
   
   document.write("</div>");
   
   // typeof Object // "undefined" // "string" // "object"
   
   oContainer = document.all(sContainerObjName);
   oCenter = document.all(sContainerObjName+"Center/");
   
   d1PassiveMessage_ContainerObjAso[sSensorObjName] = oContainer;
   d1PassiveMessage_CenterObjAso[sSensorObjName] = oCenter;
   
   // q = d1PassiveMessage_ContainerObjAso.length;
   d1PassiveMessage_ContainerObjAso[sSensorObjName] = oContainer;
   
   // oContainer.style.posLeft = - oContainer.offsetLeft;
   
   if(oContainer.offsetWidth<vFrameWidth){
      
      // oContainer.style.posWidth = vFrameWidth;
      
   }
   
   RelX = Math.floor( (oContainer.offsetWidth - oCenter.offsetWidth) / 2);
   // RelY0 = oCenter.offsetTop;
   // RelY = RelY0 + Math.floor( (oContainer.offsetHeight - RelY0 - oCenter.offsetHeight) / 2);
   RelY = oCenter.offsetTop;
   
   AbsX = oContainer.offsetLeft + RelX;
   AbsY = oContainer.offsetTop + RelY;
   
   d2PassiveMessage_Environment[sSensorObjName] = new Array(AbsX, AbsY, vScale);
   // BiasX,BiasY,vScale
   
   oCenter.style.posLeft = RelX;
   // oCenter.style.posTop = RelY-RelY0;
   oCenter.style.posTop = 0;
   
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
         
         Explorer_PassiveMessage_Entry_Message(
            
            sObjProperNoun,
            sSensorObjName,
            d1ItemObjNameList,
            vSecondLeveru,
            d2MessageMatrix[i][0],
            d2MessageMatrix[i][1],
            d2MessageMatrix[i][2],
            d2MessageMatrix[i][3],
            d2MessageMatrix[i][4]
            
         );
         
      }
      
   }
   
   X = oContainer.offsetLeft;
   Y = oContainer.offsetTop;
   W = oContainer.offsetWidth;
   H = oContainer.offsetHeight;
   
   sPresence = " background-color: #7f7f7f; filter: Alpha(Opacity=0); ";
   
   if( (vPassiveMessage_Presence & nPassiveMessage_Presence_Sensor)>0 ) sPresence = " background-color: #7f7f7f; filter: Alpha(Opacity=50); ";
   
   document.write("<div id='"+sSensorObjName+"' style='position: absolute; left: "+X+"px; top: "+Y+"px; width: "+W+"px; height: "+H+"px; "+sPresence+sTag_SecondLeveru+" ' OnMouseMove='Explorer_MouseMoveHandler(this)' OnMouseOut='Explorer_PassiveMessage_ClearMessageHandler(this)' >");
   document.write("</div>");
   
   // document.write("<br>");
   
   oSensor = document.all(sSensorObjName);
   
   vPassiveMenu_MenuMinY = oSensor.offsetTop;
   
   document.write("<div id='PassiveMenu_Menu' style='visibility: hidden; position:absolute; left:0px; top:"+vPassiveMenu_MenuMinY+"px; background-color: #d6d3ce; "+sTag_SecondLeveru+" ' OnMouseMove='Explorer_PassiveMenu_CloseCancelHandler(this)'>");
   // visibility:( hidden; visible; )
   
   
   PassiveMenu_Define_Menu(vZoomQnt_Default,d1ZoomModeSets,d1ZoomScaleSets,d1ZoomModeToValue);
   
   document.write("</div>");
   
   // document.write("<br>");
   // document.write("div id='PassiveMenu_Menu' style='visibility: hidden; position:absolute; left:0px; top:"+vPassiveMenu_MenuMinY+"px; background-color: #d6d3ce; "+sTag_SecondLeveru+" ' OnMouseMove='Explorer_PassiveMenu_CloseCancelHandler(this)'");
   // document.write("<br>");
   
   vPassiveMenu_MenuHeight = document.all.PassiveMenu_Menu.offsetHeight;
   // document.all.PassiveMenu_Menu.style.posLeft = 0;
   // document.all.PassiveMenu_Menu.style.posTop = vPassiveMenu_MenuMinY;
   
   sMenuVisibil = sGet_LocationSearch_Operand("@Zoom",2);
   
   if(sMenuVisibil == "Open"){
      
      PassiveMenu_MenuOpen(oSensor);
      
   }
   
}

function Netscape_PassiveMenuMessage_Entry_Content(sObjProperNoun, sImageName, vOriginalW, vOriginalH, vZoomQnt_Default, d1ZoomModeSets, d1ZoomCardinalSets, vLowerLeveru, d2MessageMatrix){
   
   // var d1ZoomModeSets = new Array("S","M","L","2L");
   var d1ZoomScaleSets = new Array(d1ZoomModeSets.length);
   var d1ZoomModeToValue = new Array();
   
   var vScale;
   var i,j,q;
   var X,Y,W,H;
   var SW,SH,SD,SF;
   var oContainer,oCenter,oSensor;
   var RelX,RelY,RelY0,AbsX,AbsY;
   var sContainerObjName,sSensorObjName,sImageObjName;
   var d1ItemObjNameList;
   var ContainerW;
   var ImageW,ImageH;
   var Width,Height;
   
   var sErr = "";
   var sPresence = "";
   var sMenuVisibil = "";
   var sRoot = sRootRelativeLocation;
   var sTag_LowerLeveru = "";
   var sTag_SecondLeveru = "";
   var vSecondLeveru = null;
   
   if(vLowerLeveru==null) vLowerLeveru = 0;
   if(vLowerLeveru!=null) vSecondLeveru = vLowerLeveru + 1;
   
   W = vOriginalW; 
   H = vOriginalH; 
   SW = vDisplayWidth/W;
   SH = vDisplayHeight/H;
   SD = Math.min(SH,SW);
   SW = (vFrameWidth - 16)/W;
   SH = (vFrameHeight - 16)/H;
   SF = Math.min(SH,SW);
   
   for(i = 0; i<=(d1ZoomModeSets.length -1); i++){
      
      d1ZoomScaleSets[i] = SF * d1ZoomCardinalSets[i];
      
   }
   
   for(i = 0; i<=(d1ZoomModeSets.length -1); i++){
      
      d1ZoomModeToValue[d1ZoomModeSets[i]] = i;
      
   }
   
   sZoomMode = sGet_LocationSearch_Operand("@Zoom",1);
   
   // alert("sZoomMode:"+sZoomMode+"; "+"");
   
   if(sZoomMode == ""){
      
      sZoomMode = d1ZoomModeSets[0];
      
   }
   
   vScale = d1ZoomScaleSets[d1ZoomModeToValue[sZoomMode]];
   
   // alert("sZoomMode:"+sZoomMode+"; "+"vScale:"+vScale+"; "+"");
   
   sSensorObjName = sObjProperNoun+"Sensor/";
   sContainerObjName = sObjProperNoun+"Container/";
   sImageObjName = sObjProperNoun+"Image/";
   
   d1ItemObjNameList = new Array(sImageObjName);
   // sImageObjName
   
   if((typeof d3PassiveMessage_Factor[sSensorObjName])!="undefined") sErr += "★PassiveMenuMessage_Entry_Content( )エラー：すでに登録済みの オブジェクト名 ”"+sSensorObjName+"”が重複して使用されました．\n";
   
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
   
   // "+sTag_LowerLeveru+" 
   // "+sTag_SecondLeveru+" 
   
   ContainerW = Math.floor(vOriginalW*vScale);
   
   if(ContainerW<vFrameWidth) ContainerW = vFrameWidth;
   
   vPassiveMenu__ContainerW = ContainerW;
   
   document.write("<ilayer id='"+sContainerObjName+"' left='0' width='"+ContainerW+"' bgcolor='#d7efb7' "+sTag_LowerLeveru+" >");
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
   
   // q = d1PassiveMessage_ContainerObjAso.length;
   d1PassiveMessage_ContainerObjAso[sSensorObjName] = oContainer;
   
   // .left // .top // .pageX // .pageY // .clip.width // .clip.height
   // oContainer.moveTo( - oContainer.pageX,0);
   
   if(oContainer.clip.width<vFrameWidth){
      
      // oContainer.resizeTo(vFrameWidth,oContainer.clip.height);
      
   }
   
   // .left // .top // .pageX // .pageY // .clip.width // .clip.height
   RelX = Math.floor( (oContainer.clip.width - oCenter.clip.width) / 2);
   // RelY0 = oCenter.pageY - oContainer.pageY;
   // RelY = RelY0 + Math.floor( (oContainer.clip.height - RelY0 - oCenter.clip.height) / 2);
   RelY = oCenter.pageY - oContainer.pageY;
   // .left // .top // .pageX // .pageY // .clip.width // .clip.height
   AbsX = oContainer.pageX + RelX;
   AbsY = oContainer.pageY + RelY;
   
   d2PassiveMessage_Environment[sSensorObjName] = new Array(AbsX, AbsY, vScale);
   // BiasX,BiasY,vScale
   
   //oCenter.moveTo(RelX,RelY-RelY0);
   oCenter.moveTo(RelX,0);
   
   oCenter.visibility = "show";
   // oContainer.visibility = "show";
   
   if( (typeof d2MessageMatrix)!="undefined"){
      
      for(i = 0; i<=(d2MessageMatrix.length - 1); i++){
         
         Netscape_PassiveMessage_Entry_Message(
            
            sObjProperNoun,
            sSensorObjName,
            d1ItemObjNameList,
            vSecondLeveru,
            d2MessageMatrix[i][0],
            d2MessageMatrix[i][1],
            d2MessageMatrix[i][2],
            d2MessageMatrix[i][3],
            d2MessageMatrix[i][4]
            
         );
         
      }
      
   }
   
   // .left // .top // .pageX // .pageY // .clip.width // .clip.height
   X = oContainer.pageX;
   Y = oContainer.pageY;
   W = oContainer.clip.width;
   H = oContainer.clip.height;
   
   document.write("<layer id='"+sSensorObjName+"' left='"+X+"' top='"+Y+"' width='"+W+"' height='"+H+"' "+sTag_SecondLeveru+" OnMouseOut='Netscape_PassiveMessage_ClearMessageHandler(this)' >");
   // visibility='hide' // bgcolor='#ffffff'
   document.write("</layer>");
   
   // document.write("<br>");
   
   oSensor = document.layers[sSensorObjName];
   
   oSensor.onMouseMove = Netscape_MouseMoveHandler;
   oSensor.captureEvents(Event.MOUSEMOVE);
   
   vPassiveMenu_MenuMinY = oSensor.pageY;
   
   document.write("<layer id='PassiveMenu_Menu' visibility='hide' left='0' top='"+vPassiveMenu_MenuMinY+"' bgcolor='#d6d3ce' "+sTag_SecondLeveru+" >");
   // visibility='hide'
   
   // document.write("<br>");
   // document.write("layer id='PassiveMenu_Menu' visibility='hide' left='0' top='"+vPassiveMenu_MenuMinY+"' bgcolor='#d6d3ce' "+sTag_SecondLeveru+" ");
   // document.write("<br>");
   
   PassiveMenu_Define_Menu(vZoomQnt_Default,d1ZoomModeSets,d1ZoomScaleSets,d1ZoomModeToValue);
   
   document.write("</layer>");
   
   document.PassiveMenu_Menu.onMouseMove = Netscape_PassiveMenu_CloseCancelHandler;
   document.PassiveMenu_Menu.captureEvents(Event.MOUSEMOVE);
   
   vPassiveMenu_MenuHeight = document.PassiveMenu_Menu.clip.height;
   // document.PassiveMenu_Menu.moveTo(0,vPassiveMenu_MenuMinY);
   
   sMenuVisibil = sGet_LocationSearch_Operand("@Zoom",2);
   
   if(sMenuVisibil == "Open"){
      
      PassiveMenu_MenuOpen(oSensor);
      
   }
   
   
}

function PassiveMenu_Define_Menu( vZoomQnt_Default, d1ZoomModeSets, d1ZoomScaleSets, d1ZoomModeToValue ){

   
   // var d1ZoomModeSets = new Array("S","M","L","2L");
   // var d1ZoomScaleSets = new Array(d1ZoomModeSets.length);
   // var sImageName,vWidth,vHeight;
   var sRoot = sRootRelativeLocation;
   var sImageMessage = "";
   var sTag_ImageMessage = "";
   var vContentTop,vContentLeft,vContentWidth,vContentHeight;
   var vContainerTop,vContainerLeft,vContainerWidth,vContainerHeight,sContainerColor;
   
   var vZoomQnt,sZoomQnt,sZoomMode;
   var d1Menu; 
   var d1ZoomMinus = new Array();
   var d1ZoomPlus = new Array();
   var vZoomValue;
   var vMenuMax,sLinkTagHead,sLinkTagTail,sZoomLink,sParts;
   // var d1ZoomModeToValue = new Array();
   var vRoot;
   var d1Content,sParameter;
   var vI;
   var W,H,SW,SH,SMin,S0,S1,S2,S,SF,SD;
   // visibility
   var sMenuVisibil = "";
   // var sMessage = "";
   var sCurrFontHead = "";
   var sCurrFontTail = "";
   // var sMenuColor,sTag_MenuColor;
   var sTag_CurrBGColor = " bgcolor='#ff8faf' ";
   
   sParameter = "";
   // sParameter += "@Image;" + sGet_LocationSearch_Operand("@Image");
   sZoomMode = sGet_LocationSearch_Operand("@Zoom",1);
   sZoomQnt = sGet_LocationSearch_Operand("@Zoom",0);
   vZoomQnt = 0;
   
   if(sZoomQnt!="") vZoomQnt = eval(sZoomQnt);
   else{ 
      
      if( 0 < vZoomQnt_Default ) vZoomQnt = vZoomQnt_Default;
      else vZoomQnt = d1ZoomModeSets.length;
      
   }
   
   // window.status = "Zoom:"+vZoomQnt+"; "+sZoomMode+"; "+"";
   
   if(sZoomMode == ""){
      
      sZoomMode = d1ZoomModeSets[0];
      
   }
   
   // S = d1ZoomScaleSets[d1ZoomModeToValue[sZoomMode]];
   vZoomValue = d1ZoomModeToValue[sZoomMode]-1;
   
   if(0 <= vZoomValue){
      
      sParts = 
       "<a href='"+sSelfName+"?"+sGet_Except_LocationSearch_Stream("@Zoom")+"@Zoom;"+vZoomQnt+";"+d1ZoomModeSets[vZoomValue]+";"+"Open;'>"+
       "<img border='0' src='"+sRoot+"b4zoom0.gif'>"+
       "</a>";
      
   }
   
   else{
      
      sParts = 
       "<img border='0' src='"+sRoot+"b4mark0.gif'>";
      
   }
   
   document.write(
    "<table id='PassiveMenu_Menu_Inner' border='border' cellpadding='7'' class='border_default-outer '>"+
    "<tr>"+
    "<td class='border_default-inner '>"
   );
   
   document.write(
    "<table border='0' cellpadding='0' cellspacing='0'>"+
    "<tr>"+
    "<td>"+
    sParts+
    "</td>"+
    "<td>"
   );
   
   document.write(
    "<table border='0' cellpadding='0' cellspacing='0'>"+
    "<tr>"+
    "<td nowrap>"+
    "<tt>"+
    sChange_HTMLSymbol(" ")+
    "</tt>"+
    "</td>"
   );
   
   for(vI = 0; vI <= (vZoomQnt - 1) ; vI++){
      
      if(sZoomMode == d1ZoomModeSets[vI]){
         
         // #ff8787; #d7efb7; #efe7b7; #efa7df; #c7876f; #dbbfdb; #dbdbbf; #bfdbdb; #ff7f00; #ff8faf;
         document.write(
          "<td nowrap "+sTag_CurrBGColor+" >"+
          "<tt>"+
          d1ZoomModeSets[vI]+
          "</tt>"+
          "</td>"
         );
      }
      
      else{
         
         document.write(
          "<td nowrap>"+
          "<tt>"+
          "<a href='"+sSelfName+"?"+sGet_Except_LocationSearch_Stream("@Zoom")+"@Zoom;"+vZoomQnt+";"+d1ZoomModeSets[vI]+";"+"Open;'>"+
          d1ZoomModeSets[vI]+
          "</a>"+
          "</tt>"+
          "</td>"
         );
      }
      
      document.write(
       "<td nowrap>"+
       "<tt>"+
       sChange_HTMLSymbol(" ")+
       "</tt>"+
       "</td>"
      );
      
   }
   
   document.write(
    "</tr>"+
    "</table>"
   );
   
   vZoomValue = d1ZoomModeToValue[sZoomMode]+1;
   
   if(vZoomValue < vZoomQnt){
      
      sParts = 
       "<a href='"+sSelfName+"?"+sGet_Except_LocationSearch_Stream("@Zoom")+"@Zoom;"+vZoomQnt+";"+d1ZoomModeSets[vZoomValue]+";"+"Open;'>"+
       "<img border='0' src='"+sRoot+"b4zoom1.gif'>"+
       "</a>";
      
   }
   
   else{
      
      sParts = 
       "<img border='0' src='"+sRoot+"b4mark0.gif'>";
      
   }
   
   document.write(
    "</td>"+
    "<td>"+
    sParts+
    "</td>"+
    "</tr>"+
    "</table>"
   );
   
   document.write(
    "</td>"+
    "</tr>"+
    "</table>"
   );
   //#d7efb7//#c7efb7//#efe7b7//#dbdbbf//#dbbfdb//#87efff
   sContainerColor = "#d7efb7";
   
}

function Gecko_MouseMoveHandler(event){
   
   Gecko_PassiveMessage_HotSpotMessageHandler(event);
   Gecko_PassiveMenu_MenuOpenHandler(event);
   
}

function Explorer_MouseMoveHandler(oSource){
   
   Explorer_PassiveMessage_HotSpotMessageHandler(oSource);
   Explorer_PassiveMenu_MenuOpenHandler(oSource);
   
}

function Netscape_MouseMoveHandler(oEvent){
   
   Netscape_PassiveMessage_HotSpotMessageHandler(oEvent);
   Netscape_PassiveMenu_MenuOpenHandler(oEvent);
   
}

// ###############################################################

function lExist_JavaScript_pasmen01( ){
   
   return true; // false; //
   
}

