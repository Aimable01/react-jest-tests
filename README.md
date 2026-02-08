# React Jest Testing Demo

A practical DevOps testing assignment demonstrating React component testing using Jest, React Testing Library, and bun.

## Quick Start

### Install Dependencies

```bash
bun install
```

### Run the Application

```bash
bun run dev
```

### Run Tests

```bash
bun run test
# Or for CI/CD:
bun run test --watchAll=false
```

### Run Tests in Watch Mode

```bash
bun run test --watch
```

### Generate Coverage Report

```bash
bun run test:coverage
```

## What's Being Tested

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

## Technologies Used

- **React 19** - UI framework
- **Vite** - Build tool
- **Jest 30** - Test runner
- **React Testing Library** - Component testing
- **Babel** - JSX transpilation for tests
- **bun** - Fast JavaScript runtime & package manager (optional)

## Learn More

- [Jest Documentation](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/react)
- [Vite Documentation](https://vitejs.dev/)
- [bun Documentation](https://bun.sh/docs)
