import { Button as _Button } from '@mui/base';
import * as stylex from '@stylexjs/stylex';
import type { ComponentPropsWithRef } from 'react';

const css = stylex.create({
  base: {
    fontSize: 16,
    lineHeight: 1.5,
    color: 'rgb(60,60,60)',
  },
});

export function Button(props: ComponentPropsWithRef<typeof _Button>) {
  return <_Button {...stylex.props(css.base)} {...props} />;
}
