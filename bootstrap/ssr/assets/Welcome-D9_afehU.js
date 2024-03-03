import { mergeProps, withCtx, createTextVNode, toDisplayString, unref, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
import { A as AppLayout, G as GrayButton } from "./GrayButton-DzYDhNog.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Welcome",
  __ssrInlineRender: true,
  props: {
    featured: {
      type: Array
    },
    categories: {
      type: Array
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AppLayout, mergeProps({ title: "Welcome" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative"${_scopeId}><img${ssrRenderAttr("src", "/storage/images/site_images/instagram-image-size.jpg")} alt="Coder&#39;s Store" class="w-full h-96 opacity-75 object-cover"${_scopeId}><div class="flex flex-col justify-around items-center absolute inset-0"${_scopeId}><span class="text-white text-xl"${_scopeId}>Lorem ipsum dolor sit amet.</span><div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"${_scopeId}><!--[-->`);
            ssrRenderList(__props.categories, (category, index) => {
              _push2(ssrRenderComponent(GrayButton, {
                as: "href",
                href: _ctx.event,
                class: "text-md",
                key: index
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
            _push2(`<!--]--></div></div></div><div class="text-center border-t border-b py-4"${_scopeId}><p${_scopeId}>Lorem ipsum dolor sit amet.</p></div><div class="flex flex-col max-w-7xl mx-auto px-4 sm:container sm:flex-row sm:space-x-4 sm:my-4 sm:px-6 lg:px-8"${_scopeId}><!--[-->`);
            ssrRenderList(__props.featured, (feat, index) => {
              _push2(ssrRenderComponent(unref(Link), {
                href: "/",
                class: "flex flex-col w-1/4 h-full mb-3",
                key: index
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text-center text-white bg-gray-700 py-2"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(feat.name)}</span></div><img${ssrRenderAttr("src", "/storage/images/products/" + feat.image)}${ssrRenderAttr("alt", feat.name)} class="h-72 object-cover md:w-72 lg:w-96"${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-center text-white bg-gray-700 py-2" }, [
                        createVNode("span", null, toDisplayString(feat.name), 1)
                      ]),
                      createVNode("img", {
                        src: "/storage/images/products/" + feat.image,
                        alt: feat.name,
                        class: "h-72 object-cover md:w-72 lg:w-96"
                      }, null, 8, ["src", "alt"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><div class="text-center text-white bg-black px-4 py-4 flex justify-center"${_scopeId}><p class="container"${_scopeId}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto fuga neque culpa illum sit exercitationem enim dolores dolor quaerat quos, ex ipsa, recusandae in ad voluptates officia voluptatem, nobis animi! Magni harum quos voluptas ex eveniet inventore rerum ducimus repellendus! Saepe, nam. Tempora optio ratione ipsa. Commodi est voluptatem excepturi dignissimos voluptas nostrum ut atque, repellendus quidem nesciunt, maiores fugiat? Esse eligendi amet quo error, nostrum necessitatibus laudantium nulla rem quidem accusantium tenetur, aperiam qui excepturi! Natus, praesentium repellat esse optio fugiat id vel voluptatum deserunt minus, provident cum doloribus. </p></div>`);
          } else {
            return [
              createVNode("div", { class: "relative" }, [
                createVNode("img", {
                  src: "/storage/images/site_images/instagram-image-size.jpg",
                  alt: "Coder's Store",
                  class: "w-full h-96 opacity-75 object-cover"
                }, null, 8, ["src"]),
                createVNode("div", { class: "flex flex-col justify-around items-center absolute inset-0" }, [
                  createVNode("span", { class: "text-white text-xl" }, "Lorem ipsum dolor sit amet."),
                  createVNode("div", { class: "flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category, index) => {
                      return openBlock(), createBlock(GrayButton, {
                        as: "href",
                        href: _ctx.event,
                        class: "text-md",
                        key: index
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(category.name), 1)
                        ]),
                        _: 2
                      }, 1032, ["href"]);
                    }), 128))
                  ])
                ])
              ]),
              createVNode("div", { class: "text-center border-t border-b py-4" }, [
                createVNode("p", null, "Lorem ipsum dolor sit amet.")
              ]),
              createVNode("div", { class: "flex flex-col max-w-7xl mx-auto px-4 sm:container sm:flex-row sm:space-x-4 sm:my-4 sm:px-6 lg:px-8" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.featured, (feat, index) => {
                  return openBlock(), createBlock(unref(Link), {
                    href: "/",
                    class: "flex flex-col w-1/4 h-full mb-3",
                    key: index
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-center text-white bg-gray-700 py-2" }, [
                        createVNode("span", null, toDisplayString(feat.name), 1)
                      ]),
                      createVNode("img", {
                        src: "/storage/images/products/" + feat.image,
                        alt: feat.name,
                        class: "h-72 object-cover md:w-72 lg:w-96"
                      }, null, 8, ["src", "alt"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ]),
              createVNode("div", { class: "text-center text-white bg-black px-4 py-4 flex justify-center" }, [
                createVNode("p", { class: "container" }, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto fuga neque culpa illum sit exercitationem enim dolores dolor quaerat quos, ex ipsa, recusandae in ad voluptates officia voluptatem, nobis animi! Magni harum quos voluptas ex eveniet inventore rerum ducimus repellendus! Saepe, nam. Tempora optio ratione ipsa. Commodi est voluptatem excepturi dignissimos voluptas nostrum ut atque, repellendus quidem nesciunt, maiores fugiat? Esse eligendi amet quo error, nostrum necessitatibus laudantium nulla rem quidem accusantium tenetur, aperiam qui excepturi! Natus, praesentium repellat esse optio fugiat id vel voluptatum deserunt minus, provident cum doloribus. ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
