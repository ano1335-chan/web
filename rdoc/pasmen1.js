// true // false // null // this // window //
// while // for // break // continue
// typeof VARIABLE // "undefined" // "string" // "object" // "number" // "boolean" // "function"
// window.status = MESSAGE; // alert(MESSAGE);
// VARIABLE.toString(n) // 数値を n 進の文字列に変換．

// PassiveMenu

var nTimer_SlideShow_Switch = 0;
var nTimer_MenuClose = 1;
var nTimer_MenuSlide = 2;
// var nTimer_MenuSlideOpen = 2;
// var nTimer_MenuSlideClose = 3;

var fPassiveMenu_ScrolledMenuClose = PassiveMenu_ScrolledMenuClose( );

var nTimerInterval;
var d1TimerStep = new Array( );

if( (navigator.appName==sNetscapeNavigator) && (vVerCompatible<5) ){
   // Netscape
   
   // nTimerInterval = 62; // = 31*2; //
   nTimerInterval = 31;
   
}

else{ 
   // Explorer
   
   // nTimerInterval = 51; //
   // nTimerInterval = 62; // = 31*2; //
   nTimerInterval = 31;
   
}

// var vTimer_ArrayQnt = 2;
// var d1TimerStep = new Array(vTimer_ArrayQnt);
var d1TimerStep = new Array;
// var oIntervalTimer;

function SetTimer(vID,vStep){
   
   d1TimerStep[vID] = vStep;
   
   return;
   
}

function TimerHandler( ){
   
   setTimeout("TimerHandler()",nTimerInterval);
   
   var vI;
   
   IdlingHandler( );
   
   for(vI = 0; vI <= (d1TimerStep.length - 1); vI++){
      
      if(0 < d1TimerStep[vI]){
         
         d1TimerStep[vI]--;
         
         if(d1TimerStep[vI] == 0){
            
            switch(vI){
               
               case nTimer_SlideShow_Switch :
               
               Switch_SlideShow_ImageHandler( );
               
               break;
               
               case nTimer_MenuClose :
               
               PassiveMenu_MenuCloseHandler( );
               
               break;
               
               case nTimer_MenuSlide :
               
               PassiveMenu_MenuSlideHandler();
               
               break;
               
            }
            
         }
         
      }
      
      
   }
   
   return;
   
}

function IdlingHandler(){
   
   if( typeof fPassiveMenu_ScrolledMenuClose!="undefined" ){
      
      fPassiveMenu_ScrolledMenuClose( );
      
   }
   
}

// var oIntervalTimer;
var vPassiveMenu_MenuMinY;
var vPassiveMenu_MenuHeight;
var vPassiveMenu_SlideStep = 0;
var vPassiveMenu_SlideCount = 0;
var vPassiveMenu_SlideQuantity;
var nPassiveMenu_Slide_OpenQuantity =  6; // 5; //
var nPassiveMenu_Slide_CloseQuantity = 6; // 5; // 4;
var lPassiveMenu_MouseOver = false; // true; //
var nPassiveMenu_Wait = 16; // 12; //
var vView_LastOffsetX = 0;
var vView_LastOffsetY = 0;
var vMouse_LastCursorX = -1;
var vMouse_LastCursorY = -1;

var vMouse_Sensitivity = Math.max(screen.width,screen.height) / 64;
// screen // .height // .width // .availWidth // .availHeight //
// var vMouse_Sensitivity_Scale = 1 / 64;
// 1024 // 1000/20=50 // 1024/16=64 // 

function Write_ContentArray(d1Content){
   
   var vI;
   
   // alert("Content_Of_PassiveMenu\n");
   
   for(vI = 0; vI <= (d1Content.length - 1); vI++){
      
      document.write(d1Content[vI]);
      // alert(d1Content[vI]+"\n");
      
   }
   
}

function PassiveMenu_MenuOpen(){
   
   if( (navigator.appName==sNetscapeNavigator) && (vVerCompatible<5) ){
      // Netscape
      
      Netscape_PassiveMenu_MenuOpen();
      
   }
   
   else{ 
      // Explorer
      
      Explorer_PassiveMenu_MenuOpen();
      
   }
   
}

function Explorer_PassiveMenu_MenuOpen(){
   // EventSource
   
   // var vViewOffsetX,vViewOffsetY;
   var vMenuX,vMenuY;
   // vViewOffsetX = document.body.scrollLeft;
   // vViewOffsetY = document.body.scrollTop;
   var vViewOffsetX = document.body.scrollLeft;
   var vViewOffsetY = document.body.scrollTop;
   
   lPassiveMenu_MouseOver = false; // true; //
   
   vMenuX = Math.floor(vViewOffsetX + vFrameWidth / 2 - (document.all.PassiveMenu_Menu.offsetWidth / 2) );
   vMenuY = Math.floor(Math.max(vViewOffsetY,vPassiveMenu_MenuMinY) );
   
   vMouse_LastCursorX = -1;
   vMouse_LastCursorY = -1;
   
   document.all.PassiveMenu_Menu.style.posLeft = vMenuX;
   document.all.PassiveMenu_Menu.style.posTop = vMenuY;
   document.all.PassiveMenu_Menu.style.visibility = "visible";
   
   vPassiveMenu_SlideStep = 1;
   vPassiveMenu_SlideQuantity = nPassiveMenu_Slide_OpenQuantity;
   vPassiveMenu_SlideCount = vPassiveMenu_SlideQuantity;
   
   return false; // true;
   
}

function Netscape_PassiveMenu_MenuOpen(){
   
   var vMenuX,vMenuY;
   var vViewOffsetX = window.pageXOffset;
   var vViewOffsetY = window.pageYOffset;
   
   lPassiveMenu_MouseOver = false; // true; //
   
   vMenuX = Math.floor(vViewOffsetX + vFrameWidth / 2 - (document.PassiveMenu_Menu.clip.width / 2) );
   vMenuY = Math.floor(Math.max(vViewOffsetY,vPassiveMenu_MenuMinY) );
   
   vMouse_LastCursorX = -1;
   vMouse_LastCursorY = -1;
   
   document.PassiveMenu_Menu.moveTo(vMenuX,vMenuY);
   document.PassiveMenu_Menu.visibility = "show";
   
   vPassiveMenu_SlideStep = 1;
   vPassiveMenu_SlideQuantity = nPassiveMenu_Slide_OpenQuantity;
   vPassiveMenu_SlideCount = vPassiveMenu_SlideQuantity;
   
   return true; // false;
   
}

function vGetRadian(vX,vY){
   
   var vRadian,vRadius;
   
   vRadius = Math.sqrt(vX * vX + vY * vY);
   vRadian = Math.acos(vX / vRadius);
   
   if(vY<0){
      
      vRadian = 2 * Math.PI - vRadian;
      
   }
   
   // window.status = "X:"+vX+"; "+"Y:"+vY+"; "+"Radian:"+vRadian+"; "+"";
   
   return vRadian;
   
}

// ｃｈｅｃｋ
function lChkScopeRadian(vMin,vMax,vTarget){
   
   var lResult;
   
   if(vMin<=vMax){
      
      lResult = vMin<=vTarget && vTarget<=vMax;
      
   }
   
   else{
      
      lResult = 
       (vMin<=vTarget && vTarget<=(2 * Math.PI) ) || 
       (0<=vTarget && vTarget<=vMax);
      // window.status = "Min:"+vMin+"; "+"Max:"+vMax+"; "+"Target:"+vTarget+"; "+"Result:"+lResult+"; "+"";
      
   }
   
   return lResult;
   
}

function Explorer_PassiveMenu_MenuOpenHandler(oSource){
   // EventSource
   
   // window.status = "Explorer_PassiveMenu_MenuOpenHandler()";
   // var oObject = document.all(oSource.id);
   var sSourceObjName = oSource.id;
   var sMsg = "";
   
   var vMenuX,vMenuY;
   var vVMouseX,vVMouseY,vRMouse;
   var vCenterX,vCenterTY,vCenterBY;
   var vCenterLX,vCenterRX;
   var vCenterDX,vCenterDY;
   var vMOffsetX,vMOffsetY;
   var vMPageX,vMPageY;
   var vRadian,vRMin,vRMax,vRadius;
   var lScope,vArea;
   var vVAMinX,vVAMinY;
   var vVAMaxX,vVAMaxY;
   var vRAMin,vRAMax;
   
   var lApproach = false; // true; //
   var lLeave = false; // true; //
   
   var vViewOffsetX = document.body.scrollLeft;
   var vViewOffsetY = document.body.scrollTop;
   var vMenuWidth = document.all.PassiveMenu_Menu.offsetWidth;
   var vMenuHeight = vPassiveMenu_MenuHeight;
   var vContainerX;
   var vContainerY;
   
   vMenuX = Math.floor(vViewOffsetX + vFrameWidth / 2 - (vMenuWidth / 2) );
   vMenuY = Math.floor(Math.max(vViewOffsetY,vPassiveMenu_MenuMinY) );
   
   vMPageX = document.body.scrollLeft + window.event.clientX;
   vMPageY = document.body.scrollTop + window.event.clientY;
   
   var lOpen = false; // true; //
   var lClose = false; // true; //
   var vDX,vDY;
   var vDistanceX,vDistanceY;
   var vDistanceL,vDistanceR;
   var vVMouse;
   var vDistanceLX,vDistanceLY,vDistanceRX,vDistanceRY;
   var vDistanceMX,vDistanceMY;
   var vMAbsoluteX,vMAbsoluteY;
   
   vCenterX = vViewOffsetX + vFrameWidth / 2;
   vCenterLX = vMenuX;
   vCenterRX = vMenuX + vMenuWidth;
   vCenterTY = vMenuY;
   vCenterBY = vCenterTY + vMenuHeight;
   
   if(vMouse_LastCursorX<0 || vMouse_LastCursorY<0){
      
      // window.status = "Mouse:(X:"+vMPageX+"; "+"Y:"+vMPageY+"); "+"MouseLast:(X:"+vMouse_LastCursorX+"; "+"Y:"+vMouse_LastCursorY+"); "+"";
      
      vMouse_LastCursorX = vMPageX;
      vMouse_LastCursorY = vMPageY;
      // lApproach = true; // false; //
      // lPassiveMenu_MouseOver = false; // true; //
      
      // window.status = "SlideStep:"+vPassiveMenu_SlideStep+"; "+"SlideCount:"+vPassiveMenu_SlideCount+"; "+"";
      
   }
   
   vVMouseX = vMPageX - vMouse_LastCursorX;
   vVMouseY = vMPageY - vMouse_LastCursorY;
   vRMouse = vGetRadian(vVMouseX,vVMouseY);
   
   // window.status = "vMenuX:"+vMenuX+"; "+"vMenuY:"+vMenuY+"; "+"vMPageX:"+vMPageX+"; "+"vMPageY:"+vMPageY+"; "+"";
   
   // window.status = "vMouse_Sensitivity:"+vMouse_Sensitivity+"; "+"";
   
   if( vMouse_Sensitivity<=Math.max(Math.abs(vVMouseX),Math.abs(vVMouseY)) ){
      
      vArea = Math.max(vFrameWidth / 3, vMenuWidth);
      vVAMinX = vCenterX - (vArea / 2) - vMPageX;
      vVAMinY = vMenuY - vMPageY;
      vVAMaxX = vCenterX + (vArea / 2) - vMPageX;
      vVAMaxY = vMenuY - vMPageY;
      vRAMin = vGetRadian(vVAMinX,vVAMinY);
      vRAMax = vGetRadian(vVAMaxX,vVAMaxY);
      lApproach = (vVAMinY<=0) && lChkScopeRadian(vRAMin,vRAMax,vRMouse) || lApproach;
      
      vArea = vMenuWidth;
      vVAMinX = vCenterX - (vArea / 2) - vMPageX;
      vVAMinY = vMenuY + vMenuHeight - vMPageY;
      vVAMaxX = vCenterX + (vArea / 2) - vMPageX;
      vVAMaxY = vMenuY + vMenuHeight - vMPageY;
      vRAMin = vGetRadian(vVAMinX,vVAMinY);
      vRAMax = vGetRadian(vVAMaxX,vVAMaxY);
      lApproach = (vVAMinY<=0) && lChkScopeRadian(vRAMin,vRAMax,vRMouse) || lApproach;
      
      vVAMinX = vCenterLX - vMPageX;
      vVAMinY = vCenterTY - vMPageY;
      vVAMaxX = vCenterLX - vMPageX;
      vVAMaxY = vCenterBY - vMPageY;
      vRAMin = vGetRadian(vVAMinX,vVAMinY);
      vRAMax = vGetRadian(vVAMaxX,vVAMaxY);
      lApproach = (0<=vVAMinX) && lChkScopeRadian(vRAMin,vRAMax,vRMouse) || lApproach;
      
      vVAMinX = vCenterRX - vMPageX;
      vVAMinY = vCenterBY - vMPageY;
      vVAMaxX = vCenterRX - vMPageX;
      vVAMaxY = vCenterTY - vMPageY;
      vRAMin = vGetRadian(vVAMinX,vVAMinY);
      vRAMax = vGetRadian(vVAMaxX,vVAMaxY);
      lApproach = (vVAMinX<=0) && lChkScopeRadian(vRAMin,vRAMax,vRMouse) || lApproach;
      
      if(lApproach){
         
         lPassiveMenu_MouseOver = false; // true; //
         SetTimer(nTimer_MenuClose,nPassiveMenu_Wait);
         
         if(vPassiveMenu_SlideStep<=0){
            
            SetTimer(nTimer_MenuSlide,0); // Reset.
            
            if(0==vPassiveMenu_SlideStep){
               
               // window.status = "Count:"+vPassiveMenu_SlideCount+"; "+"Step:"+vPassiveMenu_SlideStep+"; "+"";
               
               vPassiveMenu_SlideCount = 0;
               
            }
            
            else{ // if(vPassiveMenu_SlideStep<0)
               
               // vPassiveMenu_SlideCount
               // alert("Count:"+vPassiveMenu_SlideCount+"; "+"\n"+"Step:"+vPassiveMenu_SlideStep+"; "+"\n"+"");
               // window.status = "Count:"+vPassiveMenu_SlideCount+"; "+"Step:"+vPassiveMenu_SlideStep+"; "+"";
               
                // Math.floor() // Math.ceil()
               vPassiveMenu_SlideCount = Math.floor(nPassiveMenu_Slide_OpenQuantity * vPassiveMenu_SlideCount / vPassiveMenu_SlideQuantity);
               
            }
            
            document.all.PassiveMenu_Menu.style.posLeft = vMenuX;
            vPassiveMenu_SlideStep = 1;
            vPassiveMenu_SlideQuantity = nPassiveMenu_Slide_OpenQuantity;
            Explorer_PassiveMenu_MenuSlideHandler();
            // SetTimer(nTimer_MenuClose,nPassiveMenu_Wait);
            
         }
         
      }
      
      else if(lPassiveMenu_MouseOver){
         
         // alert("Mouse:(X:"+vVMouseX+"; "+"Y:"+vVMouseY+"; "+"Deg:"+(vRMouse / Math.PI * 180)+"); "+"");
         // alert("Mouse:(X:"+vMPageX+"; "+"Y:"+vMPageY+"); "+"MouseLast:(X:"+vMouse_LastCursorX+"; "+"Y:"+vMouse_LastCursorY+"); "+"");
         
         lPassiveMenu_MouseOver = false; // true; //
         // Explorer_PassiveMenu_MenuCloseHandler(oSource);
         SetTimer(nTimer_MenuClose,nPassiveMenu_Wait);
         
      }
      
      // window.status = sMsg;
      vMouse_LastCursorX = vMPageX;
      vMouse_LastCursorY = vMPageY;
      
   }
   
   return false; // true;
   
}

function Netscape_PassiveMenu_MenuOpenHandler(oEvent){
   // EventSource
   
   // window.status = "Netscape_PassiveMenu_MenuOpenHandler()";
   var sMsg = "";
   
   var vMenuX,vMenuY;
   var vVMouseX,vVMouseY,vRMouse;
   var vCenterX,vCenterTY,vCenterBY;
   var vCenterLX,vCenterRX;
   var vCenterDX,vCenterDY;
   var vMOffsetX,vMOffsetY;
   var vMPageX,vMPageY;
   var vRadian,vRMin,vRMax,vRadius;
   var lScope,vArea;
   var vVAMinX,vVAMinY;
   var vVAMaxX,vVAMaxY;
   var vRAMin,vRAMax;
   
   var lApproach = false; // true; //
   var lLeave = false; // true; //
   
   var vViewOffsetX = window.pageXOffset;
   var vViewOffsetY = window.pageYOffset;
   var vMenuWidth = document.PassiveMenu_Menu.clip.width;
   var vMenuHeight = vPassiveMenu_MenuHeight;
   var vContainerX;
   var vContainerY;
   
   vMenuX = Math.floor(vViewOffsetX + vFrameWidth / 2 - (vMenuWidth / 2) );
   vMenuY = Math.floor(Math.max(vViewOffsetY,vPassiveMenu_MenuMinY) );
   
   // vMOffsetX = oEvent.x;
   // vMOffsetY = oEvent.y;
   vMPageX = oEvent.pageX;
   vMPageY = oEvent.pageY;
   
   // window.status = "oEvent.pageX:"+oEvent.pageX+"; "+"oEvent.pageY:"+oEvent.pageY+"; "+"oEvent.x"+oEvent.x+"; "+"oEvent.y:"+oEvent.y+"; "+"";
   
   var lOpen = false; // true; //
   var lClose = false; // true; //
   var vDX,vDY;
   var vDistanceX,vDistanceY;
   var vDistanceL,vDistanceR;
   var vVMouse;
   var vDistanceLX,vDistanceLY,vDistanceRX,vDistanceRY;
   var vDistanceMX,vDistanceMY;
   var vMAbsoluteX,vMAbsoluteY;
   
   var vPageX = oEvent.pageX;
   var vPageY = oEvent.pageY;
   var vScreenX = oEvent.screenX;
   var vScreenY = oEvent.screenY;
   var vWidth = oEvent.width;
   var vHeight = oEvent.height;
   var vOffsetX = window.pageXOffset;
   var vOffsetY = window.pageYOffset;
   
   vCenterX = vViewOffsetX + vFrameWidth / 2;
   vCenterLX = vMenuX;
   vCenterRX = vMenuX + vMenuWidth;
   vCenterTY = vMenuY;
   vCenterBY = vCenterTY + vMenuHeight;
   
   // window.status = "X:"+vMPageX+"; "+"Y:"+vMPageY+"; "+"vFrameWidth:"+vFrameWidth+"; "+"vFrameHeight:"+vFrameHeight+"; "+"";
   // window.status = "X:"+vMPageX+"; "+"Y:"+vMPageY+"; "+"Center:{ X:"+vCenterX+"; "+"LX:"+vCenterLX+"RX:"+vCenterRX+"; "+"TY:"+vCenterTY+"; "+"BY:"+vCenterBY+"; }; "+"";
   // window.status = "vCenterX:"+vCenterX+"; "+"vMenuX:"+vMenuX+"; "+"vMenuY:"+vMenuY+"; "+"vViewOffsetX:"+vViewOffsetX+"; "+"";
   // window.status = "X:"+vMPageX+"; "+"Y:"+vMPageY+"; "+"vCenterX:"+vCenterX+"; "+"vCenterLX:"+vCenterLX+"vCenterRX:"+vCenterRX+"; "+"vCenterTY:"+vCenterTY+"; "+"vCenterBY:"+vCenterBY+"; "+"";
   // window.status = "vCenterTY:"+vCenterTY+"; "+"vCenterBY:"+vCenterBY+"; "+"";
   
   if(vMouse_LastCursorX<0 || vMouse_LastCursorY<0){
      
      vMouse_LastCursorX = vMPageX;
      vMouse_LastCursorY = vMPageY;
      // lApproach = true; // false; //
      // lPassiveMenu_MouseOver = false; // true; //
      
   }
   
   vVMouseX = vMPageX - vMouse_LastCursorX;
   vVMouseY = vMPageY - vMouse_LastCursorY;
   vRMouse = vGetRadian(vVMouseX,vVMouseY);
   
   // window.status = "vMenuX:"+vMenuX+"; "+"vMenuY:"+vMenuY+"; "+"vMPageX:"+vMPageX+"; "+"vMPageY:"+vMPageY+"; "+"";
   // window.status = "vMPageX:"+vMPageX+"; "+"vMPageY:"+vMPageY+"; "+"vVMouseX:"+vVMouseX+"; "+"vVMouseY:"+vVMouseY+"; "+"vRMouse:"+vRMouse+"; "+"";
   // window.status = "vVMouseX:"+vVMouseX+"; "+"vVMouseY:"+vVMouseY+"; "+"vRMouse:"+vRMouse+"; "+"";
   
   // window.status = "vMouse_Sensitivity:"+vMouse_Sensitivity+"; "+"";
   
   if( vMouse_Sensitivity<=Math.max(Math.abs(vVMouseX),Math.abs(vVMouseY)) ){
      
      vArea = Math.max(vFrameWidth / 3, vMenuWidth);
      vVAMinX = vCenterX - (vArea / 2) - vMPageX;
      vVAMinY = vMenuY - vMPageY;
      vVAMaxX = vCenterX + (vArea / 2) - vMPageX;
      vVAMaxY = vMenuY - vMPageY;
      vRAMin = vGetRadian(vVAMinX,vVAMinY);
      vRAMax = vGetRadian(vVAMaxX,vVAMaxY);
      lApproach = (vVAMinY<=0) && lChkScopeRadian(vRAMin,vRAMax,vRMouse) || lApproach;
      
      // window.status = vRMouse+"; "+vRAMin+"; "+vRAMax+"; "+"";
      // window.status = "vVAMinX:"+vVAMinX+"; "+"vVAMinY:"+vVAMinY+"; "+"vVAMaxX:"+vVAMaxX+"; "+"vVAMaxY:"+vVAMaxY+"; "+"";
      // window.status = "vArea:"+vArea+"; "+"vRAMin:"+vRAMin+"; "+"vRAMax:"+vRAMax+"; "+"";
      // window.status = "vRAMin:"+vRAMin+"; "+"vRAMax:"+vRAMax+"; "+"";
      // window.status = "Approach:"+lApproach+"vMenuX:"+"vArea:"+vArea+"; "+"vRAMin:"+vRAMin+"; "+"vRAMax:"+vRAMax+"; "+"";
      
      vArea = vMenuWidth;
      vVAMinX = vCenterX - (vArea / 2) - vMPageX;
      vVAMinY = vMenuY + vMenuHeight - vMPageY;
      vVAMaxX = vCenterX + (vArea / 2) - vMPageX;
      vVAMaxY = vMenuY + vMenuHeight - vMPageY;
      vRAMin = vGetRadian(vVAMinX,vVAMinY);
      vRAMax = vGetRadian(vVAMaxX,vVAMaxY);
      lApproach = (vVAMinY<=0) && lChkScopeRadian(vRAMin,vRAMax,vRMouse) || lApproach;
      
      vVAMinX = vCenterLX - vMPageX;
      vVAMinY = vCenterTY - vMPageY;
      vVAMaxX = vCenterLX - vMPageX;
      vVAMaxY = vCenterBY - vMPageY;
      vRAMin = vGetRadian(vVAMinX,vVAMinY);
      vRAMax = vGetRadian(vVAMaxX,vVAMaxY);
      lApproach = (0<=vVAMinX) && lChkScopeRadian(vRAMin,vRAMax,vRMouse) || lApproach;
      
      vVAMinX = vCenterRX - vMPageX;
      vVAMinY = vCenterBY - vMPageY;
      vVAMaxX = vCenterRX - vMPageX;
      vVAMaxY = vCenterTY - vMPageY;
      vRAMin = vGetRadian(vVAMinX,vVAMinY);
      vRAMax = vGetRadian(vVAMaxX,vVAMaxY);
      lApproach = (vVAMinX<=0) && lChkScopeRadian(vRAMin,vRAMax,vRMouse) || lApproach;
      
      if(lApproach){
         
         lPassiveMenu_MouseOver = false; // true; //
         SetTimer(nTimer_MenuClose,nPassiveMenu_Wait);
         
         if(vPassiveMenu_SlideStep<=0){
            
            SetTimer(nTimer_MenuSlide,0); // Reset.
            
            if(0==vPassiveMenu_SlideStep){
               
               vPassiveMenu_SlideCount = 0;
               
            }
            
            else{ // if(vPassiveMenu_SlideStep<0)
               
                // Math.floor() // Math.ceil()
               vPassiveMenu_SlideCount = Math.floor(nPassiveMenu_Slide_OpenQuantity * vPassiveMenu_SlideCount / vPassiveMenu_SlideQuantity);
               
            }
            
            document.PassiveMenu_Menu.moveTo(vMenuX,vMenuY);
            vPassiveMenu_SlideStep = 1;
            vPassiveMenu_SlideQuantity = nPassiveMenu_Slide_OpenQuantity;
            Netscape_PassiveMenu_MenuSlideHandler();
            // SetTimer(nTimer_MenuClose,nPassiveMenu_Wait);
            
         }
         
         // window.status = "Mouse:(X:"+vVMouseX+"; "+"Y:"+vVMouseY+"; "+"Deg:"+(vRMouse / Math.PI * 180)+"); "+"";
         
      }
      
      else if(lPassiveMenu_MouseOver){
         
         lPassiveMenu_MouseOver = false; // true; //
         // Netscape_PassiveMenu_MenuCloseHandler(oEvent);
         SetTimer(nTimer_MenuClose,nPassiveMenu_Wait);
      }
      
      // window.status = sMsg;
      vMouse_LastCursorX = vMPageX;
      vMouse_LastCursorY = vMPageY;
      
   }
   
   // return false; // true; // 
   return true; // false
   
}

function Explorer_PassiveMenu_MenuSlideHandler(){
   
   var vViewOffsetX,vViewOffsetY;
   var vMenuX,vMenuY;
   var vStride,vStrideX,vStrideY;
   var vDistance,vDistanceX,vDistanceY;
   var vQuantity;
   var vSlide,vSlideTop,vSlideBottom;
   var vOpenY,vOpenYDeduct,vOpenYSize;
   
   vViewOffsetX = document.body.scrollLeft;
   vViewOffsetY = document.body.scrollTop;
   vMenuX = Math.floor(vViewOffsetX + vFrameWidth / 2 - (document.all.PassiveMenu_Menu.offsetWidth / 2) );
   vMenuY = Math.floor(Math.max(vViewOffsetY,vPassiveMenu_MenuMinY) );
   
   if(vPassiveMenu_SlideStep!=0){
      
      vQuantity = vPassiveMenu_SlideQuantity;
      
      vPassiveMenu_SlideCount = Math.min(vPassiveMenu_SlideCount + vPassiveMenu_SlideStep,vQuantity);
      
      vOpenYSize = Math.floor( (vPassiveMenu_MenuHeight * vPassiveMenu_SlideCount) / vQuantity);
      vOpenYDeduct = vPassiveMenu_MenuHeight - vOpenYSize;
      vOpenY = vMenuY - vOpenYDeduct;
      
      document.all.PassiveMenu_Menu.style.posTop = vOpenY;
      
      document.all.PassiveMenu_Menu.style.clip = "rect("
       +vOpenYDeduct+"," // Top
       +document.all.PassiveMenu_Menu.offsetWidth+"," // Right
       +vPassiveMenu_MenuHeight+"," // Bottom
       +0+")"; // Left
      
      document.all.PassiveMenu_Menu.style.visibility = "visible";
      
      if(
       (0 < vOpenYSize) &&
       (vOpenYSize < vPassiveMenu_MenuHeight)
      ){
         
         SetTimer(nTimer_MenuSlide,1);
         
      }
      
      else{
         
         // vPassiveMenu_SlideStep = 0;
         
      }
      
      if(0 == vOpenYSize){
         
         Explorer_PassiveMenu_MenuClose();
         
      }
      
   }
   
   return false; // true;
   
}

function Netscape_PassiveMenu_MenuSlideHandler(){
   
   // window.status = "Netscape_PassiveMenu_MenuSlideHandler()";
   
   var vViewOffsetX,vViewOffsetY;
   var vMenuX,vMenuY;
   var vStride,vStrideX,vStrideY;
   var vDistance,vDistanceX,vDistanceY;
   var vQuantity;
   var vSlide,vSlideTop,vSlideBottom;
   var vOpenY,vOpenYDeduct,vOpenYSize;
   
   vViewOffsetX = window.pageXOffset;
   vViewOffsetY = window.pageYOffset;
   
   vMenuX = Math.floor(vViewOffsetX + vFrameWidth / 2 - (document.PassiveMenu_Menu.clip.width / 2) );
   vMenuY = Math.floor(Math.max(vViewOffsetY,vPassiveMenu_MenuMinY) );
   
   if(vPassiveMenu_SlideStep!=0){
      
      vQuantity = vPassiveMenu_SlideQuantity;
      
      vPassiveMenu_SlideCount = Math.min(vPassiveMenu_SlideCount + vPassiveMenu_SlideStep,vQuantity);
      
      
      if( vPassiveMenu_SlideStep<0 && (vQuantity + vPassiveMenu_SlideStep)==vPassiveMenu_SlideCount ){ // メニュー の チラツキ 対策
         
         // vOpenYSize = Math.floor( (vPassiveMenu_MenuHeight * (vPassiveMenu_SlideCount - vPassiveMenu_SlideStep) ) / vQuantity ) - 1;
         // vOpenYDeduct = vPassiveMenu_MenuHeight - vOpenYSize;
         vOpenYDeduct = 1;
         document.PassiveMenu_Menu.clip.top = vOpenYDeduct;
         document.PassiveMenu_Menu.clip.height = vPassiveMenu_MenuHeight-vOpenYDeduct;
         
      }
      
      vOpenYSize = Math.floor( (vPassiveMenu_MenuHeight * vPassiveMenu_SlideCount) / vQuantity);
      vOpenYDeduct = vPassiveMenu_MenuHeight - vOpenYSize;
      vOpenY = vMenuY - vOpenYDeduct;
      
      document.PassiveMenu_Menu.moveTo(vMenuX,vOpenY);
      
      document.PassiveMenu_Menu.clip.top = vOpenYDeduct;
      document.PassiveMenu_Menu.clip.height = vPassiveMenu_MenuHeight-vOpenYDeduct;
      
      document.PassiveMenu_Menu.visibility = "show";
      
      if(
       (0 < vOpenYSize) &&
       (vOpenYSize < vPassiveMenu_MenuHeight)
      ){
         
         SetTimer(nTimer_MenuSlide,1);
         
      }
      
      else{
         
         // vPassiveMenu_SlideStep = 0;
         
      }
      
      if(0 == vOpenYSize){
         
         Netscape_PassiveMenu_MenuClose();
         
      }
      
      // alert("Netscape_PassiveMenu_MenuSlideHandler() : ");
      
   }
   
   return true; // false;
   
}

function Explorer_PassiveMenu_MenuClose(){
   // EventSource
   
   var vViewOffsetX,vViewOffsetY;
   
   SetTimer(nTimer_MenuSlide,0); // Reset.
   SetTimer(nTimer_MenuClose,0); // Reset.
   
   // vMouse_LastCursorX = -1;
   // vMouse_LastCursorY = -1;
   
   lPassiveMenu_MouseOver = false; // true; //
   vPassiveMenu_SlideStep = 0;
   vPassiveMenu_SlideCount = 0;
   
   document.all.PassiveMenu_Menu.style.visibility = "hidden";
   
   return;
   
}

function Netscape_PassiveMenu_MenuClose(){
   
   var vViewOffsetX,vViewOffsetY;
   
   SetTimer(nTimer_MenuSlide,0); // Reset.
   SetTimer(nTimer_MenuClose,0); // Reset.
   
   // vMouse_LastCursorX = -1;
   // vMouse_LastCursorY = -1;
   
   lPassiveMenu_MouseOver = false; // true; //
   vPassiveMenu_SlideStep = 0;
   vPassiveMenu_SlideCount = 0;
   
   document.PassiveMenu_Menu.visibility = "hide";
   
   return;
   
}

function Explorer_PassiveMenu_MenuCloseHandler(oSource){
   // EventSource
   
   // var vViewOffsetX,vViewOffsetY;
   var vMPageX,vMPageY;
   var lFlag = true; // false;
   var vMenuX,vMenuY;
   
   var vViewOffsetX = document.body.scrollLeft;
   var vViewOffsetY = document.body.scrollTop;
   
   vMenuX = Math.floor(vViewOffsetX + vFrameWidth / 2 - (document.all.PassiveMenu_Menu.offsetWidth / 2) );
   vMenuY = Math.floor(Math.max(vViewOffsetY,vPassiveMenu_MenuMinY) );
   
   if(typeof oSource!="undefined"){
      
      vMPageX = vViewOffsetX + window.event.clientX;
      vMPageY = vViewOffsetY + window.event.clientY;
      
   }
   
   if(vPassiveMenu_SlideStep == 1){
      
      lPassiveMenu_MouseOver = false; // true; //
      
      vPassiveMenu_SlideStep = -1;
      vPassiveMenu_SlideQuantity = nPassiveMenu_Slide_CloseQuantity;
      vPassiveMenu_SlideCount = vPassiveMenu_SlideQuantity;
      
      Explorer_PassiveMenu_MenuSlideHandler();
      
   }
   
   return false; // true;
   
}

function Netscape_PassiveMenu_MenuCloseHandler(oEvent){
   
   // var vViewOffsetX,vViewOffsetY;
   var vMPageX,vMPageY;
   var lFlag = true; // false;
   var vMenuX,vMenuY;
   
   var vViewOffsetX = window.pageXOffset;
   var vViewOffsetY = window.pageYOffset;
   
   vMenuX = Math.floor(vViewOffsetX + vFrameWidth / 2 - (document.PassiveMenu_Menu.clip.width / 2) );
   vMenuY = Math.floor(Math.max(vViewOffsetY,vPassiveMenu_MenuMinY) );
   
   if(typeof oEvent!="undefined"){
      
      vMPageX = oEvent.pageX;
      vMPageY = oEvent.pageY;
      
      lFlag = vMenuY<=vMPageY;
      
      // window.status = "vMPageY:"+vMPageY+"; "+"vMenuY:"+vMenuY+"; "+"";
      
   }
   
   if(lFlag){
      
      if(vPassiveMenu_SlideStep == 1){
         
         lPassiveMenu_MouseOver = false; // true; //
         
         vPassiveMenu_SlideStep = -1;
         vPassiveMenu_SlideQuantity = nPassiveMenu_Slide_CloseQuantity;
         vPassiveMenu_SlideCount = vPassiveMenu_SlideQuantity;
         
         Netscape_PassiveMenu_MenuSlideHandler();
         
      }
      
   }
   
   return true; // false;
   
}

function Explorer_PassiveMenu_CloseCancelHandler(oSource){
   // EventSource
   
   // var oObject = document.all(oSource.id);
   var sSourceObjName = oSource.id;
   
   // window.status = "Explorer_PassiveMenu_CloseCancelHandler";
   
   vMouse_LastCursorX = -1;
   vMouse_LastCursorY = -1;
   lPassiveMenu_MouseOver = true; // false; //
   
   SetTimer(nTimer_MenuClose,0); // Reset.
   // Explorer_PassiveMenu_MenuOpen();
   
   return false; // true;
   
}

function Netscape_PassiveMenu_CloseCancelHandler(oEvent){
   
   // window.status = "Netscape_PassiveMenu_CloseCancelHandler";
   
   vMouse_LastCursorX = -1;
   vMouse_LastCursorY = -1;
   lPassiveMenu_MouseOver = true; // false; //
   
   SetTimer(nTimer_MenuClose,0); // Reset.
   // Netscape_PassiveMenu_MenuOpen();
   
   return true; // false;
   
}

function SetTimer(vID,vStep){
   
   d1TimerStep[vID] = vStep;
   
   return;
   
}

function PassiveMenu_ScrolledMenuClose(){
   
   if( (navigator.appName==sNetscapeNavigator) && (vVerCompatible<5) ){
      // Netscape
      
      Netscape_PassiveMenu_ScrolledMenuClose();
      
   }
   
   else{ 
      // Explorer
      
      Explorer_PassiveMenu_ScrolledMenuClose();
      
   }
   
   return;
   
}

function Explorer_PassiveMenu_ScrolledMenuClose(){
   
   var vViewOffsetX,vViewOffsetY;

   vViewOffsetX = document.body.scrollLeft;
   vViewOffsetY = document.body.scrollTop;
   
   if(
    ( (vView_LastOffsetX != vViewOffsetX) || 
    (vView_LastOffsetY != vViewOffsetY) )
   ){
      
      vMouse_LastCursorX = -1;
      vMouse_LastCursorY = -1;
      
      if(document.all.PassiveMenu_Menu.style.visibility == "visible"){
         
         Explorer_PassiveMenu_MenuClose();
         
      }
      
   }
   
   vView_LastOffsetX = vViewOffsetX;
   vView_LastOffsetY = vViewOffsetY;
   
   return;
   
}

function Netscape_PassiveMenu_ScrolledMenuClose(){
   
   var vViewOffsetX,vViewOffsetY;
   
   vViewOffsetX = window.pageXOffset;
   vViewOffsetY = window.pageYOffset;
   
   if(
    ( (vView_LastOffsetX != vViewOffsetX) || 
    (vView_LastOffsetY != vViewOffsetY) )
   ){
      
      vMouse_LastCursorX = -1;
      vMouse_LastCursorY = -1;
      
      if(document.PassiveMenu_Menu.visibility == "show"){
         
         Netscape_PassiveMenu_MenuClose();
         
      }
      
   }
   
   vView_LastOffsetX = vViewOffsetX;
   vView_LastOffsetY = vViewOffsetY;
   
   return;
   
}

// ###############################################################

function lExist_JavaScript_pasmen1( ){
   
   return true; // false; //
   
}

var lJavaScript_LoadCheck_pasmen1 = true; // false; //

