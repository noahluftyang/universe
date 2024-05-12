import { Container, Text, Title } from '@mantine/core';
import { evaluate } from '@mdx-js/mdx';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { readFile } from 'node:fs/promises';
import duration from 'dayjs/plugin/duration';
import isToday from 'dayjs/plugin/isToday';
import * as runtime from 'react/jsx-runtime';

dayjs.locale('ko');

dayjs.extend(isToday);
dayjs.extend(duration);

export default async function Page() {
  const Content = await getContent();

  return (
    <>
      <title>Changelog | 의현</title>
      <Container>
        <Content
          components={{
            h1: props => <Title order={1} {...props} />,
            h2: props => <Title order={2} {...props} />,
            h3: props => <Title order={3} {...props} />,
            p: props => <Text {...props} />,
            DateRange: ({ from, to = new Date() }) => {
              const fromDate = dayjs(from);
              const toDate = dayjs(to);
              const difference = dayjs.duration(toDate.diff(fromDate));

              return (
                <Text>
                  {fromDate.format('YYYY.MM')} -{' '}
                  {toDate.isToday() ? '재직 중' : toDate.format('YYYY.MM')} ·{' '}
                  {difference.format(difference.months() > 0 ? 'Y년 M개월' : 'Y년')}
                </Text>
              );
            },
          }}
        />
      </Container>
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
