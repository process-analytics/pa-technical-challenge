import factory from 'mxgraph';

export const mxgraph = initialize();

function initialize() {
  // set options globally, as it is not working when passing options to the factory (https://github.com/jgraph/mxgraph/issues/479)
  window['mxLoadResources'] = false;
  window['mxLoadStylesheets'] = false;
  // extras, otherwise we got 'Uncaught ReferenceError: assignment to undeclared variable mx...'
  window['mxForceIncludes'] = false;
  window['mxResourceExtension'] = '.txt';

  return factory({});
}
