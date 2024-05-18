import { Flex } from './flex';

export default {
  component: Flex,
};

export const Basic = {
  args: {
    children: (
      <>
        {[1, 2, 3, 4, 5].map(item => {
          return (
            <div key={item} style={{ backgroundColor: '#eee', padding: 8 }}>
              {item}
            </div>
          );
        })}
      </>
    ),
  },
};

export const AsChild = {
  render() {
    return (
      <Flex asChild={true} gap="2rem">
        <section>
          {[1, 2, 3, 4, 5].map(item => {
            return (
              <div key={item} style={{ backgroundColor: '#eee', padding: 8 }}>
                {item}
              </div>
            );
          })}
        </section>
      </Flex>
    );
  },
};
