<script>
  import {
    camelCase,
    upperCase,
    lowerCase,
    upperFirst,
    kebabCase,
    snakeCase
  } from "lodash-es";
  import { sentenceCase, titleCase } from "./utils/convertcase";
  import copy from "copy-to-clipboard";

  let text = "";
  let reservedText = "";

  const convertCase = event => {
    const type = event.target.id;
    reservedText = text;
    const funcs = {
      upper: upperCase,
      lower: lowerCase,
      sentence: sentenceCase,
      title: titleCase,
      kebab: kebabCase,
      snake: snakeCase
    };

    const func = funcs[type];

    text = func && typeof func === "function" ? func(reservedText) : reservedText;
  };

  const copyClipboard = event => {
    copy(text);
  };
</script>

<style>

</style>

<div class="container">
  <h1>Convert Case</h1>
  <p>
    Just type or paste your text and choose the case you want to convert it to.
  </p>
  <div class="columns">
    <div class="column col-12">
      <div class="form-group">
        <label class="form-label" for="input-example-3">Text Input:</label>
        <textarea
          bind:value={text}
          class="form-input"
          id="text-input"
          placeholder="Your Text Here..."
          rows="10" />
      </div>
    </div>

    <div class="column col-12" style="margin-top:10px">
      <button class="btn btn-primary" id="upper" on:click={convertCase}>
        UPPER CASE
      </button>
      <button class="btn btn-primary" id="lower" on:click={convertCase}>
        lower case
      </button>
      <button class="btn btn-primary" id="title" on:click={convertCase}>
        Title Case
      </button>
      <button class="btn btn-primary" id="sentence" on:click={convertCase}>
        Sentence case
      </button>
      <button class="btn btn-primary" id="pascal" on:click={convertCase}>
        PascalCase
      </button>
      <button class="btn btn-primary" id="snake" on:click={convertCase}>
        snake_case
      </button>
      <button class="btn btn-primary" id="kebab" on:click={convertCase}>
        kebab-case
      </button>
      <button class="btn btn-primary float-right" on:click={copyClipboard}>
        <i class="icon icon-copy" />
        Copy to Clipboard
      </button>
    </div>

  </div>
</div>
