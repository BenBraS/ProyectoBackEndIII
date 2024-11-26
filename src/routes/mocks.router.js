import express from 'express';
import { generateMockData } from '../controllers/mocks.controller.js';  //Para router generateData
import { generateUsers, generatePets } from '../services/mocks.service.js'; // para router GET
const router = express.Router();

// Para generar mascotas
router.get('/mockingpets', (req, res) => {
  const pets = generatePets(10);  // Genera 10 mascotas por defecto
  res.json(pets);
});

// Para generar usuarios
router.get('/mockingusers', async (req, res) => {
  const users = await generateUsers(50);  // Genera 50 usuarios por defecto
  res.json(users);
});

// POST para generar y guardar usuarios y mascotas en la base de datos
router.post('/generateData', generateMockData); 

export default router;
