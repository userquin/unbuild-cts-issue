import {defineConfig} from "tsup";
import { rmSync } from 'node:fs'

export default defineConfig(() => {
    rmSync('./dist', { recursive: true, force: true })
    return [{
        entry: [
            'src/index.ts',
        ],
        format: ['cjs', 'esm'],
        dts: true,
        splitting: true,
        clean: false,
        shims: false,
        cjsInterop: true,
        legacyOutput: true,
    }, {
        entry: [
            'src/esmonly.ts',
        ],
        format: ['esm'],
        dts: true,
        splitting: true,
        clean: false,
        shims: false,
        legacyOutput: true,
    }]
})
