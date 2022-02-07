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

  // function SubmitButton() {
  //   if (values) {
  //     return (
  //       <button className="button" type="submit">
  //         {status}
  //       </button>
  //     );
  //   } else {
  //     return (
  //       <button type="button" disabled>
  //         {status}
  //       </button>
  //     );
  //   }
  // }

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

    await response.json()
      
      setStatus("Submit");
      setValues({
        name: "",
        email: "",
        message: "",
      });
    // alert(result.status);
  };
  
  return {
    handleInputChange,
    status,
    values,
    handleFormSubmit,
    errors,
    validateInfo,
   
    // SubmitButton,
  };
};
export default useForm;
