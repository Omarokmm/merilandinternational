'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  ArrowRight,
  CheckCircle,
  Utensils,
  Refrigerator,
  Coffee,
  Soup,
  Layers,
  CupSoda
} from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Services = () => {
  const { t, isRTL } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      icon: Utensils,
      title: 'تصميم وتجهيز المطابخ المركزية',
      description: 'خدمة متكاملة لتصميم وتنفيذ المطابخ المركزية للمطاعم والفنادق والمستشفيات وفق أعلى المعايير.',
      features: ['تصميم هندسي احترافي', 'تنفيذ كامل', 'تسليم مفتاح', 'خدمة ما بعد البيع'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Refrigerator,
      title: 'توريد معدات المطاعم والمقاهي',
      description: 'توفير جميع معدات المطاعم والمقاهي من أفران، ثلاجات، مجالي، شوايات، وغيرها من أفضل العلامات التجارية.',
      features: ['معدات ستانلس ستيل', 'أفران وثلاجات', 'معدات تحضير القهوة', 'معدات غسيل'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Coffee,
      title: 'تجهيز المقاهي',
      description: 'حلول متكاملة لتجهيز المقاهي من ماكينات القهوة، طاولات، كراسي، وأدوات تقديم.',
      features: ['ماكينات قهوة احترافية', 'تصميم داخلي', 'أثاث مقاهي', 'أدوات تقديم'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Soup,
      title: 'معدات المخابز والحلويات',
      description: 'توريد أفران، عجانات، خلاطات، وطاولات عمل للمخابز ومحلات الحلويات.',
      features: ['أفران مخابز', 'عجانات وخلاطات', 'طاولات عمل', 'معدات عرض'],
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Layers,
      title: 'تصنيع حسب الطلب',
      description: 'تصنيع جميع تجهيزات الستانلس ستيل حسب الطلب والمقاسات الخاصة للمشاريع.',
      features: ['تصميم خاص', 'مقاسات مخصصة', 'جودة عالية', 'ضمان'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: CupSoda,
      title: 'خدمة الصيانة والدعم الفني',
      description: 'فريق صيانة متخصص لخدمة جميع معدات المطابخ والمطاعم والمقاهي على مدار الساعة.',
      features: ['صيانة دورية', 'دعم فني سريع', 'قطع غيار أصلية', 'ضمان شامل'],
      color: 'from-teal-500 to-cyan-500'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">
            {t('services.title')}
          </h2>
          <p className="section-subtitle">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg card-hover border border-gray-100"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className="group flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                {t('services.learnMore')}
                <ArrowRight className={`w-4 h-4 ${isRTL ? 'mr-2' : 'ml-2'} group-hover:translate-x-1 transition-transform`} />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">{t('services.readyToTransform')}</h3>
            <p className="text-xl mb-8 opacity-90">
              {t('services.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors">
                {t('services.getFreeConsultation')}
              </button>
              <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-primary-600 transition-colors">
                {t('services.viewCaseStudies')}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 