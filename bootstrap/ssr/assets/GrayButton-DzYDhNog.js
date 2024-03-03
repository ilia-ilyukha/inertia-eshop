import { defineComponent, useSSRContext, resolveComponent, mergeProps, withCtx, createTextVNode, openBlock, createBlock, toDisplayString, createCommentVNode, createVNode, renderSlot } from "vue";
import { Link } from "@inertiajs/vue3";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderClass, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$2 = defineComponent({
  props: {
    title: String
  },
  components: {
    Link
    // JetDropdown,
    // JetDropdownLink,
    // JetResponsiveNavLink,
  },
  data() {
    return {
      showingNavigationDropdown: false
    };
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_icon = resolveComponent("icon");
  const _component_jet_responsive_nav_link = resolveComponent("jet-responsive-nav-link");
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "bg-white border-b border-gray-100" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex justify-between h-16"><div class="flex"><div class="flex-shrink-0 flex items-center">`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("welcome"),
    class: "font-logo block w-auto hover:text-yellow-500 transition"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Inertia eshop `);
      } else {
        return [
          createTextVNode(" Inertia eshop ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="hidden sm:flex sm:items-center sm:ml-6"><div class="ml-3 relative"><div class="flex items-center space-x-3 relative">`);
  if (_ctx.$page.props.user) {
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route("dashboard"),
      class: "hover:text-yellow-500 transition"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Dashboard `);
        } else {
          return [
            createTextVNode(" Dashboard ")
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!--[-->`);
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route("register"),
      class: "hover:text-yellow-500 transition"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Register `);
        } else {
          return [
            createTextVNode(" Register ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route("event"),
      class: "hover:text-yellow-500 transition"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Event1234 `);
        } else {
          return [
            createTextVNode(" Event1234 ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route("login"),
      class: "hover:text-yellow-500 transition"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Login `);
        } else {
          return [
            createTextVNode(" Login ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`<!--]-->`);
  }
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("shop.index"),
    class: "hover:text-yellow-500 transition"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Shop `);
      } else {
        return [
          createTextVNode(" Shop ")
        ];
      }
    }),
    _: 1
  }, _parent));
  if (_ctx.$page.props.user) {
    _push(`<form method="POST"><button type="submit" class="hover:text-yellow-500 transition"> Log Out </button></form>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("cart.index"),
    class: "hover:text-red-700 transition"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.$page.props.cartCount > 0) {
          _push2(`<span class="bg-red-600 text-white text-xs rounded-md p-1 absolute" style="${ssrRenderStyle({ "top": "-10px", "right": "-8px" })}"${_scopeId}>${ssrInterpolate(_ctx.$page.props.cartCount)}</span>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(ssrRenderComponent(_component_icon, {
          name: "cart",
          class: "w-4 h-4 fill-current"
        }, null, _parent2, _scopeId));
      } else {
        return [
          _ctx.$page.props.cartCount > 0 ? (openBlock(), createBlock("span", {
            key: 0,
            class: "bg-red-600 text-white text-xs rounded-md p-1 absolute",
            style: { "top": "-10px", "right": "-8px" }
          }, toDisplayString(_ctx.$page.props.cartCount), 1)) : createCommentVNode("", true),
          createVNode(_component_icon, {
            name: "cart",
            class: "w-4 h-4 fill-current"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="-mr-2 flex items-center sm:hidden"><button id="hamburger" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition"><svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path class="${ssrRenderClass({ "hidden": _ctx.showingNavigationDropdown, "inline-flex": !_ctx.showingNavigationDropdown })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path><path class="${ssrRenderClass({ "hidden": !_ctx.showingNavigationDropdown, "inline-flex": _ctx.showingNavigationDropdown })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div><div class="${ssrRenderClass([{ "block": _ctx.showingNavigationDropdown, "hidden": !_ctx.showingNavigationDropdown }, "sm:hidden"])}">`);
  if (_ctx.$page.props.user) {
    _push(`<div class="pt-2 pb-3 space-y-1">`);
    _push(ssrRenderComponent(_component_jet_responsive_nav_link, {
      href: _ctx.route("dashboard"),
      active: _ctx.route().current("dashboard")
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Dashboard `);
        } else {
          return [
            createTextVNode(" Dashboard ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!--[--><div class="pt-2 pb-3 space-y-1">`);
    _push(ssrRenderComponent(_component_jet_responsive_nav_link, {
      href: _ctx.route("register")
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Register `);
        } else {
          return [
            createTextVNode(" Register ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div><div class="pt-2 pb-3 space-y-1">`);
    _push(ssrRenderComponent(_component_jet_responsive_nav_link, {
      href: _ctx.route("login")
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Login `);
        } else {
          return [
            createTextVNode(" Login ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div><!--]-->`);
  }
  _push(`<div class="pt-2 pb-3 space-y-1">`);
  _push(ssrRenderComponent(_component_jet_responsive_nav_link, {
    href: _ctx.route("shop.index")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Shop `);
      } else {
        return [
          createTextVNode(" Shop ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  if (_ctx.$page.props.cartCount > 0) {
    _push(`<div class="pt-2 pb-3 space-y-1">`);
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route("cart.index"),
      class: "flex items-center pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-red-700 hover:border-red-700 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_icon, {
            name: "cart",
            class: "w-4 h-4 text-red-700 fill-current"
          }, null, _parent2, _scopeId));
          _push2(`<span class="ml-2"${_scopeId}>${ssrInterpolate(_ctx.$page.props.cartCount)} item(s) in cart </span>`);
        } else {
          return [
            createVNode(_component_icon, {
              name: "cart",
              class: "w-4 h-4 text-red-700 fill-current"
            }),
            createVNode("span", { class: "ml-2" }, toDisplayString(_ctx.$page.props.cartCount) + " item(s) in cart ", 1)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.$page.props.user) {
    _push(`<div class="pt-4 pb-1 border-t border-gray-200"><div class="mt-3 space-y-1"><form method="POST">`);
    _push(ssrRenderComponent(_component_jet_responsive_nav_link, { as: "button" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Log Out `);
        } else {
          return [
            createTextVNode(" Log Out ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</form></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></nav>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Nav.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Nav = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = defineComponent({
  props: {
    title: String
  },
  components: {
    Link,
    Nav
    // JetDropdown, 
    // JetDropdownLink,
    // JetResponsiveNavLink,
  },
  data() {
    return {
      showingNavigationDropdown: false
    };
  },
  methods: {
    logout() {
      this.$inertia.post(route("logout"));
    }
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Nav = resolveComponent("Nav");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: _ctx.title }, null, _parent));
  _push(ssrRenderComponent(_component_Head, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<title${_scopeId}>${ssrInterpolate(_ctx.title)}</title><meta name="description" content="Your page description"${_scopeId}>`);
      } else {
        return [
          createVNode("title", null, toDisplayString(_ctx.title), 1),
          createVNode("meta", {
            name: "description",
            content: "Your page description"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="min-h-screen bg-gray-100">`);
  _push(ssrRenderComponent(_component_Nav, null, null, _parent));
  _push(`<header class="bg-gray-700 shadow"><div class="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8"><h2 class="text-white text-center leading-tight"> Lorem ipsum dolor sit amet. </h2></div></header><main>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AppLayout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AppLayout = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = defineComponent({
  components: {
    Link
  },
  props: ["active", "href", "as"],
  computed: {
    classes() {
      return "justify-center inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 transition";
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  if (_ctx.as === "href") {
    _push(ssrRenderComponent(_component_Link, mergeProps({
      href: _ctx.href,
      class: _ctx.classes
    }, _attrs), {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "default")
          ];
        }
      }),
      _: 3
    }, _parent));
  } else {
    _push(`<button${ssrRenderAttrs(mergeProps({ class: _ctx.classes }, _attrs))}>`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</button>`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Buttons/GrayButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const GrayButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  AppLayout as A,
  GrayButton as G
};
