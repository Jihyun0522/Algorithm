def solution(id_pw, db):
    db_dict = {user_id: user_pw for user_id, user_pw in db}
    
    user_id, user_pw = id_pw
    
    if user_id in db_dict:
        if db_dict[user_id] == user_pw:
            return "login"
        else:
            return "wrong pw"
    else:
        return "fail"