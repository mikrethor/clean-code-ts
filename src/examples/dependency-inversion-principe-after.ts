interface Database {
    connect(): void;
}

class MySQLDatabase
    implements Database {
    connect() {
        console.log("Connection to MySQL");
    }
}

class Application {

    constructor(private db: Database) {
    }

}