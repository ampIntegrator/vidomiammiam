import * as migration_20251203_085153 from './20251203_085153';
import * as migration_20251203_085654 from './20251203_085654';
import * as migration_20251210_100535 from './20251210_100535';
import * as migration_20251210_114703_remove_logo_slider_style from './20251210_114703_remove_logo_slider_style';
import * as migration_20250108_094900_convert_tabs_opacity from './20250108_094900_convert_tabs_opacity';

export const migrations = [
  {
    up: migration_20251203_085153.up,
    down: migration_20251203_085153.down,
    name: '20251203_085153',
  },
  {
    up: migration_20251203_085654.up,
    down: migration_20251203_085654.down,
    name: '20251203_085654',
  },
  {
    up: migration_20251210_100535.up,
    down: migration_20251210_100535.down,
    name: '20251210_100535',
  },
  {
    up: migration_20251210_114703_remove_logo_slider_style.up,
    down: migration_20251210_114703_remove_logo_slider_style.down,
    name: '20251210_114703_remove_logo_slider_style'
  },
  {
    up: migration_20250108_094900_convert_tabs_opacity.up,
    down: migration_20250108_094900_convert_tabs_opacity.down,
    name: '20250108_094900_convert_tabs_opacity'
  },
];
