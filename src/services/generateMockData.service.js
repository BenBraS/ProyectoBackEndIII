import { generateUsers, generatePets } from '../services/mocks.service.js'; 
import { usersService } from '../services/index.js';
import { petsService } from '../services/index.js';

export const generateMockDataService = async (userCount, petCount) => {
  try {
    // Generar usuarios y mascotas
    const users = await generateUsers(userCount);  // Generar usuarios usando la función del servicio
    const pets = generatePets(petCount);  // Generar mascotas usando la función del servicio

    // Guardar los usuarios y mascotas en la base de datos
    await usersService.saveMany(users);
    await petsService.saveMany(pets);
  } catch (error) {
    console.error('Error al generar los datos:', error);
    throw new Error('Error al generar los datos de mock');
  }
};
