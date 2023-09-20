import {AiOutlineClose} from 'react-icons/ai';
import { MenuItem, NavMenuContainer } from './navmenu_style';
import { FlexContainer, PaddingContainer } from '../../../style/global_style';
import { MenuIcon } from '../navbar_style';

export const NavMenu = ({ setOpenMenu }) =>{
	return (
		<NavMenuContainer>
			<PaddingContainer left='5%' right='5%' top='2rem'>
				<FlexContainer justify='flex-end'>
					<MenuIcon
						onClick={()=> setOpenMenu(false)}
					>
						<AiOutlineClose />
					</MenuIcon>
				</FlexContainer>
			</PaddingContainer>

			<PaddingContainer top='8%'>
				<FlexContainer direction='column' align='center'>
					<MenuItem href='#Home' onClick={()=> setOpenMenu(false)}>Home</MenuItem>
					<MenuItem href='#Skills' onClick={()=> setOpenMenu(false)}>Sobre</MenuItem>
					<MenuItem href='#Contact' onClick={()=> setOpenMenu(false)}>Contato</MenuItem>
				</FlexContainer>
			</PaddingContainer>

		</NavMenuContainer>
	);

};