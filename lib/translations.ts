export type Language = 'ar' | 'en'

export interface Translations {
  // Navigation
  nav: {
    home: string
    services: string
    products: string
    about: string
    solutions: string
    testimonials: string
    contact: string
    getQuote: string
    startProject: string
  }

  // Hero Section
  hero: {
    title: string
    subtitle: string
    startProject: string
    watchStory: string
    isoCertified: string
    yearsExperience: string
    support247: string
    scrollToExplore: string
  }

  // Services Section
  services: {
    title: string
    subtitle: string
    readyToTransform: string
    getFreeConsultation: string
    viewCaseStudies: string
    learnMore: string
  }

  // Products Section
  products: {
    title: string
    subtitle: string
    viewDetails: string
    addToCart: string
    outOfStock: string
    inStock: string
    price: string
    currency: string
  }

  // About Section
  about: {
    title: string
    subtitle1: string
    subtitle2: string
    expertTeam: string
    expertTeamDesc: string
    provenResults: string
    provenResultsDesc: string
    globalNetwork: string
    globalNetworkDesc: string
    learnMoreAboutUs: string
    ourValues: string
    meetOurTeam: string
    teamSubtitle: string
  }

  // Solutions Section
  solutions: {
    title: string
    subtitle: string
    ourProvenProcess: string
    processSubtitle: string
    readyToTransform: string
    getStartedToday: string
    downloadBrochure: string
  }

  // Testimonials Section
  testimonials: {
    title: string
    subtitle: string
    trustedByLeaders: string
    readyToJoin: string
    joinSubtitle: string
    startYourProject: string
    viewCaseStudies: string
  }

  // Contact Section
  contact: {
    title: string
    subtitle: string
    sendMessage: string
    thankYou: string
    thankYouMessage: string
    sendAnotherMessage: string
    fullName: string
    emailAddress: string
    companyName: string
    phoneNumber: string
    serviceOfInterest: string
    message: string
    enterFullName: string
    enterEmail: string
    enterCompany: string
    enterPhone: string
    selectService: string
    tellUsAbout: string
    contactInformation: string
    contactSubtitle: string
    needImmediateAssistance: string
    urgentInquiries: string
    scheduleConsultation: string
    downloadBrochure: string
  }

  // Footer
  footer: {
    stayUpdated: string
    newsletterSubtitle: string
    enterEmail: string
    subscribe: string
    allRightsReserved: string
    scrollToTop: string
  }

  // Values
  values: {
    excellence: {
      title: string
      description: string
    }
    collaboration: {
      title: string
      description: string
    }
    globalPerspective: {
      title: string
      description: string
    }
    integrity: {
      title: string
      description: string
    }
  }

  // Stats
  stats: {
    yearsExperience: string
    projectsCompleted: string
    countriesServed: string
    clientSatisfaction: string
    happyClients: string
  }

  // Contact Info
  contactInfo: {
    phone: string
    email: string
    office: string
    businessHours: string
    monFri: string
    saturday: string
    sunday: string
  }

  // Footer Links
  footerLinks: {
    services: string[]
    company: string[]
    resources: string[]
    legal: string[]
  }
}

export const translations: Record<Language, Translations> = {
  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'الخدمات',
      products: 'المنتجات',
      about: 'من نحن',
      solutions: 'الحلول',
      testimonials: 'آراء العملاء',
      contact: 'اتصل بنا',
      getQuote: 'طلب عرض سعر',
      startProject: 'ابدأ مشروعك'
    },
    hero: {
      title: 'تجهيز مطبخك التجاري بأفضل المعدات الاحترافية',
      subtitle: 'ميريلاند العالمية لتجهيزات الفنادق والمطاعم والمقاهي والمطابخ المركزية - خبرة في تصنيع وتوريد معدات المطابخ والمطاعم من الستانلس ستيل بجودة عالية وخدمة احترافية في الكويت.',
      startProject: 'ابدأ مشروعك الآن',
      watchStory: 'شاهد قصتنا',
      isoCertified: 'معتمدون دولياً',
      yearsExperience: 'أكثر من 20 سنة خبرة',
      support247: 'دعم فني على مدار الساعة',
      scrollToExplore: 'مرر للأسفل لاستكشاف المزيد'
    },
    services: {
      title: 'خدماتنا الاحترافية',
      subtitle: 'نقدم حلولاً متكاملة لتجهيز المطابخ والمطاعم والمقاهي والمطابخ المركزية، من التصميم إلى التصنيع والتركيب والصيانة، باستخدام أحدث تقنيات الستانلس ستيل.',
      readyToTransform: 'هل ترغب في مطبخ احترافي؟',
      getFreeConsultation: 'استشارة مجانية',
      viewCaseStudies: 'مشاريعنا',
      learnMore: 'اعرف المزيد'
    },
    products: {
      title: 'منتجاتنا المتميزة',
      subtitle: 'مجموعة شاملة من معدات المطابخ والمطاعم والمقاهي المصنوعة من الستانلس ستيل بجودة عالية، تلبي جميع احتياجات مشاريع الضيافة.',
      viewDetails: 'عرض التفاصيل',
      addToCart: 'أضف إلى السلة',
      outOfStock: 'غير متوفر',
      inStock: 'متوفر',
      price: 'السعر',
      currency: 'د.ك'
    },
    about: {
      title: 'عن شركتنا',
      subtitle1: 'تأسست ميريلاند العالمية لتجهيزات الفنادق عام 1999 في الكويت، ونمت لتصبح من الشركات الرائدة في مجال تصنيع وتوريد معدات المطابخ والمطاعم والمقاهي والمطابخ المركزية.',
      subtitle2: 'نتميز بخبرة واسعة في تصميم وتنفيذ المشاريع الكبرى، مع التزامنا بأعلى معايير الجودة والابتكار وخدمة العملاء.',
      expertTeam: 'فريق محترف',
      expertTeamDesc: 'مهندسون وفنيون متخصصون في تجهيزات المطابخ والمطاعم',
      provenResults: 'مشاريع ناجحة',
      provenResultsDesc: 'تنفيذ مئات المشاريع في الكويت والخليج',
      globalNetwork: 'شراكات عالمية',
      globalNetworkDesc: 'تعاون مع أفضل العلامات التجارية العالمية',
      learnMoreAboutUs: 'اعرف المزيد عنا',
      ourValues: 'قيمنا',
      meetOurTeam: 'تعرف على فريقنا',
      teamSubtitle: 'يضم فريقنا نخبة من الخبراء في مجال تجهيزات الضيافة والمطابخ الصناعية.'
    },
    solutions: {
      title: 'حلولنا المتكاملة',
      subtitle: 'نقدم حلولاً شاملة تعالج تحديات عملك وتدفع النمو المستدام في السوق العالمية.',
      ourProvenProcess: 'عمليةنا المثبتة',
      processSubtitle: 'نتبع نهجاً منظماً لضمان النتائج الناجحة لكل مشروع.',
      readyToTransform: 'هل أنت مستعد لتحويل عملك؟',
      getStartedToday: 'ابدأ اليوم',
      downloadBrochure: 'تحميل الكتيب'
    },
    testimonials: {
      title: 'آراء عملاؤنا',
      subtitle: 'لا تأخذ كلمتنا فقط. إليك ما يقوله عملاؤنا عن تجربتهم في العمل مع ميريلاند إنترناشونال.',
      trustedByLeaders: 'موثوق به من قادة الصناعة',
      readyToJoin: 'هل أنت مستعد للانضمام إلى قصص نجاحنا؟',
      joinSubtitle: 'دعنا نناقش كيف يمكننا مساعدتك في تحقيق أهداف عملك العالمية.',
      startYourProject: 'ابدأ مشروعك',
      viewCaseStudies: 'عرض دراسات الحالة'
    },
    contact: {
      title: 'اتصل بنا',
      subtitle: 'هل أنت مستعد لتحويل عملك؟ دعنا نناقش كيف يمكن لميريلاند إنترناشونال مساعدتك في تحقيق أهداف عملك العالمية.',
      sendMessage: 'أرسل لنا رسالة',
      thankYou: 'شكراً لك!',
      thankYouMessage: 'تم إرسال رسالتك بنجاح. سنرد عليك خلال 24 ساعة.',
      sendAnotherMessage: 'أرسل رسالة أخرى',
      fullName: 'الاسم الكامل *',
      emailAddress: 'عنوان البريد الإلكتروني *',
      companyName: 'اسم الشركة',
      phoneNumber: 'رقم الهاتف',
      serviceOfInterest: 'الخدمة المطلوبة',
      message: 'الرسالة *',
      enterFullName: 'أدخل اسمك الكامل',
      enterEmail: 'أدخل بريدك الإلكتروني',
      enterCompany: 'أدخل اسم شركتك',
      enterPhone: 'أدخل رقم هاتفك',
      selectService: 'اختر خدمة',
      tellUsAbout: 'أخبرنا عن مشروعك أو استفسارك...',
      contactInformation: 'معلومات الاتصال',
      contactSubtitle: 'نحن هنا لمساعدتك على النجاح في السوق العالمية. تواصل معنا من خلال أي من القنوات أدناه، وسنرد عليك بسرعة.',
      needImmediateAssistance: 'هل تحتاج مساعدة فورية؟',
      urgentInquiries: 'للاستفسارات العاجلة، اتصل بنا مباشرة أو حدد موعد استشارة.',
      scheduleConsultation: 'حدد موعد استشارة',
      downloadBrochure: 'تحميل الكتيب'
    },
    footer: {
      stayUpdated: 'ابق على اطلاع',
      newsletterSubtitle: 'اشترك في نشرتنا الإخبارية للحصول على أحدث الرؤى حول اتجاهات الأعمال العالمية والفرص.',
      enterEmail: 'أدخل بريدك الإلكتروني',
      subscribe: 'اشتراك',
      allRightsReserved: '© 2024 ميريلاند إنترناشونال. جميع الحقوق محفوظة.',
      scrollToTop: 'العودة للأعلى'
    },
    values: {
      excellence: {
        title: 'التميز',
        description: 'نسعى للتميز في كل ما نقوم به، ونقدم نتائج استثنائية لعملائنا.'
      },
      collaboration: {
        title: 'التعاون',
        description: 'نؤمن بقوة التعاون وبناء شراكات قوية مع عملائنا.'
      },
      globalPerspective: {
        title: 'الرؤية العالمية',
        description: 'تمكننا رؤيتنا العالمية من تقديم حلول مبتكرة للأسواق الدولية.'
      },
      integrity: {
        title: 'النزاهة',
        description: 'نعمل بأعلى معايير النزاهة والشفافية والممارسات التجارية الأخلاقية.'
      }
    },
    stats: {
      yearsExperience: 'سنوات الخبرة',
      projectsCompleted: 'مشروع مكتمل',
      countriesServed: 'دولة خدمناها',
      clientSatisfaction: 'رضا العملاء',
      happyClients: 'عميل سعيد'
    },
    contactInfo: {
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      office: 'المكتب',
      businessHours: 'ساعات العمل',
      monFri: 'الأحد - الخميس: 9:00 ص - 6:00 م',
      saturday: 'السبت: 10:00 ص - 2:00 م',
      sunday: 'الأحد: مغلق'
    },
    footerLinks: {
      services: ['التجارة الدولية', 'الاستراتيجية التجارية', 'توسيع السوق', 'إدارة المخاطر', 'الاستشارات المالية', 'التحول الرقمي'],
      company: ['من نحن', 'فريقنا', 'الوظائف', 'الأخبار والرؤى', 'دراسات الحالة', 'اتصل بنا'],
      resources: ['المدونة', 'الكتب البيضاء', 'الندوات عبر الإنترنت', 'التقارير الصناعية', 'المعجم', 'الأسئلة الشائعة'],
      legal: ['سياسة الخصوصية', 'شروط الخدمة', 'سياسة ملفات تعريف الارتباط', 'امتثال GDPR', 'إمكانية الوصول', 'خريطة الموقع']
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      products: 'Products',
      about: 'About',
      solutions: 'Solutions',
      testimonials: 'Testimonials',
      contact: 'Contact',
      getQuote: 'Get Quote',
      startProject: 'Start Project'
    },
    hero: {
      title: 'Transform Your Business with Global Solutions',
      subtitle: 'Meriland International is your trusted partner for international trade, market expansion, and strategic business solutions. We help businesses thrive in the global marketplace.',
      startProject: 'Start Your Project',
      watchStory: 'Watch Our Story',
      isoCertified: 'ISO Certified',
      yearsExperience: '15+ Years Experience',
      support247: '24/7 Support',
      scrollToExplore: 'Scroll to explore'
    },
    services: {
      title: 'Our Professional Services',
      subtitle: 'Comprehensive business solutions designed to drive your success in the global marketplace. From strategy to execution, we\'re here to help you achieve your goals.',
      readyToTransform: 'Ready to Transform Your Business?',
      getFreeConsultation: 'Get Free Consultation',
      viewCaseStudies: 'View Case Studies',
      learnMore: 'Learn More'
    },
    products: {
      title: 'Our Premium Products',
      subtitle: 'We offer a wide range of high-quality products and services to support your business growth and expansion in global markets.',
      viewDetails: 'View Details',
      addToCart: 'Add to Cart',
      outOfStock: 'Out of Stock',
      inStock: 'In Stock',
      price: 'Price',
      currency: 'USD'
    },
    about: {
      title: 'About Our Company',
      subtitle1: 'Founded in 2008, Meriland International has been at the forefront of global business consulting, helping companies navigate the complexities of international markets and achieve sustainable growth.',
      subtitle2: 'Our team of experienced professionals brings together expertise in international trade, strategic planning, market analysis, and digital transformation to provide comprehensive solutions that drive real business results.',
      expertTeam: 'Expert Team',
      expertTeamDesc: 'Industry veterans with deep expertise in global markets',
      provenResults: 'Proven Results',
      provenResultsDesc: 'Track record of successful international expansions',
      globalNetwork: 'Global Network',
      globalNetworkDesc: 'Extensive network of partners across 50+ countries',
      learnMoreAboutUs: 'Learn More About Us',
      ourValues: 'Our Values',
      meetOurTeam: 'Meet Our Leadership Team',
      teamSubtitle: 'Our experienced leadership team brings decades of combined expertise in international business, strategic consulting, and market expansion.'
    },
    solutions: {
      title: 'Our Integrated Solutions',
      subtitle: 'We provide comprehensive solutions that address your business challenges and drive sustainable growth in the global marketplace.',
      ourProvenProcess: 'Our Proven Process',
      processSubtitle: 'We follow a systematic approach to ensure successful outcomes for every project.',
      readyToTransform: 'Ready to Transform Your Business?',
      getStartedToday: 'Get Started Today',
      downloadBrochure: 'Download Brochure'
    },
    testimonials: {
      title: 'Client Testimonials',
      subtitle: 'Don\'t just take our word for it. Here\'s what our clients have to say about their experience working with Meriland International.',
      trustedByLeaders: 'Trusted by Industry Leaders',
      readyToJoin: 'Ready to Join Our Success Stories?',
      joinSubtitle: 'Let\'s discuss how we can help you achieve your global business goals.',
      startYourProject: 'Start Your Project',
      viewCaseStudies: 'View Case Studies'
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Ready to transform your business? Let\'s discuss how Meriland International can help you achieve your global business goals.',
      sendMessage: 'Send Us a Message',
      thankYou: 'Thank You!',
      thankYouMessage: 'Your message has been sent successfully. We\'ll get back to you within 24 hours.',
      sendAnotherMessage: 'Send Another Message',
      fullName: 'Full Name *',
      emailAddress: 'Email Address *',
      companyName: 'Company Name',
      phoneNumber: 'Phone Number',
      serviceOfInterest: 'Service of Interest',
      message: 'Message *',
      enterFullName: 'Enter your full name',
      enterEmail: 'Enter your email',
      enterCompany: 'Enter your company name',
      enterPhone: 'Enter your phone number',
      selectService: 'Select a service',
      tellUsAbout: 'Tell us about your project or inquiry...',
      contactInformation: 'Contact Information',
      contactSubtitle: 'We\'re here to help you succeed in the global marketplace. Reach out to us through any of the channels below, and we\'ll respond promptly.',
      needImmediateAssistance: 'Need Immediate Assistance?',
      urgentInquiries: 'For urgent inquiries, call us directly or schedule a consultation.',
      scheduleConsultation: 'Schedule Consultation',
      downloadBrochure: 'Download Brochure'
    },
    footer: {
      stayUpdated: 'Stay Updated',
      newsletterSubtitle: 'Subscribe to our newsletter for the latest insights on global business trends and opportunities.',
      enterEmail: 'Enter your email',
      subscribe: 'Subscribe',
      allRightsReserved: '© 2024 Meriland International. All rights reserved.',
      scrollToTop: 'Scroll to top'
    },
    values: {
      excellence: {
        title: 'Excellence',
        description: 'We strive for excellence in everything we do, delivering exceptional results for our clients.'
      },
      collaboration: {
        title: 'Collaboration',
        description: 'We believe in the power of collaboration and building strong partnerships with our clients.'
      },
      globalPerspective: {
        title: 'Global Perspective',
        description: 'Our global perspective enables us to provide innovative solutions for international markets.'
      },
      integrity: {
        title: 'Integrity',
        description: 'We operate with the highest standards of integrity, transparency, and ethical business practices.'
      }
    },
    stats: {
      yearsExperience: 'Years Experience',
      projectsCompleted: 'Projects Completed',
      countriesServed: 'Countries Served',
      clientSatisfaction: 'Client Satisfaction',
      happyClients: 'Happy Clients'
    },
    contactInfo: {
      phone: 'Phone',
      email: 'Email',
      office: 'Office',
      businessHours: 'Business Hours',
      monFri: 'Mon - Fri: 9:00 AM - 6:00 PM',
      saturday: 'Sat: 10:00 AM - 2:00 PM',
      sunday: 'Sun: Closed'
    },
    footerLinks: {
      services: ['International Trade', 'Business Strategy', 'Market Expansion', 'Risk Management', 'Financial Advisory', 'Digital Transformation'],
      company: ['About Us', 'Our Team', 'Careers', 'News & Insights', 'Case Studies', 'Contact Us'],
      resources: ['Blog', 'Whitepapers', 'Webinars', 'Industry Reports', 'Glossary', 'FAQ'],
      legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR Compliance', 'Accessibility', 'Sitemap']
    }
  }
} 