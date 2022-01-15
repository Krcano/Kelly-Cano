import { useState } from "react";

const useForm = (validateInfo) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,

      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrors(validateInfo(values));
  };
  return { handleInputChange, values, handleFormSubmit, errors, validateInfo };
};
export default useForm;
