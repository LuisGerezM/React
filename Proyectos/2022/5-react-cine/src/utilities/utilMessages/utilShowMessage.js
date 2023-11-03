import Swal from "sweetalert2";

export const utilShowMessage = ({ title, text }) =>
  Swal.fire({
    title: `${title}`,
    text: `${text}`,
    icon: "error",
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
