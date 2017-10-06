<template>
  <div>

    <!--Stats cards
    <div class="row">
      <div class="col-lg-3 col-sm-6" v-for="stats in statsCards">
        <stats-card>
          <div class="icon-big text-center" :class="`icon-${stats.type}`" slot="header">
            <i :class="stats.icon"></i>
          </div>
          <div class="numbers" slot="content">
            <p>{{stats.title}}</p>
            {{stats.value}}
          </div>
          <div class="stats" slot="footer">
            <i :class="stats.footerIcon"></i> {{stats.footerText}}
          </div>
        </stats-card>
      </div>
    </div> -->

    <!--Charts-->
    <div class="row">

      <div class="col-xs-12">
        <LineChart :chart-data="sensorData" :chart-labels="timeValues">
          <!-- <div slot="legend">
            <i class="fa fa-circle text-info"></i> Open
            <i class="fa fa-circle text-danger"></i> Click
            <i class="fa fa-circle text-warning"></i> Click Second Time
          </div> -->
        </LineChart>
      </div>

      <div class="col-xs-12 Chart-container">
        <ScatterChart>
          <!-- <div slot="legend">
            <i class="fa fa-circle text-info"></i> Open
            <i class="fa fa-circle text-danger"></i> Click
            <i class="fa fa-circle text-warning"></i> Click Second Time
          </div> -->
        </ScatterChart>
      </div>

      <!-- <div class="col-md-6 col-xs-12">
        <chart-card :chart-data="preferencesChart.data"  chart-type="Scatter">
          <h4 class="title" slot="title">Email Statistics</h4>
          <span slot="subTitle"> Last campaign performance</span>
          <span slot="footer">
            <i class="ti-timer"></i> Campaign set 2 days ago</span>
          <div slot="legend">
            <i class="fa fa-circle text-info"></i> Open
            <i class="fa fa-circle text-danger"></i> Bounce
            <i class="fa fa-circle text-warning"></i> Unsubscribe
          </div>
        </chart-card>
      </div>

      <div class="col-md-6 col-xs-12">
        <chart-card :chart-data="activityChart.data" :chart-options="activityChart.options">
          <h4 class="title" slot="title">2015 Sales</h4>
          <span slot="subTitle"> All products including Taxes</span>
          <span slot="footer">
            <i class="ti-check"></i> Data information certified</span>
          <div slot="legend">
            <i class="fa fa-circle text-info"></i> Tesla Model S
            <i class="fa fa-circle text-warning"></i> BMW 5 Series
          </div>
        </chart-card>
      </div>-->

    </div>

  </div>
</template>
<script>
  import StatsCard from 'components/UIComponents/Cards/StatsCard.vue'
  import ChartCard from 'components/UIComponents/Cards/ChartCard.vue'
  import ScatterChart from 'components/UIComponents/Cards/ScatterChart.vue'
  import LineChart from 'components/UIComponents/Cards/LineChart.vue'
  import exportedData from '../../../DATA/mockdata.js'

  console.log('Exported data', exportedData.exportedData.accel)
  export default {
    components: {
      StatsCard,
      ChartCard,
      ScatterChart,
      LineChart,
      exportedData
    },
    data () {
      return {
        sensorData: [exportedData.exportedData.accel, exportedData.exportedData.gyro],
        timeValues: exportedData.exportedData.timeValues
      }
    }

  }

</script>
<style>
  .Chart-container {
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;

  }
</style>
