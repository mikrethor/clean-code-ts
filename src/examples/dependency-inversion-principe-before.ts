class MySQLDatabase {
    connect() {
        console.log("Connexion à MySQL");
    }
}

class Application {
    private db = new MySQLDatabase();
}