// Charset=漢←この１行目の”Charset=”に定義されている ”漢”で このファイルのキャラクターセットを判定していますので，この行は｛削除，変更｝しないで下さい．

// ●この プログラム の利用規約．
// この プログラム は Open Source です（商用利用可、商用利用にあたり当方に「連絡、使用許可申請」の必要はありません）．
// この プログラム を利用することにより如何なる障害 又は損害が発生しても作成者は一切責任を負わないものとします，又 他人に対して損害を与えた場合は自己責任により解決して下さい．
// プログラム の機能向上や バグ の修正などの サポート は保障しません．
// プログラム の改造は自由ですが，改造は利用者側の自己責任で お願いします，作成者は一切関知しません．
// （無料，有料）プロバイダー の サーバー を ダウン させたりしたら，そこの アカウント が抹消される（モチロン その サイト も抹消される） ハメ になるかも しれませんので改造 プログラム の動作 チェック は必ず自分の PC で おこなって下さい．
// 改造 プログラム の再配布は自由です，又「"Inside Program Begin"以降から"Inside Program End"までの ソース を改造した場合」は オリジナル と区別するために（この プログラム 上において）改造者の ハンドル・ネーム を「表示、または 表記」して下さい．

//	 Author : amanojaku.
//	 Editor : .

// ######################### Inside Program Begin. #########################
// この"Inside Program Begin"以降から"Inside Program End"までの  プログラム を変更した場合には必ず変更に かかわった全ての方々の ハンドル・ネーム を 「Editor : ハンドル・ネーム.」のように表記して下さい．

// true // false // null // this // window //
// while // for // break // continue
// typeof VARIABLE // "undefined" // "string" // "object" // "number" // "boolean" // "function"
// window.status = MESSAGE; // alert(MESSAGE);
// VARIABLE.toString(n) // 数値を n 進の文字列に変換．

//Seting Begin.

var lPresence = false; // true; //

var sDefaultLocation = ""; // "index.htm"; // <href>
var vDisplayWidthMin = 240;
var vDisplayHeightMin = 200;
var sLPath = location.pathname;
var sSelfName = sLPath.substring(Math.max(sLPath.lastIndexOf("/"),sLPath.lastIndexOf("\\"))+1,sLPath.length); // <href>
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

var d1oList_ImagePreload = new Array;
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



var vRadioButton_FontPitch = 0;
var vRadioButton_FontPitchSetting = 1;
var vRadioButton_AffirmCondition = 2;
var vRadioButton_DenialCondition= 3;
var vRadioButton_AffirmDenialCondition = 4;
var vRadioButton_SearchExpress = 5;
var vRadioButton_IconSelect = 6;
var vRadioButton_IconSelectSetting = 7;

var vRadioButton_ArrayQnt = 8;

var dRadioButton = new Array(vRadioButton_ArrayQnt);

for(i=0; i<dRadioButton.length; i++){
   
   dRadioButton[i] = "";
   
}

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
      
      if( navigator.appName==sInternetExplorer ){
      // InternetExplorer
         // window.status = sInternetExplorer;
         
         Explorer_BehaviorFooter( lReal );
         
      }
      
      else if( (navigator.appName==sNetscapeNavigator) && (vVerCompatible<5) ){
      // NetscapeNavigator
         // window.status = sNetscapeNavigator;
         
         Netscape_BehaviorFooter( lReal );
         
      }
      
      else{
      // Gecko
         // alert("Gecko");
         
         Gecko_BehaviorFooter( lReal );
         
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
   var vCurrNumber,sBorder,sBorderTD,sBorder0,vBorder;
   
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
         sBorderTD = " class='border_none' ";
         sBorder = " border=0 "+sBorderTD;
         
         if( lPresence ){
            
            vBorder = 1;
            sBorder = " border=1 ";
            
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
          "<table "+sPresence+" align='center' width='"+Math.floor(vFrameWidth / 2)+"' height='"+H+"' cellpadding='0' cellspacing='0' "+sBorder+" >"+
          "<tr>"+
          "<td valign='top' "+sBorderTD+" >"+
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
   var vCurrNumber,sBorder,sBorderTD,sBorder0,vBorder;
   
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
      
      sIncarnation = "";
      vBorder = 0;
      sBorderTD = " class='border_none' ";
      sBorder = " border=0 "+sBorderTD;
      
      if( lPresence ){
         
         vBorder = 1;
         sBorder = " border=1 ";
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
      //  "<table "+sIndividual+" align='center' width='"+Math.floor(vFrameWidth / 2)+"' cellpadding='0' cellspacing='0' "+sBorder+sPresence+" >"+"\n"+
      //  "vFrameHeight = "+vFrameHeight+";\n"+
      // "");
      
      
      document.write(
       "<table "+sIndividual+" align='center' width='"+Math.floor(vFrameWidth / 2)+"' cellpadding='0' cellspacing='0' "+sBorder+sPresence+" >"+
       "<tr>"+
       "<td width='100%' valign='top' "+sBorderTD+" >"+
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
         
         // alert(oRealParts);
         
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
         
         // oRealParts.height = 100;
         
         if( 0 < H ){
            
            oRealParts.height = H;
            
         }
         
         if( 0 < H ){
            
            // oRealParts.style.visibility = "visible";
            
         }
         
      }
      
      // alert("MY = "+MY+";\n"+"RY = "+RY+";\n"+"RH = "+RH+";\n"+"H = "+H+";\n"+"");
      
   }
   
}

function Gecko_BehaviorFooter( lReal ){
   
   var X,Y,W,H,sWidth,sHeight;
   var MY,RY,RH;
   var sEssence,sIndividual,sVisibility,sPresence,sParts,sTag,sIncarnation;
   var sRealParts,oRealParts,sMarkerParts,oMarkerParts;
   var vCurrNumber,sBorder,sBorderTD,sBorder0,vBorder;
   
   sPresence = "";
   sVisibility = " visibility: hidden; ";
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
      sBorderTD = " class='border_none' ";
      sBorder = " border=0 "+sBorderTD;
      
      sIndividual = " id='"+sRealParts+"' ";
      
      // alert("BehaviorFooter( ) : "+"\n"+
      //  "<table "+sIndividual+" align='center' width='"+Math.floor(vFrameWidth / 2)+"' cellpadding='0' cellspacing='0'"+sBorder+sPresence+" >"+"\n"+
      //  "vFrameHeight = "+vFrameHeight+";\n"+
      // "");
      
      document.write(
       "<table "+sIndividual+" align='center' width='"+Math.floor(vFrameWidth / 2)+"' cellpadding='0' cellspacing='0'"+sBorder+sPresence+" >"+
       "<tr>"+
       "<td width='100%' valign='top' "+sBorderTD+" >"+
       sIncarnation+
       "</td>"+
       "</tr>"+
       "</table>"
      );
      
   }
   
   else{
      
      sMarkerParts = "BehaviorFooter_MarkerParts_"+vBehaviorFooter_NextNumber.toString( );
      vBehaviorFooter_NextNumber++;
      
      sIndividual = " id='"+sMarkerParts+"' ";
      sEssence = sVisibility+" position: absolute; ";
      // sHeight = " height: "+vFrameHeight+"px; ";
      
      document.write(
       "<div "+sIndividual+" style='"+sEssence+sPresence+" ' >"+
       "vBehaviorFooter_NextNumber = "+vBehaviorFooter_NextNumber+"; "+"<br>"+
       "</div>"
      );
      
   }
   
   if( lReal ){
      
      H = vFrameHeight;
      
      if( 0 < vBehaviorFooter_NextNumber ){
         
         oRealParts = document.getElementById(sRealParts);
         oMarkerParts = document.getElementById(sMarkerParts);
         
         // alert(oRealParts);
         
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
         
         // oRealParts.style.height = 100;
         
         if( 0 < H ){
            
            oRealParts.style.height = H;
            
         }
         
         if( 0 < H ){
            
            // oRealParts.style.visibility = "visible";
            
         }
         
      }
      
      // alert("MY = "+MY+";\n"+"RY = "+RY+";\n"+"RH = "+RH+";\n"+"H = "+H+";\n"+"");
      
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

function GetCookie(Key){
   
   var CookieList,CookieStr,i;
   CookieList = document.cookie.split("; ");
   CookieStr = "";
   i = 0;
   Key = Key+"=";
   
   while ( CookieList[i] ){
      
      if ( CookieList[i].substr(0,Key.length) == Key ){
         
         CookieStr = CookieList[i].substr(Key.length);
         break;
         
      }
      
      i++;
      
   }
   
   return unescape(CookieStr);
   
}

function AscValue(Str){
   
   var Asc_Str = Ascii(Str);
   
   var Asc;
   
   if( Asc_Str.charAt(0) == "%" ){
      
      // Asc_Str = Asc_Str.substring(1,Asc_Str.length);
      
   }
   
   Asc = Asc_Str.split("%");
   // dSplit(Asc_Str,"%");
   // var Val = new MakeArray(Asc.length);
   var i;
   
   for( i = 1; i < Asc.length; i++ ){
      
      Asc[i] = eval("0x"+Asc[i]);
      
   }
   
   return Asc;
   
}

function Ascii(sStr){
   
   var sHex_Str = "";
   var vChrMin = 0;
   var vChrMax = 127;
   var sStr_Chr,sAsc_Str,sChr,Dummy,i,j,k,l;
   
   for( i = 0; i < sStr.length; i++){
      
      sStr_Chr = sStr.charAt(i);
      lProgramError = lProgramError || ( unescape("%"+vChrMax.toString(16)) < sStr_Chr );
      
      if( lProgramError ){ 
         
         break;
         
      }
      
      k = 0x80;
      l = k;
      
      for( j = 7; j >= 0; j--){
         
         l >>>= 1;
         
         sAsc_Str = "%"+k.toString(16);
         sChr = "";
         
         if( vChrMin <= k && k <= vChrMax ){
            
            sChr = unescape(sAsc_Str);
            // sChr = d1Ascii[k];
            // alert("d1Ascii["+k+"] = '"+d1Ascii[k]+"'");
            
         }
         
         if( sStr_Chr == sChr ){
            
            sHex_Str = sHex_Str + sAsc_Str;
            j = -1;
            
         }
         else if( vChrMax < k ){
            
            k -= l;
            
         }
         else if( k < vChrMin ){
            
            k += l;
            
         }
         else if( sStr_Chr < sChr ){
            
            k -= l;
            
         }
         else if( sChr < sStr_Chr ){
            
            k += l;
            
         }
         
      }
      
   }
   
   return sHex_Str;
   
}


function change__html_symbol(sTarget){
  sTarget = sTarget.replace( /&/g, '&amp;' );
  sTarget = sTarget.replace( /</g, '&lt;' );
  sTarget = sTarget.replace( />/g, '&gt;' );
  sTarget = sTarget.replace( /"/g, '&#34;' );
  sTarget = sTarget.replace( /'/g, '&#39;' );
  // sTarget = sTarget.replace( /#/g, '&#35;' );
  // sTarget = sTarget.replace( /?/g, '&#63;' );
  return sTarget;
}

// ###############################################################

function vFE(vX){
   
   // var vLoop = 0;
   var vEP,vEC,vN,vKN,vXPN,LLoop;
   vN = 1;
   vKN = 1;
   vXPN = vX;
   vEP = 1;
   lLoop = true;
   
   while(lLoop){
      
      vEC = vEP+vXPN/vKN;
      lLoop = vEC != vEP;
      vN = vN+1;
      vKN = vKN*vN;
      vXPN = vXPN*vX;
      vEP = vEC;
      // vLoop = vLoop+1;
   }
   
   return vEC;
   
}

// var vMathPi = 3.141592653589793;
function EncodePassword1_V1(Chr1){
   
   return (vFE(Chr1+Math.PI)+vFE(-Chr1-Math.PI))/(vFE(Chr1+Math.PI)-vFE(-Chr1-Math.PI));
   
}

function EncodePassword_V0(Str){
   
   var sVersion = "0"; // Password Version 0.
   // この sVersion は必ず数字にして下さい， ”0.x”の小数や”x.x”の実数も可能ですが，マイナス を付加した場合は，その絶対値（つまり正の値）にされます．
   // Password の パラメータ の区切り記号は ”;”（セミコロン）になります．
   // なお Encode された Password は数字 以外の文字でも かまいませんが，｛英数字，アンダー・バー｝や「&+-./=@~」以外の文字を使う場合は escape して下さい．
   
   return sVersion+";"+escape(Str); // Password Version 0.
   
}

function EncodePassword_V1(Str){
   
   var sVersion = "1"; // Password Version 1.
   // alert("EncodePassword_V1; "+"\n");
   var Encode_Val,S1,C1,Asc_Val,i;
   var Str_Chr,Asc_Str,Chr;
   var Separator_Str = ";";
   var Encode_Str = sVersion;
   Asc_Val = AscValue(Str);
   // alert("EncodePassword_V1 : AscValue; "+"\n");
   // sProgramMessage = "";
   // sProgramMessage = sProgramMessage+"Asc_Val = \""+Asc_Val+"\"; \n";
   for( i = 1; i < Asc_Val.length; i++ ){
      
      C1 = Asc_Val[i]/256;
      //alert("EncodePassword_V1 : EncodePassword1_V1; "+"\n");
      Encode_Val = EncodePassword1_V1(C1);
      // alert("EncodePassword_V1 : EncodePassword1_V1; "+"\n");
      
      Encode_Str = 
         Encode_Str + Separator_Str + Encode_Val.toString(10);
      // Separator_Str = ";" ;
      // sProgramMessage = sProgramMessage+"Asc_Val["+i+"] = \""+Asc_Val[i]+"\"; \n";
      // sProgramMessage = sProgramMessage+"Encode_Str = \""+Encode_Str+"\"; \n";
      
      }
   
   // alert(sProgramMessage);
   
   return Encode_Str;
   
}

function EncodePassword1_V2(vC){
   
   return (vFE(vC)-vFE(-vC))/(vFE(vC)+vFE(-vC));
   
}

function EncodePassword_V2(Str){
   
   var sVersion = "2"; // Password Version 2.
   var vRandom = (Math.sqrt(Math.PI)+Math.random())/Math.PI;
   // alert("EncodePassword_V2; "+"\n");
   var S1,C1,Asc_Val,i;
   var Encode_Val,Encode_Val0,Encode_Val1;
   var Str_Chr,Asc_Str,Chr;
   var Separator_Str = ";" ;
   var Encode_Str = sVersion;
   
   Asc_Val = AscValue(Str);
   // alert("EncodePassword_V2 : AscValue; "+"\n");
   // sProgramMessage = "";
   // sProgramMessage = sProgramMessage+"Asc_Val = \""+Asc_Val+"\"; \n";
   for( i = 1; i < Asc_Val.length; i++ ){
      
      C1 = (65536+Asc_Val[i])/65536;
      //alert("EncodePassword_V2 : EncodePassword1_V2; "+"\n");
      Encode_Val = EncodePassword1_V2(C1);
      // alert("EncodePassword_V2 : EncodePassword1_V2; "+"\n");
      
      Encode_Val0 = (Encode_Val+vRandom)/(1+Encode_Val*vRandom);
      Encode_Val1 = (Encode_Val-vRandom)/(1-Encode_Val*vRandom);
      
      Encode_Str = Encode_Str+
       Separator_Str+Encode_Val0.toString(10)+
       Separator_Str+Encode_Val1.toString(10);
      // Separator_Str = ";" ;
      // sProgramMessage = sProgramMessage+"Asc_Val["+i+"] = \""+Asc_Val[i]+"\"; \n";
      // sProgramMessage = sProgramMessage+"Encode_Str = \""+Encode_Str+"\"; \n";
      
      }
   
   // alert(sProgramMessage);
   
   return Encode_Str;
   
}

function EncodePassword0_V3(vC){
   
   return (vFE(vC) - vFE(-vC)) / (vFE(vC) + vFE(-vC));
   
}

function EncodePassword1_V3(vOffset,vC){
   
   return EncodePassword0_V3(vOffset + (0x1ffffff + vC) / 0x1ffffff);
   
}

function EncodePassword_V3(Str,vID,vP,vG,vYA){
   
   var sVersion = "3"; // Password Version 3.
   var vRandom = (Math.sqrt(Math.PI)+Math.random())/Math.PI;
   // alert("EncodePassword_V2; "+"\n");
   var S1,C1,Asc_Val,i;
   var Encode_Val,Encode_Val0,Encode_Val1;
   var Str_Chr,Asc_Str,Chr;
   var Separator_Str = ";" ;
   var Encode_Str = sVersion;
   var vX,vYB,vK;
   var vR1,vOffset;
   
   Encode_Str += Separator_Str+vID.toString(10);
   
   if((typeof vID != "undefined") && (typeof vP != "undefined") && (typeof vG != "undefined") && (typeof vYA != "undefined")){
      
      vX = Math.floor(Math.random() * (vP - 2) + 1);
      vYB = vPowMod(vG,vX,vP);
      vK = vPowMod(vYA,vX,vP);
      vR1 = vK / vP;
      vOffset = (Math.sqrt(Math.PI) + vR1) / Math.PI;
      
      Encode_Str += Separator_Str+vYB.toString(10);
      
      Asc_Val = AscValue(Str);
      // alert("EncodePassword_V2 : AscValue; "+"\n");
      // sProgramMessage = "";
      // sProgramMessage = sProgramMessage+"Asc_Val = \""+Asc_Val+"\"; \n";
      
      for( i = 1; i < Asc_Val.length; i++ ){
         
         Encode_Val = EncodePassword1_V3(vOffset,Asc_Val[i]);
         
         Encode_Str += Separator_Str+Encode_Val.toString(10);
         
         // sProgramMessage = sProgramMessage+"Asc_Val["+i+"] = \""+Asc_Val[i]+"\"; \n";
         // sProgramMessage = sProgramMessage+"Encode_Str = \""+Encode_Str+"\"; \n";
         
         }
      
      // alert(sProgramMessage);
      
   }
   
   return Encode_Str;
   
}

function EncodePassword0_V4(vC){
   
   return (vFE(vC) - vFE(-vC)) / (vFE(vC) + vFE(-vC));
   
}

function EncodePassword1_V4(vOffset,vRandom,vAsc_Val){
   
   var Encode_Val,Encode_Val0,Encode_Val1;
   var vR,vC;
   
   vC = vOffset + (0x1ffffff + vAsc_Val) / 0x1ffffff;
   Encode_Val = EncodePassword0_V4(vC);
   
   return (Encode_Val + vRandom) / (1 + Encode_Val * vRandom);
   
}

function EncodePassword_V4(Str,vID,vP,vG,vYA){
   
   var sVersion = "4"; // Password Version 4.
   var vRandom;
   // alert("EncodePassword_V2; "+"\n");
   var S1,C1,Asc_Val,i;
   var Encode_Val,Encode_Val0,Encode_Val1;
   var Str_Chr,Asc_Str,Chr;
   var Separator_Str = ";" ;
   var Encode_Str = sVersion;
   var vX,vYB,vK;
   var vR1,vOffset;
   
   Encode_Str += Separator_Str+vID.toString(10);
   
   if((typeof vID != "undefined") && (typeof vP != "undefined") && (typeof vG != "undefined") && (typeof vYA != "undefined")){
      
      vX = Math.floor(Math.random() * (vP - 2) + 1);
      vYB = vPowMod(vG,vX,vP);
      vK = vPowMod(vYA,vX,vP);
      vR1 = vK / vP;
      vOffset = vR1;
      
      Encode_Str += Separator_Str+vYB.toString(10);
      
      Asc_Val = AscValue(Str);
      
      // alert("EncodePassword_V2 : AscValue; "+"\n");
      // sProgramMessage = "";
      // sProgramMessage = sProgramMessage+"Asc_Val = \""+Asc_Val+"\"; \n";
      
      for( i = 1; i < Asc_Val.length; i++ ){
         
         vRandom = (Math.sqrt(Math.PI) + Math.random()) / Math.PI;
         
         Encode_Val0 = EncodePassword1_V4(vOffset,-vRandom,Asc_Val[i]);
         Encode_Val1 = EncodePassword1_V4(vOffset,vRandom,Asc_Val[i]);
         
         Encode_Str += Separator_Str+Encode_Val0.toString(10)+Separator_Str+Encode_Val1.toString(10);
         
         // sProgramMessage = sProgramMessage+"Asc_Val["+i+"] = \""+Asc_Val[i]+"\"; \n";
         // sProgramMessage = sProgramMessage+"Encode_Str = \""+Encode_Str+"\"; \n";
         
         }
      
      // alert(sProgramMessage);
      
   }
   
   return Encode_Str;
   
}

function SetRadioButton(vIndication,oRadio){
   
   dRadioButton[vIndication] = oRadio.value;
   
}

function vGetStringByte(str){
   
   var i,j,chr;
   j = 0;
   
   for( i = 0; i<str.length; i++){
      
      if( str.charAt(i)<=unescape("%7f") ){
         
         j = j+1;
         
      }
      
      else{
         
         j = j+2;
         
      }
   }
   
   return j;
   
}

function vMod(vX,vM){
   
   var vR;
   
   if(0<=vX){
      
      vR = vX-Math.floor(vX/vM)*vM;
      
   }
   
   else{
      
      vR = vX-Math.ceil(vX/vM)*vM;
      
   }
   
   return vR;
   
}

function vPowMod(vX,vP,vM){
   
   var vR,vRN,vRM,vIP,vFP;
   
   vR = 1;
   vRN = vMod(vX,vM);
   vRM = 1;
   vIP = vP;
   
   while( 0 < vIP ){
      
      vRM = vMod(vRM*vRN,vM);
      vRN = vRM;
      vFP = vIP/2;
      vIP = Math.floor(vFP);
      
      if( vIP < vFP ){
         
         vR = vMod(vR*vRN,vM);
         
      }
      
   }
   
   return vR;
   
}

// ###############################################################

function Explorer_Display_AppendixImages( vDivideW, vDivideH, sImageDisplayFName, d1Image, d1W, d1H, d1Msg, d1ImageCacheDate, d1AppendixId, sOptionSeparator ){
  var i, SW, SH, SP, S, sITSize, sFName;
	if( 1<d1Image.length ){
    document.write( "<br>"+unescape("%0a") );
  }
  for( i = 1; i<d1Image.length; i++ ){
    sITSize = "";
    sFName = d1Image[i];
    if( d1W[i]!=0 && d1H[i]!=0 ){
      SW = vFrameWidth /vDivideW/d1W[i];
      SH = vFrameHeight/vDivideH/d1H[i];
      S = Math.min( 1, Math.min( SW, SH ) );
      sITSize = ' width='+S*d1W[i]+' height='+S*d1H[i]+' ';
    }
    document.write("<a target='_blank' href='"+sImageDisplayFName+d1AppendixId[i]+sOptionSeparator+"'>");
    document.write("<img border='0' src='"+d1Image[i]+"?"+d1ImageCacheDate[i]+"' "+sITSize+" alt='' title='"+change__html_symbol(d1Msg[i])+"' >");
    document.write("</a>\n");
    document.write(
     "<font style='font-family: \"ＭＳ Ｐ明朝\"; '> </font>\n"+
    "");
  }
  if( 1<d1Image.length ){
    document.write( "<br>"+unescape("%0a") );
  }
}

function Gecko_Display_AppendixImages( vDivideW, vDivideH, sImageDisplayFName, d1Image, d1W, d1H, d1Msg, d1ImageCacheDate, d1AppendixId, sOptionSeparator ){
  
  Explorer_Display_AppendixImages( vDivideW, vDivideH, sImageDisplayFName, d1Image, d1W, d1H, d1Msg, d1ImageCacheDate, d1AppendixId, sOptionSeparator );
  
}
// ###############################################################

function lExist_JavaScript_utility( ){
   
   return true; // false; //
   
}

// ######################### Inside Program End. #########################
