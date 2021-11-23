/* global Chart:false */

$(function () {
  'use strict'

  var ticksStyle = {
    fontColor: '#495057',
    fontStyle: 'bold'
  }

  var mode = 'index'
  var intersect = true

  var $salesChart = $('#sales-chart')
  // eslint-disable-next-line no-unused-vars
  var salesChart = new Chart($salesChart, {
    type: 'bar',
    data: {
      labels: ['JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
      datasets: [
        {
          backgroundColor: '#007bff',
          borderColor: '#007bff',
          data: [1000, 2000, 3000, 2500, 2700, 2500, 3000]
        },
        {
          backgroundColor: '#ced4da',
          borderColor: '#ced4da',
          data: [700, 1700, 2700, 2000, 1800, 1500, 2000]
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        mode: mode,
        intersect: intersect
      },
      hover: {
        mode: mode,
        intersect: intersect
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          // display: false,
          gridLines: {
            display: true,
            lineWidth: '4px',
            color: 'rgba(0, 0, 0, .2)',
            zeroLineColor: 'transparent'
          },
          ticks: $.extend({
            beginAtZero: true,

            // Include a dollar sign in the ticks
            callback: function (value) {
              if (value >= 1000) {
                value /= 1000
                value += 'k'
              }

              return '$' + value
            }
          }, ticksStyle)
        }],
        xAxes: [{
          display: true,
          gridLines: {
            display: false
          },
          ticks: ticksStyle
        }]
      }
    }
  })

  var $visitorsChart = $('#visitors-chart')
  // eslint-disable-next-line no-unused-vars
  var visitorsChart = new Chart($visitorsChart, {
    data: {
      labels: ['1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000',
    '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011',
  '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
      datasets: [{
        type: 'line',
        data: [431.48633, 480.053035, 530.891845, 578.3349, 624.65722, 663.10035, 708.31112, 755.778595,
          804.343155, 858.55319, 903.74614, 948.90279, 994.05636, 1035.79168, 1081.99146, 1127.10664,
          1160.11709, 1237.26691, 1347.68425, 1424.80514, 1501.93978, 1590.1886, 1612.26846, 1672.612054,
          1694.576021, 1805.178664, 1882.688404, 1948.889594, 1893.563486, 1977.443549, 1997.217984],
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        pointBorderColor: '#007bff',
        pointBackgroundColor: '#007bff',
        fill: false
        // pointHoverBackgroundColor: '#007bff',
        // pointHoverBorderColor    : '#007bff'
      },
      {
        type: 'line',
        data: [427.9, 476.3, 526.9, 574.2, 620.4, 658.9, 704, 751.3, 799.7, 853.6, 898.7, 943.8, 988.9,
          1030.7, 1076.9, 1122, 1155, 1232, 1342, 1419, 1496, 1584, 1606, 1665.878, 1687.862, 1797.878,
          1874.878, 1940.878, 1885.7595, 1969.90433, 1989.603373],
        backgroundColor: 'transparent',
        borderColor: 'green',
        pointBorderColor: 'green',
        pointBackgroundColor: 'green',
        fill: false
        // pointHoverBackgroundColor: '#007bff',
        // pointHoverBorderColor    : '#007bff'
      },
      {
        type: 'line',
        data: [0.007106, 0.007491, 0.007997, 0.008316, 0.00858, 0.00847, 0.008888, 0.009427, 0.009955,
          0.010846, 0.01122, 0.01155, 0.01188, 0.01188, 0.0121, 0.01232, 0.01265, 0.01375, 0.01529,
          0.01606, 0.01694, 0.0176, 0.01782, 0.019457, 0.019347, 0.021107, 0.022647, 0.023197, 0.0226,
          0.022285, 0.02250785],
        backgroundColor: 'tansparent',
        borderColor: '#ced4da',
        pointBorderColor: '#ced4da',
        pointBackgroundColor: '#ced4da',
        fill: false
        // pointHoverBackgroundColor: '#ced4da',
        // pointHoverBorderColor    : '#ced4da'
      },
      {
        type: 'line',
        data: [0.06083, 0.06314, 0.06688, 0.06897, 0.07084, 0.06985, 0.06985, 0.07073, 0.07161, 0.07425,
          0.07403, 0.07293, 0.07172, 0.06941, 0.06732, 0.06578, 0.06303, 0.05797, 0.0583, 0.05533, 0.05181,
          0.05445, 0.05522, 0.056354, 0.056684, 0.060974, 0.064604, 0.066584, 0.064818, 0.058342, 0.05892542],
        backgroundColor: 'tansparent',
        borderColor: 'orange',
        pointBorderColor: 'orange',
        pointBackgroundColor: 'orange',
        fill: false
        // pointHoverBackgroundColor: '#ced4da',
        // pointHoverBorderColor    : '#ced4da'
      }]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        mode: mode,
        intersect: intersect
      },
      hover: {
        mode: mode,
        intersect: intersect
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          // display: false,
          gridLines: {
            display: true,
            lineWidth: '4px',
            color: 'rgba(0, 0, 0, .2)',
            zeroLineColor: 'transparent'
          },
          ticks: $.extend({
            beginAtZero: true,
            stepSize: 100
          }, ticksStyle)
        }],
        xAxes: [{
          display: true,
          gridLines: {
            display: false
          },
          ticks: ticksStyle
        }]
      }
    }
  })
})

// lgtm [js/unused-local-variable]
