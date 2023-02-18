import { useNavigate } from 'react-router-dom';

const HomePage = () => {
	const navigate = useNavigate();

	return (
		<div>
			<p>Hi! This is my first test project created on the basis of React.js.</p>
			<button type="button" onClick={() => navigate('/my-contacts')}>
				Get started!
			</button>
		</div>
	);
};

export default HomePage;
