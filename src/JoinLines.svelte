<script>
  import copy from "copy-to-clipboard";

  let text = "";
  const joinLines = () => {
    text = text.replace(/(\r\n|\n|\r)/gm, " ");
  };

  const copyClipboard = event => {
    copy(text);
  };
</script>

<style>

</style>

<div class="container">
  <h1>Join Lines</h1>
  <p>
    Just type or paste your text here and then remove line breaks by clicking <b>Join Lines Button.</b>
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
      <button class="btn btn-primary" id="upper" on:click={joinLines}>
        Join Lines
      </button>


      <button class="btn btn-primary float-right" on:click={copyClipboard}>
        <i class="icon icon-copy" />
        Copy to Clipboard
      </button>
    </div>

  </div>
</div>
