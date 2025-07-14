"use client";
import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

export default function PageLoader({ isLoading }) {
  useEffect(() => {
    if (isLoading) {
      // Show SweetAlert loading for page transitions
      Swal.fire({
        title: "",
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
    } else {
      // Close SweetAlert when loading is complete
      Swal.close();
    }

    // Cleanup function to close SweetAlert when component unmounts
    return () => {
      if (isLoading) {
        Swal.close();
      }
    };
  }, [isLoading]);

  // Return null since SweetAlert handles the UI
  return null;
} 