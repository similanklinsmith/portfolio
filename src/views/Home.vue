<template>
  <div class="header-section" v-motion-slide-bottom>
    <div class="image-profile">
      <client-only>
        <Vue3Lottie
          animationLink="https://lottie.host/376f15af-e78d-41a2-b731-71e6e014ef38/2vt6ggf9RD.json"
          :speed="0.5"
          class="lottie"
        />
      </client-only>
    </div>
    <div class="profile">
      <div class="leading-section">
        <div class="leading">
          <div class="sub-header title-M">Welcome to</div>
          <div class="header heading-L">MY Portfolio<span>.</span></div>
        </div>
        <div class="informations body-L">
          <div class="first-line">
            I’m <span>Deep</span>, nice to meet you here.
          </div>
          <div class="second-line">
            This page contains my personal works and experiences from both
            university and firm since 2019s - 2023s.
          </div>
        </div>
      </div>
      <div class="lower-section">
        <div class="leading-text label-S">Looking for more</div>
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
      :heading="'MY Working Experiences'"
      :subheading="'Concluding the internship programme of university and part-time job'"
    />
    <div class="experiences">
      <WorkComp
        :emoji="'🖥️'"
        :leading="'INTERNSHIP'"
        :period="'Jan - April 2022'"
        :content="'Being internship at Accenture Thailand as Front-end Developer'"
      />
      <WorkComp
        :emoji="'🖥️'"
        :leading="'PART-TIME'"
        :period="'Jun - Jul 2022'"
        :content="'Being Part-time at Accenture Thailand as Front-end Developer'"
      />
      <WorkComp
        :emoji="'🎨'"
        :leading="'PART-TIME'"
        :period="'Jan - May 2023'"
        :content="'Being Part-time at INNOVASIVE CO., LTD. as UX/UI Designer'"
      />
    </div>
  </div>
  <div class="my-works" v-motion-slide-visible-once-bottom>
    <HeadingComp
      :heading="'MY Works'"
      :subheading="'Concluding the personal works and senior project, since 2019s - 2023s'"
    />
    <div class="works">
      <div class="first-row">
        <div class="work-1">
          <div class="leading">
            <div class="leading-text">
              <div class="title-M">Senior Project • Front-end Code</div>
              <div class="title-L">
                Appointment Scheduling System for KMUTT secretaries
              </div>
            </div>
            <BaseButton
              :icon="'no-icon'"
              :style="'white'"
              :size="'base'"
              :buttonText="'see more'"
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
        <div class="work-2">
          <div class="leading">
            <div class="leading-text">
              <div class="title-M">Senior Project • Figma</div>
              <div class="title-L">
                Appointment Scheduling System for KMUTT secretaries
              </div>
            </div>
            <BaseButton
              :icon="'no-icon'"
              :style="'white'"
              :size="'base'"
              :buttonText="'see more'"
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
        <div class="work-3">
          <div class="leading">
            <div class="leading-text">
              <div class="title-M">Personal Work • Figma</div>
              <div class="title-L">Redesign Twitter Mobile</div>
            </div>
            <BaseButton
              :icon="'no-icon'"
              :style="'white'"
              :size="'base'"
              :buttonText="'see more'"
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
              <div class="title-M">Mini Project • Front-end Code</div>
              <div class="title-L">SPA Mini Project</div>
            </div>
            <BaseButton
              :icon="'no-icon'"
              :style="'white'"
              :size="'base'"
              :buttonText="'see more'"
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
              <div class="title-M">Personal Work • Figma</div>
              <div class="title-L">Create MY Portfolio</div>
            </div>
            <BaseButton
              :icon="'no-icon'"
              :style="'white'"
              :size="'base'"
              :buttonText="'see more'"
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
      :heading="'MY University Acts'"
      :subheading="'Concluding the activities in university from 2019s - 2023s'"
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
      :heading="'MY Skills'"
      :subheading="'Skills that I have learned and practiced'"
    />
    <div class="container-skill">
      <SkillComp
        v-for="skill in skills"
        :key="skill.id"
        :icon="skill.icon"
        :leading="skill.leading"
        :value="skill.value"
      />
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
      activities: [
        {
          id: 1,
          isSelected: false,
          leading: "What had I done for 2019?",
          content: [
            "Being responsible for the part of UX/UI designer and Front-end Developer of mini-project in Web Technology (INT102)",
            "Desiging my own website by using Figma in User Experience Design (INT104)",
          ],
        },
        {
          id: 2,
          isSelected: false,
          leading: "What had I done for 2020?",
          content: [
            "Being resposible for designing infographics of SIT faculty",
            "Receiving a scholarship of Ajinomoto Talent Scholarship (ATS)",
            "Participating in the part of designing infographics for activity of the first year students -- PRE-IT#26 Starter Pack",
          ],
        },
        {
          id: 3,
          isSelected: false,
          leading: "What had I done for 2021?",
          content: [
            "Being responsible for the part of UX/UI designer and Front-end Developer of Integrated project I (INT221)",
            "Participating in the part of designing infographics for activity of the first year students -- IT#27 Starter Pack",
            "Being responsible for the part of UX/UI designer and Frontend Developer of Integrated project II (INT222)",
            "Participating in the part of UX/UI designer and Graphic Design in website for students of SIT ITCHEATSHEET",
          ],
        },
        {
          id: 4,
          isSelected: false,
          leading: "What had I done for 2022?",
          content: [
            "Being responsible for the part of UX/UI designer and Front-end Developer of Senior Project",
            "Being internship at Accenture Thailand as Front-end Developer",
            "Being part-time at Accenture Thailand as Front-end Developer",
            "The representatives of a former internship student at ACCENTURE Thailand to narrate the experience at the SEA ACCENTURE online conference with the SEA internship student of ACCENTURE",
          ],
        },
        {
          id: 5,
          isSelected: false,
          leading: "What had I done for 2023?",
          content: [
            "Being part-time at INNOVASIVE CO., LTD. as UX/UI designer",
          ],
        },
      ],
      skills: [
        {
          id: 1,
          leading: "Front-end",
          value: "Vue.js, Flutter & Dart, HTML, CSS, JavaScript",
          icon: "fa-code",
        },
        {
          id: 2,
          leading: "Design",
          value: "Figma, Adobe Photoshop, Adobe Illustrator",
          icon: "fa-palette",
        },
        {
          id: 3,
          leading: "Language & Communicationd",
          value: "Thai, English, Italian",
          icon: "fa-language",
        },
        {
          id: 4,
          leading: "Additionals Skills",
          value: "MySQL, React.js, JAVA",
          icon: "fa-ellipsis-vertical",
        },
      ],
    };
  },
  methods: {
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
  },
  mounted() {
    window.scrollTo(0, 0);
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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.6rem;
  }
}
</style>
