function OpFont(){
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
  vnFontRatio = 1.55*(vnDefaultFontSize/5-1);
  vnHTML_FontSize = Math.ceil(vnScreenMinimum/200*vnFontRatio);
  // ↑ブラウザのフォント設定でフォントを拡大させたい場合。
  // ※当然、ブラウザのフォント設定が必要。
  console.log('vnFontRatio='+vnFontRatio); 
  console.log('vnHTML_FontSize='+vnHTML_FontSize); 
  vnFontRatio = 6;
  vnHTML_FontSize = Math.ceil(vnScreenMinimum/200*vnFontRatio);
  // ↑※テスト用(ブラウザのフォント設定の手間が無い)。
  console.log('vnFontRatio='+vnFontRatio); 
  console.log('vnHTML_FontSize='+vnHTML_FontSize); 
  fwHTMLRoot.style.setProperty('--HTML_FontSize', vnHTML_FontSize+'px');
}