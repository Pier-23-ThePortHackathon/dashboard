<template>
    <div class="row">
      <div class="col-md-12">

        <form>
          <div class="row">
            <h2> Daily UPDRS Form</h2>
            <h5> Use this form to input the patient's daily UPDRS score</h5>
            <ol>
              <li>
                <h5> Motor </h5>
                <div class="col-md-12">
                  <h6> Speech </h6>
                  <select v-model="patient.speech">
                    <option> 0 - Normal </option>
                    <option> 1 - Slight loss of expression, diction and/or volumne </option>
                    <option> 2 - Monotone, slurred but understandable, moderately impaired.</option>
                    <option> 3 - Marked impairment, difficult to understand </option>
                    <option> 4 - Unintelligible </option>
                  </select>
                </div>

                <div class="col-md-12">
                  <h6> Facial Expression </h6>
                  <select v-model="patient.facialexpression">
                    <option> 0 - Normal </option>
                    <option> 1 - Minimal hypomimia, could be normal "Poker Face" </option>
                    <option> 2 - Slight but definitely abnormal diminution of facial expression </option>
                    <option> 3 - Moderate hypomimia; lips parted some of the time </option>
                    <option> 4 - Unintelligible </option>
                  </select>
                </div>

                <div class="col-md-12">
                  <h6> Tremor at rest (head, upper and lower extremeties </h6>
                  <select v-model="patient.restTremor">
                    <option> 0 - Absent </option>
                    <option> 1 - Slight and infrequently present </option>
                    <option> 2 - Mild in amplitude and persistent. Or moderate in amplitude, but intermittently present </option>
                    <option> 3 - Moderate in amplitude and present most of the time </option>
                    <option> 4 - Marked in amplitude and present most of the time </option>
                  </select>
                </div>

                <div class="col-md-12">
                  <h6> Action or postural tremor of hands </h6>
                  <select v-model="patient.posturalTremor">
                    <option> 0 - Absent </option>
                    <option> 1 - Slight; present with action </option>
                    <option> 2 - Moderate in amplitude, present with action </option>
                    <option> 3 - Moderate in amplitude with posture holding as well as action </option>
                    <option> 4 - Marked in amplitude; interferes with feeding </option>
                  </select>
                </div>

                <div class="col-md-12">
                  <h6> Rigidity </h6>
                  <select v-model="patient.rigidity">
                    <option> 0 - Absent </option>
                    <option> 1 - Slight or detectable only when activated by mirror or other movements </option>
                    <option> 2 - Mild to moderate </option>
                    <option> 3 - Marked, but full range of motions easily achieved. </option>
                    <option> 4 - Marked in amplitude and present most of the time </option>
                  </select>
                </div>

                <div class="col-md-12">
                  <h6> Finger taps </h6>
                  <select v-model="patient.fingerTaps">
                    <option> 0 - Normal </option>
                    <option> 1 - Mild slowing and/or reduction in amplitude </option>
                    <option> 2 - Moderately Impaired. Definite and early fatiguing. May have occasional arrests in movement. </option>
                    <option> 3 - Severely impaired. Frequent hesitation in initiating movements or arrests in ongoing movement. </option>
                    <option> 4 - Can barely perform the task. </option>
                  </select>
                </div>

                <div class="col-md-12">
                  <h6> Hand movements </h6>
                  <select v-model="patient.handMovement">
                    <option> 0 - Normal </option>
                    <option> 1 - Mild slowing and/or reduction in amplitude </option>
                    <option> 2 - Moderately Impaired. Definite and early fatiguing. May have occasional arrests in movement. </option>
                    <option> 3 - Severely impaired. Frequent hesitation in initiating movements or arrests in ongoing movement. </option>
                    <option> 4 - Can barely perform the task. </option>
                  </select>
                </div>

                <div class="col-md-12">
                  <h6> Rapid alternating movements of hand </h6>
                  <select v-model="patient.alternatingMovement">
                    <option> 0 - Normal </option>
                    <option> 1 - Mild slowing and/or reduction in amplitude </option>
                    <option> 2 - Moderately Impaired. Definite and early fatiguing. May have occasional arrests in movement. </option>
                    <option> 3 - Severely impaired. Frequent hesitation in initiating movements or arrests in ongoing movement. </option>
                    <option> 4 - Can barely perform the task. </option>
                  </select>
                </div>

                <div class="col-md-12">
                  <h6> Leg Agility </h6>
                  <select v-model="patient.legAgility">
                    <option> 0 - Normal </option>
                    <option> 1 - Mild slowing and/or reduction in amplitude </option>
                    <option> 2 - Moderately Impaired. Definite and early fatiguing. May have occasional arrests in movement. </option>
                    <option> 3 - Severely impaired. Frequent hesitation in initiating movements or arrests in ongoing movement. </option>
                    <option> 4 - Can barely perform the task. </option>
                  </select>
                </div>

                <div class="col-md-12">
                  <h6> Arising from chair </h6>
                  <select v-model="patient.chairArising">
                    <option> 0 - Normal </option>
                    <option> 1 - Slow or might require more than one attempt </option>
                    <option> 2 - Pushes self up from arms of seat. </option>
                    <option> 3 - Tends to fall back and may have to try again, but can get up without help. </option>
                    <option> 4 - Unable to rise without help  </option>
                  </select>
                </div>

                <div class="col-md-12">
                  <h6> Posture </h6>
                  <select v-model="patient.posture">
                    <option> 0 - Normal erect </option>
                    <option> 1 - Not quite erect, slightly stooped posture, could be normal for older person </option>
                    <option> 2 - Moderately stooped posture, definitely abnormal, can be slightly leaning to one side.</option>
                    <option> 3 - Severely stooped posture with kyphosis; can be moderately leaning to one side.</option>
                    <option> 4 - Marked flexion with extreme abnormality of posture. </option>
                  </select>
                </div>

                <div class="col-md-12">
                  <h6> Gait </h6>
                  <select v-model="patient.gait">
                    <option> 0 - Normal </option>
                    <option> 1 - Walks slowly, may shuffle with short steps, but no festination or propulsion. </option>
                    <option> 2 - Walks with difficulty but requires little or no assistance, may have some festination, short steps or propulsion. </option>
                    <option> 3 - Severe disturbance of gait, requiring assistance. </option>
                    <option> 4 - Cannot walk at all, even with assistance. </option>
                  </select>
                </div>

                <div class="col-md-12">
                  <h6> Postural Stability </h6>
                  <select v-model="patient.posturalStability">
                    <option> 0 - Normal </option>
                    <option> 1 - Minimal slowness, giving movement a deliberate character, could be normal for some persons. Possibly reduced amplitude. </option>
                    <option> 2 - Walks with difficulty but requires little or no assistance, may have some festination, short steps or propulsion. </option>
                    <option> 3 - Severe disturbance of gait, requiring assistance. </option>
                    <option> 4 - Cannot walk at all, even with assistance. </option>
                  </select>
                </div>

                <div class="col-md-12">
                  <h6> Body bradykinesia and hypokinesia </h6>
                  <select v-model="patient.bradykinesia">
                    <option> 0 - Normal </option>
                    <option> 1 - Minimal slowness, giving movement a deliberate character, could be normal for some persons. Possibly reduced amplitude. </option>
                    <option> 2 - Mild degree of slowness and poverty of movement which is definitely abnormal. Alternatively, some reduced amplitude.</option>
                    <option> 3 - Moderate slowness, poverty or small amplitude of movement. </option>
                    <option> 4 - Marked slowness, poverty or small amplitude of movement. </option>
                  </select>
                </div>
              </li>
              <li>
                <h5> Complications of Therapy</h5>
                <ol>
                  <li> Dyskinesia </li>

                  <div class="col-md-12">
                    <h6> Duration </h6>
                    <select v-model="patient.duration">
                      <option> 0 - None </option>
                      <option> 1 - 1-25 percent of the day </option>
                      <option> 2 - 26-50 percent of the day</option>
                      <option> 3 - 51-75 percent of the day </option>
                      <option> 4 - 76-100 percent of the day </option>
                    </select>
                  </div>

                  <div class="col-md-12">
                    <h6> Disability </h6>
                    <select v-model="patient.disability">
                      <option> 0 - Not disabling </option>
                      <option> 1 - Mildly disabling </option>
                      <option> 2 - Moderately disabling </option>
                      <option> 3 - Severely disabling </option>
                      <option> 4 - Completely disabled </option>
                    </select>
                  </div>

                  <div class="col-md-12">
                    <h6> Disability </h6>
                    <select v-model="patient.painfuldykinesia">
                      <option> 0 - Not painful </option>
                      <option> 1 - Slight </option>
                      <option> 2 - Moderate </option>
                      <option> 3 - Severe </option>
                      <option> 4 - Marked </option>
                    </select>
                  </div>

                  <div class="col-md-12">
                    <h6> Presence of early morning dystonia </h6>
                    <select v-model="patient.dystonia">
                      <option> 0 - No </option>
                      <option> 1 - Yes </option>
                    </select>
                  </div>

                  <li> Clinical Fluctuations </li>

                  <div class="col-md-12">
                    <h6> Are off periods predictable? </h6>
                    <select v-model="patient.offPeriodsPredictable">
                      <option> 0 - No </option>
                      <option> 1 - Yes </option>
                    </select>
                  </div>

                  <div class="col-md-12">
                    <h6> Are off periods unpredictable? </h6>
                    <select v-model="patient.offPeriodsUnpredictable">
                      <option> 0 - No </option>
                      <option> 1 - Yes </option>
                    </select>
                  </div>

                  <div class="col-md-12">
                    <h6> Do off periods come on suddenly? </h6>
                    <select v-model="patient.offPeriodsSudden">
                      <option> 0 - No </option>
                      <option> 1 - Yes </option>
                    </select>
                  </div>

                  <div class="col-md-12">
                    <h6> What proportion of the waking day is the patient "off" on average? </h6>
                    <select v-model="patient.proportionOff">
                      <option> 0 - None </option>
                      <option> 1 - 1-25 percent of day </option>
                      <option> 2 - 26-50 percent of day </option>
                      <option> 3 - 51 - 75 percent of day </option>
                      <option> 4 - 76-100 percent of day </option>
                    </select>
                  </div>

                  <li> Other Complications </li>

                  <div class="col-md-12">
                    <h6> Does the patient have anorexia, nausea or vomiting? </h6>
                    <select v-model="patient.anorexiaNauseaVomiting">
                      <option> 0 - No </option>
                      <option> 1 - Yes </option>
                    </select>
                  </div>

                  <div class="col-md-12">
                    <h6> Any sleep disturbances such as Insomnia or Hypersomnolence? </h6>
                    <select v-model="patient.sleepDisturbances">
                      <option> 0 - No </option>
                      <option> 1 - Yes </option>
                    </select>
                  </div>

                  <div class="col-md-12">
                    <h6> Does the patient have symptomatic orthostasis? </h6>
                    <select v-model="patient.orthostatis">
                      <option> 0 - No </option>
                      <option> 1 - Yes </option>
                    </select>
                  </div>

                </ol>


              </li>
              <li>
                <h5> Modified Hoehn and Yahr Staging </h5>
                <div class="col-md-12">
                  <select v-model="patient.mhys">
                    <option> Stage 0 - No signs of disease </option>
                    <option> Stage 1 - Unilateral disease </option>
                    <option> Stage 1.5 - Unilateral plus axial involvement </option>
                    <option> Stage 2 - Bilateral disease, without impairment of balance </option>
                    <option> Stage 2.5 - Mild bilateral disease, with recovery on pull test. </option>
                    <option> Stage 3 - Mild to moderate bilateral disease, with recovery on pull test; physically independent. </option>
                    <option> Stage 4 - Severe disability; still able to walk around unassisted. </option>
                    <option> Stage 5 - Wheelchair bound or bedridden unless aided. </option>

                  </select>
                </div>
              </li>
              <li>
                <h5> SEAD Living Scale</h5>
                <div class="col-md-12">
                  <select v-model="patient.sead">
                    <option> 100%</option>
                    <option> 90%</option>
                    <option> 80%</option>
                    <option> 70% </option>
                    <option> 60% </option>
                    <option> 50% </option>
                    <option> 40% </option>
                    <option> 30% </option>
                    <option> 20% </option>
                    <option> 10% </option>
                  </select>
                </div>
              </li>

            </ol>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-info btn-fill btn-wd" @click="updateTable">
              Insert
            </button>
          </div>
          <div class="clearfix"></div>
        </form>

        <div class="card">
          <paper-table :title="table1.title" :sub-title="table1.subTitle" :data="table1.data" :columns="table1.columns">

          </paper-table>
        </div>
      </div>
    </div>
</template>
<script>
  import PaperTable from 'components/UIComponents/PaperTable.vue'
  const tableColumns = ['Id', 'Date', 'Motor', 'COT', 'MHYS', 'DLS']
  const tableData =
    [{
      id: '1',
      date: '27-07-2015',
      motor: '4',
      cot: '4',
      mhys: '5',
      dls: '4'
    }]

  export default {
    components: {
      PaperTable
    },
    data () {
      return {
        table1: {
          title: 'Daily UPDRS',
          subTitle: 'Last one month',
          columns: [...tableColumns],
          data: [...tableData]
        },
        patient: {
          speech: '',
          facialexpression: '',
          restTremor: '',
          posturalTremor: '',
          rigidity: '',
          fingerTaps: '',
          handMovement: '',
          alternatingMovement: ``,
          legAgility: '',
          chairArising: '',
          posture: '',
          gait: '',
          posturalStability: '',
          bradykinesia: '',
          duration: '',
          disability: '',
          painfuldykinesia: '',
          dystonia: '',
          offPeriodsPredictable: '',
          offPeriodsUnpredictable: '',
          offPeriodsSudden: '',
          proportionOff: '',
          anorexiaNauseaVomiting: '',
          sleepDisturbance: '',
          orthostatis: '',
          mhys: '',
          sead: ''
        }
      }
    },
    methods: {
      updateTable () {

        this.speech =  ''
        this.facialexpression = ''
        this.restTremor = ''
        this.posturalTremor = ''
        this.rigidity = ''
        this.fingerTaps =  ''
        this.handMovement = ''
        this.alternatingMovement = ``
        this.legAgility = ''
        this.chairArising = ''
        this.posture = ''
        this.gait = ''
        this.posturalStability = ''
        this.bradykinesia = ''
        this.duration = ''
        this.disability = ''
        this.painfuldykinesia = '',
        this.dystonia = '',
        this.offPeriodsPredictable = '',
        this.offPeriodsUnpredictable = '',
        this.offPeriodsSudden = '',
        this.proportionOff = '',
        this.anorexiaNauseaVomiting = '',
        this.sleepDisturbance = '',
        this.orthostatis = '',
        this.mhys = '',
        this.sead = ''

      }
    }
  }

</script>
<style>
 form {
   padding: 40px;
 }

 button {
   margin-top: 30px;
 }
</style>
