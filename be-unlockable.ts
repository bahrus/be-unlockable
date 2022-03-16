import {define, BeDecoratedProps} from 'be-decorated/be-decorated.js';
import {BeUnlockableProps, BeUnlockableActions} from './types';
import {register} from 'be-hive/register.js';

export class BeUnlockable implements BeUnlockableActions{

}

export interface BeUnlockable extends BeUnlockableProps{}

const tagName = 'be-unlockable';

const ifWantsToBe = 'unlockable';

const upgrade = '*';

define<BeUnlockableProps & BeDecoratedProps<BeUnlockableProps, BeUnlockableActions>, BeUnlockableActions>({
    config:{
        tagName,
        propDefaults:{
            upgrade,
            ifWantsToBe,
            forceVisible: ['template'],
            primaryProp: 'query',
        }
    }
});