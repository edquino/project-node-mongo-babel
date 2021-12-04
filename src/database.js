import  { connect }  from "mongoose";

//La base de datos se crea por defecto.
(async() => {
    try {
        const db = await connect("mongodb://localhost/task");
        console.log('DB connected to', db.connection.name);        
    } catch (error) {
        console.error(error);
    }
})();
