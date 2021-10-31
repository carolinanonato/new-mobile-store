let initialvalue = 10;
const $second = document.querySelector('.-second');


$second.addEventListener('click', handleClick); 

function handleClick() {
    const $cart = document.querySelector('.-last');
    
   $cart.textContent = `Cart (${++initialvalue})`;

}
