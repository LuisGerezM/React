import Swal from 'sweetalert2';

export const userConfirm = text => {
  return Swal.fire({
    title: text || 'Confirmar acción',
    showCancelButton: true,
    cancelButtonColor: '#FE1155',
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Confirmar',
    confirmButtonColor: '#8598C9',
    icon: 'question',
  }).then(result => {
    if (result.isConfirmed) return true;
  });
};
