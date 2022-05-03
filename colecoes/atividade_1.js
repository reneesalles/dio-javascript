/**
 * Pega todos os nomes de usuários que são "ADMIN"
 * @param {Map<string, string>} map 
 * @return {string[]}
 */
function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value == "ADMIN") {
            admins.push(key);
        }
    }
    return admins;
}

const _users = new Map();
_users.set("Luiz", "USER");
_users.set("Marcos", "ADMIN");
_users.set("Fernando", "USER");
_users.set("Carlos", "ADMIN");
_users.set("Erick", "ADMIN");
_users.set("Stive", "ADMIN");
_users.set("Bozo", "DESGRAÇA");
_users.set("Molusco", "DESGRAÇA");
_users.set("Zé", "USER");

console.log(getAdmins(_users));