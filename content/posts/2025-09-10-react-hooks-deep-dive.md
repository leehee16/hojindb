---
title: "React Hooks 깊게 파보기"
date: "2025-09-10"
excerpt: "useState와 useEffect를 넘어서, 커스텀 훅과 고급 패턴을 활용한 React 개발 노하우"
tags: ["React", "Hooks", "JavaScript", "Frontend"]
category: "개발"
series: "React 마스터하기"
published: true
---

# React Hooks 깊게 파보기

React Hooks가 등장한 지 벌써 몇 년이 흘렀지만, 여전히 많은 개발자들이 useState와 useEffect 정도만 사용하고 있습니다. 하지만 Hooks의 진정한 힘은 커스텀 훅과 고급 패턴을 활용할 때 발휘됩니다.

## useCallback과 useMemo의 올바른 사용법

성능 최적화를 위해 무작정 useCallback과 useMemo를 남발하는 것은 오히려 성능을 해칠 수 있습니다.

```javascript
// ❌ 불필요한 최적화
const expensiveValue = useMemo(() => props.value + 1, [props.value]);

// ✅ 실제로 비용이 큰 연산에만 사용
const expensiveValue = useMemo(() => {
  return heavyCalculation(props.data);
}, [props.data]);
```

## 커스텀 훅으로 로직 재사용하기

커스텀 훅은 컴포넌트 간 로직을 공유하는 가장 우아한 방법입니다.

```javascript
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}
```

## useReducer로 복잡한 상태 관리하기

useState로는 한계가 있는 복잡한 상태 로직을 useReducer로 깔끔하게 처리할 수 있습니다.

```javascript
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.text, completed: false }];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}
```

## 마무리

React Hooks는 단순한 상태 관리 도구가 아닙니다. 올바르게 활용하면 더 깔끔하고 재사용 가능한 컴포넌트를 만들 수 있는 강력한 도구입니다. 다음 글에서는 Context API와 Hooks를 조합한 전역 상태 관리에 대해 다뤄보겠습니다.