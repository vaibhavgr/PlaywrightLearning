// @ts-check
import { defineConfig, devices, expect } from '@playwright/test';
import { TIMEOUT } from 'node:dns';
import { config, report } from 'node:process';


const Config=({
  testDir: './tests',
  reporter : 'html',
  timeout : 40*1000,
  expect :{
    timeout: 10*1000
  },
  use: {
    browserName : 'chromium',
    headless : false,
    colorScheme: 'dark',
    
  },  
});

// way to read conf. object.
module.exports=Config;

