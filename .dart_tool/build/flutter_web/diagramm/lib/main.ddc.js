define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/animation/animation', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web', 'packages/vector_math/vector_math_64'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__animation__animation, packages__flutter__material, packages__flutter__src__painting___network_image_web, packages__vector_math__vector_math_64) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const ticker_provider = packages__flutter__src__widgets__actions.src__widgets__ticker_provider;
  const binding = packages__flutter__src__widgets__actions.src__widgets__binding;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const icon$ = packages__flutter__src__widgets__actions.src__widgets__icon;
  const animation_controller = packages__flutter__src__animation__animation.src__animation__animation_controller;
  const animations = packages__flutter__src__animation__animation.src__animation__animations;
  const curves = packages__flutter__src__animation__animation.src__animation__curves;
  const tween = packages__flutter__src__animation__animation.src__animation__tween;
  const animation = packages__flutter__src__animation__animation.src__animation__animation;
  const material = packages__flutter__material.src__material__material;
  const colors = packages__flutter__material.src__material__colors;
  const icons = packages__flutter__material.src__material__icons;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const vector_math_64 = packages__vector_math__vector_math_64.vector_math_64;
  const main = Object.create(dart.library);
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
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textDirection",
        [_Location_column]: 9,
        [_Location_line]: 257,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 158,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/main.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 158,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 157,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/main.dart"
      });
    },
    get C8() {
      return C8 = dart.constList([], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 5,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/main.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 28,
        [_Location_line]: 279,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textDirection",
        [_Location_column]: 34,
        [_Location_line]: 279,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 68,
        [_Location_line]: 279,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11, C12 || CT.C12, C13 || CT.C13], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 279,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/main.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "angle",
        [_Location_column]: 15,
        [_Location_line]: 277,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 278,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16, C17 || CT.C17], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 276,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/main.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 13,
        [_Location_line]: 275,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 276,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20, C21 || CT.C21], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 274,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/main.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 273,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 274,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24, C25 || CT.C25], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 272,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/main.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 272,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 7,
        [_Location_line]: 283,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 284,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28, C29 || CT.C29, C30 || CT.C30], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 271,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/main.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 5,
        [_Location_line]: 271,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33], widget_inspector._Location);
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C32 || CT.C32,
        [_Location_name]: null,
        [_Location_column]: 10,
        [_Location_line]: 270,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/main.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 28,
        [_Location_line]: 305,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textDirection",
        [_Location_column]: 34,
        [_Location_line]: 305,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 68,
        [_Location_line]: 305,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36, C37 || CT.C37, C38 || CT.C38], widget_inspector._Location);
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C35 || CT.C35,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 305,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/main.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "transform",
        [_Location_column]: 15,
        [_Location_line]: 303,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 304,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.constList([C41 || CT.C41, C42 || CT.C42], widget_inspector._Location);
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C40 || CT.C40,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 302,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/main.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 13,
        [_Location_line]: 301,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 302,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45, C46 || CT.C46], widget_inspector._Location);
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C44 || CT.C44,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 300,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/main.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 299,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 300,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49, C50 || CT.C50], widget_inspector._Location);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 298,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/main.dart"
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 298,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 7,
        [_Location_line]: 309,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 310,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.constList([C53 || CT.C53, C54 || CT.C54, C55 || CT.C55], widget_inspector._Location);
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C52 || CT.C52,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 297,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/main.dart"
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 5,
        [_Location_line]: 297,
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
        [_Location_column]: 10,
        [_Location_line]: 296,
        [_Location_file]: "org-dartlang-app:///packages/diagramm/main.dart"
      });
    }
  });
  main.MyApp = class MyApp extends framework.StatefulWidget {
    createState() {
      return new main._MyAppState.new();
    }
  };
  (main.MyApp.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.MyApp.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    createState: dart.fnType(main._MyAppState, [])
  }));
  dart.setLibraryUri(main.MyApp, "package:diagramm/main.dart");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C1;
  let C0;
  let C6;
  let C5;
  let C4;
  const State_TickerProviderStateMixin$36 = class State_TickerProviderStateMixin extends framework.State$(main.MyApp) {};
  (State_TickerProviderStateMixin$36.new = function() {
    ticker_provider.TickerProviderStateMixin$(main.MyApp)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36, ticker_provider.TickerProviderStateMixin$(main.MyApp));
  main._MyAppState = class _MyAppState extends State_TickerProviderStateMixin$36 {
    initState() {
      let t0, t0$, t0$0, t0$1;
      super.initState();
      this.controllerBus = new animation_controller.AnimationController.new({vsync: this, duration: new core.Duration.new({seconds: 4})});
      this.controllerBike = new animation_controller.AnimationController.new({vsync: this, duration: new core.Duration.new({seconds: 5})});
      this.controllerPlane = new animation_controller.AnimationController.new({vsync: this, duration: new core.Duration.new({seconds: 2})});
      this.controllerWalk = new animation_controller.AnimationController.new({vsync: this, duration: new core.Duration.new({seconds: 7})});
      this.curvedAnimationBus = new animations.CurvedAnimation.new({parent: this.controllerBus, curve: curves.Curves.slowMiddle});
      this.curvedAnimationBike = new animations.CurvedAnimation.new({parent: this.controllerBike, curve: curves.Curves.easeInToLinear});
      this.curvedAnimationPlane = new animations.CurvedAnimation.new({parent: this.controllerPlane, curve: curves.Curves.easeInCubic});
      this.curvedAnimationWalk = new animations.CurvedAnimation.new({parent: this.controllerWalk, curve: curves.Curves.linear});
      this.tweenBus = new (TweenOfdouble()).new({begin: 100.0, end: 350.0});
      this.tweenBike = new (TweenOfdouble()).new({begin: 100.0, end: 350.0});
      this.tweenPlane = new (TweenOfdouble()).new({begin: 100.0, end: 350.0});
      this.tweenWalk = new (TweenOfdouble()).new({begin: 100.0, end: 350.0});
      this.animationBus = AnimationOfdouble()._check(this.tweenBus.animate(this.curvedAnimationBus));
      t0 = this.animationBus;
      t0.addListener(dart.fn(() => {
        this.setState(dart.fn(() => {
        }, VoidToNull()));
      }, VoidToNull()));
      t0.addStatusListener(dart.fn(status => {
        if (dart.equals(status, animation.AnimationStatus.completed)) {
          this.angleForBus = 180;
          this.paddingForBus = 0.0;
          this.controllerBus.reverse();
        } else if (dart.equals(status, animation.AnimationStatus.dismissed)) {
          this.angleForBus = 0;
          this.paddingForBus = 50.0;
          this.controllerBus.forward();
        }
      }, AnimationStatusToNull()));
      t0;
      this.animationBike = AnimationOfdouble()._check(this.tweenBike.animate(this.curvedAnimationBike));
      t0$ = this.animationBike;
      t0$.addListener(dart.fn(() => {
        this.setState(dart.fn(() => {
        }, VoidToNull()));
      }, VoidToNull()));
      t0$.addStatusListener(dart.fn(status => {
        if (dart.equals(status, animation.AnimationStatus.completed)) {
          this.angleForBike = 180;
          this.paddingForBike = 0.0;
          this.controllerBike.reverse();
        } else if (dart.equals(status, animation.AnimationStatus.dismissed)) {
          this.angleForBike = 0;
          this.paddingForBike = 50.0;
          this.controllerBike.forward();
        }
      }, AnimationStatusToNull()));
      t0$;
      this.animationPlane = AnimationOfdouble()._check(this.tweenPlane.animate(this.curvedAnimationPlane));
      t0$0 = this.animationPlane;
      t0$0.addListener(dart.fn(() => {
        this.setState(dart.fn(() => {
        }, VoidToNull()));
      }, VoidToNull()));
      t0$0.addStatusListener(dart.fn(status => {
        if (dart.equals(status, animation.AnimationStatus.completed)) {
          this.angleForPlane = 270;
          this.controllerPlane.reverse();
        } else if (dart.equals(status, animation.AnimationStatus.dismissed)) {
          this.angleForPlane = 90;
          this.controllerPlane.forward();
        }
      }, AnimationStatusToNull()));
      t0$0;
      this.animationWalk = AnimationOfdouble()._check(this.tweenWalk.animate(this.curvedAnimationWalk));
      t0$1 = this.animationWalk;
      t0$1.addListener(dart.fn(() => {
        this.setState(dart.fn(() => {
        }, VoidToNull()));
      }, VoidToNull()));
      t0$1.addStatusListener(dart.fn(status => {
        if (dart.equals(status, animation.AnimationStatus.completed)) {
          this.angleForWalk = 180;
          this.paddingForWalk = 0.0;
          this.controllerWalk.reverse();
        } else if (dart.equals(status, animation.AnimationStatus.dismissed)) {
          this.angleForWalk = 0;
          this.paddingForWalk = 50.0;
          this.controllerWalk.forward();
        }
      }, AnimationStatusToNull()));
      t0$1;
      this.controllerBus.forward();
      this.controllerBike.forward();
      this.controllerPlane.forward();
      this.controllerWalk.forward();
    }
    build(context) {
      return new material.Material.new({child: new basic.Stack.new({children: JSArrayOfWidget().of([main.containerWithIcon({bgColor: colors.Colors.green, padding: this.paddingForBus, angle: this.angleForBus, icon: icons.Icons.airport_shuttle, top: 50.0, animation: this.animationBus}), main.containerWithIcon({bgColor: colors.Colors.blue, padding: this.paddingForBike, angle: this.angleForBike, icon: icons.Icons.directions_bike, top: 150.0, animation: this.animationBike}), main.containerWithIconPlane({bgColor: colors.Colors.yellow, padding: 50.0, angle: this.angleForPlane, icon: icons.Icons.airplanemode_active, top: 250.0, animation: this.animationPlane}), main.containerWithIcon({bgColor: colors.Colors.pink, padding: this.paddingForWalk, angle: this.angleForWalk, icon: icons.Icons.directions_walk, top: 350.0, animation: this.animationWalk})]), textDirection: ui.TextDirection.ltr, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4});
    }
  };
  (main._MyAppState.new = function() {
    this.angleForBus = 0;
    this.angleForBike = 0;
    this.angleForPlane = 90;
    this.angleForWalk = 0;
    this.paddingForBus = 50.0;
    this.paddingForBike = 50.0;
    this.paddingForWalk = 50.0;
    this.animationBus = null;
    this.animationBike = null;
    this.animationPlane = null;
    this.animationWalk = null;
    this.controllerBus = null;
    this.controllerBike = null;
    this.controllerPlane = null;
    this.controllerWalk = null;
    this.curvedAnimationBus = null;
    this.curvedAnimationBike = null;
    this.curvedAnimationPlane = null;
    this.curvedAnimationWalk = null;
    this.tweenBus = null;
    this.tweenBike = null;
    this.tweenPlane = null;
    this.tweenWalk = null;
    main._MyAppState.__proto__.new.call(this);
    ;
  }).prototype = main._MyAppState.prototype;
  dart.addTypeTests(main._MyAppState);
  dart.setMethodSignature(main._MyAppState, () => ({
    __proto__: dart.getMethods(main._MyAppState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main._MyAppState, "package:diagramm/main.dart");
  dart.setFieldSignature(main._MyAppState, () => ({
    __proto__: dart.getFields(main._MyAppState.__proto__),
    angleForBus: dart.fieldType(core.int),
    angleForBike: dart.fieldType(core.int),
    angleForPlane: dart.fieldType(core.int),
    angleForWalk: dart.fieldType(core.int),
    paddingForBus: dart.fieldType(core.double),
    paddingForBike: dart.fieldType(core.double),
    paddingForWalk: dart.fieldType(core.double),
    animationBus: dart.fieldType(animation.Animation$(core.double)),
    animationBike: dart.fieldType(animation.Animation$(core.double)),
    animationPlane: dart.fieldType(animation.Animation$(core.double)),
    animationWalk: dart.fieldType(animation.Animation$(core.double)),
    controllerBus: dart.fieldType(animation_controller.AnimationController),
    controllerBike: dart.fieldType(animation_controller.AnimationController),
    controllerPlane: dart.fieldType(animation_controller.AnimationController),
    controllerWalk: dart.fieldType(animation_controller.AnimationController),
    curvedAnimationBus: dart.fieldType(animations.CurvedAnimation),
    curvedAnimationBike: dart.fieldType(animations.CurvedAnimation),
    curvedAnimationPlane: dart.fieldType(animations.CurvedAnimation),
    curvedAnimationWalk: dart.fieldType(animations.CurvedAnimation),
    tweenBus: dart.fieldType(tween.Tween),
    tweenBike: dart.fieldType(tween.Tween),
    tweenPlane: dart.fieldType(tween.Tween),
    tweenWalk: dart.fieldType(tween.Tween)
  }));
  let C8;
  let C7;
  let C11;
  let C12;
  let C13;
  let C10;
  let C9;
  let C16;
  let C17;
  let C15;
  let C14;
  let C20;
  let C21;
  let C19;
  let C18;
  let C24;
  let C25;
  let C23;
  let C22;
  let C28;
  let C29;
  let C30;
  let C27;
  let C26;
  let C33;
  let C32;
  let C31;
  let C36;
  let C37;
  let C38;
  let C35;
  let C34;
  let C41;
  let C42;
  let C40;
  let C39;
  let C45;
  let C46;
  let C44;
  let C43;
  let C49;
  let C50;
  let C48;
  let C47;
  let C53;
  let C54;
  let C55;
  let C52;
  let C51;
  let C58;
  let C57;
  let C56;
  main.main = function main$() {
    return binding.runApp(new main.MyApp.new({$creationLocationd_0dea112b090073317d4: C7 || CT.C7}));
  };
  main.containerWithIconPlane = function containerWithIconPlane(opts) {
    let bgColor = opts && 'bgColor' in opts ? opts.bgColor : null;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let angle = opts && 'angle' in opts ? opts.angle : null;
    let icon = opts && 'icon' in opts ? opts.icon : null;
    let top = opts && 'top' in opts ? opts.top : null;
    let animation = opts && 'animation' in opts ? opts.animation : null;
    return new container.Container.new({child: new basic.Positioned.new({child: new container.Container.new({color: bgColor, child: new container.Container.new({margin: new edge_insets.EdgeInsets.only({left: core.double._check(dart.dsend(animation.value, '-', [padding]))}), child: new basic.Transform.rotate({angle: dart.notNull(angle) * 3.141592653589793 / 180, child: new icon$.Icon.new(icon, {textDirection: ui.TextDirection.ltr, size: 50.0, $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), $creationLocationd_0dea112b090073317d4: C14 || CT.C14}), $creationLocationd_0dea112b090073317d4: C18 || CT.C18}), $creationLocationd_0dea112b090073317d4: C22 || CT.C22}), top: top, width: core.double._check(animation.value), $creationLocationd_0dea112b090073317d4: C26 || CT.C26}), $creationLocationd_0dea112b090073317d4: C31 || CT.C31});
  };
  main.containerWithIcon = function containerWithIcon(opts) {
    let t0;
    let bgColor = opts && 'bgColor' in opts ? opts.bgColor : null;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let angle = opts && 'angle' in opts ? opts.angle : null;
    let icon = opts && 'icon' in opts ? opts.icon : null;
    let top = opts && 'top' in opts ? opts.top : null;
    let animation = opts && 'animation' in opts ? opts.animation : null;
    return new container.Container.new({child: new basic.Positioned.new({child: new container.Container.new({color: bgColor, child: new container.Container.new({margin: new edge_insets.EdgeInsets.only({left: core.double._check(dart.dsend(animation.value, '-', [padding]))}), child: new basic.Transform.new({transform: (t0 = vector_math_64.Matrix4.identity(), t0.rotateY(dart.notNull(angle) * 3.141592653589793 / 180), t0), child: new icon$.Icon.new(icon, {textDirection: ui.TextDirection.ltr, size: 50.0, $creationLocationd_0dea112b090073317d4: C34 || CT.C34}), $creationLocationd_0dea112b090073317d4: C39 || CT.C39}), $creationLocationd_0dea112b090073317d4: C43 || CT.C43}), $creationLocationd_0dea112b090073317d4: C47 || CT.C47}), top: top, width: core.double._check(animation.value), $creationLocationd_0dea112b090073317d4: C51 || CT.C51}), $creationLocationd_0dea112b090073317d4: C56 || CT.C56});
  };
  dart.trackLibraries("packages/diagramm/main", {
    "package:diagramm/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":"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","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
