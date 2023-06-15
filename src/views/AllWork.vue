<template>
  <div class="container">
    <HeadingComp
      :heading="text['work']['headerWork']"
      :subheading="text['work']['subheaderWork']"
    />
    <div class="input-icon">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="icon" />
      <input
        id="search-input"
        class="small-text"
        type="text"
        :placeholder="text['work']['placeholderDefault']"
        v-model="inputSearch"
        @focus="onFocus"
        @blur="onBlur"
      />
    </div>
    <div class="works">
      <transition-group name="slide-vertical" appear>
        <WorkCardComp
          v-for="(work, index) in filterSearch"
          :key="index"
          :title="work.title"
          :logoStyle="work.logoStyle"
          :year="work.year"
          :badges="work.badges"
          :buttonText="text['work']['see-more']"
          @cardClickAction="openLink(work.link)"
        />
        <BaseVector v-if="filterSearch.length == 0" class="not-found" :vectorStyle="'not-found'" />
      </transition-group>
    </div>
  </div>
</template>

<script>
import HeadingComp from "@/components/UI/HeadingComp.vue";
import BaseVector from "@/components/UI/BaseVector.vue";
import WorkCardComp from "@/components/WorkCardComp.vue";
export default {
  name: "AllWork",
  components: {
    HeadingComp,
    WorkCardComp,
    BaseVector,
  },
  data() {
    return {
      lang: null,
      text: null,
      works: [
        {
          title: "Create MY Portfolio (Using Vue.js)",
          logoStyle: "portfolio",
          year: "In 2023s",
          badges: ["Personal Work", "Front-end Code"],
          link: "https://github.com/similanklinsmith/portfolio",
        },
        {
          title: "Create MY Portfolio (Designing in Figma)",
          logoStyle: "portfolio",
          year: "In 2023s",
          badges: ["Personal Work", "Figma"],
          link: "https://www.figma.com/file/riICj2v64aguQHNAXnaqr5/PORTFOLIO?type=design&node-id=435%3A2571&t=ZB7zzLQJ2SkJgLN6-1",
        },
        {
          title: "Appointment Scheduling System for KMUTT secretaries",
          logoStyle: "momento",
          year: "In 2022s",
          badges: ["Senior Project", "Front-end Code"],
          link: "https://github.com/similanklinsmith/senior_project",
        },
        {
          title: "Appointment Scheduling System for KMUTT secretaries",
          logoStyle: "momento",
          year: "In 2022s",
          badges: ["Senior Project", "Figma"],
          link: "https://www.figma.com/file/qBd8vG5H8XLJFVLzHW8HqP/INT365?type=design&node-id=11%3A91&t=lZfuqxCN7UOqsZNx-1",
        },
        {
          title: "Demo Project Kitchen-khraw (Using React.js)",
          logoStyle: "internship",
          year: "In 2022s",
          badges: ["Internship", "Front-end Code"],
          link: "https://gitlab.com/accenture-dev/kitchen-khraw",
        },
        {
          title: "Redesign Twitter Mobile",
          logoStyle: "twitter",
          year: "In 2022s",
          badges: ["Personal Work", "Figma"],
          link: "https://www.figma.com/file/SSOBohQWSs6E2cunUqVbTq/redesign-twitter?type=design&node-id=917%3A30&t=PML1PhaauV8JV3dg-1",
        },
        {
          title: "SPA Mini Project (Cloth Catalogs - NerdyStyle)",
          logoStyle: "nerdystyle",
          year: "In 2021s",
          badges: ["Mini Project", "Front-end Code"],
          link: "https://github.com/similanklinsmith/INT222_FrontEnd",
        },
        {
          title: "Google Drive Works (Banner, Infographic, Poster)",
          logoStyle: "drive",
          year: "Since 2019s - 2023s",
          badges: ["Others"],
          link: "https://drive.google.com/drive/u/0/folders/1YlMhq-BGDvXxnIWA6alNSOQxwoSIr1nb",
        },
      ],
      inputSearch: "",
    };
  },
  methods: {
    onFocus() {
      document.getElementById("search-input").placeholder =
        this.text["work"]["placeholderFocus"];
    },
    onBlur() {
      document.getElementById("search-input").placeholder =
        this.text["work"]["placeholderDefault"];
    },
    openLink(link) {
      window.open(link, "_blank");
    },
  },
  computed: {
    filterSearch() {
      return this.works.filter((work) => {
        return work.title
          .toLowerCase()
          .includes(this.inputSearch.toLowerCase());
      });
    },
  },
  beforeMount() {
    if (this.$cookies.get("lang")) {
      this.lang = this.$cookies.get("lang");
    } else {
      this.lang = "en";
    }
    this.text = require(`@/assets/langs/${this.lang}.json`);
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/colors/colors.scss";
.container {
  padding: 0 17.6rem 9rem 17.6rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 3.2rem;
  .input-icon {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    row-gap: 1.2rem;
    input[type="text"] {
      padding: 1.2rem 1.6rem;
      width: 100%;
      border-radius: 1.2rem;
      border: none;
      background-color: $light4;
      /* font-family: "Poppins", sans-serif; */
    }
    input[type="text"]:focus {
      outline: none;
      box-shadow: 0px 0px 0px 2px $primaryMain;
    }
    input::placeholder {
      font-size: 1.4rem;
      color: $dark4;
    }
    .icon {
      position: absolute;
      right: 0;
      font-size: 1.4rem;
      margin-right: 1rem;
      color: $dark4;
    }
  }
  .works {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.6rem;
    .not-found {
      grid-column: span 3;
    }
  }
}
@media (max-width: 64em) {
  .container {
    padding: 0 3.3rem 9rem 3.3rem;
    .works {
      grid-template-columns: repeat(2, 1fr);
      .not-found {
        grid-column: span 2;
      }
    }
  }
}
/* @media (max-width: 48em) {
  .container {
    .works {
      grid-template-columns: repeat(2, 1fr);
      .not-found {
        grid-column: span 2;
      }
    }
  }
} */
@media (max-width: 26.75em) {
  .container {
    padding: 0 1.8rem 9rem 1.8rem;
    .works {
      grid-template-columns: 1fr;
      .not-found {
        grid-column: span 1;
      }
    }
  }
}
</style>
