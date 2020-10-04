$(document).ready(function() {

    /*Create unique id*/
    function createUniqueId(){
        return Math.random().toString(36).substr(2, 9);}
    /*Create unique id*/

    /*Nicescroll*/
    function createNiceScroll(elmntClass,scrollColor="#e8e8e8",width="5px"){
        $(elmntClass).niceScroll({
            cursorwidth:width,
            cursorcolor:scrollColor,
            cursorborder: "0px solid #fff", // css definition for cursor border
            cursorborderradius: "0px", // border radius in pixel for cursor
            autohidemode:false,
            zindex:999,
            emulatetouch: true,
        });
    }
    /*Nicescroll*/

    /*hamburger menu*/
    var hamburger = $(".hamburger");
    hamburger.on("click",function(){
        $(this).toggleClass("is-active");
        $(".menu-area").toggleClass("active");
    });
     /*hamburger menu*/

    /*Select2*/
    function formatState (state) {
        if (!state.id) {
        return state.text;
        }

        var imgSrc = $(state.element).attr("data-img");

        var $state = $(
        '<span><img src="'+ imgSrc +'" class="img-flag" /> ' + state.text + '</span>'
        );
        return $state;
    };

    console.log($(".select-custom").find("select").val());

    $(".select-custom").find("select").select2({
        templateResult: formatState,
        templateSelection: formatState,
        dropdownParent: $('.select-custom'),
        placeholder: "Select project",
    });

    var cloneBtn = $(".select-custom").find(".blue-button").clone();
    $(".select-custom").find(".blue-button").hide();

    

    $(".select-custom").on("select2:open",function(e){
        console.log(this);
        createNiceScroll(".select2-results__options","#e8e8e8","6px");
        $(this).find(".select2-search__field").attr("placeholder","Search project");
        $(this).find(".select2-results").append(cloneBtn);
        $(this).find(".select2-results").find(".blue-button").show();

        console.log($(this));
    });
/*Select2*/

function craateBasicSelect(elm){
    $(elm).each(function(){
        $(this).find("select").select2({
            dropdownParent: $(this),
            minimumResultsForSearch: -1
        });

        $(this).on("select2:open",function(e){
            createNiceScroll(".select2-results__options","#e8e8e8","6px");
        });
    });
}

craateBasicSelect(".white-select");

/*Close all menu-toggle element when click outside*/
$(document).on("click",function() {
    $(".menu-toggle").each(function(){
        removeActive(this);
    });
});
/*Close all menu-toggle element when click outside*/

/*Close all menu-toggle element when resize window*/
$(window).on("resize",function() {
    $(".menu-toggle").each(function(){
        removeActive(this);
    });
    $(".menu-area").each(function(){
        $(this).removeClass("active");
        $(".hamburger").removeClass("is-active");
    });
});
/*Close all menu-toggle element when resize  window*/

/*Menu toggle unique id*/
$(".menu-toggle").each(function(){
    var uid = createUniqueId();
    $(this).attr("data-id",uid);
})
/*Menu toggle unique id*/

/*Menu toggle remove active*/
function removeActive(elm){
    var target = $(elm).attr("data-target");
    $(target).removeClass("active");
}
/*Menu toggle remove active*/

/*Menu toggle*/
$(".menu-toggle").on("click",function(e){
    e.stopPropagation();
    var target = $(this).attr("data-target");
    var id = $(this).attr("data-id");

    $(".menu-toggle").each(function(){
        var eid = $(this).attr("data-id");

        if(eid != id){
            removeActive(this);
        }
    })

    $(target).toggleClass("active");
})
/*Menu toggle*/

/*Menu nice scroll*/
createNiceScroll(".nice-scroll","#e8e8e8","6px");
/*Menu nice scroll*/


/*Create ring chart*/
function createRingChart(elm){
    var percentage = $(elm).attr("data-percentage");
    percentage = parseInt(percentage);

    var html = `<svg viewBox="-2 -2 40 40" class="circular-chart blue">
                    <filter id="blur-filter">
                        <feDropShadow dx="0" dy="0" stdDeviation="0.5" flood-color="rgba(0, 0, 0, 0.1);"/>
                    </filter>
                    <path class="circle-bg"
                    d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path class="circle"
                        filter="url(#blur-filter)"
                        stroke-dasharray="${percentage}, 100"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                </svg>`
    $(elm).append(html);
}

createRingChart("#ring-chart");
/*Create ring chart*/


/*Datatable*/
function createDatatable(elm){
    $(elm).dataTable({
        paging:false,
        info:false,
        searching:false,
        columnDefs: [{
            targets:'no-sort',
            orderable:false,
        }],
    });

    createNiceScroll(".dataTables_scrollBody","#e8e8e8","10px");
}

createDatatable("custom-datatable");
/*Datatable*/

});