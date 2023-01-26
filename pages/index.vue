<template>
  <b-container>
    <div class="row align-items-end">
      <div class="col">
        <h1>Scribing</h1>
      </div>
      <div class="col-auto">
        <b-form-checkbox-group
          v-model="selectedSchools"
          :options="schools"
        />
      </div>
    </div>

    <b-table
      v-if="items.length > 0"
      :items="items"
      :fields="fields"
      small
      striped
      hover
      responsive
    >
      <template #cell(spell)="data">
        <b-form-checkbox
          :checked="data.item.scribed"
          @change="setScribed(data.item.spell, $event)"
        >
          {{ data.item.spell }}
        </b-form-checkbox>
      </template>

      <template #cell(chance)="data">
        {{ data.item.chance }}%
      </template>

      <template #custom-foot>
        <b-tr>
          <b-td></b-td>
          <b-td></b-td>
          <b-td></b-td>
          <b-td></b-td>
          <b-td></b-td>
          <b-td>
            <strong>
              {{ formatPrice(totalPrice) }}*
            </strong>
          </b-td>
          <b-td></b-td>
        </b-tr>
      </template>
    </b-table>

    <b-alert v-else variant="warning" show>
      You haven't selected any schools!
    </b-alert>

    <em class="small">* Prices are based upon estimated market trends</em>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import { Helpers } from "~/plugins/helpers";

export default {
  name: 'IndexPage',

  mixins: [Helpers],

  data() {
    return {
      selectedSchools: [],
      fields: [
        {
          key: "spell"
        }, {
          key: "school",
          tdClass: (value) => this.schoolColor(value)
        }, {
          key: "min"
        }, {
          key: "max"
        }, {
          key: "chance",
          tdAttr: (value, key, item) => {
            return { style: this.chanceColor(value) }
          }
        }, {
          key: "price",
          formatter: (value) => this.formatPrice(value)
        }, {
          key: "location",
        },
      ],
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
      spells.forEach((spell) => {
        if ((typeof spell.min !== "number") || (typeof spell.max !== "number")) {
          spell.chance = "-";
          return true;
        }

        let chance = (this.scribeLevel - spell.min) * (100 / (spell.max - spell.min));
        chance = Math.max(chance, 0);
        chance = Math.min(chance, 100);

        spell.chance = Math.round(chance);
      });

      return spells;
    },

    totalPrice() {
      return this.items.reduce((prev, current) => {
        if (typeof current.price !== "number") {
          return prev;
        }

        return prev + current.price
      }, 0);
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.selectedSchools = this.schools;
    });
  },

  methods: {
    setScribed(spell, scribed) {
      this.$store.commit("spells/setScribed", {
        spell,
        scribed
      });
    },
  }
}
</script>
