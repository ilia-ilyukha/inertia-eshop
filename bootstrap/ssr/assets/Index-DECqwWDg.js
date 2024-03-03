import { defineComponent, useSSRContext, mergeProps, resolveComponent, withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
import { A as AppLayout } from "./GrayButton-DzYDhNog.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$1 = defineComponent({
  props: ["name"]
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if (_ctx.name === "cart") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      "aria-hidden": "true",
      "data-prefix": "fas",
      "data-icon": "shopping-cart",
      class: "svg-inline--fa fa-shopping-cart fa-w-18",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 576 512"
    }, _attrs))}><path d="m528.12 301.319 47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg>`);
  } else if (_ctx.name === "angle-right") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      "aria-hidden": "true",
      "data-prefix": "fas",
      "data-icon": "angle-right",
      class: "svg-inline--fa fa-angle-right fa-w-8",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 512"
    }, _attrs))}><path d="m224.3 273-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>`);
  } else if (_ctx.name === "angle-down") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      "aria-hidden": "true",
      "data-prefix": "fas",
      "data-icon": "angle-down",
      class: "svg-inline--fa fa-angle-down fa-w-10",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 320 512"
    }, _attrs))}><path d="M143 352.3 7 216.3a23.9 23.9 0 0 1 0-33.9l22.6-22.6a23.9 23.9 0 0 1 33.9 0l96.4 96.4 96.4-96.4a23.9 23.9 0 0 1 33.9 0l22.6 22.6a23.9 23.9 0 0 1 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path></svg>`);
  } else if (_ctx.name === "angle-left") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      "aria-hidden": "true",
      "data-prefix": "fas",
      "data-icon": "angle-left",
      class: "svg-inline--fa fa-angle-left fa-w-8",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 512"
    }, _attrs))}><path d="m31.7 239 136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg>`);
  } else if (_ctx.name === "spinner") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24"
    }, _attrs))}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>`);
  } else if (_ctx.name === "search") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      "aria-hidden": "true",
      "data-prefix": "fas",
      "data-icon": "search",
      class: "svg-inline--fa fa-search fa-w-16",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, _attrs))}><path d="M505 442.7 405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7a23.9 23.9 0 0 0 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Icons = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    products: {
      type: Array
    },
    categories: {
      type: Array
    },
    categoryName: {
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_no_items_found = resolveComponent("no-items-found");
      _push(ssrRenderComponent(AppLayout, mergeProps({
        title: `Shop ${__props.categoryName}`
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<header class="text-gray-700 bg-gray-300 shadow"${_scopeId}><div class="flex justify-between items-center max-w-7x1 mx-auto py-2 px-4 sm:px-6 lg:px-9"${_scopeId}><div class="flex items-center leading-tight"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("welcome"),
              clas: "text-gray-700 transition hover:text-yellow-500"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Home `);
                } else {
                  return [
                    createTextVNode(" Home ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(Icons, {
              name: "angle-right",
              class: "w-4 h-4 fill-current"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Shop ${ssrInterpolate(__props.categoryName)}</span></div><div class="w-1/2"${_scopeId}></div></div></header><div class="flex"${_scopeId}><div class="border-r w-1/5"${_scopeId}><div${_scopeId}><div class="text-white text-center bg-gray-700 py-4"${_scopeId}><p${_scopeId}>Shop by category</p></div><div class="flex flex-col divide-"${_scopeId}><!--[-->`);
            ssrRenderList(__props.categories, (category, index) => {
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("shop.index", { category: category.slug }),
                key: index,
                class: ["text-left px-4 py-4 transition hover:text-white hover:bg-gray-700 sm:px-6 lg:px-8", _ctx.route().current("shop.index", { category: category.slug }) ? "bg-gray-700 text-white" : ""]
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(category.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(category.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div></div><div class="border-l w-4/5"${_scopeId}>`);
            if (_ctx.categorySlug) {
              _push2(`<div class="flex justify-end space-x-2 pt-4 pr-4"${_scopeId}><span class="font-bold"${_scopeId}>Price:</span>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("shop.index", { category: _ctx.categorySlug, sort: "low_high" }),
                class: "hover:text-yellow-500"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Low to High`);
                  } else {
                    return [
                      createTextVNode("Low to High")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<span${_scopeId}>|</span>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("shop.index", { category: _ctx.categorySlug, sort: "high_low" }),
                class: "hover:text-yellow-500"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`High to Low`);
                  } else {
                    return [
                      createTextVNode("High to Low")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="container flex flex-wrap mx-auto"${_scopeId}>`);
            if (__props.products.length === 0) {
              _push2(ssrRenderComponent(_component_no_items_found, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!--[-->`);
              ssrRenderList(__props.products, (product, index) => {
                _push2(ssrRenderComponent(unref(Link), {
                  href: "#",
                  class: "flex flex-col w-full p-4 rounded sm:w-1/2 md:w-1/3 lg:w-1/4",
                  key: index
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<img${ssrRenderAttr("src", "/storage/images/products/" + product.image)}${ssrRenderAttr("alt", product.name)} class="h-72 object-cover"${_scopeId2}><div class="flex justify-around bg-gray-700 py-2"${_scopeId2}><span class="text-yellow-500"${_scopeId2}>${ssrInterpolate(product.price)} UAH</span><span class="text-white"${_scopeId2}>${ssrInterpolate(product.name)}</span></div>`);
                    } else {
                      return [
                        createVNode("img", {
                          src: "/storage/images/products/" + product.image,
                          alt: product.name,
                          class: "h-72 object-cover"
                        }, null, 8, ["src", "alt"]),
                        createVNode("div", { class: "flex justify-around bg-gray-700 py-2" }, [
                          createVNode("span", { class: "text-yellow-500" }, toDisplayString(product.price) + " UAH", 1),
                          createVNode("span", { class: "text-white" }, toDisplayString(product.name), 1)
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            }
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("header", { class: "text-gray-700 bg-gray-300 shadow" }, [
                createVNode("div", { class: "flex justify-between items-center max-w-7x1 mx-auto py-2 px-4 sm:px-6 lg:px-9" }, [
                  createVNode("div", { class: "flex items-center leading-tight" }, [
                    createVNode(unref(Link), {
                      href: _ctx.route("welcome"),
                      clas: "text-gray-700 transition hover:text-yellow-500"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Home ")
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode(Icons, {
                      name: "angle-right",
                      class: "w-4 h-4 fill-current"
                    }),
                    createVNode("span", null, "Shop " + toDisplayString(__props.categoryName), 1)
                  ]),
                  createVNode("div", { class: "w-1/2" })
                ])
              ]),
              createVNode("div", { class: "flex" }, [
                createVNode("div", { class: "border-r w-1/5" }, [
                  createVNode("div", null, [
                    createVNode("div", { class: "text-white text-center bg-gray-700 py-4" }, [
                      createVNode("p", null, "Shop by category")
                    ]),
                    createVNode("div", { class: "flex flex-col divide-" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category, index) => {
                        return openBlock(), createBlock(unref(Link), {
                          href: _ctx.route("shop.index", { category: category.slug }),
                          key: index,
                          class: ["text-left px-4 py-4 transition hover:text-white hover:bg-gray-700 sm:px-6 lg:px-8", _ctx.route().current("shop.index", { category: category.slug }) ? "bg-gray-700 text-white" : ""]
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(category.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["href", "class"]);
                      }), 128))
                    ])
                  ])
                ]),
                createVNode("div", { class: "border-l w-4/5" }, [
                  _ctx.categorySlug ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex justify-end space-x-2 pt-4 pr-4"
                  }, [
                    createVNode("span", { class: "font-bold" }, "Price:"),
                    createVNode(unref(Link), {
                      href: _ctx.route("shop.index", { category: _ctx.categorySlug, sort: "low_high" }),
                      class: "hover:text-yellow-500"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Low to High")
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode("span", null, "|"),
                    createVNode(unref(Link), {
                      href: _ctx.route("shop.index", { category: _ctx.categorySlug, sort: "high_low" }),
                      class: "hover:text-yellow-500"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("High to Low")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ])) : createCommentVNode("", true),
                  createVNode("div", { class: "container flex flex-wrap mx-auto" }, [
                    __props.products.length === 0 ? (openBlock(), createBlock(_component_no_items_found, { key: 0 })) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(__props.products, (product, index) => {
                      return openBlock(), createBlock(unref(Link), {
                        href: "#",
                        class: "flex flex-col w-full p-4 rounded sm:w-1/2 md:w-1/3 lg:w-1/4",
                        key: index
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: "/storage/images/products/" + product.image,
                            alt: product.name,
                            class: "h-72 object-cover"
                          }, null, 8, ["src", "alt"]),
                          createVNode("div", { class: "flex justify-around bg-gray-700 py-2" }, [
                            createVNode("span", { class: "text-yellow-500" }, toDisplayString(product.price) + " UAH", 1),
                            createVNode("span", { class: "text-white" }, toDisplayString(product.name), 1)
                          ])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Shop/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
