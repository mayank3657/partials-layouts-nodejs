module.exports.home=function(req,res){
    // res.end('<h1>gotcha</h1>');
    return res.render('home',{
        title:"home"
    });
}