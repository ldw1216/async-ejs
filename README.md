# async-ejs

//对ejs源码进行了改进，改进后可支持在模板上使用generator方法，
//如：<%var user = yield User.findOne();%>  <%= user.name %>

使用方法：
1、在express里加入中间件:app.use(require('./lib/ejs')({debug:true}));
2、在路由中使用 res.asyncReader(filename,data,opts);
3、模板里 <%var user = yield User.findOne();%>  <%= user.name %>

其它使用方法同ejs
