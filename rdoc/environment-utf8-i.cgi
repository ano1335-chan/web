#! /usr/bin/perl
# ↑この行を書き換える

use warnings;
use utf8;
use Encode;
use Encode::JP::H2Z;

$asc_nul__str = "\x00"; # null.
$asc_soh__str = "\x01"; # start of heading.
$asc_stx__str = "\x02"; # start of text.
$asc_etx__str = "\x03"; # end of text.
$asc_eot__str = "\x04"; # end of transmission.
$asc_enq__str = "\x05"; # enquiry.
$asc_ack__str = "\x06"; # acknowledge.
# $asc_bel__str = "\x07"; # bell. "\a"
# $asc_bs__str = "\x08"; # back space.
# back space が含まれる文字列を正規表現・置換すると文字列が正常に変換できないようです．
# $asc_ht__str = "\x09"; # horizontal tab. "\t"
# $asc_lf__str = "\x0a"; # line feed. "\n"
$asc_vt__str = "\x0b"; # vertical tab.
$asc_ff__str = "\x0c"; # from feed.
# $asc_cr__str = "\x0d"; # carriage returm. "\r"
$asc_so__str = "\x0e"; # shift out.
$asc_si__str = "\x0f"; # shift in.
$asc_dle__str = "\x10"; # data link escape.
# http://www.technoveins.co.jp/technical/explain/keyword.htm#XON/XOFF より引用。
# シリアル通信の際、データのフローコントロールをデータ自身を用いて行います。データ受信側の受信バッファが残り少なくなると、データ送信側へXOFFを送ります。データ送信側はXOFFを受け取るとデータ送信を中断します。データ受信側の処理が進み、受信バッファに余裕が出てきた時点でXONを送り、送信再開を要求します。
# $asc_dc1__str = "\x11"; # XON # device control 1.
# $asc_dc2__str = "\x12"; # device control 2.
# $asc_dc3__str = "\x13"; # XOFF # device control 3.
# $asc_dc4__str = "\x14"; # device control 4.
$asc_nak__str = "\x15"; # negative acknowledge.
$asc_syn__str = "\x16"; # synchronous idle.
$asc_etb__str = "\x17"; # end of transmitted block.
$asc_can__str = "\x18"; # cancel line.
$asc_em__str = "\x19"; # end of medium.
$asc_sub__str = "\x1a"; # substitute.
# $asc_esc__str = "\x1b"; # escape. "\e"
$asc_fs__str = "\x1c"; # file separator.
$asc_gs__str = "\x1d"; # group separator.
$asc_rs__str = "\x1e"; # record separator.
$asc_us__str = "\x1f"; # unit separator.
$asc_del__str = "\x7f"; # delete.

$separator__element__str = "\t";
# element : 要素.
$separator__text__str = $asc_etx__str;
# text : 文字列.
$separator__paragraph__str = $asc_us__str;
# paragraph : 節.
$separator__sentence__str = $asc_rs__str;
# sentence : 文.
$separator__chapter__str = $asc_gs__str;
# chapter : 章.
$separator__item__str = $asc_fs__str;
# item : 項目

$separator__thread__str = $asc_em__str;

# "\t",$asc_etx__str,$asc_us__str,$asc_rs__str,$asc_gs__str,$asc_fs__str,$asc_em__str,

$data = "test\t"+$asc_etx__str+$asc_us__str+$asc_rs__str+$asc_gs__str+$asc_fs__str+$asc_em__str;

   $decode = Encode::decode('shift_jis',$data);
   # Byte(shift_jis)→Char(utf8) ここは'cp932'ではなく'shift_jis'とする。

   $encoded = Encode::encode('euc-jp',$decode); # 
   # Char(utf8)→Byte(euc-jp)

print  "Content-type: text/html\n\n";
print  "<html>\n";
print  "   <head>\n";
print  "      <title>Environment.</title>\n";
print  "   </head>\n";
print  "   <body bgcolor='#8f9fff' text='#000000' link='#2f2fff' vlink='#d700d7' alink='#00ffff'>\n";

print "<center><h1>Environment.</h1></center>\n";

foreach(sort keys %ENV){
   print "$_ = $ENV{$_}<br>\n";
}

print  "   </body>\n";
print  "</html>\n";

exit;
