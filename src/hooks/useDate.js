
export const useDate = () => {

  const getDate = () => {
    const fecha = new Date();
    const fechaFormateada = fecha.toLocaleDateString();
    return fechaFormateada;
  };

  return ({getDate});
};
