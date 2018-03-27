let navItems= ['#about', '#contact', '#academics', '#skill', '#experience'];
function handleNavigation(e) {
    var id =(e.target.getAttribute('data-value'))
    navItems.map(function(item) {
        if(id === item ) {
            $(item).addClass("active");
        }
        else {
        $(item).removeClass("active");
        }
    })
}