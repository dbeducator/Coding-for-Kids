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
  choose_class:       { en:'Choose your class',      zu:'Khetha ikilasi lakho',       st:'Khetha sehlopha sa hao',      xh:'Khetha ibanga lakho',         af:'Kies jou klas', ve:'Khetha kilasi yau', ts:'Hlawula kihlasi ya wena' },
  choose_name:        { en:'Choose your name',       zu:'Khetha igama lakho',          st:'Khetha lebitso la hao',       xh:'Khetha igama lakho',          af:'Kies jou naam', ve:'Khetha dzina lau', ts:'Hlawula vito ra wena' },
  pick_class_first:   { en:'Pick your class first',  zu:'Qala ukhethe ikilasi',        st:'Khetha sehlopha pele',        xh:'Khetha ibanga kuqala',        af:'Kies eers jou klas', ve:'Thoma u khetha kilasi', ts:'Hlawula kihlasi ku sungula' },
  select_class:       { en:'Select a class…',        zu:'Khetha ikilasi…',             st:'Khetha sehlopha…',            xh:'Khetha ibanga…',              af:'Kies \'n klas…' },
  select_name:        { en:'Select your name…',      zu:'Khetha igama lakho…',         st:'Khetha lebitso la hao…',      xh:'Khetha igama lakho…',         af:'Kies jou naam…', ve:'Khetha dzina lau...', ts:'Hlawula vito ra wena...' },
  lets_go:            { en:"Let's Go! 🚀",           zu:'Masihambe! 🚀',               st:'A re ye! 🚀',                 xh:'Masiye! 🚀',                  af:'Kom ons gaan! 🚀', ve:'A ri ye! 🚀', ts:'A hi yeni! 🚀' },
  lets_explore:       { en:"Let's Explore! 🧠",      zu:'Asisebenzise! 🧠',            st:'A re hlahlobe! 🧠',           xh:'Masiphande! 🧠',              af:'Kom ons verken! 🧠', ve:'A ri todomele! 🧠', ts:'A hi laviseni! 🧠' },
  lets_learn:         { en:"Let's Learn! 📱",        zu:'Asisifunde! 📱',              st:'A re ithute! 📱',             xh:'Masifunde! 📱',               af:"Kom ons leer! 📱" },
  lets_build:         { en:"Let's Build! 🛠️",        zu:'Masakheni! 🛠️',              st:'A re habe! 🛠️',              xh:'Masakhile! 🛠️',              af:"Kom ons bou! 🛠️" },
  mark_complete:      { en:'Mark Complete ✓',        zu:'Phelelise ✓',                 st:'Phethisa ✓',                  xh:'Phelelisa ✓',                 af:'Merk Voltooi ✓', ve:'Khwathisedza ✓', ts:'Hetisa ✓' },
  close:              { en:'Close',                  zu:'Vala',                        st:'Koala',                       xh:'Vala',                        af:'Sluit', ve:'Vhala', ts:'Pfala' },
  quick_check:        { en:'Quick Check',            zu:'Hlola Ngokushesha',           st:'Hloko e Potlakileng',         xh:'Hlola Ngokukhawuleza',        af:'Vinnige Kontrole', ve:'Hlamusela Nga Fhuraha', ts:'Hlayisa Ku Hatlisa' },
  week:               { en:'Week',                   zu:'Isonto',                      st:'Beke',                        xh:'Iveki',                       af:'Week', ve:'Vhege', ts:'Vhiki' },
  xp_earned:          { en:'XP',                     zu:'XP',                          st:'XP',                          xh:'XP',                          af:'XP', ve:'XP', ts:'XP' },
  badges:             { en:'Badges',                 zu:'Izimpawu',                    st:'Dibetša',                     xh:'Iibheji',                     af:'Kentekens', ve:'Zwidangalelo', ts:'Tibheji' },
  cannot_connect:     { en:'Cannot connect — check config.js', zu:'Ayikwazi ukuxhuma — hlola config.js', st:'E ke kgona ho hokahana — hlola config.js', xh:'Ayikwazi ukuqhagamshela — jonga config.js', af:'Kan nie verbind nie — kontroleer config.js', ve:'A zwi konadzei u amba', ts:'A swi koteki ku humelela' },
  follow_path:        { en:'Follow the path. Every stone is a new adventure in computers.', zu:'Landela indlela. Itshe ngalinye liyinganekwane entsha yamakhompiyutha.', st:'Latela tsela. Leswika le leng le leng ke tshepediso e ntjha ya diqomphutha.', xh:'Landela indlela. Ilitye ngalinye liyintshukumo entsha kwikhompyutha.', af:'Volg die pad. Elke klip is \'n nuwe avontuur in rekenaars.' },
  hi_there:           { en:'Hi',                     zu:'Sawubona',                    st:'Dumela',                      xh:'Molo',                        af:'Hallo', ve:'Ndaa', ts:'Xewani' },
  school_name:        { en:'Future Ready Learners — South Africa', zu:'Abafundi Abalungele Ikusasa — Mzansi', st:'Baithuti ba Itokiselitseng Nako e Tlang — Afrika Borwa', xh:'Abafundi Abalungiselwe Ixesha Elizayo — Mzantsi Afrika', af:'Toekomsklaarleerders — Suid-Afrika', ve:'Vhafunzi Vho Lungelelaho - Afrika Tshipembe', ts:'Vafundzi Lavo Lungheleriweke - Afrika Dzonga' },
  loading:            { en:'Loading…',               zu:'Iyalayisha…',                 st:'E laola…',                    xh:'Iyalayisha…',                 af:'Laai…', ve:'Ndi tshi loda...', ts:'Ku layisha...' },

  // ── HOME PAGE ─────────────────────────────────────────────────────────
  home_tagline:       { en:'Where Excellence Begins · South Africa', zu:'Lapho Ukupheleliseka Kuqala · Mzansi', st:'Moo Boitlhamelo bo Qalang · Afrika Borwa', xh:'Apho Ukuphucuka Kuqala · Mzantsi Afrika', af:'Waar Uitnemendheid Begin · Suid-Afrika', ve:'Ndi tshi duvha Kushumisele - Afrika Tshipembe', ts:'Ku Sungula Ku Hetiseka - Afrika Dzonga' },
  home_subtitle:      { en:'Choose your module', zu:'Khetha isifundo sakho', st:'Khetha modutu wa hao', xh:'Khetha isifundo sakho', af:'Kies jou module', ve:'Khetha moduli wau', ts:'Hlawula moduli wa wena' },
  teacher_view:       { en:'Teacher View',           zu:'Umbono Wothisha',             st:'Pono ya Moituti',             xh:'Umbono Katitshala',           af:'Onderwyser Aansig', ve:'Vhono ha Mudzinisi', ts:'Mbono wa Mufundzisi' },
  parent_portal:      { en:'Parent Portal',          zu:'Isango Labazali',             st:'Lekala la Batswadi',          xh:'Isango Labazali',             af:'Ouer Portaal', ve:'Ikholo ya Vathanzi', ts:'Portal ya Vahahani' },
  school_os:          { en:'School OS',              zu:'Uhlelo Lwesikole',            st:'Molaodi wa Sekolo',           xh:'Inkqubo Yesikolo',            af:'Skool Bedryfstelsel', ve:'Khodi ya Tshikolo', ts:'OS ya Xikolo' },
  coming_soon:        { en:'Coming Soon',            zu:'Kuyeza Maduze',               st:'E tla Haufinyane',            xh:'Kuyeza Kungekudala',          af:'Kom Binnekort', ve:'I tshi da Ngoho', ts:'Ku ta Khale' },
  teacher_guide:      { en:'Teacher Guide',          zu:'Isikhombisa Sothisha',        st:'Tataiso ya Moituti',         xh:'Ingcaciso Katitshala',        af:'Onderwyser Gids', ve:'Murula wa Mudzinisi', ts:'Tinhlamuselo ta Mufundzisi' },

  // ── MODULE NAMES ──────────────────────────────────────────────────────
  mod_coding:         { en:'Coding for Kids',        zu:'Ukubhala Ikhodi Yabantwana',  st:'Khoutu ya Bana',              xh:'Ikhowudi Yabantwana',         af:'Kodering vir Kinders', ve:'Ukhoutu kha Vhana', ts:'Khowudi ya Vana' },
  mod_coding_desc:    { en:'Sequences, loops & computational thinking', zu:'Amagxathu, amaluphu nokuqonda kwekhompyutha', st:'Tatellano, diluphu le ho nahanela', xh:'Amanqanaba, amaluphu nokuqonda kwekhompyutha', af:'Reekse, lusse en rekenaardenke', ve:'Zwitevhedzwa, miluphu na mielewano', ts:'Matirhiselo, miluphu ni makungu' },
  mod_robotics:       { en:'Robotics Explorers',     zu:'Abahloli Berobhothi',         st:'Baphekolodi ba Roboto',       xh:'Abaphandi Berobhothi',        af:'Robotika Verkenners', ve:'Vhatolodeli va Robhoti', ts:'Valavisi va Robhoti' },
  mod_robotics_desc:  { en:'Path planning, sequences & real robots', zu:'Ukuhlelwa kwendlela, amagxathu nerobhothi', st:'Ho rala tsela, tatellano le diroboto', xh:'Ukucwangcisa indlela, amanqanaba neerobhothi', af:'Padbeplannung, reekse en regte robotte', ve:'Tshikepe tsha ndzila, zwitevhedzwa na marobhoti', ts:'Kulavisisa ndzila, matirhiselo ni tirobhoti' },
  mod_ai:             { en:'AI Awareness',           zu:'Ukwazi nge-AI',               st:'Temohelo ya AI',              xh:'Ulwazi nge-AI',               af:'KI Bewustheid', ve:'Ku Pfesesa AI', ts:'Ku Twisisa AI' },
  mod_ai_desc:        { en:'What AI is, how it learns & using it wisely', zu:'Ukuthi i-AI yini, ifunda kanjani nokuyisebenzisa kahle', st:'Hore AI ke eng, e ithuta joang le ho e sebedisa ka bohlale', xh:'Ukuba yi-AI yintoni, ifunda njani nokuisebenzisa ngokuhlakanipha', af:'Wat KI is, hoe dit leer en dit verstandig gebruik', ve:'AI ndi mini, i dzihenela hani na u i shumisa', ts:'AI i yini, yi dyondzela njani ni ku yi tirhisa' },
  mod_digital:        { en:'Digital Literacy',       zu:'Ulwazi Lwezobuchwepheshe',    st:'Tsebo ya Dijithale',          xh:'Ulwazi Lwedijiithali',        af:'Digitale Geletterdheid', ve:'Vhuthu ha Dijithali', ts:'Vutivi bya Dijithali' },
  mod_digital_desc:   { en:'Computer parts, typing, online safety & files', zu:'Izingxenye zekhompyutha, ukuthayipha nokuphepha ku-inthanethi', st:'Dikarolo tsa khoputara, ho taepa le tshireletso ya inthanete', xh:'Iindawo zekhompyutha, ukuchwetheza nokhuseleko lweintanethi', af:'Rekenaaronderdele, tik, aanlynveiligheid en lêers', ve:'Zwipirani zwa khomphiutha na vhuthu', ts:'Switirhisiwa swa khomphyuta ni vutivi' },
  mod_internet:       { en:'Internet & Safety',      zu:'I-Inthanethi Nokuphepha',     st:'Inthanete le Tshireletso',    xh:'Iintanethi Nokhuseleko',      af:'Internet en Veiligheid', ve:'Inthanete na Vhudzimi', ts:'Inthanete ni Vutshembeki' },

  // ── CODING FOR KIDS — LESSON TITLES & BLURBS ──────────────────────────
  c_w1l1_title:       { en:'What is a Computer?',   zu:'Ikhompyutha Iyini?',          st:'Khomphiutha ke Eng?',         xh:'Ikhompyutha Yintoni?',        af:'Wat is \'n Rekenaar?' },
  c_w1l1_blurb:       { en:'Meet the machine that follows instructions', zu:'Hlangana nemishini elandela imiyalelo', st:'Kopana le motšhene o latelang ditaelo', xh:'Hlangana nomtshini olandela imiyalelo', af:'Ontmoet die masjien wat instruksies volg', ve:'Thananani na mushini u tevhelaho', ts:'Tivana na muxini lowu landzelaka' },
  c_w1l2_title:       { en:'Sequencing: Order Matters', zu:'Ukuhlelwa Kohlelo: Ukuphatha Kubalulekile', st:'Tatellano: Taelo e Bohlokwa', xh:'Ukuhlelwa: Uhlelo Lubalulekile', af:'Volgorde: Orde is Belangrik', ve:'Kutevhedzana: Murado u Ndeme', ts:'Kutevhelana: Nawu wu Ntokoto' },
  c_w1l2_blurb:       { en:'Put the steps in the right order', zu:'Beka amagxathu ngolunye uhlelo', st:'Beha mehato ka tatellano e nepahetseng', xh:'Beka amanyathelo ngolunye uhlelo', af:'Sit die stappe in die regte volgorde', ve:'Vheka zwitevhedzwa nga ndzila yo linganaho', ts:'Veka switehi eka nawu lowu lulameke' },
  c_w2l1_title:       { en:'What is a Loop?',       zu:'Iluphu Yini?',                st:'Luphu ke Eng?',               xh:'Iluphu Yintoni?',             af:'Wat is \'n Lus?' },
  c_w2l1_blurb:       { en:'Doing the same thing again and again', zu:'Ukwenza into efanayo njalo', st:'Ho etsa ntho e le nngwe hape le hape', xh:'Ukwenza into efanayo uphinde uphinde', af:'Dieselfde ding weer en weer doen', ve:'U ita zwithu zwo fanaho hafhu', ts:'Ku endla swilo swo fanaka hi makanziya' },
  c_w2l2_title:       { en:'Unplugged Robot Game',  zu:'Umdlalo Werobhothi Ongaxhunyiwe', st:'Papadi ya Roboto e sa Hokahanyiwang', xh:'Umdlalo Werobhothi Ongaxhunyiwe', af:'Ontkoppelde Robot Spel', ve:'Mutambo wa Robhoti Asina Gesi', ts:'Mutambo wa Robhoti Lowu Nga Ri na Korente' },
  c_w2l2_blurb:       { en:'Be the robot — follow the directions!', zu:'Yiba irobhothi — landela iziqondiso!', st:'Ba roboto — latela ditaelo!', xh:'Yiba irobhothi — landela imiyalelo!', af:'Wees die robot — volg die aanwysings!', ve:'Vha robhoti - tevhelani zwivhidziso!', ts:'Va robhoti - landzelela swileriso!' },

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
  seq_toothpaste:   { en:'Put toothpaste on the brush', zu:'Beka iphepha eziinyo ebrashini', st:'Bea phasthi ya meno setseng', xh:'Beka isiphasthi samazinyo ebrashini', af:'Sit tandepasta op die borsel', ve:'Vhea tipeyisiti ya meno phasitela', ts:'Veka tipasta ya mayin'we' },
  seq_pickup:       { en:'Pick up the toothbrush',      zu:'Phakamisa ibrashi yamazinyo',    st:'Tshwara borosi ya meno',      xh:'Phakamisa ibrashi yamazinyo',     af:'Tel die tandeborsel op', ve:'Tsikisa phasitela ya meno', ts:'Tsema bhrashi ya mayin'we' },
  seq_brush:        { en:'Brush your teeth',            zu:'Geza amazinyo akho',             st:'Hlapa meno a hao',            xh:'Khutsa amazinyo akho',            af:'Borsel jou tande', ve:'Fheza meno au', ts:'Phisa mayin'we ya wena' },
  seq_rinse:        { en:'Rinse your mouth',            zu:'Hlanza umlomo wakho',            st:'Phahla molomo wa hao',        xh:'Khulula umlomo wakho',            af:'Spoel jou mond', ve:'Khukhulula mulomo wau', ts:'Sukutela nomo wa wena' },
  seq_forward:      { en:'Walk forward 3 steps',        zu:'Hamba phambili amagxathu amathathu', st:'Tsamaya pele mehato e meraro', xh:'Hamba phambili amanyathelo amathathu', af:'Stap 3 treë vorentoe', ve:'Tshimbila phandzha ngomu 3', ts:'Famba emahlweni ni nyimpi ta 3' },
  seq_turn_right:   { en:'Turn right',                  zu:'Jika ngakwesokudla',             st:'Retela ho ja',               xh:'Jika ngasekunene',               af:'Draai regs', ve:'Rhandza ku duvha la musi', ts:'Hlamula ku xintu' },
  seq_turn_left:    { en:'Turn left',                   zu:'Jika ngakwesokhohlo',            st:'Retela ho ngohola',          xh:'Jika ngasekhohlo',               af:'Draai links', ve:'Rhandza ku duvha la swa', ts:'Hlamula ku xinyo' },
  seq_forward2:     { en:'Walk forward 2 steps',        zu:'Hamba phambili amagxathu amabili', st:'Tsamaya pele mehato e mmedi', xh:'Hamba phambili amanyathelo amabili', af:'Stap 2 treë vorentoe', ve:'Tshimbila phandzha ngomu 2', ts:'Famba emahlweni ni nyimpi ta 2' },
  seq_drop_hint:    { en:'Tap steps below to add them here', zu:'Thepha amagxathu ngezansi ukuwengeza lapha', st:'Kgothatsa mehato ka tlase ho e eketsa mona', xh:'Chukumisa amanyathelo ngezantsi ukuwaengeza apha', af:'Tik stappe hieronder om hulle hier te voeg', ve:'Taphela zwitevhedzwa u zwi engela afha', ts:'Tshoveka switehi ku swi engetelela laha' },

  // ── BADGE NAMES ───────────────────────────────────────────────────────
  badge_first_steps: { en:'First Steps Explorer', zu:'Umhloli Wezinyathelo Zokuqala', st:'Mophekolodi wa Mehato ya Pele', xh:'Umphandi Wamanyathelo Okuqala', af:'Eerste Stappe Verkenner', ve:'Mutolodeli wa Vhuhulwane', ts:'Mulavisisi wa Switehi Swa U Sungula' },
  badge_seq_star:    { en:'Sequence Star',         zu:'Inkanyezi Yohlelo',            st:'Naledi ya Tatellano',           xh:'Inkwenkwezi Yohlelo',            af:'Volgorde Ster', ve:'Nyenyedzi ya Kutevhedzana', ts:'Nyenyedzi ya Nawu' },

  // ── PROGRESS / TOAST ──────────────────────────────────────────────────
  great_job:        { en:'Great job! 🎉',    zu:'Wenze kahle! 🎉',    st:'O etse hantle! 🎉', xh:'Wenze kakuhle! 🎉',  af:'Goeie werk! 🎉', ve:'Tshebetso nzho! 🎉', ts:'Ntirho lonene! 🎉' },
  badge_earned:     { en:'Badge earned',     zu:'Impawu itholakele',   st:'Dibetša e fumanwe',  xh:'Ibheji ifunyenwe',   af:'Kenteken verdien', ve:'Zwidangalelo zwi wanala', ts:'Tibheji ti kumekile' },
  // ── ROBOTICS ──────────────────────────────────────────────────────────
  r_w1l1_title: { en:'What is a Robot?',        zu:'Irobhothi Iyini?',            st:'Roboto ke Eng?',              xh:'Irobhothi Yintoni?',          af:'Wat is \'n Robot?' },
  r_w1l1_blurb: { en:'Machines that sense, think and act', zu:'Imishini ezwa, icabange futhi isebenze', st:'Dimetšhene tse utlwang, di nahana le go sebetsa', xh:'Iimishini ezivayo, ezicingayo nezisebenzayo', af:'Masjiene wat waarneem, dink en optree', ve:'Mishini yo pfa ya edhea na u ita', ts:'Timixini leti pfumaka, leti nahanaka' },
  r_w1l2_title: { en:'Plan a Path',              zu:'Hlela Indlela',               st:'Rala Tsela',                  xh:'Cwangcisa Indlela',           af:'Beplan \'n Pad' },
  r_w1l2_blurb: { en:'Plot the moves before pressing go', zu:'Hlela izinyathelo ngaphambi kokucindezelwa kokuhamba', st:'Rala mehato pele ho kgothatsa ho tsamaya', xh:'Cwangcisa amanyathelo ngaphambi kokucofa ukuya', af:'Beplan die bewegings voor jy begin', ve:'Vhea midho u sa athu u pfesa', ts:'Veka switehi u nga si sungula ku famba' },
  r_w2l1_title: { en:'Loops Make It Easier',    zu:'Amaluphu Akwenza Kube Lula',  st:'Diluphu Di a Nolofatsa',     xh:'Amaluphu Ayenza Kube Lula',   af:'Lusse Maak Dit Makliker', ve:'Miluphu i Ita Thandelo', ts:'Miluphu Yi Endla Ku Olova' },
  r_w2l1_blurb: { en:'Repeat instructions without repeating yourself', zu:'Phinda imiyalelo ngaphandle kokuziphinda', st:'Pheta ditaelo ntle le go ipheta', xh:'Phinda imiyalelo ngaphandle kokuziphinda', af:'Herhaal instruksies sonder om jouself te herhaal', ve:'Phindela zwivhidziso u sa di phindela wena', ts:'Phindzelela swileriso u nga ti phindzeleli wena' },
  r_w2l2_title: { en:'Robot Challenge: Obstacle Course', zu:'Inselele Yerobhothi: Umjaho Wezithiyo', st:'Kgwetlho ya Roboto: Tshebediso ya Dithibelo', xh:'Inselelo Yerobhothi: Indlela Enomaqhina', af:'Robot Uitdaging: Hindernisbaan', ve:'Tshikhuzwi tsha Robhoti: Ndzila ya Divhazwivhi', ts:'Xitolovelo xa Robhoti: Ndzila ya Swiphiqo' },
  r_w2l2_blurb: { en:'Put everything together!', zu:'Hlanganisa konke!',            st:'Kopanya ntho tsohle!',         xh:'Hlanganisa yonke into!',       af:'Sit alles saam!', ve:'Kovhanya zwoothe!', ts:'Hlanganisa hinkwaswo!' },
  mode_unplugged: { en:'📝 Unplugged — No robot needed', zu:'📝 Ngaphandle Kukagesi — Ayidingeki irobhothi', st:'📝 Ntle le Motlakase — Ha ho roboto e hlokahalang', xh:'📝 Ngaphandle Kombane — Ayifuneki irobhothi', af:'📝 Ontkoppeld — Geen robot nodig', ve:'Asina Gesi - Robhoti a i dzingiwi', ts:'Nga Ri na Korente - Robhoti a yi pfumelelani' },
  mode_robot:    { en:'🤖 With Robot Kit',       zu:'🤖 Nesethi Yerobhothi',       st:'🤖 Le Sete sa Roboto',        xh:'🤖 Neset Yerobhothi',         af:'🤖 Met Robot Stel', ve:'Na Sete ya Robhoti', ts:'Na Sete ya Robhoti' },

  // ── AI AWARENESS ──────────────────────────────────────────────────────
  ai_w1l1_title: { en:'What is AI?',             zu:'I-AI Yini?',                  st:'AI ke Eng?',                  xh:'I-AI Yintoni?',               af:'Wat is KI?', ve:'AI ndi Mini?', ts:'AI i Yini?' },
  ai_w1l1_blurb: { en:'Machines that learn — not just follow', zu:'Imishini efunda — hhayi ukukulandela nje', st:'Dimetšhene tse ithutang — eseng ho latela feela', xh:'Iimishini ezifundayo — hazilandeli nje', af:'Masjiene wat leer — nie net volg nie', ve:'Mishini yo dzihenaho - isho ya tevhela feela', ts:'Timixini leti dyondzaka - a ti landzeleli feela' },
  ai_w1l2_title: { en:'AI in Your Life',         zu:'I-AI Empilweni Yakho',        st:'AI Bophelong ba Hao',         xh:'I-AI Ebomini Bakho',          af:'KI in Jou Lewe', ve:'AI Vhupenyu Hau', ts:'AI Vutomi bya Wena' },
  ai_w1l2_blurb: { en:'You already use AI every day', zu:'Usebenzisa i-AI nsuku zonke', st:'O sebedisa AI letsatsi le leng le leng', xh:'Usebenzisa i-AI yonke imihla', af:'Jy gebruik KI elke dag al', ve:'Ndi tshi shumisa AI duvha line na line', ts:'U tirhisa AI siku na siku' },
  ai_w2l1_title: { en:'How AI Learns',           zu:'I-AI Ifunda Kanjani',         st:'AI e Ithuta Joang',           xh:'I-AI Ifunda Njani',           af:'Hoe KI Leer', ve:'AI I Dzihenela Hani', ts:'AI Yi Dyondzela Njani' },
  ai_w2l1_blurb: { en:'Training data and pattern-finding', zu:'Idatha yokuqeqesha nokufica imigqa', st:'Datha ya koetliso le ho fumana mehlala', xh:'Idatha yoqeqesho nokukhangela iimfanekiso', af:'Opleidingsdata en patroonvinding', ve:'Madavhiwa a luto na u wana milayo', ts:'Data yo dyondzisiwa ni ku kuma milayo' },
  ai_w2l2_title: { en:'AI vs Human Thinking',   zu:'I-AI vs Ukucabanga Kwabantu', st:'AI vs Ho Nahana ha Batho',    xh:'I-AI vs Ukucinga Kwabantu',   af:'KI vs Menslike Denke', ve:'AI vs Mielewano ya Muthu', ts:'AI vs Ku Nahanela ka Munhu' },
  ai_w2l2_blurb: { en:'What AI does well — and what it doesn\'t', zu:'Ukuthi i-AI yenzani kahle — nalokho engakwenzi', st:'Seo AI e se etsang hantle — le seo e sa se etseng', xh:'Ukuba i-AI yenzani kakuhle — nento engayenziyo', af:'Wat KI goed doen — en wat nie', ve:'AI i ita mini nzho - na zwi sa iti', ts:'AI yi endla yini kahle - ni leswi yi nga endliki' },
  sort_ai:       { en:'🤖 Uses AI',              zu:'🤖 Isebenzisa i-AI',          st:'🤖 E sebedisa AI',            xh:'🤖 Isebenzisa i-AI',          af:'🤖 Gebruik KI', ve:'I shumisa AI', ts:'Yi tirhisa AI' },
  sort_fixed:    { en:'⚙️ Fixed Rules',           zu:'⚙️ Imithetho Eqinile',        st:'⚙️ Melao e Tsitsitseng',      xh:'⚙️ Imithetho Eqinileyo',      af:'⚙️ Vaste Reëls', ve:'Milayo yo Thomaho', ts:'Milayo yo Tiyaka' },

  // ── DIGITAL LITERACY ──────────────────────────────────────────────────
  dl_w1l1_title: { en:'Parts of a Computer',    zu:'Izingxenye Zekhompyutha',     st:'Dikarolo tsa Khomphiutha',    xh:'Iindawo Zekhompyutha',        af:'Onderdele van \'n Rekenaar' },
  dl_w1l1_blurb: { en:'Learn the names and jobs of each part', zu:'Funda amagama nezinto zenziwa yizingxenye ngayinye', st:'Ithuta mabitso le mesebetsi ya karolo e nngwe le e nngwe', xh:'Funda amagama nemisebenzi yendawo nganye', af:'Leer die name en take van elke onderdeel', ve:'Dziha madzina na mishumo ya zwipirani', ts:'Dyondza mavito ni mintirho ya switirhisiwa' },
  dl_w1l2_title: { en:'Keyboard & Typing Basics', zu:'Isihluthulelo Nezisekelo Zokuthayipha', st:'Kiboto le Motheo wa ho Taipa', xh:'Ikhibhodi Neziseko Zokuchwetheza', af:'Sleutelbord en Tikbeginsels', ve:'Kibhodzi na Zwisunulo zwa U Nwala', ts:'Kibhodi ni Swisunulo swa ku Tsala' },
  dl_w1l2_blurb: { en:'Know your keys and type your name', zu:'Yazi izinkinobho zakho futhi uthayiphe igama lakho', st:'Tseba dinotlelo tsa hao mme u taipe lebitso la hao', xh:'Yazi izikhiye zakho uchwetheze igama lakho', af:'Ken jou sleutels en tik jou naam', ve:'Dziha zikhiye dzau u nwale dzina lau', ts:'Tiva swikhinyi swa wena u tsale vito ra wena' },
  dl_w2l1_title: { en:'Staying Safe Online',    zu:'Ukuhlala Uphephile Ku-Inthanethi', st:'Ho Dula O Sirelehile Inthaneteng', xh:'Ukuhlala Ukhuselekile Kwi-Intanethi', af:'Veilig Aanlyn Bly', ve:'U Vha Vhutshilo Inthanete', ts:'Ku Va Salama eka Inthanete' },
  dl_w2l1_blurb: { en:'Know the rules of the digital world', zu:'Yazi imithetho yezwe ledijithali', st:'Tseba melao ya lefatše la dijithale', xh:'Yazi imithetho yehlabathi ledijithali', af:'Ken die reëls van die digitale wêreld', ve:'Dziha milayo ya lifhasi la dijithali', ts:'Tiva milawu ya misava ya dijithali' },
  dl_w2l2_title: { en:'Files & Folders',        zu:'Amafayela Namafolda',         st:'Difaele le Difolara',         xh:'Iifayile Neefowuldha',        af:'Lêers en Vouers', ve:'Mafaela na Mafolara', ts:'Tifayili ni Tifolara' },
  dl_w2l2_blurb: { en:'Creating, saving and organising digital work', zu:'Ukudala, ukulondoloza nokuhlela umsebenzi wedijithali', st:'Ho etsa, ho boloka le ho hlophisa mosebetsi wa dijithale', xh:'Ukudala, ukulondoloza nokuhlela umsebenzi wedijithali', af:'Digitale werk skep, stoor en organiseer', ve:'U vumba, u vhulunga na u rongoa mushumo', ts:'Ku tumbuluxa, ku vhekanya ni ku hlela ntirho' },

  // ── PARENT PORTAL ─────────────────────────────────────────────────────
  pp_welcome:    { en:'Welcome, Parents',        zu:'Wamukelekile, Bazali',        st:'Amohelehile, Batswadi',       xh:'Wamkelekile, Bazali',         af:'Welkom, Ouers', ve:'Thavanhi, Vathanzi', ts:'Xewani, Vahahani' },
  pp_select:     { en:'Select your child to view their progress', zu:'Khetha umntwana wakho ukuze ubone intuthuko yabo', st:'Khetha ngwana wa hao ho bona katlego ya bona', xh:'Khetha umntwana wakho ukubona intlalontle yabo', af:'Kies jou kind om hul vordering te sien', ve:'Khetha mwana wau u vhone mvelele yao', ts:'Hlawula nwana wa wena u vona vuyelo bya yena' },
  pp_view:       { en:'View Progress 📊',        zu:'Buka Intuthuko 📊',           st:'Sheba Katlego 📊',            xh:'Jonga Inkqubela 📊',          af:'Sien Vordering 📊', ve:'Vhona Mvelele 📊', ts:'Vona Vuyelo 📊' },
  pp_switch:     { en:'Switch to a different child', zu:'Shintsha komunye umntwana', st:'Fetohela ngwana o motle',   xh:'Tshintshela komnye umntwana', af:'Skakel na \'n ander kind' },
  pp_overall:    { en:'Overall Progress',        zu:'Intuthuko Yonke',             st:'Katlego Kaofela',             xh:'Inkqubela Yonke',             af:'Algehele Vordering', ve:'Mvelele Yothe', ts:'Vuyelo Hinkwaxo' },
  pp_completed:  { en:'Completed Lessons',       zu:'Izifundo Ezifinyelele',       st:'Lithuto tse Phethilweng',     xh:'Izifundo Ezicompletilweyo',   af:'Voltooide Lesse', ve:'Mafunzisele Ao Fhelaho', ts:'Swifundziso Leswi Hetisiweke' },
  pp_report:     { en:'📄 View Report Card',     zu:'📄 Buka Ikhadi Leziphumo',    st:'📄 Sheba Karete ya Diphuputso', xh:'📄 Jonga Ikhadi Lengxelo',  af:'📄 Sien Rapportkoevert', ve:'Vhona Kadhi ya Lipoti', ts:'Vona Karata ya Ripoti' },
  pp_no_lessons: { en:'No lessons completed yet — encourage them to start the journey! 🚀', zu:'Azikho izifundo eziqediwe — bakhuthaze ukuba baqale uhambo! 🚀', st:'Ha ho lithuto tse phethilweng — ba kgothatse ho qala leeto! 🚀', xh:'Azikho izifundo ezigqityiweyo — bakhuthaze ukuba baqale uhambo! 🚀', af:'Geen lesse voltooi nie — moedig hulle aan om die reis te begin! 🚀', ve:'A huna mafunzisele a fhelaho', ts:'Swifundziso a swi hetisiwanga' },

  // ── TEACHER DASHBOARD ─────────────────────────────────────────────────
  td_title:      { en:'Teacher Dashboard',       zu:'Ibhodi Lothisha',             st:'Sethala sa Moituti',          xh:'Ibhodi Katitshala',           af:'Onderwyser Paneelbord', ve:'Ibodzi ya Mudzinisi', ts:'Ibhodi ya Mufundzisi' },
  td_students:   { en:'Students',                zu:'Abafundi',                    st:'Baithuti',                    xh:'Abafundi',                    af:'Leerders', ve:'Vhafunzi', ts:'Vafundzi' },
  td_avg:        { en:'Avg. Lessons Done',       zu:'Izifundo Ezisetshenzisiwe Kwendle', st:'Lithuto tse Averejeng tse Phethilweng', xh:'Izifundo Ezenziweyo Ngokugqibelela', af:'Gem. Lesse Klaar', ve:'Tsumbu. Mafunzisele Ao Fhelaho', ts:'Xik. Swifundziso Leswi Hetisiweke' },
  td_refresh:    { en:'Refresh',                 zu:'Vuselela',                    st:'Tsosolosa',                   xh:'Vuselela',                    af:'Verfris', ve:'Vusubedza', ts:'Vuyisa' },

  // ── SCHOOL OS ─────────────────────────────────────────────────────────
  os_title:      { en:'School Operating System', zu:'Uhlelo Lokusebenza Lwesikole', st:'Tshebediso ya Sekolo',       xh:'Inkqubo Yesikolo',            af:'Skool Bedryfstelsel', ve:'Tshinge tsha Tshikolo', ts:'Ntirho wa Xikolo' },
  os_dashboard:  { en:'Dashboard',               zu:'Ibhodi Lokuqaphela',          st:'Sethala sa Tlhahlobo',        xh:'Ibhodi Lokuphatha',           af:'Paneelbord', ve:'Ibodzi la Talutshedzo', ts:'Ibhodi yo Vonala' },
  os_timetable:  { en:'Timetable',               zu:'Uhlelo Lwesikhathi',          st:'Lenaane la Nako',             xh:'Ixesha Lesifundo',            af:'Rooster', ve:'Mudandzulo wa Tshifhinga', ts:'Xedule ya Nkarhi' },
  os_homework:   { en:'Homework',                zu:'Umsebenzi Wasekhaya',         st:'Mosebetsi wa Hae',            xh:'Umsebenzi Wasekhaya',         af:'Huiswerk', ve:'Mushumo wa Hayani', ts:'Ntirho wa Hayini' },
  os_notices:    { en:'Notices',                 zu:'Izaziso',                     st:'Ditlhahiso',                  xh:'Izaziso',                     af:'Kennisgewings', ve:'Midzivhadzo', ts:'Milawu' },
  os_attendance: { en:'Attendance',              zu:'Ukuphakama',                  st:'Boteng',                      xh:'Ukuphakama',                  af:'Bywoning', ve:'Vhuimo', ts:'Ku Pfumaleka' },
  os_students:   { en:'Students',                zu:'Abafundi',                    st:'Baithuti',                    xh:'Abafundi',                    af:'Leerders', ve:'Vhafunzi', ts:'Vafundzi' },
  os_reports:    { en:'Reports',                 zu:'Imibiko',                     st:'Dipego',                      xh:'Iingxelo',                    af:'Verslae', ve:'Milibo', ts:'Tiripoti' },
  os_enter:      { en:'Enter System',            zu:'Ngena Ohlelweni',             st:'Kena Tshebedisong',           xh:'Ngena Enkqubeni',             af:'Betree Stelsel', ve:'Dzhena Tshinge', ts:'Nghena Ntirho' },

  // ── ROBOTICS LESSON PARAGRAPHS ────────────────────────────────────────
  r_w1l1_p1: {
    en: 'A robot is a machine that can <span class="highlight">sense</span> the world around it, <span class="highlight">think</span> about what to do, and then <span class="highlight">act</span> — all by itself, after a person has programmed it.',
    zu: 'Irobhothi iyimishini engakwazi <span class="highlight">ukuzwa</span> izinto eziyizungezile, <span class="highlight">ukucabanga</span> ngokwenzayo, bese <span class="highlight">isebenza</span> — yodwa, ngemuva kokuba umuntu eyiphrojekthi.',
    st: 'Roboto ke motšhene o kgonang ho <span class="highlight">utlwa</span> lefatše le le obkang, ho <span class="highlight">nahana</span> ka seo o lokelang ho se etsa, ebe o <span class="highlight">etsa</span> — ka bobona, kamora hore motho a e laodiše.',
    xh: 'Irobhothi ngumtshini okwaziyo <span class="highlight">ukuziva</span> izinto eziyijikelezileyo, <span class="highlight">ukucinga</span> ngokwenzayo, ze <span class="highlight">isebenze</span> — yedwa, emva kokuba umntu eyiphrojekthi.',
    af: '\'n Robot is \'n masjien wat die wêreld om hom kan <span class="highlight">waarneem</span>, kan <span class="highlight">dink</span> oor wat om te doen, en dan kan <span class="highlight">optree</span> — alles vanself, nadat \'n persoon dit geprogrammeer het.'
  },
  r_w1l1_p2: {
    en: 'Robots are not magic — they follow instructions, just like the computer programs we learned about. The difference is a robot\'s instructions make it move or do something in the real world.',
    zu: 'Amarobhothi awona mthelela — alandela imiyalelo, njengezinhlelo zekhompyutha esazifundile. Umehluko ukuthi imiyalelo yerobhothi iyenza ihambe noma yenze into ezweni langempela.',
    st: 'Diroboto ha se maele — di latela ditaelo, joalo ka mananeo a khomphiutha ao re a ithutileng. Phapano ke hore ditaelo tsa roboto di etsa hore e tsamaye kapa e etse ntho lefatšeng la nnete.',
    xh: 'Iibhothhi azinto zomchawi — zilandela imiyalelo, njengezinhlelo zekhompyutha esazifundileyo. Umahluko kukuba imiyalelo yerobhothi iyenza ihambе okanye yenze into kwilizwe langempela.',
    af: 'Robotte is nie towerkuns nie — hulle volg instruksies, net soos die rekenaarprogramme wat ons geleer het. Die verskil is dat \'n robot se instruksies dit laat beweeg of iets in die regte wêreld doen.'
  },
  r_w1l2_p1: {
    en: 'Before any robot moves, somebody has to <span class="highlight">plan the path</span> first. Look at the grid below. The robot needs to get from START to GOAL.',
    zu: 'Ngaphambi kokuba noma yiluphi irobhothi lihambe, umuntu kumele <span class="highlight">ahlele indlela</span> kuqala. Bheka isikhwama esingezansi. Irobhothi lidinga ukufika eqalweni kuye ekugcineni.',
    st: 'Pele ho hore roboto e nngwe le e nngwe e tsamaye, motho o tlameha ho <span class="highlight">rala tsela</span> pele. Sheba gridi e ka tlase. Roboto e hloka ho fihla ho QALA ho isa ho NTLHA.',
    xh: 'Ngaphambi kokuba nayiphi na irobhothi ihambe, umntu kufuneka <span class="highlight">acwangcise indlela</span> kuqala. Jonga igridi engezantsi. Irobhothi ifuna ukufika kwi-QALA ukuya kwi-NTLHA.',
    af: 'Voordat enige robot beweeg, moet iemand eers <span class="highlight">die pad beplan</span>. Kyk na die rooster hieronder. Die robot moet van BEGIN na DOEL kom.'
  },
  r_w2l1_p1: {
    en: 'Remember loops from coding? Robots use loops too! Instead of writing "turn right" four separate times to make a full square turn, a robot programmer can say <span class="highlight">"turn right, 4 times"</span> — one instruction instead of four.',
    zu: 'Uyakhumbula amaluphu ekukhoda? Namarobhothi asebenzisa amaluphu! Esikhundleni sokubhala "jika ngakwesokudla" izikhathi ezine ngezenhlukene ukwenza ukuphenduka kwegumbi eligcwele, umphrojekthi werobhothi angasho <span class="highlight">"jika ngakwesokudla, izikhathi ezi-4"</span> — imiyalelo eyodwa esikhundleni seyine.',
    st: 'O hopola diluphu ho tswa khouthing? Le diroboto di sebedisa diluphu! Ho e na le ho ngola "retela ho ja" habedi tse nne ka nako tse fapaneng ho etsa phirimano e phethehileng ya korone, mohlophisi wa roboto a ka re <span class="highlight">"retela ho ja, habedi tse 4"</span> — taelo e nngwe ho e na le tse nne.',
    xh: 'Uyakhumbula amaluphu kwikhowudi? Iibhothhi nalo zisebenzisa amaluphu! Endaweni yokubhala "jika ngasekunene" izikhathi ezine ngasinye ukwenza ukujika kwesikwere esipheleleyo, umphrojekthi werobhothi angathi <span class="highlight">"jika ngasekunene, izikhathi ezi-4"</span> — imiyalelo enye endaweni yemine.',
    af: 'Onthou jy lusse van kodering? Robotte gebruik ook lusse! In plaas van om "draai regs" vier afsonderlike kere te skryf om \'n volledige vierkantige draai te maak, kan \'n robotprogrammeerder sê <span class="highlight">"draai regs, 4 keer"</span> — een instruksie in plaas van vier.'
  },
  r_w2l2_p1: {
    en: 'Time for the big challenge! Your robot needs to get past obstacles to reach the goal — without bumping into them. Plan your sequence carefully before you start.',
    zu: 'Isikhathi sendlela enkulu! Irobhothi lakho lidinga ukudlula izithiyo ukuze lifinyelele inhloso — ngaphandle kokuzishaya. Hlela uhlelo lwakho ngokucophelela ngaphambi kokuqala.',
    st: 'Nako ya kgwetlho e kgolo! Roboto ya hao e hloka ho feta dithibelo ho fihla ntlheng — ntle le ho di qhoma. Rala tatellano ya hao ka hloko pele o qala.',
    xh: 'Ixesha lentshapha enkulu! Irobhothi yakho idinga ukudlula iimiqobo ukufinyelela injongo — ngaphandle kwokubetha. Cwangcisa uhlelo lwakho ngocoselelo ngaphambi kokuqala.',
    af: 'Tyd vir die groot uitdaging! Jou robot moet verby hindernisse kom om die doel te bereik — sonder om daarteen te stamp. Beplan jou volgorde versigtig voor jy begin.'
  },

  // ── AI AWARENESS LESSON PARAGRAPHS ────────────────────────────────────
  ai_w1l1_p1: {
    en: 'You\'ve learned that computers follow instructions. <span class="highlight">Artificial Intelligence (AI)</span> is different — it\'s when a computer learns from examples, instead of being given a step-by-step rule for everything.',
    zu: 'Uzifundile ukuthi amakhompyutha alandela imiyalelo. <span class="highlight">Ingqondo Ye-Artificial Intelligence (AI)</span> ihlukile — yilapho ikhompyutha ifunda izibonelo, esikhundleni sokunikiwa umthetho wezinyathelo ngazinyathelo ngazinye.',
    st: 'O ithutile hore dikhomphiutha di latela ditaelo. <span class="highlight">Kelello ya Maiketsetso (AI)</span> e fapane — ke ha khomphiutha e ithuta ho tswa mehlaleng, ho e na le ho fuwa molao wa mehato ka mehato ya ntho tsohle.',
    xh: 'Ufundile ukuba iikhompyutha zilandela imiyalelo. <span class="highlight">Ingqondo Yokwakhiwa (AI)</span> yahlukile — yilapho ikhompyutha ifunda kumizekelo, endaweni yokunikwa umgaqo wenyathelo ngenyathelo yayo yonke into.',
    af: 'Jy het geleer dat rekenaars instruksies volg. <span class="highlight">Kunsmatige Intelligensie (KI)</span> is anders — dit is wanneer \'n rekenaar van voorbeelde leer, in plaas van \'n stap-vir-stap reël vir alles te kry.'
  },
  ai_w1l1_p2: {
    en: 'Think about how you learned to recognise a dog. Nobody gave you a list of rules — you saw enough dogs and your brain figured it out! AI works the same way: show it thousands of pictures, and it learns what a dog looks like.',
    zu: 'Cabanga ngendlela ofunde ngayo ukubona inja. Akekho owakupha uhlu lwemithetho — wabona izinja ezanele futhi ubuchopho bakho baqonda! I-AI isebenza ngendlela efanayo: ibonise izithombe ezinkulungwane, futhi ifunda ukuthi inja ibukeka kanjani.',
    st: 'Nahana ka kamoo o ithutileng ho lemosa ntja. Ha ho motho a o fileng lenaane la melao — o bone dintja tse lekaneng mme boko ba hao ba utlwisisa! AI e sebetsa ka tsela e tshwanang: bontsha diswantšho tse dikete, mme e ithuta hore ntja e shebahala jwang.',
    xh: 'Cinga ngendlela owafunda ngayo ukubona inja. Akukho namnye owanika uluhlu lwemigaqo — wabona iinja ezaneleyo kwaye ubuchopho bakho baqonda! I-AI isebenza ngendlela efanayo: ibonise izithombe ezinkulungwane, ize ifunde ukuba inja ibonakala njani.',
    af: 'Dink aan hoe jy geleer het om \'n hond te herken. Niemand het jou \'n lys reëls gegee nie — jy het genoeg honde gesien en jou brein het dit uitgevind! KI werk dieselfde manier: wys dit duisende foto\'s, en dit leer hoe \'n hond lyk.'
  },
  ai_w1l2_p1: {
    en: 'AI is already all around you — even if you didn\'t know it! When your phone unlocks by recognising your face, that\'s AI. When a streaming app suggests a video you love, that\'s AI. When your phone corrects your spelling, that\'s AI.',
    zu: 'I-AI isekhonaphi — ngisho noma wawungazazi! Lapho ikhompyutha yakho ivula ngokuqaphela ubuso bakho, lokho kuyiAI. Lapho uhlelo lokusebenzisa olukhipha ividiyo oyithandayo, lokho kuyiAI. Lapho ikhompyutha yakho ilungisa ukubhala kwakho, lokho kuyiAI.',
    st: 'AI e se e o potoloha — le ha o ne o sa e tsebe! Ha fono ya hao e bulwa ka ho lemosa sefate sa hao, ke AI. Ha app e fana ka video eo o e ratang, ke AI. Ha fono ya hao e lokisa ho ngola ha hao, ke AI.',
    xh: 'I-AI isekujikeleze — nangona bewungayazi! Xa ifowuni yakho ivulwa ngokukubona ubuso bakho, yiyo i-AI. Xa uhlelo lwenkcazelo lusebenzisa ividiyo oyithandayo, yiyo i-AI. Xa ifowuni yakho ilungisa ukuchwetheza kwakho, yiyo i-AI.',
    af: 'KI is al rondom jou — selfs as jy dit nie geweet het nie! Wanneer jou foon oopsluit deur jou gesig te herken, is dit KI. Wanneer \'n stroom-toep \'n video voorstel wat jy liefhet, is dit KI. Wanneer jou foon jou spelling korrigeer, is dit KI.'
  },
  ai_w2l1_p1: {
    en: 'AI learns through a process called <span class="highlight">training</span>. Developers show an AI system thousands of examples — pictures, sentences, sounds — and the AI finds patterns.',
    zu: 'I-AI ifunda ngomenziwa obizwa ngokuthi <span class="highlight">ukuqeqesha</span>. Abathuthukisi babonisa uhlelo lwe-AI izibonelo ezinkulungwane — izithombe, izimusho, namazwi — bese i-AI ifumana imigqa.',
    st: 'AI e ithuta ka tshebetso e biwang <span class="highlight">koetliso</span>. Bahlophisi ba bontsha tshebediso ya AI mehlala e dikete — diswantšho, diphetho, le medumo — mme AI e fumana mehlala.',
    xh: 'I-AI ifunda ngenqubo ebizwa ngokuthi <span class="highlight">uqeqesho</span>. Abaphuhlisi babonisa inkqubo ye-AI imizekelo eyinkulungwane — imifanekiso, izivakalisi, namazwi — ze i-AI ifumane iimfanekiso.',
    af: 'KI leer deur \'n proses wat <span class="highlight">opleiding</span> genoem word. Ontwikkelaars wys \'n KI-stelsel duisende voorbeelde — foto\'s, sinne, klanke — en die KI vind patrone.'
  },
  ai_w2l1_p2: {
    en: 'This means AI can only be as good as its training data. If you only showed it cats from one country, it might not recognise cats from another. <span class="highlight">Garbage in, garbage out!</span>',
    zu: 'Lokhu kusho ukuthi i-AI ingakwazi nje ukuba ingcono njengeidatha yokuqeqesha. Uma ubonise izikati ezivela ezweni elilodwa kuphela, kungenzeka ingazi izikati ezehlukene. <span class="highlight">Inkuhlu ingena, inkuhlu iphuma!</span>',
    st: 'Sena se bolela hore AI e ka ba hantle feela joalo ka datha ya koetliso ya yona. Ha o bontsha dikatse tse tswa naheng e le nngwe feela, e kanna ya se lemose dikatse tse tswang naheng e nngwe. <span class="highlight">Botle bo kenya, botle bo tswa!</span>',
    xh: 'Oku kuthetha ukuba i-AI inokuba nje ngokuhle njengeidatha yoqeqesho lwayo. Ukuba ubonisa iikati ezivela kwilizwe elinye kuphela, kungenzeka ingaboni iikati ezivela kwenye. <span class="highlight">Inkunkuma ingena, inkunkuma iphuma!</span>',
    af: 'Dit beteken KI kan net so goed wees as sy opleidingsdata. As jy dit net katte uit een land gewys het, kan dit dalk nie katte uit \'n ander land herken nie. <span class="highlight">Rommel in, rommel uit!</span>'
  },
  ai_w2l2_p1: {
    en: 'AI is <span class="highlight">incredibly fast</span> at spotting patterns in huge amounts of data — things that would take humans years to analyse. But AI has real limits.',
    zu: 'I-AI <span class="highlight">iphanga kakhulu</span> ekufumaneni imigqa ebuningini obukhulu bedatha — izinto ezingathatha iminyaka ukuzihlahluba kubantu. Kepha i-AI inemikhawulo yangempela.',
    st: 'AI e <span class="highlight">potlaka haholo</span> ho fumana mehlala ho palo e kgolo ya datha — dintho tse ka nakang motho dilemo ho di sekaseka. Empa AI e na le mehlolo ya nnete.',
    xh: 'I-AI <span class="highlight">iphangisa kakhulu</span> ekufumaneni iimfanekiso kwimida enkulu yedatha — izinto ezinganqandayo iminyaka ukuhlalutya ebantwini. Kodwa i-AI inemida yangempela.',
    af: 'KI is <span class="highlight">ongelooflik vinnig</span> om patrone in groot hoeveelhede data raak te sien — dinge wat mense jare sou neem om te ontleed. Maar KI het werklike beperkings.'
  },
  ai_w2l2_list: {
    en: '<li>AI doesn\'t understand what it\'s doing — it just finds patterns</li><li>AI can\'t feel kindness, creativity, or curiosity</li><li>AI can be wrong — especially on new situations it wasn\'t trained for</li><li>AI can\'t make moral decisions on its own</li>',
    zu: '<li>I-AI ayiqondi lokho ekwenzayo — ifumana imigqa nje</li><li>I-AI ayikwazi ukuzwa umusa, ubukhalipha, noma ukufisa ukwazi</li><li>I-AI ingaphosisa — ikakhulukazi ezimweni ezintsha engaqeqeshelwanga zona</li><li>I-AI ayikwazi ukwenza izinqumo zokuziphatha ngokwayo</li>',
    st: '<li>AI ha e utlwisise seo e se etsang — e fumana mehlala feela</li><li>AI e ke ke ya ikutlwa bopelonomi, boiketlo, kapa ho lakala ho tseba</li><li>AI e ka fosaheha — haholo maemong a matjha a sa itsoa koetliswa ona</li><li>AI e ke ke ya etsa diqeto tsa boits\'oaro ka boyona</li>',
    xh: '<li>I-AI ayiqondi ekwenzayo — ifumana iimfanekiso nje</li><li>I-AI ayikwazi ukuziva ububele, ubukrelekrele, okanye uchulumanco lwokwazi</li><li>I-AI inokuba yiphosise — ingakumbi kwimeko entsha ebengaziqeqesheli</li><li>I-AI ayikwazi ukwenza izigqibo zokuziphatha ngokwayo</li>',
    af: '<li>KI verstaan nie wat dit doen nie — dit vind net patrone</li><li>KI kan nie vriendelikheid, kreatiwiteit of nuuskierigheid voel nie</li><li>KI kan verkeerd wees — veral in nuwe situasies waarvoor dit nie opgelei is nie</li><li>KI kan nie morele besluite op sy eie neem nie</li>'
  },
  ai_w2l2_p2: {
    en: 'This means the most important skill for your future isn\'t competing with AI — it\'s knowing <span class="highlight">how to use AI wisely</span>, and knowing when to trust a human instead.',
    zu: 'Lokhu kusho ukuthi ikhono elibalulekile kakhulu lesikhathi sakho esizayo akuwona ukuncintisana ne-AI — ukwazi <span class="highlight">ukusebenzisa i-AI ngokuhlakanipha</span>, nokwazi nini ukukholwa kumuntu esikhundleni.',
    st: 'Sena se bolela hore boiphihlelo bo bohlokwa haholo bakeng sa kamoso ya hao ha se ho kgabaganyetsa AI — ke ho tseba <span class="highlight">ho sebedisa AI ka bohlale</span>, le ho tseba neng ho tshepela motho ho e na le yona.',
    xh: 'Oku kuthetha ukuba isakhono esibalulekileyo kakhulu sexesha lakho elizayo asikukhuphisana ne-AI — kukwazi <span class="highlight">ukusebenzisa i-AI ngokuhlakanipha</span>, nokwazi nini ukukholelwa umntu endaweni yayo.',
    af: 'Dit beteken die belangrikste vaardigheid vir jou toekoms is nie om met KI te kompeteer nie — dit is om te weet <span class="highlight">hoe om KI verstandig te gebruik</span>, en te weet wanneer om eerder \'n mens te vertrou.'
  },

  // ── DIGITAL LITERACY LESSON PARAGRAPHS ───────────────────────────────
  dl_w1l1_p1: {
    en: 'A computer has several important parts that all work together. Understanding what each part does helps you use computers more confidently — and troubleshoot when something goes wrong.',
    zu: 'Ikhompyutha inezingxenye ezibalulekile ezisebenzisana. Ukuqonda ukuthi yiziphi izingxenye ngayinye ekwenzayo kukusiza ukusebenzisa amakhompyutha ngokwethembeka kakhulu — nokuxazulula uma okuthile kungahambisani.',
    st: 'Khomphiutha e na le dikarolo tse bohlokwa tse sebetsanang. Ho utlwisisa seo karolo e nngwe le e nngwe e se etsang ho o thusa ho sebedisa dikhomphiutha ka boitshepo bo bongata — le ho rarolla ha ntho e sa sebetse.',
    xh: 'Ikhompyutha inezindawo ezibalulekileyo ezisebenzisana. Ukuqonda ukuba yintoni endawo nganye eyenzayo kukunceda ukusebenzisa iikhompyutha ngokuqiniseka kakhulu — nokusombulula xa into ingahambi kakuhle.',
    af: '\'n Rekenaar het verskeie belangrike dele wat almal saamwerk. Verstaan wat elke deel doen help jou om rekenaars meer selfversekerd te gebruik — en om te foutsoek wanneer iets verkeerd gaan.'
  },
  dl_w1l2_p1: {
    en: 'The keyboard is how you talk to a computer. Each key has a specific job. The <span class="highlight">Space bar</span> puts a space between words. <span class="highlight">Backspace</span> deletes the last letter. <span class="highlight">Enter</span> starts a new line. <span class="highlight">Shift</span> makes capital letters.',
    zu: 'Isihluthulelo yindlela okhuluma ngayo nakhompyutha. Inkinobho nganye inomsebenzi othile. I<span class="highlight">Space bar</span> ibeka isikhala phakathi kwamagama. I<span class="highlight">Backspace</span> iyasusa uhlamvu lokugcina. I<span class="highlight">Enter</span> iqala umugqa omutsha. I<span class="highlight">Shift</span> yenza izinhlamvu ezinkulu.',
    st: 'Kiboto ke tsela eo o buang ka yona le khomphiutha. Notlelo e nngwe le e nngwe e na le mosebetsi o itseng. <span class="highlight">Space bar</span> e beha sebaka mahareng a mantswe. <span class="highlight">Backspace</span> e phimola lengolo la ho qetela. <span class="highlight">Enter</span> e qala mola o mocha. <span class="highlight">Shift</span> e etsa dilengolo tse kgolo.',
    xh: 'Ikhibhodi yindlela othetha ngayo nekhompyutha. Isikhiye ngasinye sinomsebenzi othile. I<span class="highlight">Space bar</span> ibeka isithuba phakathi kwamagama. I<span class="highlight">Backspace</span> iyacima uhlamvu lokugqibela. I<span class="highlight">Enter</span> iqala umgca omtsha. I<span class="highlight">Shift</span> yenza izinhlamvu ezinkulu.',
    af: 'Die sleutelbord is hoe jy met \'n rekenaar praat. Elke sleutel het \'n spesifieke taak. Die <span class="highlight">Spasie-balk</span> sit \'n spasie tussen woorde. <span class="highlight">Agterruimte</span> verwyder die laaste letter. <span class="highlight">Enter</span> begin \'n nuwe reël. <span class="highlight">Shift</span> maak hoofletters.'
  },
  dl_w2l1_p1: {
    en: 'The internet is an amazing place to learn and connect — but just like in the real world, there are rules that keep you safe. The most important rule: <span class="highlight">never share personal information online</span> — your full name, address, phone number, school name, or passwords.',
    zu: 'I-inthanethi iyindawo emangalisayo yokufunda nokuxhumana — kodwa njengoba kunzima emhlabeni wangempela, kukhona imithetho ekugcina uphephile. Umthetho omkhulu kunayo yonke: <span class="highlight">ungabelani nolwazi lomuntu siqu ku-inthanethi</span> — igama lakho eligcwele, ikheli, inombolo yefoni, igama lesikole, noma amagama-imfihlo.',
    st: 'Inthanete ke sebaka se makatsang sa ho ithuta le ho hokahana — empa joalo ka lefatšeng la nnete, ho na le melao e go bolokang o sirelehile. Molao o moholo ka ho fetisisa: <span class="highlight">o ke ke wa arolelana tlhahisoleseding ya motho ka inthaneteng</span> — lebitso la hao ka botlalo, aterese, nomoro ya fono, lebitso la sekolo, kapa dipasewete.',
    xh: 'Iintanethi yindawo emangalisayo yokufunda nokuxhumana — kodwa njengasezweni langempela, zikhona imithetho ekugcina ukhuselekile. Umthetho omkhulu: <span class="highlight">ungabelani nolwazi lomuntu siqu kwi-intanethi</span> — igama lakho eligcweleyo, idilesi, inombolo yefowuni, igama lesikolo, okanye amagama-gqithiso.',
    af: 'Die internet is \'n wonderlike plek om te leer en te verbind — maar net soos in die regte wêreld, is daar reëls wat jou veilig hou. Die belangrikste reël: <span class="highlight">deel nooit persoonlike inligting aanlyn nie</span> — jou volle naam, adres, telefoonnommer, skoolnaam, of wagwoorde.'
  },
  dl_w2l2_p1: {
    en: 'Everything you create on a computer is saved as a <span class="highlight">file</span> — a document, photo, video or piece of code. Files are organised into <span class="highlight">folders</span>, just like how paper documents go into a physical folder in a cabinet.',
    zu: 'Konke okwakhayo ekhompyutheni kulondolozwa njenge<span class="highlight">fayela</span> — idokhumenti, isithombe, ividiyo noma ingxenye yekhodi. Amafayela ahlelwa e<span class="highlight">mafolda</span>, njengoba amadokhumenti amaphepha angena kumafolda esikhwameni.',
    st: 'Ntho tsohle tseo o di etsang khomphiuteng di bolokwa e le <span class="highlight">faele</span> — tokumente, setšoantšho, video kapa karolo ya khoutu. Difaele di hlophiswa ka <span class="highlight">difolara</span>, joalo ka ha ditokumente tsa pampiri di kena folara ya mmele ka kapenete.',
    xh: 'Yonke into oyenzayo kwi-khompyutha ilondolozwa njenge<span class="highlight">fayile</span> — idokhumenti, umfanekiso, ividiyo okanye icandelo lekhowudi. Iifayile zihlelwa ngee<span class="highlight">fowuldha</span>, njengoko iidokhumenti zephepha zingena kufowuldha yomzimba kwikhabethe.',
    af: 'Alles wat jy op \'n rekenaar skep word gestoor as \'n <span class="highlight">lêer</span> — \'n dokument, foto, video of stukkie kode. Lêers word in <span class="highlight">vouers</span> georganiseer, net soos hoe papierdokumente in \'n fisiese vouer in \'n kas gaan.'
  },

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
    <button class="lang-btn" data-lang="ve" onclick="LANG.set('ve');LANG.apply()">Tshivenda</button>
    <button class="lang-btn" data-lang="ts" onclick="LANG.set('ts');LANG.apply()">Xitsonga</button>
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

// ── TEXT-TO-SPEECH ENGINE ─────────────────────────────────────────────────

const TTS = {
  // BCP-47 language codes for Web Speech API
  // Note: Tshivenda (ve) and Xitsonga (ts) not widely supported yet —
  // fall back to Zulu (closest available Bantu voice) when unavailable
  LANG_CODES: {
    en: 'en-ZA',   // South African English
    zu: 'zu-ZA',   // IsiZulu
    st: 'st-ZA',   // Sesotho (may fall back to en-ZA on some devices)
    xh: 'xh-ZA',   // IsiXhosa
    af: 'af-ZA',   // Afrikaans
    ve: 'zu-ZA',   // Tshivenda — fallback to Zulu
    ts: 'zu-ZA',   // Xitsonga — fallback to Zulu
  },

  speaking: false,
  enabled: localStorage.getItem('frl_tts_enabled') !== 'false', // on by default

  toggle() {
    this.enabled = !this.enabled;
    localStorage.setItem('frl_tts_enabled', this.enabled);
    if (!this.enabled) this.stop();
    return this.enabled;
  },

  speak(text, langOverride) {
    if (!this.enabled) return;
    if (!('speechSynthesis' in window)) return;
    this.stop();

    // Strip HTML tags for clean reading
    const clean = text.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    if (!clean) return;

    const utter = new SpeechSynthesisUtterance(clean);
    const code = langOverride || this.LANG_CODES[LANG.current] || 'en-ZA';
    utter.lang  = code;
    utter.rate  = 0.9;   // slightly slower for learners
    utter.pitch = 1.1;   // slightly friendly
    utter.volume = 1;

    // Try to find a matching voice, fall back gracefully
    const voices = window.speechSynthesis.getVoices();
    const match = voices.find(v => v.lang === code)
      || voices.find(v => v.lang.startsWith(code.split('-')[0]))
      || voices.find(v => v.lang.startsWith('en'));
    if (match) utter.voice = match;

    this.speaking = true;
    utter.onend = () => { this.speaking = false; };
    window.speechSynthesis.speak(utter);
  },

  stop() {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    this.speaking = false;
  },

  // Read a full lesson — title + content
  readLesson(title, content) {
    const text = title + '. ' + content;
    this.speak(text);
  }
};

// Ensure voices are loaded (Chrome needs this)
if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {};
  window.speechSynthesis.getVoices();
}
