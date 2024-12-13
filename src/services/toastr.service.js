import Swal from 'sweetalert2';

const toastr = (icon, title) => {
    Swal.fire({
        toast: true,
        position: 'top',
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
    });
};

export default toastr;
