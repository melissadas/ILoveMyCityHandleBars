exports.home=function(req,res){
  res.render('home',{title:'iLoveMyCity',
                    headline:'Welcome to our site. You can choose from many cities and see what it is like to be there through a simple series of photos.'
                    });
                  }


exports.city=function(req,res){
    var cityName=req.params.city;
    var title,headline;
    var imageArray=[1,2,3,4];

    if(cityName==='goa'){
       title="Goa";
       headline="Fun, Sunshine and Beaches";
    }
    else if(cityName==='jaipur'){
       title="Jaipur";
       headline="The Pink City in colorful Rajasthan";
    }
    else if(cityName==='mussourie'){
       title="Mussoorie";
       headline="The Queen of Hills";
    }
    else if(cityName==='pondicherry'){
       title="Pondicherry";
       headline="Peaceful Pondicherry, Give time a break!";
      
    }

    res.render('city',{
      title:title,
      headline:headline,
      city:cityName,
      imageArray:imageArray});
  }
