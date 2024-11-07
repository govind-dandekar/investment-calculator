function InputField({labelText, ...props}){
	return (
		<span>
			<label>{labelText}</label>
			<input {...props}></input>
		</span>
	)
}

export default InputField;