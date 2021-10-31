const $heart = window.document.querySelector('.-heart');

$heart.addEventListener('click', handleClick);

function handleClick() {
$heart.classList.toggle("-active");
}

//  if ($heart.classList.contains('-active')) {
//   $heart.classList.remove('-active');
// }
// else
// $heart.classList.add('-active');