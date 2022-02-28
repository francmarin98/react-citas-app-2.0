const Patient = () => {
	return (
		<li className='mx-5 mb-3 bg-white shadow-md px-5 py-10 rounded-xl'>
			<p className='font-bold mb-3 text-gray-700 uppercase'>Mascota: {''}
				<span className='font-normal normal-case'>Hook</span>
			</p>
			<p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {''}
				<span className='font-normal normal-case'>Francisco</span>
			</p>
			<p className='font-bold mb-3 text-gray-700 uppercase'>Email: {''}
				<span className='font-normal normal-case'>francisco@test.com</span>
			</p>
			<p className='font-bold mb-3 text-gray-700 uppercase'>Fecha alta: {''}
				<span className='font-normal normal-case'>27-02-2022</span>
			</p>
			<p className='font-bold mb-3 text-gray-700 uppercase'>Síntomas: {''}
				<span className='font-normal normal-case'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium consectetur cumque dignissimos ea, illum, ipsa itaque labore modi nisi nostrum possimus, quis quisquam veniam voluptatum! Dolore error perspiciatis quia.</span>
			</p>
		</li>
	);
};

export default Patient;
