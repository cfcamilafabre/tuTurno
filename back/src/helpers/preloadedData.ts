import { AppDataSource } from "../config/data-source"
import { User } from "../entities/User";

const user1 = {
    id: 1,
    name: "Camila",
    email: "camila@mail.com",
    birthdate: new Date,
    nDni: "4754833984"
}

const user2 = {
    id: 2,
    name: "Juan",
    email: "juan@mail.com",
    birthdate: new Date,
    nDni: "4739548584"
}

export const LoadData = async () => {
    await AppDataSource.manager.transaction(
        async (transactionalEntityManager) => {

            const usersDB = await AppDataSource.getRepository(User).find()
            if (usersDB.length > 0) {
                return console.log('Ya existen datos en la DB')
            }

            const newUser1 = await AppDataSource.getRepository(User).create(user1)
            const newuser2 = await AppDataSource.getRepository(User).create(user2)

            await transactionalEntityManager.save(newUser1)
            await transactionalEntityManager.save(newuser2)

        }
    );
};