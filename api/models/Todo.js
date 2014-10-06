/**
 * Todo
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    name : 'string',
    age : {
        type : 'integer',
        required : true
    },
    email : {
        type : 'email',
        max : 150,
        required : true
    }
  }

};
