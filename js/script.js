// Translations Object
const translations = {
  en: {
    // Navigation
    nav_home: "Home",
    nav_about: "About Us",
    nav_iso: "ISO Certifications",
    nav_services: "Services",
    nav_projects: "Projects",
    nav_contact: "Contact",
    nav_quote: "Get a Quote",
    
    // Home Page
    hero_title: "Cultivating Green Horizons",
    hero_desc: "Sama Al Khaleej is your premier partner for world-class landscaping, agriculture, and sustainable green solutions.",
    btn_discover: "Discover Our Work",
    btn_contact_us: "Contact Us Now",
    
    services_title: "Our Core Services",
    srv_const_title: "General Construction",
    srv_const_desc: "Building malls, towers, commercial and residential complexes according to the highest quality standards.",
    srv_maint_title: "Facility Management",
    srv_maint_desc: "Professional management and maintenance of buildings and facilities with guaranteed quality.",
    srv_clean_title: "Cleaning Services",
    srv_clean_desc: "Comprehensive cleaning, polishing, and sterilization for residential and commercial buildings.",
    srv_agri_title: "Agriculture & Landscaping",
    srv_agri_desc: "Creating and maintaining gardens, parks, supplying trees, and installing irrigation networks.",
    srv_stadium_title: "Stadium Maintenance",
    srv_stadium_desc: "World-class turf management, lighting, and infrastructural upkeep for premium sports venues.",
    srv_iso_desc: "Operating perfectly under world-class safety, environmental, and quality management protocols.",
    
    why_title: "Why Choose Sama Al Khaleej?",
    why_1: "Years of Proven Experience",
    why_2: "Uncompromising Quality Standards",
    why_3: "Fast and Reliable Delivery",
    why_4: "Highly Trusted Professional Team",
    why_read_more: "Read More About Us",

    // Homepage ISO
    idx_iso_title: "ISO Certifications",
    idx_iso_desc: "We are committed to international quality standards and certified to deliver excellence across all our services.",
    idx_iso_btn: "View Full Certificates",
    
    proj_title: "Featured Projects",
    proj_view_all: "View All Projects",
    
    // Qualified Companies
    qual_title: "Qualified Companies",
    qual_desc: "Authorized and certified by major Saudi government and private entities.",
    qual_1: "Qualified with Saudi Housing Company",
    qual_2: "Qualified with Saudi Aramco",
    qual_3: "Qualified with MODON (Industrial Cities)",
    qual_4: "Qualified with Misk Foundation",
    qual_5: "And other approved government entities",
    
    // About Page
    about_title: "About Sama Al Khaleej",
    about_story_title: "Our Story",
    about_story_desc: "Founded with a vision to redefine the construction landscape in Saudi Arabia, Sama Al Khaleej has grown into a leading contracting and services company. Our dedication to quality and client satisfaction sets us apart.",
    about_mission: "Our Mission",
    about_mission_desc: "To deliver exceptional construction and maintenance solutions while fostering long-term relationships built on trust, integrity, and performance.",
    about_vision: "Our Vision",
    about_vision_desc: "To be the preferred partner for innovative and sustainable development projects across the Gulf region.",
    team_title: "Our Professional Team",
    stat_years: "Years Experience",
    stat_projects: "Projects Completed",
    stat_clients: "Happy Clients",
    stat_awards: "Industry Awards",
    
    // Services Page
    serv_page_title: "Comprehensive Services",
    
    // Projects
    port_page_title: "Our Portfolio",
    proj_1: "Luxury Residential Tower",
    proj_2: "Modern Commercial Mall",
    proj_3: "Corporate Office Interior",
    proj_4: "Landscape & Park Design",
    proj_5: "Hospital Maintenance",
    proj_6: "Villa Exterior Finishing",
    
    // Contact Page
    contact_page_title: "Get In Touch",
    contact_info: "Contact Information",
    contact_form_title: "Send Us a Message",
    form_name: "Full Name",
    form_email: "Email Address",
    form_phone: "Phone Number",
    form_subject: "Subject",
    form_message: "Your Message",
    btn_submit: "Send Message",
    
    // Footer
    footer_desc: "Empowering visions through world-class construction and maintenance services.",
    footer_quick: "Quick Links",
    footer_contact: "Contact Info",
    footer_rights: "© 2026 Sama Al Khaleej. All Rights Reserved.",
    
    office_address: "Riyadh, Saudi Arabia",
    
    // Missing Projects / Contact fields
    loc_riyadh: "Riyadh, Saudi Arabia",
    loc_jeddah: "Jeddah, Saudi Arabia",
    loc_dammam: "Dammam, Saudi Arabia",
    loc_khobar: "Al Khobar, Saudi Arabia",
    proj_ready: "Ready to start your next project?",
    proj_quote: "Get a Quote Now",
    contact_ho: "Head Office",
    contact_phone: "Phone Number",
    contact_email: "Email Address",
    
    // View Details Links
    view_cat: "View Category",
    view_cat_det: "View Category Details",
    
    // Agriculture Page
    ag_hero_title: "Agriculture",
    ag_hero_desc: "Sama Al Khaleej Agriculture provides professional services in maintenance, cleaning, operations, and facility management with high quality and reliability.",
    ag_sec1_title: "Commercial Nursery",
    ag_sec1_p1: "Sama Al Khaleej offers complete landscaping solutions, starting from creative design concepts and planning to full project execution using modern technologies and materials.",
    ag_sec1_p2: "Our team follows an innovative approach and has a strong passion for creating vibrant green environments that add aesthetic and functional value.",
    ag_sec1_p3: "We have a team of professional architects and designers committed to delivering high-quality results and making a positive impact in every project.",
    ag_sec1_p4: "We also provide irrigation network construction and maintenance. The company owns a nursery with an area of 90,000 square meters that includes a wide variety of trees, plants, and ground covers, all maintained using advanced agricultural techniques.",
    ag_sec2_title: "Services",
    ag_sec2_li1: "Landscaping",
    ag_sec2_li2: "Irrigation systems (construction and maintenance)",
    ag_sec2_li3: "Tree trimming and pruning",
    ag_sec2_li4: "Natural grass supply and installation",
    ag_sec2_li5: "Pest control",
    ag_sec2_li6: "Cleaning services",
    ag_sec2_li7: "Landscape and hardscape works",
    ag_sec3_title: "Irrigation Systems",
    ag_sec3_desc: "We design and implement automated irrigation systems using modern technologies to ensure efficient water distribution and resource conservation for all types of green environments.",
    ag_sec4_title: "Tree Services",
    ag_sec4_desc: "Professional tree cutting, trimming, and maintenance to ensure healthy growth, aesthetic appearance, and safety across various projects and properties.",
    ag_proj_title: "Key Agriculture Projects",
    ag_proj_1_t: "1. Third Industrial City – Dammam",
    ag_proj_1_d: "Implementation of a complete irrigation network using modern systems to maintain green areas efficiently.",
    ag_proj_2_t: "2. Green Areas Maintenance Projects",
    ag_proj_2_d: "Construction and maintenance of green spaces with continuous care to ensure vibrant landscapes.",
    ag_proj_3_t: "3. Green Riyadh Project – Package 3",
    ag_proj_3_d: "Participation in planting and landscaping along major roads including Northern Ring Road and King Fahd Road.",
    ag_proj_4_t: "4. Green Riyadh Project – Package 4 (with Safari Company)",
    ag_proj_4_d: "Execution of landscaping and plantation works in one of the largest environmental projects in Riyadh.",
    ag_proj_5_t: "5. Housing Projects – Riyadh, Al-Kharj, Dammam",
    ag_proj_5_d: "Maintenance, irrigation, and care of green areas in multiple housing projects across the kingdom.",
    ag_cta_title: "Transform Your Environment Today",
    ag_cta_desc: "Reach out to our professional team for top-tier agriculture and landscaping services.",
    ag_cta_btn: "Contact Us Now",
    
    // Services Category List Items
    srv_agri_category: "Agriculture",
    srv_agri_cat_desc: "Professional services in maintenance, cleaning, operations, and facility management with high quality.",
    srv_agri_cat_li1: "Complete Landscaping",
    srv_agri_cat_li2: "Irrigation Systems",
    srv_agri_cat_li3: "Tree Care & Services",

    // Facility Management Page
    fm_hero_title: "Facility Management & Maintenance",
    fm_hero_desc: "Professional management and maintenance of buildings and facilities with guaranteed quality.",
    fm_sec_title: "Services",
    fm_sec_li1: "Preventive Maintenance",
    fm_sec_li2: "Corrective Maintenance",
    fm_sec_li3: "Total Facility Solutions",
    fm_sec_li4: "Operation & Maintenance Contracts",
    fm_sec_li5: "Janitorial Services",
    fm_sec_li6: "Electro-mechanical Maintenance",
    fm_proj_title: "Key Projects",
    fm_proj_1_t: "1. King Faisal Specialist Hospital",
    fm_proj_1_d: "One of the most important specialized hospitals in the region, providing advanced medical services in fields such as oncology and organ transplantation.",
    fm_proj_2_t: "2. King Khalid Airport Customs",
    fm_proj_2_d: "Responsible for regulating the movement of goods and passengers and ensuring compliance with customs regulations.",
    fm_proj_3_t: "3. Social Affairs Branch",
    fm_proj_3_d: "Provides various social services to support individuals and families and improve quality of life within the community.",
    fm_proj_4_t: "4. Comprehensive Rehabilitation Projects for People with Disabilities",
    fm_proj_4_d: "These projects aim to provide care and rehabilitation services to help individuals with disabilities integrate into society.",
    fm_proj_5_t: "5. Mosque Maintenance and Cleaning Projects",
    fm_proj_5_d: "Includes regular maintenance and cleaning to ensure a clean and well-prepared environment for worshippers.",
    fm_cta_title: "Transform Your Facilities Today",
    fm_cta_desc: "Reach out to our professional team for top-tier facility management and maintenance services.",
    fm_cta_btn: "Contact Us Now",

    // General Construction Page
    gc_hero_title: "General Construction",
    gc_hero_desc: "We provide comprehensive construction services for malls, towers, and residential complexes globally recognized for their modern engineering and unyielding quality.",
    gc_sec1_title: "General Construction Overview",
    gc_sec1_p1: "We provide construction services for malls, towers, and residential and commercial complexes according to the highest standards of quality and modern engineering. We rely on the latest design and execution methods to deliver fully integrated projects that combine durability with architectural excellence.",
    gc_sec1_p2: "We are committed to using the best materials and modern technologies to achieve the highest levels of safety and quality, while delivering sustainable construction solutions that meet market needs and provide strong investment value.",
    gc_sec2_title: "Services",
    gc_sec2_li1: "Turnkey Construction",
    gc_sec2_li2: "Commercial Complexes",
    gc_sec2_li3: "Residential Buildings",
    gc_proj_title: "Key Projects",
    gc_proj_tulip_t: "1. Tulip Tower",
    gc_proj_tulip_d: "Located in a prime area in Riyadh, with access via major roads such as King Fahd Road, Al Orouba Road, Olaya Street, and Al Takhassusi Road.",
    gc_proj_tulip_s1: "Land Area: 4,200 m² | Built-up Area: 45,000 m² | Leasable Area: 30,000+ m²",
    gc_proj_tulip_l1: "4 basement floors for parking",
    gc_proj_tulip_l2: "Ground floor for retail showrooms",
    gc_proj_tulip_l3: "Upper floors for offices and services",
    gc_proj_fiorenza_t: "2. Fiorenza La Piazza",
    gc_proj_fiorenza_d: "A fully integrated commercial project featuring restaurants and cafés. Designed in a European style with terraces and internal walkways for a unique family experience.",
    gc_proj_fiorenza_s1: "Total Area: 12,600 m² | Facade: 126 m | Built-up Area: 5,500 m²",
    gc_proj_fiorenza_l1: "Restaurant zone (10 restaurants, 400–1100 m² each)",
    gc_proj_fiorenza_l2: "Commercial mall (ground + first floor shops + administrative floor)",
    gc_proj_legenda_t: "3. Legenda Complex – Al Khobar",
    gc_proj_legenda_d: "Located on King Saud Road in the Golden Belt area, one of the most vital locations in the city. The project is designed to serve the area with premium restaurants and cafés.",
    gc_proj_legenda_s1: "Land Area: 15,000 m² | Facade: 100 m | Built-up Area: 7,360 m²",
    gc_proj_legenda_l1: "Close proximity to Saudi Aramco (6.14 km) & Dhahran (4.5 km)",
    gc_proj_legenda_l2: "Strategic location near Al Huda and Bahrain Causeway",
    gc_proj_legenda_l3: "49% Building Ratio with beautiful open parking and green spaces",
    gc_proj_nakheel_t: "4. Nakheel Compound",
    gc_proj_nakheel_d: "Project Area: 16,100 m². A fully integrated residential project offering a modern and comfortable living environment.",
    gc_proj_saedan_t: "5. Al Saedan Tower",
    gc_proj_saedan_d: "A multi-use tower built according to the latest engineering standards to serve commercial and administrative activities.",
    gc_proj_nirvana_t: "6. Nirvana 12 Compound",
    gc_proj_nirvana_d: "A modern residential project focused on comfort, contemporary design, and full-service living.",
    gc_proj_ajlan_t: "7. Al Ajlan Riviera",
    gc_proj_ajlan_d: "A premium project combining elegant design with a strategic location, offering a complete residential and investment experience.",
    gc_cta_title: "Ready to Build the Future?",
    gc_cta_desc: "Partner with Sama Al Khaleej to construct your visionary project with uncompromised excellence.",
    gc_cta_btn: "Start Your Project",

    // Stadium Maintenance Page
    sm_hero_title: "Stadium Maintenance",
    sm_hero_desc: "Dedicated to ensuring peak performance and pristine conditions for massive modern sporting environments.",
    sm_sec1_title: "Comprehensive Venue Care",
    sm_sec1_p1: "Our specialized teams utilize advanced telemetry, turf science, and architectural monitoring to maintain global sports complexes at a professional standard.",
    sm_sec1_p2: "From the meticulous care of natural grass surfaces to the complex upkeep of high-mast lighting and spectator seating, we provide an all-encompassing service model.",
    sm_sec2_title: "Key Services",
    sm_sec2_li1: "Turf & Natural Grass Care",
    sm_sec2_li2: "High-Mast Lighting Maintenance",
    sm_sec2_li3: "Spectator Seating & Deep Cleaning",
    sm_sec2_li4: "Drainage & Hydration Systems",
    sm_proj_title: "Key Stadium Projects",
    sm_proj_1_t: "1. National Sports Arena",
    sm_proj_1_d: "Complete ongoing maintenance contract ensuring the 60,000-seat venue is ready for international tournaments.",
    sm_proj_2_t: "2. Regional Training Facilities",
    sm_proj_2_d: "Turf management and complex irrigation supervision for multi-purpose high-performance training camps.",

    // ISO Certifications Page
    iso_hero_title: "ISO Certifications",
    iso_hero_desc: "A testament to our unwavering commitment to global quality, safety, and operational excellence.",
    iso_sec1_title: "Global Standards Achieved",
    iso_sec1_p1: "Sama Al Khaleej proudly operates under stringent international ISO protocols, ensuring every project phase is governed by world-class safety, environmental, and quality management systems.",
    iso_certificates_title: "Our Certificates Gallery",
    nav_iso: "ISO Certifications"
  },
  ar: {
    // Navigation
    nav_home: "الرئيسية",
    nav_about: "نبذة عنا",
    nav_iso: "شهادات الأيزو",
    nav_services: "خدماتنا",
    nav_projects: "مشاريعنا",
    nav_contact: "تواصل معنا",
    nav_quote: "اطلب عرض سعر",
    
    // Home Page
    hero_title: "نزرع آفاقاً خضراء",
    hero_desc: "سما الخليج هي شريكك الأساسي لحلول تنسيق الحدائق والزراعة البيئية المستدامة وعالمية المستوى.",
    btn_discover: "اكتشف أعمالنا",
    btn_contact_us: "تواصل معنا الآن",
    
    services_title: "خدماتنا الأساسية",
    srv_const_title: "الإنشاءات العامة",
    srv_const_desc: "إنشاء المولات والأبراج والمجمعات التجارية والسكنية وفق أعلى معايير الجودة.",
    srv_maint_title: "إدارة المرافق والصيانة",
    srv_maint_desc: "خدمات إدارة المباني والمرافق التابعة لها باحترافية عالية وجودة مضمونة.",
    srv_clean_title: "خدمات النظافة",
    srv_clean_desc: "تقديم خدمات تنظيف شاملة وتلميع وتعقيم للمباني السكنية والتجارية.",
    srv_agri_title: "الزراعة وتنسيق الحدائق",
    srv_agri_desc: "إنشاء وصيانة الحدائق وتوريد الأشجار وتركيب شبكات الري.",
    srv_stadium_title: "صيانة الملاعب",
    srv_stadium_desc: "إدارة عشب عالمية المستوى، صيانة الإضاءة والبنية التحتية للأماكن الرياضية الفاخرة.",
    srv_iso_desc: "العمل بمثالية تامة وفقاً لبروتوكولات إدارة الجودة والبيئة والسلامة ذات المستوى العالمي.",
    
    why_title: "لماذا تختار سما الخليج؟",
    why_1: "سنوات من الخبرة المثبتة",
    why_2: "معايير جودة لا تقبل المساومة",
    why_3: "تسليم سريع وموثوق",
    why_4: "فريق احترافي موثوق للغاية",
    why_read_more: "اقرأ المزيد عنا",
    
    // Homepage ISO
    idx_iso_title: "شهادات الأيزو",
    idx_iso_desc: "نحن ملتزمون بمعايير الجودة الدولية ومعتمدون لتقديم التميز في جميع خدماتنا.",
    idx_iso_btn: "عرض الشهادات الكاملة",
    
    proj_title: "مشاريع مميزة",
    proj_view_all: "عرض جميع المشاريع",

    // Qualified Companies
    qual_title: "الشركات المؤهلة",
    qual_desc: "مؤهلون ومعتمدون من قبل كبرى الجهات الحكومية والخاصة في المملكة العربية السعودية.",
    qual_1: "مؤهلين لدي الشركة السعودية للإسكان",
    qual_2: "مؤهلين لدي شركة أرامكو السعودية",
    qual_3: "مؤهلين لدي هيئة المدن الصناعية ومناطق التقنية",
    qual_4: "مؤهلين لدي شركة مسك",
    qual_5: "وغيرها من الجهات الحكومية المعتمدة",
    
    // About Page
    about_title: "عن سما الخليج",
    about_story_title: "قصتنا",
    about_story_desc: "تأسست سما الخليج برؤية لإعادة تعريف مشهد البناء في المملكة العربية السعودية، وقد نمت لتصبح شركة رائدة في المقاولات والخدمات. تفانينا في الجودة ورضا العملاء يميزنا.",
    about_mission: "مهمتنا",
    about_mission_desc: "تقديم حلول بناء وصيانة استثنائية مع تعزيز العلاقات طويلة الأمد المبنية على الثقة والنزاهة والأداء.",
    about_vision: "رؤيتنا",
    about_vision_desc: "أن نكون الشريك المفضل لمشاريع التطوير المبتكرة والمستدامة في جميع أنحاء منطقة الخليج.",
    team_title: "فريقنا الاحترافي",
    stat_years: "سنوات الخبرة",
    stat_projects: "مشروع منجز",
    stat_clients: "عميل سعيد",
    stat_awards: "جوائز الصناعة",
    
    // Services Page
    serv_page_title: "خدماتنا الشاملة",
    
    // Projects
    port_page_title: "معرض أعمالنا",
    proj_1: "برج سكني فاخر",
    proj_2: "مول تجاري حديث",
    proj_3: "تصميم داخلي لمكاتب شركة",
    proj_4: "تصميم حدائق ومناظر طبيعية",
    proj_5: "صيانة مستشفيات",
    proj_6: "تشطيبات خارجية للفلل",
    
    // Contact Page
    contact_page_title: "ابقى على تواصل",
    contact_info: "معلومات التواصل",
    contact_form_title: "أرسل لنا رسالة",
    form_name: "الاسم الكامل",
    form_email: "البريد الإلكتروني",
    form_phone: "رقم الهاتف",
    form_subject: "الموضوع",
    form_message: "رسالتك",
    btn_submit: "إرسال الرسالة",
    
    // Footer
    footer_desc: "تمكين الرؤى من خلال خدمات بناء وصيانة عالمية المستوى.",
    footer_quick: "روابط سريعة",
    footer_contact: "معلومات الاتصال",
    footer_rights: "© 2026 سما الخليج. جميع الحقوق محفوظة.",
    
    office_address: "الرياض، المملكة العربية السعودية",
    
    // Missing Projects / Contact fields
    loc_riyadh: "الرياض، المملكة العربية السعودية",
    loc_jeddah: "جدة، المملكة العربية السعودية",
    loc_dammam: "الدمام، المملكة العربية السعودية",
    loc_khobar: "الخُبر، المملكة العربية السعودية",
    proj_ready: "هل أنت مستعد لبدء مشروعك القادم؟",
    proj_quote: "احصل على عرض سعر الآن",
    contact_ho: "المكتب الرئيسي",
    contact_phone: "رقم الهاتف",
    contact_email: "البريد الإلكتروني",
    
    // View Details Links
    view_cat: "عرض الفئة",
    view_cat_det: "عرض تفاصيل الفئة",
    
    // Agriculture Page
    ag_hero_title: "الزراعة",
    ag_hero_desc: "تقدم سما الخليج للزراعة خدمات احترافية في مجالات الصيانة والنظافة والتشغيل وإدارة المرافق بجودة وموثوقية عالية.",
    ag_sec1_title: "مشتل تجاري",
    ag_sec1_p1: "تقدم سما الخليج حلولاً متكاملة لتنسيق الحدائق، بدءًا من أفكار التصميم والتخطيط الإبداعي وحتى التنفيذ الكامل للمشروع باستخدام تقنيات ومواد حديثة.",
    ag_sec1_p2: "يتبع فريقنا نهجاً مبتكراً ولديه شغف قوي بخلق بيئات خضراء نابضة بالحياة تضيف قيمة جمالية ووظيفية.",
    ag_sec1_p3: "لدينا فريق من المهندسين المعماريين والمصممين المحترفين الملتزمين بتقديم نتائج عالية الجودة وإحداث تأثير إيجابي في كل مشروع.",
    ag_sec1_p4: "كما نقوم بإنشاء وصيانة شبكات الري. تمتلك الشركة مشتلاً بمساحة 90,000 متر مربع يضم مجموعة واسعة من الأشجار والنباتات والغطاء النباتي، يتم صيانتها جميعاً باستخدام تقنيات زراعية متطورة.",
    ag_sec2_title: "الخدمات",
    ag_sec2_li1: "تنسيق الحدائق",
    ag_sec2_li2: "أنظمة الري (إنشاء وصيانة)",
    ag_sec2_li3: "تقليم وتشذيب الأشجار",
    ag_sec2_li4: "توريد وتركيب العشب الطبيعي",
    ag_sec2_li5: "مكافحة الآفات",
    ag_sec2_li6: "خدمات التنظيف",
    ag_sec2_li7: "أعمال المناظر الطبيعية والصلبة",
    ag_sec3_title: "أنظمة الري",
    ag_sec3_desc: "نقوم بتصميم وتنفيذ أنظمة ري آلية باستخدام تقنيات حديثة لضمان توزيع المياه بكفاءة والمحافظة على الموارد لجميع أنواع البيئات الخضراء.",
    ag_sec4_title: "خدمات الأشجار",
    ag_sec4_desc: "قطع وتقليم وصيانة الأشجار بشكل احترافي لضمان نمو صحي ومظهر جمالي وأمان عبر مختلف المشاريع والممتلكات.",
    ag_proj_title: "مشاريع زراعية رئيسية",
    ag_proj_1_t: "1. المدينة الصناعية الثالثة – الدمام",
    ag_proj_1_d: "تنفيذ شبكة ري كاملة باستخدام أنظمة حديثة للحفاظ على المناطق الخضراء بكفاءة.",
    ag_proj_2_t: "2. مشاريع صيانة المناطق الخضراء",
    ag_proj_2_d: "إنشاء وصيانة المساحات الخضراء مع الرعاية المستمرة لضمان مناظر طبيعية نابضة بالحياة.",
    ag_proj_3_t: "3. مشروع الرياض الخضراء – الحزمة 3",
    ag_proj_3_d: "المشاركة في الزراعة وتنسيق الحدائق على طول الطرق الرئيسية بما في ذلك الطريق الدائري الشمالي وطريق الملك فهد.",
    ag_proj_4_t: "4. مشروع الرياض الخضراء – الحزمة 4 (مع شركة سفاري)",
    ag_proj_4_d: "تنفيذ أعمال تنسيق الحدائق والزراعة في أحد أكبر المشاريع البيئية في الرياض.",
    ag_proj_5_t: "5. مشاريع الإسكان – الرياض، الخرج، الدمام",
    ag_proj_5_d: "صيانة وري ورعاية المناطق الخضراء في مشاريع إسكان متعددة في أنحاء المملكة.",
    ag_cta_title: "غير بيئتك اليوم",
    ag_cta_desc: "تواصل مع فريقنا الاحترافي للحصول على خدمات زراعية وتنسيق حدائق عالية الجودة.",
    ag_cta_btn: "تواصل معنا الآن",
    
    // Services Category List Items
    srv_agri_category: "الزراعة",
    srv_agri_cat_desc: "خدمات احترافية في مجالات الصيانة والنظافة والتشغيل وإدارة المرافق بجودة وموثوقية عالية.",
    srv_agri_cat_li1: "تنسيق شامل للحدائق",
    srv_agri_cat_li2: "أنظمة الري",
    srv_agri_cat_li3: "العناية بالأشجار وخدماتها",

    // Facility Management Page
    fm_hero_title: "إدارة المرافق والصيانة",
    fm_hero_desc: "إدارة وصيانة احترافية للمباني والمرافق بجودة مضمونة.",
    fm_sec_title: "الخدمات",
    fm_sec_li1: "الصيانة الوقائية",
    fm_sec_li2: "الصيانة التصحيحية",
    fm_sec_li3: "حلول المرافق الشاملة",
    fm_sec_li4: "عقود التشغيل والصيانة",
    fm_sec_li5: "خدمات النظافة",
    fm_sec_li6: "الصيانة الكهروميكانيكية",
    fm_proj_title: "المشاريع الرئيسية",
    fm_proj_1_t: "1. مستشفى الملك فيصل التخصصي",
    fm_proj_1_d: "من أهم المستشفيات التخصصية في المنطقة، يقدم خدمات طبية متقدمة في مجالات مثل الأورام وزراعة الأعضاء.",
    fm_proj_2_t: "2. جمارك مطار الملك خالد",
    fm_proj_2_d: "مسؤولة عن تنظيم حركة البضائع والركاب وضمان الامتثال للوائح الجمركية.",
    fm_proj_3_t: "3. فرع الشؤون الاجتماعية",
    fm_proj_3_d: "يقدم مختلف الخدمات الاجتماعية لدعم الأفراد والأسر وتحسين جودة الحياة داخل المجتمع.",
    fm_proj_4_t: "4. مشاريع التأهيل الشامل لذوي الاحتياجات الخاصة",
    fm_proj_4_d: "تهدف هذه المشاريع لتقديم خدمات الرعاية والتأهيل لمساعدة ذوي الاحتياجات الخاصة على الاندماج في المجتمع.",
    fm_proj_5_t: "5. مشاريع صيانة ونظافة الجوامع",
    fm_proj_5_d: "تشمل الصيانة الدورية والنظافة لضمان بيئة نظيفة ومهيأة بشكل جيد للمصلين.",
    fm_cta_title: "طور منشآتك اليوم",
    fm_cta_desc: "تواصل مع فريقنا الاحترافي للحصول على خدمات إدارة وصيانة مرافق عالية الجودة.",
    fm_cta_btn: "تواصل معنا الآن",

    // General Construction Page
    gc_hero_title: "الإنشاءات العامة",
    gc_hero_desc: "نقدم خدمات إنشائية شاملة للمولات والأبراج والمجمعات السكنية، معترف بها دوليًا بفضل الهندسة الحديثة والجودة التي لا تقبل المساومة.",
    gc_sec1_title: "نظرة عامة على الإنشاءات العامة",
    gc_sec1_p1: "نقدم خدمات البناء الخاصة بالمولات والأبراج والمجمعات السكنية والتجارية وفق أعلى معايير الجودة والهندسة الحديثة. نعتمد على أحدث أساليب التصميم والتنفيذ لتقديم مشاريع متكاملة تجمع بين المتانة والتميز المعماري.",
    gc_sec1_p2: "نلتزم باستخدام أفضل المواد والتقنيات الحديثة لتحقيق أعلى مستويات الأمان والجودة، مع تقديم حلول بناء مستدامة تلبي احتياجات السوق وتوفر قيمة استثمارية قوية.",
    gc_sec2_title: "الخدمات",
    gc_sec2_li1: "مشاريع تسليم مفتاح",
    gc_sec2_li2: "المجمعات التجارية",
    gc_sec2_li3: "المباني السكنية",
    gc_proj_title: "المشاريع الرئيسية",
    gc_proj_tulip_t: "1. برج توليب",
    gc_proj_tulip_d: "يقع في منطقة حيوية ومتميزة في مدينة الرياض، مع إمكانية الوصول إليه عبر طرق رئيسية مثل طريق الملك فهد، طريق العروبة، شارع العليا وطريق التخصصي.",
    gc_proj_tulip_s1: "مساحة الأرض: 4,200 م² | مسطحات البناء: 45,000 م² | المساحة التأجيرية: 30,000+ م²",
    gc_proj_tulip_l1: "4 طوابق قبو لمواقف السيارات",
    gc_proj_tulip_l2: "الطابق الأرضي لمعارض التجزئة",
    gc_proj_tulip_l3: "أدوار علوية للمكاتب والخدمات",
    gc_proj_fiorenza_t: "2. فيورنزا لا بيازا",
    gc_proj_fiorenza_d: "مشروع تجاري متكامل يضم مطاعم ومقاهي. مصمم على طراز أوروبي بطابع التراسات والممرات الداخلية ليوفر تجربة عائلية فريدة.",
    gc_proj_fiorenza_s1: "المساحة الإجمالية: 12,600 م² | الواجهة: 126 م | مسطحات البناء: 5,500 م²",
    gc_proj_fiorenza_l1: "منطقة المطاعم (10 مطاعم بمساحات 400–1100 م² لكل منها)",
    gc_proj_fiorenza_l2: "مول تجاري (محلات الطابق الأرضي + الأول + طابق إداري)",
    gc_proj_legenda_t: "3. مجمع ليجيندا – الخبر",
    gc_proj_legenda_d: "يقع على طريق الملك سعود في حي الحزام الذهبي، أحد المواقع الحيوية في المدينة. تم تصميم المشروع ليخدم المنطقة بمطاعم ومقاهي راقية.",
    gc_proj_legenda_s1: "مساحة الأرض: 15,000 م² | طول الواجهة: 100 م | مسطحات البناء: 7,360 م²",
    gc_proj_legenda_l1: "القرب من أرامكو السعودية (6.14 كم) والظهران (4.5 كم)",
    gc_proj_legenda_l2: "موقع استراتيجي بالقرب من حي الهدى وجسر البحرين",
    gc_proj_legenda_l3: "نسبة البناء 49% مع توفير مواقف ومساحات خضراء مفتوحة",
    gc_proj_nakheel_t: "4. مجمع النخيل",
    gc_proj_nakheel_d: "مساحة المشروع: 16,100 م². مشروع سكني متكامل يوفر بيئة معيشية مريحة وحديثة.",
    gc_proj_saedan_t: "5. برج آل سعيدان",
    gc_proj_saedan_d: "برج متعدد الاستخدامات مبني وفق أحدث المعايير الهندسية لخدمة الأنشطة التجارية والإدارية.",
    gc_proj_nirvana_t: "6. مجمع نيرفانا 12",
    gc_proj_nirvana_d: "مشروع سكني حديث يركز على الراحة، والتصميم العصري، والخدمات المتكاملة.",
    gc_proj_ajlan_t: "7. ريفيرا العجلان",
    gc_proj_ajlan_d: "مشروع متميز يجمع بين التصميم الأنيق والموقع الاستراتيجي، ليقدم تجربة سكنية واستثمارية كاملة.",
    gc_cta_title: "مستعد لبناء المستقبل؟",
    gc_cta_desc: "كن شريكاً لسما الخليج لبناء مشروعك الطموح بتميز لا يقبل المساومة.",
    gc_cta_btn: "ابدأ مشروعك",

    // Stadium Maintenance Page
    sm_hero_title: "صيانة الملاعب",
    sm_hero_desc: "مكرسون لضمان أعلى أداء وأفضل الظروف للبيئات الرياضية الحديثة والضخمة.",
    sm_sec1_title: "الرعاية الشاملة للمرافق",
    sm_sec1_p1: "تستخدم فرقنا المتخصصة أنظمة القياس عن بُعد المتقدمة وعلوم العشب والمراقبة المعمارية لصيانة المجمعات الرياضية العالمية بمعايير احترافية.",
    sm_sec1_p2: "نبني نموذج خدمة شامل يشمل الرعاية الدقيقة لأسطح العشب الطبيعي، وصيانة الإضاءة العالية، والمقاعد المخصصة للجمهور.",
    sm_sec2_title: "الخدمات الرئيسية",
    sm_sec2_li1: "رعاية العشب الطبيعي",
    sm_sec2_li2: "صيانة إضاءة الصواري العالية",
    sm_sec2_li3: "تنظيف مقاعد الجمهور",
    sm_sec2_li4: "أنظمة الصرف والري",
    sm_proj_title: "مشاريع الملاعب الرئيسية",
    sm_proj_1_t: "1. الساحة الرياضية الوطنية",
    sm_proj_1_d: "عقد صيانة مستمر لضمان جاهزية المكان الذي يتسع لـ 60,000 مقعد للبطولات الدولية.",
    sm_proj_2_t: "2. مرافق التدريب الإقليمية",
    sm_proj_2_d: "إدارة العشب والإشراف على الري المعقد لمعسكرات التدريب متعددة الأغراض والمميزة.",

    // ISO Certifications Page
    iso_hero_title: "شهادات الأيزو",
    iso_hero_desc: "دليل على التزامنا الراسخ بالجودة العالمية والسلامة والتميز التشغيلي.",
    iso_sec1_title: "المعايير العالمية المحققة",
    iso_sec1_p1: "تفخر سما الخليج بالعمل وفق بروتوكولات الأيزو الدولية الصارمة، مما يضمن خضوع كل مرحلة من مراحل المشاريع لأنظمة إدارة الجودة والبيئة والسلامة ذات المستوى العالمي.",
    iso_certificates_title: "معرض الشهادات"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // Loader
  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => {
      loader.classList.add("hidden");
    }, 800);
  }

  // Old Mobile Menu Fallback
  const oldMenuBtn = document.querySelector(".mobile-menu-btn");
  const oldNavLinks = document.querySelector(".nav-links");
  if (oldMenuBtn && oldNavLinks) {
    oldMenuBtn.addEventListener("click", (e) => {
      e.preventDefault();
      oldNavLinks.classList.toggle("show");
    });
  }

  // KSP Full-Screen Overlay Menu Toggle
  const kspMenuBtns = document.querySelectorAll(".ksp-hamburger");
  const navOverlay = document.querySelector(".ksp-overlay-menu");
  const closeBtn = document.querySelector(".ksp-menu-close");
  
  if (kspMenuBtns.length > 0 && navOverlay) {
    kspMenuBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        navOverlay.classList.add("show");
      });
    });
  }
  
  if (closeBtn && navOverlay) {
    closeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      navOverlay.classList.remove("show");
    });
  }
  
  if (navOverlay) {
    const navLinksList = navOverlay.querySelectorAll("a");
    navLinksList.forEach(link => {
      link.addEventListener("click", () => {
        navOverlay.classList.remove("show");
      });
    });
  }

  // Language Toggle
  const langToggleBtn = document.getElementById("lang-toggle");
  let currentLang = localStorage.getItem("lang") || "en";
  setLanguage(currentLang);

  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => {
      currentLang = currentLang === "en" ? "ar" : "en";
      localStorage.setItem("lang", currentLang);
      setLanguage(currentLang);
    });
  }

  // Scroll Animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach(el => observer.observe(el));
});

function setLanguage(lang) {
  const htmlTag = document.documentElement;
  const langToggleBtn = document.getElementById("lang-toggle");
  
  if (lang === "ar") {
    htmlTag.setAttribute("dir", "rtl");
    htmlTag.setAttribute("lang", "ar");
    if (langToggleBtn) langToggleBtn.textContent = "English";
  } else {
    htmlTag.setAttribute("dir", "ltr");
    htmlTag.setAttribute("lang", "en");
    if (langToggleBtn) langToggleBtn.textContent = "عربي";
  }

  // Update text for all elements with data-i18n attribute
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      // Check if it's a placeholder attribute
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
         el.placeholder = translations[lang][key];
      } else {
         el.textContent = translations[lang][key];
      }
    }
  });
}
