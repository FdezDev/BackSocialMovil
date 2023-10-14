"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, name, last_name, email, password, profilePicture) {
        this.id = id;
        this.name = name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
        this.profilePicture = profilePicture;
    }
}
exports.User = User;
