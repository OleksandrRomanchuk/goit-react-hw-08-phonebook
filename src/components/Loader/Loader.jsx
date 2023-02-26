import { ColorRing } from 'react-loader-spinner';
import { LoaderBackdrop } from './Loader.styled';

const Loader = () => {
	return (
		<LoaderBackdrop>
			<ColorRing
				visible={true}
				height="120"
				width="120"
				ariaLabel="blocks-loading"
				wrapperStyle={{}}
				wrapperClass="blocks-wrapper"
				colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
			/>
		</LoaderBackdrop>
	);
};

export default Loader;
