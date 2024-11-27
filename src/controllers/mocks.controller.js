import { generateMockDataService } from '../services/mocks.service.js';

export const generateMockData = async (req, res) => {
  const { users, pets } = req.body;

  // Validación de parámetros
  if (!users || !pets || isNaN(users) || isNaN(pets) || users <= 0 || pets <= 0) {
    return res.status(400).json({ error: 'Se deben indicar valores válidos y positivos para usuarios y mascotas.' });
  }

  try {
    // Llama al servicio para generar y guardar los datos
    await generateMockDataService(users, pets);
    res.json({ message: `Datos generados: ${users} usuarios y ${pets} mascotas.` });
  } catch (error) {
    console.error('Error al generar los datos:', error); // Para depuración
    res.status(500).json({ error: 'Error al generar los datos.', details: error.message });
  }
};
