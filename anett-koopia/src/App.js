import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div id="content">

      <div id="header" className="flex w-full fixed top-0 z-50 h-20">
        <div id="header-content" className="flex px-7 w-full">
          <a href="/" className="flex p-1">
            <img className="w-full h-20" src="https://www.anettkontaveit.ee/assets/anett-logo-white.svg"></img>
          </a>
          <div className="flex justify-center items-center font-normal text-lg text-white pl-2.5 gap-2">
            <p className='font-zonaLight font-normal'>WTA</p>
            <p className="font-black font-zonaBold">61</p>
          </div>
          <div id="navbar" className="flex flex-row w-full justify-end font-zonaBold font-semibold text-sm tracking-wider">
            <ul className="flex content-end items-center text-white gap-4 text-right pl-7">
              <li className="py-2"><a className="text-right hover:underline underline-offset-8" href="/anettist">Anettist</a></li>

              <li className="py-2"><a className="text-right hover:underline underline-offset-8" href="/anetti-lood">Anetti lood</a></li>

              <li className="py-2"><a className="text-right hover:underline underline-offset-8" href="/tulemused">Tulemused</a></li>

              <li className="py-2"><a className="text-right hover:underline underline-offset-8" href="/turniirid">Järgmised turniirid</a></li>

              <li className="py-2"><a className="text-right hover:underline underline-offset-8" href="/sponsorid">Sponsorid</a></li>

              <li className="py-2"><a className="text-right hover:underline underline-offset-8" href="/kontakt">Kontakt</a></li>
            </ul>
          </div>
          <div id="lang" className="flex w-32 justify-end items-center pl-5">
            <a className="flex w-24 font-poppins font-light py-2 px-4 text-white justify-center items-center border border-solid rounded-full border-white text-xs hover:bg-white hover:text-black transition-colors" href="#">IN ENGLISH</a>
          </div>
        </div>
      </div>

      <div id="hero-content" class="bg-[url('https://www.anettkontaveit.ee/images/main-bg.png')]">
        <div className="h-[700px] flex justify-center">
          <div id="hero-text" className="absolute left-10 right-1/2 top-1/2 z-90  text-white">
            <h1 className="font-stainy text-9xl font-normal -rotate-6 text-center mb-3">Anett</h1>
            <div id="left-text" className="flex w-[330px] m-auto p-5 flex-col justify-center text-center items-center font-normal text-lg text-white gap-2">
              <hr className="w-full"></hr>
              <p className="font-zonaLight font-normal text-center text-lg">Anett Kontaveit</p>
              <div className="flex gap-2 text-center">
                 <p className='font-zonaLight font-normal text-4xl'>WTA</p>
                <p className="font-black font-zonaBold text-4xl">61</p>
              </div>
          </div>
          </div>
          <div id="hero-image" class="bg-[url('https://www.anettkontaveit.ee/images/anett-kontaveit-main.png')] bg-contain bg-no-repeat z-100 absolute top-28 left-1/3 right-8 w-2/3 h-4/5"></div>
          <div id="hero-diagonal" class="bg-[#fbfbfb] absolute z-80 top-[655px] -left-24 -right-24 h-52 -rotate-3"></div>
        </div>
        <div className="flex absolute gap-2 text-white z-100 font-zonaLight font-semibold uppercase text-sm rotate-90 top-[300px] -right-12">
          <a class="social-bt" target="_blank" href="https://twitter.com/AnettKontaveit">Twitter</a>
          <a class="social-bt" target="_blank" href="https://www.instagram.com/anett_kontaveit/?hl=en">Instagram</a>
	      </div>
      </div>

    </div>
    
  );
}

export default App;
