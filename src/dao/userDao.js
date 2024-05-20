const db = require('../utils/dbConnPool/mariadb');

exports.getUserList = async () => {
    const sql = `
        SELECT
            user_id AS userId,
            user_name AS userName
        FROM
            user_info
    `;
    return await db.query(sql);
};

exports.getUserInfo = async (userId) => {
    const sql = `
        SELECT
            user_id AS userId,
            user_name AS userName,
            gender,
            age
        FROM
            user_info
        WHERE
            user_id = ?
    `;
    const sqlParams = [userId];
    return await db.query(sql, sqlParams);
};

exports.getGov = async () => {
    const sql = `
        SELECT
            *
        FROM
            government
    `;
    return await db.query(sql);
};

exports.getDoc = async () => {
    const sql = `
        SELECT
            *
        FROM
            document
    `;
    return await db.query(sql);
};

exports.signIn = async (userId, password) => {
    const sql = `
        SELECT
            user_id AS userId,
            password AS password,
            identify AS identify,
            chat_api AS api,
            phone_number AS number

        FROM
            signin
        WHERE
            user_id = ?
            AND
            password = ?
    `;
    const sqlParams = [userId, password];
    return await db.query(sql, sqlParams);
};

exports.search = async (keyWord) => {
    const sql = `
    (SELECT
        content,
        link,
        address,
        img
    FROM
        government
    WHERE
        content LIKE CONCAT('%', ?, '%'))
    UNION
    (SELECT
        content,
        link,
        address,
        img
    FROM
        document
    WHERE
        content LIKE CONCAT('%', ?, '%'))
`;
    const sqlParams = [keyWord, keyWord];
    return await db.query(sql, sqlParams);
};

exports.delete1 = async (content) => {
    const sql = `
    DELETE 
    FROM 
        government
    WHERE 
        content = ?
`;
    const sqlParams = [content];
    return await db.query(sql, sqlParams);
};

exports.delete2 = async (content) => {
    const sql = `
    DELETE 
    FROM 
        document
    WHERE 
        content = ?
`;
    const sqlParams = [content];
    return await db.query(sql, sqlParams);
};
