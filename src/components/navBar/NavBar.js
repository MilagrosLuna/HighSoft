export default function NavBar() {
  return (
    <div class="container">
      <div class="sidebar" id="sidebar">
        <button class="btnSideBar" id="inicioShow">
          Inicio
        </button>
        <button id="transferShow" class="btnSideBar">
          Transferencias
        </button>
        <button id="historialMovimientosShow" class="btnSideBar">
          Movimientos
        </button>
        <button class="btnSideBar" id="cambioDivisasBtn">
          Cambio divisas
        </button>
        <button id="loanSectionBtn" class="btnSideBar">
          Préstamos
        </button>
        <button id="payServicesBtn" class="btnSideBar">
          Pagos
        </button>
        <button class="btn-logOut" id="btn-logOut">
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}
