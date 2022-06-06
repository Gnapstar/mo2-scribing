<template>
  <b-container>
    <div class="row">
      <div class="col-12 col-md">
        <h1>Leveling Guide</h1>
      </div>
      <div class="col-12 col-md-auto">
        <div class="card mb-2">
          <div class="card-header text-nowrap">
            Cost from {{ scribeLevel }} to 100
          </div>
          <div class="card-body" :class="{'p-0': costToMaxLevel.book}">
            <table v-if="costToMaxLevel.book" class="table table-sm mb-0">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Book</td>
                  <td>{{ formatPrice(costToMaxLevel.book) }}</td>
                </tr>
                <tr>
                  <td>Scrolls</td>
                  <td>{{ formatPrice(costToMaxLevel.scrolls) }}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th>Total</th>
                  <th>{{ formatPrice(costToMaxLevel.total) }}</th>
                </tr>
              </tfoot>
            </table>
            <template v-else>
              {{ formatPrice(costToMaxLevel.total) }}
            </template>
          </div>
        </div>
      </div>
    </div>

    <b-tabs content-class="mt-3">
      <b-tab title="Leveling Table" active>
        <div class="row">
          <div class="col">
            <p>
              Leveling scribing is a costly process that can be broken down into three parts. Read the scribing book to level 70, then scribe Greater Heal or Mental Healing to 75, and finish it off by scribing any of the available scrolls to 100 (Resurrect can be used from 75-100 and is available in the vendor for 10g/each).
            </p>
          </div>
          <div class="col-auto d-flex align-items-end">
            <b-form-checkbox
              v-model="showAllLevels"
              class="mb-2"
            >
              Show all levels
            </b-form-checkbox>
          </div>
        </div>

        <b-table
          v-if="levelTable.length > 0"
          :items="levelTable"
          :fields="levelFields"
          small
          striped
          hover
          responsive
        >
          <template #cell(cheapestScroll)="data">
            <template v-if="data.item.cheapestScroll.price">
              <b-button
                v-b-modal="`info-${data.item.cheapestScroll.uuid}`"
                variant="link"
                class="p-0 text-warning"
              >
                {{ formatPrice(data.item.cheapestScroll.price) }}
              </b-button>
              <b-modal
                :id="`info-${data.item.cheapestScroll.uuid}`"
                title="Available Scrolls"
                ok-only
                hide-header-close
                header-class="d-flex justify-content-center"
                body-class="p-0"
              >
                <table class="table table-hover mb-0">
                  <thead>
                    <tr>
                      <th>Scroll</th>
                      <th>Min</th>
                      <th>Max</th>
                      <th>Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(scroll, index) in data.item.cheapestScroll.availableScrolls"
                      :key="`scroll-${index}`"
                      :class="{
                        'bg-warning': scroll.price === data.item.cheapestScroll.price
                      }"
                    >
                      <td>{{ scroll.spell }}</td>
                      <td>{{ scroll.min }}</td>
                      <td>{{ scroll.max }}</td>
                      <td>{{ formatPrice(scroll.price) }}</td>
                    </tr>
                  </tbody>
                </table>
              </b-modal>
            </template>
            <span v-else>{{ formatPrice(data.item.cheapestScroll.price) }}</span>
          </template>

          <template #cell(costForLevel)="data">
            {{ formatPrice(data.item.costForLevel) }}
          </template>

          <template #cell(costToLevel)="data">
            {{ formatPrice(data.item.costToLevel) }}
          </template>
        </b-table>

        <b-alert v-else variant="success" show>
          Amazing! You've maxed the Scribing profession!
        </b-alert>
      </b-tab>
      <b-tab title="Scrolls">
        <p>
          In order to level scribing, you need to scribe a scroll with a greater max chance than your current level. The table belows shows which scrolls you can use to level scribing further.
        </p>

        <b-table
          v-if="scrollsTable.length > 0 && scribeLevel < 100"
          :items="scrollsTable"
          :fields="scrollsFields"
          small
          striped
          hover
          responsive
        >
          <template #cell(school)="data">
            <span
              class="text-left text-nowrap pr-3"
              :class="schoolColor(data.item.school)"
            >
              {{ data.item.school }}
            </span>
          </template>

          <template #cell(price)="data">
            <span>{{ formatPrice(data.item.price) }}</span>
          </template>
        </b-table>

        <b-alert v-else variant="success" show>
          Amazing! You've maxed the Scribing profession!
        </b-alert>
      </b-tab>
    </b-tabs>

  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import { Helpers } from "~/plugins/helpers";

export default {
  name: 'LevelingPage',

  mixins: [Helpers],

  data() {
    return {
      showAllLevels: false,
      experiencePerScroll: 90,
      costs: {
        scribeBook: 2000,
      },
      levelFields: [
        { key: "from", class: "col-shrink text-right" },
        { key: "to", class: "col-shrink text-right" },
        { key: "experience", class: "text-right" },
        { key: "cheapestScroll", class: "text-right" },
        { key: "scrollsForLevel", class: "text-right" },
        { key: "costForLevel", class: "text-right" },
        { key: "costToLevel", class: "text-right" },
      ],

      scrollsFields: [
        { key: "spell" },
        { key: "school" },
        { key: "min", class: "col-shrink text-right" },
        { key: "max", class: "col-shrink text-right" },
        { key: "price" },
      ],
    }
  },

  computed: {
    ...mapGetters({
      scribeLevel: "user/getScribeLevel",
      spells: "spells/getSpells",
    }),

    levelTable() {
      const levels = [...Array(!this.showAllLevels ? 100 - this.scribeLevel : 100).keys()]
      return levels.map((level) => {
        const fromLevel = !this.showAllLevels ? this.scribeLevel + level : level;
        const nextLevel = fromLevel + 1;

        return {
          from: fromLevel,
          to: nextLevel,
          experience: this.experienceForLevel(nextLevel),
          cheapestScroll: {
            ...{
              uuid: this.getUuid(),
              availableScrolls: this.getAvailableScrolls(nextLevel),
            },
            ...this.cheapestScrollPrice(nextLevel)
          },
          scrollsForLevel: this.scrollsForLevel(nextLevel),
          costForLevel: this.costForLevel(nextLevel),
          costToLevel: this.costToLevel(nextLevel),
        }
      });
    },

    scrollsTable() {
      return this.spells.filter((spell) => spell.max >= this.scribeLevel);
    },

    costToMaxLevel() {
      const cost = {
        book: 0,
        scrolls: 0,
      };

      if (this.scribeLevel < 70) {
        cost.book = this.costs.scribeBook;
      }

      cost.scrolls = this.costToLevel(100) - this.costToLevel(this.scribeLevel);

      cost.total = cost.book + cost.scrolls;

      return cost;
    },
  },

  methods: {
    getUuid() {
      return Math.round(Math.pow(10, 10) * Math.random());
    },

    experienceForLevel(level) {
      return Math.round((level) * 10.59 - 5.1); // Close enough 💩
    },

    getLowestPricedScroll(scrolls) {
      return scrolls.reduce((min, p) => !!p.price && p.price < min.price ? p : min, scrolls[0]);
    },

    getAvailableScrolls(level) {
      return this.spells.filter((scroll) => {
        if (level >= 70 && level <= 75) {
          return scroll.max >= 70;
        }

        return scroll.max > 75;
      });
    },

    cheapestScrollPrice(level) {
      // Book
      if (level <= 70) {
        return { price: 0 };
      }

      return this.getLowestPricedScroll(this.getAvailableScrolls(level));
    },

    scrollsForLevel(level) {
      return (this.experienceForLevel(level) / this.experiencePerScroll).toFixed(2);
    },

    costForLevel(level) {
      return Math.round(this.scrollsForLevel(level) * this.cheapestScrollPrice(level).price);
    },

    costToLevel(level) {
      if (level <= 70) {
        return 0;
      }

      if (!this.showAllLevels && level <= this.scribeLevel) {
        return 0;
      }

      return this.costForLevel(level) + this.costToLevel(level - 1); // + cost for previous sum to here
    }
  }
}
</script>
<style>
  .col-shrink {
    width: 1%;
    white-space: nowrap;
  }
</style>
