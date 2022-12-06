

function Name()
{
    var element = document.getElementById("emp_id");
    element.innerText = getCookie("empName");
}

function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.value.match(validRegex))  
    {
        return false;
    } else {
  
      alert("Invalid email address!")
      return true;
    }
  }

function Validate(){
    
    var emp_name = document.getElementById("username").value;
    var Email=document.getElementById("Email");
    var Address=document.getElementById("Address").value;

    if( emp_name.length == 0 || Email.value.length==0 ||ValidateEmail(Email)|| Address.length==0)
    {
        alert("Fill Blanks");
    }
    else
    {
        setCoockie("name", emp_name, 1);
       
        location.assign("../index.html");
    }
    
}
