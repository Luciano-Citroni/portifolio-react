//import styles
import {Container, MainBody} from '../style/global_style';

//import components
import { Showcase } from '../components/showcase/showcase';
import { MySkills } from '../components/my_skills/my_skill';



export const HomePage = () =>{
	return (
		<MainBody>
			<Container>
				<Showcase />
				<MySkills />   
			</Container>
		</MainBody>
	);
};