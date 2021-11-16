<template>
  <div id="artistes">
    <button id="grid-1" class="onglet">{{ artistList[0].tabId }}</button>
    <button id="grid-2" class="onglet">{{ artistList[1].tabId }}</button>
    <hr id="hr1" />
    <button id="grid-3" class="onglet">{{ artistList[2].tabId }}</button>
    <hr id="hr2" />
    <button id="grid-4" class="onglet">{{ artistList[3].tabId }}</button>
    <hr id="hr3" />
    <button id="grid-5" class="onglet">{{ artistList[4].tabId }}</button>
    <div id="image" :style="`background-image:url('${currentBg}')`">
      <div id="darklayer">
        <div class="left">
          <h1 class="desctitle">
            {{ artistList[0].date }}
          </h1>
          <h2 class="descsubtitle">{{ artistList[0].lieu }}</h2>
        </div>
        <div class="right">
          <button id="reserver">{{ cta }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
// currentBg = artistList[0].link;
// currentLieu = artistList[0].lieu;

export default {
  data() {
    
    return {
      
      artistList:[
        {
        tabId:"Angele",
        lieu:"Lyon, Palais des sports",
        date:"15 décembre 2020",
        link:"../../public/images/Angele.jpg"
        },
        {
        tabId:"dems",
        lieu:"Lyon, Palais des sports",
        date:"15 décembre 2020",
        link:"../../public/images/Angele.jpg"
        },
        {
        tabId:"nekfeu",
        lieu:"Lyon, Palais des sports",
        date:"15 décembre 2020",
        link:"../../public/images/Angele.jpg"
        },
        {
        tabId:"Vald",
        lieu:"Lyon, Palais des sports",
        date:"15 décembre 2020",
        link:"../../public/images/Angele.jpg"
        },
        {
        tabId:"Ziak",
        lieu:"Lyon, Palais des sports",
        date:"15 décembre 2020",
        link:"../../public/images/Angele.jpg"
        },
      ]
    }
    ;
  },
  name: "Carousel",
  props: {
    artiste1: String,
    artiste2: String,
    artiste3: String,
    artiste4: String,
    artiste5: String,
    date: String,
    lieu: String,
    cta: String,
    currentBg = artistList[0].link,
  },
};
</script>

<style lang="scss">
.desctitle {
  margin-top: 0px;
  font-weight: 800;
  font-size: 40px;
}
.descsubtitle {
  font-weight: 200;
  font-size: 25px;
  margin-bottom: 0px;
}
#reserver {
  color: white;
  background: linear-gradient(72.83deg, #d48ae6 0%, #9a82fc 100%);
  border-radius: 14px;
  border: none;
  font-size: 25px;
  font-weight: 800;
  text-transform: uppercase;
  width: 219px;
  height: 75px;
}
.left {
  padding: 50px;
  padding-left: 100px;
  width: 100%;
  justify-self: flex-start;
}
.right {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 50px;
}
$hrnames: "hr1" "hr2" "hr3";
@each $hrname in $hrnames {
  ##{$hrname} {
    grid-area: #{$hrname};
  }
}
#artistes {
  width: 85vw;
  height: 90vh;
  display: grid;
  grid-template-rows: 10vh 3fr;
  grid-template-columns: 1fr 1fr 1px 1fr 1px 1fr 1px 1fr;
  grid-template-areas:
    "grid-1 grid-2 hr1 grid-3 hr2 grid-4 hr3 grid-5"
    "img img img img img img img img";
}
.onglet {
  font-weight: 800;
  font-size: 25px;
  border: none;
  color: white;
  border-radius: 30px 30px 0px 0px;
  width: 17vw;
  height: 10vh;
}
$names: "grid-1" "grid-2" "grid-3" "grid-4" "grid-5";
@each $name in $names {
  ##{$name} {
    grid-area: #{$name};
    background: transparent;
  }
}
#grid-1 {
  background: linear-gradient(75.5deg, #da8be3 0%, #9681fd 95.43%);
}
#image {
  background-size: cover;
  background-position: center;
  border-radius: 0px 0px 75px 75px;
  width: 100%;
  grid-area: img;
}
#darklayer {
  border-radius: 0px 0px 75px 75px;
  display: flex;
  align-items: flex-end;
  background: linear-gradient(
    360deg,
    rgba(37, 26, 35, 0.98) 0%,
    rgba(37, 26, 35, 0) 100%
  );
  width: 100%;
  height: 100%;
}
</style>