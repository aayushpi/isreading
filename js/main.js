var libData = new Firebase('https://isreading.firebaseIO.com/');
	libData.on('value', function(display) {
      var x = display.val();
      var recent = _.last(x);
      $('h1 span').html(recent.title);
        _.each(x, function(data){
        var string="<li><h2>"+ data.title + "</h2> <h3>" + data.author + "</h3> <img src='" + data.img_src + "' title='" + data.title + "' /> <p>" + data.date + "</p> <a class='amazon' href='" + data.amazon + "'>Amazon</a> <a class='library' href='" + data.library + "'>Library</a></li>";
        $('ol').prepend(string);
       });
    });
