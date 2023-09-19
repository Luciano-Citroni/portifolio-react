//import styles
import {Container, MainBody} from '../style/global_style';

//import components
import { Showcase } from '../components/showcase/showcase';



export const HomePage = () =>{
	return (
		<MainBody>
			<Container>
				<Showcase />     
			</Container>
		</MainBody>
	);
};