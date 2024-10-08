import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: "CONSTRUCTION • COMMISSIONING • MAINTENANCE",
          home: "Home",
          about: "About-us",
          projects: "Projects",
          careers: "Careers",
          helt: "Health & Safety",
          certificates: "Certificates",
          contact: "Contact us",
          tooKitek: "LLP KITEK CONSTRUCTION",
          tooAdress:
            "Republic of Kazakhstan, Atyrau Region, 060011, Atyrau City, Southern Industrial Zone, Building 44",
          titleSection1:
            "WE OFFER A WIDE VARIETY OF TECHNICAL SERVICES INCLUDING:",
          ac1header:
            "Electric installation, commissioning, start-up and maintenance of:",
          ac1title:
            "— Various types of Electric Generator Units  — Relay Protection and Automation Systems — Cable Lines and Overhead Lines up to 220kV — Fiber-Optic Communication Lines — Load Control Systems / Power Distribution Control Systems — High Voltage / Medium Voltage / Low Voltage Distribution Boards — Cathodic Protection Systems — Lighting and Low Power Systems — Grounding and Lightning Protection Systems — Uninterruptible Power Supplies (UPS) — Electric Heating Systems (Trace Heating) — Outdoor Switchgear and Package Transformer Substations",
          ac2header:
            "Installation, Connection and Calibration of Instrumentation:",
          ac2title:
            "— Integrated Control and Safety Systems (ICSS) and Emergency Shut Down (ESD) Systems— Operational Instruments— Fire and Gas Detection and Fire Extinguishing Systems— Automated Control Systems and Process Control Systems",
          ac3header:
            "Mechanical & HVAC Installation, Commissioning, Start-up and Maintenance:",
          ac3title:
            "— Rotating mechanical equipment — Static mechanical equipment — HVAC systems",
          ac4header: "Project Control and Management:",
          ac4title:
            "— Provision of Qualified and Experienced Specialists in Commissioning and Installation — Provision of Management Personnel — Project Management Support",
          partnersTitle: "OUR CLIENTS AND BUSINESS PARTNERS",
          news: "LATEST NEWS",
          oilTitle: "Happy Oil Workers' Day!",
          collegTitle: "Dear partners and colleagues!",
          collegP:
            "On this special day, we are pleased to congratulate you on Oil Workers' Day!",
          collegp1:
            "We would like to express our sincere gratitude for your trust and collaboration. Your professionalism and dedication make an invaluable contribution to the development of our industry. Your energy and commitment to achieving high results inspire us and make our cooperation successful.",
          collegp2:
            "May each project bring you satisfaction, and may your efforts be rewarded with new achievements. We wish you good health, success in your professional endeavors, and prosperity in life.",
          rustam: "Sincerely, Rustem Abdullov",
          companyTitle: "About the Company",
          companyTitle1: "Goals and Achievements",
          companyTitle2: "Complaint Handling Procedure",
          comHeader:
            "This is a rapidly growing multi-disciplinary company from Kazakhstan.",
          li1: "The company was founded in September 2008 in Atyrau, Republic of Kazakhstan;",
          li2: "The company holds a first-category state license for construction and installation works, as well as a third-category license for design;",
          li3: "We provide specialized services in construction, commissioning, startup, operation, and maintenance. Our multi-disciplinary specialization includes Electrical, Instrumentation and Control, Mechanical, HVAC, Telecommunications, System Integration, and much more;",
          li4: "We are accredited partners of Hitachi ABB Power Grids in Kazakhstan. As part of this partnership, we offer services for the supply of high-voltage electrical equipment, including design, transportation, installation, commissioning, operational handover, and maintenance;",
          li5: "The company has numerous certified test equipment sets from renowned global manufacturers such as Fluke, Druke, Omicron, Megger, Chauvin Arnoux, Baur, Testo, Rosemount, Metran, Retom, ISA, and others;",
          li6: "The company comprises over 100 highly qualified professionals certified by ABB, Siemens, Schneider Electric, Tyco Electronics (Raychem), CompEX;",
          li7: "10 successful years in the Kazakhstan market in the Oil and Gas industry, Petrochemical, and Energy sectors, including more than 100 successfully completed projects;",
          li8: "We offer competitive prices and efficient, safe, and quality service.",
          missions: "OUR MISSION",
          missTitle1:
            "To contribute valuable support to the development of Kazakhstan's economy and be the leading partner for petrochemical, oil refining, and energy companies. We combine quality and reliability, distinguished by the safe execution of the most complex engineering tasks and the provision of high-quality services for safe and efficient production. To achieve this mission, we set the following strategic goals:",
          dostij:
            "Achieving leading positions for LLP 'KITEK CONSTRUCTION' in the field of services provided.",
          dostij1:
            "Enhancing both technological and economic reliability through the implementation of new technical and technological solutions.",
          dostij2: "Progressive and sustainable business development.",
          dostij3: "METHODS OF ACHIEVEMENT:",
          listTitle:
            "Reviewing key components of safety culture for continuous development.",
          listTitle1:
            "Focusing on the needs of our customers and providing a tailored approach to address their concerns.",
          listTitle2:
            "Maintaining a high level of services provided to our clients.",
          listTitle3:
            "Implementing advanced technologies using modern equipment and improving the skill level of the company’s personnel.",
          listTitle4:
            "Strict compliance with the laws of the Republic of Kazakhstan, international standards, and Client requirements.",
          helpTitle:
            "Complaint management is carried out in accordance with the requirements of procedure KC-QA-DP-013. Complaint management refers to the actions taken by the Company to ensure that the reported complaint is handled effectively, does not negatively affect the quality of services, and does not damage the Company's reputation.",
          titleLink: "The full procedure can be viewed at the following link:",
          hitachiBtn: "Partnership",
          titlePartner:
            "LLP KITEK CONSTRUCTION is an accredited partner of Hitachi Energy in the Republic of Kazakhstan. As part of this partnership, we provide services for the supply of high-voltage electrical equipment, including design, transportation, installation, commissioning, handover for operation, and maintenance.",
          year2011To2013:
            "Provision of ETL services at Karabatan Power Plant and Engineering Support Systems of the Bolashak Plant and Island D.",
          year2012To2013:
            "TR3 Expansion and commissioning of the power plant at Karabatan, launching of 2 GE Frame 6B gas turbine generators with their auxiliary systems.",
          year2013To2014:
            "Contract for the services of the Electrical Engineering Laboratory for the maintenance of power distribution systems and energy complexes of the Bolashak oil refinery at Karabatan.",
          year2014To2015:
            "Installation, (pre-)commissioning works, commissioning and launch of electric heating systems at the KTK pumping stations in Atyrau. Inspection of power electrical equipment at distribution substations.",
          year2014T12015:
            "Provision of management personnel within the framework of the future expansion project in Tengiz.",
          year2014To2016:
            "Quality control of electrical equipment installation on the Bozshakol project. Inspection of the 220 kV overhead line.",
          year2016:
            "Installation and adjustment of relay protection and automation (RZA) cells for the 10 kV with the KEGOC Atyrau 220 kV substation to the AtyrauNefteMash plant.",
          year2014To2017:
            "Commissioning works and commissioning of CRP-3 ANPS and feeding cells at 220 kV and power equipment at the KEGOC Atyrau 220 kV substation. Reinstallation of 220 kV disconnectors at the OHS of CRP-3 ANPS. Remounting of fiber optic lines on the 220 kV overhead line between the KEGOC Atyrau 220 kV substation and CRP-3 ANPS.",
          year2015To2017:
            "Provision of services for the Electrical Testing Laboratory (ETL), inspection of explosion-proof equipment, installation, and commissioning of electrical equipment and automation systems for the Kashagan project on the shelf (Island D) and onshore at the Karabatan plant.",
          year2016To2017:
            "Supervision of installation works at the Main Distribution Station of the Kandym Gas Processing Complex (KGPC), Uzbekistan.",
          year2016To2019:
            "Pre-commissioning, commissioning, and launch of CRP No. 4 220/6 kV at the Atyrau Oil Refinery.",
          year2015To2019:
            "(Pre-)commissioning of electrical equipment, automation systems, HVAC systems, and explosion-proof equipment for the Eskene Western Railway project in Karabatan. Provision of management personnel.",
          year2014To2020:
            "Contract for installation, maintenance, (pre-)commissioning of power distribution systems and energy complexes for the Kashagan project onshore and offshore, including inspection of explosion-proof equipment. Provision of Electrical Testing Laboratory (ETL) services.",
          year2019To2020:
            "Commissioning works at the Badamsha Wind Farm, including the comprehensive launch of the main distribution substation.",
          year2019To2021:
            "Commissioning works and commissioning of the Combined Cycle Power Plant with 4 Siemens STG-800 gas turbines, 4 Doosan heat recovery boilers, and 2 Doosan Škoda steam turbine units, including automation systems and relay protection and automation (RZA), 110 kV switchgear, and synchronization with KEGOC.",
          year2020:
            "Project for increasing gas capacities at the CPC. Commissioning of current and voltage transformers, testing of busbars (high-voltage and low-voltage), checking heat exchangers, checking interlocks, relay protection, and provision of operational personnel.",
          year2018:
            "ABB Kazakhstan Service contract for commissioning, maintenance of relay protection, SCADA, and power equipment of ABB in Kazakhstan and the CIS countries.",
          year2020t1:
            "Maintenance of the 220 kV overhead line from the KEGOC Atyrau 220 kV substation to the Kurmangazy pumping station, with tap-offs to the Isatay pumping station and 220/10 kV distribution substations at the aforementioned pumping stations.",
          hiringTitle: "WE ARE CURRENTLY HIRING FOR THE FOLLOWING POSITIONS:",
          vacanci: "Resumes can be sent to the email addresses listed below:",
          hiringPhone: "Contact phone numbers:",
          healtDescr:
            "The goal of the management of 'KITEK CONSTRUCTION' is to prevent accidents, injuries, and illnesses in the workplace. This is achieved by prioritizing the health and safety of employees during work execution and management. The ultimate aim is to ensure the safety of all employees—both internal and subcontractors—at every stage of work. The policy on Occupational Health and Safety (OHS) emphasizes that every employee and manager is responsible for achieving zero accidents, minimizing pollution, and reducing waste.",
          healtNum: "hours worked without lost time",
          healtTitle:
            "Company Policy on Employee Safety and Occupational Health",
          contactTitle: "Head office of LLP «KITEK CONSTRUCTION»",
          contactInfo: "Contact information",
          contactAddres:
            "Address: Republic of Kazakhstan, Atyrau city, INDUSTRIAL ZONE SOUTH, building 44",
          contactIndex: "Postal index: 060011",
          contactPhone: "Phone:",
          contactMail: "Email:",
          activeProjects: "Active Projects",
          realProjects: "Successfully implemented projects"
        }
      },
      ru: {
        translation: {
          welcome: "СТРОИТЕЛЬСТВО • ПУСК • ТЕХНИЧЕСКОЕ ОБСЛУЖИВАНИЕ.",
          home: "Главная",
          about: "О нас",
          projects: "Проекты",
          careers: "Карьера",
          helt: "Здоровье и безопасность",
          certificates: "Сертификаты",
          contact: "Свяжитесь с нами",
          tooKitek: "ТОО KITEK CONSTRUCTION",
          tooAdress:
            " Республика Казахстан, Атырауская Область, 060011, г. Атырау,Промышленная Зона Оңтүстік, строение 44",
          titleSection1:
            "Мы предлагаем широкий профиль технических услуг, включая следующие работы:",
          ac1header: "Электромонтаж, пуско-наладка, запуск и техобслуживание:",
          ac1title:
            "— Различных типов силовых генераторов — систем РЗА — Кабельные и воздушные линии до 220кВ — Опто-волоконные линии связи — Систем управления нагрузкой/ Систем управления распределением электроэнергии — Распредщитов Высоковольтных / Средней нагрузки / Низковольтных — Систем катодной защиты — Систем освещения и малой мощности — Систем заземления и молниезащиты — Источников Бесперебойного Питания (ИБП) — Систем электрообогрева ( теплоспутники )— Оборудования Открытых Распредустройств ( ОРУ) и Комплектных Трансформаторных Подстанций (КТП)",
          ac2header: "Монтаж, Подключение и калибровка приборов КИП и А:",
          ac2title:
            "— Системы безопасного управления производства ( ICSS) и аварийной остановки (ESD)— Технологических приборов КИП и А— Систем газопожарообнаружения и тушения— АСУ и АСУТП",
          ac3header:
            "Монтаж, пуско-наладка, ввод в эксплуатацию и техобслуживание:",
          ac3title:
            "— Вращающегося механического оборудования— Статического механического оборудования— Систем ОВКВ",
          ac4header: "Управление контроль над выполнением проектов",
          ac4title:
            "— Предоставление высококвалифицированных и опытных специалистов по пусконаладке и монтажу — Предоставление руководящего персонала — Оказание поддержки управлением проектов",
          partnersTitle: "Наши Клиенты и Партнеры",
          news: "Новости компании",
          oilTitle: "с Днём нефтяников!",
          collegTitle: "Уважаемые партнеры и коллеги!",
          collegP:
            "В этот особенный день мы рады поздравить вас с Днём нефтяников!",
          collegp1:
            " Хотим выразить искреннюю благодарность за ваше доверие исовместную работу. Ваш профессионализм и преданность делу вносятнеоценимый вклад в развитие нашей отрасли. Ваша энергия истремление к достижению высоких результатов вдохновляют нас иделают наше сотрудничество успешным.",
          collegp2:
            " Пусть каждый проект приносит вам удовлетворение, а ваши усилиябудут вознаграждены новыми достижениями. Желаем крепкогоздоровья, успехов в профессиональной деятельности и благополучияв жизни.",
          rustam: "С уважением, Рустем Абдулов",
          companyTitle: "О Компании",
          companyTitle1: "Цели и достижения",
          companyTitle2: "Порядок работы с жалобами",
          comHeader:
            "это Казахстанская быстроразвивающаяся многопрофильная компания.",
          li1: "Компания была основана в Сентябре 2008 года в г. Атырау, Республика Казахстан;",
          li2: "Компания имеет гос. лицензию 1 категории на строительно-монтажные, пуско-наладочные работы и лицензию 3 категории на проектирование",
          li3: "Мы предоставляем специализированные услуги по строительству, пусконаладке, запуску, эксплуатации и тех. обслуживанию. Область многопрофильной специализации включает Электрику, КиП, Механику, ОВКВ, Телеком, Интеграцию систем управления и многое другое",
          li4: "Мы являемся Аккредитованными Партнёрами компании Hitachi ABB Power Grids на территории Казахстана. В рамках данного партнёрства предоставляем услуги по поставке высоковольного электрического оборудования, включая проектирование, транспортировку, монтаж, пусконаладку, сдачу в эксплуатацию и техническое обслуживание",
          li5: "Компания имеет множество сертифицированных комплектов тестового оборудования от известных мировых производителей, таких как Fluke, Druke, Omicron, Megger, Chauvin Arnoux, Baur, Testo, Rosemount, Metran, Retom, ISA, и др…",
          li6: "В составе компании более 100 человек высоковалифицированных профессионалов, сертифицированных ABB, Siemens, Schneider Electric, Tyco Electronics  (Raychem), CompEX",
          li7: "10 успешных лет на рынке Казахстана в индустрии Нефти и Газа, Нефтехимическом, Энергетическом секторах, в том числе более 100 успешно реализованных проектов",
          li8: "Мы предлагаем конкурентоспособные цены, эффективный, безопасный и качественный сервис",
          missions: "НАША МИССИЯ",
          missTitle1:
            "Вносить ценный вклад в развитие казахстанской экономики и быть лучшим партнером для нефтехимических, нефтеперерабатывающих и энергетических компаний. Мы объединяем качество и надежность, отличаемся безопасным выполнением самых сложных инженерных задач и предоставлением высококачественных услуг для безопасного и эффективного производства. Для выполнения данной миссии мы ставим следующие стратегические цели:",
          dostij:
            "достижение ТОО «KITEK CONSTRUCTION» (КАЙТЭК КОНСТРАКШН) лидирующих позиций в сфере оказываемых услуг",
          dostij1:
            "повышение надежности как технологической, так и экономической, на основе применения новых технических и технологических решений",
          dostij2: "прогрессивное и устойчивое развитие бизнеса",
          dostij3: "СПОСОБЫ ДОСТИЖЕНИЯ:",
          listTitle:
            "Рассмотрение ключевых компонентов культуры ТБ с целью постоянного развития.",
          listTitle1:
            "Внимание к нуждам наших заказчиков и специальный подход к каждому для решения их вопросов.",
          listTitle2:
            "Поддержка высокого уровня оказываемых услуг для наших клиентов.",
          listTitle3:
            "Внедрение передовых технологий с использованием современного оборудования и улучшением квалификационного уровня персонала компании.",
          listTitle4:
            "Строгое соблюдение законодательства Республики Казахстан, международных стандартов и требований Клиентов.",
          helpTitle:
            "Управление жалобами проводится в соответствии с требованиями процедуры KC-QA-DP-013.Под управлением жалобами понимаются действия Компании, предпринятые для обеспечения того, что заявленная жалоба эффективно обработана, не повлияет негативно на качество услуг и не нанесет урона репутации Компании.",
          titleLink: "Полную процедуру можно посмотреть по ссылке:",
          hitachiBtn: "Партнерство",
          titlePartner:
            "ТОО KITEK CONSTRUCTION является аккредитованным партнёром компании Hitachi Energy на территории Республики Казахстан. В рамках данного партнёрства предоставляем услуги по поставке высоковольного электрического оборудования, включая проектирование, транспортировку, монтаж, пусконаладку, сдачу в эксплуатацию и техническое обслуживание.",
          year2011To2013:
            "Предоставление услуг ЭТЛ на Карабатанской Электростанции и Системах Инженерного Обеспечения Завода Болашак и острова Д.",
          year2012To2013:
            "TR3 Расширение и ввод в эксплуатацию электростанции на Карабатане, запуск 2-х газотурбинных генераторов GE Frame 6B с их вспомогательными системами.",
          year2013To2014:
            "Контракт на услуги Электротехнической Лаборатории по техобслуживанию систем распределения электроэнергии и энергетических комплексов нефтеперерабатывающего завода «Болашак» на ст. Карабатан.",
          year2014To2015:
            "Монтаж, (пред-)пусконаладочные работы, ввод в эксплуатацию и запуск систем эл. обогрева на насосной станциях КТК в Атырау. Проверка силового электрооборудования на распределительных подстанциях.",
          year2014T12015:
            "Предосталение руководящего персонала в рамках проекта будущего расширения в Тенгизе.",
          year2014To2016:
            "Контроль качества по монтажу электрооборудования на проекте Бозжаколь. Инспекция ВЛ 220кВ.",
          year2016:
            "Монтаж и наладка РЗА ячеек 10кВ с П/С КЕГОК Атырау 220кВ до завода АтырауНефтеМаш",
          year2014To2017:
            "Пуско-наладочные работы и ввод в эксплуатацию ЦРП-3 АНПЗ и питающих ячеек 220кВ и силового оборудования на П/С КЕГОК Атырау 220кВ. Переустановка разъединителей 220кВ на ОРУ ЦРП 3 АНПЗ. Перемонтаж ВОЛС на ВЛ 220кВ между П/С КЕГОК Атырау 220кВ и ЦРП-3 АНПЗ.",
          year2015To2017:
            "Предоставление услуг ЭТЛ, Инспекций взрывозащищенного оборудования, монтажу и пусконаладке электрооборудования и КиП для проекта Кашаган на шельфе (Остров Д) и на суше на заводе Карабатан.",
          year2016To2017:
            "Надзор за монтажными работами на Главной распределительной станции Кандымского газоперерабатывающего комплекса (КГПК), Узбекистан.",
          year2016To2019:
            "Пред-пусконаладка, пусконаладка и запуск ЦРП №4 220/6кВ на Атырауском НПЗ.",
          year2015To2019:
            "(Пред-)пусконаладка электрооборудования, КиП, систем ОВКВ, взрывозащищенного оборудования на проекте Ескене Западная Железная Дорога на Карабатане. Предоставление руководящего персонала.",
          year2014To2020:
            "Контракт на работы по монтажу, техобслуживанию, (пред-)пусконаладке систем распределения электроэнергии и энергетических комплексов на проекте Кашагана на суше и шельфе, включая инспекцию взрывозащищенного оборудования. Предоставление услуг ЭТЛ.",
          year2019To2020:
            "Пуско-наладочные работы на ВЭС Бадамша, включая комплексный запуск главной распред. Подстанции.",
          year2019To2021:
            "Пусконаладочные работы и ввод в эксплуатацию Парогазовой Эл.станции с 4-мя ГТГ Siemens STG-800, 4-мя котлами утилизаторами Doosan и 2-мя паротурбинными установками Doosan Škoda, включая системы автоматики и РЗА, КРУЭ 110кВ, синхронизация с КЕГОК.",
          year2020:
            "Проект увеличения газовых мощностей на КПК. Пусконаладка трансформаторов тока и напряжения, испытание шин (высоковольтных и низковольтных), проверка теплоспуников, проверка взаимоблокировок, релейная защита, предоставление оперативного персонала.",
          year2018:
            "ABB Казахстан Сервисный договор на ввод в эксплуатацию, обслуживание релейной защиты, SCADA, силового оборудования ABB в Казахстане и странах СНГ.",
          year2020t1:
            "Техобслуживание ВЛ 220кВ с подстанции КЕГОК Атырау 220кВ до НПС Курмангазы с отпайкой на НПС Исатай и распределительных подстанций 220/10кВ на вышеуказанных НПС.",
          hiringTitle: "В ДАННЫЙ МОМЕНТ ОТКРЫТ НАБОР НА СЛЕДУЮЩИЕ ПОЗИЦИИ:",
          vacanci: "Резюме можно отправлять на нижеуказанные e-mail адреса:",
          hiringPhone: "Телефоны для справок:",
          healtDescr:
            "Цель руководства компании «KITEK CONSTRUCTION» — предотвратить несчастные случаи, травмы и заболевания на производстве. Это достигается за счёт приоритета охраны здоровья и безопасности сотрудников в процессе выполнения и управления работой. Конечной целью является обеспечение безопасности всех сотрудников — как собственных, так и субподрядчиков — на всех этапах работы. Политика по БиОТ и ООС подчеркивает, что каждый сотрудник и руководитель несет ответственность за достижение нулевого числа несчастных случаев, минимизацию загрязнения и отходов.",
          healtNum: "часов отработано без потерь рабочего времени",
          healtTitle:
            "Политика компании в области безопасности и охраны труда сотрудников",
          contactTitle: "Головной офис ТОО «KITEK CONSTRUCTION»",
          contactInfo: "Контактная информация",
          contactAddres:
            "Адрес: Республика Казахстан, г. Атырау, ПРОМЫШЛЕНАЯ ЗОНА ОҢТҮСТІК, строение 44",
          contactIndex: "Почтовый индекс: 060011",
          contactPhone: "Телефон:",
          contactMail: "Электронная почта:",
          activeProjects: "Активные проекты",
          realProjects: "Успешно реализованные проекты"
        }
      },
      kz: {
        translation: {
          welcome: "ҚҰРЫЛЫС • ПУСК • ТЕХНИКАЛЫҚ ҚЫЗМЕТ КӨРСЕТУ.",
          home: "Басты бет",
          about: "Компания туралы",
          projects: "Жобалар",
          careers: "Мансап",
          helt: "ҚҚО және БиОТ",
          certificates: "Сертификаттар",
          contact: "Байланыс",
          tooKitek: "ТОО KITEK CONSTRUCTION",
          tooAdress:
            "Қазақстан Республикасы, Атырау облысы, 060011, Атырау қаласы, Оңтүстік өнеркәсіптік аймағы, ғимарат 44",
          titleSection1:
            "БІЗ ТЕХНИКАЛЫҚ ҚЫЗМЕТТЕРДІҢ БІРНЕШЕ ТҮРЛЕРІН ҰСЫНАМЫЗ, ОНЫҢ ІШІНДЕ КЕЛЕСІ ЖҰМЫС ТҮРЛЕРІ:",
          ac1header:
            "Электромонтаж, іске қосу және жөндеу, қосу және техникалық қызмет көрсету:",
          ac1title:
            "— Күш генераторларының әртүрлі түрлері — АРҚ жүйелерінің — 220кВ дейін кабель және ауа желілерінің — Оптикалық-талшықты байланыс желілерінің — Жүктемені басқару жүйелері/электр энергияны таратуды басқару жүйесінің — Жоғары вольтты/Орта жүктемелі/Төмен вольтты бөліп таратқыш қалқандардың — Катодтық қорғаныс жүйелерінің — жарықтандыру және аз қуатты жүйелердің — жерге тұйықтау және жайқорған жүйелерінің — Үздіксіз қуаттандыру көздерінің (ҮҚК) — Электрожылыту жүйелерінің (жылу спутниктері) — Ашық бөліп таратқыш құрылғыларының (АБҚ) жабдықтары мен Жинақты Трасформаторлы Кіші станциялардың (ЖТК)",
          ac2header: "АжБӨҚ монтажы, қосу және калибрлеу:",
          ac2title:
            "— Өнеркәсіптік қауіпсіздікті басқару жүйесі (ICSS) және апатты тоқтату жүйесі (ESD)— АжБӨҚ технологиялық құралдарының— газды өртті анықтау мен сөндіру жүйесінің— АБЖ және ТПАБЖ",
          ac3header:
            "Монтаж,іске қосу-жөндеу, қолданысқа енгізу және техникалық қызмет көрсету:",
          ac3title:
            "— Айналмалы механикалық жабдықтың — Статистикалық механикалық жабдықтың — ЖЖАС жүйелері",
          ac4header: "Жобалардың орындалуын бақылауды басқару:",
          ac4title:
            "— іске қосу мен жөндеу және монтаж бойынша жоғары білікті және тәжірибелі мамандарды ұсыну — Бқызметкерлерді ұсыну — Жобалардың басқаруына қолдау көрсету",
          partnersTitle: "Біздің клиенттеріміз бен серіктестеріміз",
          news: "Жаңалықтар",
          oilTitle: "Мұнайшылар күнімен!",
          collegTitle: "Құрметті серіктестер мен әріптестер!",
          collegP:
            "Бүгінгі ерекше күні біз сіздерді Мұнайшылар күнімен құттықтауға қуаныштымыз!",
          collegp1:
            "Сіздердің сенімдеріңіз бен бірлескен жұмыстарыңыз үшін шын жүректен алғысымызды білдіреміз. Сіздің кәсібилігіңіз бен адалдығыңыз біздің саламыздың дамуына баға жетпес үлес қосуда. Сіздің энергияңыз бен жоғары нәтижелерге жету талпынысыңыз бізді шабыттандырады және ынтымақтастығымызды табысты етеді.",
          collegp2:
            "Әрбір жоба сіздерге қуаныш әкелсін, ал сіздердің еңбектеріңіз жаңа жетістіктермен марапатталсын. Сіздерге мықты денсаулық, кәсіби қызметте жетістіктер және өмірде бақыт тілейміз.",
          rustam: "Ізгі тілекпен, Рустем Абдулов",
          companyTitle: "Компания туралы",
          companyTitle1: "Мақсаттар мен жетістіктер",
          companyTitle2: "Шағымдармен жұмыс істеу тәртібі",
          comHeader:
            "Бұл Қазақстанның қарқынды дамып келе жатқан көпсалалы компаниясы.",
          li1: "Компания 2008 жылы қыркүйекте Атырау қаласында, Қазақстан Республикасында құрылды;",
          li2: "Компанияда құрылыс және монтаждау жұмыстарын жүргізу үшін бірінші санатты мемлекеттік лицензия және жобалау үшін үшінші санатты лицензия бар;",
          li3: "Біз құрылыс, іске қосу, стартап, эксплуатация және техникалық қызмет көрсету салаларында мамандандырылған қызметтер ұсынамыз. Біздің көпсалалы мамандануымыз Электр, Автоматтандыру және бақылау, Механика, ОВКВ, Телекоммуникациялар, Жүйелер интеграциясы және тағы басқа салаларды қамтиды;",
          li4: "Біз Қазақстандағы Hitachi ABB Power Grids аккредиттелген серіктесіміз. Осы серіктестік аясында біз жоғары вольтты электр жабдықтарын жеткізу бойынша қызметтер ұсынамыз, соның ішінде жобалау, тасымалдау, монтаждау, іске қосу, эксплуатацияға тапсыру және техникалық қызмет көрсету;",
          li5: "Компанияда Fluke, Druke, Omicron, Megger, Chauvin Arnoux, Baur, Testo, Rosemount, Metran, Retom, ISA және басқа танымал әлемдік өндірушілерден сертификатталған сынақ жабдықтарының көптеген жиынтықтары бар;",
          li6: "Компания құрамында ABB, Siemens, Schneider Electric, Tyco Electronics (Raychem), CompEX сертификатталған 100-ден астам жоғары білікті мамандар бар;",
          li7: "Қазақстан нарығында мұнай және газ, мұнай химиясы, энергия секторларында 10 жылдық сәтті тәжірибеміз бар, оның ішінде 100-ден астам сәтті жүзеге асырылған жобалар;",
          li8: "Біз бәсекеге қабілетті бағалар мен тиімді, қауіпсіз, сапалы қызмет ұсынамыз.",
          missions: "БІЗДІҢ МИССИЯМЫЗ",
          missTitle1:
            "Қазақстан экономикасының дамуына қомақты үлес қосу және мұнай-химия, мұнай өңдеу және энергетика саласындағы компаниялар үшін ең үздік серіктес болу. Біз сапа мен сенімділікті біріктіріп, ең күрделі инженерлік тапсырмаларды қауіпсіз орындаумен және қауіпсіз әрі тиімді өндіріс үшін жоғары сапалы қызмет көрсетумен ерекшеленеміз. Осы миссияны орындау үшін біз келесі стратегиялық мақсаттарды қоямыз:",
          dostij:
            "ЖШС «KITEK CONSTRUCTION» (КАЙТЭК КОНСТРАКШН) көрсететін қызметтер саласында жетекші орындарға жету.",
          dostij1:
            "Жаңа техникалық және технологиялық шешімдерді қолдану негізінде технологиялық және экономикалық сенімділікті арттыру.",
          dostij2: "Бизнестің прогрессивті және тұрақты дамуы.",
          dostij3: "ҚОЛ ЖЕТКІЗУ ӘДІСТЕРІ:",
          listTitle:
            "Тұрақты даму үшін еңбекті қорғау мәдениетінің негізгі құрамдастарын қарастыру.",
          listTitle1:
            "Тапсырыс берушілердің қажеттіліктеріне назар аудару және олардың мәселелерін шешу үшін жеке тәсіл қолдану.",
          listTitle2:
            "Клиенттерімізге көрсетілетін қызметтердің жоғары деңгейін қолдау.",
          listTitle3:
            "Компания қызметкерлерінің біліктілігін арттырумен қатар, заманауи жабдықтарды қолдана отырып озық технологияларды енгізу.",
          listTitle4:
            "Қазақстан Республикасы заңнамасының, халықаралық стандарттардың және Клиент талаптарының қатаң сақталуы.",
          helpTitle:
            "Шағымдарды басқару KC-QA-DP-013 процедурасының талаптарына сәйкес жүзеге асырылады. Шағымдарды басқару — Компанияның жарияланған шағымды тиімді өңдеуін қамтамасыз ету үшін қабылданған әрекеттерін білдіреді, ол қызметтердің сапасына теріс әсер етпейді және Компанияның беделіне зиян келтірмейді.",
          titleLink: "Толық процедураны мына сілтеме арқылы қарауға болады:",
          hitachiBtn: "Серіктестік",
          titlePartner:
            "KITEK CONSTRUCTION ЖШС Hitachi Energy компаниясының Қазақстан Республикасындағы аккредиттелген серіктесі болып табылады. Бұл серіктестік аясында біз жоғары вольтты электр жабдықтарын жеткізу қызметтерін ұсынамыз, соның ішінде жобалау, тасымалдау, монтаж, пусконаладка, пайдалануға беру және техникалық қызмет көрсету.",
          year2011To2013:
            "Карабатан электр станциясында және Болашақ зауыты мен D аралының инженерлік қолдау жүйелерінде ETL қызметтерін ұсыну.",
          year2012To2013:
            "TR3 Карабатандағы электр станциясын кеңейту және іске қосу, 2 GE Frame 6B газ турбиналық генераторларын және олардың қосымша жүйелерін іске қосу.",
          year2013To2014:
            "Карабатандағы «Болашақ» мұнай өңдеу зауытының электр энергиясын тарату жүйелері мен энергетикалық кешендерін техникалық қызмет көрсету үшін Электротехникалық Лабораторияның қызметтері бойынша келісімшарт.",
          year2014To2015:
            "Атыраудағы КТК насос станцияларындағы электр жылытқыш жүйелерін монтаждау, (алдын ала) пусконаладочные жұмыстар, енгізу және іске қосу. Тарату қосалқы станцияларындағы күштік электр жабдықтарын тексеру.",
          year2014T12015:
            "Теңіздегі болашақ кеңейту жобасы аясында басқарушы персонал ұсыну.",
          year2014To2016:
            "Бозжаколь жобасындағы электр жабдығын монтаждау бойынша сапа бақылауы. 220 кВ әуе желісін тексеру.",
          year2016:
            "Атырау 220 кВ П/С КЕГОК үшін 10 кВ РЗА ячеек монтаждау және реттеу, АтырауНефтеМаш зауытына дейін.",
          year2014To2017:
            "ЦРП-3 АНПЗ және 220 кВ қоректендіру ячеектерінің монтаждау жұмыстары мен іске қосу, Атырау 220 кВ КЕГОК П/С-да. ЦРП-3 АНПЗ ОРУ-да 220 кВ ажыратқыштарды қайта орнату. КЕГОК Атырау 220 кВ П/С мен ЦРП-3 АНПЗ арасындағы 220 кВ әуе желісінде оптикалық талшықты қайта орнату.",
          year2015To2017:
            "Кашаган жобасы бойынша (D аралы) мұнай және газ платформасында және Карабатан зауытында электр жабдығы мен автоматтандыру жүйелерін монтаждау, пусконаладка, жарылысқа қарсы жабдықтарды тексеру, Электрлік Тестілеу Лабораториясының (ЭТЛ) қызметтерін ұсыну.",
          year2016To2017:
            "Өзбекстандағы Кандым газ өңдеу кешенінің (КГПК) Бас тарату станциясындағы монтаждық жұмыстарға бақылау.",
          year2016To2019:
            "Атырау мұнай өңдеу зауытында 220/6 кВ ЦРП №4 алдын ала пусконаладка, пусконаладка және іске қосу.",
          year2015To2019:
            "Карабатандағы Ескене Батыс Темір Жолы жобасында электр жабдықтарын, автоматтандыру жүйелерін, ОВКВ жүйелерін және жарылысқа қарсы жабдықтарды (алдын ала) пусконаладка. Басқарушы персоналды ұсыну.",
          year2014To2020:
            "Кашаган жобасы бойынша жер үстінде және теңізде электр энергиясын тарату жүйелерін және энергетикалық кешендерді монтаждау, техникалық қызмет көрсету, (алдын ала) пусконаладка жұмыстарын жүргізу үшін келісімшарт, жарылысқа қарсы жабдықтарды тексеру. Электрлік Тестілеу Лабораториясының (ЭТЛ) қызметтерін ұсыну.",
          year2019To2020:
            "Бадамша жел электр станциясындағы пусконаладка жұмыстары, негізгі тарату қосалқы станциясын кешенді іске қосуды қоса алғанда.",
          year2019To2021:
            "4 Siemens STG-800 газ турбинасымен, 4 Doosan жылу қалпына келтіру қазандығымен және 2 Doosan Škoda бу турбинасы қондырғыларымен Біріккен Цикл Электр Станциясын пусконаладка жұмыстарын жүргізу және іске қосу, автоматтандыру жүйелері мен релейлік қорғау және автоматтандыру (РЗА), 110 кВ КРУЭ және КЕГОК-пен синхронизацияны қоса алғанда.",
          year2020:
            "КПК-да газ қуаттарын ұлғайту жобасы. Ток және кернеу трансформаторларын пусконаладка, шиналарды (жоғары және төмен кернеулі) сынау, жылу алмастырғыштарды тексеру, өзара блокировкаларды тексеру, релейлік қорғау және оперативті персонал ұсыну.",
          year2018:
            "ABB Қазақстан Сервис келісімшарты релейлік қорғауды, SCADA-ны, және ABB-дің күштік жабдықтарын Қазақстан мен ТМД елдерінде іске қосу, техникалық қызмет көрсету.",
          year2020t1:
            "Атырау 220 кВ КЕГОК П/С-дан Курманғазы НПС-ға дейін 220 кВ әуе желісін техникалық қызмет көрсету, Исатай НПС-ға және жоғарыда аталған НПС-тардағы 220/10 кВ тарату қосалқы станцияларына тармақтарды орнату.",
          hiringTitle:
            "ҚАЗІРГІ УАҚЫТТА КЕЛЕСІ ЛАУАЗЫМДАРҒА ЖҰМЫСҚА ҚАБЫЛДАУ АШЫҚ:",
          vacanci:
            "Түйіндемелерді төменде көрсетілген электрондық пошта мекенжайларына жіберуге болады:",
          hiringPhone: "Анықтама телефондары:",
          healtDescr:
            "«KITEK CONSTRUCTION» компаниясының басқармасының мақсаты — өндірісте жазатайым оқиғалар, жарақаттар мен аурулардың алдын алу. Бұл қызметкерлердің жұмыс орындау және басқару барысында денсаулығы мен қауіпсіздігін басымдыққа алуы арқылы жүзеге асырылады. Соңғы мақсат — барлық қызметкерлердің, яғни өз қызметкерлерінің және субподрядшылардың қауіпсіздігін жұмыс барысының барлық кезеңдерінде қамтамасыз ету. Еңбек қауіпсіздігі және денсаулық сақтау (ЕҚД) саясаты әрбір қызметкер мен менеджердің нөлдік жарақатқа, ластануды азайтуға және қалдықтарды минимализациялауға жауапкершілік көтеретінін атап көрсетеді.",
          healtNum: "жұмыс уақытының шығынынсыз атқарылған сағаттар",
          healtTitle:
            "Қызметкерлердің қауіпсіздігі және еңбек қорғау бойынша компания саясаты",
          contactTitle: "KITEK CONSTRUCTION» ЖШС бас кеңсесі",
          contactInfo: "Байланыс ақпараты",
          contactAddres:
            "Мекенжай: Қазақстан Республикасы, Атырау қ., ОҢТҮСТІК ӨНЕРКӘСІПТІК АЙМАҒЫ, 44 құрылыс",
          contactIndex: "Пошта индексі: 060011",
          contactPhone: "Телефон:",
          contactMail: "Электрондық пошта:",
          activeProjects: "Белсенді жобалар",
          realProjects: "Сәтті жүзеге асырылған жобалар"
        }
      },
      zh: {
        // Добавляем китайский
        translation: {
          welcome: "建设 • 启动 • 维护",
          home: "主页",
          about: "关于我们",
          projects: "项目",
          careers: "职业",
          helt: "健康与安全",
          certificates: "证书",
          contact: "联系我们",
          tooKitek: "KITEK建筑公司",
          tooAdress:
            "哈萨克斯坦共和国，阿特劳州，060011，阿特劳市，南部工业区44号建筑物",
          titleSection1: "我们提供广泛的技术服务，包括以下工作：",
          ac1header: "电气安装、调试、启动和维护：",
          ac1title:
            "— 各类发电机组 — 保护控制系统 — 高达220kV的电缆和架空线路 — 光纤通信线路 — 负载管理系统/电力分配管理系统 — 高、中、低压配电盘 — 阴极保护系统 — 照明和低功率系统 — 接地和防雷系统 — 不间断电源 (UPS) — 电加热系统（伴热）— 开关设备和完整的变压器站",
          ac2header: "仪器仪表安装、连接和校准：",
          ac2title:
            "— 安全管理系统 (ICSS) 和紧急停车系统 (ESD) — 工艺仪表 — 火灾探测和灭火系统 — 自动化和过程控制系统",
          ac3header: "机械设备的安装、调试、投产和维护：",
          ac3title: "— 旋转机械设备 — 静态机械设备 — 供暖、通风和空调系统",
          ac4header: "项目执行的管理与控制",
          ac4title:
            "— 提供高素质和经验丰富的调试和安装专家 — 提供管理人员 — 提供项目管理支持",
          partnersTitle: "我们的客户和合作伙伴",
          news: "公司新闻",
          oilTitle: "石油工作者日快乐！",
          collegTitle: "尊敬的合作伙伴和同事们！",
          collegP: "在这个特别的日子里，我们高兴地祝贺您石油工作者日快乐！",
          collegp1:
            "我们衷心感谢您的信任和合作。您的专业精神和奉献为行业发展做出了不可估量的贡献。您的热情和追求卓越的动力激励着我们，使我们的合作更加成功。",
          collegp2:
            "愿每个项目都为您带来满足，您的努力将获得更多成就。我们祝您健康、事业成功、生活美满。",
          rustam: "敬礼，鲁斯塔姆·阿卜杜洛夫",
          companyTitle: "关于公司",
          companyTitle1: "目标与成就",
          companyTitle2: "投诉处理程序",
          comHeader: "这是一个在哈萨克斯坦快速发展的多元化公司。",
          li1: "公司于2008年9月在哈萨克斯坦阿特劳市成立；",
          li2: "公司拥有一级施工、调试许可证和三级设计许可证",
          li3: "我们提供建筑、调试、启动、操作和维护方面的专业服务，涵盖电气、仪器仪表、机械、供暖通风和空调、通讯和系统集成等多领域。",
          li4: "我们是Hitachi ABB电力网的认证合作伙伴，在哈萨克斯坦提供高压电气设备的供应、设计、运输、安装、调试、投产和维护服务。",
          li5: "公司拥有许多来自知名国际制造商的认证测试设备，例如Fluke、Druke、Omicron、Megger、Chauvin Arnoux、Baur、Testo、Rosemount、Metran、Retom、ISA等。",
          li6: "公司拥有100多名经ABB、西门子、施耐德电气、泰科电子(Raychem)、CompEX认证的高素质专业人员。",
          li7: "我们在哈萨克斯坦的石油和天然气、石化和能源行业已有10年的成功经验，成功实施了100多个项目。",
          li8: "我们提供具有竞争力的价格、高效、安全和优质的服务。",
          missions: "我们的使命",
          missTitle1:
            "为哈萨克斯坦经济发展做出宝贵贡献，成为石油化工、炼油和能源公司的最佳合作伙伴。我们将质量与可靠性结合，以安全执行最复杂的工程任务，并提供高质量的服务以确保安全和高效的生产。为了实现这一使命，我们制定了以下战略目标：",
          dostij: "实现KITEK CONSTRUCTION在所提供服务领域的领先地位",
          dostij1: "通过采用新的技术和工艺解决方案，提高技术和经济的可靠性",
          dostij2: "实现业务的渐进式和可持续发展",
          dostij3: "实现方式：",
          listTitle: "审视关键的HSE文化组成部分，以促进持续改进。",
          listTitle1: "关注客户的需求，并采取特别的方式为每个客户解决问题。",
          listTitle2: "为我们的客户保持高水平的服务。",
          listTitle3: "引进先进技术，使用现代设备，并提高公司员工的技能水平。",
          listTitle4: "严格遵守哈萨克斯坦的法律、国际标准和客户要求。",
          helpTitle:
            "投诉管理按照程序KC-QA-DP-013的要求进行。投诉管理是指公司为确保投诉得到有效处理、不会对服务质量产生负面影响或损害公司声誉而采取的措施。",
          titleLink: "完整程序可通过以下链接查看：",
          hitachiBtn: "合作伙伴关系",
          titlePartner:
            "KITEK CONSTRUCTION是Hitachi Energy在哈萨克斯坦的认证合作伙伴。作为该合作关系的一部分，我们提供高压电气设备的供应、设计、运输、安装、调试、投产和维护服务。",
          year2011To2013:
            "在卡拉巴坦发电厂和Bolashek工厂岛D的基础设施系统提供ETL服务。",
          year2012To2013:
            "卡拉巴坦电厂扩建和调试，启动了2台GE Frame 6B燃气轮机发电机及其辅助系统。",
          year2013To2014:
            "在卡拉巴坦的Bolashek石油炼油厂提供电气实验室服务，维护电力分配系统和能源综合体。",
          year2014To2015:
            "在KPC泵站安装、调试和启动电加热系统。检查变电站的电气设备。",
          year2014T12015: "在腾斯项目中提供管理人员。",
          year2014To2016:
            "博扎克科尔项目的电气设备安装质量控制。检查220kV高压线路。",
          year2016: "在阿特劳安装和调试KEGOC 220kV变电站的10kV保护单元。",
          year2014To2017:
            "阿特劳炼油厂的3号配电中心启动、调试和投产，KEGOC 220kV变电站的配电单元和动力设备。",
          year2015To2017:
            "在卡拉巴坦工厂和岛D为Kashagan项目提供电气实验室服务、检查防爆设备、电气和仪器安装和调试。",
          year2016To2017:
            "在乌兹别克斯坦的坎迪姆天然气加工厂监督总配电站的安装。",
          year2016To2019:
            "阿特劳炼油厂4号配电中心220/6kV的预调试、调试和启动。",
          year2015To2019:
            "在卡拉巴坦为Eskene West Railway项目提供电气设备、仪器和供暖、通风和空调系统的调试和投产服务。提供管理人员。",
          year2014To2020:
            "在Kashagan项目为陆地和海上提供电力分配系统的安装、维护、预调试和调试服务，包括防爆设备的检查。提供电气实验室服务。",
          year2019To2020:
            "在Badamsha风力发电站进行调试工作，包括启动主变电站。",
          year2019To2021:
            "在蒸汽-燃气电站进行调试和投产，包括4台西门子STG-800燃气轮机发电机、4台余热锅炉和2台Doosan Škoda蒸汽轮机。",
          year2020:
            "在KPC项目中增加天然气能力。进行电流和电压变压器的调试、高压和低压母线的测试、加热器的检查、互锁系统的检查、继电保护，并提供操作人员。",
          year2018: "ABB哈萨克斯坦在哈萨克斯坦和独联体国家的",
          year2020t1:
            "对从 KETOG Atyrau 220kV 变电站到 Kurmangazy 输油站的 220kV 输电线路进行维护，包括对 Isatai 输油站和上述输油站的 220/10kV 配电变电站的支路拆分。",
          hiringTitle: "目前正在招聘以下职位：",
          vacanci: "简历请发送至以下电子邮件地址：",
          hiringPhone: "咨询电话：",
          healtDescr:
            "KITEK CONSTRUCTION 公司的管理目标是防止事故、伤害和职业病的发生。通过优先保护员工在执行和管理工作的过程中的健康和安全来实现这一目标。最终目标是确保所有员工——包括自有员工和分包商——在工作的所有阶段都安全。职业健康和环境安全政策强调，每位员工和管理者都有责任实现零事故、最小化污染和废物。",
          healtNum: "工作时间无损失小时",
          healtTitle: "公司员工安全和健康的政策",
          contactTitle: "KITEK CONSTRUCTION 有限责任公司的总部",
          contactInfo: "联系信息",
          contactAddres:
            "地址：哈萨克斯坦共和国，阿提劳市，南方工业区，建筑物 44",
          contactIndex: "邮政编码：060011",
          contactPhone: "电话：",
          contactMail: "电子邮件：",
          activeProjects: "活跃项目",
          realProjects: "成功实施的项目"
        }
      },
      uk: {
        translation: {
          welcome: "БУДІВНИЦТВО • ПУСК • ТЕХНІЧНЕ ОБСЛУГОВУВАННЯ.",
          home: "Головна",
          about: "Про нас",
          projects: "Проекти",
          careers: "Кар'єра",
          helt: "Здоров'я та безпека",
          certificates: "Сертифікати",
          contact: "Зв'яжіться з нами",
          tooKitek: "ТОВ KITEK CONSTRUCTION",
          tooAdress:
            "Республіка Казахстан, Атирауська Область, 060011, м. Атирау, Промислова Зона Оңтүстік, будинок 44",
          titleSection1:
            "Ми пропонуємо широкий профіль технічних послуг, включаючи наступні роботи:",
          ac1header:
            "Електромонтаж, пуско-наладка, запуск та технічне обслуговування:",
          ac1title:
            "— Різних типів силових генераторів — систем РЗА — Кабельні та повітряні лінії до 220кВ — Оптоволоконні лінії зв'язку — Системи управління навантаженням / Системи управління розподілом електроенергії — Розподільні щити високовольтні / середньої навантаження / низьковольтні — Системи катодного захисту — Системи освітлення та малої потужності — Системи заземлення та блискавкозахисту — Джерел Безперебійного Живлення (ДБЖ) — Систем електрообігріву (теплоспутники) — Обладнання Відкритих Розподільних Устроїв (ВРУ) та Комплектних Трансформаторних Підстанцій (КТП)",
          ac2header: "Монтаж, Підключення та калібрування приладів КІП та А:",
          ac2title:
            "— Системи безпечного управління виробництвом (ICSS) та аварійної зупинки (ESD) — Технологічні прилади КІП та А — Системи газопожежної безпеки та гасіння — АСУ та АСУТП",
          ac3header:
            "Монтаж, пуско-наладка, введення в експлуатацію та технічне обслуговування:",
          ac3title:
            "— Обертового механічного обладнання — Статичного механічного обладнання — Систем ОВКВ",
          ac4header: "Управління контролем виконання проектів",
          ac4title:
            "— Надання висококваліфікованих та досвідчених спеціалістів з пусконаладки та монтажу — Надання керівного персоналу — Надання підтримки управління проектами",
          partnersTitle: "Наші Клієнти та Партнери",
          news: "Новини компанії",
          oilTitle: "з Днем нафтовиків!",
          collegTitle: "Шановні партнери та колеги!",
          collegP:
            "У цей особливий день ми раді привітати вас з Днем нафтовиків!",
          collegp1:
            "Хочемо висловити щиру подяку за вашу довіру і спільну роботу. Ваш професіоналізм та відданість справі вносять неоціненний вклад у розвиток нашої галузі. Ваша енергія та прагнення до досягнення високих результатів надихають нас і роблять нашу співпрацю успішною.",
          collegp2:
            "Нехай кожен проект приносить вам задоволення, а ваші зусилля будуть винагороджені новими досягненнями. Бажаємо міцного здоров'я, успіхів у професійній діяльності та благополуччя в житті.",
          rustam: "З повагою, Рустем Абдулов",
          companyTitle: "Про Компанію",
          companyTitle1: "Цілі та досягнення",
          companyTitle2: "Порядок роботи з скаргами",
          comHeader:
            "це казахстанська швидко розвиваюча багатопрофільна компанія.",
          li1: "Компанія була заснована в вересні 2008 року в м. Атирау, Республіка Казахстан;",
          li2: "Компанія має держліцензію 1 категорії на будівельно-монтажні, пуско-наладочні роботи та ліцензію 3 категорії на проектування",
          li3: "Ми надаємо спеціалізовані послуги з будівництва, пусконаладки, запуску, експлуатації та технічного обслуговування. Область багатопрофільної спеціалізації включає електрику, КіП, механіку, ОВКВ, телекомунікації, інтеграцію систем управління та багато іншого.",
          li4: "Ми є акредитованими партнерами компанії Hitachi ABB Power Grids на території Казахстану. У рамках цього партнерства надаємо послуги з постачання високовольтного електричного обладнання, включаючи проектування, транспортування, монтаж, пусконаладку, здачу в експлуатацію та технічне обслуговування.",
          li5: "Компанія має безліч сертифікованих комплектів тестового обладнання від відомих світових виробників, таких як Fluke, Druke, Omicron, Megger, Chauvin Arnoux, Baur, Testo, Rosemount, Metran, Retom, ISA тощо.",
          li6: "У складі компанії більше 100 людей високо кваліфікованих професіоналів, сертифікованих ABB, Siemens, Schneider Electric, Tyco Electronics (Raychem), CompEX.",
          li7: "10 успішних років на ринку Казахстану в індустрії нафти і газу, нафтохімічному, енергетичному секторах, включаючи більше 100 успішно реалізованих проектів.",
          li8: "Ми пропонуємо конкурентоспроможні ціни, ефективний, безпечний і якісний сервіс.",
          missions: "НАША МІСІЯ",
          missTitle1:
            "Вносити цінний вклад у розвиток казахстанської економіки та бути найкращим партнером для нафтохімічних, нафтопереробних та енергетичних компаній. Ми об'єднуємо якість і надійність, відрізняємося безпечним виконанням найскладніших інженерних завдань та наданням високоякісних послуг для безпечного та ефективного виробництва. Для виконання цієї місії ми ставимо наступні стратегічні цілі:",
          dostij:
            "досягнення ТОВ «KITEK CONSTRUCTION» (КАЙТЭК КОНСТРАКШН) лідируючих позицій у сфері наданих послуг.",
          dostij1:
            "підвищення надійності як технологічної, так і економічної, на основі застосування нових технічних та технологічних рішень.",
          dostij2: "прогресивний і стійкий розвиток бізнесу.",
          dostij3: "СПОСОБИ ДОСЯГНЕННЯ:",
          listTitle:
            "Розгляд ключових компонентів культури ТБ з метою постійного розвитку.",
          listTitle1:
            "Увага до потреб наших замовників та спеціальний підхід до кожного для вирішення їх питань.",
          listTitle2:
            "Підтримка високого рівня наданих послуг для наших клієнтів.",
          listTitle3:
            "Впровадження передових технологій із використанням сучасного обладнання та підвищенням кваліфікаційного рівня персоналу компанії.",
          listTitle4:
            "Суворе дотримання законодавства Республіки Казахстан, міжнародних стандартів та вимог клієнтів.",
          helpTitle:
            "Управління скаргами проводиться відповідно до вимог процедури KC-QA-DP-013. Під управлінням скаргами розуміються дії компанії, вжиті для забезпечення того, щоб заявлена скарга ефективно оброблялася, не вплинула негативно на якість послу",
          titleLink:
            "Повну процедуру можна переглянути за наступним посиланням:",
          hitachiBtn: "Партнерство",
          titlePartner:
            "ТОВ «КІТЕК КОНСТРАКШН» є акредитованим партнером Hitachi Energy в Республіці Казахстан. У рамках цього партнерства ми надаємо послуги з постачання високовольтного електричного обладнання, включаючи проєктування, транспортування, встановлення, пусконалагоджувальні роботи, передачу в експлуатацію та обслуговування.",
          year2011To2013:
            "Надання послуг електричних випробувань (ETL) на Карабатанській електростанції та інженерних підтримуючих системах заводу Болашак та острова Д.",
          year2012To2013:
            "Розширення TR3 та введення в експлуатацію електростанції на Карабатані, запуск 2 газових турбін GE Frame 6B з їх допоміжними системами.",
          year2013To2014:
            "Договір на послуги електротехнічної лабораторії для обслуговування систем розподілу електроенергії та енергетичних комплексів на Карабатанській нафтопереробній заводі Болашак.",
          year2014To2015:
            "Монтаж, (попередні) пусконалагоджувальні роботи, введення в експлуатацію електричних обігрівальних систем на насосних станціях КТК в Атирау. Інспекція електричного обладнання на розподільних підстанціях.",
          year2014T12015:
            "Надання управлінського персоналу в рамках проєкту розширення в Тенгізі.",
          year2014To2016:
            "Контроль якості монтажу електричного обладнання на проєкті Бозшакол. Інспекція повітряної лінії 220 кВ.",
          year2016:
            "Монтаж і налаштування клітин релейного захисту та автоматизації (РЗА) для 10 кВ з підстанції KEGOC Атирау 220 кВ на завод АтырауНефтемаш.",
          year2014To2017:
            "Пусконалагоджувальні роботи та введення в експлуатацію CRP-3 ANPS і живильних клітин на 220 кВ та енергетичного обладнання на підстанції KEGOC Атирау 220 кВ. Повторна установка 220 кВ роз'єднувачів на ОГС CRP-3 ANPS. Повторний монтаж волоконно-оптичних ліній на повітряній лінії 220 кВ між підстанцією KEGOC Атирау 220 кВ і CRP-3 ANPS.",
          year2015To2017:
            "Надання послуг електричної випробувальної лабораторії (ETL), інспекція вибухобезпечного обладнання, монтаж і введення в експлуатацію електричного обладнання та систем автоматизації для проєкту Кашаган на шельфі (острів Д) і на березі на Карабатанському заводі.",
          year2016To2017:
            "Нагляд за монтажними роботами на Головній Розподільній Станції Газопереробного Комплексу Канди (KGPC), Узбекистан.",
          year2016To2019:
            "Пусконалагоджувальні роботи та запуск CRP № 4 220/6 кВ на Атырауському нафтопереробному заводі.",
          year2015To2019:
            "(Попередні) пусконалагоджувальні роботи електричного обладнання, систем автоматизації, HVAC систем і вибухобезпечного обладнання для проєкту Західної залізниці Ескене в Карабатані. Надання управлінського персоналу.",
          year2014To2020:
            "Договір на монтаж, обслуговування, (попередні) пусконалагоджувальні роботи систем розподілу електроенергії та енергетичних комплексів для проєкту Кашаган на березі та на шельфі, включаючи інспекцію вибухобезпечного обладнання. Надання послуг електричної випробувальної лабораторії (ETL).",
          year2019To2020:
            "Пусконалагоджувальні роботи на Вітровій електростанції Бадамша, включаючи комплексний запуск головної розподільної підстанції.",
          year2019To2021:
            "Пусконалагоджувальні роботи та введення в експлуатацію Комбінованої циклової електростанції з 4 газовими турбінами Siemens STG-800, 4 котлами для рекуперації тепла Doosan та 2 паровими турбінними установками Doosan Škoda, включаючи системи автоматизації та релейного захисту та автоматизації (РЗА), розподільні щити 110 кВ та синхронізацію з KEGOC.",
          year2020:
            "Проєкт зі збільшення газових потужностей на КТК. Введення в експлуатацію трансформаторів струму та напруги, випробування шинопроводів (високовольтних і низьковольтних), перевірка теплообмінників, перевірка блокувань, релейного захисту та надання експлуатаційного персоналу.",
          year2018:
            "Контракт на обслуговування ABB Казахстан для пусконалагоджувальних робіт, обслуговування релейного захисту, SCADA та електричного обладнання ABB в Казахстані та країнах СНД.",
          year2020t1:
            "Обслуговування повітряної лінії 220 кВ від підстанції KEGOC Атирау 220 кВ до насосної станції Курмангази з відводами на насосну станцію Ісатай та розподільні підстанції 220/10 кВ на зазначених насосних станціях.",
          hiringTitle:
            "МИ В НАСТОЯЩИЙ ЧАС ШУКАЄМО КАНДИДАТІВ НА СЛІДУЮЧІ ПОСАДИ:",
          vacanci:
            "Резюме можна надсилати на електронні адреси, вказані нижче:",
          hiringPhone: "Контактні телефонні номери:",
          healtDescr:
            "Мета керівництва ТОВ «КІТЕК КОНСТРАКШН» — запобігання нещасним випадкам, травмам та захворюванням на робочому місці. Це досягається шляхом пріоритетного ставлення до здоров'я та безпеки працівників під час виконання робіт і управління. Остаточна мета — забезпечити безпеку всіх працівників — як внутрішніх, так і підрядників — на кожному етапі роботи. Політика в галузі охорони праці та безпеки (ОПБ) підкреслює, що кожен працівник і керівник відповідальний за досягнення нульових нещасних випадків, зменшення забруднень та зменшення відходів.",
          healtNum: "години роботи без втрати часу",
          healtTitle:
            "Політика компанії щодо безпеки працівників та охорони праці",
          contactTitle: "Головний офіс ТОВ «КІТЕК КОНСТРАКШН»",
          contactInfo: "Контактна інформація",
          contactAddres:
            "Адреса: Республіка Казахстан, місто Атирау, ІНДУСТРІАЛЬНА ЗОНА ПІВДЕНЬ, будинок 44",
          contactIndex: "Поштовий індекс: 060011",
          contactPhone: "Телефон:",
          contactMail: "Електронна пошта:",
          activeProjects: "Активні проекти",
          realProjects: "Успішно реалізовані проекти"
        }
      },
      es: {
        translation: {
          welcome: "CONSTRUCCIÓN • PUESTA EN SERVICIO • MANTENIMIENTO",
          home: "Inicio",
          about: "Acerca de nosotros",
          projects: "Proyectos",
          careers: "Carreras",
          helt: "Salud y Seguridad",
          certificates: "Certificados",
          contact: "Contáctenos",
          tooKitek: "LLP KITEK CONSTRUCCIÓN",
          tooAdress:
            "República de Kazajistán, Región de Atyrau, 060011, Ciudad de Atyrau, Zona Industrial Sur, Edificio 44",
          titleSection1:
            "OFRECEMOS UNA AMPLIA VARIEDAD DE SERVICIOS TÉCNICOS, INCLUYENDO:",
          ac1header:
            "Instalación eléctrica, puesta en servicio, arranque y mantenimiento de:",
          ac1title:
            "— Varios tipos de Unidades Generadoras Eléctricas — Sistemas de Protección por Relé y Automatización — Líneas de Cable y Líneas Aéreas hasta 220 kV — Líneas de Comunicación por Fibra Óptica — Sistemas de Control de Carga / Sistemas de Control de Distribución de Energía — Tableros de Distribución de Alta Tensión / Media Tensión / Baja Tensión — Sistemas de Protección Catódica — Sistemas de Iluminación y Baja Potencia — Sistemas de Puesta a Tierra y Protección contra Rayos — Suministros de Energía Ininterrumpida (UPS) — Sistemas de Calefacción Eléctrica (Calefacción de Trazas) — Equipos de Conmutación Exterior y Subestaciones de Transformadores Paquetizados",
          ac2header: "Instalación, Conexión y Calibración de Instrumentación:",
          ac2title:
            "— Sistemas Integrados de Control y Seguridad (ICSS) y Sistemas de Apagado de Emergencia (ESD) — Instrumentos Operacionales — Sistemas de Detección de Fuego y Gas y Sistemas de Extinción de Incendios — Sistemas de Control Automatizado y Sistemas de Control de Procesos",
          ac3header:
            "Instalación, Puesta en Servicio, Arranque y Mantenimiento Mecánico y HVAC:",
          ac3title:
            "— Equipos mecánicos rotativos — Equipos mecánicos estáticos — Sistemas HVAC",
          ac4header: "Control y Gestión de Proyectos:",
          ac4title:
            "— Provisión de Especialistas Calificados y con Experiencia en Puesta en Servicio e Instalación — Provisión de Personal de Gestión — Soporte en Gestión de Proyectos",
          partnersTitle: "NUESTROS CLIENTES Y SOCIOS COMERCIALES",
          news: "ÚLTIMAS NOTICIAS",
          oilTitle: "¡Feliz Día de los Trabajadores del Petróleo!",
          collegTitle: "Estimados socios y colegas!",
          collegP:
            "En este día especial, nos complace felicitarles por el Día de los Trabajadores del Petróleo.",
          collegp1:
            "Nos gustaría expresar nuestro sincero agradecimiento por su confianza y colaboración. Su profesionalismo y dedicación hacen una contribución invaluable al desarrollo de nuestra industria. Su energía y compromiso para lograr altos resultados nos inspiran y hacen que nuestra cooperación sea exitosa.",
          collegp2:
            "Que cada proyecto les brinde satisfacción y que sus esfuerzos sean recompensados con nuevos logros. Les deseamos buena salud, éxito en sus actividades profesionales y prosperidad en la vida.",
          rustam: "Atentamente, Rustem Abdullov",
          companyTitle: "Acerca de la Empresa",
          companyTitle1: "Objetivos y Logros",
          companyTitle2: "Procedimiento de Manejo de Quejas",
          comHeader:
            "Esta es una empresa multidisciplinaria de rápido crecimiento de Kazajistán.",
          li1: "La empresa fue fundada en septiembre de 2008 en Atyrau, República de Kazajistán;",
          li2: "La empresa posee una licencia estatal de primera categoría para trabajos de construcción e instalación, así como una licencia de tercera categoría para diseño;",
          li3: "Proporcionamos servicios especializados en construcción, puesta en servicio, arranque, operación y mantenimiento. Nuestra especialización multidisciplinaria incluye Eléctrico, Instrumentación y Control, Mecánico, HVAC, Telecomunicaciones, Integración de Sistemas y mucho más;",
          li4: "Somos socios acreditados de Hitachi ABB Power Grids en Kazajistán. Como parte de esta asociación, ofrecemos servicios para el suministro de equipos eléctricos de alta tensión, incluyendo diseño, transporte, instalación, puesta en servicio, entrega operacional y mantenimiento;",
          li5: "La empresa cuenta con numerosos conjuntos de equipos de prueba certificados de reconocidos fabricantes globales como Fluke, Druke, Omicron, Megger, Chauvin Arnoux, Baur, Testo, Rosemount, Metran, Retom, ISA, entre otros;",
          li6: "La empresa está compuesta por más de 100 profesionales altamente calificados certificados por ABB, Siemens, Schneider Electric, Tyco Electronics (Raychem), CompEX;",
          li7: "10 años exitosos en el mercado de Kazajistán en la industria del Petróleo y Gas, Petroquímica y sectores Energéticos, incluyendo más de 100 proyectos completados con éxito;",
          li8: "Ofrecemos precios competitivos y un servicio eficiente, seguro y de calidad.",
          missions: "NUESTRA MISIÓN",
          missTitle1:
            "Contribuir con apoyo valioso al desarrollo de la economía de Kazajistán y ser el socio líder para las empresas petroquímicas, de refinación de petróleo y energéticas. Combinamos calidad y confiabilidad, distinguidos por la ejecución segura de las tareas de ingeniería más complejas y la prestación de servicios de alta calidad para una producción segura y eficiente. Para lograr esta misión, establecemos los siguientes objetivos estratégicos:",
          dostij:
            "Alcanzar posiciones de liderazgo para LLP 'KITEK CONSTRUCCIÓN' en el campo de los servicios prestados.",
          dostij1:
            "Mejorar tanto la confiabilidad tecnológica como económica mediante la implementación de nuevas soluciones técnicas y tecnológicas.",
          dostij2: "Desarrollo empresarial progresivo y sostenible.",
          dostij3: "MÉTODOS DE LOGRO:",
          listTitle:
            "Revisar componentes clave de la cultura de seguridad para el desarrollo continuo.",
          listTitle1:
            "Centrarse en las necesidades de nuestros clientes y proporcionar un enfoque personalizado para abordar sus inquietudes.",
          listTitle2:
            "Mantener un alto nivel de servicios prestados a nuestros clientes.",
          listTitle3:
            "Implementar tecnologías avanzadas utilizando equipos modernos y mejorar el nivel de habilidades del personal de la empresa.",
          listTitle4:
            "Cumplimiento estricto de las leyes de la República de Kazajistán, normas internacionales y requisitos del Cliente.",
          helpTitle:
            "La gestión de quejas se lleva a cabo de acuerdo con los requisitos del procedimiento KC-QA-DP-013. La gestión de quejas se refiere a las acciones tomadas por la Empresa para asegurar que la queja reportada sea manejada de manera efectiva, no afecte negativamente la calidad de los servicios y no dañe la reputación de la Empresa.",
          titleLink:
            "El procedimiento completo se puede ver en el siguiente enlace:",
          hitachiBtn: "Asociación",
          titlePartner:
            "LLP KITEK CONSTRUCCIÓN es un socio acreditado de Hitachi Energy en la República de Kazajistán. Como parte de esta asociación, proporcionamos servicios para el suministro de equipos eléctricos de alta tensión, incluyendo diseño, transporte, instalación, puesta en servicio, entrega para operación y mantenimiento.",
          year2011To2013:
            "Provisión de servicios ETL en la Planta de Energía Karabatan y Sistemas de Soporte de Ingeniería de la Planta Bolashak y la Isla D.",
          year2013To2014:
            "Contrato para los servicios del Laboratorio de Ingeniería Eléctrica para el mantenimiento de sistemas de distribución de energía y complejos energéticos de la refinería de petróleo Bolashak en Karabatan.",
          year2014To2015:
            "Instalación, trabajos de (pre-) puesta en marcha, puesta en marcha y lanzamiento de sistemas de calefacción eléctrica en las estaciones de bombeo KTK en Atyrau. Inspección de equipos eléctricos de potencia en subestaciones de distribución.",
          year2014T12015:
            "Provisión de personal de gestión en el marco del futuro proyecto de expansión en Tengiz.",
          year2014To2016:
            "Control de calidad de la instalación de equipos eléctricos en el proyecto Bozshakol. Inspección de la línea aérea de 220 kV.",
          year2016:
            "Instalación y ajuste de celdas de protección de relés y automatización (RZA) para el 10 kV con la subestación KEGOC Atyrau de 220 kV a la planta AtyrauNefteMash.",
          year2014To2017:
            "Trabajos de puesta en marcha y puesta en marcha de celdas CRP-3 ANPS y alimentación a 220 kV y equipos de potencia en la subestación KEGOC Atyrau de 220 kV. Reinstalación de seccionadores de 220 kV en el OHS de CRP-3 ANPS. Remontaje de líneas de fibra óptica en la línea aérea de 220 kV entre la subestación KEGOC Atyrau de 220 kV y CRP-3 ANPS.",
          year2015To2017:
            "Provisión de servicios para el Laboratorio de Pruebas Eléctricas (ETL), inspección de equipos a prueba de explosiones, instalación y puesta en marcha de equipos eléctricos y sistemas de automatización para el proyecto Kashagan en la plataforma (Isla D) y en tierra en la planta de Karabatan.",
          year2016To2017:
            "Supervisión de trabajos de instalación en la Estación de Distribución Principal del Complejo de Procesamiento de Gas Kandym (KGPC), Uzbekistán.",
          year2016To2019:
            "Pre-puesta en marcha, puesta en marcha y lanzamiento del CRP No. 4 220/6 kV en la Refinería de Petróleo de Atyrau.",
          year2015To2019:
            "(Pre-) puesta en marcha de equipos eléctricos, sistemas de automatización, sistemas HVAC y equipos a prueba de explosiones para el proyecto del Ferrocarril Oeste Eskene en Karabatan. Provisión de personal de gestión.",
          year2014To2020:
            "Contrato para instalación, mantenimiento, (pre-) puesta en marcha de sistemas de distribución de energía y complejos energéticos para el proyecto Kashagan en tierra y mar, incluida la inspección de equipos a prueba de explosiones. Provisión de servicios del Laboratorio de Pruebas Eléctricas (ETL).",
          year2019To2020:
            "Trabajos de puesta en marcha en el Parque Eólico Badamsha, incluida la puesta en marcha integral de la subestación de distribución principal.",
          year2019To2021:
            "Trabajos de puesta en marcha y puesta en marcha de la Planta de Energía de Ciclo Combinado con 4 turbinas de gas Siemens STG-800, 4 calderas de recuperación de calor Doosan y 2 unidades de turbinas de vapor Doosan Škoda, incluidos sistemas de automatización y protección de relés y automatización (RZA), equipo eléctrico de 110 kV, y sincronización con KEGOC.",
          year2020:
            "Proyecto para aumentar las capacidades de gas en el CPC. Puesta en marcha de transformadores de corriente y voltaje, pruebas de barras de bus (alta y baja tensión), verificación de intercambiadores de calor, verificación de bloqueos, protección de relés y provisión de personal operativo.",
          year2018:
            "Contrato de servicio de ABB Kazajistán para puesta en marcha, mantenimiento de protección de relés, SCADA y equipos de potencia de ABB en Kazajistán y los países de la CEI.",
          year2020t1:
            "Mantenimiento de la línea aérea de 220 kV desde la subestación KEGOC Atyrau de 220 kV hasta la estación de bombeo Kurmangazy, con derivaciones a la estación de bombeo Isatay y subestaciones de distribución de 220/10 kV en las estaciones de bombeo mencionadas anteriormente.",
          hiringTitle:
            "ACTUALMENTE ESTAMOS CONTRATANDO PARA LAS SIGUIENTES POSICIONES:",
          vacanci:
            "Los currículos se pueden enviar a las direcciones de correo electrónico que se indican a continuación:",
          hiringPhone: "Números de teléfono de contacto:",
          healtDescr:
            "El objetivo de la dirección de 'KITEK CONSTRUCTION' es prevenir accidentes, lesiones y enfermedades en el lugar de trabajo. Esto se logra priorizando la salud y la seguridad de los empleados durante la ejecución del trabajo y la gestión. El objetivo final es garantizar la seguridad de todos los empleados, tanto internos como subcontratistas, en cada etapa del trabajo. La política de Salud y Seguridad Ocupacional (OHS) enfatiza que cada empleado y gerente es responsable de lograr cero accidentes, minimizar la contaminación y reducir los desechos.",
          healtNum: "horas trabajadas sin tiempo perdido",
          healtTitle:
            "Política de la Empresa sobre Seguridad de los Empleados y Salud Ocupacional",
          contactTitle: "Oficina central de LLP «KITEK CONSTRUCTION»",
          contactInfo: "Información de contacto",
          contactAddres:
            "Dirección: República de Kazajistán, ciudad de Atyrau, ZONA INDUSTRIAL SUR, edificio 44",
          contactIndex: "Índice postal: 060011",
          contactPhone: "Teléfono:",
          contactMail: "Correo electrónico:",
          activeProjects: "Proyectos activos",
          realProjects: "Proyectos implementados con éxito"
        }
      },
      fr: {
        translation: {
          welcome: "CONSTRUCTION • MISE EN SERVICE • MAINTENANCE TECHNIQUE.",
          home: "Accueil",
          about: "À propos de nous",
          projects: "Projets",
          careers: "Carrières",
          helt: "Santé et sécurité",
          certificates: "Certificats",
          contact: "Contactez-nous",
          tooKitek: "LLP KITEK CONSTRUCTION",
          tooAdress:
            "République du Kazakhstan, Région d'Atyraou, 060011, ville d'Atyraou, Zone industrielle Sud, bâtiment 44",
          titleSection1:
            "Nous offrons un large éventail de services techniques, y compris les travaux suivants :",
          ac1header:
            "Installation électrique, mise en service, démarrage et maintenance :",
          ac1title:
            "— Différents types de générateurs de puissance — systèmes de protection et d'automatisation — Lignes de câbles et aériennes jusqu'à 220kV — Lignes de communication à fibre optique — Systèmes de contrôle de charge / Systèmes de gestion de la distribution d'électricité — Armoires de distribution Haute Tension / Moyenne Tension / Basse Tension — Systèmes de protection cathodique — Systèmes d'éclairage et basse puissance — Systèmes de mise à la terre et de protection contre la foudre — Sources d'alimentation sans interruption (UPS) — Systèmes de chauffage électrique (chauffage électrique) — Équipements de Postes de Transformation (PT) et Postes de Transformation Complets (PTC)",
          ac2header:
            "Installation, raccordement et étalonnage des instruments de contrôle et de mesure :",
          ac2title:
            "— Systèmes de contrôle de production sécurisée (ICSS) et d'arrêt d'urgence (ESD) — Instruments technologiques de contrôle et de mesure — Systèmes de détection et d'extinction d'incendie — Systèmes de contrôle automatisés (SCA)",
          ac3header:
            "Installation, mise en service, démarrage et maintenance :",
          ac3title:
            "— Équipements mécaniques rotatifs — Équipements mécaniques statiques — Systèmes de CVC",
          ac4header: "Gestion du contrôle de l'exécution des projets",
          ac4title:
            "— Fourniture de spécialistes qualifiés et expérimentés en mise en service et installation — Fourniture de personnel dirigeant — Soutien à la gestion de projets",
          partnersTitle: "Nos clients et partenaires",
          news: "Nouvelles de l'entreprise",
          oilTitle: "Bonne fête des travailleurs du pétrole !",
          collegTitle: "Chers partenaires et collègues !",
          collegP:
            "En ce jour spécial, nous sommes heureux de vous féliciter à l'occasion de la fête des travailleurs du pétrole !",
          collegp1:
            "Nous tenons à exprimer notre sincère gratitude pour votre confiance et votre collaboration. Votre professionnalisme et votre dévouement apportent une contribution inestimable au développement de notre secteur. Votre énergie et votre quête d'excellence nous inspirent et rendent notre coopération fructueuse.",
          collegp2:
            "Que chaque projet vous apporte satisfaction et que vos efforts soient récompensés par de nouveaux succès. Nous vous souhaitons une bonne santé, du succès dans vos activités professionnelles et du bien-être dans votre vie.",
          rustam: "Cordialement, Rustem Abdullov",
          companyTitle: "À propos de l'entreprise",
          companyTitle1: "Objectifs et réalisations",
          companyTitle2: "Procédure de traitement des plaintes",
          comHeader:
            "c'est une entreprise kazakhstanaise à croissance rapide et multi-sectorielle.",
          li1: "L'entreprise a été fondée en septembre 2008 à Atyraou, République du Kazakhstan ;",
          li2: "L'entreprise possède une licence d'État de catégorie 1 pour les travaux de construction, d'installation et de mise en service, ainsi qu'une licence de catégorie 3 pour la conception.",
          li3: "Nous fournissons des services spécialisés en construction, mise en service, démarrage, exploitation et maintenance technique. Le domaine de spécialisation multi-sectorielle inclut l'électricité, l'instrumentation et le contrôle, la mécanique, le CVC, les télécommunications, l'intégration des systèmes de gestion et bien plus encore.",
          li4: "Nous sommes des partenaires accrédités de Hitachi ABB Power Grids au Kazakhstan. Dans le cadre de ce partenariat, nous fournissons des services de fourniture d'équipements électriques haute tension, y compris la conception, le transport, l'installation, la mise en service, la réception et la maintenance technique.",
          li5: "L'entreprise dispose de nombreux ensembles d'équipements de test certifiés de fabricants mondiaux tels que Fluke, Druke, Omicron, Megger, Chauvin Arnoux, Baur, Testo, Rosemount, Metran, Retom, ISA, etc.",
          li6: "La société compte plus de 100 professionnels hautement qualifiés, certifiés par ABB, Siemens, Schneider Electric, Tyco Electronics (Raychem), CompEX.",
          li7: "10 ans de succès sur le marché kazakhstanais dans l'industrie du pétrole et du gaz, pétrochimie, secteur énergétique, y compris plus de 100 projets réalisés avec succès.",
          li8: "Nous proposons des prix compétitifs, un service efficace, sûr et de qualité.",
          missions: "NOTRE MISSION",
          missTitle1:
            "Apporter une contribution précieuse au développement de l'économie kazakhstanaise et être le meilleur partenaire pour les entreprises pétrochimiques, de raffinage du pétrole et énergétiques. Nous allions qualité et fiabilité, nous distinguant par l'exécution sécurisée des tâches d'ingénierie les plus complexes et la fourniture de services de haute qualité pour une production sûre et efficace. Pour réaliser cette mission, nous fixons les objectifs stratégiques suivants :",
          dostij:
            "atteindre des positions de leader pour LLP KITEK CONSTRUCTION dans le domaine des services offerts.",
          dostij1:
            "améliorer la fiabilité tant technologique qu'économique, sur la base de l'application de nouvelles solutions techniques et technologiques.",
          dostij2: "développement progressif et durable des affaires.",
          dostij3: "MOYENS D'ATTEINTE :",
          listTitle:
            "Considération des éléments clés de la culture de la sécurité au travail en vue d'un développement constant.",
          listTitle1:
            "Attention aux besoins de nos clients et approche spéciale pour résoudre leurs questions.",
          listTitle2:
            "Soutien à un niveau élevé de services fournis à nos clients.",
          listTitle3:
            "Mise en œuvre de technologies avancées avec l'utilisation d'équipements modernes et amélioration du niveau de qualification du personnel de l'entreprise.",
          listTitle4:
            "Respect strict de la législation de la République du Kazakhstan, des normes internationales et des exigences des clients.",
          helpTitle:
            "La gestion des plaintes est effectuée conformément aux exigences de la procédure KC-QA-DP-013. Par gestion des plaintes, nous entendons les actions de l'entreprise visant à garantir qu'une plainte formulée est traitée de manière efficace, n'affecte pas négativement la qualité des services et ne porte pas atteinte à la réputation de l'entreprise.",
          titleLink: "La procédure complète peut être consultée via le lien :",
          hitachiBtn: "Partenariat",
          titlePartner:
            "KITEK CONSTRUCTION LLP est un partenaire accrédité de Hitachi Energy sur le territoire de la République du Kazakhstan. Dans le cadre de ce partenariat, nous offrons des services de fourniture d'équipements électriques haute tension, y compris la conception, le transport, l'installation, la mise en service, la mise en exploitation et la maintenance.",
          year2011To2013:
            "Fourniture de services de laboratoire électrique à la centrale électrique de Karabatan et aux systèmes d'ingénierie de l'usine Bolashak et de l'île D.",
          year2012To2013:
            "TR3 Extension et mise en service de la centrale électrique de Karabatan, mise en service de 2 générateurs à gaz GE Frame 6B avec leurs systèmes auxiliaires.",
          year2013To2014:
            "Contrat pour les services du laboratoire électrique concernant l'entretien des systèmes de distribution d'énergie et des complexes énergétiques de la raffinerie de pétrole « Bolashak » à Karabatan.",
          year2014To2015:
            "Installation, travaux de mise en service (pré-) et mise en exploitation et mise en service des systèmes de chauffage électrique sur les stations de pompage du KTK à Atyrau. Vérification des équipements électriques de puissance sur les sous-stations de distribution.",
          year2014T12015:
            "Fourniture de personnel dirigeant dans le cadre du projet d'expansion future à Tengiz.",
          year2014To2016:
            "Contrôle de la qualité de l'installation des équipements électriques sur le projet Bozshakol. Inspection de la ligne à haute tension 220 kV.",
          year2016:
            "Installation et réglage des cellules de protection des appareils de 10 kV avec le poste de transformation KEGOK Atyrau 220 kV jusqu'à l'usine AtyrauNefteMash.",
          year2014To2017:
            "Mise en service et mise en exploitation des cellules de transformation 220 kV et des équipements de puissance au poste de transformation KEGOK Atyrau 220 kV. Réinstallation des disconnecteurs 220 kV sur l'OU RCP 3 ANPZ. Remontage de la fibre optique sur la ligne à haute tension 220 kV entre le poste de transformation KEGOK Atyrau 220 kV et la RCP-3 ANPZ.",
          year2015To2017:
            "Fourniture de services de laboratoire électrique, inspections des équipements certifiés anti-explosion, installation et mise en service des équipements électriques et des systèmes de mesure pour le projet Kashagan en mer (île D) et à terre à l'usine Karabatan.",
          year2016To2017:
            "Surveillance des travaux d'installation sur la station de distribution principale du complexe de gaz de Kandym (KGPC), Ouzbékistan.",
          year2016To2019:
            "Préparation à la mise en service, mise en service et démarrage de la RCP n°4 220/6 kV à la raffinerie d'Atyrau.",
          year2015To2019:
            "(Pré-)mise en service des équipements électriques, systèmes de mesure, systèmes HVAC, équipements certifiés anti-explosion sur le projet de la route de fer de l'ouest d'Eskene à Karabatan. Fourniture de personnel dirigeant.",
          year2014To2020:
            "Contrat pour les travaux d'installation, de maintenance, de mise en service (pré-) des systèmes de distribution d'énergie et des complexes énergétiques sur le projet Kashagan à terre et en mer, y compris l'inspection des équipements certifiés anti-explosion. Fourniture de services de laboratoire électrique.",
          year2019To2020:
            "Mise en service sur le parc éolien de Badamsha, y compris le lancement complet de la station de distribution principale.",
          year2019To2021:
            "Mise en service et mise en exploitation de la centrale électrique à cycle combiné avec 4 turbines à gaz Siemens STG-800, 4 chaudières de récupération de chaleur Doosan et 2 turbines à vapeur Doosan Škoda, y compris les systèmes d'automatisation, de protection des appareils et de commande de réseau 110 kV, synchronisation avec KEGOK.",
          year2020:
            "Projet d'augmentation des capacités de gaz sur le CPC. Mise en service des transformateurs de courant et de tension, test des barres (haute et basse tension), vérification des systèmes de chauffage, vérification des interlocks, protection par relais, fourniture de personnel opérationnel.",
          year2018:
            "ABB Kazakhstan Contrat de service pour la mise en service, l'entretien de la protection par relais, SCADA, équipements électriques ABB au Kazakhstan et dans les pays de la CEI.",
          year2020t1:
            "Entretien de la ligne 220 kV depuis le poste de transformation KEGOK Atyrau 220 kV jusqu'à la station de pompage Kurmangazy avec une dérivation vers la station de pompage Isatay et les sous-stations de distribution 220/10 kV aux stations de pompage susmentionnées.",
          hiringTitle:
            "À L'HEURE ACTUELLE, NOUS RECRUTONS POUR LES POSTES SUIVANTS :",
          vacanci:
            "Les CV peuvent être envoyés aux adresses e-mail ci-dessous :",
          hiringPhone: "Téléphones pour informations :",
          healtDescr:
            "L'objectif de la direction de KITEK CONSTRUCTION est de prévenir les accidents, les blessures et les maladies au travail. Cela est réalisé en donnant la priorité à la santé et à la sécurité des employés pendant l'exécution et la gestion du travail. L'objectif ultime est d'assurer la sécurité de tous les employés - à la fois les employés directs et les sous-traitants - à toutes les étapes du travail. La politique en matière de sécurité et de santé souligne que chaque employé et responsable est responsable d'atteindre un nombre nul d'accidents, de minimiser la pollution et les déchets.",
          healtNum: "heures travaillées sans perte de temps de travail",
          healtTitle:
            "Politique de l'entreprise en matière de sécurité et de santé au travail des employés",
          contactTitle: "Siège de KITEK CONSTRUCTION LLP",
          contactInfo: "Informations de contact",
          contactAddres:
            "Adresse : République du Kazakhstan, ville d'Atyrau, ZONE INDUSTRIELLE SUD, bâtiment 44",
          contactIndex: "Code postal : 060011",
          contactPhone: "Téléphone :",
          contactMail: "E-mail :",
          activeProjects: "Projets actifs",
          realProjects: "Projets réalisés avec succès"
        }
      },
      ar: {
        translation: {
          welcome: "البناء • التشغيل • الصيانة الفنية.",
          home: "الصفحة الرئيسية",
          about: "معلومات عنا",
          projects: "المشاريع",
          careers: "المسيرة المهنية",
          helt: "الصحة والسلامة",
          certificates: "الشهادات",
          contact: "اتصل بنا",
          tooKitek: "شركة KITEK للبناء",
          tooAdress:
            "جمهورية كازاخستان، منطقة أتراؤ، 060011، مدينة أتراؤ، المنطقة الصناعية الجنوبية، المبنى 44",
          titleSection1:
            "نحن نقدم مجموعة واسعة من الخدمات الفنية، بما في ذلك الأعمال التالية:",
          ac1header: "التركيب الكهربائي، التشغيل، والبدء والصيانة:",
          ac1title:
            "— أنواع مختلفة من مولدات الطاقة — أنظمة الحماية من الأعطال — خطوط الكابلات والهواء حتى 220 كيلو فولت — خطوط الألياف البصرية — أنظمة إدارة الأحمال / أنظمة إدارة توزيع الطاقة الكهربائية — لوحات التوزيع عالية الجهد / متوسطة الحمل / منخفضة الجهد — أنظمة الحماية الكاثودية — أنظمة الإضاءة والمنخفضة القدرة — أنظمة التأريض والحماية من الصواعق — مصادر الطاقة غير المنقطعة (UPS) — أنظمة التسخين الكهربائي (سخانات) — معدات محطات التوزيع المفتوحة (ORU) ومحطات التحويل الكاملة (KTP)",
          ac2header: "تركيب، توصيل ومعايرة أجهزة القياس:",
          ac2title:
            "— أنظمة التحكم الآمن في الإنتاج (ICSS) وإيقاف الطوارئ (ESD) — الأجهزة التكنولوجية للقياس — أنظمة الكشف والإطفاء عن الحرائق — أنظمة التحكم الآلي",
          ac3header: "التركيب، التشغيل، وإدخال الخدمة والصيانة:",
          ac3title:
            "— المعدات الميكانيكية الدوارة — المعدات الميكانيكية الثابتة — أنظمة التكييف والتبريد",
          ac4header: "إدارة مراقبة تنفيذ المشاريع",
          ac4title:
            "— توفير متخصصين مؤهلين وذوي خبرة في التشغيل والتركيب — توفير موظفين إداريين — تقديم الدعم لإدارة المشاريع",
          partnersTitle: "عملاؤنا وشركاؤنا",
          news: "أخبار الشركة",
          oilTitle: "عيد النفط سعيد!",
          collegTitle: "زملائي وشركائي المحترمين!",
          collegP: "في هذا اليوم الخاص، يسعدنا أن نهنئكم بعيد النفط!",
          collegp1:
            "نود أن نعبر عن شكرنا الجزيل على ثقتكم وعملنا المشترك. إن احترافيتكم وتفانيكم تسهم بشكل كبير في تطوير صناعتنا. إن طاقتنا ورغبتنا في تحقيق نتائج عالية تلهمنا وتجعل تعاوننا ناجحًا.",
          collegp2:
            "نتمنى أن يجلب كل مشروع لكم الرضا، وأن تُكافأ جهودكم بإنجازات جديدة. نتمنى لكم صحة جيدة، ونجاحًا في العمل، وسعادة في الحياة.",
          rustam: "مع خالص الاحترام، رستم عبد الله",
          companyTitle: "عن الشركة",
          companyTitle1: "الأهداف والإنجازات",
          companyTitle2: "إجراءات التعامل مع الشكاوى",
          comHeader: "هذه شركة كازاخستانية سريعة النمو ومتعددة التخصصات.",
          li1: "تأسست الشركة في سبتمبر 2008 في مدينة أتراؤ، جمهورية كازاخستان.",
          li2: "تملك الشركة ترخيص حكومي من الفئة الأولى للأعمال الإنشائية والتركيبية وترخيص من الفئة الثالثة للتصميم.",
          li3: "نقدم خدمات متخصصة في البناء، التشغيل، البدء، التشغيل والصيانة. تشمل مجالات التخصص المتعددة الكهرباء، القياس والتحكم، الميكانيكا، التكييف والتبريد، الاتصالات، دمج أنظمة التحكم وغيرها.",
          li4: "نحن شركاء معتمدون لشركة Hitachi ABB Power Grids في كازاخستان. في إطار هذه الشراكة، نقدم خدمات توفير معدات الكهرباء عالية الجهد، بما في ذلك التصميم والنقل والتركيب والتشغيل والصيانة.",
          li5: "تمتلك الشركة العديد من مجموعات الاختبار المعتمدة من شركات عالمية معروفة مثل Fluke وDruke وOmicron وMegger وChauvin Arnoux وBaur وTesto وRosemount وMetran وRetom وISA وغيرها.",
          li6: "يعمل في الشركة أكثر من 100 محترف مؤهل ومعتمد من ABB وSiemens وSchneider Electric وTyco Electronics (Raychem) وCompEX.",
          li7: "عشر سنوات ناجحة في سوق كازاخستان في صناعات النفط والغاز، والصناعات البتروكيماوية، والقطاع الكهربائي، بما في ذلك أكثر من 100 مشروع تم تنفيذه بنجاح.",
          li8: "نقدم أسعار تنافسية، وخدمة فعالة وآمنة وعالية الجودة.",
          missions: "مهمتنا",
          missTitle1:
            "المساهمة بقيمة في تطوير الاقتصاد الكازاخستاني وأن نكون الشريك الأفضل لشركات البتروكيماويات، والتكرير، والطاقة. نحن ندمج الجودة والموثوقية، ونتميز بتنفيذ أكثر المهام الهندسية تعقيدًا، وتقديم خدمات عالية الجودة لضمان الإنتاج الآمن والفعال. لتحقيق هذه المهمة، نحدد الأهداف الاستراتيجية التالية:",
          dostij:
            "تحقيق شركة KITEK للبناء (KITEK CONSTRUCTION) لمراكز ريادية في مجال الخدمات المقدمة.",
          dostij1:
            "زيادة الموثوقية سواء من الناحية التكنولوجية أو الاقتصادية، استنادًا إلى استخدام حلول تقنية وتكنولوجية جديدة.",
          dostij2: "التطوير التدريجي والمستدام للأعمال.",
          dostij3: "طرق تحقيق الأهداف:",
          listTitle:
            "النظر في المكونات الرئيسية لثقافة السلامة بهدف التطوير المستمر.",
          listTitle1:
            "الاهتمام باحتياجات عملائنا ونحو كل حالة على حدة لتلبية متطلباتهم.",
          listTitle2: "دعم مستوى عالٍ من الخدمات المقدمة لعملائنا.",
          listTitle3:
            "تطبيق تقنيات متقدمة باستخدام معدات حديثة ورفع مستوى كفاءة العاملين في الشركة.",
          listTitle4:
            "الالتزام الصارم بالقوانين الجمهورية الكازاخستانية والمعايير الدولية ومتطلبات العملاء.",
          helpTitle:
            "تتم إدارة الشكاوى وفقًا لمتطلبات الإجراء KC-QA-DP-013. تشمل إدارة الشكاوى الإجراءات التي تتخذها الشركة لضمان معالجة الشكاوى المعلنة بفعالية، دون التأثير سلبًا على جودة الخدمات، ودون الإضرار بسمعة الشركة.",
          titleLink: "يمكن الاطلاع على الإجراءات الكاملة من خلال الرابط:",
          hitachiBtn: "شراكة",
          titlePartner:
            "شركة KITEK للبناء هي شريك معتمد لشركة Hitachi Energy في جمهورية كازاخستان. في إطار هذه الشراكة، نقدم خدمات توفير معدات الكهرباء عالية الجهد، بما في ذلك التصميم والنقل والتركيب والتشغيل والصيانة.",
          year2011To2013:
            "تقديم خدمات المختبر الكهربائي في محطة كهرباء كاراباتان وأنظمة الإمداد الهندسي لمصنع بولاشاك وجزيرة د.",
          year2012To2013:
            "TR3 توسيع وإدخال الخدمة في محطة كهرباء كاراباتان، بدء تشغيل مولدين غازيين GE Frame 6B مع أنظمة الدعم الخاصة بهم.",
          year2013To2014:
            "عقد خدمات المختبر الكهربائي لصيانة أنظمة توزيع الطاقة الكهربائية ومجمعات الطاقة لمصنع تكرير النفط بولاشاك في محطة كاراباتان.",
          year2014To2015:
            "تركيب، (إجراءات قبل) التشغيل، إدخال الخدمة وتشغيل أنظمة التدفئة الكهربائية في محطات ضخ ك.ت.ك في أتراؤ. فحص المعدات الكهربائية القوية في محطات التوزيع.",
          year2014T12015:
            "توفير موظفين إداريين ضمن مشروع التوسيع المستقبلي في تنغيز.",
          year2014To2016:
            "مراقبة الجودة لتركيب المعدات الكهربائية في مشروع بوزجاكول. تفتيش خطوط الضغط العالي 220 كيلو فولت.",
          year2016:
            "تركيب وضبط أجهزة الحماية من الأعطال 10 كيلو فولت مع محطة KEGOK أتراؤ 220 كيلو فولت حتى مصنع أتراؤ نفط ماش.",
          year2014To2017:
            "تشغيل وتركيب محطات توزيع الطاقة الكهربائية 220 كيلو فولت ومعدات الطاقة في محطة KEGOK أتراؤ 220 كيلو فولت. إعادة تركيب قواطع الضغط العالي 220 كيلو فولت في ORU CRP 3 ANPZ. إعادة تركيب الكابلات الضوئية على خطوط الضغط العالي 220 كيلو فولت بين محطة KEGOK أتراؤ 220 كيلو فولت وCRP-3 ANPZ.",
          year2015To2017:
            "تقديم خدمات المختبر الكهربائي، فحص المعدات المقاومة للانفجار، التركيب وتشغيل المعدات الكهربائية وأجهزة القياس لمشروع كاشاغان في المياه الساحلية (جزيرة د) وعلى اليابسة في مصنع كاراباتان.",
          year2016To2017:
            "الإشراف على أعمال التركيب في المحطة الرئيسية لتوزيع الغاز في مجمع معالجة الغاز قانديم، أوزبكستان.",
          year2016To2019:
            "تشغيل وتركيب CRP №4 220/6 كيلو فولت في مصنع أتراؤ للنفط.",
          year2018To2019:
            "تركيب وتشغيل أجهزة التحكم الآلي وأنظمة التحكم الآمن في الإنتاج (ICSS) في مصنع سافا لنقل الطاقة الكهربائية.",
          year2019To2020: "تشغيل المعدات الميكانيكية الدوارة في المصنع.",
          year2019:
            "تركيب وتشغيل أنظمة التأريض والحماية من الصواعق لمشاريع 220/35/10 كيلو فولت.",
          year2020:
            "تقديم خدمات المختبر الكهربائي لصيانة أنظمة توزيع الطاقة الكهربائية في محطات الكهرباء كازفوس.",
          year2018:
            "عقد خدمة ABB في كازاخستان لإدخال الخدمة، وصيانة الحماية من الأعطال، وأنظمة SCADA، ومعدات الطاقة ABB في كازاخستان ودول رابطة الدول المستقلة.",
          year2020t1:
            "الصيانة الفنية لخطوط الطاقة 220 كيلو فولت من محطة KEGOK أتراؤ 220 كيلو فولت إلى محطة الضخ Курмангазы مع الاتصال بمحطة الضخ Исатай ومحطات التوزيع 220/10 كيلو فولت في المحطات المذكورة.",
          hiringTitle: "حاليًا، نحن نبحث عن موظفين للوظائف التالية:",
          vacanci:
            "يمكن إرسال السيرة الذاتية إلى عناوين البريد الإلكتروني أدناه:",
          hiringPhone: "للاستفسارات، اتصل بالأرقام التالية:",
          healtDescr:
            "هدف إدارة شركة KITEK CONSTRUCTION هو منع الحوادث والإصابات والأمراض في مكان العمل. يتم تحقيق ذلك من خلال إعطاء الأولوية لصحة وسلامة الموظفين أثناء تنفيذ وإدارة العمل. الهدف النهائي هو ضمان سلامة جميع الموظفين، سواء كانوا من الشركة أو المقاولين الفرعيين، في جميع مراحل العمل. تؤكد سياسة الصحة والسلامة المهنية على أن كل موظف ومدير مسؤول عن تحقيق صفر حوادث، وتقليل التلوث والنفايات.",
          healtNum: "ساعات عمل بدون فقدان وقت العمل",
          healtTitle: "سياسة الشركة في مجال السلامة والصحة المهنية للموظفين",
          contactTitle: "المكتب الرئيسي لشركة KITEK CONSTRUCTION",
          contactInfo: "معلومات الاتصال",
          contactAddres:
            "العنوان: جمهورية كازاخستان، مدينة أتراؤ، المنطقة الصناعية الجنوبية، المبنى 44",
          contactIndex: "الرمز البريدي: 060011",
          contactPhone: "الهاتف:",
          contactMail: "البريد الإلكتروني:",
          activeProjects: "المشاريع النشطة",
          realProjects: "المشاريع التي تم تنفيذها بنجاح"
        }
      },
      fallbackLng: "en",
      interpolation: {
        escapeValue: false
      }
    }
  });

export default i18n;
