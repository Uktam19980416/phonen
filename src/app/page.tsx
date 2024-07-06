import Footer from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { MdArrowRightAlt } from 'react-icons/md';

export default function Home() {
  return (
    <>
      <div className="bg-cloud bg-cover bg-center h-screen relative">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto relative z-10 px-4 lg:px-0">
          <Navbar />
          <div className="mt-20">
            <h1 className="text-[32px] md:text-[48px] lg:text-[64px] text-white font-normal leading-[40px] md:leading-[56px] lg:leading-[70px] font-tenor">
              Экологически чистые продукты <br />
              из богатой флоры{' '}
              <span className="text-green-500 underline">Узбекистана</span>
            </h1>
            <p className="text-white mt-6 text-[16px] md:text-[20px] w-full md:w-4/5">
              Страна Шелкового пути, древней сети торговых маршрутов, была
              местом культурного обмена и глубоких знаний. Опираясь на богатое
              историческое наследие Узбекистана и стремление к инновациям, в
              2018 году в самом сердце Центральной Азии было создано современное
              предприятие, целью которого является использование экологически
              чистых, натуральных местных природных богатств — цветов, листьев,
              кожуры, семян, корней дикорастущих лекарственных растений, фруктов
              и овощей.
            </p>
            <div className="mt-10 flex flex-col md:flex-row gap-4">
              <button className="bg-transparent border border-white text-white py-2 px-6 rounded-lg">
                СВЯЗАТЬСЯ С НАМИ
              </button>
              <button className="bg-transparent border border-white text-white py-2 px-6 rounded-lg">
                СМОТРЕТЬ О НАС
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-list bg-cover bg-no-repeat h-screen pt-20 px-4 lg:px-0">
        <div className="container mx-auto space-y-5">
          <h2 className="text-[32px] md:text-[48px] font-normal">Полезные статьи</h2>
          <p className="text-[20px] md:text-[32px] font-normal w-full md:w-4/5 leading-8 md:leading-10">
            На нашем сайте мы публикуем новости отрасли и исследовательские
            статьи. Будьте в курсе новостей и интересных статей.
          </p>

          <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1 mt-10">
            <div className="bg-image_18 bg-cover bg-center h-[200px] md:h-[324px]"></div>

            <div className="bg-image_18_1 bg-cover bg-center h-[200px] md:h-[324px] p-[15px] md:p-[25px] flex flex-col justify-between">
              <h3 className="text-[20px] md:text-[26px] text-white">
                Почему следует принимать пищевые добавки?
              </h3>
              <p className="flex items-center text-[20px] md:text-[26px] text-white cursor-pointer">
                Читать <MdArrowRightAlt className="text-[30px] md:text-[40px]" />
              </p>
            </div>

            <div className="bg-image_18_2 bg-cover bg-center h-[200px] md:h-[324px] p-[15px] md:p-[25px] flex flex-col justify-between">
              <h3 className="text-[20px] md:text-[26px] text-white">
                Пищевые ингредиенты Европа 2023 Франкфурт
              </h3>
              <p className="flex items-center text-[20px] md:text-[26px] text-white cursor-pointer">
                Читать <MdArrowRightAlt className="text-[30px] md:text-[40px]" />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#231e1e] bg-dark_hor bg-center bg-contain bg-no-repeat py-10">
        <Footer />
      </div>
    </>
  );
}
