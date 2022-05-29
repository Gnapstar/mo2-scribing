<template>
  <div class="px-2">
    <b-container>
      <div class="row align-items-end">
        <div class="col">
          <h1>Chance Table</h1>
        </div>
        <div class="col-auto">
          <b-form-checkbox-group
            v-model="selectedSchools"
            :options="schools"
          />
        </div>
      </div>
    </b-container>

    <b-table
      v-if="items.length > 0"
      :fields="fields"
      :items="items"
      small
      striped
      hover
      responsive
    >
      <template #cell(spell)="data">
        <span class="text-left text-nowrap pr-3">
          {{ data.item.spell }}
        </span>
      </template>

      <template #cell(school)="data">
        <span
          class="text-left text-nowrap pr-3"
          :class="schoolColor(data.item.school)"
        >
          {{ data.item.school }}
        </span>
      </template>
    </b-table>

    <b-container v-else>
      <b-alert variant="warning" show>
        You haven't selected any schools!
      </b-alert>
    </b-container>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { Helpers } from "~/plugins/helpers";

export default {
  name: 'ChancePage',

  mixins: [Helpers],

  data() {
    return {
      selectedSchools: [],
      fields: [
        { key: "spell", stickyColumn: true },
        "school",
        ...[...Array(101).keys()].map((level) => ({
          key: `${level}`,
          class: 'text-center',
          tdAttr: (value, key, item) => {
            return {
              style: this.chanceColor(value)
            }
          }
        }))
      ]
    }
  },

  computed: {
    ...mapGetters({
      scribeLevel: "user/getScribeLevel",
      schools: "spells/getSchools",
    }),

    spells() {
      return this.$store.getters["spells/getSpellsBySchools"](this.selectedSchools);
    },

    items() {
      const spells = JSON.parse(JSON.stringify(this.spells));
      const range = [...Array(101).keys()];

      spells.forEach((spell) => {
        range.forEach((level) => {
          let chance = (level - spell.min) * (100 / (spell.max - spell.min));
          chance = Math.max(chance, 0);
          chance = Math.min(chance, 100);

          spell[level] = Math.round(chance);
        });
      });

      return spells;
    },
  },

  mounted() {
    this.$nextTick(() => {
      this.selectedSchools = this.schools;
    });
  },
}
</script>
