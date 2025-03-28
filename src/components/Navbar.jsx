import { useState, useEffect, useRef } from 'react';
import { navLinks } from '../constants';
const NavItems = () => {

    const handleClick = (e, href) => {
      // Prevent default link behavior
      e.preventDefault();
  
      // Select the target section by its ID (ignoring the '#')
      const targetSection = document.querySelector(href);
  
      if (targetSection) {
        // Get the top offset of the section and apply the y offset of -100px
        const offsetTop = targetSection.offsetTop - 100;
  
        // Scroll to the section with the offset
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth', // Smooth scrolling
        });
      }
    };
  
    return (
      <ul className='flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20'>
        {
          navLinks.map((item) => (
            <li key={item.id} className='text-neutral-400 hover:text-[#FEFAE0] font-generalsans max-sm:hover:bg-[#DDA15E]/50 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5'>
              <a
                href={item.href}
                className='text-lg md:text-base text-[#283618] hover:text-[#FEFAE0] transition-all'
                onClick={(e) => handleClick(e, item.href)} 
              >
                {item.name}
              </a>
            </li>
          ))
        }
      </ul>
    );
  };

const Navbar = () => {
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
    <header ref={navRef} className={`bg-[#DDA15E] fixed top-0 left-0 right-0 z-50 px-8 transition-all duration-1000 ease-in-out  ${scrolled ? 'opacity-0 py-2 pointer-events-none' : 'opacity-100 py-4'}`}>
        <div className='max-w-7xl mx-auto'>
            <div className='flex justify-between'>
                <a href='#home' className='font-bold text-xl text-[#283618] hover:text-[#FEFAE0] transition-colors'>
                    Logo
                </a>
                <button onClick={() => toogleMenu()} className="hover:cursor-pointer focus:outline-none sm:hidden flex"
            aria-label="Toggle menu">
                    <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt='menu' className='w-6 h-6'/>
                </button>
                <nav className='sm:flex hidden'> {/* small devices show this, others do not */}
                    <NavItems />
                </nav>
            </div>

        </div>
        <div className={`absolute left-0 right-0 bg-[#DDA15E]/75 backdrop-blur-sm transition-all duration-500 ease-in-out overflow-hidden z-20 mx-auto sm:hidden block ${isOpen ? 'max-h-screen' : 'max-h-0'} ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
            <nav className='p-5'>
                <NavItems />    
            </nav>
        </div>
    </header>
  )
}

export default Navbar