import { FC } from 'react';
import logo from '../../public/images/logo.png';
import Image from 'next/image';
import { CiSearch } from 'react-icons/ci';

export const Navbar: FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-6 px-4 lg:px-0">
      <div className="mb-4 md:mb-0">
        <Image src={logo} alt="Logo" />
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-10">
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 text-white">
          <li><a href="#" className="hover:underline">Главная</a></li>
          <li><a href="#" className="hover:underline">О нас</a></li>
          <li><a href="#" className="hover:underline">Продукты</a></li>
          <li><a href="#" className="hover:underline">Контакты</a></li>
          <li><a href="#" className="hover:underline">Новости</a></li>
        </ul>

        <div className="relative">
          <CiSearch className="absolute left-2 top-2 text-xl text-white" />
          <input
            type="text"
            placeholder="Поиск..."
            className="rounded-3xl bg-transparent border border-white pl-10 py-1 placeholder:text-white text-white focus:outline-none focus:border-green-500 transition-all duration-300 ease-in-out"
          />
        </div>

        <select className="bg-transparent text-white">
          <option value="ru" className="bg-slate-600">Ру</option>
          <option value="en" className="bg-slate-600">En</option>
        </select>
      </div>
    </div>
  );
}
