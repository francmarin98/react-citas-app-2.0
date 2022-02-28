import PropTypes from 'prop-types';

const Error = ({ msgError }) => {
	return (
		<div className='bg-red-600 text-white text-center p-3
						uppercase font-bold mb-3 rounded-md transition-all'>
			<p>
				{msgError}
			</p>
		</div>
	);
};

Error.propTypes = {
	msgError: PropTypes.string.isRequired
};

export default Error;
