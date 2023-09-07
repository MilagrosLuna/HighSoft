// data.js
const users = [
    { id: 1, username: 'usuario1', password: 'contrasena1' },
    { id: 2, username: 'usuario2', password: 'contrasena2' },
    // Agrega más usuarios según sea necesario
  ];
  
  function authenticateUser(username, password) {
    const user = users.find((u) => u.username === username && u.password === password);
    return user;
  }
  
  function addUser(username, password) {
    // Verifica si el usuario ya existe
    const existingUser = users.find((u) => u.username === username);
    if (existingUser) {
      return false; // El usuario ya existe, no se puede agregar
    } else {
      // Crea un nuevo usuario y lo agrega al arreglo
      const newUser = { id: users.length + 1, username, password };
      users.push(newUser);
      return true; // Usuario agregado con éxito
    }
  }
  
  export { authenticateUser, addUser };
  