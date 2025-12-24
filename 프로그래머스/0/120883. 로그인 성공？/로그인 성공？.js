function solution(id_pw, db) {
    const dbObj = Object.fromEntries(db);
    
    const [inputID, inputPW] = id_pw;
    const userPW = dbObj[inputID];
    
    if (userPW !== undefined) {
        if (userPW === inputPW) {
            return "login";
        } else {
            return "wrong pw";
        }
    } else {
        return "fail";
    }
}