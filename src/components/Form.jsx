import useForm from '../hooks/useForm';

const Form = () => {
	const { handleInputChange, resetFormState, formState } = useForm({
		nombreMascota: '',
		nombrePropietario: '',
		email: '',
		fechaAlta: '',
		sintomas: ''
	});

	const {
		nombreMascota, email, nombrePropietario, fechaAlta, sintomas
	} = formState;

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formState);
		resetFormState();
	};

	return (
		<div className='md:w-1/2 lg:w-2/5 mb-7 mx-5'>
			<h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
			<p className='text-lg mt-3 mb-5 text-center'>
				Añade pacientes y {' '}
				<span className='text-indigo-600 font-bold'>administralos</span>
			</p>

			<form className='form' onSubmit={handleSubmit}>

				<div className='form-control'>
					<label htmlFor='nombre-mascota' className='label-control'>
						Nombre de la Mascota
					</label>
					<input type='text'
								 id='nombre-mascota'
								 placeholder='Nombre de la mascota'
								 className='input-control'
								 name='nombreMascota'
								 value={nombreMascota}
								 onChange={handleInputChange}
					/>
				</div>

				<div className='form-control'>
					<label htmlFor='nombre-propietario' className='label-control'>
						Nombre del propietario
					</label>
					<input type='text'
								 id='nombre-propietario'
								 placeholder='Nombre del propietario'
								 className='input-control'
								 name='nombrePropietario'
								 value={nombrePropietario}
								 onChange={handleInputChange}
					/>
				</div>

				<div className='form-control'>
					<label htmlFor='email' className='label-control'>
						Email de contacto
					</label>
					<input id='email'
								 type='email'
								 placeholder='Nombre de la mascota'
								 className='input-control'
								 name='email'
								 value={email}
								 onChange={handleInputChange}
					/>
				</div>

				<div className='form-control'>
					<label htmlFor='alta' className='label-control'>
						Alta
					</label>
					<input id='alta'
								 type='date'
								 className='input-control'
								 name='fechaAlta'
								 value={fechaAlta}
								 onChange={handleInputChange}
					/>
				</div>

				<div className='form-control'>
					<label htmlFor='sintomas' className='label-control'>
						Síntomas
					</label>
					<textarea
						id='sintomas'
						placeholder='Describe los síntomas'
						className='input-control'
						name='sintomas'
						value={sintomas}
						onChange={handleInputChange}
					/>
				</div>

				<input
					type='submit'
					className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all'
					value='Agregar Paciente'
				/>

			</form>
		</div>);
};

export default Form;
