module.exports = {
    attributes : {
        title : {
            type : 'string',
            required : true,
            unique : true
        },
        priority : {
            type : 'integer',
            required : true
        },
        done : {
            type : 'boolean',
            defaultsTo : false
        }
    }
};