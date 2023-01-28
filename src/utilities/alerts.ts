import Swal from "sweetalert2";

function alertInvalidInfo(text = 'Invalid info') {
  Swal.fire({
    icon: 'warning',
    title: text,
    confirmButtonColor: '#08f',
    iconColor: '#c10',
    timer: 3000,
  });
}

function alertActionSuccess(text = 'Action success') {
  Swal.fire({
    icon: 'success',
    title: text,
    confirmButtonColor: '#08f',
    timer: 3000,
  });
}

export { alertInvalidInfo, alertActionSuccess };