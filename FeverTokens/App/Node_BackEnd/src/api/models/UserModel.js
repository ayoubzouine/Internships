const fs = require('fs');
const path = require('path');

const filePath = path.join("__dirname", '../../users.json');

class UserModel {

    static async addUser(user) {
        console.log("the user", user)
        console.log(__dirname)
        try {
            const users = await this.getUsers();
            users.push(user);
            await this.saveUsers(users);
            return true;
        } catch (error) {
            console.error('Error adding user:', error);
            return false;
        }
    }

    static getUsers() {
        return new Promise((resolve, reject) => {
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    if (err.code === 'ENOENT') {
                        // File doesn't exist yet, return an empty array
                        resolve([]);
                    } else {
                        reject(err);
                    }
                } else {
                    const users = JSON.parse(data);
                    resolve(users);
                }
            });
        });
    }

    static saveUsers(users) {
        return new Promise((resolve, reject) => {
            fs.writeFile(filePath, JSON.stringify(users), 'utf8', (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }
}

module.exports = UserModel;