# NgRx Counter Application

A modern Angular application demonstrating NgRx state management with persistent storage capabilities. This project showcases a complete implementation of the NgRx pattern including Actions, Reducers, Effects, and Selectors.

## 🚀 Features

- **State Management**: Complete NgRx implementation with Actions, Reducers, Effects, and Selectors
- **Persistent Storage**: Automatic state persistence using localStorage
- **Reactive UI**: Real-time counter display with computed values
- **Modern Architecture**: Clean separation of concerns following NgRx best practices
- **Type Safety**: Full TypeScript implementation with strict typing

## 🛠️ Tech Stack

- **Framework**: Angular 16.2.0
- **State Management**: NgRx Store & Effects
- **Language**: TypeScript 5.1.3
- **Styling**: SCSS
- **Build Tool**: Angular CLI 16.2.1

## 📁 Project Structure

```
src/app/
├── store/
│   ├── counter.actions.ts    # Action creators
│   ├── counter.reducer.ts    # State reducer
│   ├── counter.effects.ts    # Side effects & persistence
│   └── counter.selector.ts   # State selectors
├── counter-controls/         # Counter control buttons
├── counter-output/           # Counter display component
└── app.component.ts          # Main application component
```

## 🎯 Core Functionality

### State Management
- **Actions**: `init`, `increment`, `decrement`, `set`
- **Reducer**: Handles state transitions with immutable updates
- **Effects**: Manages side effects including localStorage persistence
- **Selectors**: Provides derived state (count and double count)

### Features
- **Increment/Decrement**: Adjust counter by configurable values
- **State Persistence**: Automatically saves state to localStorage
- **State Restoration**: Loads previous state on application initialization
- **Computed Values**: Displays both current count and double count
- **Reactive Updates**: UI updates automatically when state changes

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ngrx
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

## 📝 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run unit tests
- `npm run watch` - Build and watch for changes

## 🏗️ Architecture Overview

### NgRx Implementation

**Actions** (`counter.actions.ts`):
```typescript
export const increment = createAction('[Counter] Increment', props<{ value: number }>());
export const decrement = createAction('[Counter] Decrement', props<{ value: number }>());
export const set = createAction('[Counter] Set', props<{ value: number }>());
export const init = createAction('[Counter] Init');
```

**Reducer** (`counter.reducer.ts`):
```typescript
export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => state + action.value),
  on(decrement, (state, action) => state - action.value),
  on(set, (state, action) => action.value)
);
```

**Effects** (`counter.effects.ts`):
- `loadCount$`: Loads persisted state from localStorage on initialization
- `saveCount$`: Saves state to localStorage on every increment/decrement

**Selectors** (`counter.selector.ts`):
```typescript
export const selectCount = (state: { counter: number }) => state.counter;
export const selectDoubleCount = createSelector(selectCount, (count) => count * 2);
```

## 🎨 UI Components

- **Counter Output**: Displays current count and computed double value
- **Counter Controls**: Provides increment and decrement buttons
- **Responsive Design**: Clean, modern styling with SCSS

## 🔧 Development

### Key Dependencies
- `@ngrx/store`: Core state management
- `@ngrx/effects`: Side effect management
- `rxjs`: Reactive programming utilities

### State Flow
1. User clicks increment/decrement button
2. Action is dispatched to the store
3. Reducer updates the state
4. Effect saves state to localStorage
5. Selectors provide updated values to components
6. UI automatically updates with new values

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Angular](https://angular.io/)
- State management powered by [NgRx](https://ngrx.io/)
- Generated with [Angular CLI](https://github.com/angular/angular-cli)
