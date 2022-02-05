
export default function validateInfo(values) {
  let errors = {};
  if (!values.name.trim()) {
    errors.name = "Name field is required";
  }
  if (!values.email) {
    errors.email = "Email field is required";
  } else if (
    !/^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/i.test(
      values.email
    )) {
    errors.email = "Email address is invalid";
  }
  if(!values.message){
      errors.message= "Please include a brief message"
  }
  return errors
}
