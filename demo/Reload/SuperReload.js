// 2023/10/15 03:54:18.947
window.onload = function () {
  var wDateTime = document.getElementById("DateTime");
  // localStorage.setItem('DateTime', 'value1');
  var sSgDateTime = localStorage.getItem('DateTime');
  var sAJAXCharset = "UTF-8";
  var sAJAXURL = "SuperReload.js";
  var oAJAX = new XMLHttpRequest();
  oAJAX.onload = function () {
    console.log("oAJAX.onload");
    if (this.readyState === 4 && this.status === 200) {
      console.log("this.readyState: " + this.readyState);
      console.log("this.status: " + this.status);
      var res = oAJAX.responseText;
      // console.log("res: " + res);
      var a1sLine = res.split(/\x0D\x0A|\x0A|\x0D/);
      var sLine0 = a1sLine[0];
      var sDateTime = sLine0.replace(/\/\/ */, "");
      console.log("sDateTime.length: " + sDateTime.length);
      var reload = false; // true; //
      if (!sSgDateTime) {
        localStorage.setItem('DateTime', sDateTime);
        sSgDateTime = localStorage.getItem('DateTime');
        if (sDateTime) {
          // location.reload(true);
          reload = true; // false; //
        }
      }
      var sHT_DateTime = "";
      if (!sDateTime) {
        localStorage.setItem('DateTime', '');
        sSgDateTime = localStorage.getItem('DateTime');
        sHT_DateTime = "// " + Date_YMMDD_HHmmss_SSS(new Date());
      }
      console.log("sSgDateTime: " + sSgDateTime);
      console.log("sDateTime: " + sDateTime);
      console.log("sHT_DateTime: " + sHT_DateTime);
      if (sDateTime != sSgDateTime) {
        reload = true; // false; //
      }
      if (reload) {
        // alert("if (reload)")
        location.reload(true);
      }
      if (sHT_DateTime) {
        wDateTime.innerHTML = sHT_DateTime;
        wDateTime.style = "display:block;";
      }
    }
  };
  oAJAX.overrideMimeType('text/plain; charset=' + sAJAXCharset);
  oAJAX.open('POST', sAJAXURL);
  oAJAX.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  oAJAX.send();
}

function Date_YMMDD_HHmmss_SSS(dt) {
  var year = dt.getFullYear();
  var month = dt.getMonth() + 1;
  var date = dt.getDate();
  var hours = dt.getHours();
  var minutes = dt.getMinutes();
  var seconds = dt.getSeconds();
  var millisec = dt.getMilliseconds();
  var ymdhmss = new String(year) + "/" + ("00" + new String(month)).slice(-2) + "/" + ("00" + new String(date)).slice(-2);
  ymdhmss += " " + ("00" + new String(hours)).slice(-2) + ":" + ("00" + new String(minutes)).slice(-2) + ":" + ("00" + new String(seconds)).slice(-2);
  ymdhmss += "." + ("000" + new String(millisec)).slice(-3);
  return ymdhmss;
}
