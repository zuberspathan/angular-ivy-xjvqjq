export default class Utils {
    static doSomething(val: string) { return val; }
    static doSomethingElse(val: string) { return val; }
    static symbols: string[] = ["triangle", "square", "circle", "diamond", "triangle-down", "circle"];
    static seriesColorPalette: string[][] = [["#7fbf7f", "#329932", "#008000", "#005900", "#003300", "#000c00"],
    ["#829da0", "#50757a", "#1d4e54", "#03292e", "#021d21", "#010b0d"],
    ["#cf9336", "#c37804", "#9c6003", "#754802", "#3a2401", "#130c00"],
    ["#e79ad8", "#cf36b1", "#af038e", "#75025e", "#3a012f", "#13000f"],
    ["#e79aaa", "#d54f6a", "#c91d40", "#9c0322", "#610215", "#270008"],
    ["#c64fd5", "#b61dc9", "#8b039c", "#570261", "#34013a", "#110013"]];

    static chartTitles = ["Management", "Professional", "Support", "Technical", "Developer", "Executive"];

    static chartConfig: any = {
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        accessibility: {
            description: '',
        },
        title: {
            text: 'Management',
            align: 'left',
            x: 70
        },
        xAxis: {
            title: {
                enabled: true
            },
            lineColor: '#7e7e7e',
            lineWidth: 20,
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 1,
            labels: {
                useHTML: true,
                style: {
                    fontSize: '12px',
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    fontWeight: '700',
                    color: '#999999'
                }
            },
            gridLinesColor: '#D8D8D8',
            gridLineWidth: 2
        },
        legend: {
            enabled: true,
            verticalAlign: "bottom",
            layout: "horizontal",
            itemStyle: {
                fontSize: "12px",
                fontFamily: "Arial, Helvetica, sans-serif",
                fontWeight: "700",
                color: "#666666"
            }
        },
        navigation: {
            buttonOptions: {
                theme: {
                    style: {
                        color: '#039',
                        textDecoration: 'underline'
                    }
                }
            }
        },
        exporting: {
            buttons: {
                contextButton: {
                    enabled: false
                },
                printButton: {
                    text: 'Expand',
                    onclick: function () {
                        alert("clicked");
                    }
                }
            }
        },
        plotOptions: {
            line: {
                dashStyle: 'dash',
                color: '#CBC3E3',
                lineWidth: 2,
                zIndex: -1
            },
            series: {
                dataLabels: {
                    enabled: false,
                    padding: 10,
                    align: "left",
                    verticalAlign: "middle",
                    color: "#000000",
                    allowOverlap: true,
                    style: {
                        "text-align": "right",
                        fontFamily: "Arial, Helvetica, sans-serif",
                        fontWeight: "700",
                        fontSize: "12px",
                        lineHeight: "auto"
                    },
                    x: 20
                },
                series: {
                    dashStyle: 'ShortDash'
                },
                marker: {
                    radius: 6
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: '{point.x} cm, {point.y} kg'
                },

            }
        },
        series: []
    };
    static surveryResults: any = [{
        name: "columnrange",
        type: "columnrange",
        enableMouseTracking: false,
        showInLegend: false,
        animation: true,
        borderWidth: 0.5,
        borderColor: "  grey",
        color: "#FFF",
        pointPadding: 5,
        data: [[156, 32, 40],
        [158, 50, 62],
        [162, 61, 77],
        [164, 75, 85],
        [168, 80, 95]],
        dataLabels: {
            enabled: false
        },
        pointWidth: 20
    }, {
        type: 'scatter',
        name: '10th',
        data: [[156, 32], [158, 50], [162, 61], [164, 75], [168, 80]],
        marker: {
            radius: 4
        }
    },
    {
        type: 'scatter',
        name: '25th',
        data: [[156, 35], [158, 52], [162, 67], [164, 79], [168, 90]],
        marker: {
            radius: 4
        }
    },
    {
        type: 'scatter',
        name: '50th',
        data: [[156, 40], [158, 62], [162, 77], [164, 85], [168, 95]],
        marker: {
            radius: 4
        }
    }, {
        type: 'line',
        name: 'Average',
        data: [[156, 35], [158, 52], [162, 67], [164, 79], [168, 90]],
        marker: {
            enabled: false
        },
        states: {
            hover: {
                lineWidth: 0
            }
        },
        enableMouseTracking: false
    }
    ]
}