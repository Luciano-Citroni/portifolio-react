import { Logo, MenuIcon, NavbarContainer } from './navbar_style';
import {GiHamburgerMenu} from 'react-icons/gi';
import {theme} from '../../style/theme';
import { Container, FlexContainer, PaddingContainer } from '../../style/global_style';
import { useState } from 'react';
import { NavMenu } from './navmenu/navmenu';

export const Navbar = () =>{
	const [openMenu, setOpenMenu] = useState(false);
	return(
		<NavbarContainer bgColor='transparent'>
			<PaddingContainer 
				top='1.2rem'
				bottom='1.2rem'
			>
				<Container>
					<FlexContainer justify='space-between'>
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