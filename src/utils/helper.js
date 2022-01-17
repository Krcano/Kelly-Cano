
export default function validateInfo(values) {
  let errors = {};
  if (!values.name.trim()) {
    errors.name = "Name required";
  }
  if (!values.email) {
    errors.email = "Email required";
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
