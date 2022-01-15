// export function validateEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
//   }
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
