/*Column-chart*/
function createMiniColumnChart(elmId){
    var elm = $(elmId);
    var dataset = elm.attr("data-dataset").split(",").map(x=>parseInt(x));
    var format = elm.attr("data-format").split(",");


    elm.highcharts({
        chart: {
            type: 'column',
            width:100,
            height:50,
            margin: 0 //removes all margin
        },
        title: {
            text: '' //removes title of chart
        },
        
        xAxis: {
            categories: format,
            lineWidth: 0,
            gridLineWidth: 0, 
            minorTickLength: 0, 
            tickLength: 0,
            title: {
                enabled: false
            },
            labels: {
                enabled: false
            },
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            },
            lineWidth: 0,
            gridLineWidth: 0,
            lineColor: 'transparent',
            minorTickLength: 0,
            tickLength: 0,
            labels: {
                enabled: false
            },
        },
        tooltip: {
            outside:true,
            backgroundColor: "#ffffff",
            borderWidth: 1,
            borderColor:"#6ca0fb",
            style: {
                width: "100px"
            },
            distance:10,
            margin:0,
            padding:0,
            useHTML: true,
            formatter: function () {
                return "<div class='cc-tooltip'>" +
                    "<div class='cc-numbers'>" + this.point.y +"%</div>" +
                    "<div class='cc-date'>" + format[this.point.x] +"</div>" +
                "</div>";
            },
        },
        credits: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
            },
            series: {
                pointWidth: 5,
                borderRadius: 2,
                cursor:'pointer',
                states: {
                    hover: {
                        color: '#346aff',
                    }
                },
            }
        },
        series: [{
            data: dataset,
            color: '#dcdcdc'
        
        }]
    });
}

createMiniColumnChart("#column-chart1");
createMiniColumnChart("#column-chart2");

  /*Column-chart*/