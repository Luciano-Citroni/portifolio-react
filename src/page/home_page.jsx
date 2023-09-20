//import styles
import {Container, MainBody} from '../style/global_style';

//import components
import { Showcase } from '../components/showcase/showcase';
import { MySkills } from '../components/my_skills/my_skill';
import { Footer } from '../components/footer/footer';
import { Navbar } from '../components/navbar/navbar';



export const HomePage = () =>{
	return (
		<MainBody>
			<Container>
				<Navbar />
				<Showcase />
				<MySkills />
				<Footer />
			</Container>
		</MainBody>
	);
};