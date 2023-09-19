//import global styles
import {
	FlexContainer,
	PaddingContainer,
	Heading,
	IconContainer,
	ParaText,
	BlueText
} from '../../style/global_style';


//import my skills style 
import { SkillCard, SkillCardContainer } from './my_skill_style';

//import data
import {skills} from '../../utils/Data';



export const MySkills = () =>{
	return(
		<PaddingContainer
			id='Skills'
			top="10%"
			bottom="10%"
		>
			{/* --left-section */}
			<FlexContainer fullWidthChild>
				<SkillCardContainer>
					{skills.map((skill)=> (
						<SkillCard>
							<IconContainer size='5rem' color='blue'>
								{skill.icon}
							</IconContainer>
							<Heading as="h4" size="h4">
								{skill.tech}
							</Heading>
						</SkillCard>
					))}
				</SkillCardContainer>

				{/* --right-section */}
				<div>
					<Heading as="h4" size="h4">
                        Minhas Habilidades
					</Heading>

					<Heading as="h2" size="h2" top="0.5rem">
                        O que <BlueText> eu sei </BlueText>
					</Heading>

					<ParaText top="2rem" bottom="1.5rem">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, exercitationem. Earum architecto atque, excepturi reprehenderit nemo inventore minus temporibus aut animi. Veritatis dolores debitis voluptates ipsa autem expedita, magni quisquam?
					</ParaText>
					<ParaText >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, exercitationem. Earum architecto atque, excepturi reprehenderit nemo inventore minus temporibus aut animi. Veritatis dolores debitis voluptates ipsa autem expedita, magni quisquam?
					</ParaText>
				</div>
			</FlexContainer>

		</PaddingContainer>
	);

};