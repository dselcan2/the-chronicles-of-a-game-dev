/**
 * Factor Settings - How settings work in Factor...
 *
 * Your settings files are how you customize themes and plugins.
 * They allow you to set text and images, but also override components, routes and more.
 *
 */
export default {
  site: {
    logo: (): Promise<Component> => import("./logo.vue"),
    nav: [
      {
        _item: "intro",
        path: "/",
        name: "Intro"
      },
      {
        _item: "work",
        path: "/work",
        name: "Work"
      },
      {
        _item: "blog",
        path: "/blog",
        name: "Blog"
      },
      {
        _item: "contact",
        path: "/contact",
        name: "Contact"
      }
    ],
    cta: {
      headline: "Have any questions for me?",
      path: "/contact",
      text: "Get in Touch"
    }
  },
  home: {
    intro: {
      pretitle: "Dselcan's",
      title: "The Chronicles of a Game Dev",
      content: "A blog about games and game making.",
      buttons: [
        {
          _item: "blog",
          link: "/blog",
          text: `Read my blog!  <i class="fas fa-arrow-right"></i>`,
          classes: "btn rounded-full bg-blue-500 text-white hover:bg-blue-700"
        }
      ]
    },
    section2: {
      /**
       * Home page "Services" section.
       */
      id: "services",
      pretitle: "Skillz",
      title: "Things I do",
      items: [
        {
          _item: "skill_1",
          icon: require("./static/web-code.svg"),
          title: "Development",
          content: `I love programming. Sure it can get frustrating at times, but I find the satisfaction of "figuring something out" is always worth it.`
        },
        {
          _item: "skill_2",
          icon: require("./static/icons8-unity.svg"),
          title: "Unity",
          content: `I mostly make games in Unity since I have the most experience in it and I find it easy to get started with it.`
        },
        {
          _item: "skill_3",
          icon: require("./static/brush-paintbrush.svg"),
          title: "2D art",
          content: `I think that good art can really make a game stand out, so i try to make most of the gameart myself (beginner).`
        },
        {
          _item: "skill_3",
          icon: require("./static/gamepad.svg"),
          title: "Game design",
          content: `And of course coming up with game ideas/mechanics.`
        }
      ]
    },
    section3: {
      id: "work",
      pretitle: "Work",
      title: "Latest Projects",
      buttons: [
        {
          _item: "work",
          link: "/work",
          text: `View All Projects <i class="fas fa-arrow-right"></i>`,
          classes: "btn rounded-full bg-blue-500 text-white hover:bg-blue-700"
        }
      ],
      limit: 4, // Post limit
    },
    section4: []
  },
  about: [],
  work: {
    indexRoute: "/work",
    postRooute: "/work",
    limit: 4,
    returnLinkText: "Back to All Projects",
    pretitle: "Projects",
    title: "Game Jam & Free Time Creations",
    content: ""
  },
  contact: {
    resources: []
  }
}
