<template>
  <section>
    <div class="routine-details">
      <p>{{detail.routineName}}</p>
<!--      <v-list two-line>-->
<!--              <v-list-item-group&ndash;&gt;-->
<!--                v-model="selected">-->
<!--                <template v-for="(device, devices) in routine">-->
<!--                            <v-list-item :key="routine.title">-->
<!--                              <template v-slot:default="{ active }">-->
<!--                                <v-list-item-content>-->
<!--                                  <v-list-item-title v-text="item.title"></v-list-item-title>-->

<!--                                  <v-list-item-subtitle-->
<!--                                    class="text&#45;&#45;primary"-->
<!--                                    v-text="item.headline"-->
<!--                                  ></v-list-item-subtitle>-->

<!--                                                               <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>-->
<!--                                </v-list-item-content>-->

<!--                                <v-list-item-action>-->
<!--                                  <v-list-item-action-text v-text="item.action"></v-list-item-action-text>-->
<!--                                 </v-list-item-action>-->
<!--                                </template>-->
<!--                            </v-list-item>-->
<!--                 </template>-->
<!--                </v-list-item-group>-->
<!--      </v-list>-->
    </div>
  </section>
</template>

<script>
import store from '@/store/store.js'

export default {
    name: "RoutineDetailView",

    props: {
      slug:{
          type: String,
          required: true,
      },

      routineSlug: {
        type: String,
        require: true
      },
    },

    computed: {
      detail() {
        return store.house.routines.find(
            detail => detail.slug == this.routineSlug
        )
      }
    }
}
</script>

<style scoped>
  .experience-details {
    display: flex;
    justify-content: space-between;
    padding: 40px 0;
  }
</style>