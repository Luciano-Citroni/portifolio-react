import React from 'react';
import ReactDOM from 'react-dom/client';
import { HomePage } from './page/home_page';
import { GlobalStyle } from './style/global_style';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme';


// eslint-disable-next-line no-undef
ReactDOM.createRoot(document.getElementById('root')).render(
	<ThemeProvider theme={theme}>
		<HomePage/>
		<GlobalStyle />
	</ThemeProvider>
);
