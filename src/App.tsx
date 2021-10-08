import ICON from './icon.png';
import './App.scss';
import { Button, Icon, _ } from 'oopenui_core';

export const App = () => {
	const name = 'sami';
	return (
		<div>
			<h1>It is war!</h1>
			<br />
			<img src={ICON} alt="Open UI icon" width="100" />

			<Button color="blue">
				<span>
					<Icon name="coffee" color="red" /> {_.capitalize('click on me!')}
				</span>
			</Button>
		</div>
	);
};
