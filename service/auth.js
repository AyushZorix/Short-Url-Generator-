const sessionIdToUserMap = new Map();

function Setuser(id , user){
    sessionIdToUserMap.set(id, user);
}

function Getuser(id){
    return sessionIdToUserMap.get(id);
} 

module.exports = {
    Setuser,
    Getuser
};