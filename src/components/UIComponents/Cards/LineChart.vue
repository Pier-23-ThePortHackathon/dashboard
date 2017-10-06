<script>
  import { Line } from 'vue-chartjs'
  export default Line.extend({
    props: {
      chartData: {
        type: Array | Object,
        required: false
      },
      chartLabels: {
        type: Array,
        required: true
      }
    },
    data () {
      return {
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: false
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [ {
              gridLines: {
                display: false
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
        labels: this.chartLabels,
        datasets: [
          {
            label: 'Accelerometer',
            borderColor: '#249EBF',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            backgroundColor: 'transparent',
            data: this.chartData[0]
          },
          {
            label: 'Gyro',
            borderColor: '#bf0000',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#bf0000',
            backgroundColor: 'transparent',
            data: this.chartData[1]
          }
        ]
      }, this.options)
    }
  })
</script>
