'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Award, 
  Users, 
  Target, 
  Globe,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const About = () => {
  const { t, isRTL } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering exceptional results for our clients.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of collaboration and building strong partnerships with our clients.'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Our global perspective enables us to provide innovative solutions for international markets.'
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'We operate with the highest standards of integrity, transparency, and ethical business practices.'
    }
  ]

  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Countries Served' },
    { number: '95%', label: 'Client Satisfaction' }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              عن <span className="gradient-text">ميريلاند العالمية لتجهيزات الفنادق</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              تأسست ميريلاند العالمية عام 1999 في الكويت، ونمت لتصبح من الشركات الرائدة في مجال تصنيع وتوريد معدات المطابخ والمطاعم والمقاهي والمطابخ المركزية من الستانلس ستيل بجودة عالية.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              نقدم حلولاً متكاملة تشمل التصميم، التصنيع، التركيب، وخدمة ما بعد البيع، مع التزامنا بأعلى معايير الجودة والابتكار وخدمة العملاء. نفخر بتنفيذ مئات المشاريع الناجحة في الكويت والخليج.
            </p>
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-2">
                <span className="font-bold">الهاتف:</span>
                <span>+965 99348402</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="font-bold">الموقع:</span>
                <span>الشويخ الصناعية، الكويت</span>
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Expert Team</h4>
                  <p className="text-gray-600">Industry veterans with deep expertise in global markets</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Proven Results</h4>
                  <p className="text-gray-600">Track record of successful international expansions</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Global Network</h4>
                  <p className="text-gray-600">Extensive network of partners across 50+ countries</p>
                </div>
              </div>
            </div>

            <button className="btn-primary group">
              Learn More About Us
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Right Content - Stats & Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-6 text-white text-center"
                >
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Values */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h3>
              <div className="grid gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h3>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Our experienced leadership team brings decades of combined expertise in international 
            business, strategic consulting, and market expansion.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'CEO & Founder',
                image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
                bio: '20+ years in international business consulting'
              },
              {
                name: 'Michael Chen',
                role: 'Chief Strategy Officer',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
                bio: 'Expert in global market expansion strategies'
              },
              {
                name: 'Emily Rodriguez',
                role: 'Head of Operations',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
                bio: 'Specialist in operational excellence and efficiency'
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg card-hover"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-primary-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 