function toggleNav(){
  const open=document.getElementById('links').classList.toggle('open');
  document.querySelector('.toggle')?.setAttribute('aria-expanded',String(open));
}
const year=document.getElementById('y');
if(year) year.textContent=new Date().getFullYear();
document.addEventListener('keydown',event=>{
  if(event.key==='Escape' && document.getElementById('links')?.classList.contains('open')){
    toggleNav();document.querySelector('.toggle')?.focus();
  }
});
document.querySelectorAll('#links a').forEach(link=>{
  if(link.pathname===location.pathname) link.setAttribute('aria-current','page');
});
document.querySelectorAll('form[data-inquiry]').forEach(form=>{
  form.addEventListener('submit',async event=>{
    event.preventDefault();
    if(form.dataset.pending==='true' || !form.reportValidity()) return;
    const status=form.querySelector('.form-status');
    const button=form.querySelector('[type="submit"]');
    const body=new FormData(form);
    if(!['https://formspree.io/f/mkozdqyg','https://formspree.io/f/xojlgkyg'].includes(form.action)) return;
    form.dataset.pending='true';button.disabled=true;form.setAttribute('aria-busy','true');
    status.dataset.state='pending';status.textContent='Sending your inquiry…';
    const controller=new AbortController();
    const timer=setTimeout(()=>controller.abort(),20000);
    try{
      const response=await fetch(form.action,{method:'POST',body,headers:{Accept:'application/json'},signal:controller.signal});
      const result=await response.json();
      if(!response.ok || result.ok!==true) throw new Error('Receipt not confirmed');
      status.dataset.state='success';
      status.textContent='Your inquiry was accepted by our form service. Our team will review it and contact you. This does not confirm an order or grant document access.';
      form.reset();
    }catch(error){
      status.dataset.state='error';
      status.textContent='We could not confirm receipt. Your entries are still here. Please retry or email info@superiorlinkng.com. After a timeout, check before resending to avoid a duplicate.';
    }finally{
      clearTimeout(timer);form.dataset.pending='false';form.removeAttribute('aria-busy');button.disabled=false;
    }
  });
});
