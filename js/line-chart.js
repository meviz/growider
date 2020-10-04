function createLineChart(elmId){
    var elm = $(elmId);
    var labelText = elm.attr("data-format").split(",");
    var totalValues = elm.attr("data-total").split(",");
    var datasets = elm.attr("data-dataset").split(";");
    var colors = elm.attr("data-colors").split(";");
    var names = elm.attr("data-names").split(",");
    var seriesArr = [];
    console.log(colors);
    
    datasets.forEach(function(item,i){
        var datas = item.split(",").map(x=>parseInt(x));

        var dataObj = {
            name: names[i],
            totalValue: totalValues[i],
            fillColor:{
                linearGradient: [0, 0, 0, 200],
                stops: [
                    [0,  colors[i]],
                    [1, "rgba(255,255,255,0)"]
                ]
            },
            marker:{
                fillColor:"#ffffff",
                lineWidth: 2,
                lineColor: colors[i]
            },
            lineColor:colors[i],
            legendColor:colors[i],
            lineWidth: 1,
            data: datas,
        }

        seriesArr.push(dataObj);
    })


    elm.highcharts({
        chart: {
            type: 'areaspline',
            padding:0,
        },
        
        title: {
            text: null,
        },
        xAxis: {
            tickWidth: 0,
            gridLineColor: '#eaf0f4',
            align: 'center',
            gridLineWidth: 1,
            labels:{
                style:{
                    fontSize:"10px",
                    color:"rgba(67,66,93,0.5)",
                },
                formatter:function(){
                    var newArr = labelText.map(function(item,i){
                        return item.split(" ")[0];
                    });
                    return newArr[this.value]
                }
            },
        },
        yAxis:{
            tickWidth: 0,
            gridLineColor: '#eaf0f4',
            align: 'center',
            gridLineWidth: 1,
            title:null,
            labels:{
                style:{
                    fontSize:"10px",
                    color:"rgba(67,66,93,0.5)",
                },
            },
        },
        legend:{
            align: 'left',
            itemStyle:{
                fontSize:"7px",
                color:"rgba(67,66,93,0.5)",
            },
        },
    
        tooltip:{
            backgroundColor: "#ffffff",
            borderWidth: 1,
            borderColor:"#6ca0fb",
            margin:0,
            padding:0,
            useHTML: true,
            formatter: function () {
                console.log(this);
                return "<div class='lc-tooltip'>" +
                    "<div class='lc-numbers'>" +
                        "<span>" + this.point.y + "</span> of "+ this.series.userOptions.totalValue +"" +
                    "</div>" +
                    "<div class='lc-date'>" + labelText[this.point.x] + "</div>" +
                "</div>";
            },
        },
    
        plotOptions:{
            series:{
                cursor:'pointer',
                marker:{
                    radius: 2,
                    symbol:'circle',
                    states:{
                        hover:{
                            enabled:false,
                        }
                    }
                }
            }
        },
    
        series: seriesArr
    });
}

createLineChart("#line-chart1");

