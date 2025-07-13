'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle
} from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Contact = () => {
  const { t, isRTL } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: { ar: 'الهاتف', en: 'Phone' },
      details: { ar: ['+965 99348402'], en: ['+965 99348402'] },
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Mail,
      title: { ar: 'البريد الإلكتروني', en: 'Email' },
      details: { ar: ['info@maryland-intl.com'], en: ['info@maryland-intl.com'] },
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: { ar: 'العنوان', en: 'Address' },
      details: { ar: ['الشويخ الصناعية', 'الكويت'], en: ['Shuwaikh Industrial', 'Kuwait'] },
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: { ar: 'ساعات العمل', en: 'Business Hours' },
      details: { ar: ['الأحد - الخميس: 8:00 ص - 6:00 م', 'الجمعة: 9:00 ص - 1:00 م', 'السبت: مغلق'], en: ['Sun - Thu: 8:00 AM - 6:00 PM', 'Fri: 9:00 AM - 1:00 PM', 'Sat: Closed'] },
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gray-50">
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
            {t('contact.title')}
          </h2>
          <p className="section-subtitle">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('contact.sendMessage')}</h3>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-2">{t('contact.thankYou')}</h4>
                <p className="text-gray-600 mb-6">
                  {t('contact.thankYouMessage')}
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-primary"
                >
                  {t('contact.sendAnotherMessage')}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('contact.fullName')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder={t('contact.enterFullName')}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('contact.emailAddress')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder={t('contact.enterEmail')}
                      />
                    </div>
                  </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('contact.companyName')}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder={t('contact.enterCompany')}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('contact.phoneNumber')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder={t('contact.enterPhone')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('contact.serviceOfInterest')}
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="form-input"
                  >
                    <option value="">{t('contact.selectService')}</option>
                    <option value="kitchen-equipment">معدات مطابخ</option>
                    <option value="restaurant-equipment">معدات مطاعم</option>
                    <option value="coffee-shop-equipment">معدات مقاهي</option>
                    <option value="stainless-steel">ستانلس ستيل</option>
                    <option value="central-kitchen">مطابخ مركزية</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="form-input resize-none"
                    placeholder={t('contact.tellUsAbout')}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary group"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  {t('contact.sendMessage')}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('contact.contactInformation')}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {t('contact.contactSubtitle')}
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title[isRTL ? 'ar' : 'en']}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{info.title[isRTL ? 'ar' : 'en']}</h4>
                    {info.details[isRTL ? 'ar' : 'en'].map((detail: string, detailIndex: number) => (
                      <p key={detailIndex} className="text-gray-600 text-sm leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 text-white"
            >
              <h4 className="text-xl font-bold mb-4">{t('contact.needImmediateAssistance')}</h4>
              <p className="mb-6 opacity-90">
                {t('contact.urgentInquiries')}
              </p>
              <div className="space-y-3">
                <button className="w-full bg-white text-primary-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors">
                  {t('contact.scheduleConsultation')}
                </button>
                <button className="w-full border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-primary-600 transition-colors">
                  {t('contact.downloadBrochure')}
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 