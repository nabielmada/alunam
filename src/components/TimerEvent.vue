<template>
  <div>
    <div v-show ="statusType !== 'expired'">
      <div class = "countdown-date mt-2">
        <div class="row row-cols-4 g-2">
          <div class="col">
            <div class="card border-0">
              <div class="card-body px-0">
                <div>{{ days }}</div>
                <small>{{ wordString.day }}</small>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card border-0">
              <div class="card-body px-0">
                <div>{{ hours }}</div>
                <small>{{ wordString.hours }}</small>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card border-0">
              <div class="card-body px-0">
                <div>{{ minutes }}</div>
                <small>{{ wordString.minutes }}</small>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card border-0">
              <div class="card-body px-0">
                <div>{{ seconds }}</div>
                <small>{{ wordString.seconds }}</small>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimerEvent',
  props: ['endtime','trans'] ,
  data() {
    return {
      timer:"",
      wordString: {},
      start: "",
      end: "",
      interval: "",
      days:"",
      minutes:"",
      hours:"",
      seconds:"",
      message:"",
      statusType:"",
      statusText: "",
    };
  },
  created() {
        this.wordString = JSON.parse(this.trans);
    },
  mounted(){    
    this.start = new Date().getTime();
    this.end = new Date(this.endtime).getTime();
    // Update the count down every 1 second
    this.timerCount(this.start,this.end);
    this.interval = setInterval(() => {
        this.timerCount(this.start,this.end);
    }, 1000);
  },
  methods: {
    timerCount(start,end){
        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = start - now;
        var passTime =  end - now;

        if(distance < 0 && passTime < 0){
            this.message = this.wordString.expired;
            this.statusType = "expired";
            this.statusText = this.wordString.status.expired;
            clearInterval(this.interval);
            return;

        }else if(distance < 0 && passTime > 0){
            this.calcTime(passTime);
            this.message = this.wordString.running;
            this.statusType = "running";
            this.statusText = this.wordString.status.running;

        } else if( distance > 0 && passTime > 0 ){
            this.calcTime(distance); 
            this.message = this.wordString.upcoming;
            this.statusType = "upcoming";
            this.statusText = this.wordString.status.upcoming;
        }
    },
    calcTime(dist){
      // Time calculations for days, hours, minutes and seconds
        this.days = Math.floor(dist / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((dist % (1000 * 60)) / 1000);
    }
    
  }
}
</script>