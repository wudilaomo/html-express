const userDao = require('../dao/userDao');

exports.getUserList = async () => {
    const userList = await userDao.getUserList();
    return userList;
};

exports.getUserInfo = async (userId) => {
    const userInfo = await userDao.getUserInfo(userId);
    return userInfo;
};

exports.getGov = async () => {
    const Gov = await userDao.getGov();
    return Gov;
};

exports.getDoc = async () => {
    const Doc = await userDao.getDoc();
    return Doc;
};

exports.signIn = async (userId, password) => {
    const signIn = await userDao.signIn(userId, password);
    return signIn[0];
};

exports.search = async (keyWord) => {
    const search = await userDao.search(keyWord);
    return search;
};

exports.delete1 = async (content) => {
    const detele1 = await userDao.delete1(content);
    return detele1;
};

exports.delete2 = async (content) => {
    const detele2 = await userDao.delete2(content);
    return detele2;
};
