const mssql = require('mssql');

// ici création d'une methode qui permet d ouvrire la connection a la DB

    // sur la doc pour la connection avec mssql
    const sqlConfig = {
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        server: process.env.DB_SERVER,
        options: {
            // Permets d indiquer comme quoi le server est en train de tourner !
            trustServerCertificate: true,

        }

    };
    // création d un objet (db)pour pouvoir la réutiliser et await dit quelle est async!
const getDbConnection = async ()=>{
    const db = await mssql.connect(sqlConfig);
    return db

}
    // et on renvoie la db pour l objet !

// Methodes pour tester la connection 
const testDbConnection = async () => {

    try {
        const db = await getDbConnection();

        db.close();
        console.log('***Connection Réussie !***');
        return true;
    } catch (error) {
        console.log('***Fucking Connection***');
        console.error(error);
        return false;
    }

};

module.exports = {

    getDbConnection,
    testDbConnection

};  