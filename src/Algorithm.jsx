// sortingAlgorithms.js

// Wait helper
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export const bubbleSort = async (
  arr,
  setArr,
  setCompIndices,
  setStep,
  setComparison,
  setMessage,
  speedRef,
  waitWhilePaused,
  delay = 2000
) => {
  let a = [...arr];
  const n = a.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      await waitWhilePaused();    // check for pause 
      setComparison((prev) => prev + 1);
      setCompIndices([j, j + 1]);
      setStep(`Comparing ${a[j]} and ${a[j + 1]}`);
      await sleep(delay - (speedRef.current-1)*1000);
      console.log(speedRef.current)
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        await waitWhilePaused();    // check for pause
        setCompIndices([j, j + 1]);
        setArr([...a]);
        setStep(`Swapping ${a[j]} and ${a[j + 1]}`);
      }
      else{
        setStep('No need to Swap')
      }
      // setCompIndices([]);
      await sleep(delay - (speedRef.current-1)*1000);
    }
  }
  setStep("");
  setMessage("Sorting Completed");
  setCompIndices([]);
};

export const selectionSort = async (
  arr,
  setArr,
  setCompIndices,
  setStep,
  setComparison,
  setMessage,
  speedRef,
  waitWhilePaused,
  delay = 1000
) => {
  let a = [...arr];
  const n = a.length;

  for (let i = 0; i < n; i++) {
    let min = i;
    await waitWhilePaused();    // check for pause 
    setStep(`Assume ${a[min]} at index ${min} is the minimum`);
    await sleep(delay);

    for (let j = i + 1; j < n; j++) {
      await waitWhilePaused();    // check for pause 
      setCompIndices([min, j]); // Highlight comparison
      setComparison((prev) => prev + 1);
      setStep(`Comparing ${a[min]} and ${a[j]}`);
      await sleep(delay);

      if (a[j] < a[min]) {
        min = j;
        await waitWhilePaused();    // check for pause 
        setStep(`${a[min]} is now the new minimum`);
        setCompIndices([i, min]); // Highlight current index and new min
        await sleep(delay);
      }
    }

    if (min !== i) {
      [a[i], a[min]] = [a[min], a[i]];
      await waitWhilePaused();    // check for pause 
      setArr([...a]);
      setStep(`Swapping ${a[min]} with ${a[i]}`);
      await sleep(delay);
    } else {
      await waitWhilePaused();    // check for pause 
      setStep(`No swap needed for index ${i}`);
      await sleep(delay);
    }
    await waitWhilePaused();    // check for pause 
    setCompIndices([]);
  }

  setStep('');
  setMessage('Sorting Completed ✅');
  setCompIndices([]);
};

export const insertionSort = async (
  arr,
  setArr,
  setCompIndices,
  setStep,
  setComparison,
  setMessage,
  speedRef,
  waitWhilePaused,
  delay = 1000
) => {
  let a = [...arr];
  const n = a.length;

  for (let i = 1; i < n; i++) {
    let key = a[i];
    let j = i - 1;
    await waitWhilePaused();    // check for pause 
    setStep(`Inserting ${key} at correct position`);
    await sleep(delay);

    while (j >= 0 && a[j] > key) {
      await waitWhilePaused();    // check for pause 
      setComparison((prev) => prev + 1);
      setCompIndices([j, j + 1]);
      setStep(`Comparing ${a[j]} and ${key}`);
      await sleep(delay);

      a[j + 1] = a[j];
      await waitWhilePaused();    // check for pause 
      setArr([...a]);
      setStep(`${a[j]} moved to position ${j + 1}`);
      await sleep(delay);
      j--;
    }   
    a[j + 1] = key;
    await waitWhilePaused(); 
    setArr([...a]);
    setStep(`${key} inserted at position ${j + 1}`);
    await sleep(delay);
    setCompIndices([]);
  }
  
  setStep("");
  setMessage("Sorting Completed ✅");
  setCompIndices([]);
};

export const mergeSort = async (
  arr,
  setArr,
  setCompIndices,
  setStep,
  setComparison,
  setMessage,
  speedRef,
  waitWhilePaused,
  delay = 1000
) => {
  const sleepAndSet = async (step) => {
    setStep(step);
    await sleep(delay);
  };

  async function mergeSortHelper(a, l, r) {
    if (l >= r) return;

    const mid = Math.floor((l + r) / 2);
    await waitWhilePaused(); 
    await mergeSortHelper(a, l, mid);
    await mergeSortHelper(a, mid + 1, r);

    let left = a.slice(l, mid + 1);
    let right = a.slice(mid + 1, r + 1);

    let i = 0,
      j = 0,
      k = l;

    while (i < left.length && j < right.length) {
      await waitWhilePaused(); 
      setComparison((prev) => prev + 1);
      setCompIndices([l + i, mid + 1 + j]);
      await sleepAndSet(`Merging ${left[i]} and ${right[j]}`);

      if (left[i] <= right[j]) {
        a[k++] = left[i++];
      } else {
        a[k++] = right[j++];
      }
      await waitWhilePaused(); 
      setArr([...a]);
      await sleep(delay);
    }

    while (i < left.length) {
      a[k++] = left[i++];
      await waitWhilePaused(); 
      setArr([...a]);
      await sleep(delay);
    }

    while (j < right.length) {
      a[k++] = right[j++];
      await waitWhilePaused(); 
      setArr([...a]);
      await sleep(delay);
    }
    await waitWhilePaused(); 
    setCompIndices([]);
  }

  let a = [...arr];
  await waitWhilePaused(); 
  await mergeSortHelper(a, 0, a.length - 1);
  setArr([...a]);
  setStep('');
  setMessage('Sorting Completed ✅');
  setCompIndices([]);
};


export const quickSort = async (
  arr,
  setArr,
  setCompIndices,
  setStep,
  setComparison,
  setMessage,
  speedRef,
  waitWhilePaused,
  delay = 1000
) => {
  const sleepAndSet = async (step) => {
    setStep(step);
    await sleep(delay);
  };

  async function partition(a, low, high) {
    let pivot = a[high];
    let i = low - 1;

    await sleepAndSet(`Pivot is ${pivot}`);

    for (let j = low; j < high; j++) {
      setComparison((prev) => prev + 1);
      setCompIndices([j, high]);
      await sleepAndSet(`Comparing ${a[j]} with pivot ${pivot}`);
      if (a[j] < pivot) {
        i++;
        [a[i], a[j]] = [a[j], a[i]];
        setArr([...a]);
        await sleepAndSet(`Swapped ${a[i]} and ${a[j]}`);
      }
    }
    [a[i + 1], a[high]] = [a[high], a[i + 1]];
    setArr([...a]);
    await sleepAndSet(`Placed pivot ${pivot} at correct position`);
    return i + 1;
  }

  async function quickSortHelper(a, low, high) {
    if (low < high) {
      let pi = await partition(a, low, high);
      await quickSortHelper(a, low, pi - 1);
      await quickSortHelper(a, pi + 1, high);
    }
  }

  let a = [...arr];
  await quickSortHelper(a, 0, a.length - 1);
  setArr([...a]);
  setStep('');
  setMessage('Sorting Completed ✅');
  setCompIndices([]);
};


export const heapSort = async (
  arr,
  setArr,
  setCompIndices,
  setStep,
  setComparison,
  setMessage,
  speedRef,
  waitWhilePaused,
  delay = 1000
) => {
  const n = arr.length;
  let a = [...arr];

  const heapify = async (n, i) => {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n) {
      setComparison((prev) => prev + 1);
      setCompIndices([i, left]);
      setStep(`Comparing ${a[i]} and ${a[left]}`);
      await sleep(delay);
      if (a[left] > a[largest]) largest = left;
    }

    if (right < n) {
      setComparison((prev) => prev + 1);
      setCompIndices([largest, right]);
      setStep(`Comparing ${a[largest]} and ${a[right]}`);
      await sleep(delay);
      if (a[right] > a[largest]) largest = right;
    }

    if (largest !== i) {
      [a[i], a[largest]] = [a[largest], a[i]];
      setArr([...a]);
      setStep(`Swapping ${a[i]} and ${a[largest]}`);
      await sleep(delay);
      await heapify(n, largest);
    }
  };

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    await heapify(n, i);
  }

  // Extract elements one by one
  for (let i = n - 1; i > 0; i--) {
    [a[0], a[i]] = [a[i], a[0]];
    setArr([...a]);
    setStep(`Swapping max element ${a[i]} to end`);
    await sleep(delay);
    await heapify(i, 0);
  }

  setStep('');
  setMessage('Sorting Completed ✅');
  setCompIndices([]);
};

