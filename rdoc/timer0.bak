// true // false // null // this // window //
// while // for // break // continue
// typeof VARIABLE // "undefined" // "string" // "object" // "number" // "boolean" // "function"
// window.status = MESSAGE; // alert(MESSAGE);
// VARIABLE.toString(n) // ”’l‚ğ n i‚Ì•¶š—ñ‚É•ÏŠ·D

var nTimer_SlideShow_Switch = 0;
var nTimer_MenuClose = 1;
var nTimer_MenuSlide = 2;
// var nTimer_MenuSlideOpen = 2;
// var nTimer_MenuSlideClose = 3;

var d1fIdlingHandler = new Array( );
// fPassiveMenu_ScrolledMenuClose = PassiveMenu_ScrolledMenuClose( );

var nTimerInterval;

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

function TimerHandler( ){
   
   var i,j;
   
   setTimeout("TimerHandler( )",nTimerInterval);
   
   // IdlingHandler( );
   
   for( i=0; i<d1fIdlingHandler.length; i++){
      
      d1fIdlingHandler[i]( );
      
   }
   
   for(i = 0; i <= (d1TimerStep.length - 1); i++){
      
      if(0 < d1TimerStep[i]){
         
         d1TimerStep[i]--;
         
         if(d1TimerStep[i] == 0){
            
            switch(i){
               
               case nTimer_SlideShow_Switch :
               
               Switch_SlideShow_ImageHandler( );
               
               break;
               
               case nTimer_MenuClose :
               
               PassiveMenu_MenuCloseHandler( );
               
               break;
               
               case nTimer_MenuSlide :
               
               PassiveMenu_MenuSlideHandler( );
               
               break;
               
            }
            
         }
         
      }
      
      
   }
   
   return;
   
}

function SetTimer(vID,vStep){
   
   d1TimerStep[vID] = vStep;
   
   return;
   
}

function Initialize_timer0( ){
   
   setTimeout("TimerHandler( )",nTimerInterval);
   
   return;
   
}

// ###############################################################

function lExist_JavaScript_timer0( ){
   
   return true; // false; //
   
}

