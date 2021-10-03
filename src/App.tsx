import ICON from './icon.png';
import './App.scss';

export const App = () => {
	const name = 'sami';
	return (
		<div>
			<h1>It is war!</h1>
			<br />
			<img src={ICON} alt="Open UI icon" width="100" />
		</div>
	);
};
