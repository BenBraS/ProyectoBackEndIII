
import GenericRepository from "./GenericRepository.js";

export default class UserRepository extends GenericRepository{
    constructor(dao){
        super(dao);
    }
    
    getUserByEmail = (email) =>{
        return this.getBy({email});
    }
    getUserById = (id) =>{
        return this.getBy({_id:id})
    }
    async saveMany(data) {
        return await this.dao.insertMany(data);  // Usamos el DAO para guardar múltiples usuarios
      }
    
}