module.exports = (error) => {
    if (error.name == 'ValidationError') {
        return Object
            .entries(error.errors)
            .map(([key, err]) => err.properties.message)[0]
    } else {
        return error.message;
    }
};