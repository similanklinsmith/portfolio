<template>
  <div class="container">
    <div class="col-1">
      <div class="profile">
        <div class="img-profile">
          <img src="@/assets/images/profile_2.jpg" alt="profile" />
        </div>
        <div class="content">
          <div class="name">
            <div class="label-L">{{ text["about"]["name"] }}</div>
            <div class="body-M">UX/UI Designer • Front-end</div>
          </div>
          <div class="contact">
            <BaseButton
              :icon="'only-icon'"
              :style="'gray'"
              :size="'small'"
              @onClick="
                openLink(
                  'https://www.linkedin.com/in/similan-klinsmith-a89379258/'
                )
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
      <div class="about-me">
        <div class="label-L">{{ text["about"]["aboutLeading"] }}</div>
        <div class="body-M">{{ text["about"]["aboutContent"] }}</div>
      </div>
      <div class="personal-information">
        <div class="label-L">{{ text["about"]["personalLeading"] }}</div>
        <div class="row-1">
          <div class="info">
            <div class="leading-icon body-M">
              <font-awesome-icon icon="fa-solid fa-envelope" />
            </div>
            <KeyValueComp
              :leading="text['about']['emailLeading']"
              :value="'deep25952@gmail.com'"
            />
          </div>
          <div class="info">
            <div class="leading-icon body-M">
              <font-awesome-icon icon="fa-solid fa-mobile" />
            </div>
            <KeyValueComp
              :leading="text['about']['phoneLeading']"
              :value="'063-598-3619'"
            />
          </div>
        </div>
        <div class="info">
          <div class="leading-icon body-M">
            <font-awesome-icon icon="fa-solid fa-house" />
          </div>
          <KeyValueComp
            :leading="text['about']['locationLeading']"
            :value="text['about']['locationValue']"
          />
        </div>
      </div>
      <div class="education">
        <div class="label-L">{{ text["about"]["educationLeading"] }}</div>
        <div class="info">
          <div class="leading-icon body-M">
            <font-awesome-icon icon="fa-solid fa-envelope" />
          </div>
          <KeyValueComp
            :leading="text['about']['graduationLeading']"
            :value="text['about']['graduationValue']"
          />
        </div>
        <div class="info">
          <div class="leading-icon body-M">
            <font-awesome-icon icon="fa-solid fa-scroll" />
          </div>
          <KeyValueComp
            :leading="text['about']['GPAXLeading']"
            :value="text['about']['GPAXValue']"
          />
        </div>
      </div>
    </div>
    <div class="col-2">
      <div class="resume">
        <div class="label-L">{{ text["about"]["resumeLeading"] }}</div>
        <BaseAttachment
          @onClick="downloadWithAxios(file.src, file.title)"
          :isTrailing="true"
          :leadingIcon="'file-lines'"
          :content="'Resume.pdf'"
        />
      </div>
      <div class="certificates">
        <div class="label-L">{{ text["about"]["certificateLeading"] }}</div>
        <BaseAttachment
          @onClick="null"
          :isActive="false"
          :isTrailing="false"
          :leadingIcon="'link'"
          :content="'TETET(English) - Level B2'"
        />
        <BaseLine :weight="'thin'" />
        <BaseAttachment
          @onClick="
            openLink(
              'https://drive.google.com/file/d/1GfOJw2wnyhctdHKH2YLFq3RT7lXBLoH4/view?usp=sharing'
            )
          "
          :isTrailing="false"
          :leadingIcon="'link'"
          :content="'PLIDA(ITALIAN) - Level B1'"
        />
        <BaseLine :weight="'thin'" />
        <BaseAttachment
          @onClick="
            openLink(
              'https://drive.google.com/file/d/1M63J-hk3BwEEB9zkQV93rdJMQhjHl1za/view?usp=drive_link'
            )
          "
          :isTrailing="false"
          :leadingIcon="'link'"
          :content="'UDEMY : Build Responsive Real-World Websites with HTML and CSS'"
        />
        <BaseLine :weight="'thin'" />
        <BaseAttachment
          @onClick="
            openLink(
              'https://drive.google.com/file/d/1v3F7Ig3WbrpgayFbclXrkQf9ci4NZEhK/view?usp=drive_link'
            )
          "
          :isTrailing="false"
          :leadingIcon="'link'"
          :content="'UDEMY : Figma UI UX Design Essential'"
        />
        <BaseLine :weight="'thin'" />
        <BaseAttachment
          @onClick="
            openLink(
              'https://drive.google.com/file/d/1Bb_sZlMhukA9ah2NRG-s79QrqblFr2Gl/view?usp=drive_link'
            )
          "
          :isTrailing="false"
          :leadingIcon="'link'"
          :content="'Ajinomoto Talent Scholarship'"
        />
        <BaseLine :weight="'thin'" />
        <BaseAttachment
          @onClick="
            openLink(
              'https://drive.google.com/file/d/1h4cOCHwYo1MABhZ2WPm5-8fZ5inodHzm/view?usp=drive_link'
            )
          "
          :isTrailing="false"
          :leadingIcon="'link'"
          :content="'Ajinomoto Foundation Innovation Idea Contest 2022: Winner'"
        />
      </div>
      <div class="other">
        <div class="label-L">{{ text["about"]["otherLeading"] }}</div>
        <BaseAttachment
          @onClick="
            openLink(
              'https://drive.google.com/drive/u/0/folders/1sM9UapU8SaZOje0kfWcRpmrFhaRskhA8'
            )
          "
          :isTrailing="false"
          :leadingIcon="'link'"
          :content="'Google Drive: Works'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BaseButton from "@/components/UI/BaseButton.vue";
import KeyValueComp from "@/components/UI/KeyValueComp.vue";
import BaseAttachment from "@/components/UI/BaseAttachment.vue";
import BaseLine from "@/components/UI/BaseLine.vue";
export default {
  name: "AboutMe",
  components: { BaseButton, KeyValueComp, BaseAttachment, BaseLine },
  data() {
    return {
      lang: null,
      text: null,
      file: {
        title: "Resume_Portfolio.pdf",
        src: require("../assets/documents/resume_portfolio_Similan_Klinsmith.pdf"),
      },
    };
  },
  methods: {
    openLink(link) {
      window.open(link, "_blank");
    },
    downloadWithAxios(url, title) {
      console.log(url);
      axios
        .get(url.default, {
          responseType: "blob",
        })
        .then((response) => {
          var fileURL = window.URL.createObjectURL(new Blob([response.data]));
          var fileLink = document.createElement("a");
          fileLink.href = fileURL;
          fileLink.setAttribute("download", title);
          document.body.appendChild(fileLink);
          fileLink.click();
        })
        .catch(() => console.log(url));
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
.info {
  width: 100%;
  display: flex;
  column-gap: 1.6rem;
  .leading-icon {
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    background-color: $primaryBG;
    color: $primaryMain;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.container {
  padding: 0 17.6rem 9rem 17.6rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 1.6rem;
  width: 100%;
  .col-1 {
    grid-column: 1 / span 8;
    display: flex;
    flex-direction: column;
    row-gap: 1.6rem;
    .profile {
      display: flex;
      align-items: center;
      padding: 3.2rem 4.8rem;
      column-gap: 2.4rem;
      background-color: $light4;
      border-radius: 1.2rem;
      .img-profile {
        min-width: 5.6rem;
        min-height: 5.6rem;
        width: 5.6rem;
        height: 5.6rem;
        border-radius: 50%;
        background-color: $primaryMain;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        .name {
          display: flex;
          flex-direction: column;
          row-gap: 0.4rem;
          .label-L {
            color: $mainText;
          }
          .body-M {
            color: $subHeading;
          }
        }
        .contact {
          display: flex;
          align-items: center;
          column-gap: 1.6rem;
        }
      }
    }
    .about-me {
      display: flex;
      flex-direction: column;
      padding: 3.2rem 4.8rem;
      row-gap: 1.6rem;
      color: $mainText;
      background-color: $light4;
      border-radius: 1.2rem;
    }
    .personal-information {
      display: flex;
      flex-direction: column;
      padding: 3.2rem 4.8rem;
      row-gap: 3.2rem;
      background-color: $light4;
      border-radius: 1.2rem;
      .label-L {
        color: $mainText;
      }
      .row-1 {
        display: flex;
        column-gap: 1.2rem;
      }
    }
    .education {
      display: flex;
      flex-direction: column;
      padding: 3.2rem 4.8rem;
      row-gap: 3.2rem;
      background-color: $light4;
      border-radius: 1.2rem;
      .label-L {
        color: $mainText;
      }
      .row-1 {
        display: flex;
        column-gap: 1.2rem;
      }
    }
  }
  .col-2 {
    grid-column: span 4;
    display: flex;
    flex-direction: column;
    row-gap: 1.6rem;
    .resume,
    .certificates,
    .other {
      display: flex;
      flex-direction: column;
      padding: 3.2rem 2.4rem;
      row-gap: 1.6rem;
      background-color: $light4;
      border-radius: 1.2rem;
      .label-L {
        color: $mainText;
      }
    }
  }
}
@media (max-width: 64em) {
  .container {
    padding: 0 3.3rem 9rem 3.3rem;
    display: flex;
    flex-direction: column;
    row-gap: 1.6rem;
  }
}
</style>
