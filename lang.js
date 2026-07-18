/**
 * FUTURE READY LEARNERS — SA TRANSLATIONS
 * =========================================
 * All UI strings and lesson content in 5 South African languages.
 * Import this file before any page script via <script src="lang.js"></script>
 * Usage: LANG.t('key') returns the string in the currently selected language.
 *
 * Languages: en | zu | st | xh | af
 * NOTE: Lesson content translations are accurate for common educational terms.
 * Mother-tongue speaker review recommended before full production rollout.
 */

const TRANSLATIONS = {

  // ── UI GLOBALS ────────────────────────────────────────────────────────
  choose_class:       { en:'Choose your class',      zu:'Khetha ikilasi lakho',       st:'Khetha sehlopha sa hao',      xh:'Khetha ibanga lakho',         af:'Kies jou klas' },
  choose_name:        { en:'Choose your name',       zu:'Khetha igama lakho',          st:'Khetha lebitso la hao',       xh:'Khetha igama lakho',          af:'Kies jou naam' },
  pick_class_first:   { en:'Pick your class first',  zu:'Qala ukhethe ikilasi',        st:'Khetha sehlopha pele',        xh:'Khetha ibanga kuqala',        af:'Kies eers jou klas' },
  select_class:       { en:'Select a class…',        zu:'Khetha ikilasi…',             st:'Khetha sehlopha…',            xh:'Khetha ibanga…',              af:'Kies \'n klas…' },
  select_name:        { en:'Select your name…',      zu:'Khetha igama lakho…',         st:'Khetha lebitso la hao…',      xh:'Khetha igama lakho…',         af:'Kies jou naam…' },
  lets_go:            { en:"Let's Go! 🚀",           zu:'Masihambe! 🚀',               st:'A re ye! 🚀',                 xh:'Masiye! 🚀',                  af:'Kom ons gaan! 🚀' },
  lets_explore:       { en:"Let's Explore! 🧠",      zu:'Asisebenzise! 🧠',            st:'A re hlahlobe! 🧠',           xh:'Masiphande! 🧠',              af:'Kom ons verken! 🧠' },
  lets_learn:         { en:"Let's Learn! 📱",        zu:'Asisifunde! 📱',              st:'A re ithute! 📱',             xh:'Masifunde! 📱',               af:"Kom ons leer! 📱" },
  lets_build:         { en:"Let's Build! 🛠️",        zu:'Masakheni! 🛠️',              st:'A re habe! 🛠️',              xh:'Masakhile! 🛠️',              af:"Kom ons bou! 🛠️" },
  mark_complete:      { en:'Mark Complete ✓',        zu:'Phelelise ✓',                 st:'Phethisa ✓',                  xh:'Phelelisa ✓',                 af:'Merk Voltooi ✓' },
  close:              { en:'Close',                  zu:'Vala',                        st:'Koala',                       xh:'Vala',                        af:'Sluit' },
  quick_check:        { en:'Quick Check',            zu:'Hlola Ngokushesha',           st:'Hloko e Potlakileng',         xh:'Hlola Ngokukhawuleza',        af:'Vinnige Kontrole' },
  week:               { en:'Week',                   zu:'Isonto',                      st:'Beke',                        xh:'Iveki',                       af:'Week' },
  xp_earned:          { en:'XP',                     zu:'XP',                          st:'XP',                          xh:'XP',                          af:'XP' },
  badges:             { en:'Badges',                 zu:'Izimpawu',                    st:'Dibetša',                     xh:'Iibheji',                     af:'Kentekens' },
  cannot_connect:     { en:'Cannot connect — check config.js', zu:'Ayikwazi ukuxhuma — hlola config.js', st:'E ke kgona ho hokahana — hlola config.js', xh:'Ayikwazi ukuqhagamshela — jonga config.js', af:'Kan nie verbind nie — kontroleer config.js' },
  follow_path:        { en:'Follow the path. Every stone is a new adventure in computers.', zu:'Landela indlela. Itshe ngalinye liyinganekwane entsha yamakhompiyutha.', st:'Latela tsela. Leswika le leng le leng ke tshepediso e ntjha ya diqomphutha.', xh:'Landela indlela. Ilitye ngalinye liyintshukumo entsha kwikhompyutha.', af:'Volg die pad. Elke klip is \'n nuwe avontuur in rekenaars.' },
  hi_there:           { en:'Hi',                     zu:'Sawubona',                    st:'Dumela',                      xh:'Molo',                        af:'Hallo' },
  school_name:        { en:'Future Ready Learners — South Africa', zu:'Abafundi Abalungele Ikusasa — Mzansi', st:'Baithuti ba Itokiselitseng Nako e Tlang — Afrika Borwa', xh:'Abafundi Abalungiselwe Ixesha Elizayo — Mzantsi Afrika', af:'Toekomsklaarleerders — Suid-Afrika' },
  loading:            { en:'Loading…',               zu:'Iyalayisha…',                 st:'E laola…',                    xh:'Iyalayisha…',                 af:'Laai…' },

  // ── HOME PAGE ─────────────────────────────────────────────────────────
  home_tagline:       { en:'Where Excellence Begins · South Africa', zu:'Lapho Ukupheleliseka Kuqala · Mzansi', st:'Moo Boitlhamelo bo Qalang · Afrika Borwa', xh:'Apho Ukuphucuka Kuqala · Mzantsi Afrika', af:'Waar Uitnemendheid Begin · Suid-Afrika' },
  home_subtitle:      { en:'Choose your module', zu:'Khetha isifundo sakho', st:'Khetha modutu wa hao', xh:'Khetha isifundo sakho', af:'Kies jou module' },
  teacher_view:       { en:'Teacher View',           zu:'Umbono Wothisha',             st:'Pono ya Moituti',             xh:'Umbono Katitshala',           af:'Onderwyser Aansig' },
  parent_portal:      { en:'Parent Portal',          zu:'Isango Labazali',             st:'Lekala la Batswadi',          xh:'Isango Labazali',             af:'Ouer Portaal' },
  school_os:          { en:'School OS',              zu:'Uhlelo Lwesikole',            st:'Molaodi wa Sekolo',           xh:'Inkqubo Yesikolo',            af:'Skool Bedryfstelsel' },
  coming_soon:        { en:'Coming Soon',            zu:'Kuyeza Maduze',               st:'E tla Haufinyane',            xh:'Kuyeza Kungekudala',          af:'Kom Binnekort' },
  teacher_guide:      { en:'Teacher Guide',          zu:'Isikhombisa Sothisha',        st:'Tataiso ya Moituti',         xh:'Ingcaciso Katitshala',        af:'Onderwyser Gids' },

  // ── MODULE NAMES ──────────────────────────────────────────────────────
  mod_coding:         { en:'Coding for Kids',        zu:'Ukubhala Ikhodi Yabantwana',  st:'Khoutu ya Bana',              xh:'Ikhowudi Yabantwana',         af:'Kodering vir Kinders' },
  mod_coding_desc:    { en:'Sequences, loops & computational thinking', zu:'Amagxathu, amaluphu nokuqonda kwekhompyutha', st:'Tatellano, diluphu le ho nahanela', xh:'Amanqanaba, amaluphu nokuqonda kwekhompyutha', af:'Reekse, lusse en rekenaardenke' },
  mod_robotics:       { en:'Robotics Explorers',     zu:'Abahloli Berobhothi',         st:'Baphekolodi ba Roboto',       xh:'Abaphandi Berobhothi',        af:'Robotika Verkenners' },
  mod_robotics_desc:  { en:'Path planning, sequences & real robots', zu:'Ukuhlelwa kwendlela, amagxathu nerobhothi', st:'Ho rala tsela, tatellano le diroboto', xh:'Ukucwangcisa indlela, amanqanaba neerobhothi', af:'Padbeplannung, reekse en regte robotte' },
  mod_ai:             { en:'AI Awareness',           zu:'Ukwazi nge-AI',               st:'Temohelo ya AI',              xh:'Ulwazi nge-AI',               af:'KI Bewustheid' },
  mod_ai_desc:        { en:'What AI is, how it learns & using it wisely', zu:'Ukuthi i-AI yini, ifunda kanjani nokuyisebenzisa kahle', st:'Hore AI ke eng, e ithuta joang le ho e sebedisa ka bohlale', xh:'Ukuba yi-AI yintoni, ifunda njani nokuisebenzisa ngokuhlakanipha', af:'Wat KI is, hoe dit leer en dit verstandig gebruik' },
  mod_digital:        { en:'Digital Literacy',       zu:'Ulwazi Lwezobuchwepheshe',    st:'Tsebo ya Dijithale',          xh:'Ulwazi Lwedijiithali',        af:'Digitale Geletterdheid' },
  mod_digital_desc:   { en:'Computer parts, typing, online safety & files', zu:'Izingxenye zekhompyutha, ukuthayipha nokuphepha ku-inthanethi', st:'Dikarolo tsa khoputara, ho taepa le tshireletso ya inthanete', xh:'Iindawo zekhompyutha, ukuchwetheza nokhuseleko lweintanethi', af:'Rekenaaronderdele, tik, aanlynveiligheid en lêers' },
  mod_internet:       { en:'Internet & Safety',      zu:'I-Inthanethi Nokuphepha',     st:'Inthanete le Tshireletso',    xh:'Iintanethi Nokhuseleko',      af:'Internet en Veiligheid' },

  // ── CODING FOR KIDS — LESSON TITLES & BLURBS ──────────────────────────
  c_w1l1_title:       { en:'What is a Computer?',   zu:'Ikhompyutha Iyini?',          st:'Khomphiutha ke Eng?',         xh:'Ikhompyutha Yintoni?',        af:'Wat is \'n Rekenaar?' },
  c_w1l1_blurb:       { en:'Meet the machine that follows instructions', zu:'Hlangana nemishini elandela imiyalelo', st:'Kopana le motšhene o latelang ditaelo', xh:'Hlangana nomtshini olandela imiyalelo', af:'Ontmoet die masjien wat instruksies volg' },
  c_w1l2_title:       { en:'Sequencing: Order Matters', zu:'Ukuhlelwa Kohlelo: Ukuphatha Kubalulekile', st:'Tatellano: Taelo e Bohlokwa', xh:'Ukuhlelwa: Uhlelo Lubalulekile', af:'Volgorde: Orde is Belangrik' },
  c_w1l2_blurb:       { en:'Put the steps in the right order', zu:'Beka amagxathu ngolunye uhlelo', st:'Beha mehato ka tatellano e nepahetseng', xh:'Beka amanyathelo ngolunye uhlelo', af:'Sit die stappe in die regte volgorde' },
  c_w2l1_title:       { en:'What is a Loop?',       zu:'Iluphu Yini?',                st:'Luphu ke Eng?',               xh:'Iluphu Yintoni?',             af:'Wat is \'n Lus?' },
  c_w2l1_blurb:       { en:'Doing the same thing again and again', zu:'Ukwenza into efanayo njalo', st:'Ho etsa ntho e le nngwe hape le hape', xh:'Ukwenza into efanayo uphinde uphinde', af:'Dieselfde ding weer en weer doen' },
  c_w2l2_title:       { en:'Unplugged Robot Game',  zu:'Umdlalo Werobhothi Ongaxhunyiwe', st:'Papadi ya Roboto e sa Hokahanyiwang', xh:'Umdlalo Werobhothi Ongaxhunyiwe', af:'Ontkoppelde Robot Spel' },
  c_w2l2_blurb:       { en:'Be the robot — follow the directions!', zu:'Yiba irobhothi — landela iziqondiso!', st:'Ba roboto — latela ditaelo!', xh:'Yiba irobhothi — landela imiyalelo!', af:'Wees die robot — volg die aanwysings!' },

  // ── CODING LESSON CONTENT ─────────────────────────────────────────────
  c_w1l1_p1: {
    en: 'A computer is a machine that follows <span class="highlight">instructions</span> — step by step, exactly as it\'s told.',
    zu: 'Ikhompyutha iyimishini elandela <span class="highlight">imiyalelo</span> — isigaba ngesigaba, ngcishe njengokutshelwa kwayo.',
    st: 'Khomphiutha ke motšhene o latelang <span class="highlight">ditaelo</span> — mohato ka mohato, kamoo e laelwang kateng.',
    xh: 'Ikhompyutha ngumtshini olandela <span class="highlight">imiyalelo</span> — inyathelo ngenyathelo, kanye njengoko itshiwo.',
    af: '\'n Rekenaar is \'n masjien wat <span class="highlight">instruksies</span> volg — stap vir stap, presies soos dit gesê word.'
  },
  c_w1l1_p2: {
    en: 'It can\'t think for itself. It needs a human to tell it exactly what to do, in exactly the right order. That\'s what coding is: giving a computer clear instructions.',
    zu: 'Ayikwazi ukucabanga ngokwayo. Idinga umuntu ukuthi ayitshele ngokuqondile ukuthi kufanele yenzeni, ngolunye uhlelo olulungile. Yilokhu ukukhodi okuyikho: ukunika ikhompyutha imiyalelo ecacile.',
    st: 'E ke kgone ho nahana ka boeena. E hloka motho ho e bolella ka nepo hore e etse eng, ka tatellano e nepahetseng. Ke seo khouthing e leng sona: ho fa khomphiutha ditaelo tse hlakehileng.',
    xh: 'Ayikwazi ukucinga ngokwayo. Idinga umntu ukuba ayixelele ngqo ukuba yenzeni, ngolunye uhlelo olusebahle. Yiyo leyo ikhowudi: ukunika ikhompyutha imiyalelo ecacileyo.',
    af: 'Dit kan nie self dink nie. Dit het \'n mens nodig om dit presies te vertel wat om te doen, in presies die regte volgorde. Dit is wat kodering is: om \'n rekenaar duidelike instruksies te gee.'
  },
  c_w1l1_p3: {
    en: 'Computers are everywhere — in phones, in cars, in traffic lights, even in some toys!',
    zu: 'Amakhompyutha asezindaweni zonke — ezifonini, ezimoteni, ezilayitini zemgwaqo, nakulokotha ezinye izindlalifa!',
    st: 'Dikhomphiutha di hohle — di difouno, dikoloi, ditshedi tsa mmila, le dithothobolo tse ding!',
    xh: 'Iikhompyutha zikwi ndawo zonke — kwiifowuni, kwiimoto, kwizibane zomgaqo, nokusemadlalweni athile!',
    af: 'Rekenaars is oral — in fone, in motors, in verkeersligte, selfs in sommige speelgoed!'
  },
  c_w1l1_q: {
    en: 'What does a computer need to do anything?',
    zu: 'Ikhompyutha idinga ini ukwenza noma yini?',
    st: 'Khomphiutha e hloka eng ho etsa ntho e nngwe le e nngwe?',
    xh: 'Ikhompyutha idinga ntoni ukwenza nantoni na?',
    af: 'Wat het \'n rekenaar nodig om enigiets te doen?'
  },
  c_w1l1_a0: { en:'Instructions from a person', zu:'Imiyalelo evela kumuntu', st:'Ditaelo tse tswang ho motho', xh:'Imiyalelo evela emntwini', af:'Instruksies van \'n persoon' },
  c_w1l1_a1: { en:'Sunlight', zu:'Ukukhanya kwelanga', st:'Lesedi la letsatsi', xh:'Ukukhanya kwelanga', af:'Sonlig' },
  c_w1l1_a2: { en:'To be plugged into water', zu:'Ukuxhunywa emanzini', st:'Ho kgomarelwa metsi', xh:'Ukuxhonywa emanzini', af:'Om in water ingesteek te word' },

  c_w1l2_p1: {
    en: 'A <span class="highlight">sequence</span> is a list of steps done in order. If you do the steps in the wrong order, things go wrong!',
    zu: 'I<span class="highlight">sequence</span> (uhlelo) luhlu lwamagxathu enziwa ngokulandelana. Uma wenza amagxathu ngolunye uhlelo olungalungile, izinto ziyaconsa!',
    st: '<span class="highlight">Tatellano</span> ke lenaane la mehato e etswang ka tatellano. Ha o etsa mehato ka tatellano e fosahetseng, dintho di a fosaheha!',
    xh: 'I<span class="highlight">sequence</span> luhlu lamanyathelo enziwa ngokulandelana. Ukuba wenza amanyathelo ngolunye uhlelo olungalunganga, izinto ziyonakala!',
    af: '\'n <span class="highlight">Reeks</span> is \'n lys stappe wat in volgorde gedoen word. As jy die stappe in die verkeerde volgorde doen, gaan dinge verkeerd!'
  },
  c_w1l2_p2: {
    en: 'Let\'s practise: put these steps for "brushing your teeth" in the correct order by tapping them in sequence.',
    zu: 'Masizame: beka la magxathu e "ukugeza amazinyo" ngolunye uhlelo olilungele ngokuwathepha ngokulandelana.',
    st: 'A re itlwaetse: beha mehato ena ya "ho hlapa meno" ka tatellano e nepahetseng ka ho e kgothatsa ka tatellano.',
    xh: 'Masizame: beka la manyathelo e "ukukhutsa amazinyo" ngolunye uhlelo olusebahle ngokuwachukumisa ngokulandelana.',
    af: 'Kom ons oefen: sit hierdie stappe vir "tande borsel" in die korrekte volgorde deur hulle in volgorde te tik.'
  },

  c_w2l1_p1: {
    en: 'A <span class="highlight">loop</span> is when a computer repeats the same instruction over and over, without you having to write it out every single time.',
    zu: 'I<span class="highlight">luphu</span> yilapho ikhompyutha iphinda imiyalelo efanayo njalo nanjalo, ngaphandle kokuba kudingeka ukuba uyibhale ngaso sonke isikhathi.',
    st: '<span class="highlight">Luphu</span> ke ha khomphiutha e pheta taelo e le nngwe hape le hape, ntle le ho e ngola ka nako e nngwe le e nngwe.',
    xh: 'I<span class="highlight">luphu</span> yilapho ikhompyutha iphinda imiyalelo efanayo uphinde uphinde, ngaphandle kokunyoba ukuba uyibhale ngalo lonke ixesha.',
    af: '\'n <span class="highlight">Lus</span> is wanneer \'n rekenaar dieselfde instruksie oor en oor herhaal, sonder dat jy dit elke keer moet uitskryf.'
  },
  c_w2l1_p2: {
    en: 'Think about clapping 5 times — instead of saying "clap" five separate times, a loop says "clap, 5 times" in one short instruction!',
    zu: 'Cabanga ngokuhlabela ihlombe izikhathi ezi-5 — esikhundleni sokusho "klap" izikhathi ezinhlanu ngezenhlukene, iluphu ithi "klap, izikhathi ezi-5" ngemiyalelo emfushane eyodwa!',
    st: 'Nahana ka ho opa diatla habedi tse 5 — ho e na le ho re "opa" habedi tse hlano ka nako tse fapaneng, luphu e re "opa, habedi tse 5" ka taelo e nngwe e khutswane!',
    xh: 'Cinga ngokuxhoma izandla izikhathi ezi-5 — endaweni yokuthi "xhoma" izikhathi ezintlanu ngasinye, iluphu ithi "xhoma, izikhathi ezi-5" ngemiyalelo emfutshane enye!',
    af: 'Dink aan klap 5 keer — in plaas van om "klap" vyf afsonderlike kere te sê, sê \'n lus "klap, 5 keer" in een kort instruksie!'
  },
  c_w2l1_q: {
    en: 'Why would a robot programmer use a loop instead of typing the same instruction many times?',
    zu: 'Kungani umphrojekthi werobhothi engasebenzisa iluphu esikhundleni sokuthayipha imiyalelo efanayo izikhathi eziningi?',
    st: 'Ke ka lebaka la eng hore mohlophisi wa roboto a ka sebedisa luphu ho e na le ho taipa taelo e le nngwe haholo?',
    xh: 'Kutheni umphrojekthi werobhothi engasebenzisa iluphu endaweni yokutayipha imiyalelo efanayo izikhathi ezininzi?',
    af: 'Waarom sou \'n robotprogrammeerder \'n lus gebruik in plaas van dieselfde instruksie baie keer te tik?'
  },
  c_w2l1_a0: { en:'It makes the robot louder', zu:'Yenza irobhothi ikhale kakhulu', st:'E etsa hore roboto e tle e bue ka maatla', xh:'Yenza irobhothi ibe nengxolo', af:'Dit maak die robot harder' },
  c_w2l1_a1: { en:'It saves time and avoids repeating instructions', zu:'Igcina isikhathi futhi igwema ukuphinda imiyalelo', st:'E boloka nako ebakeng le go phema go pheta ditaelo', xh:'Isindisa ixesha kwaye igwema ukuphinda imiyalelo', af:'Dit spaar tyd en vermy herhaling van instruksies' },
  c_w2l1_a2: { en:'It makes the robot heavier', zu:'Yenza irobhothi isinde kakhulu', st:'E etsa hore roboto e be boima', xh:'Yenza irobhothi isinde', af:'Dit maak die robot swaarder' },

  // ── SEQUENCE ACTIVITIES ───────────────────────────────────────────────
  seq_toothpaste:   { en:'Put toothpaste on the brush', zu:'Beka iphepha eziinyo ebrashini', st:'Bea phasthi ya meno setseng', xh:'Beka isiphasthi samazinyo ebrashini', af:'Sit tandepasta op die borsel' },
  seq_pickup:       { en:'Pick up the toothbrush',      zu:'Phakamisa ibrashi yamazinyo',    st:'Tshwara borosi ya meno',      xh:'Phakamisa ibrashi yamazinyo',     af:'Tel die tandeborsel op' },
  seq_brush:        { en:'Brush your teeth',            zu:'Geza amazinyo akho',             st:'Hlapa meno a hao',            xh:'Khutsa amazinyo akho',            af:'Borsel jou tande' },
  seq_rinse:        { en:'Rinse your mouth',            zu:'Hlanza umlomo wakho',            st:'Phahla molomo wa hao',        xh:'Khulula umlomo wakho',            af:'Spoel jou mond' },
  seq_forward:      { en:'Walk forward 3 steps',        zu:'Hamba phambili amagxathu amathathu', st:'Tsamaya pele mehato e meraro', xh:'Hamba phambili amanyathelo amathathu', af:'Stap 3 treë vorentoe' },
  seq_turn_right:   { en:'Turn right',                  zu:'Jika ngakwesokudla',             st:'Retela ho ja',               xh:'Jika ngasekunene',               af:'Draai regs' },
  seq_turn_left:    { en:'Turn left',                   zu:'Jika ngakwesokhohlo',            st:'Retela ho ngohola',          xh:'Jika ngasekhohlo',               af:'Draai links' },
  seq_forward2:     { en:'Walk forward 2 steps',        zu:'Hamba phambili amagxathu amabili', st:'Tsamaya pele mehato e mmedi', xh:'Hamba phambili amanyathelo amabili', af:'Stap 2 treë vorentoe' },
  seq_drop_hint:    { en:'Tap steps below to add them here', zu:'Thepha amagxathu ngezansi ukuwengeza lapha', st:'Kgothatsa mehato ka tlase ho e eketsa mona', xh:'Chukumisa amanyathelo ngezantsi ukuwaengeza apha', af:'Tik stappe hieronder om hulle hier te voeg' },

  // ── BADGE NAMES ───────────────────────────────────────────────────────
  badge_first_steps: { en:'First Steps Explorer', zu:'Umhloli Wezinyathelo Zokuqala', st:'Mophekolodi wa Mehato ya Pele', xh:'Umphandi Wamanyathelo Okuqala', af:'Eerste Stappe Verkenner' },
  badge_seq_star:    { en:'Sequence Star',         zu:'Inkanyezi Yohlelo',            st:'Naledi ya Tatellano',           xh:'Inkwenkwezi Yohlelo',            af:'Volgorde Ster' },

  // ── PROGRESS / TOAST ──────────────────────────────────────────────────
  great_job:        { en:'Great job! 🎉',    zu:'Wenze kahle! 🎉',    st:'O etse hantle! 🎉', xh:'Wenze kakuhle! 🎉',  af:'Goeie werk! 🎉' },
  badge_earned:     { en:'Badge earned',     zu:'Impawu itholakele',   st:'Dibetša e fumanwe',  xh:'Ibheji ifunyenwe',   af:'Kenteken verdien' },
  // ── ROBOTICS ──────────────────────────────────────────────────────────
  r_w1l1_title: { en:'What is a Robot?',        zu:'Irobhothi Iyini?',            st:'Roboto ke Eng?',              xh:'Irobhothi Yintoni?',          af:'Wat is 'n Robot?' },
  r_w1l1_blurb: { en:'Machines that sense, think and act', zu:'Imishini ezwa, icabange futhi isebenze', st:'Dimetšhene tse utlwang, di nahana le go sebetsa', xh:'Iimishini ezivayo, ezicingayo nezisebenzayo', af:'Masjiene wat waarneem, dink en optree' },
  r_w1l2_title: { en:'Plan a Path',              zu:'Hlela Indlela',               st:'Rala Tsela',                  xh:'Cwangcisa Indlela',           af:'Beplan 'n Pad' },
  r_w1l2_blurb: { en:'Plot the moves before pressing go', zu:'Hlela izinyathelo ngaphambi kokucindezelwa kokuhamba', st:'Rala mehato pele ho kgothatsa ho tsamaya', xh:'Cwangcisa amanyathelo ngaphambi kokucofa ukuya', af:'Beplan die bewegings voor jy begin' },
  r_w2l1_title: { en:'Loops Make It Easier',    zu:'Amaluphu Akwenza Kube Lula',  st:'Diluphu Di a Nolofatsa',     xh:'Amaluphu Ayenza Kube Lula',   af:'Lusse Maak Dit Makliker' },
  r_w2l1_blurb: { en:'Repeat instructions without repeating yourself', zu:'Phinda imiyalelo ngaphandle kokuziphinda', st:'Pheta ditaelo ntle le go ipheta', xh:'Phinda imiyalelo ngaphandle kokuziphinda', af:'Herhaal instruksies sonder om jouself te herhaal' },
  r_w2l2_title: { en:'Robot Challenge: Obstacle Course', zu:'Inselele Yerobhothi: Umjaho Wezithiyo', st:'Kgwetlho ya Roboto: Tshebediso ya Dithibelo', xh:'Inselelo Yerobhothi: Indlela Enomaqhina', af:'Robot Uitdaging: Hindernisbaan' },
  r_w2l2_blurb: { en:'Put everything together!', zu:'Hlanganisa konke!',            st:'Kopanya ntho tsohle!',         xh:'Hlanganisa yonke into!',       af:'Sit alles saam!' },
  mode_unplugged: { en:'📝 Unplugged — No robot needed', zu:'📝 Ngaphandle Kukagesi — Ayidingeki irobhothi', st:'📝 Ntle le Motlakase — Ha ho roboto e hlokahalang', xh:'📝 Ngaphandle Kombane — Ayifuneki irobhothi', af:'📝 Ontkoppeld — Geen robot nodig' },
  mode_robot:    { en:'🤖 With Robot Kit',       zu:'🤖 Nesethi Yerobhothi',       st:'🤖 Le Sete sa Roboto',        xh:'🤖 Neset Yerobhothi',         af:'🤖 Met Robot Stel' },

  // ── AI AWARENESS ──────────────────────────────────────────────────────
  ai_w1l1_title: { en:'What is AI?',             zu:'I-AI Yini?',                  st:'AI ke Eng?',                  xh:'I-AI Yintoni?',               af:'Wat is KI?' },
  ai_w1l1_blurb: { en:'Machines that learn — not just follow', zu:'Imishini efunda — hhayi ukukulandela nje', st:'Dimetšhene tse ithutang — eseng ho latela feela', xh:'Iimishini ezifundayo — hazilandeli nje', af:'Masjiene wat leer — nie net volg nie' },
  ai_w1l2_title: { en:'AI in Your Life',         zu:'I-AI Empilweni Yakho',        st:'AI Bophelong ba Hao',         xh:'I-AI Ebomini Bakho',          af:'KI in Jou Lewe' },
  ai_w1l2_blurb: { en:'You already use AI every day', zu:'Usebenzisa i-AI nsuku zonke', st:'O sebedisa AI letsatsi le leng le leng', xh:'Usebenzisa i-AI yonke imihla', af:'Jy gebruik KI elke dag al' },
  ai_w2l1_title: { en:'How AI Learns',           zu:'I-AI Ifunda Kanjani',         st:'AI e Ithuta Joang',           xh:'I-AI Ifunda Njani',           af:'Hoe KI Leer' },
  ai_w2l1_blurb: { en:'Training data and pattern-finding', zu:'Idatha yokuqeqesha nokufica imigqa', st:'Datha ya koetliso le ho fumana mehlala', xh:'Idatha yoqeqesho nokukhangela iimfanekiso', af:'Opleidingsdata en patroonvinding' },
  ai_w2l2_title: { en:'AI vs Human Thinking',   zu:'I-AI vs Ukucabanga Kwabantu', st:'AI vs Ho Nahana ha Batho',    xh:'I-AI vs Ukucinga Kwabantu',   af:'KI vs Menslike Denke' },
  ai_w2l2_blurb: { en:'What AI does well — and what it doesn't', zu:'Ukuthi i-AI yenzani kahle — nalokho engakwenzi', st:'Seo AI e se etsang hantle — le seo e sa se etseng', xh:'Ukuba i-AI yenzani kakuhle — nento engayenziyo', af:'Wat KI goed doen — en wat nie' },
  sort_ai:       { en:'🤖 Uses AI',              zu:'🤖 Isebenzisa i-AI',          st:'🤖 E sebedisa AI',            xh:'🤖 Isebenzisa i-AI',          af:'🤖 Gebruik KI' },
  sort_fixed:    { en:'⚙️ Fixed Rules',           zu:'⚙️ Imithetho Eqinile',        st:'⚙️ Melao e Tsitsitseng',      xh:'⚙️ Imithetho Eqinileyo',      af:'⚙️ Vaste Reëls' },

  // ── DIGITAL LITERACY ──────────────────────────────────────────────────
  dl_w1l1_title: { en:'Parts of a Computer',    zu:'Izingxenye Zekhompyutha',     st:'Dikarolo tsa Khomphiutha',    xh:'Iindawo Zekhompyutha',        af:'Onderdele van 'n Rekenaar' },
  dl_w1l1_blurb: { en:'Learn the names and jobs of each part', zu:'Funda amagama nezinto zenziwa yizingxenye ngayinye', st:'Ithuta mabitso le mesebetsi ya karolo e nngwe le e nngwe', xh:'Funda amagama nemisebenzi yendawo nganye', af:'Leer die name en take van elke onderdeel' },
  dl_w1l2_title: { en:'Keyboard & Typing Basics', zu:'Isihluthulelo Nezisekelo Zokuthayipha', st:'Kiboto le Motheo wa ho Taipa', xh:'Ikhibhodi Neziseko Zokuchwetheza', af:'Sleutelbord en Tikbeginsels' },
  dl_w1l2_blurb: { en:'Know your keys and type your name', zu:'Yazi izinkinobho zakho futhi uthayiphe igama lakho', st:'Tseba dinotlelo tsa hao mme u taipe lebitso la hao', xh:'Yazi izikhiye zakho uchwetheze igama lakho', af:'Ken jou sleutels en tik jou naam' },
  dl_w2l1_title: { en:'Staying Safe Online',    zu:'Ukuhlala Uphephile Ku-Inthanethi', st:'Ho Dula O Sirelehile Inthaneteng', xh:'Ukuhlala Ukhuselekile Kwi-Intanethi', af:'Veilig Aanlyn Bly' },
  dl_w2l1_blurb: { en:'Know the rules of the digital world', zu:'Yazi imithetho yezwe ledijithali', st:'Tseba melao ya lefatše la dijithale', xh:'Yazi imithetho yehlabathi ledijithali', af:'Ken die reëls van die digitale wêreld' },
  dl_w2l2_title: { en:'Files & Folders',        zu:'Amafayela Namafolda',         st:'Difaele le Difolara',         xh:'Iifayile Neefowuldha',        af:'Lêers en Vouers' },
  dl_w2l2_blurb: { en:'Creating, saving and organising digital work', zu:'Ukudala, ukulondoloza nokuhlela umsebenzi wedijithali', st:'Ho etsa, ho boloka le ho hlophisa mosebetsi wa dijithale', xh:'Ukudala, ukulondoloza nokuhlela umsebenzi wedijithali', af:'Digitale werk skep, stoor en organiseer' },

  // ── PARENT PORTAL ─────────────────────────────────────────────────────
  pp_welcome:    { en:'Welcome, Parents',        zu:'Wamukelekile, Bazali',        st:'Amohelehile, Batswadi',       xh:'Wamkelekile, Bazali',         af:'Welkom, Ouers' },
  pp_select:     { en:'Select your child to view their progress', zu:'Khetha umntwana wakho ukuze ubone intuthuko yabo', st:'Khetha ngwana wa hao ho bona katlego ya bona', xh:'Khetha umntwana wakho ukubona intlalontle yabo', af:'Kies jou kind om hul vordering te sien' },
  pp_view:       { en:'View Progress 📊',        zu:'Buka Intuthuko 📊',           st:'Sheba Katlego 📊',            xh:'Jonga Inkqubela 📊',          af:'Sien Vordering 📊' },
  pp_switch:     { en:'Switch to a different child', zu:'Shintsha komunye umntwana', st:'Fetohela ngwana o motle',   xh:'Tshintshela komnye umntwana', af:'Skakel na 'n ander kind' },
  pp_overall:    { en:'Overall Progress',        zu:'Intuthuko Yonke',             st:'Katlego Kaofela',             xh:'Inkqubela Yonke',             af:'Algehele Vordering' },
  pp_completed:  { en:'Completed Lessons',       zu:'Izifundo Ezifinyelele',       st:'Lithuto tse Phethilweng',     xh:'Izifundo Ezicompletilweyo',   af:'Voltooide Lesse' },
  pp_report:     { en:'📄 View Report Card',     zu:'📄 Buka Ikhadi Leziphumo',    st:'📄 Sheba Karete ya Diphuputso', xh:'📄 Jonga Ikhadi Lengxelo',  af:'📄 Sien Rapportkoevert' },
  pp_no_lessons: { en:'No lessons completed yet — encourage them to start the journey! 🚀', zu:'Azikho izifundo eziqediwe — bakhuthaze ukuba baqale uhambo! 🚀', st:'Ha ho lithuto tse phethilweng — ba kgothatse ho qala leeto! 🚀', xh:'Azikho izifundo ezigqityiweyo — bakhuthaze ukuba baqale uhambo! 🚀', af:'Geen lesse voltooi nie — moedig hulle aan om die reis te begin! 🚀' },

  // ── TEACHER DASHBOARD ─────────────────────────────────────────────────
  td_title:      { en:'Teacher Dashboard',       zu:'Ibhodi Lothisha',             st:'Sethala sa Moituti',          xh:'Ibhodi Katitshala',           af:'Onderwyser Paneelbord' },
  td_students:   { en:'Students',                zu:'Abafundi',                    st:'Baithuti',                    xh:'Abafundi',                    af:'Leerders' },
  td_avg:        { en:'Avg. Lessons Done',       zu:'Izifundo Ezisetshenzisiwe Kwendle', st:'Lithuto tse Averejeng tse Phethilweng', xh:'Izifundo Ezenziweyo Ngokugqibelela', af:'Gem. Lesse Klaar' },
  td_refresh:    { en:'Refresh',                 zu:'Vuselela',                    st:'Tsosolosa',                   xh:'Vuselela',                    af:'Verfris' },

  // ── SCHOOL OS ─────────────────────────────────────────────────────────
  os_title:      { en:'School Operating System', zu:'Uhlelo Lokusebenza Lwesikole', st:'Tshebediso ya Sekolo',       xh:'Inkqubo Yesikolo',            af:'Skool Bedryfstelsel' },
  os_dashboard:  { en:'Dashboard',               zu:'Ibhodi Lokuqaphela',          st:'Sethala sa Tlhahlobo',        xh:'Ibhodi Lokuphatha',           af:'Paneelbord' },
  os_timetable:  { en:'Timetable',               zu:'Uhlelo Lwesikhathi',          st:'Lenaane la Nako',             xh:'Ixesha Lesifundo',            af:'Rooster' },
  os_homework:   { en:'Homework',                zu:'Umsebenzi Wasekhaya',         st:'Mosebetsi wa Hae',            xh:'Umsebenzi Wasekhaya',         af:'Huiswerk' },
  os_notices:    { en:'Notices',                 zu:'Izaziso',                     st:'Ditlhahiso',                  xh:'Izaziso',                     af:'Kennisgewings' },
  os_attendance: { en:'Attendance',              zu:'Ukuphakama',                  st:'Boteng',                      xh:'Ukuphakama',                  af:'Bywoning' },
  os_students:   { en:'Students',                zu:'Abafundi',                    st:'Baithuti',                    xh:'Abafundi',                    af:'Leerders' },
  os_reports:    { en:'Reports',                 zu:'Imibiko',                     st:'Dipego',                      xh:'Iingxelo',                    af:'Verslae' },
  os_enter:      { en:'Enter System',            zu:'Ngena Ohlelweni',             st:'Kena Tshebedisong',           xh:'Ngena Enkqubeni',             af:'Betree Stelsel' },

};

// ── LANGUAGE ENGINE ───────────────────────────────────────────────────────

const LANG = {
  current: localStorage.getItem('frl_lang') || 'en',

  set(code) {
    this.current = code;
    localStorage.setItem('frl_lang', code);
    document.dispatchEvent(new CustomEvent('langchange', { detail: code }));
  },

  t(key) {
    const row = TRANSLATIONS[key];
    if (!row) return key;
    return row[this.current] || row['en'] || key;
  },

  // Apply translations to all elements with data-i18n attribute
  apply() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const attr = el.getAttribute('data-i18n-attr');
      const val = this.t(key);
      if (attr) {
        el.setAttribute(attr, val);
      } else {
        el.innerHTML = val;
      }
    });
    // Update toggle button states
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === this.current);
    });
  }
};

// ── LANGUAGE TOGGLE BAR HTML ──────────────────────────────────────────────
// Call insertLangBar() in any page to add the toggle bar after <body> opens

function insertLangBar() {
  const bar = document.createElement('div');
  bar.id = 'langBar';
  bar.innerHTML = `
    <style>
      #langBar {
        background: var(--navy, #1A2744);
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 6px;
        padding: 8px 16px;
        flex-wrap: wrap;
        position: sticky;
        top: 0;
        z-index: 999;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
      }
      .lang-btn {
        background: rgba(255,255,255,0.1);
        border: 2px solid rgba(255,255,255,0.2);
        border-radius: 20px;
        padding: 5px 12px;
        font-family: 'Baloo 2', sans-serif;
        font-weight: 700;
        font-size: 12px;
        color: rgba(255,255,255,0.7);
        cursor: pointer;
        transition: all 0.15s ease;
        white-space: nowrap;
      }
      .lang-btn:hover { background: rgba(255,255,255,0.2); color: white; }
      .lang-btn.active {
        background: var(--orange, #F97316);
        border-color: var(--orange, #F97316);
        color: white;
      }
      .lang-label {
        font-size: 11px;
        color: rgba(255,255,255,0.4);
        font-family: 'Inter', sans-serif;
        margin-right: 4px;
      }
    </style>
    <span class="lang-label">🌍</span>
    <button class="lang-btn" data-lang="en" onclick="LANG.set('en');LANG.apply()">English</button>
    <button class="lang-btn" data-lang="zu" onclick="LANG.set('zu');LANG.apply()">IsiZulu</button>
    <button class="lang-btn" data-lang="st" onclick="LANG.set('st');LANG.apply()">Sesotho</button>
    <button class="lang-btn" data-lang="xh" onclick="LANG.set('xh');LANG.apply()">IsiXhosa</button>
    <button class="lang-btn" data-lang="af" onclick="LANG.set('af');LANG.apply()">Afrikaans</button>
  `;
  // Fix Sesotho button — was cut off above, fix inline
  bar.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.dataset.lang === 'st') {
      btn.onclick = function() { LANG.set('st'); LANG.apply(); };
    }
  });
  document.body.insertBefore(bar, document.body.firstChild);
  // Mark current active
  LANG.apply();
}

// Auto-insert when DOM ready
document.addEventListener('DOMContentLoaded', insertLangBar);
