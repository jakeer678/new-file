const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) =>{
document.querySelector('#my-form').style.color = 'red'

});

btn.addEventListener('mouseover', (e) =>{
    document.querySelector('#my-form').style.color = 'red'
    
    });

    btn.addEventListener('mouseout', (e) =>{
        document.querySelector('#my-form').style.color = 'red'
        
        });


 const myForm = document.querySelector('#my-form');
 const emailInput = document.querySelector('#email');
 const passwordInput = document.querySelector('#password')   
 const usersInput = document.querySelector('#users') 
 const msgInput = document.querySelector('.msg') 


 myForm.addEventListener('submit', onSubmit);

 function onSubmit (e) {
    e.preventDefault() 

    if(emailInput.value==='' || passwordInput.value==='') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(()=> msg.remove(), 3000);
    } else {
        const li = document.createElement('li')
        li.appendChild.createTextNode(`${emailInput.value} : ${passwordInpu.value}`)

        userlist.appendChild(li);
        emailInput.value =""
        passwordInput.value= ""
    }


 }