<template>
  <div>
    <div class="nav-bar">
      <div class="logo title-S">
        <div class="image-logo">
          <img src="@/assets/images/portfolio_logo.png" alt="logo" />
        </div>
        DDIVDEEP
      </div>
      <div class="tabs">
        <div class="tab body-M">Home</div>
        <div class="tab body-M">About</div>
        <div class="tab body-M">TH|EN</div>
      </div>
    </div>
    <div class="content">
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
            <BaseButton :icon="'only-icon'" :style="'gray'" :size="'small'">
              <template v-slot:icon>
                <font-awesome-icon icon="fa-brands fa-linkedin" />
              </template>
            </BaseButton>
            <BaseButton :icon="'only-icon'" :style="'gray'" :size="'small'">
              <template v-slot:icon>
                <font-awesome-icon icon="fa-brands fa-github" />
              </template>
            </BaseButton>
            <BaseButton :icon="'only-icon'" :style="'gray'" :size="'small'">
              <template v-slot:icon>
                <font-awesome-icon icon="fa-solid fa-envelope" />
              </template>
            </BaseButton>
          </div>
        </div>
      </div>
      <div class="work-experience" v-motion-slide-visible-once-bottom>
        <HeadingComp
          :heading="'MY Working Experiences'"
          :subheading="'Concluding the internship programme of university and part-time job'"
        />
        <div class="experiences">
          <div class="experience">
            <div class="leading">
              <div class="icon label-L">🖥️</div>
              <div class="leading-text">
                <div class="label-L">INTERNSHIP</div>
                <div class="label-S">Jan - April 2022</div>
              </div>
            </div>
            <div class="lower-text body-M">
              Being internship at Accenture Thailand as Front-end Developer
            </div>
          </div>
          <div class="experience">
            <div class="leading">
              <div class="icon label-L">🖥️</div>
              <div class="leading-text">
                <div class="label-L">PART-TIME</div>
                <div class="label-S">Jun - Jul 2022</div>
              </div>
            </div>
            <div class="lower-text body-M">
              Being Part-time at Accenture Thailand as Front-end Developer
            </div>
          </div>
          <div class="experience">
            <div class="leading">
              <div class="icon label-L">🎨</div>
              <div class="leading-text">
                <div class="label-L">PART-TIME</div>
                <div class="label-S">Jan - May 2023</div>
              </div>
            </div>
            <div class="lower-text body-M">
              Being Part-time at INNOVASIVE CO., LTD. as UX/UI Designer
            </div>
          </div>
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
                  <li>
                    {{ list }}
                  </li>
                </ul>
              </template>
            </ActComp>
            <div class="line" v-if="index != activities.length - 1"></div>
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
    </div>
    <div class="footer" v-motion-slide-visible-once-bottom>
      <div class="col-1">
        <div class="logo-container">
          <div class="logo">
            <img src="@/assets/images/portfolio_logo.png" alt="logo" />
          </div>
          <div class="title-M">DDIVDEEP</div>
        </div>
        <div class="looking-more">
          <div class="button">
            <font-awesome-icon icon="fa-brands fa-linkedin" />
          </div>
          <div class="button">
            <font-awesome-icon icon="fa-brands fa-github" />
          </div>
          <div class="button">
            <font-awesome-icon icon="fa-solid fa-envelope" />
          </div>
        </div>
        <div class="copyright body-M">
          © 2023 Similan Klinsmith. All rights reserved. <span>DDIVDEEP</span>
        </div>
      </div>
      <div class="col-2">
        <div class="contact">
          <div class="label-L">Contact</div>
          <div class="contact-content body-M">
            <div class="email">Email: deep25952@gmail.com</div>
            <div class="tel">Tel: 063-598-3619</div>
            <div class="linkedin">LinkedIn: Similan Klinsmith</div>
          </div>
        </div>
        <div class="menu">
          <div class="label-L">Menu</div>
          <div class="menu-content body-M">
            <div class="home">Home</div>
            <div class="about">About</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ActComp from "@/components/ActComp.vue";
import HeadingComp from "@/components/UI/HeadingComp.vue";
import BaseButton from "@/components/UI/BaseButton.vue";
import SkillComp from "@/components/SkillComp.vue";
export default {
  name: "App",
  components: { ActComp, SkillComp, HeadingComp, BaseButton },
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
            "Participating in the part of UX/UI and Graphic Design in website for students of SIT ITCHEATSHEET",
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
            "Being part-time at INNOVASIVE CO., LTD. as UX/UI Designer",
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
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/colors/colors.scss";
.nav-bar {
  position: relative;
  background: $light4;
  width: 100%;
  padding: 0 17.6rem;
  height: 6.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    color: $mainText;
    display: flex;
    column-gap: 1.2rem;
    align-items: center;
    .image-logo {
      width: 3.6rem;
      height: 3.6rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.tabs {
  display: flex;
  column-gap: 0.8rem;
  .tab {
    height: 100%;
    width: 11.9rem;
    text-align: center;
  }
}
.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 4.8rem 0 0rem;
  gap: 9rem;
  .header-section {
    padding: 0 17.6rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1.6rem;
    .image-profile {
      background: $primaryMain;
      border-radius: 1.2rem;
      overflow: hidden;
      height: 35.2rem;
      width: 35.2rem;
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
      .experience {
        background-color: $light4;
        border-radius: 1.2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 3.2rem;
        row-gap: 1.6rem;
        width: 100%;
        .leading {
          display: flex;
          flex-direction: column;
          row-gap: 0.8rem;
          align-items: center;
          .icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 4.8rem;
            height: 4.8rem;
            border-radius: 50%;
            background-color: $primaryBG;
          }
          .leading-text {
            display: flex;
            flex-direction: column;
            row-gap: 0.2rem;
            .label-L {
              color: $primaryMain;
            }
            .label-S {
              color: $dark4;
            }
          }
        }
        .lower-text {
          color: $mainText;
          text-align: center;
        }
      }
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
      .line {
        height: 0.01rem;
        background: $light1;
      }
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
}
.footer {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.6rem;
  width: 100%;
  padding: 6.4rem 17.6rem;
  background-color: $light1;
  .col-1 {
    display: flex;
    flex-direction: column;
    row-gap: 2.4rem;
    .logo-container {
      display: flex;
      align-items: center;
      column-gap: 1.2rem;
      .logo {
        width: 3.6rem;
        height: 3.6rem;
        img {
          width: 100%;
          height: 100%;
          max-width: 3.6rem;
          max-height: 3.6rem;
        }
      }
      .title-M {
        color: $mainText;
      }
    }
    .looking-more {
      display: flex;
      column-gap: 1.6rem;
      .button {
        font-size: 1.6rem;
        color: $description;
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        background-color: $light2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: 0.25s all ease-in-out;
        &:hover {
          background-color: $light0;
        }
      }
    }
  }
  .col-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2.4rem;
    .contact,
    .menu {
      display: flex;
      flex-direction: column;
      row-gap: 2.4rem;
      color: $mainText;
      width: 100%;
      .contact-content,
      .menu-content {
        display: flex;
        flex-direction: column;
        row-gap: 0.8rem;
      }
    }
  }
}
</style>
