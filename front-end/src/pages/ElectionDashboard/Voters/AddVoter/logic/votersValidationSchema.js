import * as Yup from 'yup';

const addVoterSchema = Yup.object().shape(
	{
		name: Yup.string().required('Name is a required field'),
		email: Yup.string().email('Incorrect email format').required('Email is a required field'),
		voterId: Yup.string().min(2,"Must be between 2 and 150 characters").max(150,"Must be between 2 and 150 characters").required('Id is a required field'),
		key: Yup.string().min(2,"Must be between 2 and 150 characters").max(150,"Must be between 2 and 150 characters").required('Key is a required field'),
	}
).required();

const votersSchemas = {
	addVoterSchema
};

export default votersSchemas;
