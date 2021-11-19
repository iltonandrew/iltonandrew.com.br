import type { NextPage } from 'next';
import { Box, Heading } from '@dracula/dracula-ui';

const Home: NextPage = () => {
  return (
    <div className='container drac-bg-black'>
      <Box
        color='animated'
        width='xs'
        rounded='lg'
        style={{ textAlign: 'center' }}
      >
        <Heading size='2xl'>Soon 👀</Heading>
      </Box>
    </div>
  );
};
export default Home;
