

exports.homepage = async(req,res) => {       
        res.render('index', { title: 'Home' } );   
}


exports.aboutPage = async(req,res) => {       
    res.render('about', { title: 'About' } );
}


exports.contactPage = async(req,res) => {       
    res.render('contact', { title: 'Contact' } );
}


exports.showProjects = async(req, res) => {
    res.render('project', { title: 'Project'});
}