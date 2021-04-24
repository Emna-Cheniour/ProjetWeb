let inputForm=document.querySelectorAll('input');
inputForm.forEach(element=>{
    element.addEventListener('input',()=>{
        element.style.backgroundColor="#5fc2ba28";
    });
});
inputForm.forEach(element=>{
    element.addEventListener('blur',()=>{
        element.style.backgroundColor="white";
    });
});
let form=document.querySelector(".formDon");
let formPay=document.querySelector(".formPay");
formPay.parentNode.removeChild(formPay);
let boutonArgent =document.querySelector(".donArg");
let boutonProd =document.querySelector(".donProd");
boutonProd.addEventListener('click',()=>{
    form.parentNode.replaceChild(formPay,form);
})
boutonArgent.addEventListener('click',()=>{
    formPay.parentNode.replaceChild(form,formPay);
})


/*
const onglets= document.querySelectorAll('.dons');
const contenu =document.querySelectorAll('.contenu');
let i=0;
onglets.forEach(onglet => {
    onglet.addEventListener('click',()=>{
        if(onglet.classList.contains('active')){
            return;
        }else{
            onglet.classList.add('active');
        }
        i=onglet.getAttribute('data-anim');
        for(j=0; j<onglet.clientHeight; j++){
            if (onglet[j].getAttribute('data-anim')!=index){
                onglets[j].classList.remove('active');
            }
        }
        for(k=0;k<contenu.length;k++){
            if (contenu[k].getAttribute('data-anim')==index){
                contenu[k].classList.add('activeContenu');
            }else{
                contenu[k].classList.remove('activeContenu');
            }
        }
    })
});*/