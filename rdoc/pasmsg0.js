// true // false // null // this // window //
// while // for // break // continue
// typeof VARIABLE // "undefined" // "string" // "object" // "number" // "boolean" // "function"
// window.status = MESSAGE; // alert(MESSAGE);
// VARIABLE.toString(n) // êîílÇ n êiÇÃï∂éöóÒÇ…ïœä∑ÅD

// PassiveMessage

var d1PassiveMessage_SensorObjNameList = new Array();
var d1PassiveMessage_ContainerObjAso = new Array();
var d1PassiveMessage_CenterObjAso = new Array();

// Association
var d2PassiveMessage_Environment = new Array();
var d2PassiveMessage_ItemObjNameList = new Array();
var d3PassiveMessage_Factor = new Array();
var d2PassiveMessage_Sensor_Range = new Array();

// var vPassiveMessage_SerialNumber = 0;
var vPassiveMessage_Presence = 0;
var nPassiveMessage_Presence_Background = 1 << 0;
var nPassiveMessage_Presence_Sensor = 1 << 1;
var nPassiveMessage_Presence_HotSpot = 1 << 2;
// var nPassiveMessage_Presence_HotSpot_Sphere = 1 << 2;

var nPassiveMessage_HotSpotType_Rectangle = 0;
var nPassiveMessage_HotSpotType_Oval_Inner = 1;
var nPassiveMessage_HotSpotType_Oval_Outer = 2;
// var vPassiveMessage_HotSpotType = nPassiveMessage_HotSpotType_Rectangle;

function Gecko_PassiveMessage_Presence_HotSpot(sSensorObjName, vLeveru, vHotSpotMinX, vHotSpotMinY, vHotSpotMaxX, vHotSpotMaxY){
   
   var i,j;
   var sSensorObjName;
   var vSensorX,vSensorY,vScale;
   var MinX,MinY,MaxX,MaxY;
   var Width,Height;
   var Top,Right,Bottom,Left;
   var sPresence = "";
   var sTag_Leveru = "";
   
   if( (vPassiveMessage_Presence & nPassiveMessage_Presence_HotSpot)>0 ){
      
      if(vLeveru!=null) sTag_Leveru = " z-index: " + vLeveru.toString(10)+" ";
      // .toString(10) // êîílÇÇPÇOêiÇÃï∂éöóÒÇ…ïœä∑ÅD
      
      vSensorX = d2PassiveMessage_Environment[sSensorObjName][0];
      vSensorY = d2PassiveMessage_Environment[sSensorObjName][1];
      vScale = d2PassiveMessage_Environment[sSensorObjName][2];
      
      MinX = Math.floor(vSensorX + vScale * vHotSpotMinX);
      MinY = Math.floor(vSensorY + vScale * vHotSpotMinY);
      MaxX = Math.floor(vSensorX + vScale * vHotSpotMaxX);
      MaxY = Math.floor(vSensorY + vScale * vHotSpotMaxY);
      
      Width = MaxX - MinX;
      Height = MaxY - MinY;
      Top = 0;
      Right = Width;
      Left = 0;
      Bottom = Height;
      
      document.write("<div style='position: absolute; left: "+ MinX  +"px; top: "+ MinY +"px; width: "+ Width +"px; height: "+ Height +"px; clip: rect("+Top+","+Right+","+Bottom+","+Left+"); "+sPresence+" "+sTag_Leveru+" '>");
      document.write("</div>");
      // document.write("<br>");
      
   }
   
}

function Gecko_PassiveMessage_Entry_Message(sObjProperNoun, sSensorObjName, d1ItemObjNameList, vLeveru, vHotSpotMinX, vHotSpotMinY, vHotSpotMaxX, vHotSpotMaxY, sHotSpotMsg, vHotSpotType, vVertex){
   
   var q;
   var sMessageObjName,sSensorObjName;
   // lRunning // lLiving
   var lAlive; // false; // true; //
   var sIdentity,vIdentity;
   var MinX,MinY,MaxX,MaxY;
   var OX,OY,OW,OH;
   var X,Y,W,H;
   var vSensorX,vSensorY,vScale;
   var sTag_Leveru = "";
   
   if(vLeveru!=null) sTag_Leveru = " z-index: " + vLeveru.toString(10)+" ";
   // .toString(10) // êîílÇÇPÇOêiÇÃï∂éöóÒÇ…ïœä∑ÅD
   
   if(sHotSpotMsg==null) sHotSpotMsg = "";
   lAlive = (sHotSpotMsg!="");
   
   q = d2PassiveMessage_ItemObjNameList.length;
   d2PassiveMessage_ItemObjNameList[q] = d1ItemObjNameList;
   
   q = d3PassiveMessage_Factor[sSensorObjName].length;
   vIdentity = q;
   // sIdentity = vHotSpotMinX+"="+vHotSpotMinY+"="+vHotSpotMaxX+"="+vHotSpotMaxY+"/";
   sIdentity = vIdentity.toString(10) + "/";
   // .toString(10) êîílÇÇPÇOêiÇÃï∂éöóÒÇ…ïœä∑ÅD
   sMessageObjName = sObjProperNoun+"Message/"+sIdentity;
   
   d3PassiveMessage_Factor[sSensorObjName][q] = new Array(vHotSpotMinX, vHotSpotMinY, vHotSpotMaxX, vHotSpotMaxY, sMessageObjName, lAlive, vHotSpotType, vVertex);
   // HotSpotHotSpotMinX, HotSpotHotSpotMinY, HotSpotHotSpotMaxX, HotSpotHotSpotMaxY, MsgObjName
   
//    alert(
//    "d3PassiveMessage_Factor["+sSensorObjName+"]["+q+"] ="+d3PassiveMessage_Factor[sSensorObjName][q]+"; "+"\n"+
//    "");
   
   vSensorX = d2PassiveMessage_Environment[sSensorObjName][0];
   vSensorY = d2PassiveMessage_Environment[sSensorObjName][1];
   vScale = d2PassiveMessage_Environment[sSensorObjName][2];
   
   MinX = Math.floor(vSensorX + vScale * vHotSpotMinX);
   MinY = Math.floor(vSensorY + vScale * vHotSpotMinY);
   MaxX = Math.floor(vSensorX + vScale * vHotSpotMaxX);
   MaxY = Math.floor(vSensorY + vScale * vHotSpotMaxY);
   
   document.write("<div id='"+sMessageObjName+"' style='visibility: hidden; position: absolute; left: "+0+"px; top: "+vSensorY+"px; border: 1px solid #000000; background-color: #dfffdf; "+sTag_Leveru+" '> ");
   // visibility: hidden; 
   
   document.write("<table border='0' cellpadding='2' cellspacing='0'>");
   document.write("<tr>");
   document.write("<td nowrap>");
   
   document.write(sHotSpotMsg);
   
   document.write("</td>");
   document.write("</tr>");
   document.write("</table>");
   
   document.write("</div>");
   
   oMessage = document.getElementById(sMessageObjName);
   
   W = oMessage.offsetWidth;
   H = oMessage.offsetHeight;
   
   X = MaxX - W;
   Y = MaxY - H;
   
   if(X<0) X = 0;
   if(Y<vSensorY) Y = vSensorY;
   
//    oMessage.style.posLeft = X;
//    oMessage.style.posTop = Y;
   oMessage.style.left = X;
   oMessage.style.top = Y;
   
   // .visibility = // ( "visible" // "hidden" )
   // oMessage.style.visibility = "visible";
   
}

function Explorer_PassiveMessage_Presence_HotSpot(sSensorObjName, vLeveru, vHotSpotMinX, vHotSpotMinY, vHotSpotMaxX, vHotSpotMaxY){
   
   var i,j;
   var sSensorObjName;
   var vSensorX,vSensorY,vScale;
   var MinX,MinY,MaxX,MaxY;
   var Width,Height;
   var Top,Right,Bottom,Left;
   var sPresence = "";
   var sTag_Leveru = "";
   
   if( (vPassiveMessage_Presence & nPassiveMessage_Presence_HotSpot)>0 ){
      
      if(vLeveru!=null) sTag_Leveru = " z-index: " + vLeveru.toString(10)+" ";
      // .toString(10) // êîílÇÇPÇOêiÇÃï∂éöóÒÇ…ïœä∑ÅD
      
      vSensorX = d2PassiveMessage_Environment[sSensorObjName][0];
      vSensorY = d2PassiveMessage_Environment[sSensorObjName][1];
      vScale = d2PassiveMessage_Environment[sSensorObjName][2];
      
      MinX = Math.floor(vSensorX + vScale * vHotSpotMinX);
      MinY = Math.floor(vSensorY + vScale * vHotSpotMinY);
      MaxX = Math.floor(vSensorX + vScale * vHotSpotMaxX);
      MaxY = Math.floor(vSensorY + vScale * vHotSpotMaxY);
      
      Width = MaxX - MinX;
      Height = MaxY - MinY;
      Top = 0;
      Right = Width;
      Left = 0;
      Bottom = Height;
      
      sPresence = " background-color: #7f7f7f; filter: Alpha(Opacity=75); ";
      // border: 1px solid #000000; 
      
      document.write("<div style='position: absolute; left: "+ MinX  +"px; top: "+ MinY +"px; width: "+ Width +"px; height: "+ Height +"px; clip: rect("+Top+","+Right+","+Bottom+","+Left+"); "+sPresence+" "+sTag_Leveru+" '>");
      document.write("</div>");
      // document.write("<br>");
      
   }
   
}

function Explorer_PassiveMessage_Entry_Message(sObjProperNoun, sSensorObjName, d1ItemObjNameList, vLeveru, vHotSpotMinX, vHotSpotMinY, vHotSpotMaxX, vHotSpotMaxY, sHotSpotMsg, vHotSpotType, vVertex){
   
   var q;
   var sMessageObjName,sSensorObjName;
   // lRunning // lLiving
   var lAlive; // false; // true; //
   var sIdentity,vIdentity;
   var MinX,MinY,MaxX,MaxY;
   var X,Y,W,H;
   var vSensorX,vSensorY,vScale;
   var sTag_Leveru = "";
   
   if(vLeveru!=null) sTag_Leveru = " z-index: " + vLeveru.toString(10)+" ";
   // .toString(10) // êîílÇÇPÇOêiÇÃï∂éöóÒÇ…ïœä∑ÅD
   
   if(sHotSpotMsg==null) sHotSpotMsg = "";
   lAlive = (sHotSpotMsg!="");
   
   q = d2PassiveMessage_ItemObjNameList.length;
   d2PassiveMessage_ItemObjNameList[q] = d1ItemObjNameList;
   
   q = d3PassiveMessage_Factor[sSensorObjName].length;
   vIdentity = q;
   // sIdentity = vHotSpotMinX+"="+vHotSpotMinY+"="+vHotSpotMaxX+"="+vHotSpotMaxY+"/";
   sIdentity = vIdentity.toString(10) + "/";
   // .toString(10) êîílÇÇPÇOêiÇÃï∂éöóÒÇ…ïœä∑ÅD
   sMessageObjName = sObjProperNoun+"Message/"+sIdentity;
   
   d3PassiveMessage_Factor[sSensorObjName][q] = new Array(vHotSpotMinX, vHotSpotMinY, vHotSpotMaxX, vHotSpotMaxY, sMessageObjName, lAlive, vHotSpotType, vVertex);
   // HotSpotHotSpotMinX, HotSpotHotSpotMinY, HotSpotHotSpotMaxX, HotSpotHotSpotMaxY, MsgObjName
   
   vSensorX = d2PassiveMessage_Environment[sSensorObjName][0];
   vSensorY = d2PassiveMessage_Environment[sSensorObjName][1];
   vScale = d2PassiveMessage_Environment[sSensorObjName][2];
   
   MinX = Math.floor(vSensorX + vScale * vHotSpotMinX);
   MinY = Math.floor(vSensorY + vScale * vHotSpotMinY);
   MaxX = Math.floor(vSensorX + vScale * vHotSpotMaxX);
   MaxY = Math.floor(vSensorY + vScale * vHotSpotMaxY);
   
   document.write("<div id='"+sMessageObjName+"' style='visibility: hidden; position: absolute; left: "+0+"px; top: "+vSensorY+"px; border: 1px solid #000000; background-color: #dfffdf; layer-background-color: #dfffdf; "+sTag_Leveru+" '> ");
   // visibility: hidden; 
   
   document.write("<table border='0' cellpadding='2' cellspacing='0'>");
   document.write("<tr>");
   document.write("<td nowrap>");
   
   document.write(sHotSpotMsg);
   
   document.write("</td>");
   document.write("</tr>");
   document.write("</table>");
   
   document.write("</div>");
   
   oMessage = document.all(sMessageObjName);
   
   W = oMessage.offsetWidth;
   H = oMessage.offsetHeight;
   
   X = MaxX - W;
   Y = MaxY - H;
   
   if(X<0) X = 0;
   if(Y<vSensorY) Y = vSensorY;
   
   oMessage.style.posLeft = X;
   oMessage.style.posTop = Y;
   
   // .visibility = // ( "visible" // "hidden" )
   // oMessage.style.visibility = "visible";
   
}

function Netscape_PassiveMessage_Entry_Message(sObjProperNoun, sSensorObjName, d1ItemObjNameList, vLeveru, vHotSpotMinX, vHotSpotMinY, vHotSpotMaxX, vHotSpotMaxY, sHotSpotMsg, vHotSpotType, vVertex){
   
   var q;
   var sMessageObjName,sSensorObjName;
   // lRunning // lLiving
   var lAlive; // false; // true; //
   var sIdentity,vIdentity;
   var MinX,MinY,MaxX,MaxY;
   var X,Y,W,H;
   var vSensorX,vSensorY,vScale;
   var sTag_Leveru = "";
   
   if(vLeveru!=null) sTag_Leveru = " z-index='" + vLeveru.toString(10)+"' ";
   // .toString(10) // êîílÇÇPÇOêiÇÃï∂éöóÒÇ…ïœä∑ÅD
   
   if(sHotSpotMsg==null) sHotSpotMsg = "";
   lAlive = (sHotSpotMsg!="");
   
   q = d2PassiveMessage_ItemObjNameList.length;
   d2PassiveMessage_ItemObjNameList[q] = d1ItemObjNameList;
   
   q = d3PassiveMessage_Factor[sSensorObjName].length;
   vIdentity = q;
   // sIdentity = vHotSpotMinX+"="+vHotSpotMinY+"="+vHotSpotMaxX+"="+vHotSpotMaxY+"/";
   sIdentity = vIdentity.toString(10) + "/";
   // .toString(10) êîílÇÇPÇOêiÇÃï∂éöóÒÇ…ïœä∑ÅD
   sMessageObjName = sObjProperNoun+"Message/"+sIdentity;
   
   d3PassiveMessage_Factor[sSensorObjName][q] = new Array(vHotSpotMinX, vHotSpotMinY, vHotSpotMaxX, vHotSpotMaxY, sMessageObjName, lAlive, vHotSpotType, vVertex);
   // HotSpotHotSpotMinX, HotSpotHotSpotMinY, HotSpotHotSpotMaxX, HotSpotHotSpotMaxY, MsgObjName
   
   vSensorX = d2PassiveMessage_Environment[sSensorObjName][0];
   vSensorY = d2PassiveMessage_Environment[sSensorObjName][1];
   vScale = d2PassiveMessage_Environment[sSensorObjName][2];
   
   MinX = Math.floor(vSensorX + vScale * vHotSpotMinX);
   MinY = Math.floor(vSensorY + vScale * vHotSpotMinY);
   MaxX = Math.floor(vSensorX + vScale * vHotSpotMaxX);
   MaxY = Math.floor(vSensorY + vScale * vHotSpotMaxY);
   
   document.write("<layer id='"+sMessageObjName+"' left='"+0+"' top='"+vSensorY+"' visibility='hide' "+sTag_Leveru+" >");
   // visibility='hide' // bgcolor='#000000'  // bgcolor='#7f7f7f' 
   
   document.write("<table border='0' cellpadding='1' cellspacing='0' bgcolor='#000000'>");
   document.write("<tr>");
   document.write("<td nowrap>");
   
   document.write("<table border='0' cellpadding='2' cellspacing='0' bgcolor='#dfffdf'>");
   document.write("<tr>");
   document.write("<td nowrap>");
   
   document.write(sHotSpotMsg);
   
   document.write("</td>");
   document.write("</tr>");
   document.write("</table>");
   
   document.write("</td>");
   document.write("</tr>");
   document.write("</table>");
   
   document.write("</layer>");
   
   oMessage = document.layers[sMessageObjName];
   
   W = oMessage.clip.width;
   H = oMessage.clip.height;
   
   X = MaxX - W;
   Y = MaxY - H;
   
   if(X<0) X = 0;
   if(Y<vSensorY) Y = vSensorY;
   
   oMessage.moveTo(X,Y);
   
   // .visibility = // ( "show" //  "hide" )
   // oMessage.visibility = "show";
   
}

function Gecko_PassiveMessage_HotSpotMessageHandler(event){
   
   var oEvent = event;
   var oSource = oEvent.target;
   
   var oSensor = null;
   var sSensorObjName = "";
   oSensor = oSource;
   sSensorObjName = oSensor.id;
   // sSensorObjName = oSensor.name;
   
   // alert(
   // "oSource="+oSource+"; "+"\n"+
   // "oSensor.id;="+oSensor.id+"; "+"\n"+
   // "oSensor.name="+oSensor.name+"; "+"\n"+
   // "");
   
   var i,j;
   var X,Y,H,W;
   var Flow;
   var MinX,MinY,MaxX,MaxY;
   var vSensorX,vSensorY,vScale;
   var vSourceX,vSourceY;
   var oMessage;
   var lFlag; // false; // true; //
   var vAllowance = 10;
   // lRunning // lLiving
   var lAlive; // false; // true; //
   var vHotSpotType;
   var lIncursion; // false; // true; //
   var OX,OY,RY,RX,RS,VX,VY,Cos2,R,VD,W;
   var vWeight = -1;
   var vWeightMax = 0;
   var sSelect = "";
   var sMessageObjName;
   var sCheckObjName;
   var vVertex;
   
   var oCheck;
   
   // oSensor = null;
   // sSensorObjName = "";
   
   var vViewOffsetX = window.pageXOffset;
   var vViewOffsetY = window.pageYOffset;
   // var vViewOffsetX = document.body.scrollLeft;
   // var vViewOffsetY = document.body.scrollTop;
   
   // alert(
   // "vViewOffsetX="+vViewOffsetX+"; "+"\n"+
   // "vViewOffsetY="+vViewOffsetY+"; "+"\n"+
   // "");
   
   var vViewMaxX = vViewOffsetX + vFrameWidth - 16;
   var vViewMaxY = vViewOffsetY + vFrameHeight - 16;
   var vMPageX = oEvent.pageX;
   var vMPageY = oEvent.pageY;
   
   for(j = 0; j<=(d3PassiveMessage_Factor[sSensorObjName].length - 1); j++){
      
      vSensorX = d2PassiveMessage_Environment[sSensorObjName][0];
      vSensorY = d2PassiveMessage_Environment[sSensorObjName][1];
      vScale = d2PassiveMessage_Environment[sSensorObjName][2];
      
      MinX = Math.floor(vSensorX + vScale * d3PassiveMessage_Factor[sSensorObjName][j][0]);
      MinY = Math.floor(vSensorY + vScale * d3PassiveMessage_Factor[sSensorObjName][j][1]);
      MaxX = Math.floor(vSensorX + vScale * d3PassiveMessage_Factor[sSensorObjName][j][2]);
      MaxY = Math.floor(vSensorY + vScale * d3PassiveMessage_Factor[sSensorObjName][j][3]);
      
      sMessageObjName = d3PassiveMessage_Factor[sSensorObjName][j][4];
      oMessage = document.getElementById(sMessageObjName);
      // W = oMessage.offsetWidth;
      // H = oMessage.offsetHeight;
      
      lAlive = d3PassiveMessage_Factor[sSensorObjName][j][5];
      vHotSpotType = d3PassiveMessage_Factor[sSensorObjName][j][6];
      vVertex = d3PassiveMessage_Factor[sSensorObjName][j][7];
      
      if(vVertex==null) vVertex = 1;
      
      // typeof Object // "undefined" // "string" // "object"
      lFlag = (typeof d2PassiveMessage_Sensor_Range[sSensorObjName])=="undefined";
      if(! lFlag) lFlag = lCheck_RectangleImmanent(d2PassiveMessage_Sensor_Range[sSensorObjName],vMPageX,vMPageY);
      
      if(lFlag){
         
         vWeight = -1;
         // lIncursion = false; // true; //
         
         if(vHotSpotType==null || vHotSpotType==nPassiveMessage_HotSpotType_Rectangle){
            
            lIncursion =  lCheck_RectangleImmanent(MinX,MinY,MaxX,MaxY,vMPageX,vMPageY);
            
            if(lIncursion) vWeight = vVertex;
            
            // window.status = sMessageObjName+"; "+vWeight+"; "+"";
            
         }
         
         else if(vHotSpotType==nPassiveMessage_HotSpotType_Oval_Inner || vHotSpotType==nPassiveMessage_HotSpotType_Oval_Outer){
            
            RX = Math.abs( (MaxX - MinX) / 2);
            RY = Math.abs( (MaxY - MinY) / 2);
            OX = (MinX + MaxX) / 2;
            OY = (MinY + MaxY) / 2;
            RS = 1;
            
            if(vHotSpotType==nPassiveMessage_HotSpotType_Oval_Outer){
               
               VX = RX;
               VY = RY;
               VD = Math.sqrt(VX * VX + VY * VY);
               R = RY / Math.sqrt(1 - (1 - (RY * RY) / (RX * RX) ) * (VX * VX)/(VX * VX + VY * VY) );
               RS = VD / R;
               
            }
            
            VX = vMPageX - OX;
            VY = vMPageY - OY;
            VD = Math.sqrt(VX * VX + VY * VY);
            R = RY / Math.sqrt(1 - (1 - (RY * RY) / (RX * RX) ) * (VX * VX)/(VX * VX + VY * VY) );
            R *= RS;
            // lIncursion = VD<=R;
            vWeight = (R - VD) / R * vVertex;
            
            // window.status = lIncursion+"VX:"+VX+"; "+"VY:"+VY+"; "+"R:"+R+"; "+"VD:"+VD+"; "+"";
            
         }
         
         if(vWeightMax<=vWeight){
            
            // window.status = oMessage.id+":"+oMessage.style.visibility+":"+vMPageX+"; "+vMPageY+"; "+"HotSpot:"+MinX+"; "+MinY+"; "+MaxX+"; "+MaxY+"; "+"";
            
            vWeightMax = vWeight;
            sSelect = sMessageObjName;
            
         }
         
      }
      
   }
   
   for(j = 0; j<=(d3PassiveMessage_Factor[sSensorObjName].length - 1); j++){
      
      sMessageObjName = d3PassiveMessage_Factor[sSensorObjName][j][4];
      oMessage = document.getElementById(sMessageObjName);
      lAlive = d3PassiveMessage_Factor[sSensorObjName][j][5];
      
      if(sMessageObjName==sSelect){
         
         // window.status = "Weight:"+vWeightMax+"; "+sMessageObjName+"";
         
         // .visibility = // ( "visible" // "hidden" )
         if(oMessage.style.visibility=="hidden"){
            
            vSensorX = d2PassiveMessage_Environment[sSensorObjName][0];
            vSensorY = d2PassiveMessage_Environment[sSensorObjName][1];
            
            W = oMessage.offsetWidth;
            H = oMessage.offsetHeight;
            X = vMPageX;
            Flow = X + W - vViewMaxX;
            
            if(0<Flow) X -= Flow;
            if(X<0) X = 0;
            
            Y = vMPageY + 15 + vAllowance;
            Flow = Y + H - vViewMaxY;
            
            if(0<Flow) Y = vMPageY - H - (3 + vAllowance);
            if(Y<vSensorY) Y = vSensorY;
            
//             oMessage.style.posLeft = X;
//             oMessage.style.posTop = Y;
            oMessage.style.left = X;
            oMessage.style.top = Y;
            
            // window.status = sMessageObjName;
            // window.status = vViewMaxX+"; "+vViewMaxY+"; "+vMPageX+"; "+vMPageY+"; "+"";
            
            // .visibility = // ( "visible" // "hidden" )
            if(lAlive) oMessage.style.visibility = "visible";
            
         }
         
      }
      
      else{
         
         // .visibility = // ( "visible" // "hidden" )
         if(oMessage.style.visibility!="hidden"){
            
            // .visibility = // ( "visible" // "hidden" )
            oMessage.style.visibility = "hidden";
            
         }
         
      }
      
   }
   
}


function Explorer_PassiveMessage_HotSpotMessageHandler(oSource){
   
   // var oObject = document.all(oSource.id);
   var sSourceObjName = oSource.id;
   
   var oSensor = oSource;
   var sSensorObjName = sSourceObjName;
   var i,j;
   var X,Y,H,W;
   var Flow;
   var MinX,MinY,MaxX,MaxY;
   var vSensorX,vSensorY,vScale;
   var vSourceX,vSourceY;
   var oMessage;
   var lFlag; // false; // true; //
   var vAllowance = 10;
   // lRunning // lLiving
   var lAlive; // false; // true; //
   var vHotSpotType;
   var lIncursion; // false; // true; //
   var OX,OY,RY,RX,RS,VX,VY,Cos2,R,VD,W;
   var vWeight = -1;
   var vWeightMax = 0;
   var sSelect = "";
   var sMessageObjName;
   var vVertex;
   
   // vSourceX = oSource.style.posLeft;
   // vSourceY = oSource.style.posTop;
   vSourceX = oSource.offsetLeft;
   vSourceY = oSource.offsetTop;
   
   var vViewOffsetX = document.body.scrollLeft;
   var vViewOffsetY = document.body.scrollTop;
   var vViewMaxX = vViewOffsetX + vFrameWidth - 16;
   var vViewMaxY = vViewOffsetY + vFrameHeight - 16;
   var vMPageX = vViewOffsetX + window.event.clientX;
   var vMPageY = vViewOffsetY + window.event.clientY;
   
   // window.status = vMPageX+"; "+vMPageY+"; "+sSensorObjName+"; "+d3PassiveMessage_Factor[sSensorObjName][0][4]+"; "+"";
   
   for(j = 0; j<=(d3PassiveMessage_Factor[sSensorObjName].length - 1); j++){
      
      vSensorX = d2PassiveMessage_Environment[sSensorObjName][0];
      vSensorY = d2PassiveMessage_Environment[sSensorObjName][1];
      vScale = d2PassiveMessage_Environment[sSensorObjName][2];
      
      MinX = Math.floor(vSensorX + vScale * d3PassiveMessage_Factor[sSensorObjName][j][0]);
      MinY = Math.floor(vSensorY + vScale * d3PassiveMessage_Factor[sSensorObjName][j][1]);
      MaxX = Math.floor(vSensorX + vScale * d3PassiveMessage_Factor[sSensorObjName][j][2]);
      MaxY = Math.floor(vSensorY + vScale * d3PassiveMessage_Factor[sSensorObjName][j][3]);
      
      sMessageObjName = d3PassiveMessage_Factor[sSensorObjName][j][4];
      oMessage = document.all(sMessageObjName);
      // W = oMessage.offsetWidth;
      // H = oMessage.offsetHeight;
      
      lAlive = d3PassiveMessage_Factor[sSensorObjName][j][5];
      vHotSpotType = d3PassiveMessage_Factor[sSensorObjName][j][6];
      vVertex = d3PassiveMessage_Factor[sSensorObjName][j][7];
      
      if(vVertex==null) vVertex = 1;
      
      // typeof Object // "undefined" // "string" // "object"
      // window.status = (typeof d2PassiveMessage_Sensor_Range[sSensorObjName]);
      lFlag = (typeof d2PassiveMessage_Sensor_Range[sSensorObjName])=="undefined";
      if(! lFlag) lFlag = lCheck_RectangleImmanent(d2PassiveMessage_Sensor_Range[sSensorObjName],vMPageX,vMPageY);
      
      if(lFlag){
         
         vWeight = -1;
         // lIncursion = false; // true; //
         
         if(vHotSpotType==null || vHotSpotType==nPassiveMessage_HotSpotType_Rectangle){
            
            lIncursion =  lCheck_RectangleImmanent(MinX,MinY,MaxX,MaxY,vMPageX,vMPageY);
            
            if(lIncursion) vWeight = vVertex;
            
            // window.status = sMessageObjName+"; "+vWeight+"; "+"";
            
         }
         
         else if(vHotSpotType==nPassiveMessage_HotSpotType_Oval_Inner || vHotSpotType==nPassiveMessage_HotSpotType_Oval_Outer){
            
            RX = Math.abs( (MaxX - MinX) / 2);
            RY = Math.abs( (MaxY - MinY) / 2);
            OX = (MinX + MaxX) / 2;
            OY = (MinY + MaxY) / 2;
            RS = 1;
            
            if(vHotSpotType==nPassiveMessage_HotSpotType_Oval_Outer){
               
               VX = RX;
               VY = RY;
               VD = Math.sqrt(VX * VX + VY * VY);
               R = RY / Math.sqrt(1 - (1 - (RY * RY) / (RX * RX) ) * (VX * VX)/(VX * VX + VY * VY) );
               RS = VD / R;
               
            }
            
            VX = vMPageX - OX;
            VY = vMPageY - OY;
            VD = Math.sqrt(VX * VX + VY * VY);
            R = RY / Math.sqrt(1 - (1 - (RY * RY) / (RX * RX) ) * (VX * VX)/(VX * VX + VY * VY) );
            R *= RS;
            // lIncursion = VD<=R;
            vWeight = (R - VD) / R * vVertex;
            
            // window.status = lIncursion+"VX:"+VX+"; "+"VY:"+VY+"; "+"R:"+R+"; "+"VD:"+VD+"; "+"";
            
         }
         
         if(vWeightMax<=vWeight){
            
            // window.status = oMessage.id+":"+oMessage.style.visibility+":"+vMPageX+"; "+vMPageY+"; "+"HotSpot:"+MinX+"; "+MinY+"; "+MaxX+"; "+MaxY+"; "+"";
            
            vWeightMax = vWeight;
            sSelect = sMessageObjName;
            
         }
         
      }
      
   }
   
   for(j = 0; j<=(d3PassiveMessage_Factor[sSensorObjName].length - 1); j++){
      
      sMessageObjName = d3PassiveMessage_Factor[sSensorObjName][j][4];
      oMessage = document.all(sMessageObjName);
      lAlive = d3PassiveMessage_Factor[sSensorObjName][j][5];
      
      if(sMessageObjName==sSelect){
         
         // window.status = "Weight:"+vWeightMax+"; "+sMessageObjName+"";
         
         // .visibility = // ( "visible" // "hidden" )
         if(oMessage.style.visibility=="hidden"){
            
            vSensorX = d2PassiveMessage_Environment[sSensorObjName][0];
            vSensorY = d2PassiveMessage_Environment[sSensorObjName][1];
            
            W = oMessage.offsetWidth;
            H = oMessage.offsetHeight;
            X = vMPageX;
            Flow = X + W - vViewMaxX;
            
            if(0<Flow) X -= Flow;
            if(X<0) X = 0;
            
            Y = vMPageY + 15 + vAllowance;
            Flow = Y + H - vViewMaxY;
            
            if(0<Flow) Y = vMPageY - H - (3 + vAllowance);
            if(Y<vSensorY) Y = vSensorY;
            
            oMessage.style.posLeft = X;
            oMessage.style.posTop = Y;
            
            // window.status = sMessageObjName;
            // window.status = vViewMaxX+"; "+vViewMaxY+"; "+vMPageX+"; "+vMPageY+"; "+"";
            
            // .visibility = // ( "visible" // "hidden" )
            if(lAlive) oMessage.style.visibility = "visible";
            
         }
         
      }
      
      else{
         
         // .visibility = // ( "visible" // "hidden" )
         if(oMessage.style.visibility!="hidden"){
            
            // .visibility = // ( "visible" // "hidden" )
            oMessage.style.visibility = "hidden";
            
         }
         
      }
      
   }
   
}

function Netscape_PassiveMessage_HotSpotMessageHandler(oEvent){
   
   // var oSource = oEvent.target;
   // var oSourceObjName = oEvent.target.name;
   
   var oSensor = null;
   var sSensorObjName = "";
   // oSensor = oSource;
   // sSensorObjName = oSensor.id;
   // sSensorObjName = oSensor.name;
   
   var vViewOffsetX = window.pageXOffset;
   var vViewOffsetY = window.pageYOffset;
   var vViewMaxX = vViewOffsetX + vFrameWidth - 16;
   var vViewMaxY = vViewOffsetY + vFrameHeight - 16;
   var vMPageX = oEvent.pageX;
   var vMPageY = oEvent.pageY;
   
   var i,j;
   var X,Y,H,W;
   var Flow;
   var MinX,MinY,MaxX,MaxY;
   var vSensorX,vSensorY,vScale;
   var vSourceX,vSourceY;
   var oMessage;
   var lFlag; // false; // true; //
   var vAllowance = 10;
   // lRunning // lLiving
   var lAlive; // false; // true; //
   var vHotSpotType;
   var lIncursion; // false; // true; //
   var OX,OY,RY,RX,RS,VX,VY,Cos2,R,VD,W;
   var vWeight = -1;
   var vWeightMax = 0;
   var sSelect = "";
   var sMessageObjName;
   var sCheckObjName;
   var vVertex;
   
   var oCheck;
   
   // window.status = sSensorObjName+": "+event.pageX+"; "+event.pageY+"; "+"";
   // window.status = oSourceObjName+"; "+""; // 
   
   oSensor = null;
   sSensorObjName = "";
   
   for(i = 0; i<=(d1PassiveMessage_SensorObjNameList.length - 1); i++){
      
      sCheckObjName = d1PassiveMessage_SensorObjNameList[i];
      oCheck = document.layers[sCheckObjName];
      
      if(lNetscape_Check_LayerImmanent(oCheck,vMPageX,vMPageY)){
         
         i = d1PassiveMessage_SensorObjNameList.length;
         sSensorObjName = sCheckObjName;
         oSensor = oCheck;
         
      }
      
   }
   
   if(sSensorObjName!=""){
      
      for(j = 0; j<=(d3PassiveMessage_Factor[sSensorObjName].length - 1); j++){
         
         vSensorX = d2PassiveMessage_Environment[sSensorObjName][0];
         vSensorY = d2PassiveMessage_Environment[sSensorObjName][1];
         vScale = d2PassiveMessage_Environment[sSensorObjName][2];
         
         MinX = Math.floor(vSensorX + vScale * d3PassiveMessage_Factor[sSensorObjName][j][0]);
         MinY = Math.floor(vSensorY + vScale * d3PassiveMessage_Factor[sSensorObjName][j][1]);
         MaxX = Math.floor(vSensorX + vScale * d3PassiveMessage_Factor[sSensorObjName][j][2]);
         MaxY = Math.floor(vSensorY + vScale * d3PassiveMessage_Factor[sSensorObjName][j][3]);
         
         sMessageObjName = d3PassiveMessage_Factor[sSensorObjName][j][4];
         oMessage = document.layers[sMessageObjName];
         // .left // .top // .pageX // .pageY // .clip.width // .clip.height
         // W = oMessage.clip.width;
         // H = oMessage.clip.height;
         
         lAlive = d3PassiveMessage_Factor[sSensorObjName][j][5];
         vHotSpotType = d3PassiveMessage_Factor[sSensorObjName][j][6];
         vVertex = d3PassiveMessage_Factor[sSensorObjName][j][7];
         
         if(vVertex==null) vVertex = 1;
         
         // window.status = lAlive+": "+sSensorObjName+": "+vMPageX+"; "+vMPageY+"; "+"";
         
         // typeof Object // "undefined" // "string" // "object"
         // window.status = (typeof d2PassiveMessage_Sensor_Range[sSensorObjName]);
         lFlag = (typeof d2PassiveMessage_Sensor_Range[sSensorObjName])=="undefined";
         if(! lFlag) lFlag = lCheck_RectangleImmanent(d2PassiveMessage_Sensor_Range[sSensorObjName],vMPageX,vMPageY);
         
         if(lFlag){
            
            vWeight = -1;
            // lIncursion = false; // true; //
            
            if(vHotSpotType==null || vHotSpotType==nPassiveMessage_HotSpotType_Rectangle){
               
               lIncursion =  lCheck_RectangleImmanent(MinX,MinY,MaxX,MaxY,vMPageX,vMPageY);
               
               if(lIncursion) vWeight = vVertex;
               
            }
            
            else if(vHotSpotType==nPassiveMessage_HotSpotType_Oval_Inner || vHotSpotType==nPassiveMessage_HotSpotType_Oval_Outer){
               
               RX = Math.abs( (MaxX - MinX) / 2);
               RY = Math.abs( (MaxY - MinY) / 2);
               OX = (MinX + MaxX) / 2;
               OY = (MinY + MaxY) / 2;
               RS = 1;
               
               if(vHotSpotType==nPassiveMessage_HotSpotType_Oval_Outer){
                  
                  VX = RX;
                  VY = RY;
                  VD = Math.sqrt(VX * VX + VY * VY);
                  R = RY / Math.sqrt(1 - (1 - (RY * RY) / (RX * RX) ) * (VX * VX)/(VX * VX + VY * VY) );
                  RS = VD / R;
                  
               }
               
               VX = vMPageX - OX;
               VY = vMPageY - OY;
               VD = Math.sqrt(VX * VX + VY * VY);
               R = RY / Math.sqrt(1 - (1 - (RY * RY) / (RX * RX) ) * (VX * VX)/(VX * VX + VY * VY) );
               R *= RS;
               // lIncursion = VD<=R;
               vWeight = (R - VD) / R * vVertex;
               
               
            }
            
            if(vWeightMax<=vWeight){
               
               vWeightMax = vWeight;
               sSelect = sMessageObjName;
               
            }
            
         }
         
      }
      
      for(j = 0; j<=(d3PassiveMessage_Factor[sSensorObjName].length - 1); j++){
         
         sMessageObjName = d3PassiveMessage_Factor[sSensorObjName][j][4];
         oMessage = document.layers[sMessageObjName];
         lAlive = d3PassiveMessage_Factor[sSensorObjName][j][5];
         
         if(sMessageObjName==sSelect){
            
            // window.status = "Weight:"+vWeightMax+"; "+sMessageObjName+"";
            
            // .visibility = // ( "show" //  "hide" )
            if(oMessage.visibility=="hide"){
               
               vSensorX = d2PassiveMessage_Environment[sSensorObjName][0];
               vSensorY = d2PassiveMessage_Environment[sSensorObjName][1];
               
               W = oMessage.clip.width;
               H = oMessage.clip.height;
               X = vMPageX;
               Flow = X + W - vViewMaxX;
               
               if(0<Flow) X -= Flow;
               if(X<0) X = 0;
               
               Y = vMPageY + 15 + vAllowance;
               Flow = Y + H - vViewMaxY;
               
               if(0<Flow) Y = vMPageY - H - (3 + vAllowance);
               if(Y<vSensorY) Y = vSensorY;
               
               // .left // .top // .pageX // .pageY // .clip.width // .clip.height
               oMessage.moveTo(X,Y);
               
               // window.status = '"'+oMessage.visibility+'"'+"";
               
               // .visibility = // ( "show" //  "hide" )
               if(lAlive) oMessage.visibility = "show";
               
               // window.status = '"'+oMessage.visibility+'"'+"";
               
            }
            
         }
         
         else{
            
            // .visibility = // ( "show" //  "hide" )
            if(oMessage.visibility!="hide"){
               
               // .visibility = // ( "show" //  "hide" )
               oMessage.visibility = "hide";
               
            }
            
         }
         
      }
      
   }
   
}

function Gecko_PassiveMessage_ClearMessageHandler(event){
   
   var oEvent = event;
   var oSource = oEvent.target;
   
   var oSensor,sSensorObjName;
   oSensor = oSource;
   sSensorObjName = oSensor.id;
   // sSensorObjName = oSensor.name;
   
   var vViewOffsetX = window.pageXOffset;
   var vViewOffsetY = window.pageYOffset;
   var vViewMaxX = vViewOffsetX + vFrameWidth;
   var vViewMaxY = vViewOffsetY + vFrameHeight - 16;
   // var vMPageX = oEvent.pageX;
   // var vMPageY = oEvent.pageY;
   
   var i,j,k;
   var X,Y,H,W;
   var Flow;
   var MinX,MinY,MaxX,MaxY;
   var SensorX,SensorY;
   var oMessage;
   var sMsg = "";
   
   // SensorX = oSource.style.posLeft;
   // SensorY = oSource.style.posTop;
   SensorX = oSource.offsetLeft;
   SensorY = oSource.offsetTop;
   
   for(j = 0; j<=(d3PassiveMessage_Factor[sSensorObjName].length - 1); j++){
      
      oMessage = document.getElementById(d3PassiveMessage_Factor[sSensorObjName][j][4]);
      
      // sMsg += oMessage.id+"; ";
      
      if(oMessage.style.visibility!="hidden"){
         
         oMessage.style.visibility = "hidden";
         
      }
      
   }
   
}


function Explorer_PassiveMessage_ClearMessageHandler(oSource){
   
   // var oObject = document.all(oSource.id);
   var sSourceObjName = oSource.id;
   
   var sSensorObjName = sSourceObjName;
   var i,j;
   var MinX,MinY,MaxX,MaxY;
   var SensorX,SensorY;
   var oMessage;
   var sMsg = "";
   
   // SensorX = oSource.style.posLeft;
   // SensorY = oSource.style.posTop;
   SensorX = oSource.offsetLeft;
   SensorY = oSource.offsetTop;
   
   var vViewOffsetX = document.body.scrollLeft;
   var vViewOffsetY = document.body.scrollTop;
   var vViewMaxX = vViewOffsetX + vFrameWidth;
   var vViewMaxY = vViewOffsetY + vFrameHeight - 16;
   var vMPageX = vViewOffsetX + window.event.clientX;
   var vMPageY = vViewOffsetY + window.event.clientY;
   
   // window.status = "hidden; "+vMPageX+"; "+vMPageY+"; "+SensorX+"; "+SensorY+"; "+oSource.style.posWidth+"; "+oSource.style.posHeight+"; "+oSource.id+"; "+"";
   // sMsg += oSource.id+"; ";
   
   for(j = 0; j<=(d3PassiveMessage_Factor[sSensorObjName].length - 1); j++){
      
      oMessage = document.all(d3PassiveMessage_Factor[sSensorObjName][j][4]);
      
      // sMsg += oMessage.id+"; ";
      
      if(oMessage.style.visibility!="hidden"){
         
         oMessage.style.visibility = "hidden";
         // window.status = "hidden";
         
      }
      
   }
   
   // window.status = sMsg;
   
}

function Netscape_PassiveMessage_ClearMessageHandler(oSource){
   
   // var oSource = oEvent.target;
   
   var oSensor,sSensorObjName;
   // oSensor = oSource;
   // sSensorObjName = oSensor.id;
   // sSensorObjName = oSensor.name;
   
   var vViewOffsetX = window.pageXOffset;
   var vViewOffsetY = window.pageYOffset;
   var vViewMaxX = vViewOffsetX + vFrameWidth;
   var vViewMaxY = vViewOffsetY + vFrameHeight - 16;
   // var vMPageX = oEvent.pageX;
   // var vMPageY = oEvent.pageY;
   
   var i,j,k;
   var X,Y,H,W;
   var Flow;
   var MinX,MinY,MaxX,MaxY;
   var SensorX,SensorY;
   var oMessage;
   var sMsg = "";
   
   // window.status = "hidden; "+"";
   // window.status = "hidden; "+event.pageX+"; "+event.pageY+"; "+"";
   // window.status = "hidden; "+vMPageX+"; "+vMPageY+"; "+"";
   
   oSensor = null;
   sSensorObjName = "";
   k = 0;
   
   for(i = 0; i<=(d1PassiveMessage_SensorObjNameList.length - 1); i++){
      
      sSensorObjName = d1PassiveMessage_SensorObjNameList[i];
      oSensor = document.layers[sSensorObjName];
      
      for(j = 0; j<=(d3PassiveMessage_Factor[sSensorObjName].length - 1); j++){
         
         oMessage = document.layers[d3PassiveMessage_Factor[sSensorObjName][j][4]];
         
         // sMsg += oMessage.id+"; ";
         // sMsg += "j:"+j"; "+oMessage.visibility+"; ";
         // .visibility = // ( "show" //  "hide" )
         if(oMessage.visibility!="hide"){
            
            // k++;
            oMessage.visibility = "hide";
            // window.status = oMessage.id+": "+"hide";
            
         }
         
      }
      
   }
   
   // window.status = "hidden; "+"k:"+k+"; "+sMsg+"";
   
}

function Initialize_pasmsg0( ){
   
   var i;
   var sSensorObjName, oSensor, oContainer, oCenter, vLeft, RelX, RelY, AbsX, AbsY;
   var vPMMX,vPMMY;
   
   for(i = 0; i<=(d1PassiveMessage_SensorObjNameList.length-1); i++){
      
      sSensorObjName = d1PassiveMessage_SensorObjNameList[i];
      oSensor = document.getElementById(sSensorObjName);
      oContainer = d1PassiveMessage_ContainerObjAso[sSensorObjName];
      oCenter = d1PassiveMessage_CenterObjAso[sSensorObjName];
      vLeft = Math.floor((oContainer.offsetWidth-oCenter.offsetWidth)/2);
      // oCenter.style.left = vLeft;
      // oCenter.style.posLeft = vLeft;
      RelX = oCenter.offsetLeft;
      RelY = oCenter.offsetTop;
      AbsX = oContainer.offsetLeft + RelX;
      AbsY = oContainer.offsetTop + RelY;
      d2PassiveMessage_Environment[sSensorObjName][0] = AbsX;
      d2PassiveMessage_Environment[sSensorObjName][1] = AbsY;
      
      // alert(
      // 'oContainer.offsetWidth='+oContainer.offsetWidth+'; \n'+
      // 'oCenter.offsetWidth='+oCenter.offsetWidth+'; \n'+
      // 'vLeft='+vLeft+'; \n'+
      // 'oCenter.offsetLeft='+oCenter.offsetLeft+'; \n'+
      // '');
      
      vPMMX = oContainer.offsetLeft;
      vPMMY = oContainer.offsetTop;
      // vPassiveMenu_MenuMinY = vPMMY;
      oSensor.style.left = vPMMX+"px";
      oSensor.style.top = vPMMY+"px";
      
   }
   
}


// ###############################################################

function lExist_JavaScript_pasmsg0( ){
   
   return true; // false; //
   
}

