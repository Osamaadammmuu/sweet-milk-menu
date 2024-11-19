// src/components/Menu.js
import React, { useState } from 'react';
import '../style/Menu.scss';
import Navbar from './Navbar';
import ProductList from './ProductList';
import blueRiceImage from '../images/blue rice.webp';
import blueberry from '../images/blueberry.webp';
import mango from '../images/mango.webp';
import nuts from '../images/nuts.webp';
import Oreo from '../images/oreo.webp';
import arfa from '../images/2rfa.webp';


//-------------------------------------------------
function Menu() {

  const [language, setLanguage] = useState('ar'); // اللغة الافتراضية: العربية

  // الأقسام باللغتين
  const sections = {
    ar: ['رز بلبن', 'تريلاتشي', 'عصائر', 'الطرش'],
    en: ['Rice Pudding', 'Trellis', 'Juices', 'Creamy Desserts']
  };

  // قائمة المنتجات باللغتين
  const products = { 
    ar: [
      // منتجات رز بلبن
      { name: 'رز بلبن ', description: 'رز بلبن سادة ', price: '20 LE', section: 'رز بلبن', image: blueRiceImage },
      { name: ' تارت رز بلبن ', description: 'رز بلبن تارت', price: '50 LE', section: 'رز بلبن', image: blueberry },
      { name: 'رز بلبن بالمانجا', description: 'رز بلبن بنكهة بالمانجا ', price: '40 LE', section: 'رز بلبن', image: mango },
      { name: 'رز بلبن بالشوكولاتة', description: 'رز بلبن بنكهة الشوكولاتة الغنية', price: '35 LE', section: 'رز بلبن', image: Oreo },
      { name: 'رز بلبن بالشوكولاتة', description: 'رز بلبن بنكهة الشوكولاتة الغنية', price: '25 LE', section: 'رز بلبن', image: arfa },
      { name: 'رز بلبن بالمكسرات', description: 'رز بلبن بنكهة الشوكولاتة الغنية', price: '50 LE', section: 'رز بلبن', image: nuts },
      // منتجات العصائر
      { name: 'عصير مانجو', description: 'عصير مانجو طازج ومنعش', price: '30 LE', section: 'عصائر', image: blueRiceImage },
      { name: 'عصير فراولة', description: 'عصير فراولة بارد', price: '30 LE', section: 'عصائر', image: blueRiceImage },
      // منتجات القشطوطة
      { name: 'قشطوطة بالكراميل', description: 'قشطوطة مع كراميل سائل', price: '30 LE', section: 'تريلاتشي', image: blueRiceImage },
      { name: 'قشطوطة بالشوكولاتة', description: 'قشطوطة مع صوص الشوكولاتة', price: '30 LE', section: 'تريلاتشي', image: blueRiceImage },
      // منتجات الطرش
      { name: 'قشطوطة بالكراميل', description: 'قشطوطة مع كراميل سائل', price: '30 LE', section: 'الطرش', image: blueRiceImage },
    ],
    en: [
      // Rice Pudding
      { name: 'Classic Rice Pudding', description: 'Rice pudding with fresh milk and sugar', price: '$1.50', section: 'Rice Pudding', image: blueRiceImage },
      { name: 'Fruit Rice Pudding', description: 'Rice pudding with fresh fruit pieces', price: '$1.80', section: 'Rice Pudding', image: blueRiceImage },
      { name: 'Chocolate Rice Pudding', description: 'Rice pudding with rich chocolate flavor', price: '$2.10', section: 'Rice Pudding', image: blueRiceImage },
      // Juice
      { name: 'Mango Juice', description: 'Fresh and refreshing mango juice', price: '$0.90', section: 'Juices', image: blueRiceImage },
      { name: 'Strawberry Juice', description: 'Cold and sweet strawberry juice', price: '$0.90', section: 'Juices', image: blueRiceImage },
      // Creamy Dessert
      { name: 'Creamy Dessert', description: 'Creamy dessert with liquid caramel', price: '$1.20', section: 'Creamy Desserts', image: blueRiceImage },
      { name: 'Creamy Dessert', description: 'Creamy dessert with chocolate sauce', price: '$1.30', section: 'Creamy Desserts', image: blueRiceImage },
    ]
  };


  // الحالة لتخزين القسم المختار
  const [selectedSection, setSelectedSection] = useState(sections[language][0]);

  // تغيير القسم المختار
  function handleSectionSelect(section) {
    setSelectedSection(section);
  }

  // تغيير اللغة
  function toggleLanguage() {
    const newLanguage = language === 'ar' ? 'en' : 'ar';
    setLanguage(newLanguage);
    setSelectedSection(sections[newLanguage][0]); // تعيين القسم الأول من اللغة الجديدة
  }

  // المنتجات المعروضة بناءً على القسم المختار واللغة
  const displayedProducts = products[language].filter(product => product.section === selectedSection);

  return (
    <div className={`menu-container ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className='container'>
        {/* زر تبديل اللغة */}
        <button className="language-toggle" onClick={toggleLanguage}>
          {language === 'ar' ? 'Convert to English' : 'العودة إلى العربية'}
        </button>

        {/* شريط التنقل */}
        <Navbar sections={sections[language]} onSectionSelect={handleSectionSelect} selectedSection={selectedSection} />
        {/* عنوان القائمة 
          <h1>{language === 'ar' ? 'منيو Sweet Milk' : 'Sweet Milk Menu'}</h1>
          <h2>{language === 'ar' ? `القسم المختار: ${selectedSection}` : `Selected Section: ${selectedSection}`}</h2>
        */}
        {/* عرض قائمة المنتجات */}
        <ProductList products={displayedProducts} language={language} />
      </div>
    </div>
  );

}
//-------------------------------------------------
export default Menu;
