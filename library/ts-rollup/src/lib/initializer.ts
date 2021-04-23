import factory, { mxGraphExportObject } from 'mxgraph';

export const mxgraph = initialize();

function initialize(): mxGraphExportObject {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  // set options globally, as it is not working when passing options to the factory (https://github.com/jgraph/mxgraph/issues/479)
  (window as any)['mxLoadResources'] = false;
  (window as any)['mxLoadStylesheets'] = false;
  // extras, otherwise we got 'Uncaught ReferenceError: assignment to undeclared variable mx...'
  (window as any)['mxForceIncludes'] = false;
  (window as any)['mxResourceExtension'] = '.txt';
  /* eslint-enable @typescript-eslint/no-explicit-any */

  return factory({});
}
