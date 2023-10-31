import { Navbar } from 'flowbite-react';
import { ImSphere } from 'react-icons/im';
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from '../assets/logo.svg';

const Header = () => {
  	// would be a request to backend here where we fetch user name and deside first letter
	const nameFirstLetter = 'D';
	return (
		<Navbar fluid rounded>
			<Navbar.Brand href="https://sloboda-studio.com/">
				<img src={Logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
			</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse>
			<div className='flex flex-row items-center'>
				<ImSphere className='mr-4'/>
				<div className='flex flex-row items-center pr-1 pl-1 pt-1 pb-1 rounded-full border-[1px]'>
				<GiHamburgerMenu className='mr-2 ml-2'/>
				<div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
					<span className="font-medium text-gray-600">{nameFirstLetter}</span>
				</div>
				</div>
			</div>
			</Navbar.Collapse>
		</Navbar>
	)
};

export default Header;
