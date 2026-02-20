function toggleNav(){document.getElementById('links').classList.toggle('open');}
document.getElementById('y').textContent=new Date().getFullYear();
function submitForm(formId){
  const form=document.getElementById(formId);
  const data=Object.fromEntries(new FormData(form).entries());
  alert('Form captured (demo). Connect this form to your CRM/email backend.\n\n'+JSON.stringify(data,null,2));
}
