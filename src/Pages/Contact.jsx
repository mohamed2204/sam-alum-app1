import { assets } from '../assets/assets';
import NewsLetterBox from '../Components/NewsLetterBox';
import Title from '../Components/Title';

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div>
      <div className="to-current text-2xl pt-10 border-t">
        <Title text1={'CONTACTEZ-'} text2={'NOUS'} />
      </div>

      <div className="flex flex-col justify-center sm:flex-row gap-10 my-10 mb-28">
        <img
          src={assets.contact_img}
          alt=""
          className="w-full sm:max-w-[480px]"
        />

        <div className="flex flex-col justify-center items-start gap-4">
          <p className="font-semibold text-altext-gray-600">Notre magasin</p>
          <p className="text-gray-500">
            N°XX Quartier industriel, <br />
            <br />
            Quartier industriel, Marrakech 40000
          </p>

          <p className="text-gray-800">
            Tel: <span className="text-gray-500">+212 000 000 000</span>
          </p>
          <p className=" text-gray-800">
            Email: <span className="text-gray-500">admin@sam-alim.com</span>
          </p>

          <p className="text-gray-500">Carrières chez SamAlim</p>
          <p className="text-gray-500">
            Découvrez nos équipes et nos offres d'emploi.
          </p>

          <button
            className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white  transition-all duration-500 "
            onClick={scrollToTop}
          >
            Explore Jobs
          </button>
        </div>
      </div>

      {/* <NewsLetterBox /> */}
    </div>
  );
};

export default Contact;
