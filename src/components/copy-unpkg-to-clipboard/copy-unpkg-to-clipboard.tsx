import { Result } from "@coveo/atomic/headless";
import { Component, h, Element, State } from "@stencil/core";
import { resultContext } from "@coveo/atomic";

/**
 * Sample custom Atomic result component, to be used inside an Atomic Result Template.
 *
 * This component showcases a component that conditionally renders the author of a result, with a fallback to display "anonymous" in the event that no author is available for a document, for educational purposes.
 *
 * In a real life scenario, we recommend using [result-field-condition](https://docs.coveo.com/en/atomic/latest/reference/result-template-components/atomic-field-condition/) and [atomic-result-text](https://docs.coveo.com/en/atomic/latest/reference/result-template-components/atomic-result-text/).
 */
@Component({
  tag: "copy-unpkg-to-clipboard",
  styleUrl: "copy-unpkg-to-clipboard.css",
  shadow: true,
})
export class SampleResultComponent {
  // The Headless result object to be resolved from the parent atomic-result component.
  @State() private result?: Result;
  @Element() private host!: Element;

  // We recommended fetching the result context using the `connectedCallback` lifecycle method
  // with async/await. Using `componentWillLoad` will hang the parent `atomic-search-interface` initialization.
  public async connectedCallback() {
    try {
      this.result = await resultContext(this.host);
    } catch (error) {
      console.error(error);
      this.host.remove();
    }
  }

  public copyClick() {
    navigator.clipboard.writeText(
`<script type='module' src='https://unpkg.com/${this.result.title}/dist/index.js'></script>
<!-- Just put <copy-to-clipboard></copy-to-clipboard> in a result template to use it -->`
)
    
  }

  public render() {
    // Do not render the component until the result object has been resolved.
    if (!this.result) {
      return;
    }
    return <button onClick={this.copyClick.bind(this)} >Copy UnPkg!</button>
  }
}
