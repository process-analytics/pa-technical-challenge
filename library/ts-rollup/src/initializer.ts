import factory, { mxGraphExportObject } from 'mxgraph';

export const mxgraph = initialize();

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
function initialize(): mxGraphExportObject {
  // set options globally, as it is not working when passing options to the factory (https://github.com/jgraph/mxgraph/issues/479)
  // @ts-ignore
  (window as any)['mxLoadResources'] = false;
  // @ts-ignore
  (window as any)['mxLoadStylesheets'] = false;
  // extras, otherwise we got 'Uncaught ReferenceError: assignment to undeclared variable mx...'
  // @ts-ignore
  (window as any)['mxForceIncludes'] = false;
  // @ts-ignore
  (window as any)['mxResourceExtension'] = '.txt';

  return factory({});
}
