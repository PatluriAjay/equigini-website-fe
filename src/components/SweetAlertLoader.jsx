import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const SweetAlertLoader = ({ 
  text = "", 
  size = "default",
  className = "",
  showBackground = true 
}) => {
  useEffect(() => {
    // Show SweetAlert loading
    Swal.fire({
      title: text,
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false,
      background: 'transparent',
      backdrop: 'rgba(0,0,0,0.3)',
      didOpen: () => {
        Swal.showLoading();
        // Change loading color to primary color
        const loadingElement = document.querySelector('.swal2-loader');
        if (loadingElement) {
          loadingElement.style.borderColor = '#A330AE';
          loadingElement.style.borderTopColor = 'transparent';
        }
      },
    });

    // Cleanup function to close SweetAlert when component unmounts
    return () => {
      Swal.close();
    };
  }, [text]);

  // Return null since SweetAlert handles the UI
  return null;
};

export default SweetAlertLoader; 