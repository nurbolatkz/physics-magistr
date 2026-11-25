// Exceptions and extra practice for each of the 10 rule cards (same order as RULE_CARDS).
// notes: [rule in Russian, English example]. drill: [question, options, answer (zero based), explanation in Russian].
const EXCEPTIONS = [
// 1. Tense clues
{notes:[
 ['Глаголы состояния не ставят в Continuous: know, understand, believe, like, love, hate, want, need, own, belong, seem, mean.','I know the answer (не am knowing).'],
 ['Have = «иметь» — без -ing; have = есть/пить/принимать — можно -ing.','She has a car. / We are having lunch.'],
 ['Think = «считать» — Simple; think = «обдумывать» — Continuous. То же с taste, smell, see.','I think you are right. / I am thinking about it.'],
 ['Расписание (поезда, уроки) — Present Simple даже про будущее.','The train leaves at 6:30 tomorrow.'],
 ['Договорённость на будущее — Present Continuous.','I am meeting Aliya tonight.'],
 ['How long + глагол состояния — Present Perfect, а не Perfect Continuous.','How long have you known him?'],
 ['Орфография -s: study → studies, watch → watches, go → goes, но play → plays.','She studies physics.'],
 ['Shall I/we…? — предложение помощи.','Shall I open the window?']
],drill:[
 ['I ___ the answer now.',['know','am knowing','have knowing','knows'],0,'Know — глагол состояния, не бывает в Continuous.'],
 ['She ___ a new car.',['is owning','owns','own','has owning'],1,'Own (владеть) — глагол состояния, плюс -s после she.'],
 ['We ___ dinner at the moment.',['have','has','are having','had'],2,'Have dinner = «ужинать» — это действие, поэтому Continuous возможен.'],
 ['The train ___ at 6:30 tomorrow morning.',['leaves','is leave','has left','leaving'],0,'Расписание — Present Simple даже о будущем.'],
 ['I ___ about your offer. Give me a minute.',['think','am thinking','thinks','thought'],1,'Think = «обдумываю сейчас» — Continuous.'],
 ['I ___ you are right.',['think','am thinking','thinking','am think'],0,'Think = «считаю, моё мнение» — Simple.'],
 ['She ___ physics on Mondays.',['studys','studies','studyes','study'],1,'Согласная + y → ies: studies.'],
 ['How long ___ you ___ each other?',['do / know','are / knowing','have / known','did / know'],2,'Know нельзя в Continuous, поэтому Present Perfect: have known.'],
 ['This soup ___ delicious.',['is tasting','tastes','taste','has tasting'],1,'Taste = «иметь вкус» — состояние, Simple.'],
 ['I ___ my friend at 6 tonight; we have already booked a table.',['meet','am meeting','will be meet','met'],1,'Договорённость на будущее — Present Continuous.'],
 ['___ I open the window? It is hot in here.',['Shall','Will','Do','Am'],0,'Shall I…? — вежливое предложение помощи.'],
 ['This bag ___ to my sister.',['is belonging','belongs','belong','belonging'],1,'Belong — глагол состояния, только Simple.']
]},
// 2. Past Simple vs Present Perfect
{notes:[
 ['Just, already, yet, ever, never, recently, so far, since — Present Perfect.','I have just finished.'],
 ['Ago, yesterday, last…, in 2010, when…? — Past Simple.','I came two years ago. When did you come?'],
 ['Yet — в вопросах и отрицаниях в конце; already — в утверждениях в середине.','Have you finished yet? I have already finished.'],
 ['Been = съездил и вернулся; gone = уехал и ещё там.','He has gone to Astana (он сейчас там).'],
 ['Умерший человек / закончившийся период — Past Simple.','Abai wrote many poems.'],
 ['It is the first time… — Present Perfect.','It is the first time I have eaten sushi.'],
 ['Раньше другого прошлого действия — Past Perfect (had + V3).','When we arrived, the train had left.'],
 ['Неправильные глаголы: go-went-gone, see-saw-seen, write-wrote-written, read-read-read, begin-began-begun.','I have written / I wrote.']
],drill:[
 ['I have ___ finished my homework.',['yet','already','ago','last'],1,'Already в утверждении стоит между have и V3.'],
 ['Have you finished the report ___?',['yet','already','ago','since'],0,'Yet — в вопросах и отрицаниях, в конце предложения.'],
 ['They moved here two years ___.',['ago','since','for','already'],0,'Ago = «тому назад», с Past Simple.'],
 ['When ___ you ___ the news?',['have / heard','did / hear','had / heard','do / heard'],1,'Вопрос When…? о прошлом — Past Simple.'],
 ['Tom is not here. He has ___ to the library.',['been','gone','went','go'],1,'Gone — ушёл и ещё там. Been — был и вернулся.'],
 ['I have never ___ such a beautiful place.',['see','saw','seen','seeing'],2,'Have + третья форма: see-saw-seen.'],
 ['Shakespeare ___ many plays.',['has written','wrote','writes','had write'],1,'Автор умер — его жизнь закончена, поэтому Past Simple.'],
 ['This is the first time I ___ sushi.',['eat','ate','have eaten','am eating'],2,'It/This is the first time… + Present Perfect.'],
 ['By the time we arrived, the train ___.',['left','has left','had left','leaves'],2,'Поезд ушёл ещё раньше нашего прибытия — Past Perfect.'],
 ['I ___ him since we were at school.',['know','knew','have known','am knowing'],2,'Since + глагол состояния — Present Perfect.'],
 ['She ___ to Paris three times so far.',['went','has been','goes','had gone'],1,'So far (до сих пор) — Present Perfect; been = съездила и вернулась.'],
 ['We ___ the lab work yesterday.',['have begun','began','begun','begin'],1,'Yesterday — Past Simple: begin-began-begun.']
]},
// 3. Articles
{notes:[
 ['Смотри на звук: an hour, an honest man (h не читается); a university, a European, a one-way ticket (звук «й»/«в»).','an hour / a university'],
 ['The: реки, моря, океаны, горные цепи, пустыни, группы островов.','the Thames, the Pacific, the Alps, the Sahara'],
 ['The: страны со словами States, Kingdom, Republic и во множественном числе.','the USA, the UK, the Netherlands'],
 ['Без артикля: большинство стран, городов, континентов, одиночные горы и озёра.','Kazakhstan, Almaty, Asia, Everest, Lake Baikal'],
 ['Профессия после be — a/an.','She is an engineer.'],
 ['Без артикля: приёмы пищи, by bus/train, go to bed/school/work (по назначению).','have breakfast, by bus'],
 ['The + фамилия во множ. числе = вся семья; имена людей — без артикля.','the Smiths / Aigerim'],
 ['Превосходная степень и порядковые — the.','the best, the first']
],drill:[
 ['We waited for ___ hour.',['a','an','the','—'],1,'H в hour не читается, слово начинается с гласного звука — an.'],
 ['He is ___ honest man.',['a','an','the','—'],1,'Honest читается /ˈɒnɪst/ — гласный звук, поэтому an.'],
 ['She bought ___ European car.',['a','an','the','—'],0,'European начинается со звука «й» — a.'],
 ['___ Thames flows through London.',['A','An','The','—'],2,'Реки — с the.'],
 ['They live in ___ Kazakhstan.',['a','an','the','—'],3,'Большинство стран — без артикля.'],
 ['She has visited ___ United States twice.',['a','an','the','—'],2,'States в названии — нужен the.'],
 ['___ Everest is the highest mountain in the world.',['A','An','The','—'],3,'Одиночная гора — без артикля.'],
 ['We went skiing in ___ Alps.',['a','an','the','—'],2,'Горная цепь — с the.'],
 ['My father is ___ engineer.',['a','an','the','—'],1,'Профессия — a/an; engineer с гласного звука — an.'],
 ['I go to university by ___ bus.',['a','an','the','—'],3,'By bus / by train — без артикля.'],
 ['We had ___ breakfast at eight.',['a','an','the','—'],3,'Приёмы пищи — без артикля.'],
 ['___ Smiths have invited us to dinner.',['A','An','The','—'],2,'The + фамилия во множественном числе = семья.'],
 ['___ Lake Baikal is very deep.',['A','An','The','—'],3,'Lake + название — без артикля.'],
 ['___ Pacific Ocean is the largest ocean.',['A','An','The','—'],2,'Океаны — с the.']
]},
// 4. Nouns and numerals
{notes:[
 ['Неправильные множественные: man-men, woman-women, foot-feet, tooth-teeth, mouse-mice, person-people, child-children.','two women'],
 ['Научные слова: phenomenon-phenomena, criterion-criteria, analysis-analyses, thesis-theses, nucleus-nuclei.','these phenomena'],
 ['Одинаковые в ед. и мн.: sheep, fish, deer, series, species.','three sheep'],
 ['Только мн. число: police, scissors, trousers, glasses — глагол are.','The police are here.'],
 ['Неисчисляемые: advice, news, information, furniture, luggage, equipment, research, knowledge, homework. News is!','The news is good.'],
 ['-f/-fe → -ves: knife-knives, leaf-leaves, wife-wives (но roof-roofs).','two knives'],
 ['Притяжательный: students’ (мн. на -s — только апостроф), children’s, women’s (неправильные — ’s).','the children’s toys'],
 ['Составные: главное слово меняется — mothers-in-law, passers-by.','two mothers-in-law'],
 ['Числа: two hundred / three thousand (без -s); hundreds of / thousands of (неточно, с -s и of).','two hundred people / hundreds of people'],
 ['Даты и дроби: the twenty-second of May; 1/3 = one third, 2/3 = two thirds, 0.5 = (zero) point five.','two thirds']
],drill:[
 ['The plural of “phenomenon” is ___.',['phenomenons','phenomena','phenomenas','phenomenes'],1,'Греческое слово: phenomenon → phenomena.'],
 ['The plural of “analysis” is ___.',['analysises','analysis','analyses','analysi'],2,'-is → -es: analysis → analyses, thesis → theses.'],
 ['The news ___ good today.',['are','is','were','have'],1,'News — неисчисляемое, хотя на -s. Глагол is.'],
 ['Can you give me some ___?',['advices','advice','an advice','many advice'],1,'Advice — неисчисляемое: без -s и без an.'],
 ['The police ___ looking for the thief.',['is','are','was','has'],1,'Police — всегда множественное: are.'],
 ['I saw three ___ in the field.',['sheeps','sheep','sheepes','sheepies'],1,'Sheep одинаково в ед. и мн. числе.'],
 ['The plural of “knife” is ___.',['knifes','knives','knifs','knivs'],1,'-fe → -ves: knives.'],
 ['The rooms of the students = the ___ rooms.',['student’s','students’','students’s','studentss’'],1,'Мн. число на -s — ставим только апостроф: students’.'],
 ['The ___ toys are on the floor.',['childrens’','children’s','childs’','childrens'],1,'Children не оканчивается на -s, поэтому ’s: children’s.'],
 ['The plural of “mother-in-law” is ___.',['mother-in-laws','mothers-in-law','mothers-in-laws','mother-ins-law'],1,'В составном слове меняется главное слово: mothers-in-law.'],
 ['About two ___ students took the exam.',['hundreds','hundred','hundreds of','hundred of'],1,'После точного числа hundred без -s и без of.'],
 ['___ tourists visit Almaty every year.',['Thousand','Thousand of','Thousands of','A thousands'],2,'Неточное количество: thousands of.'],
 ['2/3 is read as ___.',['two third','two thirds','second three','two threes'],1,'Если числитель больше 1, знаменатель с -s: two thirds.'],
 ['My birthday is on the ___ of May.',['twenty-two','twenty-second','twentieth-two','twenty-twoth'],1,'Даты — порядковые числа: twenty-second.'],
 ['There ___ a lot of furniture in the room.',['are','is','were','have'],1,'Furniture — неисчисляемое, глагол в ед. числе.']
]},
// 5. Modals and passive
{notes:[
 ['Mustn’t = нельзя; don’t have to / needn’t = не обязательно.','You mustn’t smoke. You don’t have to come.'],
 ['Can в других временах → be able to.','I will be able to swim.'],
 ['Could — общая способность в прошлом.','I could swim when I was five.'],
 ['Модальный + have + V3 — о прошлом: should have (упрёк), must have (уверенность), can’t have (не может быть).','You should have told me.'],
 ['Ought to — с to (исключение среди модальных).','You ought to rest.'],
 ['Make/let + глагол без to, но в пассиве make — с to!','They made him work. → He was made to work.'],
 ['Пассив в процессе: is being + V3; Present Perfect пассив: has been + V3.','The road is being repaired.'],
 ['Have something done — кто-то делает для тебя.','I had my hair cut.'],
 ['Be born — всегда пассив.','She was born in 2001.']
],drill:[
 ['You ___ smoke here. It is forbidden.',['mustn’t','don’t have to','needn’t','may'],0,'Запрет — mustn’t.'],
 ['Tomorrow is Sunday, so I ___ get up early.',['mustn’t','don’t have to','can’t','couldn’t'],1,'Нет необходимости — don’t have to.'],
 ['I ___ swim when I was five.',['can','could','must','may'],1,'Умение в прошлом — could.'],
 ['After this course you ___ speak English well.',['can','will can','will be able to','could'],2,'У can нет будущего времени — will be able to.'],
 ['You ___ have told me earlier! Now it is too late.',['should','must','can','will'],0,'Should have + V3 — упрёк: надо было, но не сделал.'],
 ['He is not answering. He ___ have forgotten his phone.',['must','mustn’t','ought','needn’t'],0,'Must have + V3 — «наверняка» о прошлом.'],
 ['You ought ___ see a doctor.',['—','to','for','be'],1,'Ought всегда с to.'],
 ['He was made ___ the work again.',['do','to do','doing','done'],1,'В пассиве make требует to: was made to do.'],
 ['The bridge ___ at the moment.',['is repairing','is being repaired','repairs','has repaired'],1,'Пассив в процессе: is being + V3.'],
 ['The new laboratory ___ already ___.',['has / built','has been / built','was / build','is / building'],1,'Present Perfect Passive: has been + V3.'],
 ['I ___ my hair cut yesterday.',['had','made','did','was'],0,'Have something done: had my hair cut.'],
 ['Einstein ___ in 1879.',['born','was born','is born','has born'],1,'Be born — пассив: was born.'],
 ['You ___ bring food; there will be plenty.',['needn’t','mustn’t','can’t','shouldn’t to'],0,'Needn’t — нет необходимости.']
]},
// 6. Conditionals and mood
{notes:[
 ['If I were… — were для всех лиц в нереальном условии.','If I were you, I would go.'],
 ['Unless = if not.','We will be late unless we hurry.'],
 ['When, as soon as, before, after, until + настоящее время о будущем (как после if).','When she comes, I will tell her.'],
 ['Wish + Past Simple — жалею о настоящем; wish + Past Perfect — о прошлом; wish + would — раздражение.','I wish I had studied.'],
 ['Смешанный: if + Past Perfect, would + глагол (now).','If I had slept, I would feel better now.'],
 ['Инверсия без if: Had I known… = If I had known…; Were I… ; Should you…','Had I known, I would have come.'],
 ['It’s (high) time / I’d rather you / as if + Past Simple.','It’s time we went home.'],
 ['Suggest/insist/demand that + голая форма (subjunctive).','He suggested that she take a rest.'],
 ['Повелительное наклонение: глагол без to; отрицание — Don’t.','Close the door. Don’t be late.']
],drill:[
 ['If I ___ you, I would accept the offer.',['am','were','will be','been'],1,'Нереальное условие: If I were you.'],
 ['We will be late ___ we hurry.',['if','unless','when','because'],1,'Unless = if not.'],
 ['I wish I ___ harder last year.',['studied','had studied','would study','study'],1,'Сожаление о прошлом: wish + Past Perfect.'],
 ['When she ___, I will tell her the news.',['comes','will come','came','would come'],0,'После when о будущем — Present Simple, не will.'],
 ['It’s high time we ___ home.',['go','went','will go','gone'],1,'It’s high time + Past Simple.'],
 ['He talks as if he ___ everything.',['know','knew','will know','known'],1,'As if + Past Simple — нереальность.'],
 ['___ I known, I would have helped.',['If','Had','Have','Did'],1,'Инверсия: Had I known = If I had known.'],
 ['If I had taken the medicine yesterday, I ___ better now.',['feel','would feel','would have felt','will feel'],1,'Смешанный тип: прошлое условие → результат сейчас (now).'],
 ['The teacher suggested that he ___ the test again.',['takes','take','took','will take'],1,'Suggest that + голая форма: take.'],
 ['___ the door, please.',['Close','Closes','To close','Closing'],0,'Повелительное наклонение — глагол без to.'],
 ['I’d rather you ___ here.',['stay','stayed','will stay','staying'],1,'I’d rather you + Past Simple.'],
 ['I wish my neighbour ___ making so much noise.',['stops','would stop','stopped','had stop'],1,'Раздражение — wish + would.'],
 ['I will wait here until you ___ back.',['will come','come','came','would come'],1,'После until о будущем — Present Simple.']
]},
// 7. Gerund, infinitive, participle
{notes:[
 ['Look forward to / be used to / object to — здесь to это предлог, поэтому -ing.','I look forward to seeing you.'],
 ['Used to do = раньше делал; be used to doing = привык.','I used to play. I am used to getting up early.'],
 ['Stop doing = бросить; stop to do = остановиться, чтобы…','He stopped smoking. He stopped to smoke.'],
 ['Remember/forget doing = помнить, что делал; remember to do = не забыть сделать.','Remember to lock the door.'],
 ['+ -ing: enjoy, avoid, mind, finish, suggest, give up, can’t help, keep.','Would you mind opening…?'],
 ['+ to: want, hope, decide, agree, refuse, manage, plan, would like.','She managed to pass.'],
 ['Let/make + глагол без to.','Let me go.'],
 ['too + прил. + to; прил. + enough + to.','too young to drive / old enough to vote'],
 ['Причастие II (V3) — пассивное значение; Having + V3 — действие раньше.','a broken window; Having finished, he left.']
],drill:[
 ['I look forward to ___ you.',['see','seeing','to see','seen'],1,'Look forward to — to предлог, нужна -ing форма.'],
 ['He stopped ___ because it was bad for his health.',['to smoke','smoking','smoke','smoked'],1,'Stop doing — бросить привычку.'],
 ['On the way home, we stopped ___ some bread.',['buying','to buy','buy','bought'],1,'Stop to do — остановиться, чтобы сделать.'],
 ['Remember ___ the door when you leave.',['locking','to lock','lock','locked'],1,'Remember to do — не забыть сделать в будущем.'],
 ['I remember ___ this film as a child.',['to watch','watching','watch','watched'],1,'Remember doing — помнить, что делал в прошлом.'],
 ['My parents let me ___ late.',['stay','to stay','staying','stayed'],0,'Let + глагол без to.'],
 ['She is used to ___ up early.',['get','getting','got','gets'],1,'Be used to + -ing — «привыкла».'],
 ['I used to ___ football at school.',['play','playing','played','plays'],0,'Used to + голый глагол — «раньше делал».'],
 ['Would you mind ___ the window?',['open','to open','opening','opened'],2,'Mind + -ing.'],
 ['She managed ___ the exam.',['pass','passing','to pass','passed'],2,'Manage + to.'],
 ['The window ___ by the ball was repaired.',['breaking','broken','broke','to break'],1,'Окно разбили — пассивное значение, Participle II.'],
 ['___ the work, he went home.',['Having finished','Finished','Have finished','To finishing'],0,'Having + V3 — сначала закончил, потом ушёл.'],
 ['He is too young ___ a car.',['drive','driving','to drive','for drive'],2,'Too + прилагательное + to-инфинитив.'],
 ['I can’t help ___ when I see him.',['laugh','to laugh','laughing','laughed'],2,'Can’t help + -ing — не могу удержаться.']
]},
// 8. Prepositions
{notes:[
 ['At night, at the weekend, at Christmas — но in the morning/evening.','at night / in the morning'],
 ['Конкретное утро/день — on.','on Monday morning, on the morning of 5 May'],
 ['Next, last, this, every — без предлога.','I will see you next Friday.'],
 ['Arrive in (город, страна), arrive at (здание, место), arrive home — без предлога.','arrive in Almaty / at the station'],
 ['On time = вовремя (точно); in time = успеть заранее.','The train was on time.'],
 ['By = не позже; until = до (продолжается до).','Submit it by Friday. Wait until 5.'],
 ['During + существительное; for + длительность; while + предложение.','during the lecture'],
 ['At home, at work, at university; on the bus/train, in a car/taxi; get off the bus, get out of a car.','at home / on the bus'],
 ['Зависимые предлоги: depend on, good at, interested in, afraid of, consist of, listen to, wait for, different from, responsible for.','It depends on you.']
],drill:[
 ['I usually read ___ night.',['in','on','at','by'],2,'At night — исключение (но in the evening).'],
 ['I will see you ___ next Friday.',['on','at','in','—'],3,'Перед next/last/this/every предлог не нужен.'],
 ['We arrived ___ Almaty late at night.',['to','at','in','on'],2,'Arrive in + город. Arrive to — ошибка.'],
 ['Please be ___ time for the lecture.',['in','on','at','by'],1,'On time = точно вовремя.'],
 ['He was born ___ the morning of 5 May.',['in','on','at','by'],1,'Конкретное утро (с датой) — on.'],
 ['It depends ___ the weather.',['of','from','on','in'],2,'Depend on.'],
 ['She is good ___ mathematics.',['in','at','on','for'],1,'Good at.'],
 ['Water consists ___ hydrogen and oxygen.',['from','of','in','with'],1,'Consist of.'],
 ['Please submit the essay ___ Friday.',['until','by','since','for'],1,'By = не позже срока.'],
 ['I fell asleep ___ the lecture.',['for','during','while','since'],1,'During + существительное.'],
 ['She got ___ the bus near the university.',['off','out of','from','down'],0,'Get off the bus / get out of a car.'],
 ['My sister is ___ home now.',['in','at','on','to'],1,'At home.'],
 ['We meet our friends ___ the weekend.',['in','at','on','by'],1,'At the weekend (британский вариант).'],
 ['This method is different ___ the old one.',['of','from','than','with'],1,'Different from.']
]},
// 9. Comparisons and adverbs
{notes:[
 ['Неправильные: good-better-best, bad-worse-worst, little-less-least, much/many-more-most, far-further-furthest.','the best day'],
 ['Удвоение: big-bigger, hot-hotter; -y → -ier: easy-easier, happy-happiest.','hotter, easier'],
 ['Усиление сравнения: much/far/a lot + comparative (не very).','much better'],
 ['as … as; not as/so … as; the more…, the better…','The more you read, the more you know.'],
 ['Good — прилагательное, well — наречие. Hard/fast/late — без -ly; hardly = едва, lately = недавно.','He works hard. I can hardly hear.'],
 ['Friendly, lovely, lonely, silly — прилагательные (нет наречия на -ly).','in a friendly way'],
 ['После look, feel, taste, smell, sound, seem — прилагательное.','It tastes delicious.'],
 ['Частотные наречия: перед смысловым глаголом, но после be и после первого вспомогательного.','She is always late. I have never seen…'],
 ['-ing — вызывает чувство; -ed — человек чувствует.','a boring film / I am bored']
],drill:[
 ['This is the ___ day of my life.',['goodest','best','better','most good'],1,'Good — better — the best.'],
 ['My cold is ___ today than yesterday.',['bad','badder','worse','worst'],2,'Bad — worse — the worst.'],
 ['Today is ___ than yesterday.',['hoter','hotter','more hot','hottest'],1,'Короткое слово на гласная+согласная: удваиваем t.'],
 ['He works very ___.',['hard','hardly','hardy','harden'],0,'Hard — и прилагательное, и наречие.'],
 ['I can ___ hear you; please speak louder.',['hard','hardly','harder','hardest'],1,'Hardly = едва, почти не.'],
 ['She speaks English very ___.',['good','well','goodly','best'],1,'Наречие от good — well.'],
 ['This soup tastes ___.',['deliciously','delicious','more deliciously','delicacy'],1,'После taste — прилагательное.'],
 ['The ___ you study, the better your results.',['much','more','most','many'],1,'The more…, the better…'],
 ['My brother is not as tall ___ me.',['than','as','like','so'],1,'Not as … as.'],
 ['This test is ___ easier than the last one.',['very','much','more','most'],1,'Усилить сравнение: much easier (не very easier).'],
 ['He ___ late for class.',['always is','is always','always be','be always'],1,'После be наречие частоты стоит после глагола.'],
 ['I ___ such a film.',['have seen never','have never seen','never have seen','seen never have'],1,'Наречие после первого вспомогательного: have never seen.'],
 ['The film was so ___ that we left early.',['bored','boring','bore','boredly'],1,'Фильм вызывает скуку — boring.'],
 ['She smiled at me in a ___ way.',['friendly','friendlily','friend','friendily'],0,'Friendly — прилагательное; говорим in a friendly way.'],
 ['Have you seen him ___?',['late','lately','later','latest'],1,'Lately = в последнее время.']
]},
// 10. Pronouns and relatives
{notes:[
 ['Its = «его/её» (о предмете), it’s = it is.','The dog wagged its tail.'],
 ['Абсолютные: mine, yours, his, hers, ours, theirs — без существительного после.','This book is mine.'],
 ['Возвратные: myself, yourself, himself, ourselves, yourselves, themselves; each other = друг друга.','Enjoy yourselves! They help each other.'],
 ['Where — для места; whom — после предлога (to whom); that не ставим после запятой и после предлога.','the city where I was born'],
 ['Everybody, somebody, nobody, each + глагол в ед. числе.','Everybody is ready.'],
 ['В английском одно отрицание: don’t … anybody = nobody.','I don’t know anybody.'],
 ['Neither — ни один из двух; either — любой из двух; none — ни один из многих.','Neither answer is correct.'],
 ['Some — в просьбах и предложениях; any — в вопросах и отрицаниях.','Could I have some water?'],
 ['This/these — рядом, that/those — далеко.','Look at those birds over there.']
],drill:[
 ['The dog wagged ___ tail.',['it’s','its','its’','it'],1,'Its без апострофа — притяжательное; it’s = it is.'],
 ['This book is ___.',['my','mine','me','mine’s'],1,'Без существительного после — абсолютная форма mine.'],
 ['He hurt ___ while playing football.',['him','his','himself','hisself'],2,'Сам себя — himself (hisself не существует).'],
 ['Enjoy ___, children!',['yourself','yourselves','you','your'],1,'Обращаемся ко многим — yourselves.'],
 ['This is the city ___ I was born.',['which','who','where','whose'],2,'Место — where.'],
 ['The man to ___ I spoke was a professor.',['who','whom','which','that'],1,'После предлога о человеке — whom.'],
 ['Everybody ___ ready for the exam.',['are','is','were','be'],1,'Everybody — глагол в единственном числе.'],
 ['I don’t know ___ here.',['nobody','anybody','somebody','none'],1,'Одно отрицание: don’t … anybody.'],
 ['___ of the two answers is correct; both are wrong.',['Either','Neither','None','Both'],1,'Ни один из двух — neither.'],
 ['Could I have ___ water, please?',['any','some','no','many'],1,'В вежливой просьбе — some.'],
 ['Look at ___ birds over there!',['this','that','those','these'],2,'Много и далеко — those.'],
 ['___ is that bag? — It is Aigerim’s.',['Who','Whose','Which','Whom'],1,'Чей? — Whose.'],
 ['Aliya and Dana are friends; they often call ___.',['themselves','each other','theirselves','itself'],1,'Друг друга — each other.']
]}
];
