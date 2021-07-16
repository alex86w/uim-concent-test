// you should declare all models here then expose it
import globalModel from './global';



const allModels = {
  ...globalModel,
  // clone counterModel to a new module named ClonedModOfCounter
};

export default allModels;
