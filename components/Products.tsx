'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  ShoppingCart,
  Eye,
  Star,
  ArrowRight,
  Package,
  Refrigerator,
  Coffee,
  Droplet,
  ChefHat,
  Flame
} from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Products = () => {
  const { t, isRTL } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  // Sample real product categories for kitchens, restaurants, coffee shops
  const products = [
    {
      id: 1,
      name: { ar: 'طاولة عمل ستانلس ستيل', en: 'Stainless Steel Work Table' },
      description: { ar: 'طاولة عمل احترافية مصنوعة من الستانلس ستيل المقاوم للصدأ، مناسبة لجميع المطابخ التجارية.', en: 'Professional work table made of stainless steel, suitable for all commercial kitchens.' },
      price: 120,
      currency: { ar: 'د.ك', en: 'KWD' },
      image: '/products/worktable.svg',
      category: { ar: 'معدات مطابخ', en: 'Kitchen Equipment' },
      rating: 4.9,
      reviews: 32,
      inStock: true,
      features: [
        { ar: 'ستانلس ستيل 304', en: '304 Stainless Steel' },
        { ar: 'مقاسات متعددة', en: 'Multiple Sizes' },
        { ar: 'سهل التنظيف', en: 'Easy to Clean' }
      ],
      icon: Package
    },
    {
      id: 2,
      name: { ar: 'فرن كهربائي صناعي', en: 'Industrial Electric Oven' },
      description: { ar: 'فرن كهربائي عالي الأداء للمخابز والمطاعم، مزود بتحكم رقمي.', en: 'High-performance electric oven for bakeries and restaurants, with digital control.' },
      price: 350,
      currency: { ar: 'د.ك', en: 'KWD' },
      image: '/products/oven.svg',
      category: { ar: 'معدات أفران', en: 'Oven Equipment' },
      rating: 4.8,
      reviews: 21,
      inStock: true,
      features: [
        { ar: 'سعة كبيرة', en: 'Large Capacity' },
        { ar: 'تحكم رقمي', en: 'Digital Control' },
        { ar: 'توزيع حراري متساوي', en: 'Even Heat Distribution' }
      ],
      icon: ChefHat
    },
    {
      id: 3,
      name: { ar: 'ثلاجة عرض أفقية', en: 'Horizontal Display Refrigerator' },
      description: { ar: 'ثلاجة عرض أفقية لحفظ وعرض المنتجات الغذائية والمشروبات في المطاعم والمقاهي.', en: 'Horizontal display refrigerator for preserving and displaying food and beverages in restaurants and cafes.' },
      price: 280,
      currency: { ar: 'د.ك', en: 'KWD' },
      image: '/products/displayfridge.svg',
      category: { ar: 'ثلاجات', en: 'Refrigerators' },
      rating: 4.7,
      reviews: 18,
      inStock: true,
      features: [
        { ar: 'إضاءة LED', en: 'LED Lighting' },
        { ar: 'تحكم بدرجة الحرارة', en: 'Temperature Control' },
        { ar: 'تصميم أنيق', en: 'Elegant Design' }
      ],
      icon: Refrigerator
    },
    {
      id: 4,
      name: { ar: 'مجلى ستانلس ستيل مزدوج', en: 'Double Stainless Steel Sink' },
      description: { ar: 'مجلى مزدوج من الستانلس ستيل عالي الجودة، مثالي للمطابخ المركزية والمطاعم.', en: 'Double sink made of high-quality stainless steel, ideal for central kitchens and restaurants.' },
      price: 95,
      currency: { ar: 'د.ك', en: 'KWD' },
      image: '/products/sink.svg',
      category: { ar: 'معدات غسيل', en: 'Washing Equipment' },
      rating: 4.8,
      reviews: 27,
      inStock: true,
      features: [
        { ar: 'مقاوم للصدأ', en: 'Rust Resistant' },
        { ar: 'تصميم عملي', en: 'Practical Design' },
        { ar: 'سهل التركيب', en: 'Easy Installation' }
      ],
      icon: Droplet
    },
    {
      id: 5,
      name: { ar: 'ماكينة تحضير القهوة الاحترافية', en: 'Professional Coffee Machine' },
      description: { ar: 'ماكينة قهوة إيطالية للمقاهي والفنادق، مزودة بأنظمة تحكم دقيقة.', en: 'Italian coffee machine for cafes and hotels, equipped with precise control systems.' },
      price: 420,
      currency: { ar: 'د.ك', en: 'KWD' },
      image: '/products/coffeemachine.svg',
      category: { ar: 'معدات مقاهي', en: 'Coffee Shop Equipment' },
      rating: 4.9,
      reviews: 41,
      inStock: true,
      features: [
        { ar: 'تحكم حراري دقيق', en: 'Precise Temperature Control' },
        { ar: 'مضخة ضغط عالي', en: 'High Pressure Pump' },
        { ar: 'تصميم إيطالي', en: 'Italian Design' }
      ],
      icon: Coffee
    },
    {
      id: 6,
      name: { ar: 'شواية غاز صناعية', en: 'Industrial Gas Grill' },
      description: { ar: 'شواية غاز قوية للمطاعم والمطابخ المركزية، مصنوعة من الستانلس ستيل.', en: 'Powerful gas grill for restaurants and central kitchens, made of stainless steel.' },
      price: 210,
      currency: { ar: 'د.ك', en: 'KWD' },
      image: '/products/grill.svg',
      category: { ar: 'معدات شوايات', en: 'Grill Equipment' },
      rating: 4.7,
      reviews: 15,
      inStock: true,
      features: [
        { ar: 'شعلات متعددة', en: 'Multiple Burners' },
        { ar: 'ستانلس ستيل مقاوم', en: 'Durable Stainless Steel' },
        { ar: 'سهل التنظيف', en: 'Easy to Clean' }
      ],
      icon: Flame
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
    <section id="products" className="section-padding bg-white">
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
            {t('products.title')}
          </h2>
          <p className="section-subtitle">
            {t('products.subtitle')}
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="product-card"
            >
              {/* Product Image */}
              <div className="product-image">
                <img
                  src={product.image}
                  alt={product.name[isRTL ? 'ar' : 'en']}
                  className="w-full h-full object-contain p-4"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    product.inStock
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {product.inStock ? t('products.inStock') : t('products.outOfStock')}
                  </span>
                </div>
              </div>

              {/* Product Content */}
              <div className="product-content">
                {/* Category */}
                <div className="flex items-center space-x-2 mb-3">
                  <product.icon className="w-5 h-5 text-primary-600" />
                  <span className="text-sm text-primary-600 font-medium">
                    {product.category[isRTL ? 'ar' : 'en']}
                  </span>
                </div>

                {/* Product Name */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {product.name[isRTL ? 'ar' : 'en']}
                </h3>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews} {isRTL ? 'تقييم' : 'reviews'})
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description[isRTL ? 'ar' : 'en']}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm text-gray-700">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span>{feature[isRTL ? 'ar' : 'en']}</span>
                    </li>
                  ))}
                </ul>

                {/* Price and Actions */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">
                      {product.price} {product.currency[isRTL ? 'ar' : 'en']}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-600 hover:text-primary-600 transition-colors">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button
                      className={`p-2 rounded-lg transition-colors ${
                        product.inStock
                          ? 'bg-primary-600 text-white hover:bg-primary-700'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                      disabled={!product.inStock}
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* View Details Button */}
                <button className="w-full mt-4 btn-secondary group">
                  {t('products.viewDetails')}
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'mr-2' : 'ml-2'} group-hover:translate-x-1 transition-transform`} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              {t('services.readyToTransform')}
            </h3>
            <p className="text-xl mb-8 opacity-90">
              {t('products.subtitle')}
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

export default Products 