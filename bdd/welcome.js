const a16_0x47f7e6=a16_0x3f47;(function(_0x2782d2,_0x42c8c4){const _0x332b91=a16_0x3f47,_0xbdc3a1=_0x2782d2();while(!![]){try{const _0x33109b=parseInt(_0x332b91(0x194))/0x1*(-parseInt(_0x332b91(0x196))/0x2)+-parseInt(_0x332b91(0x1a1))/0x3*(-parseInt(_0x332b91(0x1a0))/0x4)+parseInt(_0x332b91(0x197))/0x5*(parseInt(_0x332b91(0x188))/0x6)+-parseInt(_0x332b91(0x18b))/0x7+-parseInt(_0x332b91(0x182))/0x8+parseInt(_0x332b91(0x19a))/0x9+parseInt(_0x332b91(0x17e))/0xa;if(_0x33109b===_0x42c8c4)break;else _0xbdc3a1['push'](_0xbdc3a1['shift']());}catch(_0x35a9d1){_0xbdc3a1['push'](_0xbdc3a1['shift']());}}}(a16_0x5abe,0x2833c));const a16_0x11b0ab=(function(){let _0x305547=!![];return function(_0x156a0e,_0x559859){const _0x6f4af0=_0x305547?function(){const _0x1467bf=a16_0x3f47;if(_0x559859){const _0x443935=_0x559859[_0x1467bf(0x19d)](_0x156a0e,arguments);return _0x559859=null,_0x443935;}}:function(){};return _0x305547=![],_0x6f4af0;};}()),a16_0x3d6af5=a16_0x11b0ab(this,function(){const _0x2d4c39=a16_0x3f47;return a16_0x3d6af5[_0x2d4c39(0x190)]()[_0x2d4c39(0x183)](_0x2d4c39(0x17a))['toString']()[_0x2d4c39(0x186)](a16_0x3d6af5)[_0x2d4c39(0x183)](_0x2d4c39(0x17a));});a16_0x3d6af5(),require(a16_0x47f7e6(0x17b))[a16_0x47f7e6(0x185)]();const {Pool}=require('pg'),s=require(a16_0x47f7e6(0x189));var dbUrl=s[a16_0x47f7e6(0x18e)]?s[a16_0x47f7e6(0x18e)]:a16_0x47f7e6(0x19e);const proConfig={'connectionString':dbUrl,'ssl':{'rejectUnauthorized':![]}},pool=new Pool(proConfig),creerTableevents=async()=>{const _0x3a42a7=a16_0x47f7e6;try{await pool[_0x3a42a7(0x19f)](_0x3a42a7(0x17d)),console['log'](_0x3a42a7(0x193));}catch(_0x4139cd){console[_0x3a42a7(0x18d)]('Une\x20erreur\x20est\x20survenue\x20lors\x20de\x20la\x20création\x20de\x20la\x20table\x20\x27events\x27:',_0x4139cd);}};creerTableevents();async function attribuerUnevaleur(_0x1fca2e,_0x4999ee,_0xdf8831){const _0x5b9cb9=a16_0x47f7e6,_0x45ad5c=await pool[_0x5b9cb9(0x18a)]();try{const _0xae0b55=await _0x45ad5c[_0x5b9cb9(0x19f)]('SELECT\x20*\x20FROM\x20events\x20WHERE\x20jid\x20=\x20$1',[_0x1fca2e]),_0x2ea9e1=_0xae0b55[_0x5b9cb9(0x17f)][_0x5b9cb9(0x195)]>0x0;_0x2ea9e1?(await _0x45ad5c[_0x5b9cb9(0x19f)](_0x5b9cb9(0x18f)+_0x4999ee+_0x5b9cb9(0x180),[_0xdf8831,_0x1fca2e]),console[_0x5b9cb9(0x18c)](_0x5b9cb9(0x199)+_0x4999ee+_0x5b9cb9(0x19c)+_0xdf8831+_0x5b9cb9(0x192)+_0x1fca2e)):(await _0x45ad5c['query'](_0x5b9cb9(0x1a2)+_0x4999ee+')\x20VALUES\x20($1,\x20$2)',[_0x1fca2e,_0xdf8831]),console[_0x5b9cb9(0x18c)](_0x5b9cb9(0x19b)+_0x1fca2e+_0x5b9cb9(0x198)+_0x4999ee+'\x20ayant\x20la\x20valeur\x20'+_0xdf8831));}catch(_0x3b6298){console[_0x5b9cb9(0x18d)](_0x5b9cb9(0x181),_0x3b6298);}finally{_0x45ad5c[_0x5b9cb9(0x187)]();}};function a16_0x3f47(_0x1e3fcf,_0x3de4a7){const _0x124a58=a16_0x5abe();return a16_0x3f47=function(_0x3d6af5,_0x11b0ab){_0x3d6af5=_0x3d6af5-0x179;let _0x5abe39=_0x124a58[_0x3d6af5];return _0x5abe39;},a16_0x3f47(_0x1e3fcf,_0x3de4a7);}async function recupevents(_0x10c4c6,_0x24df74){const _0xc4c59=a16_0x47f7e6,_0x2fc5ed=await pool[_0xc4c59(0x18a)]();try{const _0x2d7e3e=await _0x2fc5ed[_0xc4c59(0x19f)](_0xc4c59(0x191)+_0x24df74+_0xc4c59(0x184),[_0x10c4c6]),_0x434790=_0x2d7e3e[_0xc4c59(0x17f)][_0xc4c59(0x195)]>0x0;return _0x434790?_0x2d7e3e['rows'][0x0][_0x24df74]:_0xc4c59(0x17c);}catch(_0x5c7136){console['error'](_0x5c7136);}finally{_0x2fc5ed['release']();}}module[a16_0x47f7e6(0x179)]={'attribuerUnevaleur':attribuerUnevaleur,'recupevents':recupevents};function a16_0x5abe(){const _0x30c1d4=['toString','SELECT\x20','\x20pour\x20le\x20jid\x20','La\x20table\x20\x27events\x27\x20a\x20été\x20créée\x20avec\x20succès.','13oCoorl','length','15946ujgcUv','77685msQWdd','\x20ajouté\x20avec\x20la\x20colonne\x20','La\x20colonne\x20','1481805fvJDfw','Nouveau\x20jid\x20','\x20a\x20été\x20actualisée\x20sur\x20','apply','postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9','query','980vtGXXV','1317YZHIVP','INSERT\x20INTO\x20events\x20(jid,\x20','exports','(((.+)+)+)+$','dotenv','non','\x0a\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20events\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20Id\x20serial\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20jid\x20text\x20UNIQUE,\x0a\x20\x20\x20\x20\x20\x20\x20\x20welcome\x20text\x20DEFAULT\x20\x27non\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20goodbye\x20text\x20DEFAULT\x20\x27non\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20antipromote\x20text\x20DEFAULT\x20\x27non\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20antidemote\x20text\x20DEFAULT\x20\x27non\x27\x0a\x20\x20\x20\x20\x20\x20);\x0a\x20\x20\x20\x20','2655270AuefoW','rows','\x20=\x20$1\x20WHERE\x20jid\x20=\x20$2','Erreur\x20lors\x20de\x20l\x27actualisation\x20de\x20events\x20:','2154000HYVCWs','search','\x20FROM\x20events\x20WHERE\x20jid\x20=\x20$1','config','constructor','release','54BUUOIV','../set','connect','979951eVmmXn','log','error','DATABASE_URL','UPDATE\x20events\x20SET\x20'];a16_0x5abe=function(){return _0x30c1d4;};return a16_0x5abe();}