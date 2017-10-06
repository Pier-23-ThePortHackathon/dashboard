<script>
  import { Scatter } from 'vue-chartjs'
  export default Scatter.extend({
    props: {
      chartData: {
        type: Array | Object,
        required: false
      },
      chartLabels: {
        type: Array,
        required: false
      }
    },
    data () {
      return {
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [ {
              gridLines: {
                display: true
              }
            }]
          },
          legend: {
            display: false
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted () {
      this.renderChart({
        chartLabels: this.chartLabels,
        datasets: [
          {
            label: 'Patient Clusters',
            borderColor: '#000',
            pointBackgroundColor: 'white',
            pointBorderColor: '#249EBF',
            data: [{
              x: -10,
              y: 0
            }, {
              x: 0,
              y: 10
            }, {
              x: 10,
              y: 5
            }]
          }
        ]
      }, this.options)
    }
  })
</script>
