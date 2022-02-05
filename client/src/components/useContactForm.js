import { useState } from "react";

const useForm = (validateInfo) => {
  const [status, setStatus] = useState("Submit");

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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setErrors(validateInfo(values));
    setStatus("Sending...");

    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
    setValues({
      name: "",
      email: "",
      message: "",
    })
  };
  return {
    handleInputChange,
    status,
    values,
    handleFormSubmit,
    errors,
    validateInfo,
  };
};
export default useForm;