import { useState } from 'react';

const useForm = (initialState) => {

	const [formState, setFormState] = useState(initialState);

	const handleInputChange = (e) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value
		});
	};

	const resetFormState = () => {
		setFormState(initialState);
	};

	return {
		handleInputChange,
		resetFormState,
		formState
	};
};

export default useForm;
