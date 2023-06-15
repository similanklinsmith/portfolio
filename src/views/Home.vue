<template>
  <div class="header-section" v-motion-slide-bottom>
    <div class="image-profile">
      <client-only>
        <Vue3Lottie
          animationLink="https://lottie.host/26895b0b-ef5e-483a-a3f5-f0f7d2cb5c80/yEmdEoA8hk.json"
          :speed="0.5"
          class="lottie"
        />
      </client-only>
    </div>
    <div class="profile">
      <div class="leading-section">
        <div class="leading">
          <div class="sub-header title-M">{{ text["home"]["welcome"] }}</div>
          <div class="header heading-L">MY Portfolio<span>.</span></div>
        </div>
        <div class="informations body-L">
          <div class="first-line">
            {{ text["home"]["I"] }}<span>{{ text["home"]["Deep"] }}</span
            >, {{ text["home"]["NiceToMeet"] }}
          </div>
          <div class="second-line">
            {{ text["home"]["headerContent"] }}
          </div>
        </div>
      </div>
      <div class="lower-section">
        <div class="leading-text label-S">
          {{ text["home"]["lookingMore"] }}
        </div>
        <BaseButton
          :icon="'only-icon'"
          :style="'gray'"
          :size="'small'"
          @onClick="
            openLink('https://www.linkedin.com/in/similan-klinsmith-a89379258/')
          "
        >
          <template v-slot:icon>
            <font-awesome-icon icon="fa-brands fa-linkedin" />
          </template>
        </BaseButton>

        <BaseButton
          :icon="'only-icon'"
          :style="'gray'"
          :size="'small'"
          @onClick="openLink('https://github.com/similanklinsmith')"
        >
          <template v-slot:icon>
            <font-awesome-icon icon="fa-brands fa-github" />
          </template>
        </BaseButton>
        <a href="mailto:deep25952@gmail.com">
          <BaseButton :icon="'only-icon'" :style="'gray'" :size="'small'">
            <template v-slot:icon>
              <font-awesome-icon icon="fa-solid fa-envelope" />
            </template>
          </BaseButton>
        </a>
      </div>
    </div>
  </div>
  <div class="work-experience" v-motion-slide-visible-once-bottom>
    <HeadingComp
      :heading="text['home']['headerExp']"
      :subheading="text['home']['subheaderExp']"
    />
    <div class="experiences">
      <WorkComp
        :emoji="'🖥️'"
        :leading="text['home']['expHeading1']"
        :period="text['home']['expsubheading1']"
        :content="text['home']['expContent1']"
      />
      <WorkComp
        :emoji="'🖥️'"
        :leading="text['home']['expHeading2']"
        :period="text['home']['expsubheading2']"
        :content="text['home']['expContent2']"
      />
      <WorkComp
        :emoji="'🎨'"
        :leading="text['home']['expHeading3']"
        :period="text['home']['expsubheading3']"
        :content="text['home']['expContent3']"
      />
    </div>
  </div>
  <div class="my-works" v-motion-slide-visible-once-bottom>
    <HeadingComp
      :heading="text['home']['headerWork']"
      :subheading="text['home']['subheaderWork']"
    />
    <div class="works">
      <div class="first-row">
        <div class="work-1">
          <div class="leading">
            <div class="leading-text">
              <div class="title-M">{{ text["home"]["workSubheading1"] }}</div>
              <div class="title-L">
                {{ text["home"]["workHeading1"] }}
              </div>
            </div>
            <BaseButton
              :icon="'no-icon'"
              :style="'white'"
              :size="'base'"
              :buttonText="text['home']['seeMore']"
              @onClick="
                openLink('https://github.com/similanklinsmith/senior_project')
              "
            />
          </div>
          <div class="image-flex">
            <div class="image-container">
              <div class="image-1">
                <img
                  src="@/assets/images/senior_project_desktop.png"
                  alt="desktop senior project"
                />
              </div>
            </div>
            <div class="image-container">
              <div class="image-2">
                <img
                  src="@/assets/images/senior_project_code_desktop.png"
                  alt="desktop senior project"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="work-2" v-if="windowWidth > 1024">
          <div class="leading">
            <div class="leading-text">
              <div class="title-M">{{ text["home"]["workSubheading2"] }}</div>
              <div class="title-L">
                {{ text["home"]["workHeading2"] }}
              </div>
            </div>
            <BaseButton
              :icon="'no-icon'"
              :style="'white'"
              :size="'base'"
              :buttonText="text['home']['seeMore']"
              @onClick="
                openLink(
                  'https://www.figma.com/file/qBd8vG5H8XLJFVLzHW8HqP/INT365?type=design&node-id=11%3A91&t=WmoGgoO2SCvaMYFn-1'
                )
              "
            />
          </div>
          <div class="image-flex">
            <div class="image-container">
              <div class="image-1">
                <img
                  src="@/assets/images/senior_project_desktop.png"
                  alt="desktop senior project"
                />
              </div>
              <div class="image-2">
                <img
                  src="@/assets/images/senior_project_mobile.png"
                  alt="desktop senior project"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="second-row">
        <div class="work-2" v-if="windowWidth <= 1024">
          <div class="leading">
            <div class="leading-text">
              <div class="title-M">{{ text["home"]["workSubheading2"] }}</div>
              <div class="title-L">
                {{ text["home"]["workHeading2"] }}
              </div>
            </div>
            <BaseButton
              :icon="'no-icon'"
              :style="'white'"
              :size="'base'"
              :buttonText="text['home']['seeMore']"
              @onClick="
                openLink(
                  'https://www.figma.com/file/qBd8vG5H8XLJFVLzHW8HqP/INT365?type=design&node-id=11%3A91&t=WmoGgoO2SCvaMYFn-1'
                )
              "
            />
          </div>
          <div class="image-flex">
            <div class="image-container">
              <div class="image-1">
                <img
                  src="@/assets/images/senior_project_desktop.png"
                  alt="desktop senior project"
                />
              </div>
              <div class="image-2">
                <img
                  src="@/assets/images/senior_project_mobile.png"
                  alt="desktop senior project"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="work-3">
          <div class="leading">
            <div class="leading-text">
              <div class="title-M">{{ text["home"]["workSubheading3"] }}</div>
              <div class="title-L">{{ text["home"]["workHeading3"] }}</div>
            </div>
            <BaseButton
              :icon="'no-icon'"
              :style="'white'"
              :size="'base'"
              :buttonText="text['home']['seeMore']"
              @onClick="
                openLink(
                  'https://www.figma.com/file/SSOBohQWSs6E2cunUqVbTq/redesign-twitter?type=design&node-id=903%3A6&t=mFl0fmoJZJmtBRbb-1'
                )
              "
            />
          </div>
          <div class="image-flex">
            <div class="image-container">
              <div class="image-1">
                <img
                  src="@/assets/images/redesign_twitter.png"
                  alt="desktop senior project"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="work-4">
          <div class="leading">
            <div class="leading-text">
              <div class="title-M">{{ text["home"]["workSubheading4"] }}</div>
              <div class="title-L">{{ text["home"]["workHeading4"] }}</div>
            </div>
            <BaseButton
              :icon="'no-icon'"
              :style="'white'"
              :size="'base'"
              :buttonText="text['home']['seeMore']"
              @onClick="
                openLink('https://github.com/similanklinsmith/INT222_FrontEnd')
              "
            />
          </div>
          <div class="image-flex">
            <div class="image-container">
              <div class="image-1">
                <img
                  src="@/assets/images/mini_project_desktop.png"
                  alt="desktop senior project"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="work-5">
          <div class="leading">
            <div class="leading-text">
              <div class="title-M">{{ text["home"]["workSubheading5"] }}</div>
              <div class="title-L">{{ text["home"]["workHeading5"] }}</div>
            </div>
            <BaseButton
              :icon="'no-icon'"
              :style="'white'"
              :size="'base'"
              :buttonText="text['home']['seeMore']"
              @onClick="
                openLink(
                  'https://www.figma.com/file/riICj2v64aguQHNAXnaqr5/PORTFOLIO?type=design&node-id=309%3A1755&t=C9R1I4XNanBdy37N-1'
                )
              "
            />
          </div>
          <div class="image-flex">
            <div class="image-container">
              <div class="image-1">
                <img
                  src="@/assets/images/portfolio_desktop.png"
                  alt="desktop senior project"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="university-acts" v-motion-slide-visible-once-bottom>
    <HeadingComp
      :heading="text['home']['headerAct']"
      :subheading="text['home']['subheaderAct']"
    />
    <div class="act-container">
      <div v-for="(act, index) in activities" :key="act.id">
        <ActComp
          @onToggle="toggle(index)"
          :isToggled="act.isSelected"
          :leading="act.leading"
        >
          <template v-slot:content-act>
            <ul v-for="(list, index) in act.content" :key="index">
              <li v-html="highlight(list, 'UX/UI designer')"></li>
            </ul>
          </template>
        </ActComp>
        <BaseLine :weight="'thin'" v-if="index != activities.length - 1" />
      </div>
    </div>
  </div>
  <div class="my-skills" v-motion-slide-visible-once-bottom>
    <HeadingComp
      :heading="text['home']['headerSkill']"
      :subheading="text['home']['subheaderSkill']"
    />
    <div class="container-skill">
      <div class="scroll">
        <SkillComp
          v-for="skill in skills"
          :key="skill.id"
          :icon="skill.icon"
          :leading="skill.leading"
          :value="skill.value"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ActComp from "@/components/ActComp.vue";
import HeadingComp from "@/components/UI/HeadingComp.vue";
import BaseButton from "@/components/UI/BaseButton.vue";
import BaseLine from "@/components/UI/BaseLine.vue";
import SkillComp from "@/components/SkillComp.vue";
import WorkComp from "@/components/WorkComp.vue";
export default {
  name: "HomeView",
  components: {
    ActComp,
    SkillComp,
    HeadingComp,
    WorkComp,
    BaseButton,
    BaseLine,
  },
  data() {
    return {
      lang: null,
      text: null,
      activities: null,
      skills: null,
      windowWidth: window.innerWidth,
    };
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    toggle(index) {
      this.activities[index].isSelected = !this.activities[index].isSelected;
    },
    openLink(link) {
      window.open(link, "_blank");
    },
    highlight(content, query) {
      return content.replace(new RegExp(query), (match) => {
        return '<span style="color:#7452FF">' + match + "</span>";
      });
    },
    changeLanguage(lang) {
      this.$cookies.set("lang", lang);
      window.location.reload();
    },
  },
  beforeMount() {
    if (this.$cookies.get("lang")) {
      this.lang = this.$cookies.get("lang");
    } else {
      this.lang = "en";
    }
    this.text = require(`@/assets/langs/${this.lang}.json`);
    this.activities = [
      {
        id: 1,
        isSelected: false,
        leading: this.text["home"]["actHeading1"],
        content: this.text["home"]["actContent1"],
      },
      {
        id: 2,
        isSelected: false,
        leading: this.text["home"]["actHeading2"],
        content: this.text["home"]["actContent2"],
      },
      {
        id: 3,
        isSelected: false,
        leading: this.text["home"]["actHeading3"],
        content: this.text["home"]["actContent3"],
      },
      {
        id: 4,
        isSelected: false,
        leading: this.text["home"]["actHeading4"],
        content: this.text["home"]["actContent4"],
      },
      {
        id: 5,
        isSelected: false,
        leading: this.text["home"]["actHeading5"],
        content: this.text["home"]["actContent5"],
      },
    ];
    this.skills = [
      {
        id: 1,
        leading: this.text["home"]["skillLeading1"],
        value: this.text["home"]["skillValue1"],
        icon: this.text["home"]["skillIcon1"],
      },
      {
        id: 2,
        leading: this.text["home"]["skillLeading2"],
        value: this.text["home"]["skillValue2"],
        icon: this.text["home"]["skillIcon2"],
      },
      {
        id: 3,
        leading: this.text["home"]["skillLeading3"],
        value: this.text["home"]["skillValue3"],
        icon: this.text["home"]["skillIcon3"],
      },
      {
        id: 4,
        leading: this.text["home"]["skillLeading4"],
        value: this.text["home"]["skillValue4"],
        icon: this.text["home"]["skillIcon4"],
      },
    ];
  },
  mounted() {
    window.scrollTo(0, 0);
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/colors/colors.scss";
.header-section {
  padding: 0 17.6rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1.6rem;
  width: 100%;
  .image-profile {
    background: $primaryMain;
    border-radius: 1.2rem;
    overflow: hidden;
    height: 35.2rem;
    /* width: 35.2rem; */
    width: 100%;
    min-width: 35.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .lottie {
      width: 14.472rem;
      width: 18.022rem;
    }
  }
  .profile {
    grid-column: 2 / span 2;
    background: $light4;
    padding: 3.2rem 4.8rem;
    border-radius: 1.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .leading-section {
      display: flex;
      flex-direction: column;
      row-gap: 1.2rem;
      .leading {
        display: flex;
        flex-direction: column;
        row-gap: 0.4rem;
        .sub-header {
          color: $mainText;
        }
        .header {
          color: $primaryMain;
          span {
            color: $secondaryMain;
          }
        }
      }

      .informations {
        color: $mainText;
        display: flex;
        flex-direction: column;
        row-gap: 0.4rem;
        .first-line {
          span {
            color: $primaryMain;
          }
        }
      }
    }
    .lower-section {
      display: flex;
      column-gap: 1.6rem;
      align-items: center;
      .leading-text {
        color: $description;
      }
    }
  }
}
.work-experience {
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 4.8rem 17.6rem;
  row-gap: 3.2rem;
  background-color: $light2;
  .experiences {
    display: flex;
    flex-direction: row;
    column-gap: 1.6rem;
    width: 100%;
  }
}
.my-works {
  padding: 0 17.6rem;
  display: flex;
  width: 100%;
  flex-direction: column;
  row-gap: 3.2rem;
  .works {
    display: flex;
    flex-direction: column;
    row-gap: 1.6rem;
    width: 100%;
    .first-row {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      column-gap: 1.6rem;
      height: 41.6rem;
      .work-1 {
        background-color: $primaryMain;
        border-radius: 1.2rem;
        grid-column: 1 / span 7;
        padding: 3.2rem;
        position: relative;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        row-gap: 2.4rem;
        .leading {
          display: flex;
          justify-content: space-between;
          column-gap: 1.6rem;
          .leading-text {
            display: flex;
            row-gap: 1.6rem;
            flex-direction: column;
            .title-M {
              color: $light2;
            }
            .title-L {
              color: $light4;
            }
          }
        }
        .image-flex {
          display: flex;
          column-gap: 1.6rem;
          position: relative;
          transition: 0.3s all ease-in-out;
          .image-container {
            position: relative;
            .image-1 {
              width: 43.2rem;
              height: 28.833rem;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .image-2 {
              width: 40.8rem;
              height: 27.2rem;
              position: absolute;
              bottom: -4.8rem;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
        &:hover .image-flex {
          transform: translateY(1rem);
          opacity: 0.85;
        }
      }
      .work-2 {
        background-color: $secondaryMain;
        border-radius: 1.2rem;
        padding: 3.2rem;
        position: relative;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        row-gap: 2.4rem;
        grid-column: span 5;
        .leading {
          display: flex;
          flex-direction: column;
          row-gap: 1.6rem;
          .leading-text {
            display: flex;
            row-gap: 1.6rem;
            flex-direction: column;
            .title-M {
              color: $light4;
            }
            .title-L {
              color: $mainText;
            }
          }
        }
        .image-flex {
          position: relative;
          transition: 0.3s all ease-in-out;
          .image-container {
            position: absolute;
            display: flex;
            column-gap: 1.6rem;
            left: -16rem;
            .image-1 {
              width: 40.8rem;
              height: 27.2rem;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .image-2 {
              width: 11.6rem;
              height: 22.9rem;
              margin-top: 2rem;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
        &:hover .image-flex {
          transform: translateY(1rem);
          opacity: 0.85;
        }
      }
    }
    .second-row {
      display: flex;
      column-gap: 1.6rem;
      height: 41.6rem;
      .work-3,
      .work-4,
      .work-5 {
        border-radius: 1.2rem;
        padding: 3.2rem;
        position: relative;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        row-gap: 2.4rem;
        width: 100%;
        .leading {
          display: flex;
          flex-direction: column;
          row-gap: 1.6rem;
          .leading-text {
            display: flex;
            row-gap: 1.6rem;
            flex-direction: column;
            .title-M {
              color: $light2;
            }
            .title-L {
              color: $light4;
            }
          }
        }
      }
      .work-3 {
        background-color: #1da1f2;
        .image-flex {
          display: flex;
          column-gap: 1.6rem;
          position: relative;
          transition: 0.3s all ease-in-out;
          transform: translateX(-6rem);
          .image-container {
            position: relative;
            .image-1 {
              width: 36rem;
              height: 26.8rem;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
        &:hover .image-flex {
          transform: translateX(-6rem) translateY(1rem);
          opacity: 0.85;
        }
      }
      .work-4 {
        background-color: $mainText;
        .image-flex {
          display: flex;
          column-gap: 1.6rem;
          position: relative;
          transition: 0.3s all ease-in-out;
          .image-container {
            position: relative;
            .image-1 {
              width: 33.5rem;
              height: 22.3rem;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
        &:hover .image-flex {
          transform: translateY(1rem);
          opacity: 0.85;
        }
      }
      .work-5 {
        background-color: $primaryMain;
        .image-flex {
          display: flex;
          column-gap: 1.6rem;
          position: relative;
          transition: 0.3s all ease-in-out;
          transform: translateX(-6rem);
          .image-container {
            position: relative;
            .image-1 {
              width: 33.5rem;
              height: 22.3rem;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
        &:hover .image-flex {
          transform: translateX(-6rem) translateY(1rem);
          opacity: 0.85;
        }
      }
    }
  }
}
.university-acts {
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0 17.6rem;
  row-gap: 3.2rem;
  .act-container {
    display: flex;
    flex-direction: column;
    padding: 2.4rem 3.2rem;
    row-gap: 1.6rem;
    width: 100%;
    height: fit-content;
    background-color: $light4;
    border-radius: 1.2rem;
  }
}
.my-skills {
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 4.8rem 17.6rem 7.2rem 17.6rem;
  row-gap: 3.2rem;
  background-color: $light2;
  .container-skill {
    .scroll {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.6rem;
    }
  }
}
@media (max-width: 64em) {
  .header-section {
    padding: 0 3.3rem;
    display: flex;
    flex-direction: column;
    row-gap: 1.6rem;
    width: 100%;
    .profile {
      height: 35.2rem;
    }
  }
  .work-experience {
    padding: 4.8rem 3.3rem;
  }
  .my-works {
    padding: 0 3.3rem;
    .works {
      display: flex;
      flex-direction: column;
      row-gap: 1.6rem;
      .first-row {
        display: flex;
        flex-direction: column;
        row-gap: 1.6rem;
        height: fit-content;
        .work-1 {
          height: 41.6rem;
          .leading {
            display: flex;
            flex-direction: column;
            row-gap: 1.6rem;
          }
        }
      }
      .second-row {
        display: grid;
        gap: 1.6rem;
        height: fit-content;
        grid-template-columns: repeat(2, 1fr);
        .work-2,
        .work-3,
        .work-4,
        .work-5 {
          height: 41.6rem;
          border-radius: 1.2rem;
          padding: 3.2rem;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          row-gap: 2.4rem;
          width: 100%;
          .leading {
            display: flex;
            flex-direction: column;
            row-gap: 1.6rem;
            .leading-text {
              display: flex;
              row-gap: 1.6rem;
              flex-direction: column;
              .title-M {
                color: $light2;
              }
              .title-L {
                color: $light4;
              }
            }
          }
        }
        .work-3,
        .work-5 {
          .image-flex {
            transform: translateX(0rem);
          }
          &:hover .image-flex {
            transform: translateX(0) translateY(1rem);
            opacity: 0.85;
          }
        }
        .work-2 {
          background-color: $secondaryMain;
          .leading {
            display: flex;
            flex-direction: column;
            row-gap: 1.6rem;
            .leading-text {
              display: flex;
              row-gap: 1.6rem;
              flex-direction: column;
              .title-M {
                color: $light4;
              }
              .title-L {
                color: $mainText;
              }
            }
          }
          .image-flex {
            position: relative;
            transition: 0.3s all ease-in-out;
            .image-container {
              display: f;
              .image-1 {
                width: 40.8rem;
                height: 27.2rem;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .image-2 {
                width: 11.6rem;
                height: 22.9rem;
                margin-top: 2rem;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }
          &:hover .image-flex {
            transform: translateY(1rem);
            opacity: 0.85;
          }
        }
      }
    }
  }
  .university-acts {
    padding: 0 3.3rem;
  }
  .my-skills {
    padding: 4.8rem 3.3rem 7.2rem 3.3rem;
    overflow: hidden;
    .container-skill {
      display: block;
      overflow: scroll;
      .scroll {
        display: flex;
        column-gap: 1.6rem;
        width: fit-content;
      }
    }
  }
}
@media (max-width: 26.75em) {
  .header-section {
    padding: 0 1.8rem;
    .image-profile {
      min-width: 100%;
    }
    .profile {
      padding: 3.2rem 2.4rem;
    }
  }
  .work-experience {
    padding: 4.8rem 1.8rem;
    .experiences {
      flex-direction: column;
      row-gap: 1.6rem;
    }
  }
  .my-works {
    padding: 0 1.8rem;
    .works {
      .first-row {
        .work-1 {
          padding: 3.2rem 2.4rem;
          .image-flex {
            .image-container {
              .image-1,
              .image-2 {
                width: 28.196rem;
                height: 18.819rem;
              }
              .image-1 {
                bottom: -2.4rem;
              }
            }
          }
        }
      }
      .second-row {
        grid-template-columns: 1fr;
        .work-2,
        .work-3,
        .work-4,
        .work-5 {
          padding: 3.2rem 2.4rem;
        }
        .work-2 {
          .image-flex {
            .image-container {
              position: absolute;
              display: flex;
              column-gap: 1.6rem;
              left: 0;
              .image-1 {
                width: 28.196rem;
                height: 18.819rem;
              }
              .image-2 {
                width: 9.6rem;
                height: 19rem;
              }
            }
          }
        }
      }
    }
  }
  .university-acts {
    padding: 0 1.8rem;
    .act-container {
      padding: 2.4rem;
    }
  }
  .my-skills {
    padding: 4.8rem 1.8rem 7.2rem 1.8rem;
    .container-skill {
      display: block;

      .scroll {
        display: flex;
        flex-direction: column;
        column-gap: 1.6rem;
        width: fit-content;
      }
    }
  }
}
</style>
