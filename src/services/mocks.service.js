import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';

// Función para generar usuarios
export const generateUsers = async (count) => {
  const users = [];

  for (let i = 0; i < count; i++) {
    const role = Math.random() > 0.5 ? 'admin' : 'user'; 
    
    // Genera la contraseña encriptada
    const passwordHash = await bcrypt.hash('coder123', 10);

    users.push({
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      password: passwordHash,
      role: role,
      pets: [] 
    });
  }

  return users;
};


export const generatePets = (count) => {
  const pets = [];

  for (let i = 0; i < count; i++) {
    pets.push({
      name: faker.animal.dog(),
      breed: faker.animal.type(),
      age: Math.floor(Math.random() * 15),  // Edad aleatoria entre 0 y 14
    });
  }

  return pets;
};
