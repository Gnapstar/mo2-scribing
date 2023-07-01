<template>
  <b-container>
    <div class="row align-items-end">
      <div class="col">
        <h1>Scribing</h1>
      </div>
      <div class="col-auto">
        <b-form-checkbox
          v-for="school in schools"
          :key="`school-${school}`"
          v-model="selectedSchools"
          name="selected-schools"
          :value="school"
          inline
        >
          {{ school }} <span class="text-muted">({{ getSpellsBySchools(school).length }})</span>
        </b-form-checkbox>
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

      <template #cell(more)="data">
        <b-button v-b-modal="`spell-${data.item.spell}`" variant="primary" size="sm">
          Show
        </b-button>

        <b-modal
          :id="`spell-${data.item.spell}`"
          :title="data.item.spell"
          ok-only
          ok-title="Close"
        >
          <template v-if="data.item.description">
            <h3>Spell</h3>

            <div class="mb-3">
              <label class="text-warning mb-0">Description</label>
              <p>
                {{ data.item.description }}
              </p>
            </div>

            <table class="table">
              <tbody>
                <tr v-for="property in spellPropertiesForSpell(data.item)" :key="property">
                  <td class="text-warning">{{ property }}</td>
                  <td class="col-shrink">{{ data.item[property] }}</td>
                </tr>
              </tbody>
            </table>
          </template>

          <h3>Scribing</h3>
          <div class="mb-3">
            <label class="text-warning mb-0">Magic School</label>
            <p>
              {{ data.item.school }}
            </p>
          </div>

          <div class="mb-3">
            <label class="text-warning mb-0">Scribe Level Requirements</label>
            <p>
              {{ data.item.min }} - {{ data.item.max }}
            </p>
          </div>

          <div class="mb-3">
            <label class="text-warning mb-0">Price</label>
            <p>
              {{ formatPrice(data.item.price) || "-" }}
            </p>
          </div>

          <div class="mb-3">
            <label class="text-warning mb-0">Scroll Location</label>
            <p>
              {{ data.item.location }}
            </p>
          </div>
        </b-modal>
      </template>

      <template #custom-foot>
        <b-tr>
          <b-td></b-td>
          <b-td></b-td>
          <b-td></b-td>
          <b-td></b-td>
          <b-td></b-td>
          <b-td>
            <strong class="text-nowrap">
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

const SPELL_PROPERTIES = [
  "heal",
  "damage",
  "mana",
  "range",
  "speed",
  "castTime",
  "skillRange",
  "alignment",
];

export default {
  name: 'IndexPage',

  mixins: [Helpers],

  data() {
    return {
      spellProperties: SPELL_PROPERTIES,

      selectedSchools: [],
      fields: [
        {
          key: "spell",
          tdClass: "text-nowrap"
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
          formatter: (value) => this.formatPrice(value),
          tdClass: "text-nowrap"
        }, {
          key: "more",
          label: "",
          tdClass: "col-shrink"
        },
      ],
    }
  },

  computed: {
    ...mapGetters({
      scribeLevel: "user/getScribeLevel",
      schools: "spells/getSchools",
      getSpellsBySchools: "spells/getSpellsBySchools",
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

    spellPropertiesForSpell(spell) {
      return this.spellProperties.filter((property) => {
        return !!spell[property];
      });
    },
  }
}
</script>
