import GenericRepository from "./GenericRepository.js";

export default class PetRepository extends GenericRepository {
    constructor(dao) {
        super(dao);
    }
    async saveMany(pets) {
        return await this.dao.insertMany(pets);  // Usamos el DAO para guardar múltiples mascotas
      }
}