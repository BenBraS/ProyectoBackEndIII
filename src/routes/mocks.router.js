import express from 'express';
import { generateUsers, generatePets } from '../services/mocks.service.js';  
import User from '../dao/models/User.js';  
import Pet from '../dao/models/Pet.js';    

const router = express.Router();

// Ruta base para generar mascotas
router.get('/mockingpets', (req, res) => {
  const pets = generatePets(10);  // Genera 10 mascotas por defecto
  res.json(pets);
});

// Ruta para generar usuarios
router.get('/mockingusers', async (req, res) => {
  const users = await generateUsers(50);  // Genera 50 usuarios por defecto
  res.json(users);
});

// Endpoint POST para generar y guardar usuarios y mascotas en la base de datos
router.post('/generateData', async (req, res) => {
  const { users, pets } = req.body;

  if (!users || !pets) {
    return res.status(400).json({ error: 'Se deben indicar la cantidad de usuarios y mascotas a generar.' });
  }

  // Generar y guardar usuarios
  const generatedUsers = await generateUsers(users);
  await User.insertMany(generatedUsers);

  // Generar y guardar mascotas
  const generatedPets = generatePets(pets);
  await Pet.insertMany(generatedPets);

  res.json({ message: `Datos generados: ${users} usuarios y ${pets} mascotas.` });
});

export default router;
