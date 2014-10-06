module.exports = {
    attributes : {
        title : {
            type : 'string',
            required : true,
            unique : true
        },
        done : {
            type : 'boolean',
            defaultsTo : false
        }
    }
};