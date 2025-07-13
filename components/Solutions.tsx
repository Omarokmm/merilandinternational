'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Target, 
  TrendingUp, 
  Shield, 
  Users,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Solutions = () => {
  const { t, isRTL } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const solutions = [
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Comprehensive strategic planning to align your business goals with market opportunities.',
      steps: ['Market Analysis', 'Goal Setting', 'Strategy Development', 'Implementation Plan'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      title: 'Growth Acceleration',
      description: 'Accelerate your business growth with proven methodologies and market insights.',
      steps: ['Market Entry Strategy', 'Scaling Framework', 'Performance Optimization', 'Sustainable Growth'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Identify and mitigate risks to protect your business and ensure long-term success.',
      steps: ['Risk Assessment', 'Compliance Framework', 'Crisis Management', 'Insurance Strategy'],
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Team Development',
      description: 'Build high-performing teams and develop leadership capabilities for global success.',
      steps: ['Leadership Training', 'Team Building', 'Cultural Integration', 'Performance Management'],
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Analysis',
      description: 'We begin by understanding your business, goals, and challenges through comprehensive analysis.'
    },
    {
      number: '02',
      title: 'Strategy Development',
      description: 'Based on our analysis, we develop customized strategies tailored to your specific needs.'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'We work closely with your team to implement the strategies and ensure successful execution.'
    },
    {
      number: '04',
      title: 'Optimization',
      description: 'Continuous monitoring and optimization to ensure maximum results and long-term success.'
    }
  ]

  return (
    <section id="solutions" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive solutions that address your business challenges 
            and drive sustainable growth in the global marketplace.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg card-hover text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <solution.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
              <ul className="space-y-2 text-left">
                {solution.steps.map((step) => (
                  <li key={step} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{step}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-2xl p-12 shadow-xl"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Proven Process</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure successful outcomes for every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center relative"
              >
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transform -translate-y-1/2 z-0"></div>
                )}

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                    {step.number}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how our solutions can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors group">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-primary-600 transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Solutions 