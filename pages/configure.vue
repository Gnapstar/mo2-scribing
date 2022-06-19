<template>
  <b-container>
    <div class="row">
      <div class="col">
        <h1>Configure</h1>
      </div>
      <div class="col-auto">
        <b-button variant="primary" size="sm" @click="resetSpells">
          Reset
        </b-button>
      </div>
    </div>
    <div class="row align-items-end">
      <div class="col">
        <p>
          Change the current price of all the scrolls. Please note that these changes will ONLY affect you.
        </p>
      </div>
      <div class="col-auto">
        <b-form-checkbox-group
          v-model="selectedSchools"
          :options="schools"
        />
      </div>
    </div>

    <b-table
      v-if="spells.length > 0"
      :items="spells"
      :fields="fields"
      small
      striped
      hover
      responsive
    >
      <template #cell(priceInput)="data">
        <b-form-input
          :value="data.item.price"
          type="number"
          min="0"
          @input="setPrice(data.item.spell, $event)"
        />
      </template>

      <template #cell(price)="data">
        <div class="text-nowrap">
          {{ formatPrice(data.item.price) }}
        </div>
      </template>
    </b-table>

    <b-alert v-else variant="warning" show>
      You haven't selected any schools!
    </b-alert>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import { Helpers } from "~/plugins/helpers";

export default {
  name: 'ConfigurePage',

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
          key: "priceInput",
          label: "Price (silver)"
        }, {
          key: "price",
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
  },

  mounted() {
    this.$nextTick(() => {
      this.selectedSchools = this.schools;
    });
  },

  methods: {
    setPrice(spell, price) {
      this.$store.commit("spells/setPrice", {
        spell,
        price
      });
    },

    resetSpells() {
      this.$store.commit("spells/reset");
    }
  }
}
</script>
