/* eslint-disable no-undef */
import { Logo, MenuIcon, NavbarContainer } from './navbar_style';
import {GiHamburgerMenu} from 'react-icons/gi';
import {theme} from '../../style/theme';
import { Container, FlexContainer, PaddingContainer } from '../../style/global_style';
import { useEffect, useState } from 'react';
import { NavMenu } from './navmenu/navmenu';

export const Navbar = () =>{
	const [openMenu, setOpenMenu] = useState(false);
	const [sticky, setSticky] = useState(false);

	useEffect(()=>{
		const onScroll = () =>{
			window.scrollY > 50 ? setSticky(true) : setSticky(false);
			console.log(window.scrollX);
		};
		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	},[]);


	return(
		<NavbarContainer bgcolor={sticky ? theme.colors.primary : 'transparent'}>
			<PaddingContainer 
				top='1.2rem'
				bottom='1.2rem'
				responsiveleft='1rem'
				responsiveright='1rem'
			>
				<Container>
					<FlexContainer justify='space-between' responsiveflex>
						{/* --left-logo */}
						<Logo>
                            ITANLAB
						</Logo>

						{/* --right-menu */}
						<MenuIcon
							onClick={()=> setOpenMenu(true) }
                        
						>
							<GiHamburgerMenu />
						</MenuIcon>

					</FlexContainer>
				</Container>

				{openMenu && <NavMenu setOpenMenu={setOpenMenu} />}
			</PaddingContainer>
		</NavbarContainer>
	);
};