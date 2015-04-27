export default
class StaticData {
    constructor(private db: any, private VIEWS: any) {

    }

    // GET

    /**
     * Get moods from database.
     *
     * @param callback
     */
    getMoods = (callback) => {
        this.db.view(this.VIEWS.VIEW_DATA_MOOD, callback);
    };

    /**
     * Get cities from database.
     *
     * @param callback
     */
    getCities = (callback) => {
        this.db.view(this.VIEWS.VIEW_DATA_CITY, callback);
    };

    /**
     * Get accommodations from database.
     *
     * @param callback
     */
    getAccommodations = (callback) => {
        this.db.view(this.VIEWS.VIEW_DATA_ACC, callback);
    };


    // CREATE

    /**
     * Create a new Mood.
     *
     * @param mood:json-object
     * @param callback
     */
    createMood = (mood, callback) => {
        this.db.save(mood, callback);
    };

    /**
     * Create a new City.
     *
     * @param city:json-object
     * @param callback
     */
    createCity = (city, callback) => {
        this.db.save(city, callback);
    };

    /**
     * Create a new City.
     *
     * @param accommodations:json-object
     * @param callback
     */
    createAccommodations = (accommodations, callback) => {
        this.db.save(accommodations, callback);
    };

    // UPDATE

    /**
     * Update mood information.
     *
     * @param moodId:string
     * @param rev:string
     * @param mood:Mood
     * @param callback
     */
    updateMood = (moodId:string, rev:string, mood, callback) => {
        this.db.save(moodId, rev, mood, callback);
    };

    /**
     * Update city information.
     *
     * @param cityId:string
     * @param rev:string
     * @param city:City
     * @param callback
     */
    updateCity = (cityId:string, rev:string, city, callback) => {
        this.db.save(cityId, rev, city, callback);
    };


    /**
     * Update accommodations information.
     *
     * @param accommodationsId:string
     * @param rev:string
     * @param accommodations:Accommodations
     * @param callback
     */
    updateAccommodations = (accommodationsId:string, rev:string, accommodations , callback) => {
        this.db.save(accommodationsId, rev, accommodations , callback);
    };

    /**
     * Delete a particular mood by id.
     *
     * @param moodId:string
     * @param callback
     */
    deleteMoodById = (moodId:string, callback) => {
        this.db.remove(moodId, callback);
    };

    /**
     * Delete a particular city by id.
     *
     * @param cityId:string
     * @param callback
     */
    deleteCityById = (cityId:string, callback) => {
        this.db.remove(cityId, callback);
    }


}