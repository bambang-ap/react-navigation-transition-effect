# Installation

Add to your project `yarn add bambang-ap/react-navigation-transition-effect#1.0.0`

# Usage

Import
```javascript

import * as TransitionEffect from 'react-navigation-transition-effect';

// TransitionEffect.fromLeft()
// TransitionEffect.fromRight(1000)
```
or you can extract as you need
```javascript

import {fromLeft, fromRight} from 'react-navigation-transition-effect';
```

these method are called in `react-navigation` options

```javascript
<RootStack.Navigator screenOptions={fromLeft()}>
	// Your screen here
</RootStack.Navigator>


<RootStack.Navigator screenOptions={{
	// other config options
	...fromLeft(),
}}>
	// Your screen here
</RootStack.Navigator>
```
or you can set each screen

```javascript
<RootStack.Navigator>
	<RootStack.Screen
		name="App"
		component={App}
		options={fromLeft()}
	/>
</RootStack.Navigator>


<RootStack.Navigator>
	<RootStack.Screen
		name="App"
		component={App}
		options={{
			// other config options
			...fromRight()
		}}
	/>
</RootStack.Navigator>
```