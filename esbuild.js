import * as esbuild from 'esbuild';

esbuild
  .build({
    entryPoints: ['src/main.ts'],
    bundle: true,
    minify: true,
    sourcemap: true,
    target: ['es2022'],
    outfile: 'build/bundle.min.cjs',
    platform: 'node',
  })
  .catch(() => process.exit(1));
