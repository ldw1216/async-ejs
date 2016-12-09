/**
 * Created by apple on 2016/12/9.
 */
var ejs = require('./lib/ejs');
var path = require('path');
/**
 *
 * @param options {Object} 默认设置
 * @returns {Function}
 *
 */
module.exports = function(options={}){
    return function(req,res,next){
        var viewsPath = req.app.get('views') || path.join(process.cwd(),'views');
        res.gnRender = function* (filename,data,opts){
            if(!filename.includes('.ejs')) filename = filename+'.ejs';
            Object.assign(options,opts);
            yield ejs.renderFile(path.join(viewsPath,filename),data||{},options,function(err,doc){
                if(err) return next(err);
                res.send(doc);
            });
        };
        next();
    };
};


