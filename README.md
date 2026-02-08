# React Jest Testing Demo

A practical DevOps testing assignment demonstrating React component testing using Jest and React Testing Library.

## 🚀 Quick Start

### Install Dependencies

```bash
npm install
```

### Run the Application

```bash
npm run dev
```

### Run Tests

```bash
npm test
```

### Run Tests in Watch Mode

```bash
npm run test:watch
```

### Generate Coverage Report

```bash
npm run test:coverage
```

## 📊 Test Results

✅ **8 tests passing** with **100% code coverage**

```
Test Suites: 2 passed, 2 total
Tests:       8 passed, 8 total

Coverage:
File         | % Stmts | % Branch | % Funcs | % Lines
-------------|---------|----------|---------|--------
All files    |     100 |      100 |     100 |     100
 App.jsx     |     100 |      100 |     100 |     100
 Counter.jsx |     100 |      100 |     100 |     100
```

## 📁 Project Structure

```
src/
├── App.jsx              # Main app component
├── App.test.jsx         # App component tests
├── Counter.jsx          # Counter component
├── Counter.test.jsx     # Counter component tests
└── main.jsx            # Entry point
```

## 🧪 What's Being Tested

### Counter Component Tests

- ✅ Renders initial count as 0
- ✅ Increments count when Increase button is clicked
- ✅ Decrements count when Decrease button is clicked
- ✅ Multiple increments work correctly
- ✅ Increment and decrement together

### App Component Tests

- ✅ Renders the main heading
- ✅ Renders Counter component
- ✅ Renders Increase and Decrease buttons

## 📘 Full Assignment Documentation

See [TESTING_ASSIGNMENT.md](./TESTING_ASSIGNMENT.md) for complete documentation including:

- Tools explanation
- Implementation steps
- DevOps integration
- Key concepts
- Best practices

## 🛠️ Technologies Used

- **React 19** - UI framework
- **Vite** - Build tool
- **Jest 30** - Test runner
- **React Testing Library** - Component testing
- **Babel** - JSX transpilation for tests

## 🎯 DevOps Integration

These tests can be integrated into CI/CD pipelines:

```yaml
# Example GitHub Actions workflow
- name: Run tests
  run: npm test -- --watchAll=false
- name: Check coverage
  run: npm run test:coverage
```

## 📚 Learn More

- [Jest Documentation](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/react)
- [Vite Documentation](https://vitejs.dev/)
