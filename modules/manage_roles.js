function addRole(member,role){
    member.guild.roles.fetch()
        .then(roles => {
            roles.cache.map(role => {
                if(role.name === role){
                    member.roles.add(role);
                }
            });
        });
}

function removeRole(member,role){
    member.guild.roles.fetch()
        .then(roles => {
            roles.cache.map(role => {
                if(role.name === role){
                    member.roles.remove(role);
                }
            });
        });
}

function hasRole(member,role){
    if(member && role_name){
        return member.roles.cache.map(role => {
            if(role.name === role){
                return true;
            }
        })[1];
    } else {
        return false;
    }
}

module.exports.addRole = addRole;
module.exports.removeRole = removeRole;
module.exports.hasRole = hasRole;