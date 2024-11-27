import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';
import { usersService } from '../services/index.js';  
import { petsService } from '../services/index.js';  

// Función para generar usuarios
export const generateUsers = async (count) => {
  const users = [];

  for (let i = 0; i < count; i++) {
    const role = Math.random() > 0.5 ? 'admin' : 'user'; 

    // Contraseña encriptada
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

// Función para generar mascotas
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

// Servicio para generar y guardar datos (usuarios y mascotas) en la base de datos
export const generateMockDataService = async (userCount, petCount) => {
  try {
    // Generar usuarios y mascotas
    const users = await generateUsers(userCount); 
    const pets = generatePets(petCount); 

    // Guardar los usuarios y mascotas en la base de datos
    await usersService.saveMany(users);
    await petsService.saveMany(pets);
  } catch (error) {
    console.error('Error al generar los datos:', error);
    throw new Error('Error al generar los datos de mock');
  }
};
