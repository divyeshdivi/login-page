function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="Divyesh"&& password=="Divi")
{
    alert("login succesfully");
    return false;

}
else
{
    alert("login failed");
}


}
