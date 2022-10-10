import React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import OtherComponent, { Options } from './OtherComponent';

test.use({ viewport: { width: 500, height: 500 } });

test('should work', async ({ mount }) => {
  const component = await mount(<OtherComponent option={Options.one}></OtherComponent>);
  await expect(component).toContainText('Hello world!');
});
