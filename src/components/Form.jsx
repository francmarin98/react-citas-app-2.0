const Form = () => {
	return (<div className='md:w-1/2 lg:w-2/5'>
		<h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
		<p className='text-lg mt-3 mb-5 text-center'>
			Añade pacientes y {' '}
			<span className='text-indigo-600 font-bold'>administralos</span>
		</p>

		<form className='form'>

			<div className='form-control'>
				<label htmlFor='nombre-mascota' className='label-control'>
					Nombre de la Mascota
				</label>
				<input type='text'
							 id='nombre-mascota'
							 placeholder='Nombre de la mascota'
							 className='input-control' />
			</div>

			<div className='form-control'>
				<label htmlFor='nombre-propietario' className='label-control'>
					Nombre del propietario
				</label>
				<input type='text'
							 id='nombre-propietario'
							 placeholder='Nombre del propietario'
							 className='input-control' />
			</div>

			<div className='form-control'>
				<label htmlFor='email' className='label-control'>
					Email de contacto
				</label>
				<input id='email'
							 type='email'
							 placeholder='Nombre de la mascota'
							 className='input-control' />
			</div>

			<div className='form-control'>
				<label htmlFor='alta' className='label-control'>
					Alta
				</label>
				<input id='alta' type='date' className='input-control' />
			</div>

			<div className='form-control'>
				<label htmlFor='sintomas' className='label-control'>
					Síntomas
				</label>
				<textarea
					id='sintomas'
					placeholder='Describe los síntomas'
					className='input-control'
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
