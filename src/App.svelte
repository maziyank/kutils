<script>
  import { Router, Link, Route } from "svelte-routing";
  import ConvertCase from "./ConvertCase.svelte";
  import HTMLTagRemover from "./HTMLTagRemover.svelte";
  import JoinLines from "./JoinLines.svelte";
  import Home from "./Home.svelte";
  import NotFound from "./NotFound.svelte";
  import About from "./About.svelte";
  
  export let url = "";
</script>

<style>
  .sidebar {
    padding: 20px;
    min-height: 100vh;
    min-width: 300px;
  }

  .brand {
    margin-bottom: 2rem;
  }

  .logo {
    align-items: center;
    border-radius: 0.1rem;
    display: inline-flex;
    display: -ms-inline-flexbox;
    -ms-flex-align: center;
    height: 2rem;
    padding: 0.2rem;
    width: auto;
  }

  .logo:focus,
  .logo:hover {
    text-decoration: none;
  }

  .logo h2 {
    display: inline-block;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.5rem;
    margin-bottom: 0;
    margin-left: 0.5rem;
    margin-right: 0.3rem;
  }

  .logo img {
    display: inline-block;
    height: auto;
    width: 1.6rem;
  }

  .accordion-header {
    font-weight: 500;
  }

  .content {
    padding: 1rem;
  }

  .navbar {
    height: 3.8rem;
    position: fixed;
    right: 40px;
    top: 20px;
    z-index: 100;
  }
</style>

<Router {url}>
  <div class="main-container off-canvas off-canvas-sidebar-show">
    <!-- off-screen toggle button -->
    <a class="off-canvas-toggle btn btn-primary btn-action" href="#sidebar-id">
      <i class="icon icon-menu" />
    </a>

    <div class="navbar">
      <a class="off-canvas-toggle btn btn-link btn-action" href="#sidebar">
        <i class="icon icon-menu" />
      </a>
      <div class="btns d-flex">
        <a
          class="btn ml-1"
          href="/About">
          About
        </a>
        <a
          class="btn ml-1"
          href="https://github.com/maziyank/kutils"
          target="_blank">
          GitHub
        </a>
      </div>
    </div>

    <div id="sidebar-id" class="off-canvas-sidebar sidebar">
      <div id="sidebar">
        <div class="brand">
          <a class="logo" href="../index.html">
            <figure class="avatar avatar-md" data-initial="!K" style="background-color: #5755d9;"></figure>
            <h2>KUTILS</h2>
            <small class="label label-secondary text-bold">BE GOOD</small>
          </a>
        </div>

        <div class="accordion-container">
          <div class="accordion">
            <input
              id="accordion-text"
              type="checkbox"
              name="accordion-checkbox"
              hidden
              checked />
            <label class="accordion-header c-hand" for="accordion-text">
              TEXT/STRING
            </label>
            <div class="accordion-body">
              <ul class="menu menu-nav">
                <li class="menu-item">
                  <Link to="/ConvertCase">Convert Case</Link>
                </li>
                <li class="menu-item">
                  <Link to="/HTMLTagRemover">HTML Tag Remover</Link>
                </li>
                <li class="menu-item">
                  <Link to="/JoinLines">Join Lines</Link>
                </li>
                <li class="menu-item">
                  <Link to="/LoremIpsum">Lorem Ipsum Generator</Link>
                </li>
                <li class="menu-item">
                  <Link to="/BOW">Bag of Words</Link>
                </li>
                <li class="menu-item">
                  <Link to="/Differ">Differ Text</Link>
                </li>

              </ul>
            </div>
          </div>

          <div class="accordion">
            <input
              id="accordion-number"
              type="checkbox"
              name="accordion-checkbox"
              hidden
              checked />
            <label class="accordion-header c-hand" for="accordion-number">
              NUMERICAL
            </label>
            <div class="accordion-body">
              <ul class="menu menu-nav">
                <li class="menu-item">
                  <Link to="/Numeral">Numeral System Formatter</Link>
                </li>
                <li class="menu-item">
                  <Link to="/Currency">Currency Formatter</Link>
                </li>
                <li class="menu-item">
                  <Link to="/RandomNumber">Random Number</Link>
                </li>
                <li class="menu-item">
                  <Link to="/Calculator">Simple Calculator</Link>
                </li>
                <li class="menu-item">
                  <Link to="/OrderedList">Ordered List</Link>
                </li>
              </ul>
            </div>
          </div>

          <div class="accordion">
            <input
              id="accordion-crypt"
              type="checkbox"
              name="accordion-checkbox"
              hidden
              checked />
            <label class="accordion-header c-hand" for="accordion-crypt">
              CRYPTHOGRAPHY
            </label>
            <div class="accordion-body">
              <ul class="menu menu-nav">
                <li class="menu-item">
                  <Link to="/MD5">MD5 Encrypt</Link>
                </li>
                <li class="menu-item">
                  <Link to="/SHA256">SHA256 Encrypt</Link>
                </li>
                <li class="menu-item">
                  <Link to="/Base64">Base64 Encrypt</Link>
                </li>
              </ul>
            </div>
          </div>

          <div class="accordion">
            <input
              id="accordion-ina"
              type="checkbox"
              name="accordion-checkbox"
              hidden/>
            <label class="accordion-header c-hand" for="accordion-ina">
              FOR INDONESIANS
              <img
                src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/whatsapp/238/flag-for-indonesia_1f1ee-1f1e9.png"
                height="16px" />
            </label>
            <div class="accordion-body">
              <ul class="menu menu-nav">
                <li class="menu-item">
                  <Link to="/Terbilang">Terbilang</Link>
                </li>
                <li class="menu-item">
                  <Link to="/Terbilang">Lokal Ipsum</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <a class="off-canvas-overlay" href="#close">Close</a>

    <div class=" off-canvas-content">
      <div class="content">
        <Route path="/ConvertCase" component={ConvertCase}>
          <ConvertCase />
        </Route>
        <Route path="/" component={ConvertCase}>
          <ConvertCase />
        </Route>
        <Route path="/HTMLTagRemover" component={HTMLTagRemover}>
          <ConvertCase />
        </Route>
        <Route path="/JoinLines" component={JoinLines}>
          <ConvertCase />
        </Route>
        <Route path="/About" component={About}>
          <ConvertCase />
        </Route>
        <Route component={NotFound} />
      </div>

    </div>

  </div>

</Router>
