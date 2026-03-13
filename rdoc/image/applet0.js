function AppVideoBuiltinBase0(
 vAppletWidth,vAppletHeight,
 vBackground,sExpressMode,
 vImageWidth,vImageHeight,
 sPath){
   document.write(
    "<applet archive='j1video.jar' code='AppVideo0B.class' width='"+vAppletWidth+"' height='"+vAppletHeight+"'>"
    +"<param name='WindowManner' value='Builtin'>"
    +"<param name='Background' value='"+vBackground+"'>"
    +"<param name='PanelWidth' value='"+vAppletWidth+"'>"
    +"<param name='PanelHeight' value='"+vAppletHeight+"'>"
    +"<param name='ExpressMode' value='"+sExpressMode+"'>"
    +"<param name='ImageWidth' value='"+vImageWidth+"'>"
    +"<param name='ImageHeight' value='"+vImageHeight+"'>"
    +"<param name='Path' value='"+sPath+"'>"
   );
}   
function AppVideoBuiltinBase1(
 sAutoRun,vInterval,vLoop,
 sFilePrefix,sFileStart,sFileEnd,sFileExtension){
   document.write(
    "<param name='AutoRun' value='"+sAutoRun+"'>"
    +"<param name='Interval' value='"+vInterval+"'>"
    +"<param name='Loop' value='"+vLoop+"'>"
    +"<param name='FilePrefix' value='"+sFilePrefix+"'>"
    +"<param name='FileStart' value='"+sFileStart+"'>"
    +"<param name='FileEnd' value='"+sFileEnd+"'>"
    +"<param name='FileExtension' value='"+sFileExtension+"'>"
    +"</applet>"
   );
}   
function AppVideoBuiltinBaseEnd(){
   document.write(
    "</applet>"
   );
}  
function AppVideoBuiltinPicture(
 vAppletWidth,vAppletHeight,
 vImageWidth,vImageHeight,
 sPath,sFile){
   
   AppVideoBuiltinBase0(
    vAppletWidth, // vAppletWidth
    vAppletHeight, // vAppletHeight
    0x0000ff, // vBackground
    "Picture", // sExpressMode
    vImageWidth, // vImageWidth
    vImageHeight, // vImageHeight
    sPath // sPath
   );
   document.write(
    "<param name='File' value='"+sFile+"'>");
   AppVideoBuiltinBaseEnd();
}  
function AppVideoBuiltinMovie(
 vAppletWidth,vAppletHeight,
 vImageWidth,vImageHeight,
 sAutoRun,vLoop,vInterval,
 sPath,
 sFilePrefix,sFileStart,sFileEnd,sFileExtension){
   
   AppVideoBuiltinBase0(
    vAppletWidth, // vAppletWidth
    vAppletHeight, // vAppletHeight
    0x0000ff, // vBackground
    "Movie", // sExpressMode
    vImageWidth, // vImageWidth
    vImageHeight, // vImageHeight
    sPath // sPath
   );
   AppVideoBuiltinBase1(
     sAutoRun, // sAutoRun
     vInterval, // vInterval
     vLoop, // vLoop
     sFilePrefix, // sFilePrefix
     sFileStart, // sFileStart
     sFileEnd, // sFileEnd
     sFileExtension // sFileExtension
   );
   AppVideoBuiltinBaseEnd();
}  
function AppVideoBuiltinSlide(
 vAppletWidth,vAppletHeight,
 vImageWidth,vImageHeight,
 sPath,
 sFilePrefix,sFileStart,sFileEnd,sFileExtension){
   AppVideoBuiltinBase0(
    vAppletWidth, // vAppletWidth
    vAppletHeight, // vAppletHeight
    0x0000ff, // vBackground
    "Slide", // sExpressMode
    vImageWidth, // vImageWidth
    vImageHeight, // vImageHeight
    sPath // sPath
   );
   AppVideoBuiltinBase1(
     "Pause", // sAutoRun
     1333, // vInterval
     1, // vLoop
     sFilePrefix, // sFilePrefix
     sFileStart, // sFileStart
     sFileEnd, // sFileEnd
     sFileExtension // sFileExtension
   );
   AppVideoBuiltinBaseEnd();
}  

var lJavaScript_LoadCheck_applet0 = true; // false; //
