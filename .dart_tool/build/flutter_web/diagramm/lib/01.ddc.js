define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/animation/animation', 'packages/flutter/material', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/painting/_network_image_web'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__animation__animation, packages__flutter__material, packages__flutter__src__rendering__animated_size, packages__flutter__src__painting___network_image_web) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const ticker_provider = packages__flutter__src__widgets__actions.src__widgets__ticker_provider;
  const binding = packages__flutter__src__widgets__actions.src__widgets__binding;
  const animation_controller = packages__flutter__src__animation__animation.src__animation__animation_controller;
  const animations = packages__flutter__src__animation__animation.src__animation__animations;
  const curves = packages__flutter__src__animation__animation.src__animation__curves;
  const tween = packages__flutter__src__animation__animation.src__animation__tween;
  const animation = packages__flutter__src__animation__animation.src__animation__animation;
  const app = packages__flutter__material.src__material__app;
  const theme_data = packages__flutter__material.src__material__theme_data;
  const colors = packages__flutter__material.src__material__colors;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const icons = packages__flutter__material.src__material__icons;
  const flat_button = packages__flutter__material.src__material__flat_button;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const decoration_image = packages__flutter__src__painting___network_image_web.src__painting__decoration_image;
  const image_resolution = packages__flutter__src__painting___network_image_web.src__painting__image_resolution;
  const box_fit = packages__flutter__src__painting___network_image_web.src__painting__box_fit;
  const $01 = Object.create(dart.library);
  let TweenOfdouble = () => (TweenOfdouble = dart.constFn(tween.Tween$(core.double)))();
  let AnimationOfdouble = () => (AnimationOfdouble = dart.constFn(animation.Animation$(core.double)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let AnimationStatusToNull = () => (AnimationStatusToNull = dart.constFn(dart.fnType(core.Null, [animation.AnimationStatus])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 21,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 74,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/01.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 30,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 36,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/01.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 21,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/01.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C13 || CT.C13], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/01.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16, C17 || CT.C17, C18 || CT.C18], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 70,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/01.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21, C22 || CT.C22, C23 || CT.C23], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/01.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 21,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/01.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 49,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 44,
        [_Location_line]: 109,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/01.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 25,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 25,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 25,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.constList([C32 || CT.C32, C33 || CT.C33, C34 || CT.C34], widget_inspector._Location);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C31 || CT.C31,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 106,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/01.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 23,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 23,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37, C38 || CT.C38, C39 || CT.C39, C40 || CT.C40], widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 102,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/01.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 21,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "left",
        [_Location_column]: 21,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.constList([C43 || CT.C43, C44 || CT.C44, C45 || CT.C45], widget_inspector._Location);
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C42 || CT.C42,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 99,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/01.dart"
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.constList([C48 || CT.C48], widget_inspector._Location);
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C47 || CT.C47,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 90,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/01.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 15,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.constList([C51 || CT.C51, C52 || CT.C52], widget_inspector._Location);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C50 || CT.C50,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 88,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/01.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.constList([C55 || CT.C55], widget_inspector._Location);
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C54 || CT.C54,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 126,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/01.dart"
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 34,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.constList([C58 || CT.C58], widget_inspector._Location);
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C57 || CT.C57,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 127,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/01.dart"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 30,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.constList([C61 || CT.C61], widget_inspector._Location);
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C60 || CT.C60,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 128,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/01.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 23,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.constList([C64 || CT.C64, C65 || CT.C65], widget_inspector._Location);
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 123,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/01.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 38,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.constList([C68 || CT.C68], widget_inspector._Location);
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C67 || CT.C67,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 136,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/01.dart"
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 29,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.constList([C71 || CT.C71], widget_inspector._Location);
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C70 || CT.C70,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 137,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/01.dart"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 32,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.constList([C74 || CT.C74], widget_inspector._Location);
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C73 || CT.C73,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 140,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/01.dart"
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 25,
        [_Location_line]: 135,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.constList([C77 || CT.C77], widget_inspector._Location);
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C76 || CT.C76,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 134,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/01.dart"
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 23,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 134,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.constList([C80 || CT.C80, C81 || CT.C81, C82 || CT.C82], widget_inspector._Location);
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C79 || CT.C79,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 131,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/01.dart"
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 19,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 19,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.constList([C85 || CT.C85, C86 || CT.C86, C87 || CT.C87], widget_inspector._Location);
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C84 || CT.C84,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 119,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/01.dart"
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.constList([C90 || CT.C90], widget_inspector._Location);
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C89 || CT.C89,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 118,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/01.dart"
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 15,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.constList([C93 || CT.C93, C94 || CT.C94], widget_inspector._Location);
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C92 || CT.C92,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 116,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/01.dart"
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 19,
        [_Location_line]: 152,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 19,
        [_Location_line]: 153,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.constList([C97 || CT.C97, C98 || CT.C98], widget_inspector._Location);
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C96 || CT.C96,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 151,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/01.dart"
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 15,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.constList([C101 || CT.C101, C102 || CT.C102], widget_inspector._Location);
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C100 || CT.C100,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 148,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/01.dart"
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 25,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C104() {
      return C104 = dart.constList([C105 || CT.C105], widget_inspector._Location);
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C104 || CT.C104,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 66,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/01.dart"
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C107() {
      return C107 = dart.constList([C108 || CT.C108], widget_inspector._Location);
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C107 || CT.C107,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 65,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/01.dart"
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.constList([C111 || CT.C111], widget_inspector._Location);
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C110 || CT.C110,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/01.dart"
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "debugShowCheckedModeBanner",
        [_Location_column]: 7,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "theme",
        [_Location_column]: 7,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "home",
        [_Location_column]: 7,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C113() {
      return C113 = dart.constList([C114 || CT.C114, C115 || CT.C115, C116 || CT.C116, C117 || CT.C117], widget_inspector._Location);
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C113 || CT.C113,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/01.dart"
      });
    },
    get C119() {
      return C119 = dart.constList([], widget_inspector._Location);
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C119 || CT.C119,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 4,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/01.dart"
      });
    }
  });
  $01.MyApp = class MyApp extends framework.StatefulWidget {
    createState() {
      return new $01._MyAppState.new();
    }
  };
  ($01.MyApp.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    $01.MyApp.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = $01.MyApp.prototype;
  dart.addTypeTests($01.MyApp);
  dart.setMethodSignature($01.MyApp, () => ({
    __proto__: dart.getMethods($01.MyApp.__proto__),
    createState: dart.fnType($01._MyAppState, [])
  }));
  dart.setLibraryUri($01.MyApp, "package:diagramm/01.dart");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  let C5;
  let C6;
  let C4;
  let C3;
  let C9;
  let C8;
  let C7;
  let C12;
  let C13;
  let C11;
  let C10;
  let C16;
  let C17;
  let C18;
  let C15;
  let C14;
  let C21;
  let C22;
  let C23;
  let C20;
  let C19;
  let C26;
  let C25;
  let C24;
  let C29;
  let C28;
  let C27;
  let C32;
  let C33;
  let C34;
  let C31;
  let C30;
  let C37;
  let C38;
  let C39;
  let C40;
  let C36;
  let C35;
  let C43;
  let C44;
  let C45;
  let C42;
  let C41;
  let C48;
  let C47;
  let C46;
  let C51;
  let C52;
  let C50;
  let C49;
  let C55;
  let C54;
  let C53;
  let C58;
  let C57;
  let C56;
  let C61;
  let C60;
  let C59;
  let C64;
  let C65;
  let C63;
  let C62;
  let C68;
  let C67;
  let C66;
  let C71;
  let C70;
  let C69;
  let C74;
  let C73;
  let C72;
  let C77;
  let C76;
  let C75;
  let C80;
  let C81;
  let C82;
  let C79;
  let C78;
  let C85;
  let C86;
  let C87;
  let C84;
  let C83;
  let C90;
  let C89;
  let C88;
  let C93;
  let C94;
  let C92;
  let C91;
  let C97;
  let C98;
  let C96;
  let C95;
  let C101;
  let C102;
  let C100;
  let C99;
  let C105;
  let C104;
  let C103;
  let C108;
  let C107;
  let C106;
  let C111;
  let C110;
  let C109;
  let C114;
  let C115;
  let C116;
  let C117;
  let C113;
  let C112;
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$($01.MyApp) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$($01.MyApp)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$($01.MyApp));
  $01._MyAppState = class _MyAppState extends State_SingleTickerProviderStateMixin$36 {
    initState() {
      let t0;
      super.initState();
      this.controller = new animation_controller.AnimationController.new({vsync: this, duration: new core.Duration.new({seconds: 5})});
      let curvedAnimation = new animations.CurvedAnimation.new({parent: this.controller, curve: curves.Curves.ease});
      let tween = new (TweenOfdouble()).new({begin: 100.0, end: 350.0});
      this.animation = AnimationOfdouble()._check(tween.animate(curvedAnimation));
      t0 = this.animation;
      t0.addListener(dart.fn(() => {
        this.setState(dart.fn(() => {
        }, VoidToNull()));
      }, VoidToNull()));
      t0.addStatusListener(dart.fn(status => {
        if (dart.equals(status, animation.AnimationStatus.completed))
          this.controller.reverse();
        else if (dart.equals(status, animation.AnimationStatus.dismissed)) this.controller.forward();
      }, AnimationStatusToNull()));
      t0;
      this.controller.forward();
    }
    build(context) {
      return new app.MaterialApp.new({debugShowCheckedModeBanner: false, title: "Flutter UI", theme: theme_data.ThemeData.new({primaryColor: colors.Colors.white}), home: new scaffold.Scaffold.new({body: new container.Container.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new container.Container.new({height: 100.0, color: colors.Colors.blue, child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.start, crossAxisAlignment: flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([new basic.SizedBox.new({width: 10.0, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new icon.Icon.new(icons.Icons.cake, {color: colors.Colors.yellow, $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), new basic.SizedBox.new({width: 10.0, $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), new text.Text.new("Buy online", {style: new text_style.TextStyle.new({color: colors.Colors.yellow, fontSize: 18.0}), $creationLocationd_0dea112b090073317d4: C10 || CT.C10})]), $creationLocationd_0dea112b090073317d4: C14 || CT.C14}), $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), new basic.Expanded.new({flex: 5, child: new basic.Stack.new({children: JSArrayOfWidget().of([new container.Container.new({decoration: new box_decoration.BoxDecoration.new({image: new decoration_image.DecorationImage.new({image: new image_resolution.AssetImage.new("images/iphone.jpg"), fit: box_fit.BoxFit.fill})}), $creationLocationd_0dea112b090073317d4: C24 || CT.C24}), new basic.Positioned.new({bottom: 0.0, left: 150.0, child: new container.Container.new({height: 50.0, width: 100.0, color: colors.Colors.yellow, child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, crossAxisAlignment: flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([new text.Text.new("Iphone 11", {$creationLocationd_0dea112b090073317d4: C27 || CT.C27})]), $creationLocationd_0dea112b090073317d4: C30 || CT.C30}), $creationLocationd_0dea112b090073317d4: C35 || CT.C35}), $creationLocationd_0dea112b090073317d4: C41 || CT.C41})]), $creationLocationd_0dea112b090073317d4: C46 || CT.C46}), $creationLocationd_0dea112b090073317d4: C49 || CT.C49}), new basic.Expanded.new({flex: 4, child: new container.Container.new({child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceAround, crossAxisAlignment: flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new icon.Icon.new(icons.Icons.play_arrow, {$creationLocationd_0dea112b090073317d4: C53 || CT.C53}), new basic.SizedBox.new({height: 3.0, $creationLocationd_0dea112b090073317d4: C56 || CT.C56}), new text.Text.new("Compare", {$creationLocationd_0dea112b090073317d4: C59 || CT.C59})]), $creationLocationd_0dea112b090073317d4: C62 || CT.C62}), new flat_button.FlatButton.new({color: colors.Colors.blue, onPressed: dart.fn(() => {
                          }, VoidToNull()), child: new basic.Row.new({children: JSArrayOfWidget().of([new icon.Icon.new(icons.Icons.shopping_basket, {$creationLocationd_0dea112b090073317d4: C66 || CT.C66}), new basic.SizedBox.new({width: 10.0, $creationLocationd_0dea112b090073317d4: C69 || CT.C69}), new text.Text.new("Buy", {$creationLocationd_0dea112b090073317d4: C72 || CT.C72})]), $creationLocationd_0dea112b090073317d4: C75 || CT.C75}), $creationLocationd_0dea112b090073317d4: C78 || CT.C78})]), $creationLocationd_0dea112b090073317d4: C83 || CT.C83}), $creationLocationd_0dea112b090073317d4: C88 || CT.C88}), $creationLocationd_0dea112b090073317d4: C91 || CT.C91}), new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.stretch, children: JSArrayOfWidget().of([new container.Container.new({color: colors.Colors.blue, height: 50.0, $creationLocationd_0dea112b090073317d4: C95 || CT.C95})]), $creationLocationd_0dea112b090073317d4: C99 || CT.C99})]), $creationLocationd_0dea112b090073317d4: C103 || CT.C103}), $creationLocationd_0dea112b090073317d4: C106 || CT.C106}), $creationLocationd_0dea112b090073317d4: C109 || CT.C109}), $creationLocationd_0dea112b090073317d4: C112 || CT.C112});
    }
  };
  ($01._MyAppState.new = function() {
    this.animation = null;
    this.controller = null;
    $01._MyAppState.__proto__.new.call(this);
    ;
  }).prototype = $01._MyAppState.prototype;
  dart.addTypeTests($01._MyAppState);
  dart.setMethodSignature($01._MyAppState, () => ({
    __proto__: dart.getMethods($01._MyAppState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri($01._MyAppState, "package:diagramm/01.dart");
  dart.setFieldSignature($01._MyAppState, () => ({
    __proto__: dart.getFields($01._MyAppState.__proto__),
    animation: dart.fieldType(animation.Animation$(core.double)),
    controller: dart.fieldType(animation_controller.AnimationController)
  }));
  let C119;
  let C118;
  $01.main = function main() {
    return binding.runApp(new $01.MyApp.new({$creationLocationd_0dea112b090073317d4: C118 || CT.C118}));
  };
  dart.trackLibraries("packages/diagramm/01", {
    "package:diagramm/01.dart": $01
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["01.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAQ+B;IAAa;;;;;;EAC5C;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AASqB,MAAX;AAEkE,MADxE,kBACQ,yDAA2B,gBAAgB,gCAAkB;AAErD,4BAAsB,4CAC5B,wBACM;AAGV,kBAAY,kCAAqB,YAAY;AACT,uBAA1C,2BAAY,AAAM,KAAD,SAAS,eAAe;AAUrC,WARJ;MACI,eAAY;AACG,QAAf,cAAS;;;MAET,qBAAkB,QAAC;AACnB,YAAW,YAAP,MAAM,EAAoB;AACR,UAApB,AAAW;YACR,KAAW,YAAP,MAAM,EAAoB,sCAAW,AAAW,AAAS;;;AAGlD,MAApB,AAAW;IACb;UAK0B;AACxB,YAAO,sDACuB,cACrB,qBACA,wCAUgB,6BAGjB,iCACM,oCACD,gCAAiB,sBACtB,qCACU,cACM,2BACP,sCACgC,kDACE,0CACrB,sBAChB,+BACS,6DAET,kBAAW,0BAAoB,6EAC/B,+BACS,6DAET,kBACE,sBACO,qCAAwB,gCAAkB,qLAKzD,8BACQ,UACC,+BACa,sBAChB,yCACc,6CACH,iDACI,oCAAW,2BACN,kFAGpB,kCACU,WACF,cACC,qCACG,aACD,cACO,6BACP,sCACgC,mDACE,0CACrB,sBAAC,kBAAK,wWAOpC,8BACQ,UACC,oCACE,sCACgC,wDACE,0CACrB,sBAChB,yCACuC,yCACnB,sBAChB,kBAAW,kFACX,gCAAiB,8DACjB,kBAAK,gIAGT,uCACgB,+BACH;mDACJ,6BACa,sBAChB,kBAAW,uFACX,+BACS,+DAET,kBAAK,kWAQnB,0CACyC,2CAC7B,sBACR,oCACgB,4BACN;IAQxB;;;IApJkB;IACE;;;EAoJtB;;;;;;;;;;;;;;;AA9Je,0BAAO;EAAQ","file":"01.ddc.js"}');
  // Exports:
  return {
    $01: $01
  };
});

//# sourceMappingURL=01.ddc.js.map
