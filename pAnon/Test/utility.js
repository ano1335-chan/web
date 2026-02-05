// var sLPath = location.pathname.replace("\\","/");
// var sAbsoluteLocation = location.protocol+"//"+location.hostname+sLPath.substring(0,sLPath.indexOf("/",vB)+1); //
// File
var gsWebPathFile = location.pathname.replace("\\", "/");
console.log('gsWebPathFile: ' + gsWebPathFile);
var fnpos = gsWebPathFile.lastIndexOf("/") + 1;
var gsWebFile = gsWebPathFile.substring(
  fnpos, gsWebPathFile.length);
console.log('gsWebFile: ' + gsWebFile);
var gsWebAbsPath = location.protocol + "//" + location.hostname
  + gsWebPathFile.substring(0, fnpos);
console.log('gsWebAbsPath: ' + gsWebAbsPath);
