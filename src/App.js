import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { Icon24ErrorCircle } from '@vkontakte/icons';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, Snackbar, Avatar, Text } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import './App.css';
import Home from './panels/Home';
import Persik from './panels/Persik';
import Main from './panels/Main/Main';
import MyGames from './panels/MyGames/';

const App = () => {
	const [activePanel, setActivePanel] = useState('main');
	const [fetchedUser, setUser] = useState(null);
	const [snackData, setSnack] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		function fetchData() {
			let isUserDataFound = false;
			bridge.send('VKWebAppGetUserInfo')
			.then(user => {
				isUserDataFound = true;
				setUser(user);
				setPopout(null);
			});

			setTimeout(() => {
				if (!isUserDataFound) {
					setPopout(null);
					setSnack(() => (
						<Snackbar
							onClose={() => setSnack(null)}
							before={<Avatar size={24}><Icon24ErrorCircle fill="#e64646" width={24} height={24} /></Avatar>}
							duration={5000}
						>
							<Text>Не удалось установить соединение с <b>VK Bridge</b></Text>
						</Snackbar>
					))
				}
			}, 1000);
			
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<AdaptivityProvider>
			<AppRoot>
				<View activePanel={activePanel} popout={popout}>
						<Main id='main' snack={snackData} go={go}/>
						<MyGames id='mygames' snack={snackData} go={go}/>
						<Home id='home' fetchedUser={fetchedUser} go={go} />
						<Persik id='persik' go={go} />
				</View>
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;
