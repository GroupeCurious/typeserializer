
import {ExcludeSymbol} from '../consts';

export function Exclude() {
  return function (target: any, propertyKey: string) {
    const list = Reflect.getMetadata(ExcludeSymbol, target) || [];
    Reflect.defineMetadata(ExcludeSymbol, list.concat({propertyKey}), target);
  };
}
