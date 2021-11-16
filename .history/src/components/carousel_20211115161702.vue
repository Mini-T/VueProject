
    <Image :artistList="artistList" 
            v-model:selectedTab = "this.selectedTab"
            @update-selected-tab="this.updateSelectedTab"
            />
  </div>
    
</template>

<script>
import Image from "../components/PromoImage.vue";
export default {
  data() {
    return {};
  },
  name: "Carousel",
  components: {
    Image
  },
  selectedTab: "Angele",
  props: {
    selectedTab:String,
    artistList:Array
},
};
</script>

<style lang="scss">
#artistes {
  width: 85vw;
  display: flex;
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
.active {
  background: linear-gradient(75.5deg, #da8be3 0%, #9681fd 95.43%);
}
</style>