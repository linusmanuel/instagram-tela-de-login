export const loginForm = document.forms['login-form']
export const facebookBtn = document.querySelector(
  '[data-id="signup-facebook"]'
)

export const getFieldsValues = (form, fields) =>
  fields.map(field => form[field].value)
