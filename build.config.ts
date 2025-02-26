import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig([{
    name: 'Dual',
    entries: [
        'src/index',
    ],
    clean: true,
    declaration: true,
    failOnWarn: false,
    rollup: {
        emitCJS: true,
    },
}, {
    name: 'ESM only',
    entries: [
        'src/esmonly',
    ],
    clean: false,
    declaration: 'node16',
    failOnWarn: false,
}])
