var vid1=new Vimeo.Player($('.one'));
    var vid2=new Vimeo.Player($('.two'));
        var vid3=new Vimeo.Player($('.three'))
	$('.btnonePlay').on('click',function(){
		vid1.play();
	})
	$('.btnonePause').on('click',function(){
		vid1.pause();
	})
	$('.btntwoPlay').on('click',function(){
		vid2.play();
	})
	$('.btntwoPause').on('click',function(){
        vid2.pause();
    $('.btntwoPlay').on('click',function(){
        vid3.play();
    })
    $('.btntwoPause').on('click',function(){
        vid3.pause();
	})