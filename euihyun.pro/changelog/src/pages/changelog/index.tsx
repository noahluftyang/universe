import '@mantine/core/styles.css';

import { readFile } from 'node:fs/promises';
import { MantineProvider, Paper, Text, Title } from '@mantine/core';
import { evaluate } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';

export default async function Page() {
  const Content = await getContent();

  return (
    <>
      <title>Changelog | 의현</title>
      <MantineProvider>
        <Paper>
          <Content
            components={{
              h1: props => <Title order={1} {...props} />,
              h2: props => <Title order={2} {...props} />,
              h3: props => <Title order={3} {...props} />,
              p: props => <Text {...props} />,
            }}
          />
        </Paper>
      </MantineProvider>
    </>
  );
}

async function getContent() {
  const file = await readFile(`${process.cwd()}/src/pages/changelog/content.mdx`, {
    encoding: 'utf-8',
  });
  const { default: Content } = await evaluate(file, {
    ...runtime,
    baseUrl: import.meta.url,
  } as any);

  return Content;
}

export function getConfig() {
  return {
    render: 'static',
  };
}
