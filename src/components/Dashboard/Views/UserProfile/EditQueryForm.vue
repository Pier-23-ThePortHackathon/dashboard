<template>
  <div class="card">
    <div class="header">
      <h4 class="title">Edit Query</h4>
    </div>
    <div class="content">
      <form>
        <div class="row">
          <div class="col-md-6">
            <label for='Date From'> Date From</label>
            <input type="date"
                      id = "Date From"
                      v-model="patient.startDate">
          </div>
          <div class="col-md-6">
            <label for='Date To'> Date To</label>
            <input type="date"
                      id = "Date To"
                      v-model="patient.endDate">
          </div>
        </div>
        <h4 class="title">Data to include</h4>
        <div class="row">
          <div class="col-md-4">
            <input type="checkbox"
                      label="Accelerometer"
                      id="Accelerometer"
                      v-model="patient.accelerometer">
            <label for='accelerometer'>Accelerometer</label>
          </div>
          <div class="col-md-4">
            <input type="checkbox"
                      id="gyro"
                      v-model="patient.gyro">
            <label for='gyro'> Gyro</label>
          </div>
          <div class="col-md-4">
            <input type="checkbox"
                      id="Medication"
                      v-model="patient.medication">
            <label for='Medication'>Medication</label>
          </div>
        </div>
        <h4 class="title">Analytics</h4>
        <div class="row">
          <div class="col-md-4">
            <input type="checkbox"
                      id="Clusters"
                      v-model="patient.cluster">
            <label for='Clusters'>Cluster</label>
          </div>
          <div class="col-md-4">
            <input type="checkbox"
                      id="Time Series"
                      v-model="patient.timeseries">
            <label for='Time Series'>Time Series</label>
          </div>
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-info btn-fill btn-wd" @click="requestData">
            Run Query
          </button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
    <div class="Chart_container">
      <div class="Chart_title">
        <h4 class="title">Query Result</h4>
        <hr>
      </div>
      <div class="Chart_content">
        <line-chart v-if="loaded" :chart-data="requestedData" :chart-labels="labels"></line-chart>
      </div>
    </div>
  </div>
</template>
<script>
  import LineChart from '../../../UIComponents/Cards/LineChart'
  export default {
    components: {
      LineChart
    },
    data () {
      return {
        loaded: false,
        requestedData: [],
        labels: [],
        patient: {
          timeseries: false,
          cluster: false,
          medication: false,
          gyro: false,
          accelerometer: false,
          startDate: null,
          endDate: null
        }
      }
    },
    methods: {
      requestData () {
        console.log(this.patient)
      }
    }
  }

</script>
<style>

  .Chart_title {
    padding: 20px;
  }

  form {
    padding:30px;
  }

</style>
