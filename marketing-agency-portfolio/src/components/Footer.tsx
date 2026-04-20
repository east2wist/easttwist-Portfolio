import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto flex justify-between">
                <div className="footer-col">
                    <h4 className="text-lg font-bold">الرئيسية</h4>
                    <ul>
                        <li><a href="/" className="hover:underline">نظرة عامة</a></li>
                        <li><a href="/about" className="hover:underline">عن الشركة</a></li>
                        <li><a href="/services" className="hover:underline">الخدمات</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4 className="text-lg font-bold">التواصل</h4>
                    <ul>
                        <li><a href="/contact" className="hover:underline">اتصل بنا</a></li>
                        <li><a href="/offers" className="hover:underline">العروض</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4 className="text-lg font-bold">تابعنا</h4>
                    <ul>
                        <li><a href="#" className="hover:underline">فيسبوك</a></li>
                        <li><a href="#" className="hover:underline">تويتر</a></li>
                        <li><a href="#" className="hover:underline">إنستغرام</a></li>
                    </ul>
                </div>
            </div>
            <div className="text-center mt-4">
                <span>© 2026 جميع الحقوق محفوظة لشركة التسويق</span>
            </div>
        </footer>
    );
};

export default Footer;