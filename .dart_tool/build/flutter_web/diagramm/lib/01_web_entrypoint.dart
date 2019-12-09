import 'dart:ui' as ui;

import "01.dart" as entrypoint;

Future<void> main() async {
  if (true) {
    await ui.webOnlyInitializePlatform();
  }
  entrypoint.main();
}
