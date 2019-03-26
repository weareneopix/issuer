<div class="editor">
  <div class="editor__form">
    {#if !usingBookmarklet }
        <div class="note">
            <p>
            You are not using a bookmarklet. Please use this  <a href="javascript:(function()%7B(function%20bookmarklet()%20%7Bwindow.location%20%3D%20'https%3A%2F%2Fissue-reporter.ilicmarko05.now.sh%2F%3Fua%3D'%2B%20encodeURIComponent(window.navigator.userAgent)%2B%20'%26r%3D'%20%2B%20screen.width%20%2B%20'x'%20%2B%20screen.height%2B%20'%26l%3D'%20%2B%20encodeURIComponent(window.location.href)%3B%7D())%7D)()"> Report issue </a>
             bookmarklet.</p>
             <p>Drag the above link into your bookmark bar.</p>
        </div>
    {/if}

    <div class="input-group">
      <label for="desc">Description</label>
      <textarea id="desc" bind:value=description></textarea>
    </div>

    <div class="input-group">
        <label for="exp">Expected:</label>
        <textarea id="exp" bind:value="expected"></textarea>
    </div>


  </div>
  <div class="editor__preview">
  <button class="copy-button" on:click="copyToClipboard()">Copy</button>
<pre>{@html html}</pre>
  </div>
</div>

<script>
    import Bowser from 'bowser';
    import Parse from './Parser';

    let template = (userAgent, resolution, description, expected, usingBookmarklet, browser, ref) => {
        return `
## Description:
${description}

## Expected Results:
${expected}

## Screenshots:
*Please upload when you paste this code*

---

## Tech Info *(copy from bookmarklet)*:

**Source URL:** ${ref ? ref : 'Please provide a link or use a bookmarklet'}

| Property             | Value |
| -------------------- | ----- |
| **Browser**          | ${usingBookmarklet ? browser.browser.name : 'Not using bookmarklet'}      |
| **Browser version:** | ${usingBookmarklet ? browser.browser.version : 'Not using bookmarklet'}       |
| **Screen Size**      | ${usingBookmarklet ? resolution : 'Not using bookmarklet'}      |
| **Platform**         | ${usingBookmarklet ? browser.platform.type : 'Not using bookmarklet'}      |
| **OS**               | ${usingBookmarklet ? browser.os.name : 'Not using bookmarklet' }      |
| **OS Version**       | ${usingBookmarklet ? browser.os.version : 'Not using bookmarklet'}      |
| **User Agent**       | ${usingBookmarklet ? userAgent : 'Not using bookmarklet'}      |
`}

  export default {
      data() {
          return {
              query: {},
              description: '',
              expected: ''
          }
      },
      computed: {
        userAgent: ({ query }) => typeof query['ua'] ? query['ua'] : false,
        resolution: ({ query }) => typeof query['r'] ? query['r'] : false,
        ref: ({ query }) => typeof query['l'] ? query['l'] : false,
        usingBookmarklet: ({ userAgent, resolution }) => userAgent && resolution,
        browser: ({ usingBookmarklet, userAgent }) => usingBookmarklet ? Bowser.parse(userAgent) : null,
        output: ({ userAgent, resolution, description, expected, usingBookmarklet, browser, ref }) => template(userAgent, resolution, description, expected, usingBookmarklet, browser, ref),
        html: ({ output}) => Parse.highlight(output)
      },
      methods: {
          copyToClipboard() {
              const { output } = this.get();
              console.log('Copy');
              const el = document.createElement('textarea');
              el.value = output;
              document.body.appendChild(el);
              el.select();
              document.execCommand('copy');
              document.body.removeChild(el);
          }
      }
  }
</script>

<style>
  .editor {
    display: flex;
    height: 100%;
  }

  .editor__form,
  .editor__preview {
    position: relative;
    flex: 1 0 50%;
    padding: 2em;
    overflow-y: auto;
  }

  @media (max-width: 1024px) {
      .editor { flex-direction: column; }

      .editor__form,
       .editor__preview {
            width: 100%;
            flex-basis: auto;
            overflow-x: auto;
      }
  }

  .editor__form {
    border-right: 1px solid var(--border-color);
  }

  .copy-button {
    position: absolute;
    top: -1px;
    right: 0;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    border: 1px solid var(--border-color);
    text-align: center;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    color: #474748;
    background: #f4f4f5;
  }

  .input-group {
    margin-bottom: 2em;
  }

  label {
    display: block;
    margin-bottom: .5rem;
    font-weight: 700;
  }

  textarea {
       -webkit-appearance: none;
       background: #fff;
       border-radius: 4px;
       border: 1px solid var(--border-color);
       color: inherit;
       font-size: inherit;
       min-height: 100px;
       padding: 1em;
       transition: border-color .2s cubic-bezier(.645,.045,.355,1);
       width: 100%;
       resize: vertical;
   }

   .note {
       background-color: #fdf6ec;
       color: #6d4100;
       width: 100%;
       padding: 8px 16px;
       border-radius: 4px;
       transition: opacity .2s;
       margin-bottom: 3em;
   }
</style>