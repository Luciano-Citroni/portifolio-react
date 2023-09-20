import { BlueText, FlexContainer, Heading, IconContainer, PaddingContainer, ParaText } from '../../style/global_style';
import {BsGithub, BsLinkedin} from 'react-icons/bs';
import { Particle, ShowcaseImageCard, ShowcaseParticleContainer } from './showcase_style';

//import asset
import ShowcaseImage from '../../assets/showcase-img.png';
import BackgroundImg from '../../assets/particle.png';

export const Showcase = () =>{
	return(
		<PaddingContainer
			id='Home'
			left="3%"
			right="10%"
			top="15%"
			bottom="10%"
			responsiveleft='1rem'
			responsiveright='1rem'
			responsivetop='8rem'

		>
			<FlexContainer align="center" fullwidthchild>
				<div>
					<Heading as="h4" size="h4" align="start" >Olá!</Heading>
					<Heading as="h2" size="h2" top="0.5rem" bottom="1rem" align="start">
                        Me chamo <BlueText>Luciano Citroni</BlueText>
					</Heading>

					<Heading as="h3" size="h3" align="start">
                        E sou  <BlueText>Desenvolvedor FullStack</BlueText>
					</Heading>

					<ParaText align="start" a="p" top="2rem" bottom="4rem">
                        Olá, me chamo Luciano Citroni e sou desenvolvedor fullstack com mais de 2 anos de experiencia desenvolvendo aplicações e analisando dados.
					</ParaText>

					{/* icons */}

					<FlexContainer gap="15px" responsiveflex>
						<IconContainer color="white" size="1.5rem">
							<BsLinkedin />
						</IconContainer>

						<IconContainer color="white" size="1.5rem">
							<BsGithub />
						</IconContainer>

					</FlexContainer>
				</div>

				{/* right-content */}
				<FlexContainer justify="flex-end">
					<ShowcaseParticleContainer>
						<ShowcaseImageCard>
							<img src={ShowcaseImage} alt='showcase'/>
						</ShowcaseImageCard>


						<Particle src={BackgroundImg} alt='particle' top="-80px" left="20px" rotate="60deg" />
						<Particle src={BackgroundImg} alt='particle' top="50px" right="-70px" rotate="0deg" />
						<Particle src={BackgroundImg} alt='particle' bottom="10px" left="-70px" rotate="50deg" />
					</ShowcaseParticleContainer>
				</FlexContainer>
                

			</FlexContainer>
		</PaddingContainer>
	); 
};