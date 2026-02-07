function DefineScreen(){
  fwHTMLRoot = document.documentElement;
  vnScreenWidth = screen.width;
  vnScreenHeight = screen.height;
  vnScreenMinimum = Math.min(vnScreenWidth, vnScreenHeight);
  vnScreenMaximum = Math.max(vnScreenWidth, vnScreenHeight);
  console.log(vnScreenWidth); 
  console.log(vnScreenHeight); 
  fwHTMLRoot.style.setProperty('--ScreenWidth', vnScreenWidth+'px');
  fwHTMLRoot.style.setProperty('--ScreenHeight', vnScreenHeight+'px');
  fwHTMLRoot.style.setProperty('--ScreenMinimum', vnScreenMinimum+'px');
  fwHTMLRoot.style.setProperty('--ScreenMaximum', vnScreenMaximum+'px');
  vnDevicePixelRatio = window.devicePixelRatio;
  console.log('vnDevicePixelRatio='+vnDevicePixelRatio);
  vnDeviceWidth = vnScreenWidth*vnDevicePixelRatio;
  vnDeviceHeight = vnScreenHeight*vnDevicePixelRatio;
  console.log('vnDeviceWidth='+vnDeviceWidth);
  console.log('vnDeviceHeight='+vnDeviceHeight);
  fwHTMLHead = document.head;
  voComputedStyle = window.getComputedStyle(fwHTMLHead, null);
  vsDefaultFontSize = voComputedStyle.fontSize;
  console.log('vsDefaultFontSize='+vsDefaultFontSize);
  vnDefaultFontSize = parseFloat(vsDefaultFontSize); 
  console.log('vnDefaultFontSize='+vnDefaultFontSize);
}