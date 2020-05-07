<script>
  import copy from "copy-to-clipboard";

  let text = "";
  const removeTag = () => {
    text = text.replace(/<(.|\n)*?>/g, "");
  };

  const copyClipboard = event => {
    copy(text);
  };
</script>

<style>

</style>

<div class="container">
  <h1>HTML Tag Remover</h1>
  <p>
    Just type or paste your HTML Soure here and then make it clean by clicking <b>Remove HTML Tag Button.</b>
  </p>
  <div class="columns">
    <div class="column col-12">
      <div class="form-group">
        <label class="form-label" for="input-example-3">Text Input:</label>
        <textarea
          bind:value={text}
          class="form-input"
          id="text-input"
          placeholder="Your HTML Text Here..."
          rows="10" />
      </div>
    </div>

    <div class="column col-12" style="margin-top:10px">
      <button class="btn btn-primary" id="upper" on:click={removeTag}>
        Remove HTML Tag
      </button>


      <button class="btn btn-primary float-right" on:click={copyClipboard}>
        <i class="icon icon-copy" />
        Copy to Clipboard
      </button>
    </div>

  </div>
</div>
