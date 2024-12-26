
import type {Config} from 'jest';

const config: Config = {
  bail:true,
  clearMocks: true,
  coverageProvider: "v8",
  preset:"ts-jest",
  testEnvironment:"node",
  modulePathIgnorePatterns: ["data","build","prisma"],
  testMatch:[
    "<rootDir>/src/**/*.test.ts"
  ],
  moduleNameMapper:{
    "^@/(.*)$":"<rootDir>/src/$1"
  }
};

export default config;