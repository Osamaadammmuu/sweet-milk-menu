import React, { useState } from 'react';
import '../style/Menu.scss';
import Navbar from './Navbar';
import ProductList from './ProductList';
import lotus from '../images/05.PNG';
import mango from '../images/White Torn Paper Coming Soon Facebook Post.png';
import nuts from '../images/04.PNG';
import main from '../images/08.PNG';
import arfa from '../images/03.PNG';
import loading from '../images/17.JPEG';

//----------------------------------------------------------------------
function Menu() {
  const [language, setLanguage] = useState('ar'); // اللغة الافتراضية: العربية

  // تحديد الأقسام لكل لغة
  const sections = {
    ar: ['رز بلبن', 'أكواب الحلو', 'الطرش', 'عصائر'],
    en: ['Rice Pudding', 'cups', 'crazy Desserts', 'Juices']
  };

  // تحديد المنتجات لكل لغة
  const products = {
    ar: [
      { name: 'رز بلبن ', description: 'رز بلبن سادة ', price: 'EGP 20', section: 'رز بلبن', image: main },
      { name: 'رز بلبن بالقرفة', description: 'رز بلبن بالقرفة  ', price: 'EGP 25', section: 'رز بلبن', image: arfa },
      { name: 'رز بلبن بالايس', description: 'رز بلبن مع ايس كريم بارد', price: 'EGP 30', section: 'رز بلبن', image: loading },
      { name: 'رز بلبن بالمكسرات', description: 'رز بلبن بالمكسرات الغنية', price: 'EGP 45', section: 'رز بلبن', image: nuts },
      { name: 'رز بلبن ايس بالمكسرات', description: 'رز بلبن مع ايس كريم ومكسرات غنية', price: 'EGP 55', section: 'رز بلبن', image: loading },
      { name: 'رز بلبن نوتيلا ومكسرات', description: 'رز بلبن مع نوتيلا ومكسرات', price: 'EGP 60', section: 'رز بلبن', image: loading},
      { name: 'رز بلبن باللوتس', description: 'رز بلبن مع لوتس كريمي', price: 'EGP 45', section: 'رز بلبن', image: lotus },
      { name: 'رز بلبن بالمانجا', description: 'رز بلبن بالمانجا ', price: 'EGP 40', section: 'رز بلبن', image: mango },
    ],
    en: [
      { name: 'Classic Rice Pudding', description: 'Rice pudding with fresh milk', price: 'EGP 20', section: 'Rice Pudding', image: main },
      { name: 'Cinnamon Rice Pudding', description: 'Rice pudding with a touch of cinnamon', price: 'EGP 25', section: 'Rice Pudding', image: arfa },
      { name: 'Rice Pudding with Ice Cream', description: 'Rice pudding with cold ice cream', price: 'EGP 30', section: 'Rice Pudding', image: loading }, 
      { name: 'Nutty Rice Pudding', description: 'Rice pudding with rich nuts', price: 'EGP 45', section: 'Rice Pudding', image: nuts },
      { name: 'Rice Pudding with Ice Cream and Nuts', description: 'Rice pudding with cold ice cream and rich nuts', price: 'EGP 55', section: 'Rice Pudding', image: loading },
      { name: 'Nutella and Nutty Rice Pudding', description: 'Rice pudding with Nutella and rich nuts', price: 'EGP 55', section: 'Rice Pudding', image: loading },
      { name: 'Lotus Rice Pudding', description: 'Rice pudding with creamy lotus', price: 'EGP 45', section: 'Rice Pudding', image: lotus },
      { name: 'Mango Rice Pudding', description: 'Rice pudding with fresh mango', price: 'EGP 40', section: 'Rice Pudding', image: mango },
    ]
  };
  
  
  const [selectedSection, setSelectedSection] = useState(sections[language] ? sections[language][0] : '');

  const toggleLanguage = () => {
    const newLanguage = language === 'ar' ? 'en' : 'ar';
    setLanguage(newLanguage);
    setSelectedSection(sections[newLanguage] ? sections[newLanguage][0] : ''); // تحديث القسم المختار بناءً على اللغة
  };

  const displayedProducts = products[language]?.filter(product => product.section === selectedSection) || [];
  const isSectionDisabled = (section) => {
    const disabledSections = {
      ar: ['عصائر', 'الطرش'],
      en: ['Juices', 'crazy Desserts']
    };
    return disabledSections[language].includes(section);
  };

  return (
    <div className={`menu-container ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container">
        {/* زر تغيير اللغة */}
        <div className="language-toggle" onClick={toggleLanguage}>
          <span>{language === 'ar' ? 'English' : 'العربية'}</span>
        </div>

        {/* شريط التنقل */}
        <Navbar
          sections={sections[language]}
          onSectionSelect={setSelectedSection}
          selectedSection={selectedSection}
          isSectionDisabled={isSectionDisabled}
        />

        {/* قائمة المنتجات */}
        <ProductList products={displayedProducts} language={language} />
      </div>
    </div>
  );
}
//----------------------------------------------------------------------
export default Menu;
