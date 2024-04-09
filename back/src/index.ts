import server from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";
import { LoadData } from "./helpers/preloadedData";

AppDataSource.initialize().then((res) => {
    console.log("Conexión a la base de datos realizada con éxito");
    LoadData().then(() => {
        server.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    });
});
