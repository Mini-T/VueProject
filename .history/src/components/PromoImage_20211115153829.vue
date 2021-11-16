<template>
  <div id="image" class="home-promo">
      <HomePromoNav 
        :topConcerts="topConcerts" 
        v-model:selectedTab="this.selectedTab" 
        @update-selected-tab="this.updateSelectedTab"
      />
      <HomePromoImage
        v-model:currentConcert="topConcerts.filter(obj => obj.id === 'angele')[0]"
       />
  </div>
</template>
<script>


export default {
    name:"Image"

}
        
  

</script>
