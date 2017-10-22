# mylazybone.py

# for i in concepts:
# 	print ('  <button type="button" class="btn btn-default concept" id="'+i+'" onClick="changeConcept(this.id)">' + i + '</button>')


concepts = ['health', 'teacher', 'water','happy','butterfly','help','dance','harvest', 'sing', 'beauty','laugh' ,'doctor'
,'freedom','growth','bird','idea']
result = "concept: {"

# Highland Puebla Nahuatl
# word_list = ['pak-tok','ta-mač-tih-keh','a-t','yol-paki','papalo-t','ki-palewi-a','mihtoti-a','takilot']

# Navajo
# word_list = ['shánah', 'báʼóltaʼí','tó','bízháneeʼ','kʼaalógii','iilyeed','azhish','ʼaakʼeed','hataał','nizhóní','anádloh','azeeʼííłʼíní','tʼáá jííkʼe','chʼil','tsídii','ajéí']

# Eastern Bolivian Guaraní
# word_list = ['tekowe-katu','poro-ᵐboe-a','ɨ','h-orɨ','pãna-pãna','ᵐborɨ','purae','ᵐbaʼrɨwo','purae','põra','puka','poãno-poãno-a','poi','kʷakʷa','wɨra','ɲono pɨa-pe']

# Dargwa
# word_list = ['тазаси', 'мугІялим', 'шин', 'талихІчевси разиси', 'къабулдан', 'кумек', 'улхъес', 'сабухъ', 'далайикес', 'вава', 'дукӀарикис', 'дяхънуша', 'хIуррият', 'халаиэс', 'арцан', 'пикри']

# Hungarian
# word_list = ['egészség','tanár','víz','boldog','pillangó','segít','táncol','arat','énekel','szépség','nevet','orvos','szabadság','növekedés','madár','ötlet']

# Spanshi
# word_list = ['salud','maestro','agua','feliz','mariposa','ayudar','bailar','cosecha','cantar','belleza','reír','médico','libertad','crecimiento','pájaro','idea']

# Abui
# word_list = ['rowa','tuong','took','kaang','kupak','tukai','luuk','saasan','yai','rielang','lal','dokter','lák','fok-fokdi','kuya','titing']

# Mandarin
# word_list = [ '健康','老师','水','高兴','蝴蝶','帮助','跳舞','收获','唱','美','笑','医生','自由','生长','鸟','主意']

# Ket
# word_list = ['ooŋ','siraʁats','ūl','dəɣasiŋ','kumlej','pomogat','tiˀŋ','doo','iˀl','aqta bingavet','dàʁ','peršep','boɣot','tijiŋ','keŋassel','aneŋ']

# Malayalam
# word_list = ['ആരോഗ്യം','അദ്ധ്യാപിക','വെള്ളം','ഇഷ്ടം','ചിത്രശലഭം','സഹായം','നൃത്തം','ശേഖരിയ്ക്കുക','പാടുക','സൗന്ദര്യം','ചിരി','വൈദ്യം','സ്വാതന്ത്ര്യം','പുരോഗതി','പക്ഷി','ഭാവം']

#
# word_list = ['noj qab nyob zoo','xib hwb','dej','zoo siab','npuj-npaim','pab','las voos','sau','hu nkauj','zoo nkauj','luag','thaj mom','tso','hlob','noog','tswv yim']

# سۆرانی
# word_list = ['تهندروستی','مامۆستا','ئاو','کهیف خۆش','پهروانه','یارمهتی','سهما','بهرههم','خواندن','جمال','خندیدن','پزشک','آزادی','رشد','پرنده','ایده']

# Wana
# word_list = ['omawi','ngguru','i','angginuk','yivivit','mudu','piniak','waniak','yamo','andu','ak','ngguru','bok','meriak','towe','enokweid']

# nyan
# word_list = ['purrpurn','miranu jinakata','warnayirti','ngarlu ngalypa','kapalipali','yilpimu jini','jurrka','kuru marna']

# South Central Dinka
# word_list = ['afya','mfundzi','madzi','furahi','popho','msada','fwiha','asa']

#
word_list = ['bozogo','morutintshi','maze','ipela','kankape','kyhusa','bina','bapala']
for word, concept in zip(word_list, concepts):
	result += '{}{}'.format(concept + ": ", "'" + word + "'") + ', '

print (result)

