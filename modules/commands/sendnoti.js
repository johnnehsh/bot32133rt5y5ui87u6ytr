var _0x10160a=_0x19cb;function _0x19cb(_0x4f349f,_0xcf26e0){var _0x2da5ac=_0x2da5();return _0x19cb=function(_0x19cb8d,_0x26628d){_0x19cb8d=_0x19cb8d-0x160;var _0x5b8091=_0x2da5ac[_0x19cb8d];return _0x5b8091;},_0x19cb(_0x4f349f,_0xcf26e0);}function _0x2da5(){var _0x405799=['3411755oTLezm','11391KmeNAX','30684wsmcmO','[Text]','sendFail','attachments','/cache/snoti.png','5439249zSBXin','2540460tsQEYr','Gửi\x20tin\x20nhắn\x20tới\x20các\x20nhóm(reply\x20vào\x20ảnh/video\x20cần\x20gửi\x20kèm)!\x0aPhiên\x20bản\x20xịn\x20hơn\x20của\x20sendnotiUwU','582536OcaTKt','Mirai\x20mod\x20by\x20HĐGN','threadID','exports','allThreadID','49fOiLJe','2106346dizaAf','type','writeFileSync','messageID','join','languages','system','»\x20THÔNG\x20BÁO\x20TỪ\x20ADMIN\x20BOT\x20«\x0a\x0a','1.0.2','sendSuccess','[!]\x20Không\x20thể\x20gửi\x20thông\x20báo\x20tới\x20%1\x20nhóm','6PDRTcE','url','72CJTaPy','createReadStream','get','push','run','sendMessage','request','/cache/snoti.mp4','from','length','message_reply','sendnoti','nodemodule','data','Đã\x20gửi\x20tin\x20nhắn\x20đến\x20%1\x20nhóm!'];_0x2da5=function(){return _0x405799;};return _0x2da5();}(function(_0x295dfb,_0x13912c){var _0x460550=_0x19cb,_0x5a4639=_0x295dfb();while(!![]){try{var _0x109658=-parseInt(_0x460550(0x17c))/0x1+parseInt(_0x460550(0x18b))/0x2+parseInt(_0x460550(0x16c))/0x3*(parseInt(_0x460550(0x17d))/0x4)+parseInt(_0x460550(0x17b))/0x5*(parseInt(_0x460550(0x16a))/0x6)+parseInt(_0x460550(0x18a))/0x7*(-parseInt(_0x460550(0x185))/0x8)+-parseInt(_0x460550(0x182))/0x9+-parseInt(_0x460550(0x183))/0xa;if(_0x109658===_0x13912c)break;else _0x5a4639['push'](_0x5a4639['shift']());}catch(_0xfc5ffc){_0x5a4639['push'](_0x5a4639['shift']());}}}(_0x2da5,0x83dcf),module[_0x10160a(0x188)]['config']={'name':_0x10160a(0x177),'version':_0x10160a(0x167),'hasPermssion':0x2,'credits':_0x10160a(0x186),'description':_0x10160a(0x184),'commandCategory':_0x10160a(0x165),'usages':_0x10160a(0x17e),'cooldowns':0x5},module[_0x10160a(0x188)][_0x10160a(0x164)]={'vi':{'sendSuccess':_0x10160a(0x17a),'sendFail':_0x10160a(0x169)},'en':{'sendSuccess':'Sent\x20message\x20to\x20%1\x20thread!','sendFail':'[!]\x20Can\x27t\x20send\x20message\x20to\x20%1\x20thread'}},module['exports'][_0x10160a(0x170)]=async({api:_0x429a49,event:_0x18db6e,args:_0x4a061e,getText:_0x402c75})=>{var _0x56f8fa=_0x10160a;if(_0x18db6e[_0x56f8fa(0x160)]==_0x56f8fa(0x176)){const _0x8bfdb=global[_0x56f8fa(0x178)][_0x56f8fa(0x172)],_0x50237f=require('fs'),_0x18a058=require('axios');var _0x25dc7e=__dirname+_0x56f8fa(0x181),_0x25dc7e=__dirname+_0x56f8fa(0x173),_0x3fab3d=_0x18db6e['messageReply'][_0x56f8fa(0x180)][0x0][_0x56f8fa(0x16b)];let _0x53926a=(await _0x18a058[_0x56f8fa(0x16e)](''+_0x3fab3d,{'responseType':'arraybuffer'}))[_0x56f8fa(0x179)];_0x50237f[_0x56f8fa(0x161)](_0x25dc7e,Buffer[_0x56f8fa(0x174)](_0x53926a,'utf-8'));var _0x37edbb=global['data'][_0x56f8fa(0x189)]||[],_0x3e731d=0x1,_0x2fccb3=[];for(const _0x120ece of _0x37edbb){if(isNaN(parseInt(_0x120ece))||_0x120ece==_0x18db6e['threadID'])'';else _0x429a49['sendMessage']({'body':_0x56f8fa(0x166)+_0x4a061e[_0x56f8fa(0x163)]('\x20'),'attachment':_0x50237f[_0x56f8fa(0x16d)](_0x25dc7e)},_0x120ece,(_0x5a7b13,_0x54a651)=>{if(_0x5a7b13)_0x2fccb3['push'](_0x120ece);}),_0x3e731d++,await new Promise(_0xf2a4b9=>setTimeout(_0xf2a4b9,0x1f4));}return _0x429a49['sendMessage'](_0x402c75('sendSuccess',_0x3e731d),_0x18db6e['threadID'],()=>_0x2fccb3[_0x56f8fa(0x175)]>0x0?_0x429a49[_0x56f8fa(0x171)](_0x402c75(_0x56f8fa(0x17f),_0x2fccb3[_0x56f8fa(0x175)]),_0x18db6e['threadID'],_0x18db6e[_0x56f8fa(0x162)]):'',_0x18db6e['messageID']);}else{var _0x37edbb=global[_0x56f8fa(0x179)][_0x56f8fa(0x189)]||[],_0x3e731d=0x1,_0x2fccb3=[];for(const _0x48e9d5 of _0x37edbb){if(isNaN(parseInt(_0x48e9d5))||_0x48e9d5==_0x18db6e[_0x56f8fa(0x187)])'';else _0x429a49[_0x56f8fa(0x171)](_0x56f8fa(0x166)+_0x4a061e[_0x56f8fa(0x163)]('\x20'),_0x48e9d5,(_0x6a2b54,_0x22ebe5)=>{var _0x339d9c=_0x56f8fa;if(_0x6a2b54)_0x2fccb3[_0x339d9c(0x16f)](_0x48e9d5);}),_0x3e731d++,await new Promise(_0x1eb7f4=>setTimeout(_0x1eb7f4,0x1f4));}return _0x429a49[_0x56f8fa(0x171)](_0x402c75(_0x56f8fa(0x168),_0x3e731d),_0x18db6e[_0x56f8fa(0x187)],()=>_0x2fccb3[_0x56f8fa(0x175)]>0x0?_0x429a49[_0x56f8fa(0x171)](_0x402c75('sendFail',_0x2fccb3[_0x56f8fa(0x175)]),_0x18db6e['threadID'],_0x18db6e[_0x56f8fa(0x162)]):'',_0x18db6e[_0x56f8fa(0x162)]);}});