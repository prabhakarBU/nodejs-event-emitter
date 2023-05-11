class DatabaseService {
    save(email) {
        console.log(`Running query: INSERT INTO orders VALUES (email, price, created) VALUES (${email}`);
    }
}

module.exports = DatabaseService