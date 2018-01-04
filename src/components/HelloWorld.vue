<template>
  <!-- Wrapper -->
    <div id="wrapper">

      <!-- Header -->
        <header id="header" class="alt">
          <span class="logo"><img src="~@/assets/images/needle.svg" alt="" /></span>
          <h1>Pain Point</h1>
          <p>Discover problems and solve them</p>
        </header>

      <!-- Nav -->
        <nav id="nav">
          <ul>
            <li><a href="#intro" class="active">Introduction</a></li>
            <li><a href="#first">Generate Tweets</a></li>
            <li><a href="#second">Saved Tweets</a></li>
            <li><a href="#cta">Get Started</a></li>
          </ul>
        </nav>

      <!-- Main -->
        <div id="main">

          <!-- Introduction -->
            <section id="intro" class="main">
              <div class="spotlight">
                <div class="content">
                  <header class="major">
                    <h2>Use Twitter to solve problems</h2>
                  </header>
                  <p>
                    Lots of people complain every day on Twitter. Why not use
                    these complaints to generate solutions?
                  </p>
                  <ul class="actions">
                    <li><a href="generic.html" class="button">Learn More</a></li>
                  </ul>
                </div>
                <span class="image"><img src="~@/assets/images/pic01.jpg" alt="" /></span>
              </div>
            </section>

          <!-- First Section -->
            <section id="first" class="main special">
              <header class="major">
                <h2>Generate Tweets</h2>
              </header>
              <ul class="tweet-list">
                <li v-for="tweet in topFiveTweets">
                  <span v-html="tweet.html"></span>
                  <button v-on:click="onSubmit(tweet)">Save Tweet</button>
                </li>
              </ul>
              <button class="special" v-on:click="getTopFiveTweets">Get Top Five Tweets</button>
              <!-- <footer class="major">
                <ul class="actions">
                  <li><a href="generic.html" class="button">Learn More</a></li>
                </ul>
              </footer> -->
            </section>

          <!-- Second Section -->
            <section id="second" class="main special">
              <header class="major">
                <h2>Saved Tweets</h2>
              </header>
              <ul class="tweet-list">
                <li v-for="tweet in savedTweets">
                  <span v-html="tweet.html"></span>
                  <button v-on:click="deleteTweet(tweet._id)">Delete Tweet</button>
                  <!-- <button v-on:click="onSubmit(tweet._id)">Delete Tweet</button> -->
                </li>
              </ul>
              <!-- <ul class="statistics">
                <li class="style1">
                  <span class="icon fa-code-fork"></span>
                  <strong>5,120</strong> Etiam
                </li>
                <li class="style2">
                  <span class="icon fa-folder-open-o"></span>
                  <strong>8,192</strong> Magna
                </li>
                <li class="style3">
                  <span class="icon fa-signal"></span>
                  <strong>2,048</strong> Tempus
                </li>
                <li class="style4">
                  <span class="icon fa-laptop"></span>
                  <strong>4,096</strong> Aliquam
                </li>
                <li class="style5">
                  <span class="icon fa-diamond"></span>
                  <strong>1,024</strong> Nullam
                </li>
              </ul>
              <p class="content">Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.</p>
              <footer class="major">
                <ul class="actions">
                  <li><a href="generic.html" class="button">Learn More</a></li>
                </ul>
              </footer> -->
            </section>

          <!-- Get Started -->
            <section id="cta" class="main special">
              <header class="major">
                <h2>Congue imperdiet</h2>
                <p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
              </header>
              <footer class="major">
                <ul class="actions">
                  <li><a href="generic.html" class="button special">Get Started</a></li>
                  <li><a href="generic.html" class="button">Learn More</a></li>
                </ul>
              </footer>
            </section>

        </div>

      <!-- Footer -->
        <footer id="footer">
          <section>
            <h2>Aliquam sed mauris</h2>
            <p>Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.</p>
            <ul class="actions">
              <li><a href="generic.html" class="button">Learn More</a></li>
            </ul>
          </section>
          <section>
            <h2>Etiam feugiat</h2>
            <dl class="alt">
              <dt>Address</dt>
              <dd>1234 Somewhere Road &bull; Nashville, TN 00000 &bull; USA</dd>
              <dt>Phone</dt>
              <dd>(000) 000-0000 x 0000</dd>
              <dt>Email</dt>
              <dd><a href="#">information@untitled.tld</a></dd>
            </dl>
            <ul class="icons">
              <li><a href="#" class="icon fa-twitter alt"><span class="label">Twitter</span></a></li>
              <li><a href="#" class="icon fa-facebook alt"><span class="label">Facebook</span></a></li>
              <li><a href="#" class="icon fa-instagram alt"><span class="label">Instagram</span></a></li>
              <li><a href="#" class="icon fa-github alt"><span class="label">GitHub</span></a></li>
              <li><a href="#" class="icon fa-dribbble alt"><span class="label">Dribbble</span></a></li>
            </ul>
          </section>
          <p class="copyright">&copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
        </footer>

    </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        savedTweets: [],
        topFiveTweets: [],
      };
    },
    created() {
      axios.get('http://127.0.0.1:4000/tweets')
      .then((response) => {
        this.savedTweets = response.data;
      })
      .catch((e) => {
        console.log(e);
        this.errors.push(e);
      });
    },
    methods: {
      getTopFiveTweets() {
        axios.get('http://127.0.0.1:8080/api/twitter')
        .then((response) => {
          this.topFiveTweets = response.data;
        })
        .catch((e) => {
          console.log(e);
          this.errors.push(e);
        });
      },
      deleteTweet(tweetId) {
        axios.delete(`http://127.0.0.1:4000/tweets/${tweetId}`)
        .then((response) => {
          const isDeletedTweet = tweet => tweet._id === response.data._id;
          this.savedTweets = this.savedTweets.filter(tweet => !isDeletedTweet(tweet));
        })
        .catch((e) => {
          console.log(e);
          this.errors.push(e);
        });
      },
      onSubmit(tweet) {
        const requestBody = { html: tweet.html, url: tweet.url };
        axios.post('http://127.0.0.1:4000/tweets', requestBody)
        .then((response) => {
          this.savedTweets.push(response.data);
        })
        .catch((e) => {
          console.log(e);
          this.errors.push(e);
        });
      },
    },
    updated() {
      if (window.twttr.widgets) {
        window.twttr.widgets.load();
      }
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tweet-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 0;
  }
</style>
