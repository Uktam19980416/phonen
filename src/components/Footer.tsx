import { FC } from 'react';
import logo from '../../public/images/logo.png';
import Image from 'next/image';
import { FaTelegramPlane } from 'react-icons/fa';
import { CiFacebook } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';

const Footer: FC = () => {
  return (
    <div className="container mx-auto py-10 px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row justify-between gap-5">
        <div className="mb-4 lg:mb-0">
          <Image src={logo} alt="Logo" />
        </div>

        <div className="lg:w-2/5 flex flex-col gap-10">
          <div className="space-y-2">
            <p className="text-[16px] md:text-[20px] text-white">Адрес головного офиса:</p>
            <p className="text-[16px] md:text-[20px] text-white">100100, Республика Узбекистан, город Ташкент, Яккасарайский район, улица Шота Руставели, 53Б</p>
          </div>

          <div className="space-y-2">
            <p className="text-[16px] md:text-[20px] text-white">Адрес производства:</p>
            <p className="text-[16px] md:text-[20px] text-white">111305, Республика Узбекистан, Ташкентская область, Паркентский район, Каракалпакский Марказий МФУ</p>
          </div>
        </div>

        <ul className="space-y-2 text-[16px] md:text-[20px] text-white">
          <li>Главная</li>
          <li>О нас</li>
          <li>Продукты</li>
          <li>Контакты</li>
          <li>Новости</li>
        </ul>

        <div className="space-y-2">
          <p className="text-[16px] md:text-[20px] text-white">Как с нами связаться?</p>
          <a className="text-[16px] md:text-[20px] text-white" href="mailto:info@yumabio.com">info@yumabio.com</a>
          <p className="text-[16px] md:text-[20px] text-white">+998 95 478 88 87</p>
          <p className="text-[16px] md:text-[20px] text-white">+998 93 321 24 42</p>
          <div className="flex items-center gap-5">
            <FaTelegramPlane className="text-[16px] md:text-[20px] text-white" />
            <CiFacebook className="text-[16px] md:text-[20px] text-white" />
            <FaInstagram className="text-[16px] md:text-[20px] text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
