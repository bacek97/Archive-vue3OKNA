<template>
    <ul id="my-list" v-on:mousemove="moveAt">
        <li v-for="(item, key) in items" ref="li"
            v-bind:style="{
                position: positionByKey(key),
                left: leftByKey(key),
                top: topByKey(key)
            }">
            <i class="fa fa-arrows-alt"
               @mousedown="myDrag(key, $event)"
               @mouseup="myDragStop">{{item.title}}</i>
            
        </li>
    </ul>

</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      en: '/about-us', // -> accessible at /about-us (no prefix since it's the default locale)
      fr: '/a-propos', // -> accessible at /fr/a-propos
      ru: '/sobre'     // -> accessible at /es/sobre
    }
  },
  methods: {
    myDrag(key, event) {
      console.log(key, event)
        this.draggableIndex = key;
        this.moveAt(event);
    },
    moveAt(event){
        if(this.draggableIndex !== -1){
            this.dragLeft = event.pageX - 12;
            // this.dragTop = event.pageY - 12;
        }
    },
    myDragStop() {
        // сбрасываем все значения к начальным
        this.draggableIndex = -1;
        this.dragLeft = 0;
        this.dragTop = 0;
    },
    isDragging(key) {
        return this.draggableIndex === key;
    },
    positionByKey(key) {
        return this.isDragging(key) ? 'absolute' : 'relative'
    },
    leftByKey(key) {
        return this.isDragging(key) ? this.dragLeft + 'px' : 0
    },
    topByKey(key) {
        return this.isDragging(key) ? this.dragTop + 'px' : 0
    },
  },
   data() {
      return {
        items: [
          { title: 'Foo' },
          { title: 'Bar' }
        ],
        draggableIndex: -1,
        dragTop: 0,
        dragLeft: 0
      }
    },
}
</script>