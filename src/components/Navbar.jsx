import { useState, useEffect, useRef } from 'react';
import { navLinks } from '../constants';
import { Link } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
const NavItems = () => {
  
    return (
      <ul className='flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20'>
        {
          navLinks.map((item) => (
            <li key={item.id} className='text-neutral-400 font-generalsans max-sm:hover:bg-base-300 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5'>
              <Link 
                to={item.href}
                className='text-base md:text-lg transition-all text-base-content hover:text-primary focus:text-primary'
              >
                {item.name}
              </Link>
            </li>
          ))
        }
      </ul>
    );
  };

const Navbar = ({theme}) => {
    const user = useSelector((state) => state.user.user) || null;
    console.log("redux user:",user);
    const [isOpen, setIsOpen] = useState(false); //isOpen is a variable and setIsOpen is a function to change the isOpen state
    const toogleMenu = () => setIsOpen((preIsOpen) => !preIsOpen);

    const navRef = useRef(null)
    const [scrolled, setScrolled] = useState(false);
    const prevScrollY = useRef(0); 

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > prevScrollY.current) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header ref={navRef} className={`bg-base-300 fixed top-0 left-0 right-0 z-50 px-8 transition-all duration-1000 ease-in-out  ${scrolled ? 'opacity-0 py-2 pointer-events-none' : 'opacity-100 py-4'}`}>
        <div className='max-w-7xl mx-auto'>
            <div className='flex justify-between'>
                <Link to='/' className='font-bold flex items-center gap-2 transition-colors'>
                    {
                      theme === 'caramellatte' ?
                      <img src="/assets/logoLight.png" alt="Logo" className='h-10' />
                      :
                      <img src="/assets/logoDark.png" alt="Logo" className='h-10' />
                    }
                    <p className="font-bold">盒味盒子</p>
                    
                </Link>
                <div className='flex items-center sm:hidden flex'>
                    <div className='sm:hidden flex'>
                      <li key="5" className='text-neutral-400 font-generalsans max-sm:hover:bg-base-300 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5'>
                        {user ? (
                        <Link
                          to="/profile"
                          className="inline-flex items-center md:ml-10 ml-8 md:text-lg transition-all text-base text-base-content font-semibold hover:text-primary focus:text-primary"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 fill-current mr-2">
                            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/>
                          </svg>
                        </Link>
                      ) : (
                        <Link
                          to="/login"
                          className="list-none ml-6 list-none btn btn-accent text-white hover:text-gray-300 md:text-lg transition-all"
                        >
                          登入/註冊
                        </Link>
                      )}
                      </li>  
                  </div>
                  <button onClick={() => toogleMenu()} className="hover:cursor-pointer focus:outline-none sm:hidden flex"
              aria-label="Toggle menu">
                  <label htmlFor="menu" className="swap swap-rotate">
                    <input id="menu" type="checkbox" checked={isOpen} onChange={toogleMenu}/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" className="swap-on w-6 h-6 stroke-current">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" className="swap-off w-6 h-6 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>
                  </label>    
                  </button>
                </div>
                
                <nav className='list-none sm:flex hidden'> {/* small devices show this, others do not */}
                    <NavItems />
                    <li key="5" className='text-neutral-400 font-generalsans max-sm:hover:bg-base-300 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5'>
                    {user ? (
                    <Link
                      to="/profile"
                      className="inline-flex items-center md:ml-10 ml-8 md:text-lg transition-all text-base text-base-content font-semibold hover:text-primary focus:text-primary"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 fill-current mr-2">
                        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/>
                      </svg>
                      {user.name}
                    </Link>
                  ) : (
                    <Link
                      to="/login"
                      className="ml-6 list-none btn btn-accent text-white hover:text-gray-300 md:text-lg transition-all"
                    >
                      登入/註冊
                    </Link>
                  )}
                  </li>
                </nav>
            </div>

        </div>
        <div className={`list-none absolute left-0 right-0 bg-base-300 backdrop-blur-sm transition-all duration-500 ease-in-out overflow-hidden z-20 mx-auto sm:hidden block ${isOpen ? 'max-h-screen' : 'max-h-0'} ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
            <nav className='p-5'>
                <NavItems />  
            </nav>
        </div>
    </header>
  )
}

export default Navbar