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
  pick_class_first:   { en:'Pick your class first',  zu:'Khetha iklasi lakho kuqala',        st:'Khetha sehlopha pele',        xh:'Khetha ibanga kuqala',        af:'Kies eers jou klas', ve:'Thoma u khetha kilasi', ts:'Hlawula kihlasi ku sungula' },
  select_class:       { en:'Select a class…',        zu:'Khetha ikilasi…',             st:'Khetha sehlopha…',            xh:'Khetha ibanga…',              af:'Kies \'n klas…' },
  select_name:        { en:'Select your name…',      zu:'Khetha igama lakho…',         st:'Khetha lebitso la hao…',      xh:'Khetha igama lakho…',         af:'Kies jou naam…', ve:'Khetha dzina lau...', ts:'Hlawula vito ra wena...' },
  lets_go:            { en:"Let's Go! 🚀",           zu:'Asiye Khona! 🚀',               st:'A re ye! 🚀',                 xh:'Masiye! 🚀',                  af:'Kom ons gaan! 🚀', ve:'A ri ye! 🚀', ts:'A hi yeni! 🚀' },
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
  follow_path:        { en:'Follow the path. Every stone is a new adventure in computers.', zu:'Landela umzila wezithombe. Itshe ngalinye liyinganekwane entsha yamakhompiyutha.', st:'Latela tsela. Leswika le leng le leng ke tshepediso e ntjha ya diqomphutha.', xh:'Landela indlela. Ilitye ngalinye liyintshukumo entsha kwikhompyutha.', af:'Volg die pad. Elke klip is \'n nuwe avontuur in rekenaars.' },
  hi_there:           { en:'Hi',                     zu:'Sawubona',                    st:'Dumela',                      xh:'Molo',                        af:'Hallo', ve:'Ndaa', ts:'Xewani' },
  school_name:        { en:'Future Ready Learners — South Africa', zu:'Abafundi Abalungele Ikusasa — Mzansi', st:'Baithuti ba Itokiselitseng Nako e Tlang — Afrika Borwa', xh:'Abafundi Abalungiselwe Ixesha Elizayo — Mzantsi Afrika', af:'Toekomsklaarleerders — Suid-Afrika', ve:'Vhafunzi Vho Lungelelaho - Afrika Tshipembe', ts:'Vafundzi Lavo Lungheleriweke - Afrika Dzonga' },
  loading:            { en:'Loading…',               zu:'Iyalayisha…',                 st:'E laola…',                    xh:'Iyalayisha…',                 af:'Laai…', ve:'Ndi tshi loda...', ts:'Ku layisha...' },
  home:               { en:'Home',                   zu:'Ikhaya',                      st:'Lapeng',                      xh:'Ikhaya',                      af:'Tuis', ve:'Hayani', ts:'Ekaya' },
  greeting_hi:        { en:'Hi',                     zu:'Sawubona',                    st:'Lumela',                      xh:'Molo',                        af:'Hallo' },

  /* ── Teacher Dashboard ── */
  td_title:                { en:'Teacher Dashboard', zu:'Ibhodi Lothisha', st:'Boto ya Titjhere', xh:'Ibhodi likaTitshala', af:'Onderwyserpaneel', ve:'Bodo ya Mudzidzisi', ts:'Bodo ya Mudyondzisi' },
  td_refresh:               { en:'Refresh', zu:'Vuselela', st:'Ntjhafatsa', xh:'Hlaziya', af:'Verfris', ve:'Vhusa', ts:'Pfuxeta' },
  td_summary_students:      { en:'Students', zu:'Abafundi', st:'Baithuti', xh:'Abafundi', af:'Leerders', ve:'Vhagudi', ts:'Vadyondzi' },
  td_summary_avg_lessons:   { en:'Avg. Lessons Done', zu:'Isilinganiso Sezifundo Eziqediwe', st:'Karolelano ya Dithuto tse Phethilweng', xh:'Umyinge Weezifundo Ezigqityiweyo', af:'Gem. Voltooide Lesse', ve:'Tshivhalo tsha Zwifundo zwo Fhedzwaho', ts:'Xiyimo xa Tidyondzo leti Heteleriweke' },
  td_summary_total_xp:      { en:'Total Class XP', zu:'Isamba se-XP Yekilasi', st:'Palo Yohle ya XP ya Sehlopha', xh:'Isamba se-XP Yeklasi', af:'Totale Klas XP', ve:'Tshivhalo tsho Ḓalaho tsha XP ya Kilasi', ts:'Nhlayo Hinkwayo ya XP ya Kilasi' },
  td_th_student:            { en:'Student', zu:'Umfundi', st:'Seithuti', xh:'Umfundi', af:'Leerder', ve:'Mugudi', ts:'Mudyondzi' },
  td_th_lessons:            { en:'Lessons Completed', zu:'Izifundo Eziqediwe', st:'Dithuto tse Phethilweng', xh:'Iizifundo Ezigqityiweyo', af:'Voltooide Lesse', ve:'Zwifundo zwo Fhedzwaho', ts:'Tidyondzo leti Heteleriweke' },
  td_th_progress:           { en:'Progress', zu:'Inqubekelaphambili', st:'Tswelopele', xh:'Inkqubela', af:'Vordering', ve:'Mvelaphanda', ts:'Nhluvukiso' },
  td_th_xp:                 { en:'XP', zu:'XP', st:'XP', xh:'XP', af:'XP', ve:'XP', ts:'XP' },
  td_th_last_activity:      { en:'Last Activity', zu:'Umsebenzi Wokugcina', st:'Ketso ya ho Qetela', xh:'Umsebenzi Wokugqibela', af:'Laaste Aktiwiteit', ve:'Mishumo ya Mafhelelo', ts:'Ntirho wo Hetelela' },
  td_empty_initial:         { en:'Select a class above to view progress.', zu:'Khetha ikilasi ngenhla ukuze ubone inqubekelaphambili.', st:'Khetha sehlopha ka hodimo ho bona tswelopele.', xh:'Khetha iklasi ngasentla ukuze ubone inkqubela.', af:"Kies 'n klas hierbo om vordering te sien.", ve:'Khetha kilasi nga nntha u vhona mvelaphanda.', ts:'Hlawula kilasi laha henhla ku vona nhluvukiso.' },
  td_empty_no_students:     { en:'No students found in this class yet.', zu:'Abekho abafundi abatholakele kuleli kilasi okwamanje.', st:'Ha ho baithuti ba fumanweng sehlopheng sena hajwale.', xh:'Akukho bafundi bafunyenweyo kule klasi okwangoku.', af:'Geen studente in hierdie klas gevind nie.', ve:'A huna vhagudi vho wanalaho kilasi heyi zwazwino.', ts:'A ku na vadyondzi lava kumekaka eka kilasi leyi hi sweswi.' },
  /* ── School OS ── */
  sos_title:                 { en:'School Operating System', zu:'Uhlelo Lokuphatha Isikole', st:'Sistimi ya Tsamaiso ya Sekolo', xh:'Inkqubo Yolawulo Lwesikolo', af:'Skool Bedryfstelsel', ve:'Sisiteme ya Vhulanguli ha Tshikolo', ts:'Xifundzhiselo xa Vulawuri bya Xikolo' },
  sos_subtitle:               { en:'School Operating System', zu:'Uhlelo Lokuphatha Isikole', st:'Sistimi ya Tsamaiso ya Sekolo', xh:'Inkqubo Yolawulo Lwesikolo', af:'Skool Bedryfstelsel', ve:'Sisiteme ya Vhulanguli ha Tshikolo', ts:'Xifundzhiselo xa Vulawuri bya Xikolo' },
  sos_your_role:              { en:'Your role', zu:'Indima yakho', st:'Karolo ya hao', xh:'Indima yakho', af:'Jou rol', ve:'Vhudzulapo haṋu', ts:'Xiyimo xa wena' },
  sos_select_role:            { en:'Select role…', zu:'Khetha indima…', st:'Kgetha karolo…', xh:'Khetha indima…', af:'Kies rol…', ve:'Khetha vhudzulapo…', ts:'Hlawula xiyimo…' },
  sos_role_principal:         { en:'Principal / Admin', zu:'Uthisha Omkhulu / Umlawuli', st:'Hlooho ya Sekolo / Tsamaiso', xh:'Inqununu / Umlawuli', af:'Skoolhoof / Admin', ve:'Muhulwane wa Tshikolo / Mulangi', ts:'Nhloko ya Xikolo / Mulawuri' },
  sos_role_teacher:           { en:'Teacher', zu:'Uthisha', st:'Titjhere', xh:'Utitshala', af:'Onderwyser', ve:'Mudzidzisi', ts:'Mudyondzisi' },
  sos_role_learner:           { en:'Learner', zu:'Umfundi', st:'Seithuti', xh:'Umfundi', af:'Leerder', ve:'Mugudi', ts:'Mudyondzi' },
  sos_class:                  { en:'Class', zu:'Ikilasi', st:'Sehlopha', xh:'Iklasi', af:'Klas', ve:'Kilasi', ts:'Kilasi' },
  sos_your_name:              { en:'Your name', zu:'Igama lakho', st:'Lebitso la hao', xh:'Igama lakho', af:'Jou naam', ve:'Dzina ḽaṋu', ts:'Vito ra wena' },
  sos_teacher_name:           { en:'Teacher name', zu:'Igama Lothisha', st:'Lebitso la Titjhere', xh:'Igama Likatitshala', af:"Onderwyser se naam", ve:'Dzina ḽa Mudzidzisi', ts:'Vito ra Mudyondzisi' },
  sos_enter_system:           { en:'Enter System', zu:'Ngena Ohlelweni', st:'Kena Sistiming', xh:'Ngena Kwinkqubo', af:'Betree Stelsel', ve:'Dzhena Sisitemeni', ts:'Nghena Xifundzhiselweni' },

  sos_nav_main:               { en:'Main', zu:'Okuyinhloko', st:'Tse ka Sehlohong', xh:'Okuyintloko', af:'Hoof', ve:'Zwa Ndeme', ts:'Swa Nkoka' },
  sos_nav_dashboard:          { en:'Dashboard', zu:'Ibhodi Lolwazi', st:'Boto ya Tlhahlobo', xh:'Ibhodi Lolwazi', af:'Kontroleskerm', ve:'Bodo ya Mvelaphanda', ts:'Bodo ya Nhluvukiso' },
  sos_nav_timetable:          { en:'Timetable', zu:'Ishejuli', st:'Shejule', xh:'Ishejuli', af:'Rooster', ve:'Themu', ts:'Xikwama xa Nkarhi' },
  sos_nav_homework:           { en:'Homework', zu:'Umsebenzi Wasekhaya', st:'Mosebetsi wa Lapeng', xh:'Umsebenzi Wasekhaya', af:'Huiswerk', ve:'Mushumo wa Hayani', ts:'Ntirho wa Kaya' },
  sos_nav_notices:            { en:'Notices', zu:'Izaziso', st:'Ditsebiso', xh:'Izaziso', af:'Kennisgewings', ve:'Zwiziviso', ts:'Switiviso' },
  sos_nav_admin:              { en:'Admin', zu:'Ukuphatha', st:'Tsamaiso', xh:'Ulawulo', af:'Admin', ve:'Vhulanguli', ts:'Vulawuri' },
  sos_nav_attendance:         { en:'Attendance', zu:'Ukuya Kwesikole', st:'Ho ba Teng', xh:'Ukuya Esikolweni', af:'Bywoning', ve:'U Vha Hone', ts:'Vukona' },
  sos_nav_students:           { en:'Students', zu:'Abafundi', st:'Baithuti', xh:'Abafundi', af:'Leerders', ve:'Vhagudi', ts:'Vadyondzi' },
  sos_nav_reports:            { en:'Reports', zu:'Imibiko', st:'Ditlaleho', xh:'Iingxelo', af:'Verslae', ve:'Mafhungo', ts:'Swiviko' },
  sos_nav_modules:            { en:'Modules', zu:'Amamojula', st:'Dikarolo', xh:'Iimojuli', af:'Modules', ve:'Zwipiḓa', ts:'Swiyenge' },
  sos_nav_coding_robotics:    { en:'Coding & Robotics', zu:'Ukubhala Ikhodi & Amarobhothi', st:'Khoutu le Roboto', xh:'Ikhowudi & Iirobhothi', af:'Kodering & Robotika', ve:'Khoutu na Robhothi', ts:'Khowudi na Rovhoti' },

  sos_total_learners:         { en:'Total Learners', zu:'Isamba Sabafundi', st:'Palo Yohle ya Baithuti', xh:'Isamba Sabafundi', af:'Totale Leerders', ve:'Tshivhalo tsha Vhagudi', ts:'Nhlayo ya Vadyondzi' },
  sos_enrolled:               { en:'↑ enrolled', zu:'↑ ababhalisiwe', st:'↑ ba ngodisitsweng', xh:'↑ ababhalisiweyo', af:'↑ ingeskryf', ve:'↑ vho ṅwalisiwaho', ts:'↑ lava tsarisiweke' },
  sos_present_today:          { en:'Present Today', zu:'Abakhona Namuhla', st:'Ba Teng Kajeno', xh:'Abakhoyo Namhlanje', af:'Teenwoordig Vandag', ve:'Vha re Hone Ṋamusi', ts:'Lava nga Kona Namuntlha' },
  sos_homework_active:        { en:'Homework Tasks Active', zu:'Imisebenzi Yasekhaya Esebenzayo', st:'Mesebetsi ya Lapeng e Sebetsang', xh:'Imisebenzi Yasekhaya Esebenzayo', af:'Aktiewe Huiswerktake', ve:'Mishumo ya Hayani i Khouno', ts:'Mintirho ya Kaya leyi Tirhaka' },
  sos_active_notices:         { en:'Active Notices', zu:'Izaziso Ezisebenzayo', st:'Ditsebiso tse Sebetsang', xh:'Izaziso Ezisebenzayo', af:'Aktiewe Kennisgewings', ve:'Zwiziviso zwi Khouno', ts:'Switiviso leswi Tirhaka' },
  sos_latest_notices:         { en:'Latest Notices', zu:'Izaziso Zakamuva', st:'Ditsebiso tsa Morao-rao', xh:'Izaziso Zakutsha', af:'Nuutste Kennisgewings', ve:'Zwiziviso zwa Zwino', ts:'Switiviso Leswintshwa' },
  sos_view_all:               { en:'View all →', zu:'Buka konke →', st:'Bona tsohle →', xh:'Jonga konke →', af:'Bekyk almal →', ve:'Sedza zwoṱhe →', ts:'Vona hinkwaswo →' },
  sos_upcoming_homework:      { en:'Upcoming Homework', zu:'Umsebenzi Wasekhaya Ozayo', st:'Mosebetsi wa Lapeng o Tlang', xh:'Umsebenzi Wasekhaya Ozayo', af:'Komende Huiswerk', ve:'Mushumo wa Hayani u Ḓaho', ts:'Ntirho wa Kaya lowu Taka' },
  sos_todays_timetable:       { en:"Today's Timetable", zu:'Ishejuli Yanamuhla', st:'Shejule ya Kajeno', xh:'Ishejuli Yanamhlanje', af:'Vandag se Rooster', ve:'Themu ya Ṋamusi', ts:'Xikwama xa Namuntlha' },
  sos_full_timetable:         { en:'Full timetable →', zu:'Ishejuli egcwele →', st:'Shejule e feletseng →', xh:'Ishejuli epheleleyo →', af:'Volledige rooster →', ve:'Themu yo fhelaho →', ts:'Xikwama hinkwaxo →' },

  sos_class_timetable:        { en:'Class Timetable', zu:'Ishejuli Yekilasi', st:'Shejule ya Sehlopha', xh:'Ishejuli Yeklasi', af:'Klasrooster', ve:'Themu ya Kilasi', ts:'Xikwama xa Kilasi' },
  sos_add_slot:               { en:'+ Add Slot', zu:'+ Engeza Isikhala', st:'+ Kenya Sebaka', xh:'+ Yongeza Isithuba', af:'+ Voeg Gleuf By', ve:'+ Ingedza Tshifhinga', ts:'+ Engetela Nkarhi' },
  sos_add_slot_title:         { en:'Add Timetable Slot', zu:'Engeza Isikhala Sesheduli', st:'Kenya Sebaka sa Shejule', xh:'Yongeza Isithuba Seshejuli', af:'Voeg Roostergleuf By', ve:'Ingedza Tshifhinga tsha Themu', ts:'Engetela Nkarhi wa Xikwama' },
  sos_day:                    { en:'Day', zu:'Usuku', st:'Letsatsi', xh:'Usuku', af:'Dag', ve:'Ḓuvha', ts:'Siku' },
  sos_period:                 { en:'Period', zu:'Isikhathi', st:'Nako', xh:'Ixesha', af:'Periode', ve:'Tshifhinga', ts:'Nkarhi' },
  sos_subject:                { en:'Subject', zu:'Isifundo', st:'Thuto', xh:'Isifundo', af:'Vak', ve:'Tshifundwa', ts:'Dyondzo' },
  sos_teacher:                { en:'Teacher', zu:'Uthisha', st:'Titjhere', xh:'Utitshala', af:'Onderwyser', ve:'Mudzidzisi', ts:'Mudyondzisi' },
  sos_save_slot:              { en:'Save Slot', zu:'Londoloza Isikhala', st:'Boloka Sebaka', xh:'Gcina Isithuba', af:'Stoor Gleuf', ve:'Vhulunga Tshifhinga', ts:'Hlayisa Nkarhi' },
  sos_time:                   { en:'Time', zu:'Isikhathi', st:'Nako', xh:'Ixesha', af:'Tyd', ve:'Tshifhinga', ts:'Nkarhi' },

  sos_post_new_homework:      { en:'+ Post New Homework', zu:'+ Faka Umsebenzi Wasekhaya Omusha', st:'+ Kenya Mosebetsi wa Lapeng o Motjha', xh:'+ Faka Umsebenzi Wasekhaya Omtsha', af:'+ Plaas Nuwe Huiswerk', ve:'+ Ṱumela Mushumo wa Hayani Muswa', ts:'+ Rhumela Ntirho wa Kaya lowuntshwa' },
  sos_hw_title:               { en:'Title', zu:'Isihloko', st:'Sehlooho', xh:'Isihloko', af:'Titel', ve:'Tshiṱoho', ts:'Nhloko-mhaka' },
  sos_due_date:                { en:'Due Date', zu:'Usuku Lokuqedwa', st:'Letsatsi la ho Fella', xh:'Umhla Wokugqityezelwa', af:'Sperdatum', ve:'Ḓuvha ḽa u Fhedza', ts:'Siku ro Hetelela' },
  sos_description:            { en:'Description / Instructions', zu:'Incazelo / Imiyalelo', st:'Tlhaloso / Ditaelo', xh:'Inkcazelo / Imiyalelo', af:'Beskrywing / Instruksies', ve:'Ṱhaluso / Nyeletshedzo', ts:'Nhlamuselo / Swiletelo' },
  sos_post_homework:          { en:'Post Homework', zu:'Faka Umsebenzi Wasekhaya', st:'Kenya Mosebetsi wa Lapeng', xh:'Faka Umsebenzi Wasekhaya', af:'Plaas Huiswerk', ve:'Ṱumela Mushumo wa Hayani', ts:'Rhumela Ntirho wa Kaya' },
  sos_homework_tasks:         { en:'Homework Tasks', zu:'Imisebenzi Yasekhaya', st:'Mesebetsi ya Lapeng', xh:'Imisebenzi Yasekhaya', af:'Huiswerktake', ve:'Mishumo ya Hayani', ts:'Mintirho ya Kaya' },
  sos_all_classes:            { en:'All Classes', zu:'Wonke Amakilasi', st:'Dihlopha Tsohle', xh:'Zonke Iiklasi', af:'Alle Klasse', ve:'Kilasi Dzoṱhe', ts:'Tikilasi Hinkwato' },
  sos_posted_by:              { en:'Posted by', zu:'Kufakwe ngu', st:'E kentswe ke', xh:'Ifakwe ngu', af:'Geplaas deur', ve:'Yo ṱumelwa nga', ts:'Yi rhumeriwe hi' },
  sos_due:                    { en:'Due', zu:'Kufanele kube', st:'E lokelang ho fela', xh:'Umhla Wokugqibela', af:'Vervaldatum', ve:'U fanela u fhedza nga', ts:'Ku fanele ku herisiwa hi' },
  sos_delete:                 { en:'Delete', zu:'Susa', st:'Hlakola', xh:'Cima', af:'Verwyder', ve:'Vhusa', ts:'Susa' },

  sos_post_notice_title:      { en:'+ Post Notice', zu:'+ Faka Isaziso', st:'+ Kenya Tsebiso', xh:'+ Faka Isaziso', af:'+ Plaas Kennisgewing', ve:'+ Ṱumela Tsivhiso', ts:'+ Rhumela Xitiviso' },
  sos_priority:               { en:'Priority', zu:'Okubalulekile', st:'Bohlokwa', xh:'Ukubaluleka', af:'Prioriteit', ve:'Ndeme', ts:'Nkoka' },
  sos_priority_general:       { en:'General', zu:'Okujwayelekile', st:'Tlwaelo', xh:'Jikelele', af:'Algemeen', ve:'Zwa Nga Ḓaho', ts:'Ntolovelo' },
  sos_priority_important:     { en:'Important', zu:'Okubalulekile', st:'Bohlokwa', xh:'Okubalulekileyo', af:'Belangrik', ve:'Zwa Ndeme', ts:'Swa Nkoka' },
  sos_priority_urgent:        { en:'Urgent', zu:'Okuphuthumayo', st:'Potlako', xh:'Okuxhaphakileyo', af:'Dringend', ve:'Zwi Tanganedzaho', ts:'Xihatla' },
  sos_message:                { en:'Message', zu:'Umlayezo', st:'Molaetsa', xh:'Umyalezo', af:'Boodskap', ve:'Mulaedza', ts:'Rungula' },
  sos_post_notice_btn:        { en:'Post Notice', zu:'Faka Isaziso', st:'Kenya Tsebiso', xh:'Faka Isaziso', af:'Plaas Kennisgewing', ve:'Ṱumela Tsivhiso', ts:'Rhumela Xitiviso' },
  sos_school_notices:         { en:'School Notices', zu:'Izaziso Zesikole', st:'Ditsebiso tsa Sekolo', xh:'Izaziso Zesikolo', af:'Skoolkennisgewings', ve:'Zwiziviso zwa Tshikolo', ts:'Switiviso swa Xikolo' },

  sos_title_attendance:       { en:'Attendance Register', zu:'Irejista Yokuya Esikoleni', st:'Rejistara ya ho ba Teng', xh:'Irejista Yendwendwelo', af:'Bywoningsregister', ve:'Rejisita ya u Vha Hone', ts:'Rejista ya Vukona' },
  sos_save_register:          { en:'Save Register', zu:'Londoloza Irejista', st:'Boloka Rejistara', xh:'Gcina Irejista', af:'Stoor Register', ve:'Vhulunga Rejisita', ts:'Hlayisa Rejista' },
  sos_present:                { en:'✓ Present', zu:'✓ Ukhona', st:'✓ O Teng', xh:'✓ Ukhona', af:'✓ Teenwoordig', ve:'✓ U Hone', ts:'✓ U Kona' },
  sos_absent:                 { en:'✗ Absent', zu:'✗ Akekho', st:'✗ Ha a Yo', xh:'✗ Akekho', af:'✗ Afwesig', ve:'✗ Ha Ngo', ts:'✗ A Nga Kona' },
  sos_late:                   { en:'⏰ Late', zu:'⏰ Ephuzile', st:'⏰ O Fihla Morao', xh:'⏰ Uyalibazisa', af:'⏰ Laat', ve:'⏰ U Lenga', ts:'⏰ U Fika Enkarhini' },
  sos_loading_learners:       { en:'Loading learners…', zu:'Ilayisha abafundi…', st:'E laola baithuti…', xh:'Iyalayisha abafundi…', af:'Laai leerders…', ve:'I khou loda vhagudi…', ts:'Yi layisha vadyondzi…' },
  sos_th_learner:             { en:'Learner', zu:'Umfundi', st:'Seithuti', xh:'Umfundi', af:'Leerder', ve:'Mugudi', ts:'Mudyondzi' },
  sos_status:                 { en:'Status', zu:'Isimo', st:'Boemo', xh:'Imeko', af:'Status', ve:'Vhuimo', ts:'Xiyimo' },
  sos_not_marked:             { en:'Not marked', zu:'Akuphawulwe', st:'Ha e a Tshwaiwa', xh:'Akuphawulwanga', af:'Nie gemerk nie', ve:'A Ho Ngo Sumbedzwa', ts:'A Yi Phawuriwangi' },
  sos_no_learners_in_class:   { en:'No learners in this class yet. Enrol learners in the Students section.', zu:'Abekho abafundi kuleli kilasi okwamanje. Bhalisa abafundi esigabeni Sabafundi.', st:'Ha ho baithuti sehlopheng sena hajwale. Ngodisa baithuti karolong ya Baithuti.', xh:'Akukho bafundi kule klasi okwangoku. Bhalisa abafundi kwicandelo Labafundi.', af:'Geen leerders in hierdie klas nie. Skryf leerders in by die Studente-afdeling.', ve:'A huna vhagudi kilasi heyi zwazwino. Ṅwalisani vhagudi tshipiḓani tsha Vhagudi.', ts:'A ku na vadyondzi eka kilasi leyi hi sweswi. Tsarisa vadyondzi eka xiyenge xa Vadyondzi.' },

  sos_enrol_new:              { en:'+ Enrol New Learner', zu:'+ Bhalisa Umfundi Omusha', st:'+ Ngodisa Seithuti se Setjha', xh:'+ Bhalisa Umfundi Omtsha', af:'+ Skryf Nuwe Leerder In', ve:'+ Ṅwalisa Mugudi Muswa', ts:'+ Tsarisa Mudyondzi lontshwa' },
  sos_full_name:              { en:'Full Name', zu:'Igama Eliphelele', st:'Lebitso le Feletseng', xh:'Igama Elipheleleyo', af:'Volle Naam', ve:'Dzina Ḽoṱhe', ts:'Vito hinkwaro' },
  sos_grade_class:            { en:'Grade / Class', zu:'Ibanga / Ikilasi', st:'Kereiti / Sehlopha', xh:'Ibanga / Iklasi', af:'Graad / Klas', ve:'Girata / Kilasi', ts:'Grado / Kilasi' },
  sos_enrol_learner:          { en:'Enrol Learner', zu:'Bhalisa Umfundi', st:'Ngodisa Seithuti', xh:'Bhalisa Umfundi', af:'Skryf Leerder In', ve:'Ṅwalisa Mugudi', ts:'Tsarisa Mudyondzi' },
  sos_all_learners:           { en:'All Learners', zu:'Bonke Abafundi', st:'Baithuti Bohle', xh:'Bonke Abafundi', af:'Alle Leerders', ve:'Vhagudi Vhoṱhe', ts:'Vadyondzi Hinkwavo' },
  sos_th_name:                { en:'Name', zu:'Igama', st:'Lebitso', xh:'Igama', af:'Naam', ve:'Dzina', ts:'Vito' },
  sos_th_grade:               { en:'Grade', zu:'Ibanga', st:'Kereiti', xh:'Ibanga', af:'Graad', ve:'Girata', ts:'Grado' },
  sos_th_class:               { en:'Class', zu:'Ikilasi', st:'Sehlopha', xh:'Iklasi', af:'Klas', ve:'Kilasi', ts:'Kilasi' },
  sos_th_enrolled:            { en:'Enrolled', zu:'Kubhalisiwe', st:'E Ngodisitswe', xh:'Ubhalisiwe', af:'Ingeskryf', ve:'Ṅwalisiwe', ts:'Tsarisiwile' },
  sos_no_learners_yet:        { en:'No learners enrolled yet.', zu:'Abekho abafundi ababhalisiwe okwamanje.', st:'Ha ho baithuti ba ngodisitsweng hajwale.', xh:'Akukho bafundi ababhalisiweyo okwangoku.', af:'Nog geen leerders ingeskryf nie.', ve:'A huna vhagudi vho ṅwalisiwaho zwazwino.', ts:'A ku si na vadyondzi lava tsarisiweke.' },

  sos_avg_attendance:         { en:'Avg Attendance', zu:'Isilinganiso Sokuya Esikoleni', st:'Karolelano ya ho ba Teng', xh:'Umyinge Wendwendwelo', af:'Gem. Bywoning', ve:'Tshivhalo tsha u Vha Hone', ts:'Xiyimo xa Vukona' },
  sos_hw_completion:          { en:'Homework Completion', zu:'Ukuqedwa Komsebenzi Wasekhaya', st:'Phethiso ya Mosebetsi wa Lapeng', xh:'Ukugqitywa Komsebenzi Wasekhaya', af:'Huiswerk Voltooiing', ve:'U Fhedziswa ha Mushumo wa Hayani', ts:'Ku Herisiwa ka Ntirho wa Kaya' },
  sos_module_progress:        { en:'Module Progress by Class', zu:'Inqubekelaphambili Yemojula Ngekilasi', st:'Tswelopele ya Karolo ka Sehlopha', xh:'Inkqubela Yemojuli Ngeklasi', af:'Module Vordering per Klas', ve:'Mvelaphanda ya Tshipiḓa nga Kilasi', ts:'Nhluvukiso wa Xiyenge hi Kilasi' },

  sos_toast_enter_subject:    { en:'Please enter a subject name', zu:'Sicela ufake igama lesifundo', st:'Ka kopo kenya lebitso la thuto', xh:'Nceda ufake igama lesifundo', af:"Voer asseblief 'n vaknaam in", ve:'Ri a humbela u dzhenisa dzina ḽa tshifundwa', ts:'Hi kombela u nghenisa vito ra dyondzo' },
  sos_toast_added_to:         { en:'added to', zu:'kwengezwe ku', st:'e kentswe ho', xh:'yongezwe ku', af:'bygevoeg by', ve:'yo engedzwa kha', ts:'yi engeteriwe eka' },
  sos_toast_period:           { en:'period', zu:'isikhathi', st:'nako', xh:'ixesha', af:'periode', ve:'tshifhinga', ts:'nkarhi' },
  sos_toast_slot_removed:     { en:'Slot removed', zu:'Isikhala sisusiwe', st:'Sebaka se tlositswe', xh:'Isithuba sisusiwe', af:'Gleuf verwyder', ve:'Tshifhinga tsho vhuswa', ts:'Nkarhi wu susiwile' },
  sos_confirm_remove_slot:    { en:'Remove this timetable slot?', zu:'Susa lesi sikhala sesheduli?', st:'Tlosa sebaka sena sa shejule?', xh:'Susa esi sithuba seshejuli?', af:'Verwyder hierdie roostergleuf?', ve:'Vhusa tshifhinga tshi tsha themu itshi?', ts:'Susa nkarhi lowu wa xikwama?' },
  sos_toast_fill_title_due:   { en:'Please fill in the title and due date', zu:'Sicela ugcwalise isihloko nosuku lokuqedwa', st:'Ka kopo tlatsa sehlooho le letsatsi la ho fela', xh:'Nceda uzalise isihloko nomhla wokugqityezelwa', af:'Vul asseblief die titel en sperdatum in', ve:'Ri a humbela u ḓadza tshiṱoho na ḓuvha ḽa u fhedza', ts:'Hi kombela u tatisa nhloko-mhaka na siku ro hetelela' },
  sos_toast_homework_posted:  { en:'Homework posted!', zu:'Umsebenzi wasekhaya ufakiwe!', st:'Mosebetsi wa lapeng o kentswe!', xh:'Umsebenzi wasekhaya ufakiwe!', af:'Huiswerk geplaas!', ve:'Mushumo wa hayani wo ṱumelwa!', ts:'Ntirho wa kaya wu rhumeriwile!' },
  sos_confirm_delete_hw:      { en:'Delete this homework task?', zu:'Susa lo msebenzi wasekhaya?', st:'Hlakola mosebetsi ona wa lapeng?', xh:'Cima lo msebenzi wasekhaya?', af:'Verwyder hierdie huiswerktaak?', ve:'Vhusa mushumo uyu wa hayani?', ts:'Susa ntirho lowu wa kaya?' },
  sos_toast_homework_removed: { en:'Homework removed', zu:'Umsebenzi wasekhaya ususiwe', st:'Mosebetsi wa lapeng o tlositswe', xh:'Umsebenzi wasekhaya ususiwe', af:'Huiswerk verwyder', ve:'Mushumo wa hayani wo vhuswa', ts:'Ntirho wa kaya wu susiwile' },
  sos_toast_fill_all:         { en:'Please fill in all fields', zu:'Sicela ugcwalise zonke izinsimu', st:'Ka kopo tlatsa dintlha tsohle', xh:'Nceda uzalise zonke iindawo', af:'Vul asseblief alle velde in', ve:'Ri a humbela u ḓadza mafuresho oṱhe', ts:'Hi kombela u tatisa switirho hinkwaswo' },
  sos_toast_notice_posted:    { en:'Notice posted!', zu:'Isaziso sifakiwe!', st:'Tsebiso e kentswe!', xh:'Isaziso sifakiwe!', af:'Kennisgewing geplaas!', ve:'Tsivhiso yo ṱumelwa!', ts:'Xitiviso xi rhumeriwile!' },
  sos_confirm_delete_notice:  { en:'Delete this notice?', zu:'Susa lesi saziso?', st:'Hlakola tsebiso ena?', xh:'Cima esi saziso?', af:'Verwyder hierdie kennisgewing?', ve:'Vhusa tsivhiso iyi?', ts:'Susa xitiviso lexi?' },
  sos_toast_notice_removed:   { en:'Notice removed', zu:'Isaziso sisusiwe', st:'Tsebiso e tlositswe', xh:'Isaziso sisusiwe', af:'Kennisgewing verwyder', ve:'Tsivhiso yo vhuswa', ts:'Xitiviso xi susiwile' },
  sos_toast_attendance_saved: { en:'Attendance register saved', zu:'Irejista yokuya esikoleni ilondoloziwe', st:'Rejistara ya ho ba teng e bolokilwe', xh:'Irejista yendwendwelo igciniwe', af:'Bywoningsregister gestoor', ve:'Rejisita ya u vha hone yo vhulungwa', ts:'Rejista ya vukona yi hlayisiwile' },
  sos_toast_enter_learner_name:{ en:"Please enter the learner's name", zu:'Sicela ufake igama lomfundi', st:'Ka kopo kenya lebitso la seithuti', xh:'Nceda ufake igama lomfundi', af:'Voer asseblief die leerder se naam in', ve:'Ri a humbela u dzhenisa dzina ḽa mugudi', ts:'Hi kombela u nghenisa vito ra mudyondzi' },
  sos_toast_enrolled_in:      { en:'enrolled in', zu:'ubhalisiwe ku', st:'o ngodisitswe ho', xh:'ubhalisiwe kwi', af:'ingeskryf in', ve:'o ṅwalisiwa kha', ts:'u tsarisiwile eka' },
  sos_select_name:            { en:'Select name…', zu:'Khetha igama…', st:'Kgetha lebitso…', xh:'Khetha igama…', af:'Kies naam…', ve:'Khetha dzina…', ts:'Hlawula vito…' },
  sos_no_notices:             { en:'No notices', zu:'Azikho izaziso', st:'Ha ho ditsebiso', xh:'Akukho zaziso', af:'Geen kennisgewings nie', ve:'A Huna Zwiziviso', ts:'A Ku na Switiviso' },
  sos_no_notices_posted:      { en:'No notices posted.', zu:'Azikho izaziso ezifakiwe.', st:'Ha ho ditsebiso tse kentsweng.', xh:'Akukho zaziso zifakiweyo.', af:'Geen kennisgewings geplaas nie.', ve:'A huna zwiziviso zwo ṱumelwaho.', ts:'A ku na switiviso leswi rhumeriweke.' },
  sos_no_homework_yet:        { en:'No homework posted yet.', zu:'Awukho umsebenzi wasekhaya ofakiwe okwamanje.', st:'Ha ho mosebetsi wa lapeng o kentsweng hajwale.', xh:'Awukho umsebenzi wasekhaya ofakiweyo okwangoku.', af:'Nog geen huiswerk geplaas nie.', ve:'A huna mushumo wa hayani wo ṱumelwaho zwazwino.', ts:'A ku si na ntirho wa kaya lowu rhumeriweke.' },

  subj_maths:                 { en:'Mathematics', zu:'Izibalo', st:'Dipalo', xh:'IMathematika', af:'Wiskunde', ve:'Mbalo', ts:'Mianga' },
  subj_english:               { en:'English', zu:'IsiNgisi', st:'Senyesemane', xh:'IsiNgesi', af:'Engels', ve:'Isingesi', ts:'Xinghezi' },
  subj_science:                { en:'Science', zu:'Isayensi', st:'Saense', xh:'Isayensi', af:'Wetenskap', ve:'Sains', ts:'Sayense' },
  subj_zulu_siswati:          { en:'IsiZulu/SiSwati', zu:'IsiZulu/SiSwati', st:'IsiZulu/SiSwati', xh:'IsiZulu/SiSwati', af:'IsiZulu/SiSwati', ve:'IsiZulu/SiSwati', ts:'IsiZulu/SiSwati' },
  subj_life_skills:           { en:'Life Skills', zu:'Amakhono Ekuphila', st:'Bokgoni ba Bophelo', xh:'Izakhono Zobomi', af:'Lewensvaardighede', ve:'Vhukoni ha Vhutshilo', ts:'Vuswikoti bya Vutomi' },
  subj_coding:                { en:'Coding', zu:'Ukubhala Ikhodi', st:'Khoutu', xh:'Ikhowudi', af:'Kodering', ve:'Khoutu', ts:'Khowudi' },
  subj_robotics:               { en:'Robotics', zu:'Amarobhothi', st:'Roboto', xh:'Iirobhothi', af:'Robotika', ve:'Robhothi', ts:'Rovhoti' },
  subj_art:                    { en:'Art', zu:'Ubuciko', st:'Bonono', xh:'Ubugcisa', af:'Kuns', ve:'Vhutali', ts:'Vuswikoti' },
  subj_other:                  { en:'Other', zu:'Okunye', st:'Tse Ding', xh:'Enye', af:'Ander', ve:'Zwiṅwe', ts:'Swin\u2019wana' },

  grade_r:  { en:'Grade R', zu:'Grade R', st:'Grade R', xh:'Grade R', af:'Graad R', ve:'Grade R', ts:'Grade R' },
  grade_1:  { en:'Grade 1', zu:'Grade 1', st:'Grade 1', xh:'Grade 1', af:'Graad 1', ve:'Grade 1', ts:'Grade 1' },
  grade_2:  { en:'Grade 2', zu:'Grade 2', st:'Grade 2', xh:'Grade 2', af:'Graad 2', ve:'Grade 2', ts:'Grade 2' },
  grade_3:  { en:'Grade 3', zu:'Grade 3', st:'Grade 3', xh:'Grade 3', af:'Graad 3', ve:'Grade 3', ts:'Grade 3' },
  grade_4:  { en:'Grade 4', zu:'Grade 4', st:'Grade 4', xh:'Grade 4', af:'Graad 4', ve:'Grade 4', ts:'Grade 4' },
  grade_5:  { en:'Grade 5', zu:'Grade 5', st:'Grade 5', xh:'Grade 5', af:'Graad 5', ve:'Grade 5', ts:'Grade 5' },
  grade_6:  { en:'Grade 6', zu:'Grade 6', st:'Grade 6', xh:'Grade 6', af:'Graad 6', ve:'Grade 6', ts:'Grade 6' },

  day_mon:  { en:'Monday', zu:'uMsombuluko', st:'Mmantaha', xh:'uMvulo', af:'Maandag', ve:'Musumbuluwo', ts:'Musumbhunuku' },
  day_tue:  { en:'Tuesday', zu:'uLwesibili', st:'Labobedi', xh:'uLwesibini', af:'Dinsdag', ve:'Ḽavhuvhili', ts:'Ravumbirhi' },
  day_wed:  { en:'Wednesday', zu:'uLwesithathu', st:'Laboraro', xh:'uLwesithathu', af:'Woensdag', ve:'Ḽavhuraru', ts:'Ravunharhu' },
  day_thu:  { en:'Thursday', zu:'uLwesine', st:'Labone', xh:'uLwesine', af:'Donderdag', ve:'Ḽavhuṋa', ts:'Ravumune' },
  day_fri:  { en:'Friday', zu:'uLwesihlanu', st:'Labohlano', xh:'uLwesihlanu', af:'Vrydag', ve:'Ḽavhuṱanu', ts:'Ravuntlhanu' },
  /* ── Teacher Guide ── */
  tg_title:               { en:'Teacher Lesson Guide', zu:'Umqondiso Wesifundo Wothisha', st:'Tataiso ya Thuto ya Titjhere', xh:'Isikhokelo Sesifundo Sikatitshala', af:'Onderwyser Lesgids', ve:'Gonḓo ya Tshifundwa ya Mudzidzisi', ts:'Nkongomiso wa Dyondzo ya Mudyondzisi' },
  tg_programme:            { en:'Future Ready Learners Programme', zu:'Uhlelo Lwabafundi Abalungele Ikusasa', st:'Lenaneo la Baithuti ba Itokiselitseng Bokamoso', xh:'Inkqubo Yabafundi Abalungele Ikamva', af:'Toekomsgereed Leerders Program', ve:'Mbekanyamushumo ya Vhagudi vho Ḓilugiselaho Vhumatshelo', ts:'Nongonoko wa Vadyondzi lava Lulamiseriweke Vumundzuku' },
  tg_week12:               { en:'Week 1 & 2', zu:'Iviki 1 no-2', st:'Beke ya 1 le ya 2', xh:'Iveki 1 no-2', af:'Week 1 & 2', ve:'Vhege ya 1 na ya 2', ts:'Vhiki ra 1 na ra 2' },
  tg_developed_by:         { en:'Developed by Coach L Academy', zu:'Kwenziwe yi-Coach L Academy', st:'E entswe ke Coach L Academy', xh:'Yenziwe yi-Coach L Academy', af:'Ontwikkel deur Coach L Academy', ve:'Yo bveledzwa nga Coach L Academy', ts:'Yi endliwe hi Coach L Academy' },
  tg_for_grades:           { en:'For Grade 00–6', zu:'Ebangeni le-00–6', st:'Bakeng sa Kereiti ya 00–6', xh:'Kwibanga le-00–6', af:'Vir Graad 00–6', ve:'Kha Girata 00–6', ts:'Eka Grado 00–6' },

  tg_before_begin:         { en:'Before You Begin — Key Tips', zu:'Ngaphambi Kokuqala — Amathiphu Asemqoka', st:'Pele o Qala — Maeletsane a Bohlokwa', xh:'Ngaphambi Kokuqala — Iingcebiso Eziphambili', af:'Voordat Jy Begin — Sleuteltips', ve:'Musi U Sa Thoma — Themendelo dza Ndeme', ts:'Loko U Nga Si Sungula — Switsundzuxo swa Nkoka' },
  tg_tip1_h:               { en:'Start with the app, together', zu:'Qala nge-app, nonke ndawonye', st:'Qala ka app, mmoho', xh:'Qala nge-app, ndawonye', af:'Begin saam met die app', ve:'Thomani na app, noṱhe', ts:'Sungula hi app, swin\u2019we' },
  tg_tip1_b:               { en:'Do the first lesson as a whole class on the projector/screen before learners work individually or in pairs.', zu:'Yenza isifundo sokuqala njengekilasi lonke kusetshenziswa iphrojekthi/isikrini ngaphambi kokuba abafundi basebenze bebodwa noma babili.', st:'Etsa thuto ya pele e le sehlopha sohle ka projeketara/skirini pele baithuti ba sebetsa ka bonngwe kapa ka bobedi.', xh:'Yenza isifundo sokuqala njengeklasi iphela kwiprojektha/iskrini ngaphambi kokuba abafundi basebenze bebodwa okanye ngababini.', af:'Doen die eerste les as \u2019n hele klas op die projektor/skerm voordat leerders individueel of in pare werk.', ve:'Itani tshifundwa tsha u thoma sa kilasi yoṱhe kha projekhithara/tsirini phanda ha vhagudi u shuma vhoṱhe kana nga vhavhili.', ts:'Endla dyondzo yo sungula tanihi kilasi hinkwayo eka projekthara/xikrini emahlweni ka loko vadyondzi va tirha va ri voxe kumbe hi swimbirhi.' },
  tg_tip2_h:               { en:'Unplugged first', zu:'Okungaxhunyiwe kuqala', st:'E sa Hokahanyeng Pele', xh:'Okungaxhunyiwe Kuqala', af:'Ontkoppel eerste', ve:'Zwi si na Gesi Zwa Thoma', ts:'Nga Ri na Korente Ku Sungula' },
  tg_tip2_b:               { en:'Even if you have robot kits, do the unplugged version first — it builds the mental model before adding hardware complexity.', zu:'Ngisho noma unamathikithi erobhothi, yenza uhlobo olungaxhunyiwe kuqala — kwakha imodeli yengqondo ngaphambi kokwengeza inkinga yehadiwe.', st:'Le ha o na le dikiti tsa roboto, etsa mofuta o sa hokahanyeng pele — o haha mohlala wa kelello pele o eketsa bothata ba hardware.', xh:'Nokuba unamakhithi erobhothi, yenza uhlobo olungaxhunyiwe kuqala — yakha imodeli yengqondo ngaphambi kokongeza intsingiselo yehardware.', af:'Selfs al het jy robotstelle, doen eers die ontkoppelde weergawe — dit bou die mentale model voor jy hardeware-kompleksiteit byvoeg.', ve:'Naho no vha na zwikwama zwa robhoti, itani vhurendo hu si na gesi u thoma — zwi fhaṱa muhumbulo phanda ha u engedza vhukoni ha hardware.', ts:'Hambiloko u ri na swikwama swa rovhoti, endla xiyimo lexi nga ri na korente ku sungula — xi aka xikhumbulo emahlweni ko engetela nkarhi wa hardware.' },
  tg_tip3_h:               { en:'Praise process, not answers', zu:'Dumisa inqubo, hhayi izimpendulo', st:'Rorisa tshepetso, eseng dikarabo', xh:'Dumisa inkqubo, hayi iimpendulo', af:'Prys die proses, nie antwoorde nie', ve:'Rendani maitele, hu si phindulo', ts:'Dzunisa maendlelo, ku nga ri tinhlamulo' },
  tg_tip3_b:               { en:'Say "I like how you planned that step by step" not just "well done!" — builds computational thinking habits.', zu:'Thi "Ngiyakuthanda indlela ohlele ngayo isinyathelo ngesinyathelo" hhayi nje "wenze kahle!" — kwakha imikhuba yokucabanga ngekhomputha.', st:'E re "Ke rata kamoo o rerileng ka teng mohato ka mohato" eseng feela "o entse hantle!" — o haha mekgwa ya ho nahana ka dikhomphiutha.', xh:'Yithi "Ndiyakuthanda indlela ocwangcise ngayo inyathelo ngenyathelo" hayi nje "wenze kakuhle!" — yakha imikhwa yokucinga ngekhompyutha.', af:'Sê "Ek hou van hoe jy dit stap-vir-stap beplan het" nie net "goed gedoen nie!" — bou berekeningsdenke-gewoontes.', ve:'Ambani "Ndi funa nga hune na dzudzanya ngaho tshiga tshiga" hu si "wo ita zwavhuḓi fhedzi!" — zwi fhaṱa mikhwa ya u humbula nga khomphutha.', ts:'Vula "Ndzi swi tsakela ndlela leyi u lulamiseke ha yona xitepisi hi xitepisi" ku nga ri "u endle kahle ntsena!" — swi aka mikhuvo yo anakanya hi khomphutara.' },
  tg_tip4_h:               { en:'XP motivates', zu:'I-XP iyakhuthaza', st:'XP e a Susumetsa', xh:'I-XP Iyakhuthaza', af:'XP motiveer', ve:'XP i a Ṱuṱuwedza', ts:'XP yi Khutaza' },
  tg_tip4_b:               { en:'Remind learners about their XP and badges — let high-XP learners help others. Peer teaching is powerful.', zu:'Khumbuza abafundi nge-XP yabo namabheji — vumela abafundi abane-XP ephezulu basize abanye. Ukufundisana kwabalingani kunamandla.', st:'Hopotsa baithuti ka XP ya bona le dibetšhe — lumella baithuti ba nang le XP e phahameng ho thusa ba bang. Ho ruta ba lekana ho na le matla.', xh:'Khumbuza abafundi nge-XP yabo namabheji — vumela abafundi abane-XP ephakamileyo bancede abanye. Ukufundisana kontanga kunamandla.', af:'Herinner leerders aan hul XP en kentekens — laat hoë-XP leerders ander help. Portuur-onderrig is kragtig.', ve:'Humbudzani vhagudi nga XP yavho na zwiswaya — litshani vhagudi vhane vha vha na XP nnzhi vha thuse vhaṅwe. U funza vhathu vha re na tshaka nthihi ndi maanḓa.', ts:'Tsundzuxa vadyondzi hi XP ya vona ni tibheji — pfumelela vadyondzi lava nga na XP yo tala va pfuna van\u2019wana. Ku dyondzisana ka vanakulobye i matimba.' },
  tg_tip5_h:               { en:'Login is simple', zu:'Ukungena kulula', st:'Ho Kena ho Bonolo', xh:'Ukungena Kulula', af:'Aanmelding is eenvoudig', ve:'U Dzhena Zwi Leluwa', ts:'Ku Nghena Swi Olova' },
  tg_tip5_b:               { en:'Learners pick their class and name — no passwords. For Grade 00–2, teacher or helper can handle login.', zu:'Abafundi bakhetha ikilasi labo negama — akukho amaphasiwedi. Ebangeni le-00–2, uthisha noma umsizi angaphatha ukungena.', st:'Baithuti ba kgetha sehlopha sa bona le lebitso — ha ho di-password. Bakeng sa Kereiti ya 00–2, titjhere kapa mothusi a ka sebetsana le ho kena.', xh:'Abafundi bakhetha iklasi labo negama — akukho amaphasiwedi. Kwibanga le-00–2, utitshala okanye umncedisi angaphatha ukungena.', af:'Leerders kies hul klas en naam — geen wagwoorde nie. Vir Graad 00–2 kan die onderwyser of helper die aanmelding hanteer.', ve:'Vhagudi vha khetha kilasi yavho na dzina — a huna phasiwedi. Kha Girata 00–2, mudzidzisi kana muthusi a nga ita u dzhena.', ts:'Vadyondzi va hlawula kilasi ya vona na vito — a ku na tiphasiwedi. Eka Grado 00–2, mudyondzisi kumbe mupfuni a nga endla ku nghena.' },
  tg_tip6_h:               { en:'All progress is saved', zu:'Yonke inqubekelaphambili iyalondolozwa', st:'Tswelopele Yohle e a Bolokwa', xh:'Yonke Inkqubela Iyagcinwa', af:'Alle vordering word gestoor', ve:'Mvelaphanda Yoṱhe I a Vhulungwa', ts:'Nhluvukiso Hinkwaso wu Hlayisiwa' },
  tg_tip6_b:               { en:'Even if a lesson is interrupted, progress already logged to the sheet is safe. Learners continue where they left off.', zu:'Ngisho noma isifundo siphazamiseka, inqubekelaphambili esivele ibhalwe kusheethi iphephile. Abafundi baqhubeka lapho bagcina khona.', st:'Le ha thuto e sitwa, tswelopele e seng e ngotswe leshaneng e sireletsehile. Baithuti ba tswela pele moo ba emisitseng teng.', xh:'Nokuba isifundo siyaphazamiseka, inkqubela ebhaliweyo kwishithi ikhuselekile. Abafundi baqhubeka apho baye bayeka khona.', af:'Selfs al word \u2019n les onderbreek, vordering wat reeds op die blad aangeteken is, is veilig. Leerders gaan voort waar hulle opgehou het.', ve:'Naho tshifundwa tsho thivhelwa, mvelaphanda yo no ṅwaliwaho kha sheethi i tsireledzeha. Vhagudi vha bvela phanda hune vha khou ita hone.', ts:'Hambiloko dyondzo yi kavanyeta, nhluvukiso lowu se wu tsariwile eka xifanisokwalo wu sirhelelekile. Vadyondzi va ya emahlweni laha va yimeke kona.' },

  tg_duration:             { en:'Duration:', zu:'Isikhathi:', st:'Nako:', xh:'Ixesha:', af:'Duur:', ve:'Tshifhinga:', ts:'Nkarhi:' },
  tg_grade_focus:          { en:'Grade focus:', zu:'Ibanga:', st:'Sepheo sa Kereiti:', xh:'Ibanga:', af:'Graad fokus:', ve:'Girata:', ts:'Grado:' },
  tg_materials:            { en:'Materials:', zu:'Izinsiza:', st:'Didirisiwa:', xh:'Izixhobo:', af:'Materiaal:', ve:'Zwishumiswa:', ts:'Switirhisiwa:' },
  tg_materials_unplugged:  { en:'Materials (Unplugged):', zu:'Izinsiza (Ezingaxhunyiwe):', st:'Didirisiwa (Tse sa Hokahanyeng):', xh:'Izixhobo (Ezingaxhunyiwe):', af:'Materiaal (Ontkoppel):', ve:'Zwishumiswa (Zwi si na Gesi):', ts:'Switirhisiwa (Leswi Nga Ri na Korente):' },
  tg_materials_robot:      { en:'(Robot):', zu:'(Irobhothi):', st:'(Roboto):', xh:'(Irobhothi):', af:'(Robot):', ve:'(Robhoti):', ts:'(Rovhoti):' },
  tg_learning_objectives:  { en:'Learning Objectives', zu:'Izinjongo Zokufunda', st:'Dipheo tsa ho Ithuta', xh:'Iinjongo Zokufunda', af:'Leerdoelwitte', ve:'Zwipikwa zwa u Guda', ts:'Xikongomelo xa Ku Dyondza' },
  tg_unplugged_activity:   { en:'Unplugged Activity', zu:'Umsebenzi Ongaxhunyiwe', st:'Mosebetsi o sa Hokahanyeng', xh:'Umsebenzi Ongaxhunyiwe', af:'Ontkoppelde Aktiwiteit', ve:'Mushumo u si na Gesi', ts:'Ntirho lowu Nga Ri na Korente' },
  tg_unplugged_version:    { en:'Unplugged Version', zu:'Uhlobo Olungaxhunyiwe', st:'Mofuta o sa Hokahanyeng', xh:'Uhlobo Olungaxhunyiwe', af:'Ontkoppelde Weergawe', ve:'Vhurendo hu si na Gesi', ts:'Xiyimo lexi Nga Ri na Korente' },
  tg_on_the_app:           { en:'On the App', zu:'Ku-App', st:'Ho App', xh:'Kwi-App', af:'Op die App', ve:'Kha App', ts:'Eka App' },
  tg_with_kit_version:     { en:'With Kit Version', zu:'Uhlobo Nethikithi', st:'Mofuta o nang le Kiti', xh:'Uhlobo Enekhithi', af:'Weergawe met Stel', ve:'Vhurendo na Khithi', ts:'Xiyimo na Khithi' },
  tg_check_understanding:  { en:'Check for understanding:', zu:'Hlola ukuqonda:', st:'Hlahloba kutlwisiso:', xh:'Jonga ukuqonda:', af:'Kontroleer begrip:', ve:'Sedza u pfesesa:', ts:'Kambela ku twisisa:' },
  tg_end_week_reflection:  { en:'End-of-Week Reflection:', zu:'Ukubuyekeza Ekupheleni Kweviki:', st:'Ho Nahana Qetellong ya Beke:', xh:'Ukucingisisa Ekupheleni Kweveki:', af:'Einde-van-week Refleksie:', ve:'U Humbula Nga Mafhelo a Vhege:', ts:'Ku Anakanya eka Malembe ya Vhiki:' },

  tg_week:                 { en:'Week', zu:'Iviki', st:'Beke', xh:'Iveki', af:'Week', ve:'Vhege', ts:'Vhiki' },
  tg_week1:                { en:'Week 1', zu:'Iviki 1', st:'Beke ya 1', xh:'Iveki 1', af:'Week 1', ve:'Vhege ya 1', ts:'Vhiki ra 1' },
  tg_week2:                { en:'Week 2', zu:'Iviki 2', st:'Beke ya 2', xh:'Iveki 2', af:'Week 2', ve:'Vhege ya 2', ts:'Vhiki ra 2' },
  tg_lesson1:              { en:'Lesson 1', zu:'Isifundo 1', st:'Thuto 1', xh:'Isifundo 1', af:'Les 1', ve:'Tshifundwa 1', ts:'Dyondzo 1' },
  tg_lesson2:              { en:'Lesson 2', zu:'Isifundo 2', st:'Thuto 2', xh:'Isifundo 2', af:'Les 2', ve:'Tshifundwa 2', ts:'Dyondzo 2' },

  tg_coding_desc:          { en:'Computational thinking, sequences & loops — no prior coding experience needed', zu:'Ukucabanga ngekhompyutha, ukulandelana namaluphu — akudingeki ulwazi lokubhala ikhodi ngaphambilini', st:'Kgopolo ya dikhomphiutha, tatellano le maluphu — ha ho hlokahale phihlelo ya khoutu pele', xh:'Ukucinga ngekhompyutha, ukulandelelana kunye namaluphu — akufuneki amava okubhala ikhowudi ngaphambili', af:'Berekeningsdenke, volgordes & lusse — geen vorige koderingservaring nodig nie', ve:'U humbula nga khomphutha, kutevhedzana na miluphu — a hu ṱoḓei tshenzhemo ya khoutu nga phanda', ts:'Ku anakanya hi khomphutara, kutevhelana na miluphu — a ku laveki ntokoto wa khowudi wo sungula' },
  tg_robotics_desc:        { en:'Sense-think-act, path planning and physical/digital integration — works with or without robot kits', zu:'Zwa-cabanga-yenza, ukuhlela indlela nokuhlanganisa okuqondile/kwedijithali — kusebenza nangaphandle kwamathikithi erobhothi', st:'Utlwa-nahana-etsa, ho rala tsela le kopano ya nnete/dijithale — e sebetsa le ntle le dikiti tsa roboto', xh:'Ukuqonda-ukucinga-ukwenza, ukucwangcisa indlela nokudibanisa okoqobo/kwedijithali — isebenza nangaphandle kwamakhithi erobhothi', af:'Waarneem-dink-doen, padbeplanning en fisiese/digitale integrasie — werk met of sonder robotstelle', ve:'U pfa-humbula-ita, u dzudzanya nzila na u ṱanganya zwa muvhili/zwa dijithale — zwi shuma na kana hu si na zwikwama zwa robhoti', ts:'Ku twa-anakanya-endla, ku lulamisela ndlela na ku hlanganisa swa nyama/swa dijithali — swi tirha ni handle ka swikwama swa rovhoti' },

  tg_curriculum_overview:  { en:'2-Week Curriculum Overview', zu:'Uhlolojikelele Lwekharikhulamu Lwamaviki Ama-2', st:'Kakaretso ya Kharikhulamu ya Dibeke tse 2', xh:'Uhlolo Jikelele Lwekharityhulam Lweeveki Ezi-2', af:'2-Week Kurrikulum Oorsig', ve:'Mvelele ya Kharikhulamu ya Vhege mbili', ts:'Xikombiso xa Nkambisiwiso wa Vhiki mbirhi' },



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
  c_w1l1_blurb:       { en:'Meet the machine that follows instructions', zu:'Zijwayeze imishini elandela imiyalelo phecelezi icomputer', st:'Kopana le motšhene o latelang ditaelo', xh:'Hlangana nomtshini olandela imiyalelo', af:'Ontmoet die masjien wat instruksies volg', ve:'Thananani na mushini u tevhelaho', ts:'Tivana na muxini lowu landzelaka' },
  c_w1l2_title:       { en:'Sequencing: Order Matters', zu:'Ukuhlelwa Kohlelo: Ukuphatha Kubalulekile', st:'Tatellano: Taelo e Bohlokwa', xh:'Ukuhlelwa: Uhlelo Lubalulekile', af:'Volgorde: Orde is Belangrik', ve:'Kutevhedzana: Murado u Ndeme', ts:'Kutevhelana: Nawu wu Ntokoto' },
  c_w1l2_blurb:       { en:'Put the steps in the right order', zu:'Beka izinyathelo ngokulandelana okufanele', st:'Beha mehato ka tatellano e nepahetseng', xh:'Beka amanyathelo ngolunye uhlelo', af:'Sit die stappe in die regte volgorde', ve:'Vheka zwitevhedzwa nga ndzila yo linganaho', ts:'Veka switehi eka nawu lowu lulameke' },
  c_w2l1_title:       { en:'What is a Loop?',       zu:'Iluphu Yini?',                st:'Luphu ke Eng?',               xh:'Iluphu Yintoni?',             af:'Wat is \'n Lus?' },
  c_w2l1_blurb:       { en:'Doing the same thing again and again', zu:'Ukwenza into efanayo njalo', st:'Ho etsa ntho e le nngwe hape le hape', xh:'Ukwenza into efanayo uphinde uphinde', af:'Dieselfde ding weer en weer doen', ve:'U ita zwithu zwo fanaho hafhu', ts:'Ku endla swilo swo fanaka hi makanziya' },
  c_w2l2_title:       { en:'Unplugged Robot Game',  zu:'Umdlalo Werobhothi Elingaxhunyiwe', st:'Papadi ya Roboto e sa Hokahanyiwang', xh:'Umdlalo Werobhothi Ongaxhunyiwe', af:'Ontkoppelde Robot Spel', ve:'Mutambo wa Robhoti Asina Gesi', ts:'Mutambo wa Robhoti Lowu Nga Ri na Korente' },
  c_w2l2_blurb:       { en:'Be the robot — follow the directions!', zu:'Yiba yirobhothi — landela imiyalelo!', st:'Ba roboto — latela ditaelo!', xh:'Yiba irobhothi — landela imiyalelo!', af:'Wees die robot — volg die aanwysings!', ve:'Vha robhoti - tevhelani zwivhidziso!', ts:'Va robhoti - landzelela swileriso!' },

  // ── CODING LESSON CONTENT ─────────────────────────────────────────────
  c_w1l1_p1: {
    en: 'A computer is a machine that follows <span class="highlight">instructions</span> — step by step, exactly as it\'s told.',
    zu: 'Ikhompyutha iwumishini olandela <span class="highlight">imiyalelo</span> — ilandela isinyathelo ngesinyathelo, ngokunembile njengoba iyalelwe.',
    st: 'Khomphiutha ke motšhene o latelang <span class="highlight">ditaelo</span> — mohato ka mohato, kamoo e laelwang kateng.',
    xh: 'Ikhompyutha ngumtshini olandela <span class="highlight">imiyalelo</span> — inyathelo ngenyathelo, kanye njengoko itshiwo.',
    af: '\'n Rekenaar is \'n masjien wat <span class="highlight">instruksies</span> volg — stap vir stap, presies soos dit gesê word.'
  },
  c_w1l1_p2: {
    en: 'It can\'t think for itself. It needs a human to tell it exactly what to do, in exactly the right order. That\'s what coding is: giving a computer clear instructions.',
    zu: 'Ayikwazi ukuzicabanga yona iyodwa. Idinga umuntu ozoyitshela ngqo ukuthi yenze kanjani, ngokulandelana okufanele. Yikho ukubhala ikhodi: ukunika ikhompyutha imiyalelo ecacile yokuthi yenzeni.',
    st: 'E ke kgone ho nahana ka boeena. E hloka motho ho e bolella ka nepo hore e etse eng, ka tatellano e nepahetseng. Ke seo khouthing e leng sona: ho fa khomphiutha ditaelo tse hlakehileng.',
    xh: 'Ayikwazi ukucinga ngokwayo. Idinga umntu ukuba ayixelele ngqo ukuba yenzeni, ngolunye uhlelo olusebahle. Yiyo leyo ikhowudi: ukunika ikhompyutha imiyalelo ecacileyo.',
    af: 'Dit kan nie self dink nie. Dit het \'n mens nodig om dit presies te vertel wat om te doen, in presies die regte volgorde. Dit is wat kodering is: om \'n rekenaar duidelike instruksies te gee.'
  },
  c_w1l1_parts_title:     { en:'Parts of a Computer', zu:'Izingxenye zekhompyutha' },
  c_w1l1_part_monitor:    { en:'Monitor', zu:'Isikrini' },
  c_w1l1_part_monitor_d:  { en:'Shows everything on screen', zu:'Sibonisa konke okusekhompyutheni' },
  c_w1l1_part_keyboard:   { en:'Keyboard', zu:'Ikhibhodi' },
  c_w1l1_part_keyboard_d: { en:'Type letters & numbers', zu:'Thayipha amagama nezibalo' },
  c_w1l1_part_mouse:      { en:'Mouse', zu:'Igundane lekhompyutha' },
  c_w1l1_part_mouse_d:    { en:'Move & click things', zu:'Hambisa igundane bese uchofoza izinto' },
  c_w1l1_part_cpu:        { en:'CPU', zu:'I-CPU' },
  c_w1l1_part_cpu_d:      { en:'The brain of the computer', zu:'Ingqondo yekhompyutha' },
  c_w1l1_part_harddrive:  { en:'Hard Drive', zu:'Idiski lokugcina izithombe namafayela' },
  c_w1l1_part_harddrive_d:{ en:'Stores all your files', zu:'Igcina wonke amafayela akho' },
  c_w1l1_part_speaker:    { en:'Speaker', zu:'Isimemezelo' },
  c_w1l1_part_speaker_d:  { en:'Plays sounds & audio', zu:'Udlala imisindo nomculo' },
  c_w1l1_desktop_caption: { en:'A desktop computer — monitor, tower, keyboard and mouse', zu:'Ikhompyutha yedeskithophu — isikrini, ithawa, ikhibhodi negundane lekhompyutha' },
  c_w1l1_p3: {
    en: 'Computers are everywhere — in phones, in cars, in traffic lights, even in some toys!',
    zu: 'Amakhompyutha akhona yonke indawo — emaafonini, ezimotweni, ezigxobeni zamarobhothi womgwaqo, ngisho nase mathoyini okudlala!',
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
  seq_toothpaste:   { en:'Put toothpaste on the brush', zu:'Beka iphepha eziinyo ebrashini', st:'Bea phasthi ya meno setseng', xh:'Beka isiphasthi samazinyo ebrashini', af:'Sit tandepasta op die borsel', ve:'Vhea tipeyisiti ya meno phasitela', ts:'Veka tipasta ya mayin\'we' },
  seq_pickup:       { en:'Pick up the toothbrush',      zu:'Phakamisa ibrashi yamazinyo',    st:'Tshwara borosi ya meno',      xh:'Phakamisa ibrashi yamazinyo',     af:'Tel die tandeborsel op', ve:'Tsikisa phasitela ya meno', ts:'Tsema bhrashi ya mayin\'we' },
  seq_brush:        { en:'Brush your teeth',            zu:'Geza amazinyo akho',             st:'Hlapa meno a hao',            xh:'Khutsa amazinyo akho',            af:'Borsel jou tande', ve:'Fheza meno au', ts:'Phisa mayin\'we ya wena' },
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
