import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(4),
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  link: {
    marginTop: theme.spacing(2),
  },
}));

function Login({ onLogin }) {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Aquí debes realizar la lógica de autenticación, por ejemplo, hacer una solicitud a un servidor.
    // Si la autenticación es exitosa, puedes llamar a `onLogin` con `true`, de lo contrario, con `false`.
    const isAuthenticated = true; // Reemplaza esto con tu lógica de autenticación real
    onLogin(isAuthenticated);
  };

  return (
    <Container component="div" maxWidth="xs" className={classes.container}>
      <Typography variant="h4" gutterBottom>
        Iniciar sesión
      </Typography>
      <form className={classes.form}>
        <TextField
          label="Nombre de usuario"
          variant="outlined"
          className={classes.textField}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
        />
        <TextField
          label="Contraseña"
          type="password"
          variant="outlined"
          className={classes.textField}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        />
        <Button
          variant="contained"
          className={classes.button}
          onClick={handleLogin}
          fullWidth
        >
          Iniciar sesión
        </Button>
        <div className={classes.link}>
          <Link to="/register">Registrarme</Link>
        </div>
        <Typography variant="body2" color="textSecondary">
          ¿Olvidaste tu contraseña?
        </Typography>
      </form>
    </Container>
  );
}

export default Login;
