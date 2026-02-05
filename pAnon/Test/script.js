// test
{

  geDeviceType = {
    PC: 1,
    Tab: 2,
    SP: 3,
  };

  Get_DeviceType = function () {
    let res;
    let ua = navigator.userAgent;
    if (ua.match(/(iPhone|iPod|Android.*Mobile)/i)) {
      res = geDeviceType.SP;
    } else if (ua.match(/iPad|Android|Silk|Kindle/i)) {
      res = geDeviceType.Tab;
    } else {
      res = geDeviceType.PC;
    }
    return res;
  };

  Check_DeviceType = function (dt) {
    if (!dt) {
      throw new Error('Error: Invalid value for "Check_DeviceType()" parameter.');
    }
    return this.Get_DeviceType() === dt;
  };

  RubyEncoder = function () {
    var d1wSource = document.getElementsByName("nmSource");
    // rep = document.getElementById("nmSource").value;
    var d1wDisplay = document.getElementsByName("nmDisplay");
    // console.log(str);
    for (var i = 0; i < d1wSource.length; i++) {
      console.log(`i: ${i}`);
      var rep = d1wSource[i].value;
      rep = rep
        .replace(/^ +/gs, '')
        .replace(/ +$/gs, '')
        .replace(/・/gs, '･')
        .replace(/（/gs, '(').replace(/）/gs, ')')
        .replace(/”/gs, '"').replace(/’/gs, "'")
        .replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
          return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
        })
        .replace(/([^・･ ぁ-ゖァ-ヶーＡ-Ｚａ-ｚ０-９＿\w、，,。．.：…～＝=←↑→＊\*／\/※§☆★○●◎◇◆□■△▲▽▼＜＞《》「」『』【】｛｝{}（）\(\)”’\"\'][^ ぁ-ゖァ-ヶーＡ-Ｚａ-ｚ０-９＿\w、，,。．.：…～＝=←↑→＊\*／\/※§☆★○●◎◇◆□■△▲▽▼＜＞《》「」『』【】｛｝{}（）\(\)”’\"\']*)[（\(]([ぁ-ゖァ-ヶー・･]+)[）\)]/gs,
          '<ruby><rb>$1</rb><rp>(</rp><rt>$2</rt><rp>)</rp></ruby>')
        // .replace(/([^ ぁ-ゖァ-ヶＡ-Ｚａ-ｚ０-９＿\w、，,。．.：…～＝←↑→＊※§☆★○●◎◇◆□■△▲▽▼＜＞《》「」『』【】｛｝{}（）()”’\"\']+)[（(]([ぁ-ゖァ-ヶ・･]+) ?([ぁ-ゖァ-ヶ・･]*?)[）)]/gs,
        // '<ruby><rb>$1</rb><rp>(</rp><rt>$2$3</rt><rp>)</rp></ruby>')
        .replace(/ *(\x0D\x0A|\x0A|\x0D|\n)/gs, '<br>\n');
      d1wDisplay[i].innerHTML = rep;
      // d1wSource[i].value = "";
      // [・][^ ぁ-ゖァ-ヶーＡ-Ｚａ-ｚ０-９＜＞（）”’]+（[ぁ-ゖァ-ヶー]+）
    }
    // console.log(rep);
  };

  RubyEncoder();
  let a1wRemark001, wRemark001;
  let dtpc = Check_DeviceType(geDeviceType.PC);
  console.log(`dtpc: ${dtpc}`);
  a1wRemark001 = document.getElementsByClassName("Remark001");
  console.log(`a1wRemark001.length: ${a1wRemark001.length}`);
  console.log(`a1wRemark001: ${a1wRemark001}`);
  console.log(a1wRemark001);
  for (let rm of a1wRemark001) {
    if (!dtpc) {
      rm.style.display = 'none';
      console.log(`rm.style.display: ${rm.style.display}`);
    } else {
      // rm.style.display = 'block';
      console.log(`rm.style.display: ${rm.style.display}`);
    }
  }

}
