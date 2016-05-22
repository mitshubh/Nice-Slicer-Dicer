var mongoose  =  require('mongoose');
var Schema  =  mongoose.Schema;

function dynamicSchema(prefix){
    var dataSchema = new Schema();
    return mongoose.model(prefix + '.data', dataSchema);
}

module.exports = dynamicSchema;
