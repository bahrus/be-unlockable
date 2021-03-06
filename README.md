# be-unlockable

be-unlockable is a "conditional" behavior.  It unlocks other behaviors, allowing them to be applied to the adorned element only when a css query is fulfilled within the ShadowDOM realm.

If applied to a template element, by default the template element is instantiated when the css query is fulfilled.

```html
<template be-unlockable="myCssQuery">
    <div>
        <h1>Hello World</h1>
    </div>
</template>
```

However, this instantiation by default rule can be disabled:

```html
<template be-unlockable='{
    "instantiate": false,
    "query": "myCssQuery",
    "bees":{
        "beActive": true,
        "beSwitched": {
            "if": "someCondition",
        }
    }
}'>
    <div>
        <h1>Hello World</h1>
    </div>
</template>
```

The template can be instantiated inside the element(s) that match the css query:

```html
<template be-unlockable='{
    "instantiateInMatches": true,
    "query": "myCssQuery",
    "bees":{
        "beActive": true,
        "beSwitched": {
            "if": "someCondition",
        }
    }
}'>
    <div>
        <h1>Hello World</h1>
    </div>
</template>
```

Can also be instantiated inside the element's shadowRoot:

"instantiateInShadowRoot": true



Functionality by no means limited to templates though.  If applied to a regular element, the "bees" become the focal point.

By default, css query is done on the ShadowDOM realm of the element the behavior adorns.

However, other options are available:

"closest", "closestOrHost", "upSearch".