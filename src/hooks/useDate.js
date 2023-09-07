// Custom hook para obtener la fecha actual

export const useDate = () => {
  const getDate = () => {
    const fecha = new Date();
    const fechaFormateada = fecha.toLocaleDateString();
    return fechaFormateada;
  };

  return { getDate };
};
