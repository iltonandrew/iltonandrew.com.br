import React from 'react';
import { Box, Tabs } from '@dracula/dracula-ui';
export function Header() {
  return (
    <Box className='header' color='animated'>
      <Tabs mt='none' mb='xxs'>
        <li className='drac-tab drac-tab-active drac-line-height-xs'>
          <a className='drac-tab-link drac-text' href='#'>
            sobre mim
          </a>
        </li>
        <li className='drac-tab drac-line-height-xs'>
          <a className='drac-tab-link drac-text' href='#'>
            onde trabalhei
          </a>
        </li>
        <li className='drac-tab drac-line-height-xs'>
          <a className='drac-tab-link drac-text' href='#'>
            projetos
          </a>
        </li>
        <li className='drac-tab drac-line-height-xs'>
          <a className='drac-tab-link drac-text' href='#'>
            entre em contato
          </a>
        </li>
      </Tabs>
    </Box>
  );
}
