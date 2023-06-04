<template>
  <div class="container">
    <div class="col-1">
      <div class="profile">
        <div class="img-profile">
          <img
            src="@/assets/images/profile_2.jpg"
            alt="profile"
          />
        </div>
        <div class="content">
          <div class="name">
            <div class="label-L">Similan Klinsmith</div>
            <div class="body-M">Front-end • UX/UI Designer</div>
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
        <div class="label-L">About ME</div>
        <div class="body-M">
          “ Presently, I am fourth-year student which I will have graduated in
          in May, 2023, in faculty of SIT (School of Information Technology) at
          KMUTT(King Mongkut’s University of Technology Thonburi) who is willing
          to acquire new knowledge and improve myself all the time. I am seeking
          for this position of your organization to utilize my skills in
          maximum. Furthermore, it would be a great opportunity to be a part
          with a professional team.”
        </div>
      </div>
      <div class="personal-information">
        <div class="label-L">Personal Information</div>
        <div class="row-1">
          <div class="info">
            <div class="leading-icon body-M">
              <font-awesome-icon icon="fa-solid fa-envelope" />
            </div>
            <KeyValueComp :leading="'Email'" :value="'deep25952@gmail.com'" />
          </div>
          <div class="info">
            <div class="leading-icon body-M">
              <font-awesome-icon icon="fa-solid fa-mobile" />
            </div>
            <KeyValueComp :leading="'Phone Number'" :value="'063-598-3619'" />
          </div>
        </div>
        <div class="info">
          <div class="leading-icon body-M">
            <font-awesome-icon icon="fa-solid fa-house" />
          </div>
          <KeyValueComp :leading="'Location'" :value="'Bangkok, Thailand'" />
        </div>
      </div>
      <div class="education">
        <div class="label-L">Education</div>
        <div class="info">
          <div class="leading-icon body-M">
            <font-awesome-icon icon="fa-solid fa-envelope" />
          </div>
          <KeyValueComp
            :leading="'Graduation'"
            :value="'King Mongkut’s University of Technology Thonburi (KMUTT) (Unofficially)'"
          />
        </div>
        <div class="info">
          <div class="leading-icon body-M">
            <font-awesome-icon icon="fa-solid fa-scroll" />
          </div>
          <KeyValueComp :leading="'GPAX'" :value="'3.62 (30-May-2023)'" />
        </div>
      </div>
    </div>
    <div class="col-2">
      <div class="resume">
        <div class="label-L">Resume</div>
        <BaseAttachment
          :isTrailing="true"
          :leadingIcon="'file-lines'"
          :content="'Resume.pdf'"
        />
      </div>
      <div class="certificates">
        <div class="label-L">Certificates Links</div>
        <BaseAttachment
          :isTrailing="false"
          :leadingIcon="'link'"
          :content="'TETET(English) - Level B2'"
        />
        <BaseLine :weight="'thin'" />
        <BaseAttachment
          :isTrailing="false"
          :leadingIcon="'link'"
          :content="'PLIDA(ITALIAN) - Level B1'"
        />
        <BaseLine :weight="'thin'" />
        <BaseAttachment
          :isTrailing="false"
          :leadingIcon="'link'"
          :content="'UDEMY : Build Responsive Real-World Websites with HTML and CSS'"
        />
        <BaseLine :weight="'thin'" />
        <BaseAttachment
          :isTrailing="false"
          :leadingIcon="'link'"
          :content="'UDEMY : Figma UI UX Design Essential'"
        />
        <BaseLine :weight="'thin'" />
        <BaseAttachment
          :isTrailing="false"
          :leadingIcon="'link'"
          :content="'Ajinomoto Talent Scholarship'"
        />
        <BaseLine :weight="'thin'" />
        <BaseAttachment
          :isTrailing="false"
          :leadingIcon="'link'"
          :content="'Ajinomoto Foundation Innovation Idea Contest 2022: Winner'"
        />
      </div>
      <div class="other">
        <div class="label-L">Other Links</div>
        <BaseAttachment
          :isTrailing="false"
          :leadingIcon="'link'"
          :content="'Google Drive: Works'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/UI/BaseButton.vue";
import KeyValueComp from "@/components/UI/KeyValueComp.vue";
import BaseAttachment from "@/components/UI/BaseAttachment.vue";
import BaseLine from "@/components/UI/BaseLine.vue";
export default {
  name: "AboutMe",
  components: { BaseButton, KeyValueComp, BaseAttachment, BaseLine },
  methods: {
    openLink(link) {
      window.open(link, "_blank");
    },
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
</style>
