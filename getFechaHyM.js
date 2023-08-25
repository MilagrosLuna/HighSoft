// funcion para conseguir la fecha actual
function getFechaHyM (){
  const fecha = new Date();
  const fechaFormateada = fecha.toLocaleDateString();
  return (fechaFormateada);
};
