'use strict';
const AuthForm = ({onAuth}) => {
  let nameField, emailField, passwordField;
  
  const handleAuth = (event) => {
    event.preventDefault();
    if(!onAuth) {
      return null;
    }
    
    let userData = {
      name: nameField.value,
      email: emailField.value,
      password: passwordField.value
    }
    
    onAuth(userData);
  }

  function checkEmail(event) {
        event.currentTarget.value = event.currentTarget.value.replace(/[^\w@\.-]+/gi, "")
  }
    
  function checkPassword(event) {
        event.currentTarget.value = event.currentTarget.value.replace(/[^\w]+/gi, "")
  }
  
  return (
  <form className="ModalForm" action="/404/auth/" method="POST" onSubmit={handleAuth}>
  <div className="Input">
    <input required type="text" placeholder="Имя" name="name" ref={element => nameField = element}/>
    <label></label>
  </div>
  <div className="Input">
    <input type="email" placeholder="Электронная почта" name="email" ref={element => emailField = element}/>
    <label></label>
  </div>
  <div className="Input">
    <input required type="password" placeholder="Пароль" name="password" ref={element => passwordField = element}/>
    <label></label>
  </div>
  <button type="submit">
    <span>Войти</span>
    <i className="fa fa-fw fa-chevron-right"></i>
     </button>
</form>
  )
}
