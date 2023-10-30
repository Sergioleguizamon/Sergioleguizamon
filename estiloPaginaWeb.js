  const bienvenido = document.getElementById("bienvenido");
 const Login = document.getElementById("Login");
 const ltaDeErrores = document.getElementById("ltaDeErrores");

 function validar(){
   let f_Nombre = document.getElementById("f_Nombre");
   let nombre = f_Nombre.value.trim();   
   let f_Email = document.getElementById("f_Email");
   let email = f_Email.value.trim();
   let f_Password = document.getElementById("f_Password");
   let password = f_Password.value.trim();
   let error = [];
   let erroresDeCampos = null;

   let formulario = document.getElementById("formulario");

   if(nombre == ""){
     error.push("no pude estar sin nombre");
     erroresDeCampos = f_Nombre;
     f_Nombre.classList.add("error");
   }

   if(email == ""){
     error.push("no debe estar sin email");
     erroresDeCampos = f_Email;
     f_Email.classList.add("error");
   }

   if(password == ""){
   	error.push("no pude estar sin password");
   	erroresDeCampos = f_Password;
   	f_Password.classList.add("error");                                              
   }
   ltaDeErrores.innerHTML="";
    if(error.length > 0){
     for (let i = 0; i<error.length;i++) {
   	let li = document.createElement("li");
   	li.innerHTML = error[i];
   	ltaDeErrores.appendChild(li);
   }
   if(erroresDeCampos!=null){
    erroresDeCampos.focus();
   }
   return false;
    }
      let mje = `ya ingreso ${nombre}  email ${email} password ${password}`;
  bienvenido.innerHTML = mje;
  return false
 }
 

  
  
 