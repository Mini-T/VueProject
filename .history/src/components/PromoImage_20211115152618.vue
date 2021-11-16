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