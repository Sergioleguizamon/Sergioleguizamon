 const Login = document.getElementById("Login");
 const lista = document.getElementById("lista");

 function car(){
   let f_Nombre = document.getElementById("f_Nombre");
   let Nombre = f_Nombre.value.trim();   
   let f_Email = document.getElementById("f_Email");
   let Email = f_Email.value.trim();
   let f_Password = document.getElementById("f_Password");
   let Password = f_Password.value.trim();
   let f_icr = document.getElementById("f_icr");
   let icr = f_icr.checked;
   let error = [];
   let erroresDeCampos = null;

   let  lleno = document.getElementById("lleno");
   
   for(v of lleno.querySelectorAll("input,select,div")) {
    v.classList.remove("error");
   }
   
   if(Nombre == ""){
     error.push("no pude estar sin Nombre");
     erroresDeCampos = f_Nombre;
     f_Nombre.classList.add("error");
   }

   if(Email == ""){
     error.push("no debe estar sin Email");
     erroresDeCampos = f_Email;
     f_Email.classList.add("error");
   }

   if(Password == ""){
    error.push("no pude estar sin Password");
    erroresDeCampos = f_Password;
    f_Password.classList.add("error");                                              
   }
if(!icr){
     error.push("debe llenar este formulario si o si");
     erroresDeCampos = f_icr;
     f_icr.parentNode.classList.add("error");
  }
   lista.innerHTML="";
    if(error.length > 0){
     for (let i = 0; i<error.length;i++) {
    let li = document.createElement(li);
    li.innerHTML = error[i];
    erroresDeCampos.appendChild(li);
   }
 }
   if(erroresDeCampos!=null){
    erroresDeCampos.focus();
     return false;
   }
  let mje = `ya ingreso Nombre ${Nombre}  Email ${Email} Password ${Password}`;
  let resultado = document.getElementById("resultado");
  let p = document.createElement("p")
  p.innerHTML = mje;
  resultado.appendChild(p);
  return false;
 }