<template>
  <div class="card">
    <div class="header">
      <h4 class="title">Edit Query</h4>
    </div>
    <div class="content">
      <form>
        <div class="row">
          <div class="col-md-3">
            <fg-input type="date"
                      label="Date From"
                      placeholder="15/10/2015"
                      v-model="user.username">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="date"
                      label="Date To"
                      placeholder="15/10/2016"
                      v-model="user.email">
            </fg-input>
          </div>
        </div>
        <h4 class="title">Data to include</h4>
        <div class="row">
          <div class="col-md-4">
            <fg-input type="checkbox"
                      label="Accelerometer"
                      v-model="user.firstName">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="checkbox"
                      label="Gyro"
                      v-model="user.lastName">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="checkbox"
                      label="Medication"
                      v-model="user.lastName">
            </fg-input>
          </div>
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-info btn-fill btn-wd" @click.prevent="updateProfile">
            Run Query
          </button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        user: {
          company: 'Paper Dashboard',
          username: 'michael23',
          email: '',
          lastName: 'Faker',
          address: 'Melbourne, Australia',
          city: 'melbourne',
          postalCode: '',
          aboutMe: `Oh so, your weak rhyme. You doubt I'll bother, reading into it.I'll probably won't, left to my own devicesBut that's the difference in our opinions.`
        }
      }
    },
    methods: {
      updateProfile () {
        alert('Your data: ' + JSON.stringify(this.user))
      }
    }
  }

</script>
<style>

</style>
