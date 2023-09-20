import { BlueText, Button, FlexContainer, Heading, PaddingContainer } from '../../style/global_style';

// import style footer
import { ContactForm, FormInput, FormLabel } from './footer_style';

export const Footer = () =>{
	return(
		<PaddingContainer
			id='Contact'
			top="5%"
			bottom="10%"
		>
			<Heading as="h4" size="h4" align="center">
                Contato
			</Heading>
            

			<Heading as="h2" size="h2" align="center" top="0.5rem">
                Entre em contato <BlueText> comigo  aqui </BlueText>
			</Heading>

			<PaddingContainer top="3rem">
				<FlexContainer justify='center'>
					<ContactForm>
						<PaddingContainer bottom="2rem">
							<FormLabel>Nome:</FormLabel>
							<FormInput type="text" placeholder='Coloque seu nome aqui'/>
						</PaddingContainer>

						<PaddingContainer bottom="2rem">
							<FormLabel>Email:</FormLabel>
							<FormInput type="email" placeholder='Coloque seu email aqui'/>
						</PaddingContainer>

						<PaddingContainer bottom="2rem">
							<FormLabel>Mensagem:</FormLabel>
							<FormInput as="textarea" placeholder='Coloque seu nome aqui'/>
						</PaddingContainer>

						<FlexContainer justify="center">
							<Button>Enviar</Button>
						</FlexContainer>
					</ContactForm>
				</FlexContainer>
			</PaddingContainer>
		</PaddingContainer>
	);
};