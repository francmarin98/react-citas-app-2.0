import Header from './components/Header';
import Form from './components/Form';
import PatientsList from './components/PatientsList';
import { useState } from 'react';

function App() {

	const [pacientes, setPacientes] = useState([]);

	console.log(pacientes);

	return (
		<div className='container mx-auto mt-7'>
			<Header />
			<div className={'mt-12 md:flex'}>
				<Form setPacientes={setPacientes} />
				<PatientsList listaPacientes={pacientes} />
			</div>
		</div>
	);
}

export default App;
