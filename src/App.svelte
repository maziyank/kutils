<script>
  import { Router, Link, Route } from "svelte-routing";
  import ConvertCase from "./ConvertCase.svelte";
  import Home from "./Home.svelte";
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
</style>

<Router {url}>
  <div class="main-container off-canvas off-canvas-sidebar-show">
    <!-- off-screen toggle button -->
    <a class="off-canvas-toggle btn btn-primary btn-action" href="#sidebar-id">
      <i class="icon icon-menu" />
    </a>

    <div id="sidebar-id" class="off-canvas-sidebar sidebar">
      <div id="sidebar">
        <div class="brand">
          <a class="logo" href="../index.html">
            <img
              src="https://picturepan2.github.io/spectre/img/spectre-logo.svg"
              alt="Spectre.css CSS Framework" />
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
                  <a href="#">Bag of Words</a>
                </li>
                <li class="menu-item">
                  <a href="#">Placeholder Text</a>
                </li>
                <li class="menu-item">
                  <a href="#">HTML Tag Remover</a>
                </li>
                <li class="menu-item">
                  <a href="#">Join Lines</a>
                </li>
                <li class="menu-item">
                  <a href="#">Differ</a>
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
                  <a href="#">Numeral System Formatter</a>
                </li>
                <li class="menu-item">
                  <a href="#">Currency Formatter</a>
                </li>
                <li class="menu-item">
                  <a href="#">Random Number</a>
                </li>
                <li class="menu-item">
                  <a href="#">Indonesian Terbilang</a>
                </li>
                <li class="menu-item">
                  <a href="#">Simple Calculator</a>
                </li>
                <li class="menu-item">
                  <a href="#">Ordered List</a>
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
        <Route path="/">
          <Home />
        </Route>
      </div>

    </div>

  </div>

</Router>
