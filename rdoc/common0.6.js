// Charset=漢←この１行目の”Charset=”に定義されている ”漢”で このファイルのキャラクターセットを判定していますので，この行は｛削除，変更｝しないで下さい．

// true // false // null // this // window //
// while // for // break // continue
// typeof VARIABLE // "undefined" // "string" // "object" // "number" // "boolean" // "function"
// window.status = MESSAGE; // alert(MESSAGE);
// VARIABLE.toString(n) // 数値を n 進の文字列に変換．

//Seting Begin.

var lPresence = false; // true; //

var vB = 0; // 1; //
var sLPath = location.pathname.replace("\\","/");
// var sAbsoluteLocation = location.protocol+"//"+location.hostname+sLPath.substring(0,sLPath.indexOf("/",vB)+1); //

var sBBS_BasePath = ""; // "cgi-bin/"; //

var sDefaultLocation = ""; // "index.htm"; //
var vDisplayWidthMin = 240;
var vDisplayHeightMin = 200;

var iLPLng = sLPath.lastIndexOf("/")+1;
var sSelfName = sLPath.substring(iLPLng,sLPath.length); //
var sAbsoluteLocation = location.protocol+"//"+location.hostname+sLPath.substring(0,iLPLng);

var sJumpLocation = "";
var sLHash,sLSearch,d1sFactor;
sLHash = location.hash;
sLHash = sLHash.substring(1,sLHash.length);
sLSearch = location.search;
sLSearch = sLSearch.substring(1,sLSearch.length);

//var vBehaviorFooter_SerialNumber Current
var vBehaviorFooter_NextNumber = 0;
var d1LocationSearch_Tradition_OperatorList;

// ParameterOperand
var d1LocationSearch_OperandChaplet = new Array();
var d1LocationSearch_String = sLSearch.split("@");

for(i = 1; i <= (d1LocationSearch_String.length - 1); i++){
   
   n = d1LocationSearch_String[i].indexOf(";");
   
   if(0 <= n){
      
      s1 = d1LocationSearch_String[i].substring(0,n);
      s2 = d1LocationSearch_String[i].substring(n + 1,d1LocationSearch_String[i].length);
      
   }
   
   else{
      
      s1 = d1LocationSearch_String[i];
      s2 = "";
      
   }
   
   if(0<s2.length && s2.charAt(s2.length - 1)!=";") s2 = s2 + ";";
   d1LocationSearch_OperandChaplet["@" + s1] = s2;
   
}

//Seting End.
//
//Define Begin.

// onresize = ResizeWindow; 
var sRootRelativeLocation;
var vFrameWidth,vFrameHeight;
var vDisplayWidth,vDisplayHeight;
var sVerInternetExplorer5_0 = "MSIE 5.0";
var sVerInternetExplorer5_5 = "MSIE 5.5";
var sInternetExplorer = "Microsoft Internet Explorer";
var sNetscapeNavigator = "Netscape";
var sVerInformation = navigator.appVersion;
var vVersion;
var vHistoryBase  = 0;
var vVerCompatible;
var vVerCompatibleColumn = 0;
var sVerCompatibleKeyWord = "";

var nTimer_SlideShow_Switch = 0;
var nTimer_MenuClose = 1;
var nTimer_MenuSlide = 2;
// var nTimer_MenuSlideOpen = 2;
// var nTimer_MenuSlideClose = 3;

// var vFirstTrigger_SlideShow = -1;
// var lHolder_SlideShow_Switch = false; // true; //
var nCnt_SlideShow_Image = 0;
var nNext_SlideShow_Image = 0;
var nInterval_SlideShow = -1;
var lLoop_SlideShow = false; // true; //
var sHolder_SlideImageObjName = "";
var oHolder_SlideShow_ImageObj;
var d1List_SlideShow_ImageName = null;
var d2sList_SlideShow_ImageName = new Array;
var lShow_SlideShow_Switch = false; // true; //
var nSign_SlideShow_Switch = 0;

var d1oList_ImagePreload = new Array;
var d1oList_ImageObj = new Array;
var d1sList_ImageObjName = new Array;
var d2sList_ImageName = new Array;
var d1sList_ImageNatureStatus = new Array;
var vQnt_ImageName = 0;
var sFirstStrike_RadioSwitch_ImageObjName = "";

if( navigator.appName==sInternetExplorer ){
   
   vHistoryBase  = 0;
   sVerCompatibleKeyWord = "compatible";
   vVerCompatibleColumn = sVerInformation.indexOf(sVerCompatibleKeyWord);
   
   if( 0<=vVerCompatibleColumn ){
      
      vVerCompatibleColumn = vVerCompatibleColumn+sVerCompatibleKeyWord.length;
      
   }
   
   if( vVerCompatibleColumn<=0 ){
      
      vVerCompatibleColumn = 0;
      
   }
   
}

if( navigator.appName==sNetscapeNavigator ){
   
   vHistoryBase = 1;
   
}

vVerCompatibleNext = sVerInformation.indexOf("[");

if(vVerCompatibleNext<0){
   
   vVerCompatibleNext = sVerInformation.indexOf("(");
   
}

else{
   
   vVerCompatibleNext = Math.min(sVerInformation.indexOf("("),vVerCompatibleNext);
   
}

vVerCompatible = eval(sVerInformation.substring(0,vVerCompatibleNext));

//

var lDebug = false; // true //

var sProgramErrorMessage = "";
var sSubmitMessage = "";



//



//Define End.
//
//Function Begin.

// function ResizeWindow(){
   
//    location.reload(); // false // キャシュ から リロード．
//    location.reload(true); // サーバ から リロード．
   
// }

// ###############################################################

function Jump_Self(sTarget){
   
   var sParameter,sJump;
   
   sParameter = sGet_Except_LocationSearch_Stream( );
   sJump = sTarget;
   
   if( sJump == "" ){
      
      sJump = sJumpLocation;
      
   }
   
   if( sJump != "" ){
      
      if( sParameter != "" ){
         
         sParameter = "?" + sParameter;
         
      }
      
      if( sJump != "" ){
         
         sJump = "#" + sJump;
         
      }
      
      location.search = sParameter+sJump;
      
   }
   
}

function Jump_Hash(sDefault){
   
   if(""==sJumpLocation){
      
      if(""!=sDefault){
         
         location = sSelfName+"#"+sDefault;
         
      }
      
   }
   
   else{
      
      location = sSelfName+"#"+sJumpLocation;
      
   }
   
}

function lIs_Jump(){
   
   return ( ! (""==location.hash || "#"==location.hash) || ""!=sJumpLocation);
   
}

function InitViewBoundary(){
   
   if( navigator.appName==sInternetExplorer ){
       
       //document.write("sInternetExplorer"+"<br>");
       vFrameWidth = document.body.clientWidth;
       vFrameHeight = document.body.clientHeight;
       
   }
   
   else{ // sNetscapeNavigator
      
      //document.write("sNetscapeNavigator"+"<br>");
      vFrameWidth = window.innerWidth;
      vFrameHeight = window.innerHeight;
      
   }
   
   vDisplayWidth = Math.max(vFrameWidth-50,vDisplayWidthMin);
   vDisplayHeight = Math.max(vFrameHeight-30,vDisplayHeightMin);
   
}

function Footer(){
   
   if( ! lIs_Jump() ){
      
      document.write(
         "<br>"
      );
      
   }
   
   else{
      
      document.write(
         "<table align='center' width='100%'  height='"+vFrameHeight+"' cellpadding='0'><tr><td width='100%'></td></tr></table>"
      );
      
   }
   
}

function BehaviorFooter( lReal, lFrame ){ // false // true //
   
   // Internet Explorer の場合，前方の Element の影響により この BehaviorFooter の位置が正しく取得できない バグ があるよだ．
   
   if( ( typeof lFrame ) == "undefined" ){
      
      lFrame = false; // true //
      
   }
   
   if( lIs_Jump() || lFrame || ( ! lReal ) ){
      
      // "="++";\n"+
      
      // alert("BehaviorFooter( ) : "+"\n"+
      //  "navigator.appName = "+navigator.appName+";\n"+
      //  "sVerInformation = "+sVerInformation+";\n"+
      //  "vVerCompatible = "+vVerCompatible+";\n"+
      // "");
      
      // alert("lIs_Jump()="+lIs_Jump()+";\n"+"lFrame="+lFrame+";\n"+"lReal="+lReal+";\n"+"location.hash="+location.hash+";\n"+"sJumpLocation="+sJumpLocation+";\n"+"");
      
      if( ! ( (navigator.appName==sNetscapeNavigator) && (vVerCompatible<5) ) ){
         // InternetExplorer
         
         // alert("Explorer;\n"+"");
         
         Explorer_BehaviorFooter( lReal );
         
      }
      
      else{
         // NetscapeNavigator
         
         // alert("NetscapeNavigator;\n"+"");
         
         Netscape_BehaviorFooter( lReal );
         
      }
      
   }
   
   else if( lReal ){
      
      // document.write("<br>");
      
   }
   
}

function Netscape_BehaviorFooter( lReal ){
   
   var X,Y,W,H,sWidth,sHeight;
   var MY,RY,RH;
   var sEssence,sIndividual,sVisibility,sPresence,sParts,sTag,sIncarnation;
   var sRealParts,oRealParts,sMarkerParts,oMarkerParts;
   var vCurrNumber,sBorder,vBorder;
   
   sPresence = "";
   sIncarnation = "";
   sHeight = "";
   
   sRealParts = "BehaviorFooter_RealParts";
   sMarkerParts = "";
   
   if( lDebug ){
      
      // sPresence = " bgcolor='#7f7f7f' ";
      // sIncarnation = "Debug";
      
   }
   
   // sVisibility = " visibility='hide' ";
   
   // alert("Netscape_BehaviorFooter( ) : "+"\n"+
   //  "lReal = "+lReal+"\n"+
   // "");
   
   if( lReal ){
      
      if( 0 < vBehaviorFooter_NextNumber ){
         
         vCurrNumber = vBehaviorFooter_NextNumber - 1;
         sMarkerParts = "BehaviorFooter_MarkerParts_"+vCurrNumber.toString( );
         
      }
      
      else{ // if( vBehaviorFooter_NextNumber <= 0 )
         
         // alert("Netscape_BehaviorFooter 関数による マーキング が存在しません．");
         
      }
      
      // alert("Netscape_BehaviorFooter( ) : "+"\n"+
      //  "lReal = "+lReal+"\n"+
      // "");
      
      // vBehaviorFooter_NextNumber++;
      
      sTag = "layer";
      sParts = sRealParts;
      sIndividual = " id='"+sParts+"' ";
      sEssence = sTag +" "+sVisibility;
      
   }
   
   else{
      
      sMarkerParts = "BehaviorFooter_MarkerParts_"+vBehaviorFooter_NextNumber.toString( );
      vBehaviorFooter_NextNumber++;
      
      sTag = "layer";
      sParts = sMarkerParts;
      sIndividual = " id='"+sParts+"' ";
      // sEssence = sTag+" "+sVisibility;
      // sHeight = " height='"+vFrameHeight+"' ";
      
   }
   
   // alert("Netscape_BehaviorFooter( ) : "+"\n"+
   //  "lReal = "+lReal+"\n"+
   //  "sMarkerParts = "+sMarkerParts+"\n"+
   // "");
   
   document.write(
    "<"+sTag+" "+sVisibility+sIndividual+" >"+
    "</"+sTag+">"
   );
   
   if( lPresence ){
      
      document.write(
       "<layer bgcolor='#7f7f7f' >"+
       "sParts = "+sParts+"; "+
       "layers[sParts].pageY = "+document.layers[sParts].pageY+"; "+
       // "<br>"+
       "</layer>"
      );
      
   }
   
   if( lReal ){
      
      H = vFrameHeight;
      
      if( 0 < vBehaviorFooter_NextNumber ){
         
         
         oRealParts = document.layers[sRealParts];
         oMarkerParts = document.layers[sMarkerParts];
         // oRealParts.resizeTo(0,0);
         
         if( oMarkerParts ){
            
            MY = oMarkerParts.pageY;
            RY = oRealParts.pageY;
            // RH = oRealParts.clip.height;
            
            if( ( RY - MY ) < vFrameHeight ){
               
               H = Math.min(vFrameHeight - ( RY - MY ), vFrameHeight);
               
            }
            
            else{
               
               H = 0;
               
            }
            
         }
         
      }
      
      // alert(sEssence+sIndividual+" width='"+Math.floor(vFrameWidth / 2)+"' "+sHeight+sPresence+"\n"+"MY = "+MY+";\n"+"RY = "+RY+";\n"+"RH = "+RH+";\n"+"H = "+H+";\n"+"");
      // oRealParts.visibility = "show";
      // oRealParts.resizeTo(vDisplayWidth,100);
      
      if( 0 < H ){
         
         vBorder = 0;
         
         if( lPresence ){
            
            vBorder = 1;
            
            sPresence = " bgcolor='#7f7f7f' ";
            // sIncarnation = "Debug";
            sIncarnation = 
             "sRealParts = "+sRealParts+"<br>"+
             "sMarkerParts = "+sMarkerParts+"<br>"+
             
             "vFrameHeight = "+vFrameHeight+"<br>"+
             "MY = "+MY+"<br>"+
             "RY = "+RY+"<br>"+
             "height = "+H+"<br>"+
            "";
            sIncarnation = "";
            
            
         }
         
         document.write(
          "<table "+sPresence+" align='center' width='"+Math.floor(vFrameWidth / 2)+"' height='"+H+"' border='"+vBorder+"' cellpadding='0' cellspacing='0' >"+
          "<tr>"+
          "<td valign='top' >"+
          sIncarnation+
          "</td>"+
          "</tr>"+
          "</table>"
         );
         
      }
      
   }
   
}

function Explorer_BehaviorFooter( lReal ){
   
   var X,Y,W,H,sWidth,sHeight;
   var MY,RY,RH;
   var sEssence,sIndividual,sVisibility,sPresence,sParts,sTag,sIncarnation;
   var sRealParts,oRealParts,sMarkerParts,oMarkerParts;
   var vCurrNumber,sBorder,vBorder;
   
   sPresence = "";
   sIncarnation = "";
   sHeight = "";
   
   sRealParts = "BehaviorFooter_RealParts";
   sMarkerParts = "";
   
   if( lReal ){
      
      if( 0 < vBehaviorFooter_NextNumber ){
         
         vCurrNumber = vBehaviorFooter_NextNumber - 1;
         sMarkerParts = "BehaviorFooter_MarkerParts_"+vCurrNumber.toString( );
         
      }
      
      else{ // if( vBehaviorFooter_NextNumber <= 0 )
         
         // alert("Netscape_BehaviorFooter 関数による マーキング が存在しません．");
         
      }
      
      vBorder = 0;
      sIncarnation = "";
      
      if( lPresence ){
         
         vBorder = 1;
         sPresence = " bgcolor='#7f7f7f' ";
         // sIncarnation = "Debug";
         sIncarnation = 
          "vVerCompatible = "+vVerCompatible+";<br>"+
          "vFrameWidth = "+vFrameWidth+";<br>"+
         "";
         sIncarnation = "";
         
      }
      
      sIndividual = " id='"+sRealParts+"' ";
      
      // alert("BehaviorFooter( ) : "+"\n"+
      //  "<table "+sIndividual+" align='center' width='"+Math.floor(vFrameWidth / 2)+"' border='"+vBorder+"' cellpadding='0' cellspacing='0'"+sPresence+" >"+"\n"+
      //  "vFrameHeight = "+vFrameHeight+";\n"+
      // "");
      
      
      document.write(
       "<table "+sIndividual+" align='center' width='"+Math.floor(vFrameWidth / 2)+"' border='"+vBorder+"' cellpadding='0' cellspacing='0'"+sPresence+" >"+
       "<tr>"+
       "<td width='100%' valign='top' >"+
       sIncarnation+
       "</td>"+
       "</tr>"+
       "</table>"
      );
      
      
   }
   
   else{
      
      sMarkerParts = "BehaviorFooter_MarkerParts_"+vBehaviorFooter_NextNumber.toString( );
      vBehaviorFooter_NextNumber++;
      
      if( lPresence ){
         
         sVisibility = "";
         sPresence = " filter: Alpha(Opacity=50); ";
         sPresence = " filter: Alpha(Opacity=100); ";
         
      }
      
      else{
         
         sVisibility = " visibility: hidden; ";
         sPresence = " filter: Alpha(Opacity=0); ";
         
      }
      
      sIndividual = " id='"+sMarkerParts+"' ";
      sEssence = sVisibility+" position: absolute; ";
      // sHeight = " height: "+vFrameHeight+"px; ";
      
      document.write(
       "<div "+sIndividual+" style='"+sEssence+" background-color: #7f7f7f; "+sPresence+" ' >"+
       "vBehaviorFooter_NextNumber = "+vBehaviorFooter_NextNumber+"; "+"<br>"+
       "</div>"
      );
      
   }
   
   if( lReal ){
      
      H = vFrameHeight;
      
      if( 0 < vBehaviorFooter_NextNumber ){
         
         oRealParts = document.all(sRealParts);
         oMarkerParts = document.all(sMarkerParts);
         
         if( oMarkerParts ){
            
            MY = oMarkerParts.offsetTop;
            RY = oRealParts.offsetTop;
            // RH = oRealParts.offsetHeight;
            
            if( ( RY - MY ) < vFrameHeight ){
               
               H = Math.min(vFrameHeight - ( RY - MY ), vFrameHeight);
               
            }
            
            else{
               
               H = 0;
               
            }
            
            // window.status = 
            //  "FH="+vFrameHeight+"; "+
            //  "MY="+MY+"; "+
            //  "RY="+RY+"; "+
            //  "";
            
         }
         
      }
      
      // alert("MY = "+MY+";\n"+"RY = "+RY+";\n"+"RH = "+RH+";\n"+"H = "+H+";\n"+"");
      // oRealParts.height = 100;
      
      if( 0 < H ){
         
         oRealParts.height = H;
         
      }
      
      if( 0 <= H ){
         
         // oRealParts.style.visibility = "visible";
         
      }
      
   }
   
}

// ###############################################################

function lCheckFirstFit(sFirst, sSecond){
   
   var vNext,sName;
   var vCurr = 0;
   
   vNext = vCurr+sFirst.length;
   sName = sSecond.substring(vCurr,0+vNext);
   
   return (sFirst==sName);
   
}

function sMultiplyString(sTarget, vMultiply){
   
   var sResult = "";
   var i;
   
   for(i = 0; i<vMultiply; i++){
      
      sResult += sTarget;
      
   }
   
   return sResult;
   
}

function sZeroPrefix(vTarget, vColumn){
   
   var sResult = "";
   var sTarget = vTarget.toString(10); // 数値を１０進の文字列に変換．
   
   sResult = sMultiplyString("0", vColumn - sTarget.length)+sTarget;
   
   return sResult;
   
}

// ###############################################################

function sChange_HTMLSymbol(sTarget){
   
   var i;
   var sChr1;
   var sResult = "";
   
   for(i = 0; i<=(sTarget.length - 1); i++){
      
      sChr1 = sTarget.charAt(i);
      
      if(sChr1==" "){
         
         sResult += "&nbsp;";
         
      }
      
      else if(sChr1=="&"){
         
         sResult += "&amp;";
         
      }
      
      else if(sChr1=="<"){
         
         sResult += "&lt;";
         
      }
      
      else if(sChr1==">"){
         
         sResult += "&gt;";
         
      }
      
      else if(sChr1=="\""){
         
         sResult += "&#34;";
         
      }
      
      else if(sChr1=="'"){
         
         sResult += "&#39;";
         
      }
      
      else if(sChr1=="\n"){
         
         sResult += "<br>";
         
      }
      
      else{
         
         sResult += sChr1;
         
      }
      
   }
   
   return sResult;
   
}

function sGet_LocationSearch_Operand(sOperator,vNumber){
   
   var sLHash;
   var sResult = "";
   var i;
   var d1Element; // = new Array();
   var sFactor;
   var vNum = 0;
   // var vNumber;
   
   if(typeof vNumber == "undefined"){
      
      vNumber = -1;
      
   }
   
   sFactor = d1LocationSearch_OperandChaplet[sOperator];
   
   if(typeof sFactor != "undefined"){
      
      if(vNumber < 0){
         
         sResult = sFactor;
         
      }
      
      else{
         
         d1Element = sFactor.split(";");
         
         if(vNumber < d1Element.length){
            
            sResult = d1Element[vNumber];
            
         }
         
      }
      
   }
   
   return sResult;
   
}

function vGet_LocationSearch_Operand_Quantity(sOperator){
   
   var sLHash;
   var vResult = 0;
   var i;
   var d1Element; // = new Array();
   var sFactor;
   var lFlag; // true; // false; // 
   var i;
   
   sFactor = d1LocationSearch_OperandChaplet[sOperator];
   
   if(typeof sFactor != "undefined"){
      
      d1Element = sFactor.split(";");
      vResult = d1Element.length;
      
      lFlag = true; // false; // 
      i = vResult-1;
      
      while(lFlag){
         
         if(i<0) lFlag = false; // true; // 
         
         else if(d1Element[i]!="") lFlag = false; // true; // 
         
         else i--;
         
      }
      
      vResult = i + 1;
      
   }
   
   return vResult;
   
}

function sGet_Except_LocationSearch_Stream(){
   
   var i,j;
   var sSearch = "";
   var sOperand;
   var lFlag = false; // true; //
   
   // typeof Object // "undefined" // "string" // "object"
   if("undefined"!=(typeof d1LocationSearch_Tradition_OperatorList) ){
      
      for(i = 0; i<=(d1LocationSearch_Tradition_OperatorList.length - 1); i++){
         
         lFlag = false; // true; //
         
         // typeof Object // "undefined" // "string" // "object"
         
         for(j = 0; j<=(sGet_Except_LocationSearch_Stream.arguments.length - 1); j++){
            
            lFlag = lFlag || (d1LocationSearch_Tradition_OperatorList[i]==sGet_Except_LocationSearch_Stream.arguments[j]);
            
            // alert("i:"+i+";\n"+d1LocationSearch_Tradition_OperatorList[i]+";\n"+"j:"+j+";\n"+sGet_Except_LocationSearch_Stream.arguments[j]+";\n"+"");
            
            if( lFlag ) j = sGet_Except_LocationSearch_Stream.arguments.length - 1;
            
         }
         
         if( ! lFlag ){
            
            sOperand = d1LocationSearch_OperandChaplet[ d1LocationSearch_Tradition_OperatorList[i] ];
            
            if( (typeof sOperand)!="undefined" ){
               
               if(""!=sOperand){
                  
                  sSearch += d1LocationSearch_Tradition_OperatorList[i]+";"+sOperand;
                  
               }
               
            }
            
         }
         
      }
      
   }
   
   return sSearch;
   
}

function Set_LocationSearch_EnvironmentOperandChaplet(sOperator,sOperandChaplet){
   
   if(0<sOperandChaplet.length && sOperandChaplet.charAt(sOperandChaplet.length - 1)!=";") sOperandChaplet += ";";
   
   d1LocationSearch_OperandChaplet[sOperator] = sOperandChaplet;
   
}

// ###############################################################

function Preload_Image(){
   
   var i,j;
   var sImageName;
   
   for(i = 0; i<Preload_Image.arguments.length; i++){
      
      sImageName = Preload_Image.arguments[i];
      
      if( (typeof sImageName)!="undefined"){
         
         if(sImageName!=""){
               
            if( (typeof d1oList_ImagePreload[sImageName])=="undefined"){
               
               d1oList_ImagePreload[sImageName] = new Image();
               d1oList_ImagePreload[sImageName].src = sImageName;
               // alert("d1oList_ImagePreload["+sImageName+"]:"+d1oList_ImagePreload[sImageName].src+"\n");
               
            }
            
         }
         
      }
      
   }
   
}


function Entry_SlideShow_Image( nInterval, lLoop, sImageObjName, sImagePath, d1sList_ImageName, vImageWidth, vImageHeight, sLink ){
   
   // var sMapImageObjName, sImageName_Default;
   // var sClient. sImageMessage;
   // var sImageName_MouseOver, sImageName_MouseDown, sImageName_MouseUp, sImageName_MouseOut;
   // var sTag_ImageWidth, sTag_ImageHeight,sTag_ImageMessage,sTag_Client,sTag_Link;
   
   var sClient = "";
   var sImageMessage = "";
   var sMapImageObjName = "";
   var sImageName_Default = "";
   var sImageName_MouseOver = "";
   var sImageName_MouseDown = "";
   var sImageName_MouseUp = "";
   var sImageName_MouseOut = "";
   var sTag_ImageWidth = "";
   var sTag_ImageHeight = "";
   var sTag_ImageMessage = "";
   var sTag_Client = "";
   var sTag_Link = " nohref ";
   // var sLink = "JavaScript:;";
   // var lLoop = false; // true; //
   
   var i;
   
   sMapImageObjName = "LinkMap/"+sImageObjName;
   
   d2sList_SlideShow_ImageName[sImageObjName] = new Array( );
   
   for( i=0; i<d1sList_ImageName.length; i++ ){
      
      d2sList_SlideShow_ImageName[sImageObjName][i] = sImagePath+d1sList_ImageName[i];
      
   }
   
   sImageName_Default = d2sList_SlideShow_ImageName[sImageObjName][0];
   
   if( sLink!="" ) sTag_Link = " href='"+sLink+"' ";
   if(0<=vImageWidth) sTag_ImageWidth = " width='"+vImageWidth+"' ";
   if(0<=vImageHeight) sTag_ImageHeight = " height='"+vImageHeight+"' ";
   if(""!=sImageMessage) sTag_ImageMessage = " alt='"+sImageMessage+"' ";
   if(""!=sClient) sTag_Client = " target='"+sClient+"' ";
   
   document.write("<img "+" name='"+sImageObjName+"' "+" src='"+sImageName_Default+"' "+sTag_ImageWidth+sTag_ImageHeight+sTag_ImageMessage+" border='0' "+"usemap=\"#"+sMapImageObjName+"\" >");
   document.write("<map name=\""+sMapImageObjName+"\">");
   
   document.write("<area shape=poly alt='' "+sTag_Link);
   document.write(" onmousedown='Set_SlideShow_Image(\""+nInterval+"\",\""+lLoop+"\",1,\""+sImageObjName+"\");' ");
   // document.write(" onmousedown='Switch_SlideShow_Image(1);' ");
   document.write("shape=poly coords='0,0,"+vImageWidth/3+","+vImageHeight/3+","+vImageWidth*2/3+","+vImageHeight/3+","+vImageWidth+",0' ");
   document.write(" >");
   
   document.write("<area shape=poly alt='' "+sTag_Link);
   document.write(" onmouseover='Set_SlideShow_Image(\""+nInterval+"\",\""+lLoop+"\",0,\""+sImageObjName+"\");' ");
   document.write(" onmousedown='Switch_SlideShow_Image(1);' ");
   document.write("shape=poly coords='"+vImageWidth+",0,"+vImageWidth*2/3+","+vImageHeight/3+","+vImageWidth*2/3+","+vImageHeight*2/3+","+vImageWidth+","+vImageHeight+"' ");
   document.write(" >");
   
   document.write("<area shape=poly alt='' "+sTag_Link);
   document.write(" onmousedown='Switch_SlideShow_Image(0);' ");
   document.write("shape=poly coords='"+vImageWidth/3+","+vImageHeight/3+","+vImageWidth*2/3+","+vImageHeight/3+","+vImageWidth*2/3+","+vImageHeight*2/3+","+vImageWidth/3+","+vImageHeight*2/3+"' ");
   document.write(" >");
   
   document.write("<area shape=poly alt='' "+sTag_Link);
   document.write(" onmouseover='Set_SlideShow_Image(\""+nInterval+"\",\""+lLoop+"\",0,\""+sImageObjName+"\");' ");
   document.write(" onmousedown='Switch_SlideShow_Image(-1);' ");
   document.write("shape=poly coords='0,0,"+vImageWidth/3+","+vImageHeight/3+","+vImageWidth/3+","+vImageHeight*2/3+",0,"+vImageHeight+"' ");
   document.write(" >");
   
   document.write("<area shape=poly alt='' "+sTag_Link);
   document.write(" onmousedown='Set_SlideShow_Image(\""+nInterval+"\",\""+lLoop+"\",-1,\""+sImageObjName+"\");' ");
   // document.write(" onmousedown='Switch_SlideShow_Image(-1);' ");
   document.write("shape=poly coords='0,"+vImageHeight+","+vImageWidth/3+","+vImageHeight*2/3+","+vImageWidth*2/3+","+vImageHeight*2/3+","+vImageWidth+","+vImageHeight+"' ");
   document.write(" >");
   
   document.write("</map>");
   
}


function Set_SlideShow_Image( nInterval, lLoop, nSign, sImageObjName ){
   
   var sErr = "";
   var sImageName;
   var sObjName = "";
   var d1sList_ImageName;
   var i,j;
   
   if(
    true
    // ( nInterval<0 ) ||
    // ( nSign_SlideShow_Switch==0 )
   ){
      
      if( typeof oHolder_SlideShow_ImageObj!="undefined" ){
         
         sObjName = oHolder_SlideShow_ImageObj.name;
         
      }
      
      if(
       ( nSign!=0 ) ||
       ( sImageObjName!=sObjName )
      ){
         
         nCnt_SlideShow_Image = 0;
         nNext_SlideShow_Image = 0;
         // vFirstTrigger_SlideShow = vFirstTrigger;
         nInterval_SlideShow = nInterval;
         lLoop_SlideShow = lLoop;
         // sHolder_SlideImageObjName = sImageObjName;
         oHolder_SlideShow_ImageObj = oGet_Find_Image(document,sImageObjName);
         // lShow_SlideShow_Switch = false; // true; //
         nSign_SlideShow_Switch = 0;
         
         d1sList_ImageName = d2sList_SlideShow_ImageName[sImageObjName];
         d1List_SlideShow_ImageName = d1sList_ImageName;
         
         if( ( nSign==0 ) || ( nSign==1 ) ){
            
            nCnt_SlideShow_Image = 0;
            nNext_SlideShow_Image = nCnt_SlideShow_Image;
            
         }
         
         if( nSign==-1 ){
            
            nCnt_SlideShow_Image = d1List_SlideShow_ImageName.length-1;
            nNext_SlideShow_Image = nCnt_SlideShow_Image;
            
         }
         
         // nNext_SlideShow_Image = nCnt_SlideShow_Image;
         oHolder_SlideShow_ImageObj.src = d1List_SlideShow_ImageName[nCnt_SlideShow_Image];
         nCnt_SlideShow_Image = nNext_SlideShow_Image;
         
         if( nInterval_SlideShow==-1 ){
            
            nSign_SlideShow_Switch = nSign;
            nNext_SlideShow_Image = nCnt_SlideShow_Image+nSign;
            
         }
         window.status = "Slide："+(nCnt_SlideShow_Image+1)+"/"+(d1List_SlideShow_ImageName.length)+"; ";
         
         // nNext_SlideShow_Image = nCnt_SlideShow_Image;
         
         
         for(i = 0; i<d1List_SlideShow_ImageName.length; i++){
            
            Preload_Image(d1List_SlideShow_ImageName[i]);
            
         }
         
      }
      
      // alert(
      //  "nSign_SlideShow_Switch="+nSign_SlideShow_Switch+";\n"+
      //  "nInterval_SlideShow="+nInterval_SlideShow+";\n"+
      //  "lLoop_SlideShow="+lLoop_SlideShow+";\n"+
      //  "sObjName="+sObjName+";\n"+
      //  "sImageObjName="+sImageObjName+";\n"+
      //  "nCnt_SlideShow_Image="+nCnt_SlideShow_Image+";\n"+
      //  "nNext_SlideShow_Image="+nNext_SlideShow_Image+";\n"+
      //  "d1List_SlideShow_ImageName.length="+d1List_SlideShow_ImageName.length+";\n"+
      //  "nTimer_SlideShow_Switch="+nTimer_SlideShow_Switch+";\n"+
      // "");
      
   }
   
}


function Switch_SlideShow_Image( nSign ){
   
   var sErr = "";
   var sImageName;
   var i,j;
   
   if( nSign_SlideShow_Switch==0 ){
         
   // alert(
   //  "nSign_SlideShow_Switch="+nSign_SlideShow_Switch+";\n"+
   //  "nInterval_SlideShow="+nInterval_SlideShow+";\n"+
   //  "lLoop_SlideShow="+lLoop_SlideShow+";\n"+
   //  "nCnt_SlideShow_Image="+nCnt_SlideShow_Image+";\n"+
   //  "nNext_SlideShow_Image="+nNext_SlideShow_Image+";\n"+
   //  "d1List_SlideShow_ImageName.length="+d1List_SlideShow_ImageName.length+";\n"+
   //  "nTimer_SlideShow_Switch="+nTimer_SlideShow_Switch+";\n"+
   // "");
   
   }
   
   // window.status = 
   // "S="+nSign+"; "+
   // "SS="+nSign_SlideShow_Switch+"; "+
   // "C="+nCnt_SlideShow_Image+"; "+
   // "N="+nNext_SlideShow_Image+"; "+
   // "";
   
   if( nSign>0 && (d1List_SlideShow_ImageName.length-1)<=nCnt_SlideShow_Image ){
      
      nCnt_SlideShow_Image = 0;
      oHolder_SlideShow_ImageObj.src = d1List_SlideShow_ImageName[nCnt_SlideShow_Image];

      nNext_SlideShow_Image = nCnt_SlideShow_Image+nSign;
      window.status = "Slide："+(nCnt_SlideShow_Image+1)+"/"+(d1List_SlideShow_ImageName.length)+"; ";
      
   }else if( nSign<0 && nCnt_SlideShow_Image<=0 ){
      
      nCnt_SlideShow_Image = d1List_SlideShow_ImageName.length-1;
      oHolder_SlideShow_ImageObj.src = d1List_SlideShow_ImageName[nCnt_SlideShow_Image];
      nNext_SlideShow_Image = nCnt_SlideShow_Image+nSign;
      window.status = "Slide："+(nCnt_SlideShow_Image+1)+"/"+(d1List_SlideShow_ImageName.length)+"; ";
      
   }else if(
    ( nSign==0 ) ||
    ( nSign!=0 ) &&
    ( nSign_SlideShow_Switch!=nSign )
   ){
      
      // nCnt_SlideShow_Image = nNext_SlideShow_Image;
      nNext_SlideShow_Image = nCnt_SlideShow_Image+nSign;
      
   }
   
   if( nInterval_SlideShow==-1 ){
      
      nSign_SlideShow_Switch = nSign;
      
   }else if( 
    ( 0<=nNext_SlideShow_Image )&&
    ( nNext_SlideShow_Image<d1List_SlideShow_ImageName.length )
   ){
      
      if(
       ( nSign_SlideShow_Switch!=0 ) &&
       ( nSign_SlideShow_Switch==nSign )
      ){
         
         nSign_SlideShow_Switch = 0;
         
      }
      else{
         
         nSign_SlideShow_Switch = nSign;
         
      }
      
   }
   
   // window.status = 
   // "S="+nSign+"; "+
   // "SS="+nSign_SlideShow_Switch+"; "+
   // "C="+nCnt_SlideShow_Image+"; "+
   // "N="+nNext_SlideShow_Image+"; "+
   // "";
   
   if( nInterval_SlideShow==-1 ){
      
      Switch_SlideShow_ImageHandler( );
      
   }
   
   if( nSign_SlideShow_Switch==0 ){
      
      ResetTimer(nTimer_SlideShow_Switch);
      
      // alert(
      //  "nSign_SlideShow_Switch="+nSign_SlideShow_Switch+";\n"+
      //  "nInterval_SlideShow="+nInterval_SlideShow+";\n"+
      //  "lLoop_SlideShow="+lLoop_SlideShow+";\n"+
      //  "nCnt_SlideShow_Image="+nCnt_SlideShow_Image+";\n"+
      //  "d1List_SlideShow_ImageName.length="+d1List_SlideShow_ImageName.length+";\n"+
      //  "nTimer_SlideShow_Switch="+nTimer_SlideShow_Switch+";\n"+
      // "");
      
   }else if( 0<=nInterval_SlideShow ){
      
      SetTimer(nTimer_SlideShow_Switch,nInterval_SlideShow);
      
   }
   
}


function Switch_SlideShow_ImageHandler( ){
   
   var xResult;
   var lResult;
   
   // nCnt_SlideShow_Image = nNext_SlideShow_Image;
   nNext_SlideShow_Image = nCnt_SlideShow_Image+nSign_SlideShow_Switch;
   
   if( lLoop_SlideShow ){
      if( (d1List_SlideShow_ImageName.length-1)<nNext_SlideShow_Image ){
         nNext_SlideShow_Image = 0;
      }else if( nNext_SlideShow_Image<0 ){
         nNext_SlideShow_Image = d1List_SlideShow_ImageName.length-1;
      }
   }
   
   if(
    ( 0<=nNext_SlideShow_Image )&&
    ( nNext_SlideShow_Image<=(d1List_SlideShow_ImageName.length-1) )
   ){
      
      oHolder_SlideShow_ImageObj.src = d1List_SlideShow_ImageName[nNext_SlideShow_Image];
      // Switch_SlideShow_ImageHandler window.status //
      nCnt_SlideShow_Image = nNext_SlideShow_Image;
      nNext_SlideShow_Image = nCnt_SlideShow_Image+nSign_SlideShow_Switch;
      // window.status = "Slide："+(nCnt_SlideShow_Image+1)+"/"+(d1List_SlideShow_ImageName.length)+"; ";
      
   }
   
   if( ! lLoop_SlideShow ){ // false; // true; //
      if(
       ( nNext_SlideShow_Image<0 ) ||
       ( (d1List_SlideShow_ImageName.length-1)<nNext_SlideShow_Image )
      ){
         nSign_SlideShow_Switch = 0;
         // nNext_SlideShow_Image = nCnt_SlideShow_Image;
      }
   }
   
   window.status = "Slide："+(nCnt_SlideShow_Image+1)+"/"+(d1List_SlideShow_ImageName.length)+
   // " Next="+(nNext_SlideShow_Image+1)+
   // " Sign="+nSign_SlideShow_Switch+
   // " Loop="+lLoop_SlideShow+
   // " xResult="+xResult+
   "; ";
   
   if(
    ( nSign_SlideShow_Switch!=0 )&&
    ( 1<=nInterval_SlideShow )
   ){
      
      SetTimer(nTimer_SlideShow_Switch,nInterval_SlideShow);
      
   }
   
}


function Entry_Image(){
   
   var sErr = "";
   var sImageObjName = Entry_Image.arguments[0];
   var sImageName;
   var i,j;
   
   // undefined // array
   if((typeof d1sList_ImageNatureStatus[sImageObjName])!="undefined") sErr = sErr + "★Entry_Image( )エラー：すでに登録済みの オブジェクト名 ”"+sImageObjName+"”が重複して使用されました．\n";
   
   // d1oList_ImagePreload[sImageObjName] = new Array;
   d2sList_ImageName[vQnt_ImageName] = new Array;
   d1sList_ImageObjName[vQnt_ImageName] = sImageObjName;
   
   // if( (typeof Entry_Image.arguments[1])=="undefined") sErr = sErr + "★Entry_Image( )エラー：引き数 ”sImageName_Default”が undefined（未定義） です．\n";
   // else if(Entry_Image.arguments[1]=="") sErr = sErr + "★Entry_Image( )エラー：引き数 ”sImageName_Default”は ヌル・文字です．\n";
   
   for(i = 1; i<Entry_Image.arguments.length; i++){
      
      sImageName = Entry_Image.arguments[i];
      d2sList_ImageName[vQnt_ImageName][i-1] = sImageName;
      
      Preload_Image(sImageName);
      
   }
   
   d1sList_ImageNatureStatus[sImageObjName] = d2sList_ImageName[vQnt_ImageName][0];
   vQnt_ImageName = vQnt_ImageName + 1;
   
   if(sErr!=""){
      
      alert(sErr);
      
   }
   
}


function Reset_ImageGroup(sGroup_ImageObjName){
   
   var i,j;
   var sMsg = "";
   
   for(i = 0; i<=(d1sList_ImageObjName.length - 1); i++){
      
      if( lCheckFirstFit(sGroup_ImageObjName, d1sList_ImageObjName[i]) ){
         
         Switch_Image(d1sList_ImageObjName[i], d2sList_ImageName[i][0]);
         d1sList_ImageNatureStatus[d1sList_ImageObjName[i]] = d2sList_ImageName[i][0];
         sMsg = sMsg+"ImageObjName["+i+"]:"+d1sList_ImageObjName[i]+"\n";
         
      }
      
   }
   
}

function Trace_Image(oDoc){
   
   var i;
   var oImage = null;
   
   if(oDoc.images){
      
      for (var i=0; i < oDoc.images.length; i++){
         
         oImage = oDoc.images[i];
         document.write("oDoc.images["+i+"].name:"+oImage.name+"<br>");
         
      }
      
   }
   
   if(oDoc.layers){
      
      for (var i=0; i < oDoc.layers.length; i++){
         
         document.write("oDoc.layers["+i+"].name:"+oDoc.layers[i].name+"<br>");
         Trace_Image(oDoc.layers[i].document);
         
      }
      
   }
   
   return;
   
}

function oGet_Find_Image(oDoc, sImageObjName){
   
   var i;
   var oImage = null;
   
   // window.status = "d1oList_ImageObj["+sImageObjName+"]="+(typeof d1oList_ImageObj[sImageObjName]);
   
   if((typeof d1oList_ImageObj[sImageObjName])!="undefined" ){
      
      // alert("oGet_Find_Image( ) : Cache.");
      oImage =  d1oList_ImageObj[sImageObjName];
      
   }
   
   else{ // if((typeof d1oList_ImageObj[sImageObjName])=="undefined" )
      
      if(oDoc.images){
         
         oImage = oDoc.images[sImageObjName];
         
      }
      
      if(oDoc.layers && ! oImage){
         
         // alert("oDoc:"+oDoc+";\n"+"oDoc.layers.length:"+oDoc.layers.length+";\n"+"oImage:"+oImage+";\n"+"");
         
         for (i=0; i < oDoc.layers.length; i++){
            
            // alert("oDoc:"+oDoc+";\n"+"oDoc.layers.length:"+oDoc.layers.length+";\n"+"");
            if( ! oImage) oImage = oGet_Find_Image(oDoc.layers[i].document, sImageObjName);
            if(oImage) i = oDoc.layers.length;
            
         }
         
      }
      
      if(oImage) d1oList_ImageObj[sImageObjName] = oImage;
      
   }
   
   return oImage;
   
}

function Switch_Image(sImageObjName, sImageName){
   
   var sErr = "";
   
   if( (typeof sImageObjName)=="undefined") sErr = sErr + "★変数 ”sImageObjName”が undefined（未定義） です．\n";
   else if( sImageObjName=="") sErr = sErr + "★変数 ”sImageObjName”は ヌル・文字です．\n";
   if( (typeof sImageName)=="undefined") sErr = sErr + "★変数 ”sImageName”が undefined（未定義） です．\n";
   else if( sImageName=="") sErr = sErr + "★変数 ”sImageName”は ヌル・文字です．\n";
   
   if(sErr==""){
      
      var oImage = oGet_Find_Image(document, sImageObjName);
      
      if (oImage){
         
         if(oImage.src!=sImageName){
            
            oImage.src = sImageName;
            
         }
         
      }
   }
   
   else{
      
      // alert(sErr + "★この ウィンドウ を閉じる場合は何度か[Alt]+[F4]を キー 入力して閉じて下さい．\n");
      
   }
   
}

function RadioSwitch_RestorationImage(sImageObjName){
   
   // alert("d1sList_ImageNatureStatus["+sImageObjName+"]:"+d1sList_ImageNatureStatus[sImageObjName]+"\n");
   Switch_Image(sImageObjName, d1sList_ImageNatureStatus[sImageObjName]);
   
}

function RadioSwitch_Image(sGroup_ImageObjName, sImageObjName, sImageName){
   
   Reset_ImageGroup(sGroup_ImageObjName);
   var oImage = oGet_Find_Image(document, sImageObjName);
   
   // alert("d1sList_ImageNatureStatus["+sImageObjName+"]:"+d1sList_ImageNatureStatus[sImageObjName]+"\n");
   
   if(oImage){
      
      if(oImage.src!=sImageName){
         
         oImage.src = sImageName;
         
      }
      
      d1sList_ImageNatureStatus[sImageObjName] = sImageName;
      // alert("d1sList_ImageNatureStatus["+sImageObjName+"]:"+d1sList_ImageNatureStatus[sImageObjName]+"\n");
      
   }
   
}

function vGet_RadioSwitch_ActiveID(sGroup_ImageObjName){
   
   var i,j;
   var sMsg = "";
   var sStatus = "";
   var sActive = "";
   var vActive = -1;
   
   for(i = 0; i<=(d1sList_ImageObjName.length - 1); i++){
      
      if( lCheckFirstFit(sGroup_ImageObjName, d1sList_ImageObjName[i]) ){
         
         sStatus = d1sList_ImageNatureStatus[d1sList_ImageObjName[i]];
         if(sStatus!=d2sList_ImageName[i][0]) vActive  = i;
         
      }
      
   }
   
   return vActive;
   
}

function lCheck_RectangleImmanent(){ // (vMinX,vMinY,vMaxX,vMaxY,vX,vY)
   
   var fThis = lCheck_RectangleImmanent;
   var vMinX,vMinY,vMaxX,vMaxY;
   var vX,vY;
   var lResult;
   var Parameter = fThis.arguments[0];
   
   // window.status = (typeof Parameter)+"; "+"";
   // typeof Object // "undefined" // "string" // "object"
   
   if( (typeof Parameter)=="object"){
      
      vMinX = Parameter[0];
      vMinY = Parameter[1];
      vMaxX = Parameter[2];
      vMaxY = Parameter[3];
      
      if(4<Parameter.length){
         
         vX = Parameter[4];
         vY = Parameter[5];
         
      }
      
      else{
         
         vX = fThis.arguments[1];
         vY = fThis.arguments[2];
         
      }
      
   }
   
   else{
      
      vMinX = fThis.arguments[0];
      vMinY = fThis.arguments[1];
      vMaxX = fThis.arguments[2];
      vMaxY = fThis.arguments[3];
      vX = fThis.arguments[4];
      vY = fThis.arguments[5];
      
   }
   
   // window.status = vMinX+"; "+vMinY+"; "+vMaxX+"; "+vMaxY+"; "+vX+"; "+vY+"; "+(vMinX<=vX && vX<=vMaxX && vMinY<=vY && vY<=vMaxY)+"; "+"";
   
   return (vMinX<=vX && vX<=vMaxX && vMinY<=vY && vY<=vMaxY);
   
}

function lNetscape_Check_LayerImmanent(oLayer,vAbsX,vAbsY){
   
   var vMinX,vMinY,vMaxX,vMaxY;
   var lResult;
   
   // .left // .top // .pageX // .pageY // .clip.width // .clip.height
   vMinX = oLayer.pageX;
   vMinY = oLayer.pageY;
   vMaxX = vMinX + oLayer.clip.width;
   vMaxY = vMinY + oLayer.clip.height;
   
   return lCheck_RectangleImmanent(vMinX,vMinY,vMaxX,vMaxY,vAbsX,vAbsY);
   
}

// ###############################################################

function ReturnButton(){
   
   if( navigator.appName==sInternetExplorer ){
      
      if( vHistoryBase<history.length ){
         
         if( 0<=sVersion.indexOf(sVerInternetExplorer5_0,vVerCompatibleColumn) ){
            
            ReturnButton1();
            
         }
         
         else{
            
            ReturnButton0();
            
         }
         
      }
      
   }
   
   else if( navigator.appName==sNetscapeNavigator ){
      
      if( vHistoryBase<history.length ){
         
         ReturnButton0();
         
      }
      
   }
   
   else{
      
      ReturnButton0();
      
   }
   
}

function ReturnButton0(){
   
   document.write("<div align='center'>");
   document.write("<input type='button' name='ButtonText' value='もどる' style='font-size : large; color : #2f2fff;' onClick='ReturnWeb()'>");
   document.write("</div>");
   
}

function ReturnButton1(){
   
   document.write("<table align='center' cellpadding='7' border='border'>");
   document.write("<tr>");
   document.write("<td nowrap>");
   document.write("<table align='center' cellpadding='3'>");
   document.write("<tr>");
   document.write("<td nowrap>");
   document.write("<div align='center'>");
   document.write("<input type='image' name='ButtonImage' src='b4link2.gif' onClick='ReturnWeb()'>");
   document.write("<br>");
   document.write("</div>");
   document.write("</td>");
   document.write("</tr>");
   document.write("<tr>");
   document.write("<td nowrap>");
   ReturnButton0();
   document.write("</td>");
   document.write("</tr>");
   document.write("</table>");
   document.write("</td>");
   document.write("</tr>");
   document.write("</table>");
   
}

function ReturnWeb0(){
   
   history.back();
   
   if( vHistoryBase<history.length ){
      
      history.back();
      
   }
   
   else{
      
      location = sDefaultLocation;
      
   }
   
}

function ReturnWeb(){
   
   history.back();
   
}

function Initialize_common0( ){
   
   try { Initialize_pasmsg0( ); }
   catch (sExp){ } // throw null;
   finally{ }
   
   try { Initialize_pasmen0( ); }
   catch (sExp){ } // throw null;
   finally{ }
   
   try { Initialize_timer0( ); }
   catch (sExp){ } // throw null;
   finally{ }
   
}

// ###############################################################

function lExist_JavaScript_common0( ){
   
   return true; // false; //
   
}
