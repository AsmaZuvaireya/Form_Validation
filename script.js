 function name_check(event) {

     var k = event.keyCode;
     return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || (k >= 48 && k <= 57));
 }

 function nam() {
     var reg = /^([A-Za-z0-9])$/;
     x = document.getElementById("names").value;

     if (reg.test(x) == true) {

         document.getElementById("nam").innerHTML = "invalid name";
         document.getElementById("nam").style.color = "red";
     } else {
         document.getElementById("nam").innerHTML = "valid name";
         document.getElementById("nam").style.color = "green";
     }

 }


 function email_check() {


     var x, text;
     x = document.getElementById("emailid").value;
     var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
     if (reg.test(x) == false) {

         document.getElementById("mail").innerHTML = "invalid emailid";
         document.getElementById("mail").style.color = "red";
     } else {
         document.getElementById("mail").innerHTML = "valid emailid";
         document.getElementById("mail").style.color = "green";
     }
 }



 function age_check(event) {

     var k = event.keyCode;
     return (k >= 48 && k <= 57);
 }


 function agesss() {

     var x;
     x = document.getElementById("age").value;


     if (x < 1 || x > 26) {
         document.getElementById("ag").innerHTML = "invalid age";
         document.getElementById("ag").style.color = "red";

     } else {
         document.getElementById("ag").innerHTML = "valid age";
         document.getElementById("ag").style.color = "green";
     }

 }

var txt="";
function getcheckedvalue(event)
{   

var x=event.target;    
      if(x.checked)
      {
        txt=txt+x.value;
        
      }

   return '';
}


 function location() {
     
     populateCountries("country", "state");


 }


 function mob_num(event) {

     var k = event.keyCode;
     return (k >= 48 && k <= 57);

 }


 function showInput() {


     name_check(event);
     nam();
     email_check();
     email_check();
     age_check(event);
     agesss();
    getcheckedvalue(event);
     mob_num(event);
    

     document.getElementById("name_display").innerHTML =
         document.getElementById("names").value;

     document.getElementById("emailid_display").innerHTML =
         document.getElementById("emailid").value;

     document.getElementById("dob_display").innerHTML =
         document.getElementById("dob").value;

     document.getElementById("age_display").innerHTML =
         document.getElementById("age").value;


        document.getElementById("lng1_display").innerHTML =txt;

     document.getElementById("country_display").innerHTML =
         document.getElementById("country").value;


     document.getElementById("state_display").innerHTML =
         document.getElementById("state").value;

     document.getElementById("mobilenum_display").innerHTML =
         document.getElementById("mobilenum").value;

         document.getElementById("table1").style.display="block";
        var new_row = "<tr><td>" + name + "</td><td>" + email + "</td><td>" + dob + "</td><td>" + age + "</td><td>" + language_Known + "</td><td>" + country + "</td><td>" + state + "</td><td>" + mobile_number + "</td></tr>";
        var div = document.getElementById('table1');
        div.innerHTML = div.innerHTML + new_row;
        return false;

 }
