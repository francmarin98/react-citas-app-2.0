import PropTypes from 'prop-types';
import Patient from './Patient';

const PatientsList = ({ listaPacientes }) => {
	return (
		<div className='flex-1 h-screen overflow-y-scroll'>
			{(listaPacientes && listaPacientes.length) ? (
				<>
					<h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
					<p className='text-lg mt-3 mb-5 text-center'>
						Administra tus {' '}
						<span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
					</p>
					<ul>
						{
							listaPacientes.map((paciente) => {
								paciente.id = new Date().getTime();
								return <Patient key={paciente.id} paciente={paciente} />;
							})
						}
					</ul>
				</>
			) : (
				<>
					<h2 className='font-black text-3xl text-center'>No hay Pacientes</h2>
					<p className='text-lg mt-3 mb-5 text-center'>
						Comienza agregando pacientes {' '}
						<span className='text-indigo-600 font-bold'> y aparecerán en este lugar</span>
					</p>
				</>
			)};
		</div>
	);
};

PatientsList.propTypes = {
	listaPacientes: PropTypes.array.isRequired
};

export default PatientsList;
