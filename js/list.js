$(".listPageNav li").click(function() {
	$(".listPageNav li").toggleClass('nav-active')
})
$(".fixed").click(function() {
	$(".optional-content").hide();
	$(".fixed-content").show();
})
$(".optional").click(function() {
	$(".fixed-content").hide();
	$(".optional-content").show();
})
$(".fixed-content .select li").click(function() {
	$(this).siblings('li').removeClass('list-content-click');
	$(this).addClass('list-content-click')
})
$(".optional-content .select li").click(function() {
	$(this).siblings('li').removeClass('list-content-click');
	$(this).addClass('list-content-click')
})
$(".optional-content .project ul li").click(function() {
	$(this).siblings('li').removeClass('click');
	$(this).addClass('click')
})
$(".optional-content .project ul li:lt(4)").click(function() {
	$(".optional-content .project .project-content:eq(1)").hide();
	$(".optional-content .project .project-content:eq(0)").show();
	$(".optional-content .project .project-content:eq(2)").hide();
})
$(".optional-content .project ul li:eq(4),.optional-content .project ul li:eq(5),.optional-content .project ul li:eq(6),.optional-content .project ul li:eq(7)").click(function() {
	$(".optional-content .project .project-content:eq(0)").hide();
	$(".optional-content .project .project-content:eq(1)").show();
	$(".optional-content .project .project-content:eq(2)").hide();
})
$(".optional-content .project ul li:eq(8),.optional-content .project ul li:eq(9),.optional-content .project ul li:eq(10),.optional-content .project ul li:eq(11)").click(function() {
	$(".optional-content .project .project-content:eq(0)").hide();
	$(".optional-content .project .project-content:eq(2)").show();
	$(".optional-content .project .project-content:eq(1)").hide();
})
$(".optional-bar li").click(function() {
	$(".optional-bar li").toggleClass('bar-active')
})
$(".optional-bar-first-bar").click(function() {
	$(".optional-bar-first").show();
	$(".optional-bar-second").hide()
})
$(".optional-bar-second-bar").click(function() {
	$(".optional-bar-first").hide();
	$(".optional-bar-second").show()
})
$(".optional-content .optional-bar-second ul.myPagination li").click(function() {
	$(this).siblings("li").removeClass("pagination-active");
	$(this).addClass("pagination-active")
})
$(".optional-content .optional-bar-second ul.select li").click(function(){
	$(this).addClass('list-content-click')
})