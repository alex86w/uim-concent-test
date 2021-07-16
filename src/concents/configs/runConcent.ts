import { run } from 'concent';
import models from '@/ccModels';
import reduxDevToolPlugin from 'concent-plugin-redux-devtool';

// load all models by concent.run api
run(models, { plugins: [reduxDevToolPlugin] });

