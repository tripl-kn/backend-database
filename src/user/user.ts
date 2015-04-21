export default
class User {
    constructor(private db: any, private VIEWS: any) {

    }

    /**
     * Get user from database by specific user id.
     *
     * @param userId:string
     * @param callback
     */
    getUserById = (userId:string, callback) => {
        this.db.view(this.VIEWS.VIEW_USER_USER, {key: userId}, callback);
    };

    /**
     * Get user from database by specific user id.
     *
     * @param userId:string
     * @param callback
     */
    getUsers = (callback) => {
        this.db.view(this.VIEWS.VIEW_USER_USER, callback);
    };

    /**
     * Update user information.
     *
     * @param userId:string
     * @param rev:string
     * @param user:IUser
     * @param callback
     */
    updateUser = (userId:string, rev:string, user, callback) => {
        this.db.save(userId, rev, user, callback);
    };

    /**
     * Create a new user.
     *
     * @param user:IUser
     * @param callback
     */
    createUser = (user, callback) => {
        this.db.save(user, callback);
    };


    /**
     * Get json object with login data of specific user id.
     *
     * @param userId:string
     * @param callback
     */
    getUserLogin = (userId:string, callback) => {
        this.db.view(this.VIEWS.VIEW_USER_LOGIN, {key: userId}, callback);
    };

    /**
     * Update only password attribute and leave the others untouched.
     *
     * @param userId:string
     * @param password:string
     * @param callback
     */
    updateUserPassword = (userId:string, password:string, callback) => {
        this.db.merge(userId, {'password': password}, callback);
    }
}