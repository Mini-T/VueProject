<template>
    <div id="image" :style="`background-image:url('${artistList[0].link}')`">
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
</template>
<script>


export default {
    data(){
        return{
             artistList: [
        {
          id: 1,
          tabId: "Angele",
          lieu: "Lyon, Palais des sports",
          date: "15 décembre 2020",
          link: "/images/Angele.jpg",
        },
        {
          id: 2,
          tabId: "Damso",
          lieu: "Lyon, Palais des sports",
          date: "15 décembre 2020",
          link: "/images/Ziak.jpg",
        },
        {
          id: 3,
          tabId: "Nekfeu",
          lieu: "Lyon, Palais des sports",
          date: "15 décembre 2020",
          link: "/images/Angele.jpg",
        },
        {
          id: 4,
          tabId: "Vald",
          lieu: "Lyon, Palais des sports",
          date: "15 décembre 2020",
          link: "/images/Angele.jpg",
        },
        {
          id: 5,
          tabId: "Ziak",
          lieu: "Lyon, Palais des sports",
          date: "15 décembre 2020",
          link: "/images/Ziak.jpg",
        },
      ],
    }
  },

        }
    },
    name:"Image",
    props:{
        cta: String,
    }
}
        
  

</script>
