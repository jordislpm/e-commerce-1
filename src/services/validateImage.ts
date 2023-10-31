export function validateImage(url: string) {
    return new Promise((resolve, reject) => {
        const img = new Image();
    
        img.onload = function () {
          resolve(true); // La imagen se cargó con éxito
        };
    
        img.onerror = function () {
          resolve(false); // La imagen no se cargó con éxito
        };
    
        img.src = url;
      });
  }
