import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import "@inertiajs/vue3";
import { useSSRContext } from "vue";
const _sfc_main = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    event: {
      type: Array
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><pre>       ${ssrInterpolate(__props.event)}
       </pre></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Event/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
