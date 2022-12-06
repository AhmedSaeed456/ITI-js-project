function setCoockie(cname,cvalue,months) {
    const d = new Date();
    d.setMonth(d.getMonth()+months);
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        
      if (c.indexOf(name) == 1) {
        return c.substring(name.length+1, c.length);
      }
    }
    return '';
  }

  function deleteCookie(delCname) {
      setCoockie(delCname, '', '')
      //old date
}
  
function allCookieList(cname) {
    var arrr=[]
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i+2){
        
            arrr[i]=i+1
        
    }
    console.log(arrr);
    return arrr;
    
}
  
function hasCookie(cname) {
   // console.log(getCookie(cname));
    if (!getCookie(cname)) return false
    else return true
}