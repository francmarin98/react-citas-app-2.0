import PropTypes from 'prop-types';

const Patient = ({ paciente }) => {
	return (
		<li className='mx-5 mb-3 bg-white shadow-md px-5 py-10 rounded-xl'>
			<p className='font-bold mb-3 text-gray-700 uppercase'>Mascota: {''}
				<span className='font-normal normal-case'>{paciente?.nombreMascota}</span>
			</p>
			<p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {''}
				<span className='font-normal normal-case'>{paciente?.nombrePropietario}</span>
			</p>
			<p className='font-bold mb-3 text-gray-700 uppercase'>Email: {''}
				<span className='font-normal normal-case'>{paciente?.email}</span>
			</p>
			<p className='font-bold mb-3 text-gray-700 uppercase'>Fecha alta: {''}
				<span className='font-normal normal-case'>{paciente?.fechaAlta}</span>
			</p>
			<p className='font-bold mb-3 text-gray-700 uppercase'>Síntomas: {''}
				<span className='font-normal normal-case'>
					{paciente?.sintomas}
				</span>
			</p>

			<div className='flex justify-between mt-10'>
				<button
					type='button'
					className='py-2 px-10 bg-yellow-500 hover:bg-yellow-600 text-white font-bold
uppercase rounded-lg'
				>Editar
				</button>
				<button
					type='button'
					className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold
			uppercase rounded-lg'
				>Eliminar
				</button>
			</div>

		</li>
	);
};

Patient.propTypes = {
	paciente: PropTypes.object.isRequired
};

export default Patient;
