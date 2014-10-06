module.exports = {
    _config : {},
    getAll : function(req, res){
        Todo.find().where({ done : false }).exec(function(err, data){
            res.render('todo/getAll', { todos : data });
        });
    }
}