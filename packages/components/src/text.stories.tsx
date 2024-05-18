import { Text } from './text';

export default {
  component: Text,
};

export const Basic = {
  args: {
    children: '텍스트',
  },
};

export const AsChild = {
  render() {
    return (
      <Text asChild={true}>
        <a href="https://euihyun.pro">링크</a>
      </Text>
    );
  },
};
