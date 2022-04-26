import { ExecTask, TaskOfTasks } from '@flybywiresim/igniter';
import { getInstrumentsIgniterTasks } from './src/instruments/buildSrc/igniter/tasks.mjs';

export default new TaskOfTasks('a330-900', [
    new TaskOfTasks('build', [
        new TaskOfTasks('instruments', getInstrumentsIgniterTasks(), true),
        new ExecTask('failures','npm run build:failures', ['src/failures', 'headwind-aircraft-a330-900/html_ui/JS/generated/failures.js']),
        new ExecTask('behavior','node src/behavior/build.js', ['src/behavior', 'headwind-aircraft-a330-900/ModelBehaviorDefs/A32NX/generated']),
        new ExecTask('systems', [
            'cargo build --target wasm32-wasi --release',
            'wasm-opt -O3 -o headwind-aircraft-a330-900/SimObjects/Airplanes/Headwind_A330neo/panel/systems.wasm target/wasm32-wasi/release/systems.wasm',
        ], ['src/systems', 'Cargo.lock', 'Cargo.toml', 'headwind-aircraft-a330-900/SimObjects/Airplanes/Headwind_A330neo/panel/systems.wasm']),
        new ExecTask('systems-autopilot', [
            'src/fbw/build.sh',
            'wasm-opt -O1 -o headwind-aircraft-a330-900/SimObjects/Airplanes/Headwind_A330neo/panel/fbw.wasm headwind-aircraft-a330-900/SimObjects/Airplanes/Headwind_A330neo/panel/fbw.wasm'
        ], ['src/fbw', 'headwind-aircraft-a330-900/SimObjects/Airplanes/Headwind_A330neo/panel/fbw.wasm']),
        new ExecTask('systems-fadec', [
            'src/fadec/build.sh',
            'wasm-opt -O1 -o headwind-aircraft-a330-900/SimObjects/Airplanes/Headwind_A330neo/panel/fadec.wasm headwind-aircraft-a330-900/SimObjects/Airplanes/Headwind_A330neo/panel/fadec.wasm'
        ], ['src/fadec', 'headwind-aircraft-a330-900/SimObjects/Airplanes/Headwind_A330neo/panel/fadec.wasm']),
    ], true),

    new TaskOfTasks('dist', [
        new ExecTask('manifests', 'node scripts/build.js'),
        new ExecTask('metadata', 'bash scripts/metadata.sh'),
    ]),
]);
