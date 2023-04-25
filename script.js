const btn = document.querySelector('#envio')

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

btn.addEventListener("click", function(e){
    e.preventDefault();
    const valueEma = document.querySelector('#email');
    const email = valueEma.value;

    const valueSnh = document.querySelector('#senha');
    const senha = valueSnh.value;
   

    if (email != 'admin'){
        
        const toast = new bootstrap.Toast(toastLiveExample)

        toast.show()
    }
    if (senha != 'admin'){
        const toast = new bootstrap.Toast(toastLiveExample)

        toast.show()
    }
});