const menuButton=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav");
menuButton.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuButton.setAttribute("aria-expanded",String(open));});
nav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{nav.classList.remove("open");menuButton.setAttribute("aria-expanded","false");}));
document.getElementById("year").textContent=new Date().getFullYear();
document.getElementById("send-whatsapp").addEventListener("click",()=>{
  const business=document.getElementById("business").value.trim()||"Not provided";
  const type=document.getElementById("type").value;
  const needs=document.getElementById("needs").value.trim()||"Not provided";
  const brief="Hello Webwala Studio!\n\nBusiness: "+business+"\nBusiness type: "+type+"\nWebsite needs: "+needs+"\n\nPlease contact me about a website project.";
  window.location.href="https://wa.me/919561954073?text="+encodeURIComponent(brief);
});