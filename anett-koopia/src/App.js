import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div id="content">

      <div id="header" className="flex w-full fixed top-0 z-50 h-20">
        <div id="header-content" className="flex px-7 w-full">
          <a href="/" className="flex p-1">
            <img className="w-full h-full" src="https://www.anettkontaveit.ee/assets/anett-logo-white.svg"></img>
          </a>
          <div className="flex justify-center items-center font-normal text-lg text-white pl-2.5 gap-2">
            <p className='font-zonaLight font-normal'>WTA</p>
            <p className="font-black font-zonaBold">61</p>
          </div>
          <div id="navbar" className="flex flex-row w-full justify-end font-zonaBold font-semibold text-sm tracking-wider">
            <ul className="flex content-end items-center text-white gap-4 text-right pl-7">
              <li className="py-2 hover:underline"><a className="text-right" href="/anettist">Anettist</a></li>

              <li className="py-2"><a className="text-right hover:underline" href="/anetti-lood">Anetti lood</a></li>

              <li className="py-2"><a className="text-right hover:underline" href="/tulemused">Tulemused</a></li>

              <li className="py-2"><a className="text-right hover:underline" href="/turniirid">Järgmised turniirid</a></li>

              <li className="py-2"><a className="text-right hover:underline" href="/sponsorid">Sponsorid</a></li>

              <li className="py-2"><a className="text-right hover:underline" href="/kontakt">Kontakt</a></li>
            </ul>
          </div>
          <div id="lang" className="flex w-28 justify-end items-center pl-5">
            <a className="flex p-2 w-20 text-white justify-center items-center border border-solid rounded-full border-white text-xs hover:bg-white hover:text-black transition-colors" href="#">IN ENGLISH</a>
          </div>
        </div>
      </div>

      <div class="bg-[url('https://www.anettkontaveit.ee/images/main-bg.png')]">
        <div className="h-[700px]"></div>
      </div>

    </div>
    
  );
}

export default App;
