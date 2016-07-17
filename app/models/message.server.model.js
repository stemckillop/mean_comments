var mongoose = require('mongoose'),
    CommentSchema = require('./comment.server.model'),
    Schema = mongoose.Schema;

var MessageSchema = new Schema({
    created: {
        type:Date,
        default: Date.now
    },
    user: {
        type:String
    },
    message: {
        type:String
    },
    comments: {
        type:[CommentSchema]
    }

});

mongoose.model('Message', MessageSchema);