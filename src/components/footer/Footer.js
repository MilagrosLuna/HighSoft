import "./Footer.css";

export default function Footer() {
    return (
        <div class="footer">
        <div class="group-one">
          <div class="box-footer">
            <figure>
              {/* <a href="#">
                <img
                  src="img/logoW.png"
                  class="logo"
                  alt="Logo highsoft banking"
                />
              </a> */}
            </figure>
          </div>
          <div class="box-footer">
            <h2>SOBRE NOSOTROS</h2>
            <p>
              HighSoft Banking se fundó en el año 2023 con la visión de
              proporcionar soluciones financieras innovadoras y accesibles para
              todos.
            </p>
            <p>
              Nuestra misión en HighSoft Banking es ser el socio financiero
              confiable para nuestros clientes. Buscamos empoderar a las personas
              con soluciones financieras personalizadas y tecnología de vanguardia
              para lograr sus metas económicas.
            </p>
          </div>
          {/* <div class="box-footer">
            <h2>SIGUENOS</h2>
            <div class="red-social">
              <a
                href="https://www.facebook.com/itbauniversidad/?locale=es_LA"
                target="_blank"
                class="fa fa-facebook"
              ></a>
              <a
                href="https://www.instagram.com/itbauniversidad/"
                target="_blank"
                class="fa fa-instagram"
              ></a>
              <a
                href="https://twitter.com/i/flow/login?redirect_after_login=%2FITBA"
                target="_blank"
                class="fa fa-twitter"
              ></a>
              <a
                href="https://www.youtube.com/channel/UCk7TR5Oxi3h63uzCpG3rC6w"
                target="_blank"
                class="fa fa-youtube"
              ></a>
            </div>
          </div> */}
        </div>
        <div class="group-two">
          <small>
            &copy; 2023 <b>HighSoft banking</b>. Todos los derechos reservados.
          </small>
        </div>
      </div>
    );
  }
  