import 'package:flutter/material.dart';
import 'package:flutter/animation.dart';
import 'dart:math';

void main() => runApp(MyApp());

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> with TickerProviderStateMixin {
  int angleForBus = 0;
  int angleForBike = 0;
  int angleForPlane = 90;
  int angleForWalk = 0;
  
  double paddingForBus = 50.0;
  double paddingForBike = 50.0;
  double paddingForWalk = 50.0;


  Animation<double> animationBus;
  Animation<double> animationBike;
  Animation<double> animationPlane;
  Animation<double> animationWalk;

  AnimationController controllerBus;
  AnimationController controllerBike;
  AnimationController controllerPlane;
  AnimationController controllerWalk;

  CurvedAnimation curvedAnimationBus;
  CurvedAnimation curvedAnimationBike;
  CurvedAnimation curvedAnimationPlane;
  CurvedAnimation curvedAnimationWalk;

  Tween tweenBus;
  Tween tweenBike;
  Tween tweenPlane;
  Tween tweenWalk;

  @override
  void initState() {
    super.initState();
    controllerBus =
        new AnimationController(vsync: this, duration: Duration(seconds: 4));
    controllerBike =
        new AnimationController(vsync: this, duration: Duration(seconds: 5));
    controllerPlane =
        new AnimationController(vsync: this, duration: Duration(seconds: 2));
    controllerWalk =
        new AnimationController(vsync: this, duration: Duration(seconds: 7));

    curvedAnimationBus =
        new CurvedAnimation(parent: controllerBus, curve: Curves.slowMiddle);
    curvedAnimationBike =
        new CurvedAnimation(parent: controllerBike, curve: Curves.easeInToLinear);
    curvedAnimationPlane =
        new CurvedAnimation(parent: controllerPlane, curve: Curves.easeInCubic);
    curvedAnimationWalk =
        new CurvedAnimation(parent: controllerWalk, curve: Curves.linear);

    tweenBus = new Tween<double>(begin: 100.0, end: 350.0);
    tweenBike = new Tween<double>(begin: 100.0, end: 350.0);
    tweenPlane = new Tween<double>(begin: 100.0, end: 350.0);
    tweenWalk = new Tween<double>(begin: 100.0, end: 350.0);

    animationBus = tweenBus.animate(curvedAnimationBus);

    animationBus
      ..addListener(() {
        setState(() {});
      })
      ..addStatusListener((status) {
        if (status == AnimationStatus.completed) {
          angleForBus = 180;
          // angleForPlane = 270;
          paddingForBus = 0;
          controllerBus.reverse();
        } else if (status == AnimationStatus.dismissed) {
          angleForBus = 0;
          // angleForPlane = 90;
          paddingForBus = 50.0;
          controllerBus.forward();
        }
      });

      animationBike = tweenBike.animate(curvedAnimationBike);

      animationBike
      ..addListener(() {
        setState(() {});
      })
      ..addStatusListener((status) {
        if (status == AnimationStatus.completed) {
          angleForBike = 180;
          // angleForPlane = 270;
          paddingForBike = 0;
          controllerBike.reverse();
        } else if (status == AnimationStatus.dismissed) {
          angleForBike = 0;
          // angleForPlane = 90;
          paddingForBike = 50.0;
          controllerBike.forward();
        }
      });

      animationPlane = tweenPlane.animate(curvedAnimationPlane);

      animationPlane
      ..addListener(() {
        setState(() {});
      })
      ..addStatusListener((status) {
        if (status == AnimationStatus.completed) {
          // angle = 180;
          angleForPlane = 270;
          // padding = 0;
          controllerPlane.reverse();
        } else if (status == AnimationStatus.dismissed) {
          // angle = 0;
          angleForPlane = 90;
          // padding = 50.0;
          controllerPlane.forward();
        }
      });

      animationWalk = tweenWalk.animate(curvedAnimationWalk);

      animationWalk
      ..addListener(() {
        setState(() {});
      })
      ..addStatusListener((status) {
        if (status == AnimationStatus.completed) {
          angleForWalk = 180;
          // angleForPlane = 270;
          paddingForWalk = 0;
          controllerWalk.reverse();
        } else if (status == AnimationStatus.dismissed) {
          angleForWalk = 0;
          // angleForPlane = 90;
          paddingForWalk = 50.0;
          controllerWalk.forward();
        }
      });

    controllerBus.forward();
    controllerBike.forward();
    controllerPlane.forward();
    controllerWalk.forward();
  }

  @override
  Widget build(BuildContext context) {
    return Material(
      child: new Stack(
        children: <Widget>[
          containerWithIcon(
              bgColor: Colors.green,
              padding: paddingForBus,
              angle: angleForBus,
              icon: Icons.airport_shuttle,
              top: 50.0,
              animation: animationBus),
          containerWithIcon(
              bgColor: Colors.blue,
              padding: paddingForBike,
              angle: angleForBike,
              icon: Icons.directions_bike,
              top: 150.0,
              animation: animationBike),
          containerWithIconPlane(
              bgColor: Colors.yellow,
              padding: 50.0,
              angle: angleForPlane,
              icon: Icons.airplanemode_active,
              top: 250.0,
              animation: animationPlane),
          containerWithIcon(
              bgColor: Colors.pink,
              padding: paddingForWalk,
              angle: angleForWalk,
              icon: Icons.directions_walk,
              top: 350.0,
              animation: animationWalk),
          // Container(
          //   child: new Positioned(
          //     child: Container(
          //       color: Colors.green,
          //       child: new Container(
          //           margin: EdgeInsets.only(left: animation.value - padding),
          //           child: Transform(
          //             transform: Matrix4.identity()..rotateY(angle * pi / 180),
          //             child: new Icon(Icons.airport_shuttle,
          //             textDirection: TextDirection.ltr, size: 50.0),
          //           )),
          //     ),
          //     // left: animation.value, // Animated value
          //     top: 50.0,
          //     width: animation.value, // Fixed value
          //   ),
          // ),
          // Container(
          //   child: new Positioned(
          //     child: Container(
          //       color: Colors.blue,
          //       child: new Container(
          //          margin: EdgeInsets.only(left: animation.value - padding),
          //           child: Transform(
          //             transform: Matrix4.identity()..rotateY(angle * pi / 180),
          //             child: new Icon(Icons.directions_bike,
          //             textDirection: TextDirection.ltr, size: 50.0),
          //           )),
          //     ),
          //     // left: animation.value, // Animated value
          //     top: 150.0,
          //     width: animation.value, // Fixed value
          //   ),
          // ),
          // Container(
          //   child: new Positioned(
          //     child: Container(
          //       color: Colors.yellow,
          //       child: new Container(
          //           margin: EdgeInsets.only(left: animation.value - 50.0),
          //           child: Transform.rotate(
          //             angle: angleForPlane * pi / 180,
          //             child: new Icon(Icons.airplanemode_active,
          //                 textDirection: TextDirection.ltr, size: 50.0),
          //           )),
          //     ),
          //     // left: animation.value, // Animated value
          //     top: 250.0,
          //     width: animation.value, // Fixed value
          //   ),
          // ),
          // Container(
          //   child: new Positioned(
          //     child: Container(
          //       color: Colors.pink,
          //       child: new Container(
          //           margin: EdgeInsets.only(left: animation.value - padding),
          //           child: Transform(
          //             transform: Matrix4.identity()..rotateY(angle * pi / 180),
          //             child: new Icon(Icons.directions_walk,
          //             textDirection: TextDirection.ltr, size: 50.0),
          //           )),
          //     ),
          //     // left: animation.value, // Animated value
          //     top: 350.0,
          //     width: animation.value, // Fixed value
          //   ),
          // ),
        ],
        textDirection: TextDirection.ltr,
      ),
    );
  }
}

Widget containerWithIconPlane(
    {Color bgColor,
    double padding,
    int angle,
    IconData icon,
    double top,
    Animation animation}) {
  return Container(
    child: new Positioned(
      child: Container(
        color: bgColor,
        child: new Container(
            margin: EdgeInsets.only(left: animation.value - padding),
            child: Transform.rotate(
              angle: angle * pi / 180,
              child:
                  new Icon(icon, textDirection: TextDirection.ltr, size: 50.0),
            )),
      ),
      // left: animation.value, // Animated value
      top: top,
      width: animation.value, // Fixed value
    ),
  );
}

Widget containerWithIcon(
    {Color bgColor,
    double padding,
    int angle,
    IconData icon,
    double top,
    Animation animation}) {
  return Container(
    child: new Positioned(
      child: Container(
        color: bgColor,
        child: new Container(
            margin: EdgeInsets.only(left: animation.value - padding),
            child: Transform(
              transform: Matrix4.identity()..rotateY(angle * pi / 180),
              child:
                  new Icon(icon, textDirection: TextDirection.ltr, size: 50.0),
            )),
      ),
      // left: animation.value, // Animated value
      top: top,
      width: animation.value, // Fixed value
    ),
  );
}
