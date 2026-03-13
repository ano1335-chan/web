#! /usr/bin/perl
# /usr/local/bin/perl
# ↑１行目を書き換える．
# プロバイダー に規定されてる パス にして下さい．

# ●この プログラム の利用規約．
# この プログラム は Open Source です（商用利用可、商用利用にあたり当方に「連絡、使用許可申請」の必要はありません）．
# この プログラム を利用することにより如何なる障害 又は損害が発生しても作成者は一切責任を負わないものとします，又 他人に対して損害を与えた場合は自己責任により解決して下さい．
# プログラム の機能向上や バグ の修正などの サポート は保障しません．
# プログラム の改造は自由ですが，改造は利用者側の自己責任で お願いします，作成者は一切関知しません．
# （無料，有料）プロバイダー の サーバー を ダウン させたりしたら，そこの アカウント が抹消される（モチロン その サイト も抹消される） ハメ になるかも しれませんので改造 プログラム の動作 チェック は必ず自分の PC で おこなって下さい．
# 改造 プログラム の再配布は自由です，又「"Inside Program Begin"以降から"Inside Program End"までの ソース を改造した場合」は オリジナル と区別するために（この プログラム 上において）改造者の ハンドル・ネーム を「表示、または 表記」して下さい．

# ●機能
# プロバイダー側（サーバー）の設定に左右されず，リンクに対しマウスの右クリックでダウンロード・ダイアログを開けるように，ファイルを"Content-type: application/octet-stream;"（バイナリー）でダウンロードする．
# ただし，規格に準拠して無いブラウザーでは この"Content-type"の指定よりも，ファイル拡張子が優先されてしまう場合があり，ファイルのダウンロードにならない場合があるようです(^_^;もちろん，言わずと知れた MS 製品)．
# ファイル拡張子によりダウンロードにならない場合はファイル拡張子を変更して下さい．
# なお，ファイル拡張子が ”.cgi”だと その拡張子が ”.cgi.txt”に変換されてしまうようです（おそらく MS 独自仕様だと思われる）．
# ただし，現在の MS 社は あらゆる規格に準拠するために膨大なエネルギー（資金，人材）を注ぎ込んでいるらしいです．
# 今まで散々，規格から逸脱し好き勝手にやってきた MS 社なので眉唾ものですが，どうやらマジらしい…．
# MS 製品が厳密に規格に準拠しだしたために，（今まで問題 無く動いてた）規格外（ MS 仕様）のシステムに問題が発生しているようです．
# おそらくビルゲイツが MS 社の経営がら退いたため，そのような方針転換が図られたのだと思われます．

# ● cgi ファイルのパーミッション：700

# ●使用方法
# パス/downloader.cgi?アップロード・ファイル名［;ダウンロード用ファイル名］
# 注．『［～］』（ ブラケット）は省略可の意味であり、ブラケット自体は記述しないで下さい．

# 注．アドレスのパラメータとして ふさわしくない文字（スペース、「!"#$%&'(),:;<=>?[\]^`{|}~」、漢字など）は「escape エンコード」する必要があります．
# HTMLページが「"Shift JIS"、"UTF-8"」モードのみ「漢字ファイル名」対応、ちなみに"UTF-8"モードの場合はデフォルトで"Shift JIS"キャラクター・セットとして処理される模様（HTMLページが"EUC"モードの場合は、"Gecko"エンジン系で「漢字」が文字化けするようです）．

# 正常にダウンロード出来ない場合は パーミッションの設定が間違ってるか，パスが間違ってるか，ファイル名が間違ってるか，プロバイダー側の問題かの いずれかだと思われます．
# なにか ファイル を ダウンロード した場合に、この"downloader.cgi"と言う ファイル名 で ファイル・サイズ 0バイト の ファイル が生成される場合は、ダウンロード対象 の パス が間違ってるか，ファイル名が間違ってると思われます．
# "downloader.cgi"が ダウンロード・ページ と別の場所にある場合は注意して下さい（ダウンロード対象 の 相対パス は ダウンロード・ページ からではなく、"downloader.cgi"からの 相対パス となります）．
# 例えば、ルート に"downloader.cgi" があり、"X-FOLDER"と言う フォルダー に「"download.htm"と言う ダウンロード・ページ と、"X-FILE"と言う ダウンロード対象ファイル」ある場合、"download.htm"内での パス指定は「../downloader.cgi?X-FOLDER/X-FILE」となります．
# また、無料プロバイダーの場合，ダウンロード・データ自体に広告データが挿入されたり，"Content-type: application/octet-stream;" が"Content-type: text/html;" に強制的に変換されたり（その場合はダウンロードでは無く HTML ファイルとして表示される）する場合や，CGI によるファイルのダウンロードをプロテクトしている場合や，（そのサイトのページを表示せず）そのアドレスに直にアクセスするとファイルのダウンロードがプロテクトされる場合も有るかもしれませんので，ご注意 下さい．
# つまり何が言いたいのかと言うと，正常にダウンロード出来ない場合は このプログラムのバグでは無いと言う事です．
# よって，必ず正常にダウンロードできるかチェックが必要と言う事です．

use File::Spec qw(rel2abs);
use Encode qw(encode decode);

# Version.
( @version_information__suc ) = (
	'Downloader',
	# 'Model <Name>',
	'Version 0.C3',
	'Release 0G',
	'Fix 1L'
);

# ▼この プログラム を変更した場合．
# "Inside Program Begin"以降から"Inside Program End"までの プログラム を変更した場合には必ず変更に かかわった全ての方々の ハンドル・ネーム を次の"例"のように「'Editor : ハンドル・ネーム',」を下記の @declaration_of_intent__suc に設定して下さい．
#（例）．
# @declaration_of_intent__suc = (
#  'Author : amanojaku.',
#  'Editor : ×××.',
#    :
#    :
#    :
#  'Editor : ×××.',
# );
# この文字列は必ず「'」（シングル・クォーテイション）で囲って下さい．
# ※ただし，（バージョン によっても違うかもしれませんが）Perl の命令文の行末に全角文字の含まれる コメント を書くと問題が有るようですので，次の"例"（ダメな例）の「天之（あまの）」のような全角文字の含まれる コメント は命令文の行末に書かないようにして下さい．
#（ダメな例）．
#  'Editor : 天野.', # 天野（あまの）

@declaration_of_intent__suc = (
 'Author : amanojaku.',
	# amanojaku（アマノジャク）
);

# ダウンロードをキャンセルするファイルを指定する(実際に存在しなくても良い)。
(@download_cancel_fpath__suc) = (

 '*.cgi',

 'sjis/*',
 'euc/*',
 'utf8/*',
 'utf16/*',

 'cgi-bin/sjis/*',
 'cgi-bin/utf8/*',
 'cgi-bin/utf16/*',

'');
# ↑これは あくまでも一例です。
# とりあえずリンク･アドレスから簡単に知る事のできるファイルだけ指定しておけば良い。
# ワイルドカード："*"で任意のファイル名を指定可(例．"*.cgi")、ディレクトリ名にもワイルドカード："*"は使えます。
# 注．「'sjis/*','euc/*','utf8/*','utf16/*','cgi-bin/sjis/*','cgi-bin/utf8/*','cgi-bin/utf16/*'」などの一番最後の"*"はファイルだけが対象となっている。
# 例えば'sjis/*/*'の場合でも一番最後の"*"はファイルだけが対象となっており、"appendix"内の添付ファイルはダウンロード可能(ちなみに その前の"*"はディレクトリだけが対象となっている)。
# スペースで区切って複数のファイルを指定できます(例．"a.txt b.bat c.cgi")。
# Null 文字が指定された場合は無視されます。
# 自分自身("downloader.cgi")は指定しなくてもキャンセルされます(ただし、"downloader.cgi"が複数 設置されている場合は自分以外の"downloader.cgi"を明示的に指定しなければなりません)。
# 注．Windows系 サーバーにアップする場合も考慮し「ディレクトリ名、ファイル名」などの英{大文字、小文字}を同一視します。

# ダウンロードをキャンセルするディレクトリを指定する(実際に存在しなくても良い)。
(@download_cancel_dir__suc) = ( '' );
# 指定されたディレクトリ内は全てダウンロードがキャンセルされます(掲示板の添付ファイルまでダウンロード出来なくしないように ご注意 下さい)。
# ディレクトリ名の末尾に"/"を付加しなくてとも構いません。
# ディレクトリ名にはワイルドカード："*"は使えません。
# Null 文字が指定された場合は無視されます。
# 注．Windows系 サーバーにアップする場合も考慮し「ディレクトリ名、ファイル名」などの英{大文字、小文字}を同一視します。

# ただし、ハッカーならスーパー･ユーザー権限で なんでも出来るので これらダウンロードのキャンセル処理など なんの意味もありません。

$download_log ="download.log.txt";
# ↑「Download Log」が必要な場合は この"download.log.txt"を作成し、パーミッションを「600（または 666）」に設定して下さい。

$downloader_debug ="downloader.dbg.txt";

$download_log_max = 3072;
# ダウンロード・ログ・データ数の最大値．

(%config__aso) = ( %config__aso, 'TabBlankQuantity', 4 );

######################### Inside Program Begin. #########################
# この"Inside Program Begin"以降から"Inside Program End"までの プログラム を変更した場合には必ず変更に かかわった全ての方々の ハンドル・ネーム を 「Editor : ハンドル・ネーム.」のように表記して下さい．

(%html_content_type__aso) = (
	'euc',"<meta http-equiv='Content-Type' content='text/html; charset=EUC-JP'>",
	'euc-jp',"<meta http-equiv='Content-Type' content='text/html; charset=EUC-JP'>",
	'sjis',"<meta http-equiv='Content-Type' content='text/html; charset=Shift_JIS'>",
	'shift_jis',"<meta http-equiv='Content-Type' content='text/html; charset=Shift_JIS'>",
	'cp932',"<meta http-equiv='Content-Type' content='text/html; charset=Shift_JIS'>",
	'utf8',"<meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>",
	'jis',"<meta http-equiv='Content-Type' content='text/html; charset=iso-2022-jp'>",
	'7bit-jis',"<meta http-equiv='Content-Type' content='text/html; charset=iso-2022-jp'>"
	 # '',"<meta http-equiv='Content-Type' content='text/html'>"
);
$html_charset = 'sjis';

$asc_etx__str = "\x03"; # end of text.
$separator = '<*>';

if( "$ENV{'SERVER_NAME'}" eq 'localhost' ){
	$debug__bol = 1; # Yes.
}
if( $debug__bol ){
	$debug_wfhandle__glb = *DEBUG_WFHANDLE{IO};
	$debug_wf__bol = open($debug_wfhandle__glb,">$downloader_debug");
}

&print_debug(
&make_rude__version_info__str( )."\n",
&make_rude__declaration_of_intent__suc( )."\n",
"");

###############################################################
#                                                             #
#                     （参考プログラム ）                     #
#                                                             #
#                       SYNCK GRAPHICA                        #
#                    http://www.synck.com/                    #
#                           より．                            #
#                                                             #
#            「セキュアダウンローダーCGI」参考                #
#                                                             #
#                                                             #
###############################################################

@dir_names = split( /\;/g , $ENV{'QUERY_STRING'} );

$dir_names[0] = &ascii($dir_names[0]);
if( $unicode16__bol ){
	# Encode::decode で"utf-8"(Unicode)に変換され Unicode Flag は On となる
	$utf8 = Encode::decode('UTF-16BE', $dir_names[0]);
	$dir_names[0] = Encode::encode('shiftjis', $utf8);
}

$dir_names[1] = &ascii($dir_names[1]);
if( $unicode16__bol ){
	# Encode::decode で"utf-8"(Unicode)に変換され Unicode Flag は On となる
	$utf8 = Encode::decode('UTF-16BE', $dir_names[1]);
	$dir_names[1] = Encode::encode('shiftjis', $utf8);
}

$original_fpath = $dir_names[0];
$original_fpath =~ s~\\~/~g;
$download_fname = $dir_names[1];

(@original_stat) = stat($original_fpath);

(@dir_parts) = split( /\/|\\/g , $original_fpath );
$original_fname = $dir_parts[$#dir_parts];

$download_fname =~ s~(\%|\;|\"|\'|\?|\:|\*|\<|\>|\|)~_~g;
# ↑（上記で"&ascii"関数で'shiftjis'キャラクター・セットに変換している訳だが）（本来は ここで"%"を無効にせず）さらに escape しなければならないと思われるが、"Trident(IE)"エンジン系と"Gecko"エンジン系の挙動の違い（"Gecko"エンジン系のバグ？）のため escape はせずに、"%"を無効にする。
# "%"を無効にしないと"Trident(IE)"エンジン系と"Gecko"エンジン系で（"%"＋２桁の数字だと）挙動が異なってしまう。

$script_fpath = $ENV{'SCRIPT_NAME'};

$program_name = $script_fpath;
$program_name =~ s~^.*/~~;

$program_fpath = $ENV{'SCRIPT_FILENAME'};
$program_fpath =~ s~$program_name$~~;
$program_fpath = &get_path__absolute($program_fpath);

$program_absolute_path = $program_fpath;
$program_absolute_path =~ s~($program_name)$~~i;
$program_absolute_path = &get_path__absolute($program_absolute_path);
$current_public_absolute_path = $program_absolute_path;
$current_native_absolute_path = &get_path__absolute('./');

(@download_cancel_fpath__suc) = ( $program_name, @download_cancel_fpath__suc );


$original_absolute_fpath = &get_path__absolute("$original_fpath");

&print_debug(
'$original_absolute_fpath = "'.$original_absolute_fpath.'"; '."\n",
"");

$download__bol = 
 0<=$#original_stat &&
 (
	$original_absolute_fpath =~ m~^$current_public_absolute_path~ ||
	$original_absolute_fpath =~ m~^$current_native_absolute_path~
 ) &&
 $original_fpath !~ m~\*|^/|:/|\.\.~;

&print_debug(
'$program_name = "'.$program_name.'"; '."\n",
'$program_fpath = "'.$program_fpath.'"; '."\n",
'$program_absolute_path = "'.$program_absolute_path.'"; '."\n",
"\n");

&print_debug(
'$download__bol = "'.$download__bol.'"; '."\n",
'$#original_stat = "'.$#original_stat.'"; '."\n",
'$original_absolute_fpath =~ m~^$current_public_absolute_path~ = "'.($original_absolute_fpath =~ m~^$current_public_absolute_path~).'"; '."\n",
'$original_absolute_fpath =~ m~^$current_native_absolute_path~ = "'.($original_absolute_fpath =~ m~^$current_native_absolute_path~).'"; '."\n",
'$original_absolute_fpath = "'.$original_absolute_fpath.'"; '."\n",
'$current_public_absolute_path = "'.$current_public_absolute_path.'"; '."\n",
'$current_native_absolute_path = "'.$current_native_absolute_path.'"; '."\n",
"\n");

$original_relative_fpath = $original_absolute_fpath;
$original_relative_fpath =~ s~^($current_public_absolute_path|$current_native_absolute_path)~~g;

&print_debug(
'$original_relative_fpath = "'.$original_relative_fpath.'"; '."\n",
'&escape8j($original_absolute_fpath) = "'.&escape8j($original_absolute_fpath).'"; '."\n",
"");

if( $download__bol ){
	for( $i = 0; $i<=$#download_cancel_dir__suc; $i++ ){
		if( $download_cancel_dir__suc[$i] ne '' ){
			
			$cancel_native_absolute_dir = &get_path__absolute("$download_cancel_dir__suc[$i]");
			$cancel_native_absolute_dir .= '/';
			$cancel_native_absolute_dir =~ s~//$~/~g;
			
			$cancel_public_absolute_dir = &get_path__absolute("$program_absolute_path$download_cancel_dir__suc[$i]");
			$cancel_public_absolute_dir .= '/';
			$cancel_public_absolute_dir =~ s~//$~/~g;

&print_debug(
'$cancel_native_absolute_dir = "'.$cancel_native_absolute_dir.'"; '."\n",
'$cancel_public_absolute_dir = "'.$cancel_public_absolute_dir.'"; '."\n",
"");

			if(
			 $original_absolute_fpath =~ m~^$cancel_native_absolute_dir~i ||
			 $original_absolute_fpath =~ m~^$cancel_public_absolute_dir~i
			){
				$download__bol = 0; # Non.
			}
		}
	}
}

if( $download__bol ){
	for( $i = 0; $i<=$#download_cancel_fpath__suc; $i++ ){
		if( $download_cancel_fpath__suc[$i] ne '' ){
			(@glob_downcancel_fpath__suc)= glob($download_cancel_fpath__suc[$i]);
			for( $j = 0; $j<=$#glob_downcancel_fpath__suc; $j++ ){
			
				$cancel_native_absolute_fpath = &get_path__absolute("$glob_downcancel_fpath__suc[$j]");
				$cancel_public_absolute_fpath = &get_path__absolute("$program_absolute_path$glob_downcancel_fpath__suc[$j]");

&print_debug(
'$cancel_native_absolute_fpath = "'.$cancel_native_absolute_fpath.'"; '."\n",
'$cancel_public_absolute_fpath = "'.$cancel_public_absolute_fpath.'"; '."\n",
"\n",
"");

				if(
				 (
					$original_absolute_fpath =~ m~^$cancel_native_absolute_fpath$~i ||
					$original_absolute_fpath =~ m~^$cancel_public_absolute_fpath$~i
				 )
				){
					$download__bol = 0; # Non.
				}
			}
		}
	}
}

if( $download__bol ){
	
	$file_size = $original_stat[7];
	
	if( $download_fname eq '' ){
		$download_fname = $original_fname;
	}
	
	print "Content-type: application/octet-stream;\n";
	
	if( "$original_fname" ne ''){
		
		# open(FileHandle,"《<∥>∥>>∥+<∥+>》FileName");
		# Read：<,Write：>,Append：>>,Read&Write：+<,Write&Read：+>
		# Open Read
		$download_rf__bol = open(DOWNLOAD_FHANDLE,"<$original_fpath");
		
		if( $download_rf__bol ){
			
			binmode(DOWNLOAD_FHANDLE);
			# バイナリー・データを読み込む場合は binmode を指定しなければならない
			
			print "Content-Disposition: attachment; filename=\"${download_fname}\"\n";
			print "Content-Length: $file_size;\n";
			print "\n";
			
			binmode(STDOUT);
			
			# read(FILEHANDLE, scalar, length);
			$read_length = read(DOWNLOAD_FHANDLE,$file_data,$file_size);
			# http://itpro.nikkeibp.co.jp/article/Reference/20080930/315734/
			# "$read_length"は バイト数ではなく文字数？
			# "read"失敗時は"$read_length"は未定義値(undefine)
			
			print $file_data;
			
			close DOWNLOAD_FHANDLE;
			
		}
		
	}
	
	if( ! $download_rf__bol ){
		
		print "\n";
		
	}

	if(
	 ( defined($read_length) ) &&
	 ($download_log ne "")
	){
		$download_log_rwf__bol = open(DOWNLOAD_LOG_RWFHANDLE,"+<$download_log");
	}
	if( $download_log_rwf__bol ){
		# 読み書き禁止のロック．
		flock(DOWNLOAD_LOG_RWFHANDLE,2);
		(%download_log__aso) = <DOWNLOAD_LOG_RWFHANDLE>;
		$key = $original_fpath;
		if( $download_fname ne "" ){
		 $key .= " : $download_fname";
		}
		$key .= "\n";
		$data = &terminate__line_feed($download_log__aso{$key});
		( $value, $date ) = split( /$separator/, $data );
		if( 0xFFFFFFFF<=$value ){
			$value = 0;
		}else{
			$value++;
		}
		$data = "$value$separator".&variant__local_time__str(time);
		(%download_log__aso) = ( %download_log__aso, $key, "$data\n" );
		
		undef @date__suc;
		undef %index__aso;
		$i = 0;
		foreach $key ( keys(%download_log__aso) ) {
			$data = &terminate__line_feed($download_log__aso{$key});
			( $value, $date__suc[$i] ) = split( /$separator/, $data );
			$date__suc[$i] .= " $i";
			( %index__aso ) = ( %index__aso, $date__suc[$i], $key );
			$i++;
		
		} 
		(@date__suc) = sort {$b cmp $a} @date__suc;
		
		for( $i = $download_log_max; $i<=$#date__suc; $i++){
			$k = $index__aso{$date__suc[$i]};
			delete($download_log__aso{$k});
		}
		
		# seek(FileHandle,OffsetPointer,StartingPoint);
		# StartingPoint（起点）：｛０：ファイルの先頭；１：現在のファイル・ポインタ，２：ファイルの末尾｝
		# OffsetPointer：StartingPoint（起点）からのバイト数．
		seek(DOWNLOAD_LOG_RWFHANDLE,0,0);
		# ファイルや文字列を、指定された長さに切り詰める。
		truncate(DOWNLOAD_LOG_RWFHANDLE,0);
		print DOWNLOAD_LOG_RWFHANDLE (%download_log__aso);
		close(DOWNLOAD_LOG_RWFHANDLE);
		# ロックの解除．
		flock(DOWNLOAD_LOG_RWFHANDLE,8);
	}
}else{
	print "Content-type: text/html\n\n";
	print <<"HTML_DOCUMENT_HEADER";
<html>
	<head>
		$html_content_type__aso{$html_charset}
		<title>Download Error</title>
		<style type="text/css">
			<!--
			a:hover { color: #ffff00 }
			-->
		</style>
	</head>
	<body bgcolor="#8f9fff" text="#000000" link="#2f2fff" vlink="#d700d7" alink="#00ffff">
HTML_DOCUMENT_HEADER

	print <<"HTML_DOCUMENT_BODY";
<br>
Download Error：指定された{パス、ファイル}が存在しない、指定された{パス名、ファイル名}が間違っている、ダウンロードが禁止されているファイルが指定されたかの いづれかです。<br>

HTML_DOCUMENT_BODY

	print <<"HTML_DOCUMENT_FOOTER";
	</body>
</html>
HTML_DOCUMENT_FOOTER

}

exit;

sub print_debug{
	if( $debug__bol ){
		print {$debug_wfhandle__glb} ( @_ );
	}
}

sub escape8j{
	# ８ビット を ASCII コード部分において JavaScript の escape と等価な１６進 変換する，変換された１６進 コード の前に ”%”が付加される．
	local($target) = @_;
	
	# $target =~ s/([\x00-\x29\x2c\x3a-\x3f\x5b-\x5e\x60\x7b-\x7f\x80-\xff])/sprintf("%%%02X", unpack("C", $1))/eg;
	$target =~ s/([\x00-\x29]|\x2c|[\x3a-\x3f]|[\x5b-\x5e]|\x60|[\x7b-\x7f]|[\x80-\xff])/sprintf("%%%02X", unpack("C", $1))/eg;
	return $target;
}

sub escape8a{
	# JIS コード（８ビット） の全ての文字を１６進 変換する，変換された１６進 コード の前に ”%”が付加される．
	local($target) = @_;
	
	# $target =~ s/(.|\n)/sprintf("%%%02X", unpack("C", $1))/eg;
	$target =~ s/([\x00-\xff])/sprintf("%%%02X", unpack("C", $1))/eg;
	return $target;
}

sub ascii{
	# "%"が付加された全ての１６進 コード を文字に変換する．
	# "%u"が付加された場合は、全ての文字を 16bit 単位の文字列に変換する．
	local($target) = @_;
	
	$unicode16__bol = 0; # Non.
	if ( $target =~ /%u/ ){
		$unicode16__bol = 1; # Yes.
	}
	
	if( ! $unicode16__bol ){
		$target=~ s/%([0-9a-f]{2})/pack("C", hex($1))/ieg;
	}else{ # if( $unicode16__bol )

&print_debug( '&ascii( ); '.
'$target = "'.$target.'"; '.
"\n");

		$target =~ s/(%u)([0-9a-f]{4})|(%)([0-9a-f]{2})|(.)/&ascii16c($1.$3,$2.$4.$5)/ieg;

&print_debug(
'$target = "'.$target.'"; '.
"\n");

		# 「(?= )、(?! )」は「( )」と違い、マッチした文字列を 保管する機能はありません
		# 文字ではなく、位置 にマッチします
	}
	
	return $target;
}

sub ascii16c{
	# １６進 コード を 文字に変換する．
	local($type, $chr1) = @_;
	
&print_debug( '&ascii16c( ); '.
'$type = "'.$type.'"; '.
'$chr1 = "'.$chr1.'"; '.
"\n");
	
	if( $type ne '' ){
		if( &odd(length($chr1))==1 ){
			$chr1 = "0$chr1";
		}
		$chr1 =~ s/([0-9a-f]{2})/pack("C", hex($1))/ieg;
	}
	if( length($chr1)==1 ){
		$chr1 = "\x00$chr1";
	}
	
&print_debug(
'$type = "'.$type.'"; '.
'$chr1 = "'.$chr1.'"; '.
"\n");
	
	return $chr1;
}

sub odd{
	# 奇数．
	local( $i ) = @_;
	local( $j ) = 0;
	if( int( $i / 2 ) != ( $i / 2 ) ){
		$j = 1;
	}
	return $j;
}

sub terminate__line_feed{
	local($string) = @_;
	
	$string =~ s/(\x0D\x0A|\x0A|\x0D)$//g;
	return $string;
}

sub variant__local_time__aso{

	local($stime) = @_;
	
	# $stime += $time_fix * 60 * 60;
	local($sec, $min, $hour, $mday, $mon, $year) = localtime($stime);
	$mon++;
	$year += 1900;
	local(%time__aso) = ("Sec",$sec,"Minute",$min,"Hour",$hour,"Day",$mday,"Month",$mon,"Year",$year);
	return %time__aso;
}
sub variant__local_time__str{
	local(%time__aso) = &variant__local_time__aso(@_);
	return sprintf("%04d/%02d/%02d %02d:%02d:%02d", $time__aso{'Year'}, $time__aso{'Month'}, $time__aso{'Day'}, $time__aso{'Hour'}, $time__aso{'Minute'},$time__aso{'Sec'});
}

sub change__html_symbol0{
	# Text to HTML.
	# ｛"\t"（tab）｝を スペース に変換し，｛スペース｝を除いた html シンボル と バッティング する文字を html シンボル に変換．
	local($target__str) = @_;
	local($tab_blank) = " " x $config__aso{'TabBlankQuantity'};
	
	$target__str =~ s/\t/$tab_blank/g;
	$target__str =~ s/&/&amp;/g;
	$target__str =~ s/</&lt;/g;
	$target__str =~ s/>/&gt;/g;
	$target__str =~ s/"/&#34;/g;
	$target__str =~ s/'/&#39;/g;
	# $target__str =~ s/(\x0D\x0A|\x0A|\x0D)/<br>/g;
	return $target__str;
}

sub change__html_symbol1{
	# Text to HTML.
	# ｛スペース｝を（部分的に）html シンボル に変換．
	local($target__str) = @_;
	local($tab_blank) = " " x $config__aso{'TabBlankQuantity'};
	
	$target__str =~ s~( +)~( " " x &odd( length( $1 ) ) ).( ( '&nbsp;'." " ) x int( length( $1 ) / 2 ) )~eg;
	$target__str =~ s/	/\&nbsp; /g;
	$target__str =~ s/^ /\&nbsp;/g;
	$target__str =~ s/ $/\&nbsp;$1/g;
	$target__str =~ s/ (\x0D\x0A|\x0A|\x0D)/\&nbsp;$1/g;
	$target__str =~ s/(\x0D\x0A|\x0A|\x0D) /$1\&nbsp;/g;
	return $target__str;
}

sub change__html_symbol{
	# Text to HTML.
	# ｛"\t"（tab）｝を｛スペース｝に変換，
	# その｛スペース｝を（部分的に）html シンボル に変換，
	# html シンボル と バッティング する文字も html シンボル に変換，
	# ｛"\n"（line feed）｝も html シンボル に変換．
	local($target__str) = @_;
	
	$target__str = &change__html_symbol0($target__str);
	$target__str = &change__html_symbol1($target__str);
	# $target__str = &change__html_symbol2($target__str);
	$target__str =~ s/(\x0D\x0A|\x0A|\x0D)/<br>/g;
	return $target__str;
}

sub make_rude__version_info__str{
	local( $version__str );
	if( ! $debug__bol ){
		pop( @version_information__suc );
	}
	$version__str = join(' ', @version_information__suc ).".\n";
	return $version__str;
}

sub make_rude__declaration_of_intent__suc{
	local( $i, $j );
	local( @intent__suc );
	undef @intent__suc;
	$j = 0;
	for( $i = 0; $i <= $#declaration_of_intent__suc; $i++ ){
		if( $declaration_of_intent__suc[$i] ne "" ){
			$intent__suc[$j] .= $declaration_of_intent__suc[$i]."\n";
			$j++;
		}
	}
	return @intent__suc;
}

sub get_path__absolute{ # ( $path, $permission__pnt )
	local($inp_path, $permission__pnt) = @_;
	local( $i );
	local($path, $out_path, $separator);
	local(@file_state_suc);
	local($path_new, $path_old);
	local($error__bol, $error_msg, $parent);
	
	# File::Spec->rel2abs( ）とかで最後に"/"（スラッシュ）が来たらイカンようだ(^_^;)
	$path = $inp_path;
	$path =~ s~\\~/~g;
	$separator = ( $path =~ m~/$~ );
	$path =~ s~/$~~;
	$path = File::Spec->rel2abs($path);
	$path_new = $path.'/';
	$path_old = '';
	$path_new =~ s~^([a-zA-Z]\:)?(/)~$1\\~;
	$parent = '\a'; # \a
	# $path_new =~ s~(^|/)(\.\.)(/|$)~$1\a$3~g;
	$i = 255;
	while( "$path_old" ne "$path_new" ){
		# last if ( "$path_old" ne "$path_new" );
		$path_old = $path_new;
		$path_new =~ s~(^|/)(\.\.)(/|$)~$1\a$3~;
		$path_new =~ s~([^\a\:/\\]+)(/\a)(/)~~;
		$path_new =~ s~(/\.)(/|$)~$2~;
		# $i = $i -1;
	}
	$path_new =~ s~(\a)~\.\.~g;
	$path_new =~ s~\\~/~g;
	$path_new =~ s~/$~~;
	$path = $path_new;
	$path =~ s~\\~/~g;
	$error__bol = 
	 ( $path =~ m~(^|/)\.(/|$)~ ) ||
	 ( $path =~ m~(^|/)\.\.(/|$)~ );
	$error_msg = '';
	if( $error__bol ){
		$error_msg = '??Error sub get_path__absolute.';
	}
	$out_path = $path;
	#if( 0 == (0 + @program_critical_message__suc) ){
		if( defined($permission__pnt) ){
			# ｛ディレクトリ；ファイル｝の定数の パーミッション は数字の先頭に ゼロ を付けて８進の数値で指定するのが慣例となっている．
			undef(@file_state_suc);
			(@file_state_suc) = stat($out_path);
			# 数字の先頭に ゼロ を付け８進の ”0777”で AND する．
			$$permission__pnt = $file_state_suc[2] & 0777;
		}
	#}
	if( $separator ){
		$out_path = $out_path.'/';
	}
	$out_path .= $error_msg;
	return $out_path;
}

######################### Inside Program End. #########################
