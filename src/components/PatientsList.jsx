import Patient from './Patient';

const PatientsList = () => {
	return (
		<div className='flex-1 h-screen overflow-y-scroll'>
			<h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
			<p className='text-lg mt-3 mb-5 text-center'>
				Administra tus {' '}
				<span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
			</p>
			<ul>
				<Patient />
				<Patient />
				<Patient />
				<Patient />
				<Patient />
				<Patient />
				<Patient />
			</ul>
		</div>
	);
};

export default PatientsList;
