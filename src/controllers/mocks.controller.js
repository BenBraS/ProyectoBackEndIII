import { generateMockDataService } from '../services/mocks.service.js';

export const generateMockData = async (req, res) => {
  const { users, pets } = req.body;

  if (!users || !pets) {
    return res.status(400).json({ error: 'Se deben indicar la cantidad de usuarios y mascotas a generar.' });
  }

  try {
    // Llama al servicio para generar y guardar los datos
    await generateMockDataService(users, pets);
    res.json({ message: `Datos generados: ${users} usuarios y ${pets} mascotas.` });
  } catch (error) {
    res.status(500).json({ error: 'Error al generar los datos.', details: error.message });
  }
};